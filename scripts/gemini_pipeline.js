/**
 * DailyLife Tools - Gemini AI Automation Pipeline
 * Connects to Google Gemini API to generate daily quotes, productivity tips,
 * and automated site health insights for GitHub Actions.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('[Gemini Pipeline] Error: GEMINI_API_KEY environment variable is missing.');
  process.exit(1);
}

function callGemini(modelName, prompt) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      contents: [{
        parts: [{ text: prompt }]
      }],
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.7,
        maxOutputTokens: 3000
      }
    });

    const req = https.request({
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/${modelName}:generateContent?key=${apiKey}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const parsed = JSON.parse(data);
            const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
            resolve(text);
          } catch (e) {
            reject(new Error('Failed to parse Gemini response: ' + e.message));
          }
        } else {
          reject(new Error(`Model ${modelName} returned HTTP ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

async function requestWithFallback(prompt) {
  const models = [
    'gemini-3.5-flash-lite',
    'gemini-3.5-flash',
    'gemini-3.8-flash',
    'gemini-flash-latest'
  ];

  for (const model of models) {
    try {
      console.log(`Attempting Gemini model: ${model}...`);
      const res = await callGemini(model, prompt);
      if (res) return res;
    } catch (err) {
      console.warn(`Warning on ${model}: ${err.message}`);
    }
  }
  throw new Error('All Gemini model endpoints failed.');
}

async function runPipeline() {
  console.log('⚡ Starting Gemini AI Automation Pipeline for DailyLife Tools...');

  const dataPath = path.join(__dirname, '..', 'data', 'daily-quotes.json');
  const digestPath = path.join(__dirname, '..', 'AI_PRODUCTIVITY_DIGEST.md');

  const prompt = `You are the AI engine for DailyLife Tools (a privacy-first productivity and utility web platform).
Generate a JSON array of 10 inspiring, original, high-impact quotes focused on focus, productivity, discipline, creative engineering, and mindful execution.
Output ONLY a valid JSON array matching this exact schema:
[
  { "text": "Quote string", "author": "Author Name", "tag": "Focus" }
]`;

  let quotes = [];

  try {
    const responseText = await requestWithFallback(prompt);
    console.log('✓ Successfully received response from Gemini API.');

    try {
      const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      quotes = JSON.parse(cleanJson);
    } catch (parseErr) {
      console.warn('⚠ Could not parse AI response as JSON, using existing quotes fallback:', parseErr.message);
      if (fs.existsSync(dataPath)) {
        quotes = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
      }
    }

    if (Array.isArray(quotes) && quotes.length > 0) {
      fs.writeFileSync(dataPath, JSON.stringify(quotes, null, 2), 'utf8');
      console.log(`✓ Successfully updated ${dataPath} with ${quotes.length} AI-generated quotes.`);
    }

    // Generate AI Productivity Digest Markdown
    const today = new Date().toISOString().split('T')[0];
    const digestContent = `# ⚡ DailyLife Tools - Automated AI Digest
> Generated automatically by Google Gemini & GitHub Actions on ${today}.

## 🎯 Top Curated Quotes of the Day
${quotes.map(q => `- **"${q.text}"** — *${q.author}* \`[${q.tag}]\``).join('\n')}

---
## 🛠️ Platform Status
- **Active Utilities:** 12 client-side tools
- **Security:** 100% Client-side in-memory execution (Zero remote uploads)
- **CI/CD Pipeline:** GitHub Actions Automated Deployments & Daily AI Content Sync
`;

    fs.writeFileSync(digestPath, digestContent, 'utf8');
    console.log(`✓ Generated daily digest at ${digestPath}.`);
    console.log('🎉 Automation pipeline finished successfully!');
  } catch (err) {
    console.error('❌ Pipeline encountered an issue:', err.message);
    // Don't fail the workflow if external API has temporary issues; fallback to existing data
    if (fs.existsSync(dataPath)) {
      console.log('Falling back to local quotes cache.');
      process.exit(0);
    } else {
      process.exit(1);
    }
  }
}

runPipeline();
