/**
 * DailyLife Tools - Main Application Core (js/app.js)
 * High-performance, client-side utility suite with localStorage persistence
 */

// 12 Primary Tools Registry
const TOOLS_REGISTRY = [
  {
    id: 'pdf-compressor',
    title: 'PDF Compressor',
    category: 'document',
    badge: 'High Quality',
    desc: 'Compress and optimize PDF file size in browser without uploading to any remote server.',
    path: 'tools/pdf-compressor.html',
    icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12h4m-2-2v4"/></svg>`,
    keywords: ['pdf', 'compress', 'shrink', 'document', 'reduce pdf size', 'optimize']
  },
  {
    id: 'image-compressor',
    title: 'Image Compressor',
    category: 'document',
    badge: 'Canvas Turbo',
    desc: 'Lossless or lossy image optimization for JPG, PNG, and WebP with real-time slider comparison.',
    path: 'tools/image-compressor.html',
    icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
    keywords: ['image', 'photo', 'compress', 'optimize', 'jpg', 'png', 'webp', 'resize']
  },
  {
    id: 'qr-generator',
    title: 'QR Code Generator',
    category: 'utilities',
    badge: 'HD Vector',
    desc: 'Generate customized high-resolution QR codes for websites, WiFi, contacts, text and download PNG/SVG.',
    path: 'tools/qr-generator.html',
    icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/></svg>`,
    keywords: ['qr', 'code', 'qrcode', 'barcode', 'generator', 'wifi', 'scan', 'link']
  },
  {
    id: 'age-calculator',
    title: 'Age Calculator',
    category: 'calculators',
    badge: 'Live Ticker',
    desc: 'Calculate exact chronological age in years, months, days, hours, live seconds, and next birthday countdown.',
    path: 'tools/age-calculator.html',
    icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
    keywords: ['age', 'birthday', 'calculator', 'date', 'zodiac', 'countdown', 'time lived']
  },
  {
    id: 'word-counter',
    title: 'Word Counter',
    category: 'text',
    badge: 'Pro Analytics',
    desc: 'Real-time text statistics: word count, character count, reading time, keyword density and case transformations.',
    path: 'tools/word-counter.html',
    icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>`,
    keywords: ['word', 'counter', 'characters', 'reading time', 'case converter', 'text stats']
  },
  {
    id: 'unit-converter',
    title: 'Unit Converter',
    category: 'calculators',
    badge: '30+ Units',
    desc: 'Convert length, mass, temperature, area, volume, digital storage, speed and time instantaneously.',
    path: 'tools/unit-converter.html',
    icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>`,
    keywords: ['unit', 'converter', 'metric', 'imperial', 'length', 'weight', 'temperature', 'storage']
  },
  {
    id: 'currency-converter',
    title: 'Currency Converter',
    category: 'calculators',
    badge: 'Multi-FX',
    desc: 'Convert live foreign exchange rates across 30+ international currencies with inverse calculation & history.',
    path: 'tools/currency-converter.html',
    icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    keywords: ['currency', 'fx', 'exchange', 'money', 'dollar', 'euro', 'inr', 'forex']
  },
  {
    id: 'password-generator',
    title: 'Password Generator',
    category: 'utilities',
    badge: 'Crypto Safe',
    desc: 'Generate uncrackable, cryptographically secure passwords with custom entropy metrics and strength evaluation.',
    path: 'tools/password-generator.html',
    icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>`,
    keywords: ['password', 'security', 'generator', 'pin', 'strong', 'entropy', 'cipher']
  },
  {
    id: 'resume-builder',
    title: 'Resume Builder',
    category: 'productivity',
    badge: 'A4 Export',
    desc: 'Create modern, ATS-friendly professional resumes with live visual preview and one-click PDF/print export.',
    path: 'tools/resume-builder.html',
    icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
    keywords: ['resume', 'cv', 'builder', 'jobs', 'career', 'ats', 'print', 'pdf']
  },
  {
    id: 'study-planner',
    title: 'Study Planner & Pomodoro',
    category: 'productivity',
    badge: 'Focus Engine',
    desc: 'Maximize productivity with customizable Pomodoro interval timer, audio alerts, and task progress scheduling.',
    path: 'tools/study-planner.html',
    icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    keywords: ['study', 'planner', 'pomodoro', 'focus', 'timer', 'tasks', 'exam', 'habits']
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    category: 'productivity',
    badge: 'Interactive Charts',
    desc: 'Track income and expenses, visualize spending categories with interactive charts, and export CSV reports.',
    path: 'tools/expense-tracker.html',
    icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
    keywords: ['expense', 'budget', 'money', 'finance', 'income', 'tracker', 'charts', 'csv']
  },
  {
    id: 'ai-text-helper',
    title: 'AI Text Helper',
    category: 'text',
    badge: 'Smart NLP',
    desc: 'Paraphrase text, fix grammar & style, summarize long passages, analyze tone and extract action items.',
    path: 'tools/ai-text-helper.html',
    icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    keywords: ['ai', 'text', 'paraphrase', 'summarize', 'grammar', 'nlp', 'rewrite', 'tone']
  }
];

// Curated Quotes Database
const DAILY_QUOTES = [
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi", tag: "Focus" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman", tag: "Design" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso", tag: "Mindset" },
  { text: "Focus is a muscle. The more you practice it, the stronger it gets.", author: "DailyLife Proverb", tag: "Productivity" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt", tag: "Resilience" },
  { text: "Small deeds done are better than great deeds planned.", author: "Peter Marshall", tag: "Execution" },
  { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin", tag: "Growth" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain", tag: "Initiative" },
  { text: "Continuous improvement is better than delayed perfection.", author: "Mark Twain", tag: "Agile" },
  { text: "Make each day your masterpiece.", author: "John Wooden", tag: "Mastery" }
];

/* --------------------------------------------------------------------------
   Local Storage Management
   -------------------------------------------------------------------------- */
const Storage = {
  getFavorites() {
    try {
      return JSON.parse(localStorage.getItem('dailylife_favorites')) || [];
    } catch {
      return [];
    }
  },
  setFavorites(favs) {
    localStorage.setItem('dailylife_favorites', JSON.stringify(favs));
  },
  toggleFavorite(toolId) {
    let favs = this.getFavorites();
    if (favs.includes(toolId)) {
      favs = favs.filter(id => id !== toolId);
      showToast('Removed from favorites', 'info');
    } else {
      favs.push(toolId);
      showToast('Added to favorites ⭐', 'success');
    }
    this.setFavorites(favs);
    renderFavoritesShelf();
    updateFavoriteButtons();
    return favs.includes(toolId);
  },
  getRecents() {
    try {
      return JSON.parse(localStorage.getItem('dailylife_recents')) || [];
    } catch {
      return [];
    }
  },
  addRecent(toolId) {
    let recents = this.getRecents().filter(id => id !== toolId);
    recents.unshift(toolId);
    if (recents.length > 6) recents.pop();
    localStorage.setItem('dailylife_recents', JSON.stringify(recents));
  },
  getTasks() {
    try {
      return JSON.parse(localStorage.getItem('dailylife_tasks')) || [
        { id: '1', text: 'Compress meeting documents', done: false },
        { id: '2', text: 'Generate WiFi QR for team', done: true },
        { id: '3', text: 'Plan 4 Pomodoro focus blocks', done: false }
      ];
    } catch {
      return [];
    }
  },
  setTasks(tasks) {
    localStorage.setItem('dailylife_tasks', JSON.stringify(tasks));
  }
};

/* --------------------------------------------------------------------------
   Toast Notifications
   -------------------------------------------------------------------------- */
function showToast(message, type = 'info', duration = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#10b981"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`;
  } else if (type === 'error') {
    iconSvg = `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#ef4444"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`;
  } else {
    iconSvg = `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#6366f1"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
  }

  toast.innerHTML = `${iconSvg}<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* --------------------------------------------------------------------------
   UI Helpers & Renderers
   -------------------------------------------------------------------------- */
function getRelativePrefix() {
  // If inside /tools/ folder, prefix is '../'
  return window.location.pathname.includes('/tools/') ? '../' : '';
}

function renderToolsGrid(filterCategory = 'all', searchQuery = '') {
  const grid = document.getElementById('toolsGrid');
  if (!grid) return;

  const query = searchQuery.trim().toLowerCase();
  const filtered = TOOLS_REGISTRY.filter(tool => {
    const matchesCat = (filterCategory === 'all') || (tool.category === filterCategory);
    const matchesSearch = !query || 
      tool.title.toLowerCase().includes(query) || 
      tool.desc.toLowerCase().includes(query) || 
      tool.keywords.some(k => k.includes(query));
    return matchesCat && matchesSearch;
  });

  const favorites = Storage.getFavorites();
  const prefix = getRelativePrefix();

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem;">No tools found</h3>
        <p style="color: var(--text-muted);">Try a different keyword or browse all categories.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(tool => {
    const isFav = favorites.includes(tool.id);
    return `
      <div class="tool-card glass-card" data-id="${tool.id}" onclick="handleToolCardClick(event, '${prefix}${tool.path}', '${tool.id}')">
        <div>
          <div class="tool-card-top">
            <div class="tool-icon-wrapper">${tool.icon}</div>
            <button class="favorite-toggle-btn ${isFav ? 'favorited' : ''}" 
                    title="${isFav ? 'Remove from favorites' : 'Add to favorites'}" 
                    onclick="event.stopPropagation(); Storage.toggleFavorite('${tool.id}');">
              <svg width="22" height="22" fill="${isFav ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
              </svg>
            </button>
          </div>
          <div class="tool-title">
            ${tool.title}
            <span class="badge badge-cyan" style="font-size: 0.65rem; padding: 0.2rem 0.5rem;">${tool.badge}</span>
          </div>
          <p class="tool-desc">${tool.desc}</p>
        </div>
        <div class="tool-card-bottom">
          <span style="font-size: 0.8rem; text-transform: capitalize; color: var(--text-dim);">${tool.category}</span>
          <span class="tool-cta-link">
            Launch Tool
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    `;
  }).join('');
}

function handleToolCardClick(e, path, toolId) {
  Storage.addRecent(toolId);
  window.location.href = path;
}

function updateFavoriteButtons() {
  const favorites = Storage.getFavorites();
  document.querySelectorAll('.favorite-toggle-btn').forEach(btn => {
    const card = btn.closest('.tool-card');
    if (!card) return;
    const toolId = card.getAttribute('data-id');
    const isFav = favorites.includes(toolId);
    btn.classList.toggle('favorited', isFav);
    const svg = btn.querySelector('svg');
    if (svg) svg.setAttribute('fill', isFav ? 'currentColor' : 'none');
  });
}

function renderFavoritesShelf() {
  const shelf = document.getElementById('favoritesShelf');
  const grid = document.getElementById('favoritesGrid');
  if (!shelf || !grid) return;

  const favs = Storage.getFavorites();
  if (favs.length === 0) {
    shelf.classList.remove('has-items');
    return;
  }

  const prefix = getRelativePrefix();
  const favTools = TOOLS_REGISTRY.filter(t => favs.includes(t.id));

  shelf.classList.add('has-items');
  grid.innerHTML = favTools.map(tool => `
    <div class="tool-card glass-card" style="padding: 1.25rem;" onclick="handleToolCardClick(event, '${prefix}${tool.path}', '${tool.id}')">
      <div style="display: flex; align-items: center; gap: 0.85rem;">
        <div class="tool-icon-wrapper" style="width: 42px; height: 42px;">${tool.icon}</div>
        <div>
          <div style="font-weight: 700; font-size: 1.05rem; color: #ffffff;">${tool.title}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${tool.badge}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   Daily Hub: Quotes & Daily Planner
   -------------------------------------------------------------------------- */
function initDailyQuotes() {
  const quoteText = document.getElementById('quoteText');
  const quoteAuthor = document.getElementById('quoteAuthor');
  const quoteTag = document.getElementById('quoteTag');
  const refreshBtn = document.getElementById('refreshQuoteBtn');
  const copyBtn = document.getElementById('copyQuoteBtn');

  if (!quoteText) return;

  function loadRandomQuote() {
    const q = DAILY_QUOTES[Math.floor(Math.random() * DAILY_QUOTES.length)];
    quoteText.textContent = `“${q.text}”`;
    quoteAuthor.textContent = `— ${q.author}`;
    if (quoteTag) quoteTag.textContent = q.tag;
  }

  loadRandomQuote();

  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      loadRandomQuote();
      showToast('New inspiration loaded ✨', 'info');
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const full = `${quoteText.textContent} ${quoteAuthor.textContent}`;
      navigator.clipboard.writeText(full).then(() => {
        showToast('Quote copied to clipboard! 📋', 'success');
      });
    });
  }
}

function initDailyPlanner() {
  const listEl = document.getElementById('plannerList');
  const addForm = document.getElementById('plannerAddForm');
  const inputEl = document.getElementById('plannerInput');
  const fillEl = document.getElementById('plannerProgressFill');
  const countEl = document.getElementById('plannerProgressCount');

  if (!listEl) return;

  function renderTasks() {
    const tasks = Storage.getTasks();
    const completed = tasks.filter(t => t.done).length;
    const pct = tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0;

    if (fillEl) fillEl.style.width = `${pct}%`;
    if (countEl) countEl.textContent = `${completed}/${tasks.length} Completed (${pct}%)`;

    if (tasks.length === 0) {
      listEl.innerHTML = `<li style="color: var(--text-dim); text-align: center; padding: 1rem;">No tasks yet. Add one above!</li>`;
      return;
    }

    listEl.innerHTML = tasks.map(task => `
      <li class="planner-item ${task.done ? 'done' : ''}" data-id="${task.id}">
        <label class="planner-check">
          <input type="checkbox" ${task.done ? 'checked' : ''} style="display: none;" onchange="toggleTaskDone('${task.id}')">
          <span class="custom-checkbox">
            ${task.done ? '<svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#ffffff"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>' : ''}
          </span>
          <span class="planner-item-label">${escapeHtml(task.text)}</span>
        </label>
        <button class="delete-task-btn" title="Delete" onclick="deleteTask('${task.id}')">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
        </button>
      </li>
    `).join('');
  }

  window.toggleTaskDone = function(id) {
    const tasks = Storage.getTasks();
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.done = !task.done;
      Storage.setTasks(tasks);
      renderTasks();
    }
  };

  window.deleteTask = function(id) {
    let tasks = Storage.getTasks();
    tasks = tasks.filter(t => t.id !== id);
    Storage.setTasks(tasks);
    renderTasks();
    showToast('Task removed', 'info');
  };

  if (addForm && inputEl) {
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = inputEl.value.trim();
      if (!val) return;
      const tasks = Storage.getTasks();
      tasks.push({ id: Date.now().toString(), text: val, done: false });
      Storage.setTasks(tasks);
      inputEl.value = '';
      renderTasks();
      showToast('Task added to Daily Planner ✅', 'success');
    });
  }

  renderTasks();
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

/* --------------------------------------------------------------------------
   Search Modal & Global Search Keyboard Shortcut (Ctrl+K)
   -------------------------------------------------------------------------- */
function initSearchModal() {
  const modal = document.getElementById('searchModal');
  const trigger = document.getElementById('quickSearchBtn');
  const input = document.getElementById('modalSearchInput');
  const results = document.getElementById('modalSearchResults');

  if (!modal || !input || !results) return;

  function openModal() {
    modal.classList.add('active');
    input.value = '';
    renderModalResults('');
    input.focus();
  }

  function closeModal() {
    modal.classList.remove('active');
  }

  if (trigger) trigger.addEventListener('click', openModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.classList.contains('active')) closeModal();
      else openModal();
    }
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  input.addEventListener('input', () => {
    renderModalResults(input.value);
  });

  function renderModalResults(q) {
    const query = q.trim().toLowerCase();
    const prefix = getRelativePrefix();
    const matches = TOOLS_REGISTRY.filter(t => 
      !query || t.title.toLowerCase().includes(query) || t.desc.toLowerCase().includes(query) || t.keywords.some(k => k.includes(query))
    );

    if (matches.length === 0) {
      results.innerHTML = `<div style="text-align: center; color: var(--text-dim); padding: 2rem;">No matching tools</div>`;
      return;
    }

    results.innerHTML = matches.map(tool => `
      <div class="modal-search-item" onclick="handleToolCardClick(event, '${prefix}${tool.path}', '${tool.id}')">
        <div class="modal-search-item-left">
          <div class="tool-icon-wrapper" style="width: 36px; height: 36px; min-width: 36px;">${tool.icon}</div>
          <div>
            <div style="font-weight: 600; font-size: 0.95rem; color: #ffffff;">${tool.title}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${tool.category}</div>
          </div>
        </div>
        <span class="badge badge-cyan" style="font-size: 0.7rem;">Open ↵</span>
      </div>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isActive = drawer.classList.toggle('active');
    toggleBtn.innerHTML = isActive 
      ? `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`
      : `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>`;
  });
}

/* --------------------------------------------------------------------------
   FAQ Accordions
   -------------------------------------------------------------------------- */
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    if (q) {
      q.addEventListener('click', () => {
        const isCurrentActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isCurrentActive) item.classList.add('active');
      });
    }
  });
}

/* --------------------------------------------------------------------------
   Monetag Ad Hook Helper
   Non-intrusive container setup ready for Monetag integration
   -------------------------------------------------------------------------- */
function initMonetagSlots() {
  // Safe container listener for Monetag banners
  // Monetag script tags can be inserted directly in these placeholders
  console.log('[DailyLife Tools] Monetag ad containers initialized safely.');
}

/* --------------------------------------------------------------------------
   DOM Content Loaded Entry Point
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Render main grid on homepage
  renderToolsGrid('all', '');
  renderFavoritesShelf();

  // Search input on hero section
  const heroSearchInput = document.getElementById('heroSearchInput');
  if (heroSearchInput) {
    heroSearchInput.addEventListener('input', (e) => {
      const activeCat = document.querySelector('.cat-tab.active')?.getAttribute('data-cat') || 'all';
      renderToolsGrid(activeCat, e.target.value);
    });
  }

  // Category filter tabs
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-cat');
      const query = heroSearchInput ? heroSearchInput.value : '';
      renderToolsGrid(cat, query);
    });
  });

  initDailyQuotes();
  initDailyPlanner();
  initSearchModal();
  initMobileNav();
  initFaq();
  initMonetagSlots();
});
