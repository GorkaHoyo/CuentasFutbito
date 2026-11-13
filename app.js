// === INICIO DEL ARCHIVO ===
console.log("🚀 app.js v2.5 descargado correctamente en el navegador");

const ICONS = {
  ball: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9.5"/><path d="M12 6.5l4 3-1.5 4.7h-5L8 9.5z"/><path d="M12 2.5v4M2.7 9l3.7 1M4 17l3.5-2.5M20 17l-3.5-2.5M21.3 9l-3.7 1M9 21l1-4M15 21l-1-4"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.5 2.9-6 6.5-6s6.5 2.5 6.5 6"/><circle cx="17" cy="9" r="2.6"/><path d="M15.2 14.2c2.7.3 4.8 2.4 4.8 5.8"/></svg>`,
  euro: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M17 5.5c-1.3-1-2.7-1.5-4.3-1.5-4 0-7.2 3.6-7.2 8s3.2 8 7.2 8c1.6 0 3-.5 4.3-1.5"/><path d="M3.5 10.5h9M3.5 13.5h8"/></svg>`,
  shirts: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M8 3L3 6.5 5.5 10 8 8.5V21h8V8.5l2.5 1.5L21 6.5 16 3c-.8 1.3-2.3 2-4 2s-3.2-.7-4-2z"/></svg>`,
  gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a7.7 7.7 0 000-3l2-1.6-2-3.4-2.4.7a7.8 7.8 0 00-2.6-1.5L14 2h-4l-.4 2.7a7.8 7.8 0 00-2.6 1.5l-2.4-.7-2 3.4 2 1.6a7.7 7.7 0 000 3l-2 1.6 2 3.4 2.4-.7c.75.65 1.63 1.15 2.6 1.5L10 22h4l.4-2.7a7.8 7.8 0 002.6-1.5l2.4.7 2-3.4z"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21V9m0 0l-4 4m4-4l4 4M4 5h16"/></svg>`,
  share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="18" cy="5" r="2.3"/><circle cx="6" cy="12" r="2.3"/><circle cx="18" cy="19" r="2.3"/><path d="M8 10.8l8-4.4M8 13.2l8 4.4"/></svg>`,
  shuffle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 6h3.5L15 18h6M14.5 6H21M3 18h3.5L11 12"/><path d="M18.5 3.5L21 6l-2.5 2.5M18.5 15.5L21 18l-2.5 2.5"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
  copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`
};

const SKILL_WEIGHT = { muy_bajo:1, bajo:2, medio:3, alto:4, muy_alto:5 };
const SKILL_LABEL = { muy_bajo:'Muy bajo', bajo:'Bajo', medio:'Medio', alto:'Alto', muy_alto:'Muy alto' };
const STAMINA_WEIGHT = { bajo:1, medio:2, alto:3 };
const STAMINA_LABEL = { bajo:'Bajo', medio:'Medio', alto:'Alto' };
const POSITIONS = ['portero','defensa','medio','delantero'];
const POSITION_LABEL = { portero:'Portero', defensa:'Defensa', medio:'Medio', delantero:'Delantero', 'sin posición':'Sin posición' };
const POSITION_ABBR = { portero:'POR', defensa:'DEF', medio:'MED', delantero:'DEL', 'sin posición':'-' };
const POSITION_COLOR = { portero:'#E8A33D', defensa:'#2D8659', medio:'#2E6F9E', delantero:'#C23B7A', 'sin posición':'#8A8A8A' };

function uid(){ return Date.now().toString() + Math.floor(Math.random()*1000); }
function fmt(n){ const v = Math.round((n + Number.EPSILON) * 100) / 100; return (v > 0 ? '+' : '') + v.toFixed(2) + '€'; }
function fmtPlain(n){ return (Math.round((n+Number.EPSILON)*100)/100).toFixed(2) + '€'; }
function fmtDG(n){ return (n > 0 ? '+' : '') + n; }
function todayStr(){ return new Date().toLocaleDateString('es-ES', { weekday:'long', day:'numeric', month:'long', year:'numeric' }); }
function localDayKey(isoOrDate){ const d = isoOrDate ? new Date(isoOrDate) : new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function escapeHtml(s){ return (s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function b64EncodeUnicode(str){ return btoa(unescape(encodeURIComponent(str))); }
function b64DecodeUnicode(str){ return decodeURIComponent(escape(atob(str.replace(/\n/g,'')))); }
function timeAgo(date){ 
  if(!date) return ''; 
  const s = Math.floor((Date.now()-new Date(date).getTime())/1000); 
  if(s<60) return 'hace un momento'; 
  if(s<3600) return `hace ${Math.floor(s/60)} min`; 
  if(s<86400) return `hace ${Math.floor(s/3600)} h`; 
  return `hace ${Math.floor(s/86400)} d`; 
}

class App {
  constructor() {
    this.page = 'resumen';
    this.pageAnim = false;
    // === NUEVO: Control de Modo Espectador y PIN de Admin ===
    // Comprueba si este navegador ya metió el PIN de admin antes
    this.isAdmin = localStorage.getItem('gorkaFutbitoAdmin') === 'true';
    this.adminPin = '0808';
    this.matchFilter = 'F5';
    this.modal = null;
    this.toastMsg = null;
    this.jugFilterType = '';
    this.jugFilterRegular = '';
    this.jugSearch = '';
    this.teamsSearch = '';
    this.histSearch = '';
    this.histMatchFilter = '';
    this.histLimit = 40;
    this.movTab = 'jugador';
    this.statTab = 'clasificacion';
    this.statSortBy = 'goles'; 
    this.statSortDesc = true;
    this.statMatchFilter = '';
    
    let ghConfig = null; 
    try { ghConfig = JSON.parse(localStorage.getItem('githubSyncConfig')); } catch(e) {}
    this.githubSync = ghConfig ?? null; 
    this.githubSyncStatus = null; 
    this._pushTimer = null;
    this._isSyncing = false;
    
    this.load(); 
    this.render();
    if(this.githubSync) this.pullFromGithub(true);
  }

  load() {
    const safeArray = (key) => {
      try { const val = JSON.parse(localStorage.getItem(key)); return Array.isArray(val) ? val : []; } 
      catch(e) { return []; }
    };
    this.players = safeArray('football-players');
    this.transactions = safeArray('football-transactions');
    this.generalTransactions = safeArray('football-general-transactions');
    this.matches = safeArray('football-matches');
    this.customSeasons = safeArray('football-seasons-list');
    this.currentSeason = localStorage.getItem('football-season') || '2026/2027';
    if(!this.statSeasonFilter) this.statSeasonFilter = this.currentSeason;
    if(!this._sealSeason) this._sealSeason = this.currentSeason;
    this.teamsMatchType = localStorage.getItem('football-teams-match') || 'F5';
    try { const parsed = JSON.parse(localStorage.getItem('football-teams-present')); this.teamsPresent = new Set(Array.isArray(parsed) ? parsed : []); } catch(e) { this.teamsPresent = new Set(); }
    try { const parsed = JSON.parse(localStorage.getItem('football-teams-guests')); this.teamsGuests = Array.isArray(parsed) ? parsed : []; } catch(e) { this.teamsGuests = []; }
    try { this.teamsResult = JSON.parse(localStorage.getItem('football-teams-result')); } catch(e) { this.teamsResult = null; }
    this.teamsSwapSel = null;
  }

  getAvailableSeasons() {
    const set = new Set(this.customSeasons || []);
    if(this.currentSeason) set.add(this.currentSeason);
    this.matches.forEach(m => { if(m.season) set.add(m.season); });
    if(set.size === 0) set.add('2026/2027');
    return Array.from(set).sort().reverse();
  }

  suggestNextSeason() {
    const seasons = this.getAvailableSeasons();
    const latest = seasons[0] || this.currentSeason || '2026/2027';
    const match = latest.match(/^(\d{4})[\/\-](\d{4})$/);
    if(match) {
      const y1 = parseInt(match[1]) + 1;
      const y2 = parseInt(match[2]) + 1;
      return `${y1}/${y2}`;
    }
    return '';
  }

  handleSeasonSelect(val) {
    if(val === '__NEW__') {
      const sug = this.suggestNextSeason();
      const name = prompt('Nombre de la nueva temporada (se marcará como la temporada activa para futuros partidos):', sug);
      if(name && name.trim()) {
        const clean = name.trim();
        if(!this.customSeasons.includes(clean)) this.customSeasons.push(clean);
        this.currentSeason = clean;
        this.statSeasonFilter = clean;
        this._sealSeason = clean;
        this.save();
        this.toast(`Temporada ${clean} activada`);
      }
      this.render();
      return;
    }
    if(val === '__RENAME__') {
      const oldName = this.statSeasonFilter;
      if(!oldName || oldName === 'ALL') { this.render(); return; }
      const newName = prompt(`Nuevo nombre para la temporada "${oldName}":`, oldName);
      if(newName && newName.trim() && newName.trim() !== oldName) {
        const clean = newName.trim();
        this.customSeasons = this.customSeasons.filter(s => s !== oldName);
        if(!this.customSeasons.includes(clean)) this.customSeasons.push(clean);
        this.matches.forEach(m => { if(m.season === oldName) m.season = clean; });
        if(this.currentSeason === oldName) this.currentSeason = clean;
        if(this._sealSeason === oldName) this._sealSeason = clean;
        this.statSeasonFilter = clean;
        this.save();
        this.toast(`Renombrada a ${clean}`);
      }
      this.render();
      return;
    }
    if(val === '__DELETE__') {
      const target = this.statSeasonFilter;
      if(!target || target === 'ALL') { this.render(); return; }
      const count = this.matches.filter(m => m.season === target).length;
      const msg = count > 0
        ? `⚠️ La temporada "${target}" tiene ${count} ${count===1?'partido registrado':'partidos registrados'}.\n\n¿Seguro que quieres eliminar esta temporada y borrar sus ${count} partidos?`
        : `¿Seguro que quieres eliminar la temporada "${target}"?`;
      if(confirm(msg)) {
        this.customSeasons = this.customSeasons.filter(s => s !== target);
        if(count > 0) this.matches = this.matches.filter(m => m.season !== target);
        if(this.currentSeason === target) this.currentSeason = '';
        const remaining = this.getAvailableSeasons().filter(s => s !== target);
        const fallback = remaining[0] || '2026/2027';
        if(!this.customSeasons.includes(fallback) && !this.matches.some(m => m.season === fallback)) {
          this.customSeasons.push(fallback);
        }
        this.currentSeason = fallback;
        this.statSeasonFilter = fallback;
        this._sealSeason = fallback;
        this.save();
        this.toast(`Temporada ${target} eliminada`);
      }
      this.render();
      return;
    }
    this.statSeasonFilter = val;
    if(val !== 'ALL') {
      this.currentSeason = val;
      this._sealSeason = val;
      this.saveLocalOnly();
    }
    this.render();
  }

  saveTeamsLocalOnly() {
    localStorage.setItem('football-teams-match', this.teamsMatchType); 
    localStorage.setItem('football-teams-present', JSON.stringify(Array.from(this.teamsPresent))); 
    localStorage.setItem('football-teams-guests', JSON.stringify(this.teamsGuests)); 
    localStorage.setItem('football-teams-result', JSON.stringify(this.teamsResult)); 
  }

  saveTeamsLocal() { 
    this.saveTeamsLocalOnly();
    this.scheduleGithubPush(); 
  }

  saveLocalOnly() {
    localStorage.setItem('football-players', JSON.stringify(this.players)); 
    localStorage.setItem('football-transactions', JSON.stringify(this.transactions)); 
    localStorage.setItem('football-general-transactions', JSON.stringify(this.generalTransactions)); 
    localStorage.setItem('football-matches', JSON.stringify(this.matches));
    localStorage.setItem('football-season', this.currentSeason);
    localStorage.setItem('football-seasons-list', JSON.stringify(this.customSeasons));
  }

  save() { this.saveLocalOnly(); this.scheduleGithubPush(); }
  saveGithubConfig(cfg){ this.githubSync = cfg; localStorage.setItem('githubSyncConfig', JSON.stringify(cfg)); }
  
  clearGithubConfig(){ 
    if(!confirm('¿Desconectar la sincronización con GitHub? Tus datos locales no se borran.')) return; 
    this.githubSync = null; this.githubSyncStatus = null; localStorage.removeItem('githubSyncConfig'); this.render(); 
  }
  
  githubApiUrl(){ 
    const encPath = this.githubSync.path.split('/').map(encodeURIComponent).join('/'); 
    return `https://api.github.com/repos/${this.githubSync.owner}/${this.githubSync.repo}/contents/${encPath}`; 
  }
  
  scheduleGithubPush(){ 
    if(!this.githubSync) return; 
    clearTimeout(this._pushTimer); 
    this._pushTimer = setTimeout(()=>this.pushToGithub(), 700); 
  }

  async hardResetApp() {
    if(!confirm('¿Forzar actualización de la app? (Tus datos no se borrarán)')) return;
    try {
      if ('caches' in window) {
        const names = await caches.keys();
        await Promise.all(names.map(n => caches.delete(n)));
      }
      if ('serviceWorker' in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        for (let sw of regs) await sw.unregister();
      }
    } catch(e) {}
    window.location.href = window.location.pathname + '?reset=' + Date.now();
  }
  
  async pullFromGithub(silent){
    if(!this.githubSync || this._isSyncing) return; this._isSyncing = true; const branch = this.githubSync.branch ?? 'main'; 
    try{
      const res = await fetch(`${this.githubApiUrl()}?ref=${encodeURIComponent(branch)}&nocache=${Math.random()}`, { headers: { Authorization: `Bearer ${this.githubSync.token}`, Accept: 'application/vnd.github+json' }});
      if(res.status === 404){ this.githubSync.sha = null; this.saveGithubConfig(this.githubSync); this._isSyncing = false; await this.pushToGithub(); return; }
      if(res.status === 401 || res.status === 403) throw new Error('Token inválido');
      if(!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json(); this.githubSync.sha = data.sha; this.saveGithubConfig(this.githubSync);
      const json = JSON.parse(b64DecodeUnicode(data.content));
      this.players = json.players ?? []; this.transactions = json.transactions ?? []; this.generalTransactions = json.generalTransactions ?? []; this.matches = json.matches ?? [];
      if (Array.isArray(json.customSeasons)) this.customSeasons = json.customSeasons;
      if (json.currentSeason) { this.currentSeason = json.currentSeason; this._sealSeason = json.currentSeason; if(this.statSeasonFilter !== 'ALL') this.statSeasonFilter = json.currentSeason; }
      if (json.teamsMatchType) this.teamsMatchType = json.teamsMatchType;
      if (json.teamsPresent) this.teamsPresent = new Set(json.teamsPresent);
      if (json.teamsGuests) this.teamsGuests = json.teamsGuests;
      if (json.teamsResult !== undefined) this.teamsResult = json.teamsResult;
      this.saveLocalOnly(); this.saveTeamsLocalOnly(); this.githubSyncStatus = {ok:true, at:new Date()}; if(!silent) this.toast('Sincronizado con GitHub');
    } catch(err){ this.githubSyncStatus = {ok:false, error: err.message, at:new Date()}; if(!silent) this.toast(`No se pudo sincronizar: ${err.message}`); } finally { this._isSyncing = false; this.render(); }
  }

  async pushToGithub(){
    if(!this.githubSync) return;
    if(this._isSyncing) { clearTimeout(this._pushTimer); this._pushTimer = setTimeout(()=>this.pushToGithub(), 1000); return; }
    this._isSyncing = true; const branch = this.githubSync.branch ?? 'main'; 
    try {
      const payload = { players: this.players, transactions: this.transactions, generalTransactions: this.generalTransactions, matches: this.matches, currentSeason: this.currentSeason, customSeasons: this.customSeasons, teamsMatchType: this.teamsMatchType, teamsPresent: Array.from(this.teamsPresent), teamsGuests: this.teamsGuests, teamsResult: this.teamsResult, exportDate: new Date().toISOString(), version: '2.5' };
      const body = { message: 'Actualización app', content: b64EncodeUnicode(JSON.stringify(payload, null, 2)), branch };
      if(this.githubSync.sha) body.sha = this.githubSync.sha;
      const headers = { Authorization: `Bearer ${this.githubSync.token}`, Accept:'application/vnd.github+json', 'Content-Type':'application/json' };
      let res = await fetch(this.githubApiUrl(), { method:'PUT', headers, body: JSON.stringify(body) });
      if(res.status === 409 || res.status === 422){ 
        const fresh = await fetch(`${this.githubApiUrl()}?ref=${encodeURIComponent(branch)}&nocache=${Math.random()}`, { headers: { Authorization: `Bearer ${this.githubSync.token}`, Accept: 'application/vnd.github+json' } }); 
        if(fresh.ok){ const fd = await fresh.json(); body.sha = fd.sha; this.githubSync.sha = fd.sha; this.saveGithubConfig(this.githubSync); res = await fetch(this.githubApiUrl(), { method:'PUT', headers, body: JSON.stringify(body) }); } 
      }
      if(!res.ok) throw new Error(`HTTP ${res.status}`);
      const rd = await res.json(); this.githubSync.sha = rd.content.sha; this.saveGithubConfig(this.githubSync); this.githubSyncStatus = {ok:true, at:new Date()};
    } catch(err){ this.githubSyncStatus = {ok:false, error: err.message, at:new Date()}; } finally { this._isSyncing = false; this.render(); }
  }

  toast(msg){ this.toastMsg = msg; this.render(); setTimeout(()=>{ this.toastMsg=null; this.render(); }, 1800); }
  
  getPlayerBalance(playerId, matchType){ const player = this.players.find(p=>p.id===playerId); if(!player) return 0; let balance = 0; this.transactions.forEach(t=>{ if(!t.playerIds.includes(playerId)) return; if(player.type === 'F5/F7' && t.matchType === matchType) balance += t.amount; else if(player.type === matchType && t.matchType === matchType) balance += t.amount; }); return balance; }
  getPlayerTotalBalance(playerId){ return this.transactions.reduce((bal, t) => t.playerIds.includes(playerId) ? bal + t.amount : bal, 0); }
  getTotalPot(matchType){ return this.generalTransactions.filter(t=>t.matchType===matchType).reduce((s,t)=>s+t.amount,0); }
  getPlayersForMatch(matchType){ return this.players.filter(p=> p.type === matchType || p.type === 'F5/F7').sort((a,b)=>a.name.localeCompare(b.name)); }
  
  classify(matchType){
    const players = this.getPlayersForMatch(matchType); const credit=[], neutral=[], debt=[];
    players.forEach(p=>{ const b = this.getPlayerBalance(p.id, matchType); if(b > 0.001) credit.push({p, b}); else if(b < -0.001) debt.push({p, b}); else neutral.push({p, b}); });
    credit.sort((a,b)=>a.p.name.localeCompare(b.p.name)); neutral.sort((a,b)=>a.p.name.localeCompare(b.p.name)); debt.sort((a,b)=>a.p.name.localeCompare(b.p.name)); return {credit, neutral, debt};
  }

  copyMorososToClipboard(matchType){
    const { debt } = this.classify(matchType);
    if(debt.length === 0){ this.toast(`¡Nadie debe nada en ${matchType}! 🎉`); return; }
    const totalDebt = debt.reduce((s, x) => s + Math.abs(x.b), 0);
    const lines = debt.map(x => `• ${x.p.name}: ${fmt(x.b)}`).join('\n');
    const txt = `💸 *DEUDAS PENDIENTES ${matchType}*\n${lines}\n\n📌 *Total pendiente:* ${fmtPlain(totalDebt)}`;
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(txt).then(()=> this.toast('📋 Lista de deudas copiada'));
    } else {
      alert(txt);
    }
  }

  addPlayer(data){ this.players.push({ id: uid(), name: data.name.trim(), type: data.type, isRegular: data.isRegular, skill: data.skill || 'medio', stamina: data.stamina || 'medio', position: data.position || '', bilbaoKirolak: data.bilbaoKirolak || false, createdAt: new Date().toISOString() }); this.save(); this.closeModal(); this.toast('Añadido'); }
  updatePlayer(id, data){ const p = this.players.find(x=>x.id===id); if(!p) return; Object.assign(p, data); this.save(); this.closeModal(); this.toast('Actualizado'); }
  deletePlayer(id){ if(!confirm('¿Eliminar jugador?')) return; this.players = this.players.filter(p=>p.id!==id); this.transactions = this.transactions.map(t => { if(t.playerIds.includes(id)) { return { ...t, playerIds: t.playerIds.filter(pid=>pid!==id) }; } return t; }).filter(t => t.playerIds.length > 0); this.teamsPresent.delete(id); this.save(); this.closeModal(); this.toast('Eliminado'); }
  
  addTransaction(playerIds, amount, matchType, reason){ if(playerIds.length===0 || !amount) return; this.transactions.push({ id:uid(), playerIds, amount:parseFloat(amount), matchType, reason: reason || '', createdAt:new Date().toISOString() }); this.save(); this.closeModal(); this.toast('Registrado'); }
  updateTransaction(id, data){ const t = this.transactions.find(x=>x.id===id); if(!t) return; Object.assign(t, data); this.save(); this.closeModal(); this.toast('Actualizado'); }
  deleteTransaction(id){ if(!confirm('¿Eliminar?')) return; this.transactions = this.transactions.filter(t=>t.id!==id); this.save(); this.closeModal(); this.toast('Eliminado'); }
  addGeneralTransaction(amount, matchType, reason){ if(!amount) return; this.generalTransactions.push({ id:uid(), amount:parseFloat(amount), matchType, reason: reason || '', createdAt:new Date().toISOString() }); this.save(); this.closeModal(); this.toast('Registrado'); }
  deleteGeneralTransaction(id){ if(!confirm('¿Eliminar?')) return; this.generalTransactions = this.generalTransactions.filter(t=>t.id!==id); this.save(); this.closeModal(); this.toast('Eliminado'); }
  settleDebt(playerId, matchType, amount){ this.addTransaction([playerId], amount, matchType, 'Saldar deuda'); }

  exportBackup(){ const data = { players:this.players, transactions:this.transactions, generalTransactions:this.generalTransactions, matches:this.matches, currentSeason:this.currentSeason, customSeasons:this.customSeasons, exportDate:new Date().toISOString(), version:'2.5' }; const blob = new Blob([JSON.stringify(data,null,2)], {type:'application/json'}); this.descargarOCompartir(blob, `futbol-backup-${new Date().toISOString().slice(0,10)}.json`); this.toast('Exportado'); }
  importBackup(file){ const reader = new FileReader(); reader.onload = (e)=>{ try{ const data = JSON.parse(e.target.result); if(!confirm('¿Reemplazar datos?')) return; this.players = data.players || []; this.transactions = data.transactions || []; this.generalTransactions = data.generalTransactions || []; this.matches = data.matches || []; if(data.currentSeason) this.currentSeason = data.currentSeason; if(Array.isArray(data.customSeasons)) this.customSeasons = data.customSeasons; this.save(); this.render(); this.toast('Importado'); }catch(err){ alert('Archivo no válido.'); } }; reader.readAsText(file); }

  requiredTeamSizes(matchType){ return matchType === 'F5' ? [10,12] : [14, 16]; }
  findPresentPerson(id){ return this.players.find(x=>x.id===id) || this.teamsGuests.find(x=>x.id===id); }
  presentWithoutPosition(){ return Array.from(this.teamsPresent).map(id=>this.findPresentPerson(id)).filter(p=> p && !p.position); }
  
  generateTeams(balanced){
    const ids = Array.from(this.teamsPresent); const required = this.requiredTeamSizes(this.teamsMatchType);
    if(!required.includes(ids.length)){ this.toast(`Hacen falta ${required.join(' o ')} jugadores`); return; }
    const missingPosition = this.presentWithoutPosition(); if(missingPosition.length > 0){ alert(`Asigna posición a:\n${missingPosition.map(p=>'· '+p.name).join('\n')}`); return; }
    let pool = ids.map(id=>{ const p = this.findPresentPerson(id); if(!p) return null; return { id:p.id, name:p.name, weight: (SKILL_WEIGHT[p.skill] || 3) + (STAMINA_WEIGHT[p.stamina] || 2), position: p.position || 'sin posición' }; }).filter(Boolean);
    const teamRojo=[], teamBlanco=[]; let sumRojo=0, sumBlanco=0;
    const maxPerTeam = ids.length / 2;
    if(balanced){
      const byPos = {}; pool.forEach(p=>{ if(!byPos[p.position]) byPos[p.position] = []; byPos[p.position].push(p); });
      const posKeys = Object.keys(byPos).sort(()=>Math.random()-0.5);
      posKeys.forEach(pos=>{
        const group = byPos[pos];
        group.sort((a,b) => (b.weight + (Math.random()*0.8 - 0.4)) - (a.weight + (Math.random()*0.8 - 0.4)));
        group.forEach(pl=>{
          if(teamRojo.length >= maxPerTeam){ teamBlanco.push(pl); sumBlanco += pl.weight; }
          else if(teamBlanco.length >= maxPerTeam){ teamRojo.push(pl); sumRojo += pl.weight; }
          else if(sumRojo < sumBlanco){ teamRojo.push(pl); sumRojo += pl.weight; }
          else if(sumBlanco < sumRojo){ teamBlanco.push(pl); sumBlanco += pl.weight; }
          else if(Math.random() < 0.5){ teamRojo.push(pl); sumRojo += pl.weight; }
          else { teamBlanco.push(pl); sumBlanco += pl.weight; }
        });
      });
    } else {
      pool.sort(()=>Math.random()-0.5);
      pool.forEach(pl=>{ if(teamRojo.length < maxPerTeam){ teamRojo.push(pl); } else { teamBlanco.push(pl); } });
    }
    this.sortByPosition(teamRojo); this.sortByPosition(teamBlanco); this.teamsResult = { teamRojo, teamBlanco }; this.teamsSwapSel = null; this._sealSeason = this.currentSeason; this.saveTeamsLocal(); this.render();
  }
  
  sortByPosition(list){ const order = { portero:0, defensa:1, medio:2, delantero:3, 'sin posición':4 }; return list.sort((a,b)=> (order[a.position] ?? 4) - (order[b.position] ?? 4)); }
  
  swapTeamPlayer(team, idx){
    if(!this.teamsSwapSel){ this.teamsSwapSel = {team, idx}; this.render(); return; }
    const sel = this.teamsSwapSel; if(sel.team === team && sel.idx === idx){ this.teamsSwapSel = null; this.render(); return; }
    const a = sel.team==='rojo' ? this.teamsResult.teamRojo : this.teamsResult.teamBlanco; const b = team==='rojo' ? this.teamsResult.teamRojo : this.teamsResult.teamBlanco;
    const tmp = a[sel.idx]; a[sel.idx] = b[idx]; b[idx] = tmp; this.sortByPosition(this.teamsResult.teamRojo); this.sortByPosition(this.teamsResult.teamBlanco);
    this.teamsSwapSel = null; this.saveTeamsLocal(); this.render();
  }

  sellarPartidoOficial() {
    if(!this.teamsResult) return;
    const targetSeason = this._sealSeason || this.currentSeason;
    if(confirm(`¿Sellar como partido oficial en la temporada ${targetSeason}? Quedará pendiente de anotar resultado.`)) {
      this.currentSeason = targetSeason;
      this.statSeasonFilter = targetSeason;
      const match = { id: 'match_' + uid(), date: new Date().toISOString(), season: targetSeason, matchType: this.teamsMatchType, teamRojo: this.teamsResult.teamRojo.map(p => ({ id: p.id, name: p.name })), teamBlanco: this.teamsResult.teamBlanco.map(p => ({ id: p.id, name: p.name })), scoreRojo: 0, scoreBlanco: 0, goals: {}, status: 'pending' };
      this.matches.push(match); this.save(); this.toast(`Sellado en ${targetSeason}`); this.setPage('estadisticas'); this.statTab = 'partidos'; this.render();
    }
  }

  setStatSort(col) {
    if(this.statSortBy === col) { this.statSortDesc = !this.statSortDesc; } else { this.statSortBy = col; this.statSortDesc = (col !== 'nombre'); }
    this.render();
  }
  
  getSortIcon(col) { return this.statSortBy === col ? (this.statSortDesc ? ' ▼' : ' ▲') : ''; }

  getSortedClasificacion(season = this.statSeasonFilter, matchTypeFilter = this.statMatchFilter) {
    const stats = {}; 
    this.players.forEach(p => { stats[p.id] = { p, pj:0, pg:0, pe:0, pp:0, goles:0, pts:0, gpp:0, gf:0, gc:0, dg:0, history:[], streak:0 }; });
    const matchesToCount = this.matches
      .filter(m => m.status === 'completed' && (season === 'ALL' || m.season === season) && (!matchTypeFilter || m.matchType === matchTypeFilter))
      .sort((a,b) => new Date(a.date) - new Date(b.date));
    
    matchesToCount.forEach(m => {
      const sR = parseInt(m.scoreRojo) || 0;
      const sB = parseInt(m.scoreBlanco) || 0;
      let winner = null; if(sR > sB) winner = 'rojo'; else if(sB > sR) winner = 'blanco';
      const processTeam = (team, color, gf, gc) => { 
        team.forEach(player => { 
          if(!stats[player.id]) return; 
          stats[player.id].pj++; 
          stats[player.id].gf += gf;
          stats[player.id].gc += gc;
          stats[player.id].dg += (gf - gc);
          if(winner === null) { stats[player.id].pe++; stats[player.id].pts += 1; stats[player.id].history.push('E'); }
          else if(winner === color) { stats[player.id].pg++; stats[player.id].pts += 3; stats[player.id].history.push('V'); }
          else { stats[player.id].pp++; stats[player.id].history.push('D'); }
          if(m.goals[player.id]) stats[player.id].goles += m.goals[player.id]; 
        }); 
      };
      processTeam(m.teamRojo, 'rojo', sR, sB);
      processTeam(m.teamBlanco, 'blanco', sB, sR);
    });

    let data = Object.values(stats).filter(s => s.pj > 0).map(s => { 
      s.winrate = Math.round((s.pg / s.pj) * 100); 
      s.gpp = Math.round((s.goles / s.pj) * 100) / 100;
      let cur = 0;
      for(let i = s.history.length - 1; i >= 0; i--) { if(s.history[i] === 'V') cur++; else break; }
      s.streak = cur;
      s.last3 = s.history.slice(-3);
      return s; 
    });

    data.sort((a, b) => {
      if (this.statSortBy === 'nombre') return this.statSortDesc ? b.p.name.localeCompare(a.p.name) : a.p.name.localeCompare(b.p.name);
      let vA = a[this.statSortBy] ?? 0; let vB = b[this.statSortBy] ?? 0;
      if (vA !== vB) return this.statSortDesc ? vB - vA : vA - vB;
      if (b.goles !== a.goles) return b.goles - a.goles;
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.dg !== a.dg) return b.dg - a.dg;
      if (b.winrate !== a.winrate) return b.winrate - a.winrate;
      return b.pj - a.pj;
    });
    return data;
  }

  getPlayerRelationships(playerId, season = this.statSeasonFilter, matchTypeFilter = this.statMatchFilter) {
    const teammates = {};
    const rivals = {};
    const matchesToCount = this.matches.filter(m =>
      m.status === 'completed' &&
      (season === 'ALL' || m.season === season) &&
      (!matchTypeFilter || m.matchType === matchTypeFilter) &&
      (m.teamRojo.some(p => p.id === playerId) || m.teamBlanco.some(p => p.id === playerId))
    );

    matchesToCount.forEach(m => {
      const isRojo = m.teamRojo.some(p => p.id === playerId);
      const myTeam = isRojo ? m.teamRojo : m.teamBlanco;
      const oppTeam = isRojo ? m.teamBlanco : m.teamRojo;
      const sR = parseInt(m.scoreRojo) || 0;
      const sB = parseInt(m.scoreBlanco) || 0;
      const won = (isRojo && sR > sB) || (!isRojo && sB > sR);
      const lost = (isRojo && sR < sB) || (!isRojo && sB < sR);

      myTeam.forEach(co => {
        if (co.id === playerId) return;
        if (!teammates[co.id]) teammates[co.id] = { name: co.name, pj: 0, wins: 0 };
        teammates[co.id].pj++;
        if (won) teammates[co.id].wins++;
      });

      oppTeam.forEach(op => {
        if (!rivals[op.id]) rivals[op.id] = { name: op.name, pj: 0, losses: 0 };
        rivals[op.id].pj++;
        if (lost) rivals[op.id].losses++;
      });
    });

    const bestPartnerObj = Object.values(teammates)
      .filter(x => x.wins > 0)
      .sort((a, b) => b.wins - a.wins || (b.wins / b.pj) - (a.wins / a.pj) || b.pj - a.pj)[0];

    const worstRivalObj = Object.values(rivals)
      .filter(x => x.losses > 0)
      .sort((a, b) => b.losses - a.losses || (b.losses / b.pj) - (a.losses / a.pj) || b.pj - a.pj)[0];

    return {
      bestPartner: bestPartnerObj ? `${bestPartnerObj.name} (${bestPartnerObj.wins}V)` : 'Sin victorias aún',
      worstRival: worstRivalObj ? `${worstRivalObj.name} (${worstRivalObj.losses}D)` : 'Imbatido 🛡️'
    };
  }

  async ensureFonts(){ 
    try{ 
      await Promise.all([ 
        document.fonts.load('800 32px Outfit'), 
        document.fonts.load('700 22px Outfit'), 
        document.fonts.load('600 16px Outfit'), 
        document.fonts.load('800 28px Inter'), 
        document.fonts.load('700 18px Inter'), 
        document.fonts.load('500 15px Inter') 
      ]); 
    }catch(e){} 
  }  
  
  shareTeams(){ const r = this.teamsResult; if(!r) return; let txt = `⚽ EQUIPOS ${this.teamsMatchType}\n\n🔴 Equipo Rojo\n${r.teamRojo.map(p=>`- ${p.name}`).join('\n')}\n\n🔵 Equipo Azul\n${r.teamBlanco.map(p=>`- ${p.name}`).join('\n')}`; if(navigator.share){ navigator.share({ text: txt }).catch(()=>{}); } else { navigator.clipboard.writeText(txt).then(()=>{ this.toast('Copiado'); }); } }
  
  async exportSummaryImage(matchType){
    await this.ensureFonts();
    const bote = this.getTotalPot(matchType); const {credit, neutral, debt} = this.classify(matchType);
    const jugadoresSum = [...credit, ...debt].reduce((s,x)=>s+x.b, 0); const balance = bote + jugadoresSum;
    const DPR = 2, W = 675, H = 1200, PAD = 22;
    const canvas = document.createElement('canvas'); canvas.width = Math.ceil(W*DPR); canvas.height = Math.ceil(H*DPR);
    const ctx = canvas.getContext('2d'); ctx.scale(DPR, DPR);
    const rRect = (x,y,w,h,r) => { ctx.beginPath(); if(ctx.roundRect) ctx.roundRect(x,y,w,h,r); else ctx.rect(x,y,w,h); };

    ctx.fillStyle = '#F4F7F6'; ctx.fillRect(0,0,W,H);
    const hdrG = ctx.createLinearGradient(0,0,W,88); hdrG.addColorStop(0,'#071A14'); hdrG.addColorStop(1,'#11422E');
    ctx.fillStyle = hdrG; ctx.fillRect(0,0,W,88);
    ctx.fillStyle = '#FFC82C'; ctx.fillRect(0,84,W,4);

    ctx.textAlign = 'left'; ctx.fillStyle = '#FFFFFF'; ctx.font = '800 28px Outfit'; ctx.fillText('⚽ CUENTAS F5·F7', PAD, 42);
    ctx.font = '600 15px Outfit'; ctx.fillStyle = '#94B8A9'; ctx.fillText(`RESUMEN OFICIAL · ${matchType}`, PAD, 66);
    const dateStr = new Date().toLocaleDateString('es-ES', {day:'numeric', month:'long', year:'numeric'});
    ctx.textAlign = 'right'; ctx.font = '600 13px Inter'; ctx.fillStyle = '#A3B8B0'; ctx.fillText(dateStr, W-PAD, 66);

    let y = 102;
    rRect(PAD, y, W-PAD*2, 86, 16); ctx.fillStyle = '#0B291E'; ctx.fill();
    const cellW = (W-PAD*2)/3; const cls = v => v>0.001 ? '#2ED573' : (v<-0.001 ? '#FF6B6B' : '#FFFFFF');
    const stats = [ {label:'BOTE', txt:fmtPlain(bote), value:bote}, {label:'JUGADORES', txt:fmt(jugadoresSum), value:jugadoresSum}, {label:'BALANCE TOTAL', txt:fmtPlain(balance), value:balance} ];
    ctx.textAlign = 'center';
    stats.forEach((s,i)=>{ 
      const cx = PAD + cellW*i + cellW/2; 
      if(i>0){ ctx.fillStyle = 'rgba(255,255,255,0.08)'; ctx.fillRect(PAD + cellW*i, y+14, 1, 58); }
      ctx.font = '700 11px Outfit'; ctx.fillStyle = '#94B8A9'; ctx.fillText(s.label, cx, y+30); 
      ctx.font = '800 25px Inter'; ctx.fillStyle = cls(s.value); ctx.fillText(s.txt, cx, y+64); 
    });

    ctx.textAlign = 'left'; y += 106;
    const available = H - y - 70; const debtAlloc = Math.round(available * 0.56); const creditAlloc = available - debtAlloc;
    const drawList = (title, color, items, alloc, minRowH, maxRowH, maxCols, nameFontPx, amtFontPx) => {
      ctx.font = '800 15px Outfit'; ctx.fillStyle = color;
      ctx.beginPath(); ctx.arc(PAD+6, y+11, 5, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = '#111A16'; ctx.fillText(title.toUpperCase(), PAD+18, y+16);
      ctx.font = '700 12px Inter'; ctx.fillStyle = '#82938B'; ctx.textAlign = 'right'; ctx.fillText(`${items.length}`, W-PAD, y+16);
      ctx.textAlign = 'left'; y += 26;
      if(items.length === 0){ ctx.font = '500 14px Inter'; ctx.fillStyle = '#82938B'; ctx.fillText('Ningún jugador en esta lista 🎉', PAD, y+22); y += minRowH; return; }
      const fitRows = Math.ceil(items.length/maxCols); const rowH = Math.max(24, Math.min(maxRowH, alloc/fitRows)); const colW = (W-PAD*2-((maxCols-1)*12))/maxCols;
      for(let i=0;i<items.length;i++){
        const col = Math.floor(i/fitRows); const rx = PAD + col*(colW+12); const ry = y + (i%fitRows)*rowH;
        rRect(rx, ry+2, colW, rowH-7, 10); ctx.fillStyle = '#FFFFFF'; ctx.fill();
        ctx.fillStyle = color; ctx.fillRect(rx, ry+5, 5, rowH-13);
        ctx.font = `700 ${Math.min(nameFontPx, rowH*0.44)}px Outfit`; ctx.fillStyle = '#111A16'; ctx.fillText(items[i].p.name.substring(0,18), rx+14, ry+2+(rowH-7)/2+5);
        ctx.font = `800 ${Math.min(amtFontPx, rowH*0.44)}px Inter`; ctx.textAlign = 'right'; ctx.fillStyle = items[i].b>0.001 ? '#1EA861' : (items[i].b<-0.001 ? '#FF3B30' : '#82938B'); ctx.fillText(fmt(items[i].b), rx+colW-12, ry+2+(rowH-7)/2+5); ctx.textAlign = 'left';
      }
      y += fitRows*rowH;
    };
    drawList('Con deuda pendiente', '#FF3B30', debt, debtAlloc, 30, 42, 2, 16, 16); y += 14; 
    drawList('Con saldo a favor', '#1EA861', credit, creditAlloc, 24, 34, 3, 13, 13); y += 14;
    rRect(PAD, y, W-PAD*2, 38, 10); ctx.fillStyle = '#FFFFFF'; ctx.fill();
    ctx.fillStyle = '#1EA861'; ctx.fillRect(PAD, y+6, 5, 26);
    ctx.font = '700 14px Outfit'; ctx.fillStyle = '#111A16'; ctx.fillText(`✅  ${neutral.length} ${neutral.length === 1 ? 'jugador' : 'jugadores'} al día (0.00€)`, PAD+16, y+24);
    canvas.toBlob((blob)=>{ this.descargarOCompartir(blob, `cuentas-${matchType}.png`); }, 'image/png');
  }

  async exportTeamsImage(){
    const r = this.teamsResult; if(!r) return; await this.ensureFonts();
    const DPR = 2, W = 820, PAD = 28, rows = Math.max(r.teamRojo.length, r.teamBlanco.length), cardH = 68 + rows*46 + 20, H = 110 + cardH + 36;
    const canvas = document.createElement('canvas'); canvas.width = Math.ceil(W*DPR); canvas.height = Math.ceil(H*DPR);
    const ctx = canvas.getContext('2d'); ctx.scale(DPR, DPR);
    const rRect = (x,y,w,h,rad) => { ctx.beginPath(); if(ctx.roundRect) ctx.roundRect(x,y,w,h,rad); else ctx.rect(x,y,w,h); };

    ctx.fillStyle = '#F4F7F6'; ctx.fillRect(0,0,W,H);
    const hdrG = ctx.createLinearGradient(0,0,W,86); hdrG.addColorStop(0,'#071A14'); hdrG.addColorStop(1,'#11422E');
    ctx.fillStyle = hdrG; ctx.fillRect(0,0,W,86); ctx.fillStyle = '#FFC82C'; ctx.fillRect(0,82,W,4);

    ctx.textAlign = 'left'; ctx.font = '800 28px Outfit'; ctx.fillStyle = '#FFFFFF'; ctx.fillText(`⚽ CONVOCATORIA OFICIAL · ${this.teamsMatchType}`, PAD, 44);
    ctx.font = '500 14px Inter'; ctx.fillStyle = '#94B8A9'; ctx.fillText(todayStr(), PAD, 68);

    const colW = (W - PAD*2 - 24)/2;
    const avg = list => list.length ? (list.reduce((s,p)=>s+p.weight,0)/list.length).toFixed(1) : '0.0';
    const drawTeamCard = (label, list, x, headerBg, borderColor) => {
      rRect(x, 106, colW, cardH, 16); ctx.fillStyle = '#FFFFFF'; ctx.fill();
      ctx.lineWidth = 2; ctx.strokeStyle = borderColor; ctx.stroke();
      rRect(x, 106, colW, 54, [16,16,0,0]); ctx.fillStyle = headerBg; ctx.fill();
      ctx.textAlign = 'left'; ctx.font = '800 20px Outfit'; ctx.fillStyle = '#FFFFFF'; ctx.fillText(label, x+18, 140);
      ctx.textAlign = 'right'; ctx.font = '700 13px Inter'; ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.fillText(`Media ★ ${avg(list)}`, x+colW-16, 139);
      let ry = 172;
      list.forEach((p, idx)=>{
        if(idx > 0){ ctx.fillStyle = '#E2EAE6'; ctx.fillRect(x+14, ry-6, colW-28, 1); }
        const bcol = POSITION_COLOR[p.position] || '#8A8A8A'; const babbr = POSITION_ABBR[p.position] || '-';
        rRect(x+16, ry, 54, 28, 8); ctx.fillStyle = bcol; ctx.fill();
        ctx.textAlign = 'center'; ctx.font = '800 12px Outfit'; ctx.fillStyle = '#FFFFFF'; ctx.fillText(babbr, x+16+27, ry+19);
        ctx.textAlign = 'left'; ctx.font = '700 17px Outfit'; ctx.fillStyle = '#111A16'; ctx.fillText(p.name.substring(0,18), x+82, ry+20);
        ctx.textAlign = 'right'; ctx.font = '700 13px Inter'; ctx.fillStyle = '#82938B'; ctx.fillText(`★ ${p.weight}`, x+colW-16, ry+19);
        ry += 46;
      });
    };
    drawTeamCard('🔴 EQUIPO ROJO', r.teamRojo, PAD, '#D63031', '#D63031'); 
    drawTeamCard('🔵 EQUIPO AZUL', r.teamBlanco, PAD+colW+24, '#1E3A8A', '#1E3A8A');
    canvas.toBlob((blob)=>{ this.descargarOCompartir(blob, `equipos-${this.teamsMatchType}.png`); }, 'image/png');
  }

  async exportMatchResultImage(matchId){
    const m = this.matches.find(x => x.id === matchId);
    if(!m) return;
    await this.ensureFonts();
    const rows = Math.max(m.teamRojo.length, m.teamBlanco.length);
    const DPR = 2, W = 820, PAD = 28, cardH = 62 + rows * 44 + 18, H = 226 + cardH + 34;
    const canvas = document.createElement('canvas'); canvas.width = Math.ceil(W*DPR); canvas.height = Math.ceil(H*DPR);
    const ctx = canvas.getContext('2d'); ctx.scale(DPR, DPR);
    const rRect = (x,y,w,h,r) => { ctx.beginPath(); if(ctx.roundRect) ctx.roundRect(x,y,w,h,r); else ctx.rect(x,y,w,h); };

    ctx.fillStyle = '#F4F7F6'; ctx.fillRect(0,0,W,H);
    const hdrG = ctx.createLinearGradient(0,0,W,88); hdrG.addColorStop(0,'#071A14'); hdrG.addColorStop(1,'#11422E');
    ctx.fillStyle = hdrG; ctx.fillRect(0,0,W,88);
    ctx.fillStyle = '#FFC82C'; ctx.fillRect(0,84,W,4);

    const fechaStr = new Date(m.date).toLocaleDateString('es-ES', {weekday:'long', day:'numeric', month:'long', year:'numeric'});
    ctx.textAlign = 'left'; ctx.fillStyle = '#FFFFFF'; ctx.font = '800 28px Outfit';
    ctx.fillText(`⚽ ACTA OFICIAL · ${m.matchType}`, PAD, 44);
    ctx.font = '600 14px Outfit'; ctx.fillStyle = '#FFC82C';
    ctx.fillText(`TEMPORADA ${m.season || this.currentSeason}  ·  ${fechaStr.toUpperCase()}`, PAD, 68);

    // Marcador central gigante
    rRect(PAD, 104, W-PAD*2, 102, 18); ctx.fillStyle = '#0B291E'; ctx.fill();
    const sR = parseInt(m.scoreRojo) || 0;
    const sB = parseInt(m.scoreBlanco) || 0;
    const winTxt = sR > sB ? '🏆 VICTORIA EQUIPO ROJO' : (sB > sR ? '🏆 VICTORIA EQUIPO AZUL' : '🤝 EMPATE');

    ctx.textAlign = 'center';
    ctx.font = '800 20px Outfit'; ctx.fillStyle = '#FF6B6B'; ctx.fillText('🔴 EQUIPO ROJO', PAD + 160, 152);
    ctx.font = '800 20px Outfit'; ctx.fillStyle = '#60A5FA'; ctx.fillText('🔵 EQUIPO AZUL', W - PAD - 160, 152);

    rRect(W/2 - 115, 116, 230, 56, 14); ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fill();
    ctx.font = '800 44px Inter'; ctx.fillStyle = '#FFFFFF';
    ctx.fillText(`${sR}  -  ${sB}`, W/2, 160);

    ctx.font = '700 12px Outfit'; ctx.fillStyle = '#FFC82C';
    ctx.fillText(winTxt, W/2, 194);

    // Tarjetas de equipos y goleadores
    const colW = (W - PAD*2 - 24)/2;
    const drawRoster = (label, list, totalScore, x, headerBg, borderColor) => {
      rRect(x, 224, colW, cardH, 16); ctx.fillStyle = '#FFFFFF'; ctx.fill();
      ctx.lineWidth = 2; ctx.strokeStyle = borderColor; ctx.stroke();
      rRect(x, 224, colW, 50, [16,16,0,0]); ctx.fillStyle = headerBg; ctx.fill();
      ctx.textAlign = 'left'; ctx.font = '800 18px Outfit'; ctx.fillStyle = '#FFFFFF'; ctx.fillText(label, x+18, 256);

      const sumAssigned = list.reduce((s, p) => s + (m.goals[p.id] || 0), 0);
      const unassigned = Math.max(0, totalScore - sumAssigned);
      if(unassigned > 0){
        ctx.textAlign = 'right'; ctx.font = '700 12px Inter'; ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.fillText(`+${unassigned} p.p./s.a.`, x+colW-14, 255);
      }

      let ry = 286;
      list.forEach((p, idx) => {
        if(idx > 0){ ctx.fillStyle = '#E2EAE6'; ctx.fillRect(x+14, ry-6, colW-28, 1); }
        const g = m.goals[p.id] || 0;
        ctx.textAlign = 'left';
        ctx.font = g > 0 ? '800 16px Outfit' : '600 16px Outfit';
        ctx.fillStyle = g > 0 ? '#071A14' : '#4B5750';
        ctx.fillText(p.name.substring(0, 20), x+18, ry+20);

        if(g > 0){
          rRect(x+colW-86, ry+2, 70, 26, 13); ctx.fillStyle = '#E8F7EE'; ctx.fill();
          ctx.textAlign = 'center'; ctx.font = '800 13px Inter'; ctx.fillStyle = '#1EA861';
          ctx.fillText(g === 1 ? '⚽ 1' : `⚽ x${g}`, x+colW-51, ry+20);
        }
        ry += 44;
      });
    };

    drawRoster('PLANTILLA ROJO', m.teamRojo, sR, PAD, '#D63031', '#D63031');
    drawRoster('PLANTILLA AZUL', m.teamBlanco, sB, PAD+colW+24, '#1E3A8A', '#1E3A8A');

    canvas.toBlob((blob)=>{ this.descargarOCompartir(blob, `resultado-${m.matchType}-${m.date.slice(0,10)}.png`); }, 'image/png');
  }

  async exportClasificacionImage(){
    await this.ensureFonts(); 
    const seasonView = this.statSeasonFilter || this.currentSeason;
    const clasificacion = this.getSortedClasificacion(seasonView);
    if(!clasificacion.length) { this.toast('No hay datos para exportar'); return; }
    const DPR = 2, W = 940, PAD = 28, rowH = 48, headerH = 260, H = headerH + (clasificacion.length * rowH) + 46;
    const canvas = document.createElement('canvas'); canvas.width = Math.ceil(W*DPR); canvas.height = Math.ceil(H*DPR);
    const ctx = canvas.getContext('2d'); ctx.scale(DPR, DPR);
    const rRect = (x,y,w,h,r) => { ctx.beginPath(); if(ctx.roundRect) ctx.roundRect(x,y,w,h,r); else ctx.rect(x,y,w,h); };

    ctx.fillStyle = '#F4F7F6'; ctx.fillRect(0,0,W,H);
    const hdrG = ctx.createLinearGradient(0,0,W,92); hdrG.addColorStop(0,'#071A14'); hdrG.addColorStop(1,'#11422E');
    ctx.fillStyle = hdrG; ctx.fillRect(0,0,W,92); ctx.fillStyle = '#FFC82C'; ctx.fillRect(0,88,W,4);

    ctx.textAlign = 'left'; ctx.fillStyle = '#FFFFFF'; ctx.font = '800 30px Outfit'; 
    ctx.fillText(`🏆 CLASIFICACIÓN ${this.statMatchFilter ? this.statMatchFilter : 'GENERAL'}`, PAD, 46);
    ctx.font = '600 15px Outfit'; ctx.fillStyle = '#FFC82C'; 
    ctx.fillText(seasonView === 'ALL' ? '🌟 HISTÓRICO TOTAL (TODAS LAS TEMPORADAS)' : `TEMPORADA ${seasonView}`, PAD, 72);
    ctx.textAlign = 'right'; ctx.font = '600 14px Inter'; ctx.fillStyle = '#A3B8B0'; ctx.fillText(new Date().toLocaleDateString('es-ES', {day:'numeric', month:'long', year:'numeric'}), W-PAD, 72);

    const pichichi = [...clasificacion].sort((a,b) => b.goles - a.goles || a.pj - b.pj)[0];
    const mvp = [...clasificacion].sort((a,b) => b.pts - a.pts || b.dg - a.dg)[0];
    const muro = [...clasificacion].sort((a,b) => b.dg - a.dg || b.pts - a.pts)[0];
    const killer = [...clasificacion].sort((a,b) => b.gpp - a.gpp || b.goles - a.goles)[0];
    const cards = [
      { lbl:'⚽ PICHICHI', name:pichichi.p.name, val:`${pichichi.goles}G`, col:'#1EA861' },
      { lbl:'🏆 LÍDER PUNTOS', name:mvp.p.name, val:`${mvp.pts}p`, col:'#E8A33D' },
      { lbl:'🛡️ MEJOR BALANCE', name:muro.p.name, val:fmtDG(muro.dg), col:muro.dg>=0?'#1EA861':'#FF3B30' },
      { lbl:'🎯 MEDIA G/P', name:killer.p.name, val:killer.gpp.toFixed(2), col:'#2E6F9E' }
    ];
    const cW = (W - PAD*2 - 36)/4;
    cards.forEach((c, idx) => {
      const cx = PAD + idx*(cW+12), cy = 110;
      rRect(cx, cy, cW, 74, 14); ctx.fillStyle = '#FFFFFF'; ctx.fill();
      ctx.fillStyle = c.col; ctx.fillRect(cx, cy+10, 5, 54);
      ctx.textAlign = 'left'; ctx.font = '700 11px Outfit'; ctx.fillStyle = '#82938B'; ctx.fillText(c.lbl, cx+14, cy+24);
      ctx.font = '800 17px Outfit'; ctx.fillStyle = '#111A16'; ctx.fillText(c.name.substring(0,13), cx+14, cy+52);
      ctx.textAlign = 'right'; ctx.font = '800 22px Inter'; ctx.fillStyle = c.col; ctx.fillText(c.val, cx+cW-12, cy+52);
    });

    let y = 212;
    rRect(PAD, y, W-PAD*2, 38, [12,12,0,0]); ctx.fillStyle = '#0B291E'; ctx.fill();
    ctx.textAlign = 'left'; ctx.fillStyle = '#94B8A9'; ctx.font = '700 12px Outfit';
    ctx.fillText('POS', PAD+14, y+24); ctx.fillText('JUGADOR', PAD+62, y+24);
    ctx.textAlign = 'center';
    ctx.fillText('RACHA', W-510, y+24); ctx.fillText('PTS', W-440, y+24); ctx.fillText('PJ', W-385, y+24);
    ctx.fillText('V - E - D', W-310, y+24); ctx.fillText('GOLES', W-225, y+24); ctx.fillText('+/- (GF-GC)', W-140, y+24); ctx.fillText('G/P', W-68, y+24); ctx.fillText('% WIN', W-20, y+24);
    y += 38;

    clasificacion.forEach((s, i) => {
      ctx.fillStyle = i % 2 === 0 ? '#FFFFFF' : '#F8FAF9'; ctx.fillRect(PAD, y, W-PAD*2, rowH);
      ctx.fillStyle = '#E2EAE6'; ctx.fillRect(PAD, y+rowH-1, W-PAD*2, 1);

      if(i < 3) {
        const mCols = ['#FFC82C', '#B4C2BC', '#D99B66'];
        rRect(PAD+12, y+11, 32, 26, 8); ctx.fillStyle = mCols[i]; ctx.fill();
        ctx.textAlign = 'center'; ctx.fillStyle = '#071A14'; ctx.font = '800 14px Inter'; ctx.fillText(`${i+1}`, PAD+28, y+29);
      } else {
        ctx.textAlign = 'center'; ctx.fillStyle = '#82938B'; ctx.font = '700 15px Inter'; ctx.fillText(`${i+1}.`, PAD+28, y+29);
      }

      ctx.textAlign = 'left'; ctx.fillStyle = '#111A16'; ctx.font = '700 16px Outfit'; ctx.fillText(s.p.name.substring(0,20), PAD+62, y+30);

      const dots = s.last3 || [];
      const startX = (W-510) - ((dots.length-1)*7);
      dots.forEach((r, di) => {
        ctx.beginPath(); ctx.arc(startX + di*14, y+25, 5, 0, Math.PI*2);
        ctx.fillStyle = r==='V' ? '#2ED573' : (r==='E' ? '#FFC82C' : '#FF3B30'); ctx.fill();
      });

      ctx.textAlign = 'center';
      ctx.font = '800 16px Inter'; ctx.fillStyle = '#071A14'; ctx.fillText(s.pts, W-440, y+30);
      ctx.font = '600 15px Inter'; ctx.fillStyle = '#111A16'; ctx.fillText(s.pj, W-385, y+30);
      ctx.font = '600 13px Inter'; ctx.fillStyle = '#6E7C73'; ctx.fillText(`${s.pg}V-${s.pe}E-${s.pp}D`, W-310, y+30);
      ctx.font = '800 16px Inter'; ctx.fillStyle = '#111A16'; ctx.fillText(s.goles, W-225, y+30);
      
      const dgCol = s.dg > 0 ? '#1EA861' : (s.dg < 0 ? '#FF3B30' : '#82938B');
      ctx.font = '800 15px Inter'; ctx.fillStyle = dgCol; ctx.fillText(`${fmtDG(s.dg)} (${s.gf}-${s.gc})`, W-140, y+30);

      ctx.font = '600 14px Inter'; ctx.fillStyle = '#82938B'; ctx.fillText(s.gpp.toFixed(2), W-68, y+30);
      ctx.font = '800 15px Inter'; ctx.fillStyle = '#071A14'; ctx.fillText(`${s.winrate}%`, W-20, y+30);
      y += rowH;
    });
    const fileTag = seasonView === 'ALL' ? 'historico' : seasonView.replace('/','-');
    canvas.toBlob((blob)=>{ this.descargarOCompartir(blob, `clasificacion-${fileTag}.png`); }, 'image/png');
  }

  async exportCromoImage(playerId){
    const seasonView = this.statSeasonFilter || this.currentSeason;
    const s = this.getSortedClasificacion(seasonView, this.statMatchFilter).find(x => x.p.id === playerId); if(!s) return; await this.ensureFonts();
    const rel = this.getPlayerRelationships(playerId, seasonView, this.statMatchFilter);
    const DPR = 2, W = 420, H = 625;
    const canvas = document.createElement('canvas'); canvas.width = Math.ceil(W*DPR); canvas.height = Math.ceil(H*DPR);
    const ctx = canvas.getContext('2d'); ctx.scale(DPR, DPR);
    const rRect = (x,y,w,h,r) => { ctx.beginPath(); if(ctx.roundRect) ctx.roundRect(x,y,w,h,r); else ctx.rect(x,y,w,h); };

    const gradient = ctx.createLinearGradient(0,0,0,H); gradient.addColorStop(0, '#0F3D2E'); gradient.addColorStop(1, '#05130E');
    ctx.fillStyle = gradient; ctx.fillRect(0,0,W,H);
    rRect(10,10,W-20,H-20,18); ctx.strokeStyle = '#FFC82C'; ctx.lineWidth = 3; ctx.stroke();

    ctx.textAlign = 'center'; ctx.fillStyle = '#FFC82C'; ctx.font = '800 34px Outfit'; ctx.fillText(s.p.name.toUpperCase(), W/2, 62);
    const posName = POSITION_LABEL[s.p.position] || 'SIN POSICIÓN';
    const seasonLbl = (seasonView === 'ALL' ? 'HISTÓRICO' : seasonView) + (this.statMatchFilter ? ` · ${this.statMatchFilter}` : '');
    rRect(W/2 - 140, 76, 280, 30, 15); ctx.fillStyle = 'rgba(255,255,255,0.1)'; ctx.fill();
    ctx.fillStyle = '#FFFFFF'; ctx.font = '700 13px Outfit'; ctx.fillText(`${posName.toUpperCase()} · ${s.pts} PTS (${seasonLbl})`, W/2, 96);

    ctx.fillStyle = 'rgba(255,200,44,0.08)'; ctx.beginPath(); ctx.arc(W/2, 208, 78, 0, Math.PI*2); ctx.fill();
    ctx.strokeStyle = 'rgba(255,200,44,0.35)'; ctx.lineWidth = 2; ctx.stroke();
    ctx.font = '800 60px Inter'; ctx.fillStyle = '#FFC82C'; ctx.fillText(`${s.winrate}%`, W/2, 224);
    ctx.font = '700 13px Outfit'; ctx.fillStyle = '#94B8A9'; ctx.fillText(`VICTORIAS (${s.pg}V-${s.pe}E-${s.pp}D)`, W/2, 252);

    const drawStatBox = (lbl, val, x, y, w=112, valCol='#FFFFFF') => { 
      rRect(x-w/2, y-30, w, 60, 12); ctx.fillStyle = 'rgba(0,0,0,0.4)'; ctx.fill();
      ctx.fillStyle = valCol; ctx.font = '800 20px Inter'; ctx.fillText(val, x, y-2); 
      ctx.fillStyle = '#94B8A9'; ctx.font = '700 11px Outfit'; ctx.fillText(lbl, x, y+18); 
    };
    const rachaStr = s.streak > 0 ? ('🔥 +' + s.streak + 'V') : (s.last3.join('-') || '-');
    const dgCol = s.dg > 0 ? '#2ED573' : (s.dg < 0 ? '#FF6B6B' : '#FFFFFF');
    drawStatBox('PARTIDOS', s.pj, W/4 - 4, 360, 106); 
    drawStatBox('GOLES (G/P)', `${s.goles} (${s.gpp.toFixed(1)})`, W/2, 360, 118); 
    drawStatBox('BALANCE +/-', fmtDG(s.dg), (W/4)*3 + 4, 360, 106, dgCol);
    drawStatBox('GOLES EQ. (GF-GC)', `${s.gf} - ${s.gc}`, W/3 - 6, 440, 146); 
    drawStatBox('RACHA ACT.', rachaStr, (W/3)*2 + 6, 440, 146);

    // Mejor Socio y Bestia Negra en el Cromo PNG
    rRect(32, 490, 172, 66, 12); ctx.fillStyle = 'rgba(0,0,0,0.45)'; ctx.fill();
    ctx.textAlign = 'left'; ctx.font = '700 11px Outfit'; ctx.fillStyle = '#94B8A9'; ctx.fillText('🤝 MEJOR SOCIO', 46, 512);
    ctx.font = '800 15px Outfit'; ctx.fillStyle = '#2ED573'; ctx.fillText(rel.bestPartner.substring(0, 18), 46, 538);

    rRect(216, 490, 172, 66, 12); ctx.fillStyle = 'rgba(0,0,0,0.45)'; ctx.fill();
    ctx.textAlign = 'left'; ctx.font = '700 11px Outfit'; ctx.fillStyle = '#94B8A9'; ctx.fillText('😈 BESTIA NEGRA', 230, 512);
    ctx.font = '800 15px Outfit'; ctx.fillStyle = '#FF6B6B'; ctx.fillText(rel.worstRival.substring(0, 18), 230, 538);

    canvas.toBlob((blob)=>{ this.descargarOCompartir(blob, `cromo-${s.p.name}.png`); }, 'image/png');
  }

  openModal(type, payload){ 
    if(type === 'settleMatch') { 
      const mt = this.teamsMatchType;
      this._smCost = localStorage.getItem(`sm_cost_${mt}`) || "19.55"; 
      this._smQuotaBK = localStorage.getItem(`sm_qbk_${mt}`) || "3.00"; 
      this._smQuotaNormal = localStorage.getItem(`sm_qnorm_${mt}`) || "3.00"; 
      this._smPayer = 'bote'; 
      this._smSelected = new Set(); 
      this.teamsPresent.forEach(id => this._smSelected.add(id)); 
    } else if(type === 'quickTx') {
      this._qtxAmount = '';
      this._qtxReason = '';
      this.qtxSign = 'plus';
    } else if(type === 'editTx') {
      const isGen = payload.kind === 'bote';
      const t = isGen ? this.generalTransactions.find(x => x.id === payload.id) : this.transactions.find(x => x.id === payload.id);
      if(!t) return;
      this._editTxKind = payload.kind;
      this._editTxId = t.id;
      this._editTxSign = t.amount < 0 ? 'minus' : 'plus';
      this._editTxAmount = String(Math.abs(t.amount));
      this._editTxReason = t.reason || '';
      this._editTxMatchType = t.matchType || 'F5';
    } else if(type === 'resolveMatch') {
      const m = this.matches.find(x => x.id === payload);
      if(m) {
        const sumR = m.teamRojo.reduce((s, p) => s + (m.goals[p.id] || 0), 0);
        const sumB = m.teamBlanco.reduce((s, p) => s + (m.goals[p.id] || 0), 0);
        m._manualRojo = (m.scoreRojo > sumR);
        m._manualBlanco = (m.scoreBlanco > sumB);
      }
    }
    this.modal = {type, payload: payload || {}}; this.render(); 
  }
  closeModal(){ this.modal = null; this.render(); }
  setPage(p){ this.page = p; this.modal = null; this.pageAnim = true; this.render(); this.pageAnim = false; }

  render(){
    const el = document.getElementById('app');
    if(!el) { console.error("No se ha encontrado el elemento <div id='app'> en tu index.html"); return; }

    try {
      let prevContent = el.querySelector('.content'); let contentScroll = prevContent ? prevContent.scrollTop : 0;
      let prevCheck = el.querySelector('.checklist'); let checkScroll = prevCheck ? prevCheck.scrollTop : 0;
      let prevSheet = el.querySelector('.sheet'); let sheetScroll = prevSheet ? prevSheet.scrollTop : 0;
      let wasModalOpen = !!el.querySelector('.sheet-backdrop');

      let activeId = null; let selStart = null;
      if(document.activeElement && document.activeElement.id){
        activeId = document.activeElement.id;
        try { if(document.activeElement.selectionStart !== undefined && document.activeElement.selectionStart !== null) selStart = document.activeElement.selectionStart; } catch(e) {}
      }
      
      let inner = `${this.renderTopbar()}<div class="content ${this.pageAnim ? 'animate-fade' : ''}">${this.renderPage()}</div>${this.renderFab()}${this.renderBottomNav()}`;
      if (this.modal) inner += this.renderModal(wasModalOpen);
      if (this.toastMsg) inner += `<div class="toast">${escapeHtml(this.toastMsg)}</div>`;
      el.innerHTML = inner;

      let newContent = el.querySelector('.content'); if(newContent) newContent.scrollTop = contentScroll;
      let newCheck = el.querySelector('.checklist'); if(newCheck) newCheck.scrollTop = checkScroll;
      let newSheet = el.querySelector('.sheet'); if(newSheet) newSheet.scrollTop = sheetScroll;
      
      if(activeId){ 
        let actEl = document.getElementById(activeId); 
        if(actEl){ actEl.focus(); try { if(selStart != null && actEl.setSelectionRange) actEl.setSelectionRange(selStart, selStart); } catch(e){} } 
      }
    } catch(err) {
      el.innerHTML = `<div style="padding:20px;color:red;background:white;margin:20px;"><h3>🚨 Error</h3><pre>${err.message}</pre></div>`;
    }
  }
  renderTopbar() {
    const isA = this.isAdmin;
    // Candado con proporciones reales y estilizadas (adiós bolsa de la compra)
    const lockIcon = isA 
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><rect x="6" y="10" width="12" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15" r="1.5" fill="currentColor"/></svg>' 
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><rect x="6" y="10" width="12" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>';
    
    const lockAction = isA ? "logoutAdmin()" : "promptAdminLogin()";
    const lockTitle = isA ? "Modo Admin Activo (Clic para bloquear)" : "Modo Espectador (Clic para introducir PIN)";

    return `<div class="topbar">
      <div class="brand">
        ${ICONS.ball}
        <div>
          <h1>Cuentas F5·F7</h1>
          <div class="date">${todayStr()}</div>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <button onclick="${lockAction}" title="${lockTitle}" style="background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.2); border-radius:50%; width:36px; height:36px; display:flex; align-items:center; justify-content:center; color:#fff; cursor:pointer; transition:background 0.2s;">
          ${lockIcon}
        </button>
        <div class="match-switch">
          <button class="${this.matchFilter==='F5'?'active':''}" onclick="app.matchFilter='F5';app.render()">F5</button>
          <button class="${this.matchFilter==='F7'?'active':''}" onclick="app.matchFilter='F7';app.render()">F7</button>
        </div>
      </div>
    </div>`; 
  }
  renderScoreboard(matchType){ const bote = this.getTotalPot(matchType); const {credit, debt} = this.classify(matchType); const jugadores = [...credit, ...debt].reduce((s,x)=>s+x.b,0); const balance = bote + jugadores; const cls = v => v>0.001?'pos':(v<-0.001?'neg':'neu'); return `<div class="scoreboard"><div class="cell"><div class="stat-label">Bote</div><div class="stat-value mono ${cls(bote)}">${fmtPlain(bote)}</div></div><div class="cell"><div class="stat-label">Jugadores</div><div class="stat-value mono ${cls(jugadores)}">${fmt(jugadores)}</div></div><div class="cell"><div class="stat-label">Balance</div><div class="stat-value mono ${cls(balance)}">${fmtPlain(balance)}</div></div></div>`; }

  renderPage(){
    switch(this.page){ 
      case 'resumen': return this.renderResumen(); 
      case 'jugadores': return this.renderJugadores(); 
      case 'movimientos': return this.renderMovimientos(); 
      case 'equipos': return this.renderEquipos(); 
      case 'estadisticas': return this.renderEstadisticas();
      case 'ajustes': return this.renderAjustes(); 
      default: return this.renderResumen(); 
    }
  }

  renderResumen(){
    const mt = this.matchFilter; const {credit, neutral, debt} = this.classify(mt);
    const row = (item, kind) => `<div class="ticket ${kind}" onclick="app.openModal('quickTx', {playerId:'${item.p.id}', matchType:'${mt}'})"><div><div class="name">${escapeHtml(item.p.name)}</div><div class="sub">${item.p.type}${item.p.isRegular ? ' · habitual' : ''}</div></div><div class="amt mono ${item.b>0?'pos':(item.b<0?'neg':'zero')}">${fmt(item.b)}</div></div>`;
    return `${this.renderScoreboard(mt)}<div class="field-row" style="margin-bottom:4px"><button class="btn btn-sm btn-outline" onclick="app.exportSummaryImage('${mt}')">${ICONS.download} Exportar imagen</button><button class="btn btn-sm btn-outline" onclick="app.copyMorososToClipboard('${mt}')">${ICONS.copy} Copiar deudas (${debt.length})</button></div><div class="section-title"><span class="dot" style="background:var(--credit)"></span>Con crédito<span class="count">${credit.length}</span></div>${credit.length ? credit.map(i=>row(i,'credit')).join('') : '<div class="empty-state">Nadie tiene crédito todavía</div>'}<div class="section-title"><span class="dot" style="background:var(--line)"></span>Al día<span class="count">${neutral.length}</span></div>${neutral.length ? neutral.map(i=>row(i,'neutral')).join('') : '<div class="empty-state">—</div>'}<div class="section-title"><span class="dot" style="background:var(--debt)"></span>Con deuda<span class="count">${debt.length}</span></div>${debt.length ? debt.map(i=>row(i,'debt')).join('') : '<div class="empty-state">Nadie tiene deudas 🎉</div>'}`;
  }

  renderJugadores(){
    let list = [...this.players];
    if(this.jugSearch) { const q = this.jugSearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); list = list.filter(p=> p.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(q)); }
    if(this.jugFilterType) list = list.filter(p => p.type === this.jugFilterType || p.type === 'F5/F7');
    if(this.jugFilterRegular !== '') list = list.filter(p=> String(p.isRegular !== false) === this.jugFilterRegular);
    list.sort((a,b)=>a.name.localeCompare(b.name));
    const pList = list.map(p=>{
      const total = this.getPlayerTotalBalance(p.id);
      let splitHtml = '';
      if(p.type === 'F5/F7'){
        const b5 = this.getPlayerBalance(p.id, 'F5');
        const b7 = this.getPlayerBalance(p.id, 'F7');
        const c5 = b5 > 0.001 ? 'var(--credit)' : (b5 < -0.001 ? 'var(--debt)' : 'var(--muted)');
        const c7 = b7 > 0.001 ? 'var(--credit)' : (b7 < -0.001 ? 'var(--debt)' : 'var(--muted)');
        splitHtml = `<div class="sub mono" style="margin-top:3px;font-size:11px;">F5: <b style="color:${c5}">${fmt(b5)}</b> · F7: <b style="color:${c7}">${fmt(b7)}</b></div>`;
      }
      return `<div class="ticket neutral" onclick="app.openModal('editPlayer',{id:'${p.id}'})"><div><div class="name">${escapeHtml(p.name)}</div><div class="sub">${p.type}${p.isRegular !== false ? ' · habitual' : ' · esporádico'}${p.bilbaoKirolak ? ' · Bilbao Kirolak' : ''}</div>${splitHtml}</div><div class="amt mono ${total>0.001?'pos':(total<-0.001?'neg':'zero')}">${fmt(total)}</div></div>`;
    }).join('');
    return `<input type="search" id="jugSearchInput" class="search-bar" placeholder="Buscar jugador..." value="${escapeHtml(this.jugSearch)}" oninput="app.jugSearch=this.value; app.render()" /><div style="display:flex; justify-content:space-between; gap:8px; flex-wrap:wrap; margin-bottom:10px;"><div class="filter-bar" style="margin-bottom:0"><button class="chip ${this.jugFilterType===''?'active':''}" onclick="app.jugFilterType='';app.render()">Todos</button><button class="chip ${this.jugFilterType==='F5'?'active':''}" onclick="app.jugFilterType='F5';app.render()">F5</button><button class="chip ${this.jugFilterType==='F7'?'active':''}" onclick="app.jugFilterType='F7';app.render()">F7</button></div><div class="filter-bar" style="margin-bottom:0"><button class="chip ${this.jugFilterRegular===''?'active':''}" onclick="app.jugFilterRegular='';app.render()">Todos</button><button class="chip ${this.jugFilterRegular==='true'?'active':''}" onclick="app.jugFilterRegular='true';app.render()">Habituales</button><button class="chip ${this.jugFilterRegular==='false'?'active':''}" onclick="app.jugFilterRegular='false';app.render()">Esporádicos</button></div></div><div class="section-title">Jugadores<span class="count">${list.length}</span></div>${pList || '<div class="empty-state">No hay jugadores.</div>'}`;
  }

  renderMovimientos(){ return `<div class="subtabs"><button class="chip ${this.movTab==='jugador'?'active':''}" style="flex:1" onclick="app.movTab='jugador';app.render()">A jugadores</button><button class="chip ${this.movTab==='bote'?'active':''}" style="flex:1" onclick="app.movTab='bote';app.render()">Al bote</button></div>${this.movTab==='jugador' ? this.renderMovJugadorForm() : this.renderMovBoteForm()}`; }
  
  renderMovJugadorForm(){
    const mt = this._movMatchType || this.matchFilter; const sign = this._movSign || 'plus'; const players = this.getPlayersForMatch(mt); const sel = this._movSelected || new Set();
    const pList = players.map(p=>`<label><input type="checkbox" value="${p.id}" ${sel.has(p.id)?'checked':''} onchange="app.toggleMovPlayer('${p.id}')" />${escapeHtml(p.name)}</label>`).join('');
    return `<label>Tipo de partido</label><div class="chip-group"><button class="chip ${mt==='F5'?'active':''}" onclick="app._movMatchType='F5';app.render()">F5</button><button class="chip ${mt==='F7'?'active':''}" onclick="app._movMatchType='F7';app.render()">F7</button></div><div class="field-row" style="align-items:center; justify-content:space-between; margin-top:14px; margin-bottom:5px"><label style="margin:0">Jugadores (${sel.size})</label><div style="display:flex; gap:6px;"><button class="icon-btn" style="background:var(--line); font-size:12px; font-weight:600; padding:4px 10px; border-radius:12px;" onclick="app.clearMovPlayers()">Vaciar</button></div></div><div class="checklist">${pList || '<div class="empty-state">No hay jugadores</div>'}</div><label>Importe (por jugador)</label><div class="sign-toggle"><button class="${sign==='plus'?'active plus':''}" onclick="app._movSign='plus';app.render()">+ Abona</button><button class="${sign==='minus'?'active minus':''}" onclick="app._movSign='minus';app.render()">− Carga</button></div><input type="number" step="0.01" min="0" id="movAmount" placeholder="0.00" value="${this._movAmount || ''}" oninput="app._movAmount=this.value" style="margin-top:8px" /><label>Motivo (opcional)</label><input type="text" id="movReason" placeholder="Partido, balón..." value="${this._movReason || ''}" oninput="app._movReason=this.value" /><button class="btn btn-primary btn-block" style="margin-top:16px" onclick="app.submitMovJugador()">Registrar movimiento</button>`;
  }
  toggleMovPlayer(id){ this._movSelected = this._movSelected || new Set(); this._movSelected.has(id) ? this._movSelected.delete(id) : this._movSelected.add(id); this.render(); }
  clearMovPlayers(){ this._movSelected = new Set(); this.render(); }
  submitMovJugador(){ const mt = this._movMatchType || this.matchFilter; const sel = Array.from(this._movSelected || []); let amount = parseFloat(this._movAmount); if(isNaN(amount)){ this.toast('Introduce un importe'); return; } amount = (this._movSign || 'plus') === 'minus' ? -Math.abs(amount) : Math.abs(amount); this.addTransaction(sel, amount, mt, this._movReason); this._movSelected = new Set(); this._movAmount=''; this._movReason=''; this.render(); }

  renderMovBoteForm(){
    const mt = this._boteMatchType || this.matchFilter; const sign = this._boteSign || 'plus';
    const hList = this.generalTransactions.filter(t=>t.matchType===mt).sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).slice(0,8).map(t=>`<div class="ticket neutral"><div><div class="name">${t.reason ? escapeHtml(t.reason) : 'Movimiento del bote'}</div><div class="sub">${new Date(t.createdAt).toLocaleDateString('es-ES')}</div></div><div style="display:flex;align-items:center;gap:8px"><div class="amt mono ${t.amount>0?'pos':'neg'}">${fmt(t.amount)}</div><button class="icon-btn" onclick="event.stopPropagation();app.openModal('editTx',{id:'${t.id}',kind:'bote'})">${ICONS.edit}</button><button class="icon-btn" onclick="event.stopPropagation();app.deleteGeneralTransaction('${t.id}')">${ICONS.trash}</button></div></div>`).join('');
    return `<label>Tipo de partido</label><div class="chip-group"><button class="chip ${mt==='F5'?'active':''}" onclick="app._boteMatchType='F5';app.render()">F5</button><button class="chip ${mt==='F7'?'active':''}" onclick="app._boteMatchType='F7';app.render()">F7</button></div><label>Importe</label><div class="sign-toggle"><button class="${sign==='plus'?'active plus':''}" onclick="app._boteSign='plus';app.render()">+ Ingreso</button><button class="${sign==='minus'?'active minus':''}" onclick="app._boteSign='minus';app.render()">− Gasto</button></div><input type="number" step="0.01" min="0" id="boteAmountInput" placeholder="0.00" value="${this._boteAmount || ''}" oninput="app._boteAmount=this.value" style="margin-top:8px" /><label>Motivo (opcional)</label><input type="text" id="boteReasonInput" placeholder="Balón, pista..." value="${this._boteReason || ''}" oninput="app._boteReason=this.value" /><button class="btn btn-primary btn-block" style="margin-top:16px" onclick="app.submitMovBote()">Registrar en el bote</button><div class="section-title" style="margin-top:24px">Últimos movimientos</div>${hList || '<div class="empty-state">Sin movimientos</div>'}`;
  }
  submitMovBote(){ const mt = this._boteMatchType || this.matchFilter; let amount = parseFloat(this._boteAmount); if(isNaN(amount)){ this.toast('Introduce importe'); return; } amount = (this._boteSign || 'plus') === 'minus' ? -Math.abs(amount) : Math.abs(amount); this.addGeneralTransaction(amount, mt, this._boteReason); this._boteAmount=''; this._boteReason=''; this.render(); }

  vaciarConvocatoria(){
    if(this.teamsPresent.size === 0 && this.teamsGuests.length === 0) return;
    if(!confirm('¿Vaciar toda la lista de convocados de hoy?')) return;
    this.teamsPresent = new Set(); this.teamsGuests = []; this.teamsResult = null;
    this.saveTeamsLocal(); this.render(); this.toast('Convocatoria vaciada');
  }

  isSettledToday(matchType){
    const todayKey = localDayKey();
    return this.transactions.some(t => t.matchType === matchType && localDayKey(t.createdAt) === todayKey && (t.reason || '').startsWith('Cuota partido'));
  }

  handleSettleMatchClick(){
    const mt = this.teamsMatchType;
    if(this.isSettledToday(mt)){
      if(!confirm(`⚠️ Ya habéis liquidado un partido de ${mt} en el día de hoy.\n\n¿Seguro que quieres abrir la liquidación y volver a cobrar las cuotas?`)) return;
    }
    this.openModal('settleMatch');
  }

  renderEquipos(){
    const mt = this.teamsMatchType; let players = this.getPlayersForMatch(mt);
    if(this.teamsSearch) { const q = this.teamsSearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); players = players.filter(p=> p.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(q)); }
    
    players.sort((a, b) => {
      const aPres = this.teamsPresent.has(a.id) ? 1 : 0;
      const bPres = this.teamsPresent.has(b.id) ? 1 : 0;
      if (aPres !== bPres) return bPres - aPres;
      const aReg = a.isRegular !== false ? 1 : 0;
      const bReg = b.isRegular !== false ? 1 : 0;
      if (aReg !== bReg) return bReg - aReg;
      return a.name.localeCompare(b.name);
    });

    const count = this.teamsPresent.size; const required = this.requiredTeamSizes(mt); const sizeOk = required.includes(count); const missingPosition = this.presentWithoutPosition(); const ok = sizeOk && missingPosition.length === 0;
    const playersHtml = players.length > 0 ? players.map(p=>`<label style="${this.teamsPresent.has(p.id)?'background:var(--turf-soft);font-weight:600;':''}"><input type="checkbox" ${this.teamsPresent.has(p.id)?'checked':''} onchange="app.togglePresent('${p.id}')" />${escapeHtml(p.name)}${p.isRegular!==false?'':' <span style="font-size:11px;color:var(--muted)">(esp.)</span>'}${p.position?'':' <span class="lvl-badge" style="background:var(--debt-soft);color:var(--debt)">Sin pos.</span>'} <span class="lvl-badge" style="margin-left:auto">Niv:${SKILL_LABEL[p.skill] || 'Medio'} • Fis:${STAMINA_LABEL[p.stamina] || 'Medio'}</span></label>`).join('') : '<div class="empty-state">No hay jugadores que coincidan</div>';
    const guestsHtml = this.teamsGuests.map(g=>`<label style="${this.teamsPresent.has(g.id)?'background:var(--turf-soft);font-weight:600;':''}"><input type="checkbox" ${this.teamsPresent.has(g.id)?'checked':''} onchange="app.togglePresent('${g.id}')" />${escapeHtml(g.name)} <span class="lvl-badge" style="background:var(--gold-soft);color:#8a5a12">Invitado</span>${g.position?'':' <span class="lvl-badge" style="background:var(--debt-soft);color:var(--debt)">Sin pos.</span>'}<span class="lvl-badge" style="margin-left:auto">Niv:${SKILL_LABEL[g.skill] || 'Medio'} • Fis:${STAMINA_LABEL[g.stamina] || 'Medio'}</span><button class="icon-btn" onclick="event.preventDefault();app.removeGuest('${g.id}')">${ICONS.trash}</button></label>`).join('');
    
    const vaciarBtn = count > 0 ? `<button class="icon-btn" style="background:var(--debt-soft); color:var(--debt); font-size:12px; padding:4px 10px; border-radius:12px;" onclick="app.vaciarConvocatoria()">🗑️ Vaciar (${count})</button>` : '';
    const limpiarSearchBtn = this.teamsSearch ? `<button onclick="app.teamsSearch=''; app.render();" style="position:absolute; right:8px; top:50%; transform:translateY(-50%); border:0; background:var(--pitch); color:#fff; border-radius:100px; padding:5px 12px; font-size:12px; font-weight:700; cursor:pointer;">✕ Limpiar</button>` : '';
    const warnSize = !sizeOk ? `<div class="empty-state" style="text-align:left;padding:8px 2px">Hacen falta exactamente ${required.join(' o ')} jugadores.</div>` : '';
    const warnPos = (sizeOk && missingPosition.length > 0) ? `<div class="empty-state" style="text-align:left;padding:8px 2px;color:var(--debt)">Falta asignar posición a: ${missingPosition.map(p=>escapeHtml(p.name)).join(', ')}.</div>` : '';
    const settledToday = this.isSettledToday(mt);
    const settleBtn = count > 0 ? (settledToday
      ? `<button class="btn btn-block" style="margin-top:12px; background:var(--turf-soft); color:var(--credit); border:1.5px solid var(--credit);" onclick="app.handleSettleMatchClick()">✅ Partido ya liquidado hoy (Re-liquidar)</button>`
      : `<button class="btn btn-block" style="margin-top:12px; background:var(--gold-soft); color:#8a5a12; border:1.5px solid var(--gold);" onclick="app.handleSettleMatchClick()">💰 Liquidar Partido</button>`
    ) : '';

    return `<div class="field-row" style="align-items:center; justify-content:space-between;"><label style="margin:0">Tipo de partido</label>${vaciarBtn}</div>
    <div class="chip-group" style="margin-top:6px"><button class="chip ${mt==='F5'?'active':''}" onclick="if(app.teamsMatchType!=='F5'){app.teamsMatchType='F5';app.teamsResult=null;app.saveTeamsLocal();app.render();}">F5</button><button class="chip ${mt==='F7'?'active':''}" onclick="if(app.teamsMatchType!=='F7'){app.teamsMatchType='F7';app.teamsResult=null;app.saveTeamsLocal();app.render();}">F7</button></div>
    <label style="display:flex; justify-content:space-between; align-items:flex-end;">Jugadores presentes hoy <span class="mono" style="font-weight:700;color:${sizeOk ? 'var(--credit)' : 'var(--debt)'}">${count} / ${required.join(' o ')}</span></label>
    <div style="position:relative; margin-bottom:8px;">
      <input type="search" id="teamsSearchInput" class="search-bar" placeholder="Buscar jugador para convocar..." value="${escapeHtml(this.teamsSearch || '')}" oninput="app.teamsSearch=this.value; app.render()" style="margin-bottom:0; padding-right:${this.teamsSearch ? '80px' : '16px'};" />
      ${limpiarSearchBtn}
    </div>
    <div class="checklist" style="margin-bottom:8px">${playersHtml}${guestsHtml}</div><div class="field-row" style="margin-bottom:14px"><button class="btn btn-sm btn-outline" onclick="app.openModal('addGuest')">${ICONS.plus} Añadir invitado</button></div>${warnSize}${warnPos}<div class="field-row"><button class="btn btn-primary" ${!ok?'disabled style="opacity:.45"':''} onclick="app.generateTeams(true)">${ICONS.shuffle} Equilibrar</button><button class="btn btn-outline" ${!ok?'disabled style="opacity:.45"':''} onclick="app.generateTeams(false)">Aleatorio</button></div>${settleBtn}${this.teamsResult ? this.renderTeamsResult(this.teamsResult) : ''}`;
  }

  togglePresent(id){ this.teamsPresent.has(id) ? this.teamsPresent.delete(id) : this.teamsPresent.add(id); this.saveTeamsLocal(); this.render(); }
  removeGuest(id){ this.teamsGuests = this.teamsGuests.filter(g=>g.id!==id); this.teamsPresent.delete(id); this.saveTeamsLocal(); this.render(); }
  submitGuest(){ const name = document.getElementById('guestName').value.trim(); if(!name){ this.toast('Falta nombre'); return; } const skill = document.querySelector('#guestSkillGroup .chip.active').dataset.val; const stamina = document.querySelector('#guestStaminaGroup .chip.active').dataset.val; const position = document.querySelector('#guestPosGroup .chip.active').dataset.val; const guest = { id:'guest_'+uid(), name, skill, stamina, position, bilbaoKirolak: false }; this.teamsGuests.push(guest); this.teamsPresent.add(guest.id); this.saveTeamsLocal(); this.closeModal(); this.toast('Invitado añadido'); }

  renderTeamsResult(r){
    const avg = list => list.length ? (list.reduce((s,p)=>s+p.weight,0)/list.length) : 0;
    const teamBlock = (team, label, list, average, accent) => {
      const pList = list.length > 0 ? list.map((p,i)=>`<div class="team-player ${this.teamsSwapSel?.team===team && this.teamsSwapSel?.idx===i ? 'selected':''}" onclick="app.swapTeamPlayer('${team}', ${i})"><span>${escapeHtml(p.name)} <span class="lvl-badge" style="background:${POSITION_COLOR[p.position] || '#8A8A8A'};color:#fff">${POSITION_ABBR[p.position] || '-'}</span></span><span class="lvl-badge">★ ${p.weight}</span></div>`).join('') : '<div class="empty-state">Sin jugadores</div>';
      return `<div class="team-card" style="border-left:4px solid ${accent}"><h3><span>${label}</span><span class="mono" style="font-size:12px;color:var(--muted)">peso global ${average.toFixed(1)}</span></h3>${pList}</div>`;
    };
    const seasons = this.getAvailableSeasons();
    const selSeason = this._sealSeason || this.currentSeason;
    const seasonOpts = seasons.map(s => `<option value="${escapeHtml(s)}" ${s===selSeason?'selected':''}>Temp. ${escapeHtml(s)}</option>`).join('');
    return `<div class="section-title" style="margin-top:22px">Equipos generados <span class="count">toca dos jugadores para intercambiarlos</span></div>${teamBlock('rojo', '🔴 Equipo Rojo', r.teamRojo, avg(r.teamRojo), '#C3423F')}${teamBlock('blanco', '🔵 Equipo Azul', r.teamBlanco, avg(r.teamBlanco), '#1E3A8A')}<div class="field-row" style="margin-top:6px"><button class="btn btn-sm btn-outline" onclick="app.exportTeamsImage()">${ICONS.download} Exportar</button><button class="btn btn-sm btn-gold" onclick="app.shareTeams()">${ICONS.share} Compartir</button></div>
    <div style="display:flex; gap:8px; align-items:stretch; margin-top:12px;">
      <select onchange="app._sealSeason=this.value; app.render()" style="width:auto; min-width:135px; padding:10px 12px; font-weight:700; font-size:13px;">${seasonOpts}</select>
      <button class="btn" style="flex:1; background:var(--pitch); color:#fff;" onclick="app.sellarPartidoOficial()">⚽ Sellar Partido Oficial</button>
    </div>`;
  }

  renderSeasonFilterBar() {
    const seasons = this.getAvailableSeasons();
    const cur = this.statSeasonFilter || this.currentSeason;
    const manageOpts = cur !== 'ALL'
      ? `<option value="__RENAME__">✏️ Renombrar "${escapeHtml(cur)}"...</option><option value="__DELETE__">🗑️ Eliminar "${escapeHtml(cur)}"...</option>`
      : '';
    const opts = `<option value="ALL" ${cur==='ALL'?'selected':''}>🌟 Histórico (Todas)</option>` +
      seasons.map(s => `<option value="${escapeHtml(s)}" ${cur===s?'selected':''}>${escapeHtml(s)}${s===this.currentSeason?' ⭐':''}</option>`).join('') +
      `<option value="__NEW__">➕ Nueva temporada...</option>` +
      manageOpts;
    return `<div class="field-row" style="align-items:flex-end; margin-bottom:14px;">
      <div style="flex:1"><label style="margin-top:0">Temporada</label><select onchange="app.handleSeasonSelect(this.value)" style="font-family:'Inter', sans-serif; font-weight:700; padding:10px 12px;">${opts}</select></div>
      <div><label style="margin-top:0">Modalidad</label><div class="filter-bar" style="margin-bottom:0"><button class="chip ${this.statMatchFilter===''?'active':''}" onclick="app.statMatchFilter='';app.render()">Todos</button><button class="chip ${this.statMatchFilter==='F5'?'active':''}" onclick="app.statMatchFilter='F5';app.render()">F5</button><button class="chip ${this.statMatchFilter==='F7'?'active':''}" onclick="app.statMatchFilter='F7';app.render()">F7</button></div></div>
    </div>`;
  }

  renderEstadisticas() { 
    return `<div class="subtabs"><button class="chip ${this.statTab==='clasificacion'?'active':''}" style="flex:1" onclick="app.statTab='clasificacion';app.render()">Clasificación</button><button class="chip ${this.statTab==='partidos'?'active':''}" style="flex:1" onclick="app.statTab='partidos';app.render()">Partidos</button></div>${this.renderSeasonFilterBar()}${this.statTab==='clasificacion' ? this.renderClasificacion() : this.renderListaPartidos()}`; 
  }
  
  renderClasificacion() {
    const data = this.getSortedClasificacion(this.statSeasonFilter); 
    let tableHtml = `<div class="empty-state">No hay partidos jugados en esta selección.</div>`;

    if (data.length > 0) {
      const pichichi = [...data].sort((a,b) => b.goles - a.goles || a.pj - b.pj)[0];
      const mvp = [...data].sort((a,b) => b.pts - a.pts || b.dg - a.dg)[0];
      const muro = [...data].sort((a,b) => b.dg - a.dg || b.pts - a.pts)[0];
      const killer = [...data].sort((a,b) => b.gpp - a.gpp || b.goles - a.goles)[0];

      const leadersHtml = `<div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:14px;">
        <div class="ticket credit" style="margin:0; padding:10px 12px; cursor:pointer;" onclick="app.openModal('cromoPlayer', '${pichichi.p.id}')"><div><div class="sub">⚽ PICHICHI</div><div class="name">${escapeHtml(pichichi.p.name)}</div></div><div class="amt mono pos">${pichichi.goles}G</div></div>
        <div class="ticket credit" style="margin:0; padding:10px 12px; cursor:pointer;" onclick="app.openModal('cromoPlayer', '${mvp.p.id}')"><div><div class="sub">🏆 LÍDER PUNTOS</div><div class="name">${escapeHtml(mvp.p.name)}</div></div><div class="amt mono pos">${mvp.pts}p</div></div>
        <div class="ticket ${muro.dg>=0?'credit':'debt'}" style="margin:0; padding:10px 12px; cursor:pointer;" onclick="app.openModal('cromoPlayer', '${muro.p.id}')"><div><div class="sub">🛡️ MEJOR BALANCE</div><div class="name">${escapeHtml(muro.p.name)}</div></div><div class="amt mono ${muro.dg>0?'pos':(muro.dg<0?'neg':'zero')}">${fmtDG(muro.dg)}</div></div>
        <div class="ticket neutral" style="margin:0; padding:10px 12px; cursor:pointer;" onclick="app.openModal('cromoPlayer', '${killer.p.id}')"><div><div class="sub">🎯 MEDIA G/P</div><div class="name">${escapeHtml(killer.p.name)}</div></div><div class="amt mono">${killer.gpp.toFixed(2)}</div></div>
      </div>`;

      const badgeRacha = (last3) => last3.map(r => `<span style="display:inline-block;width:7px;height:7px;border-radius:50%;margin-right:2px;background:${r==='V'?'var(--credit)':(r==='E'?'var(--gold)':'var(--debt)')}"></span>`).join('');

      tableHtml = `${leadersHtml}<div style="background:var(--paper); border:1px solid var(--line); border-radius:12px; overflow-x:auto;">
        <table class="stat-table">
          <thead>
            <tr>
              <th onclick="app.setStatSort('nombre')" style="cursor:pointer; user-select:none;">Jugador<span style="color:var(--gold)">${this.getSortIcon('nombre')}</span></th>
              <th class="num" onclick="app.setStatSort('pts')" style="cursor:pointer; user-select:none;">PTS<span style="color:var(--gold)">${this.getSortIcon('pts')}</span></th>
              <th class="num" onclick="app.setStatSort('pj')" style="cursor:pointer; user-select:none;">PJ<span style="color:var(--gold)">${this.getSortIcon('pj')}</span></th>
              <th class="num" onclick="app.setStatSort('goles')" style="cursor:pointer; user-select:none;">G<span style="color:var(--gold)">${this.getSortIcon('goles')}</span></th>
              <th class="num" onclick="app.setStatSort('dg')" style="cursor:pointer; user-select:none;">+/-<span style="color:var(--gold)">${this.getSortIcon('dg')}</span></th>
              <th class="num" onclick="app.setStatSort('gpp')" style="cursor:pointer; user-select:none;">G/P<span style="color:var(--gold)">${this.getSortIcon('gpp')}</span></th>
              <th class="num" onclick="app.setStatSort('winrate')" style="cursor:pointer; user-select:none;">%WIN<span style="color:var(--gold)">${this.getSortIcon('winrate')}</span></th>
            </tr>
          </thead>
          <tbody>
            ${data.map((row, i) => {
              const dgColor = row.dg > 0 ? 'var(--credit)' : (row.dg < 0 ? 'var(--debt)' : 'var(--muted)');
              return `<tr onclick="app.openModal('cromoPlayer', '${row.p.id}')" style="cursor:pointer; background:${i%2===0?'#fff':'#f9f9f9'}"><td><b>${i+1}.</b> ${escapeHtml(row.p.name)} <div style="margin-top:2px">${badgeRacha(row.last3)} <span style="font-size:10px;color:var(--muted)">${row.pg}V-${row.pe}E-${row.pp}D · ${row.gf}GF-${row.gc}GC</span></div></td><td class="num"><b>${row.pts}</b></td><td class="num">${row.pj}</td><td class="num" style="color:var(--pitch)"><b>${row.goles}</b></td><td class="num" style="color:${dgColor};font-weight:800;">${fmtDG(row.dg)}</td><td class="num" style="color:var(--muted)">${row.gpp.toFixed(2)}</td><td class="num"><b>${row.winrate}%</b></td></tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
      <button class="btn btn-block btn-outline" style="margin-top:16px" onclick="app.exportClasificacionImage()">📸 Exportar Clasificación</button>`; 
    }
    return tableHtml;
  }

  renderListaPartidos() {
    const seasonView = this.statSeasonFilter || this.currentSeason;
    const titleTxt = seasonView === 'ALL' ? 'Todos los Partidos (Histórico)' : `Partidos Temporada ${seasonView}`;
    let html = `<div class="section-title">${titleTxt}</div>`; 
    const partidosTemp = this.matches
      .filter(m => (seasonView === 'ALL' || m.season === seasonView) && (!this.statMatchFilter || m.matchType === this.statMatchFilter))
      .sort((a,b) => new Date(b.date) - new Date(a.date));
    if (partidosTemp.length === 0) return html + '<div class="empty-state">No hay partidos en esta selección. Genera equipos y séllalos para empezar.</div>';
    html += partidosTemp.map(m => {
      const isPending = m.status === 'pending'; const fecha = new Date(m.date).toLocaleDateString('es-ES', {weekday:'short', day:'numeric', month:'short'});
      const boxStyle = isPending ? 'border-left-color:var(--gold); background:var(--gold-soft); cursor:pointer;' : 'border-left-color:var(--credit); cursor:pointer;';
      let resHtml = isPending ? `<span style="font-weight:700; color:#8a5a12; font-size:12px; text-transform:uppercase;">Anotar resultado ➔</span>` : `<div style="font-size:24px; font-weight:800; font-family:'Inter', sans-serif; color:var(--pitch)"><span style="color:var(--debt)">${m.scoreRojo}</span> - <span style="color:#1E3A8A">${m.scoreBlanco}</span></div>`;
      return `<div class="ticket" style="${boxStyle}" onclick="app.openModal('resolveMatch', '${m.id}')"><div><div class="name">${m.matchType} · ${fecha}</div><div class="sub">${m.teamRojo.length} vs ${m.teamBlanco.length} jugadores · Temp. ${escapeHtml(m.season || '')}</div></div><div>${resHtml}</div></div>`;
    }).join(''); return html;
  }

  renderGithubSyncBox(){
    if(!this.githubSync){ return `<div class="ticket neutral" style="cursor:default;display:block"><div style="font-size:13px;margin-bottom:10px">Guarda los datos en tu repo de GitHub.</div><label>Usuario</label><input type="text" id="ghOwner" placeholder="ividat84" /><label>Repositorio</label><input type="text" id="ghRepo" placeholder="CuentasFutbito" /><label>Archivo</label><input type="text" id="ghPath" placeholder="futbol-cuentas-backup.json" value="futbol-cuentas-backup.json" /><label>Rama</label><input type="text" id="ghBranch" placeholder="main" value="main" /><label>Token</label><input type="password" id="ghToken" placeholder="github_pat_..." /><button class="btn btn-primary btn-block" style="margin-top:14px" onclick="app.submitGithubConfig()">Guardar y sincronizar</button></div>`; }
    const pending = !this.githubSyncStatus?.ok; const cloudLine = this.githubSyncStatus?.ok ? `✅ Sincronizado ${timeAgo(this.githubSyncStatus.at)}` : (this.githubSyncStatus ? `⚠️ Sin sincronizar: ${escapeHtml(this.githubSyncStatus.error)} (${timeAgo(this.githubSyncStatus.at)})` : 'Sincronizando…');
    return `<div class="ticket ${pending ? 'debt':'credit'}" style="cursor:default;display:block"><div class="name">${escapeHtml(this.githubSync.owner)}/${escapeHtml(this.githubSync.repo)}</div><div class="sub">${escapeHtml(this.githubSync.path)} · ${escapeHtml(this.githubSync.branch || 'main')}</div><div class="sub" style="margin-top:8px">${cloudLine}</div></div><div class="field-row" style="margin-top:8px"><button class="btn btn-outline" onclick="app.pullFromGithub(false)">Descargar de la nube</button>${pending ? `<button class="btn btn-primary" onclick="app.pushToGithub()">Reintentar subida</button>` : ''}</div><button class="btn btn-danger btn-block" style="margin-top:8px" onclick="app.clearGithubConfig()">Desconectar</button>`;
  }
  submitGithubConfig(){ const owner = document.getElementById('ghOwner').value.trim(); const repo = document.getElementById('ghRepo').value.trim(); const path = document.getElementById('ghPath').value.trim() || 'futbol-cuentas-backup.json'; const branch = document.getElementById('ghBranch').value.trim() || 'main'; const token = document.getElementById('ghToken').value.trim(); if(!owner || !repo || !token){ this.toast('Faltan datos'); return; } this.saveGithubConfig({owner, repo, path, branch, token, sha:null}); this.render(); this.pullFromGithub(false); }

  renderAjustes(){ return `<div class="section-title">Sincronización</div>${this.renderGithubSyncBox()}<div class="section-title" style="margin-top:24px">Copia de seguridad manual</div><div class="field-row"><button class="btn btn-sm btn-outline" onclick="app.exportBackup()">${ICONS.download} Exportar</button><input type="file" id="importFile" accept="application/json" style="display:none" onchange="app.importBackup(this.files[0])" /><button class="btn btn-sm btn-outline" onclick="document.getElementById('importFile').click()">${ICONS.upload} Importar</button></div><div class="section-title" style="margin-top:24px">Solución de problemas</div><div class="ticket neutral" style="cursor:default"><div style="font-size:13px;line-height:1.5;margin-bottom:10px">Si notas que la app no se actualiza, pulsa este botón para forzar la descarga de la última versión.</div><button class="btn btn-danger btn-block" onclick="app.hardResetApp()">↻ Forzar actualización</button></div><div class="section-title" style="margin-top:24px">Historial de movimientos</div>${this.renderHistorial()}<div class="section-title" style="margin-top:24px">Instalar como app</div><div class="ticket neutral" style="cursor:default"><div style="font-size:13px;line-height:1.5">En Chrome (Android) pulsa el menú ⋮ y elige <b>"Instalar app"</b>.</div></div>`; }

  renderHistorial(){
    let all = [ ...this.transactions.map(t=>({...t, kind:'jugador'})), ...this.generalTransactions.map(t=>({...t, kind:'bote'})) ];
    if(this.histMatchFilter) all = all.filter(t=>t.matchType===this.histMatchFilter);
    if(this.histSearch){ const q = this.histSearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); all = all.filter(t=>{ const names = (t.playerIds || []).map(id=> this.players.find(x=>x.id===id)?.name || '').join(' ').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); const resText = (t.reason || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); return names.includes(q) || resText.includes(q); }); }
    all.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)); const totalItems = all.length; all = all.slice(0, this.histLimit);
    const tList = all.map(t=>{ const names = t.kind==='jugador' ? (t.playerIds || []).map(id=> this.players.find(x=>x.id===id)?.name || '(borrado)').join(', ') : 'Bote general'; return `<div class="ticket ${t.amount>0 ? 'credit' : 'debt'}" style="cursor:default"><div><div class="name">${escapeHtml(names)}</div><div class="sub">${t.matchType} · ${t.reason ? escapeHtml(t.reason) : 'sin motivo'} · ${new Date(t.createdAt).toLocaleDateString('es-ES')}</div></div><div style="display:flex;align-items:center;gap:6px"><div class="amt mono ${t.amount>0 ? 'pos' : 'neg'}">${fmt(t.amount)}</div><button class="icon-btn" title="Editar" onclick="app.openModal('editTx',{id:'${t.id}',kind:'${t.kind}'})">${ICONS.edit}</button><button class="icon-btn" title="Eliminar" onclick="app.${t.kind==='jugador' ? 'deleteTransaction' : 'deleteGeneralTransaction'}('${t.id}')">${ICONS.trash}</button></div></div>`; }).join('');
    return `<input type="search" id="histSearchInput" class="search-bar" placeholder="Buscar en historial..." value="${escapeHtml(this.histSearch)}" oninput="app.histSearch=this.value;app.histLimit=40;app.render()" /><div class="filter-bar"><button class="chip ${this.histMatchFilter===''?'active':''}" onclick="app.histMatchFilter='';app.histLimit=40;app.render()">Todos</button><button class="chip ${this.histMatchFilter==='F5'?'active':''}" onclick="app.histMatchFilter='F5';app.histLimit=40;app.render()">F5</button><button class="chip ${this.histMatchFilter==='F7'?'active':''}" onclick="app.histMatchFilter='F7';app.histLimit=40;app.render()">F7</button></div>${tList || '<div class="empty-state">Sin movimientos</div>'}${this.histLimit < totalItems ? `<button class="btn btn-outline btn-block" style="margin-top:16px" onclick="app.histLimit += 40; app.render()">Cargar más (${totalItems - this.histLimit})</button>` : ''}`;
  }

  renderFab(){ return this.page==='resumen' ? `<button class="fab" onclick="app.setPage('movimientos')">${ICONS.plus}</button>` : (this.page==='jugadores' ? `<button class="fab" onclick="app.openModal('addPlayer')">${ICONS.plus}</button>` : ''); }
  renderBottomNav(){ return `<div class="bottom-nav">${[ {id:'resumen', label:'Resumen', icon:ICONS.home}, {id:'jugadores', label:'Jugadores', icon:ICONS.users}, {id:'movimientos', label:'Movim.', icon:ICONS.euro}, {id:'equipos', label:'Equipos', icon:ICONS.shirts}, {id:'estadisticas', label:'Estadísticas', icon:ICONS.chart}, {id:'ajustes', label:'Ajustes', icon:ICONS.gear} ].map(t=>`<button class="${this.page===t.id?'active':''}" onclick="app.setPage('${t.id}')">${t.icon}<span class="tab-label">${t.label}</span></button>`).join('')}</div>`; }

  renderGoalDiffStatus(m) {
    const sumR = m.teamRojo.reduce((s, p) => s + (m.goals[p.id] || 0), 0);
    const sumB = m.teamBlanco.reduce((s, p) => s + (m.goals[p.id] || 0), 0);
    const diffR = (m.scoreRojo || 0) - sumR;
    const diffB = (m.scoreBlanco || 0) - sumB;
    const txtR = diffR > 0 ? `🔴 ${diffR} sin asignar / propia` : `🔴 Goles Rojo OK (${sumR})`;
    const txtB = diffB > 0 ? `🔵 ${diffB} sin asignar / propia` : `🔵 Goles Azul OK (${sumB})`;
    return `<div style="display:flex; justify-content:space-between; font-size:12px; font-weight:600; color:var(--muted); margin:-8px 4px 12px;"><span>${txtR}</span><span>${txtB}</span></div>`;
  }

  renderModal(skipAnim = false){
    const {type, payload} = this.modal; let body = '';
    if(type==='addPlayer' || type==='editPlayer'){
      const p = type==='editPlayer' ? this.players.find(x=>x.id===payload.id) : null; if(type==='editPlayer' && !p) { this.modal = null; return ''; }
      const saveArg = p ? `'${p.id}'` : 'null';
      const delBtn = p ? `<button class="btn btn-danger btn-block" style="margin-top:8px" onclick="app.deletePlayer('${p.id}')">Eliminar jugador</button>` : '';
      body = `<h2>${p ? 'Editar jugador' : 'Nuevo jugador'}</h2><label>Nombre</label><input type="text" id="pName" value="${p ? escapeHtml(p.name) : ''}" placeholder="Nombre y apellido" /><label>Tipo</label><div class="chip-group" id="pTypeGroup">${['F5','F7','F5/F7'].map(t=>`<button class="chip ${(p?.type===t || (!p && t==='F5/F7')) ? 'active' : ''}" data-val="${t}" onclick="app.pickChip(this,'pTypeGroup')">${t}</button>`).join('')}</div><label>Habilidad Técnica</label><div class="chip-group" id="pSkillGroup">${Object.keys(SKILL_LABEL).map(s=>`<button class="chip ${(p?.skill===s || (!p && s==='medio')) ? 'active' : ''}" data-val="${s}" onclick="app.pickChip(this,'pSkillGroup')">${SKILL_LABEL[s]}</button>`).join('')}</div><label>Físico / Resistencia</label><div class="chip-group" id="pStaminaGroup">${Object.keys(STAMINA_LABEL).map(s=>`<button class="chip ${(p?.stamina===s || (!p && s==='medio')) ? 'active' : ''}" data-val="${s}" onclick="app.pickChip(this,'pStaminaGroup')">${STAMINA_LABEL[s]}</button>`).join('')}</div><label>Posición</label><div class="chip-group" id="pPosGroup"><button class="chip ${!p?.position ? 'active' : ''}" data-val="" onclick="app.pickChip(this,'pPosGroup')">-</button>${POSITIONS.map(pos=>`<button class="chip ${p?.position===pos ? 'active' : ''}" data-val="${pos}" onclick="app.pickChip(this,'pPosGroup')">${pos}</button>`).join('')}</div><label>Abonado Bilbao Kirolak</label><div class="chip-group" id="pBKGroup"><button class="chip ${p?.bilbaoKirolak ? 'active' : ''}" data-val="true" onclick="app.pickChip(this,'pBKGroup')">Sí</button><button class="chip ${!p?.bilbaoKirolak ? 'active' : ''}" data-val="false" onclick="app.pickChip(this,'pBKGroup')">No</button></div><label>Habitual</label><div class="chip-group" id="pRegGroup"><button class="chip ${p?.isRegular !== false ? 'active' : ''}" data-val="true" onclick="app.pickChip(this,'pRegGroup')">Sí</button><button class="chip ${p?.isRegular === false ? 'active' : ''}" data-val="false" onclick="app.pickChip(this,'pRegGroup')">Esporádico</button></div><button class="btn btn-primary btn-block" style="margin-top:18px" onclick="app.savePlayerForm(${saveArg})">Guardar</button>${delBtn}`;
    } else if(type==='resolveMatch'){
      const m = this.matches.find(x=>x.id===payload); if(!m) return '';
      const seasons = this.getAvailableSeasons();
      const sOpts = seasons.map(s => `<option value="${escapeHtml(s)}" ${m.season===s?'selected':''}>Temporada ${escapeHtml(s)}</option>`).join('');
      const renderTeamGoals = (team, color) => team.map(p => { const goles = m.goals[p.id] || 0; return `<div class="team-player"><span style="font-weight:600">${escapeHtml(p.name)}</span><div class="goal-counter"><button onclick="app.modGoal('${m.id}', '${p.id}', -1, '${color}')">-</button><span id="goal_val_${m.id}_${p.id}">${goles}</span><button onclick="app.modGoal('${m.id}', '${p.id}', 1, '${color}')">+</button></div></div>`; }).join('');
      body = `<h2>${m.status === 'pending' ? 'Anotar Resultado' : 'Editar Partido'}</h2><div style="display:flex; align-items:center; justify-content:space-between; gap:10px; margin:8px 0 12px;"><span class="sub" style="margin:0;">Temporada del partido:</span><select onchange="app.modMatchSeason('${m.id}', this.value)" style="width:auto; padding:6px 12px; font-weight:700; font-size:13px;">${sOpts}</select></div><div class="score-input-group"><div style="text-align:center"><div style="color:var(--debt);font-weight:700;margin-bottom:4px">ROJO</div><input type="number" min="0" id="score_rojo_${m.id}" value="${m.scoreRojo}" oninput="app.modScore('${m.id}', 'rojo', this.value)" /></div><span>-</span><div style="text-align:center"><div style="color:#1E3A8A;font-weight:700;margin-bottom:4px">AZUL</div><input type="number" min="0" id="score_blanco_${m.id}" value="${m.scoreBlanco}" oninput="app.modScore('${m.id}', 'blanco', this.value)" /></div></div><div id="goal_diff_status_${m.id}">${this.renderGoalDiffStatus(m)}</div><div class="section-title">Goleadores Rojo 🔴</div><div class="team-card" style="border-left:4px solid var(--debt); padding: 4px 12px">${renderTeamGoals(m.teamRojo, 'rojo')}</div><div class="section-title">Goleadores Azul 🔵</div><div class="team-card" style="border-left:4px solid #1E3A8A; padding: 4px 12px">${renderTeamGoals(m.teamBlanco, 'blanco')}</div><button class="btn btn-primary btn-block" style="margin-top:16px" onclick="app.finishMatch('${m.id}')">💾 Guardar Partido</button><button class="btn btn-gold btn-block" style="margin-top:8px" onclick="app.exportMatchResultImage('${m.id}')">📸 Exportar Resultado del Partido</button><button class="btn btn-danger btn-block" style="margin-top:8px" onclick="app.deleteMatch('${m.id}')">🗑️ Eliminar</button>`;
    } else if(type==='cromoPlayer'){
      const seasonView = this.statSeasonFilter || this.currentSeason;
      const dataStats = this.getSortedClasificacion(seasonView, this.statMatchFilter);
      const s = dataStats.find(x => x.p.id === payload); if(!s) return '';
      const rel = this.getPlayerRelationships(payload, seasonView, this.statMatchFilter);
      const rachaTxt = s.streak > 0 ? ('🔥 +' + s.streak + 'V') : (s.last3.join('-') || '-');
      const dgCol = s.dg > 0 ? '#2ED573' : (s.dg < 0 ? '#FF6B6B' : 'var(--chalk)');
      const seasonBadge = (seasonView === 'ALL' ? 'HISTÓRICO' : seasonView) + (this.statMatchFilter ? ` · ${this.statMatchFilter}` : '');
      body = `<div class="cromo-preview" id="cromoCapture"><h3>${escapeHtml(s.p.name.toUpperCase())}</h3><div class="pos-badge">${POSITION_LABEL[s.p.position] || 'SIN POSICIÓN'} · ${s.pts} PTS (${seasonBadge})</div><div class="cromo-grid"><div class="cromo-stat"><div class="val">${s.winrate}%</div><div class="lbl">Victoria (${s.pg}V-${s.pe}E-${s.pp}D)</div></div><div class="cromo-stat"><div class="val">${s.goles}</div><div class="lbl">Goles (${s.gpp.toFixed(2)} G/P)</div></div><div class="cromo-stat"><div class="val" style="color:${dgCol}">${fmtDG(s.dg)}</div><div class="lbl">Balance (${s.gf}GF-${s.gc}GC)</div></div><div class="cromo-stat"><div class="val">${rachaTxt}</div><div class="lbl">Racha (${s.pj} PJ)</div></div><div class="cromo-stat"><div class="val" style="font-size:15px;color:#2ED573">${escapeHtml(rel.bestPartner)}</div><div class="lbl">🤝 Mejor Socio</div></div><div class="cromo-stat"><div class="val" style="font-size:15px;color:#FF6B6B">${escapeHtml(rel.worstRival)}</div><div class="lbl">😈 Bestia Negra</div></div></div></div><button class="btn btn-gold btn-block" onclick="app.exportCromoImage('${s.p.id}')">📸 Exportar Cromo</button>`;
    } else if(type==='quickTx'){
      const p = this.players.find(x=>x.id===payload.playerId); const bal = this.getPlayerBalance(p.id, payload.matchType);
      const lastTxs = this.transactions.filter(t => t.playerIds.includes(p.id)).sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 4);
      const txHistHtml = lastTxs.length ? `<div class="section-title" style="margin-top:18px">Últimos movimientos de ${escapeHtml(p.name)}</div>` + lastTxs.map(t => `<div class="ticket ${t.amount>0?'credit':'debt'}" style="padding:8px 12px; margin-bottom:6px; cursor:default"><div><div class="name" style="font-size:13px">${t.reason ? escapeHtml(t.reason) : 'Sin motivo'}</div><div class="sub">${t.matchType} · ${new Date(t.createdAt).toLocaleDateString('es-ES')}</div></div><div class="amt mono ${t.amount>0?'pos':'neg'}" style="font-size:14px">${fmt(t.amount)}</div></div>`).join('') : '';
      const settleBtn = bal < -0.001 ? `<button class="btn btn-outline btn-block" style="margin-top:10px; border-color:var(--credit); color:var(--credit);" onclick="app.settleDebt('${p.id}', '${payload.matchType}',${Math.abs(bal)})">✅ Saldar deuda (${fmtPlain(Math.abs(bal))})</button>` : '';
      body = `<h2>${escapeHtml(p.name)}</h2><div class="sub" style="color:var(--muted);font-size:13px;margin-bottom:10px">Saldo actual ${payload.matchType}: <b class="mono">${fmt(bal)}</b></div><label>Importe</label><div class="sign-toggle"><button id="qtxPlus" class="${this.qtxSign==='minus' ? '' : 'active plus'}" onclick="app.qtxSign='plus';app.render()">+ Abona</button><button id="qtxMinus" class="${this.qtxSign==='minus' ? 'active minus' : ''}" onclick="app.qtxSign='minus';app.render()">− Carga</button></div><input type="number" step="0.01" min="0" id="qtxAmount" placeholder="0.00" value="${this._qtxAmount || ''}" oninput="app._qtxAmount=this.value" style="margin-top:8px" /><label>Motivo</label><input type="text" id="qtxReason" placeholder="Partido, balón..." value="${this._qtxReason || ''}" oninput="app._qtxReason=this.value" /><button class="btn btn-primary btn-block" style="margin-top:16px" onclick="app.submitQuickTx('${p.id}','${payload.matchType}')">Registrar</button>${settleBtn}${txHistHtml}`;
    } else if(type==='editTx'){
      const isGen = this._editTxKind === 'bote';
      const t = isGen ? this.generalTransactions.find(x => x.id === this._editTxId) : this.transactions.find(x => x.id === this._editTxId);
      if(!t) { this.modal = null; return ''; }
      const who = isGen ? 'Bote general' : (t.playerIds || []).map(id => this.players.find(x=>x.id===id)?.name || '(borrado)').join(', ');
      body = `<h2>Editar movimiento</h2><div class="sub" style="margin-bottom:10px">${escapeHtml(who)}</div><label>Modalidad</label><div class="chip-group"><button class="chip ${this._editTxMatchType==='F5'?'active':''}" onclick="app._editTxMatchType='F5';app.render()">F5</button><button class="chip ${this._editTxMatchType==='F7'?'active':''}" onclick="app._editTxMatchType='F7';app.render()">F7</button></div><label>Importe</label><div class="sign-toggle"><button class="${this._editTxSign==='plus'?'active plus':''}" onclick="app._editTxSign='plus';app.render()">+ ${isGen?'Ingreso':'Abona'}</button><button class="${this._editTxSign==='minus'?'active minus':''}" onclick="app._editTxSign='minus';app.render()">− ${isGen?'Gasto':'Carga'}</button></div><input type="number" step="0.01" min="0" id="editTxAmount" value="${escapeHtml(this._editTxAmount)}" oninput="app._editTxAmount=this.value" style="margin-top:8px" /><label>Motivo</label><input type="text" id="editTxReason" value="${escapeHtml(this._editTxReason)}" oninput="app._editTxReason=this.value" placeholder="Motivo..." /><button class="btn btn-primary btn-block" style="margin-top:16px" onclick="app.submitEditTx()">💾 Guardar cambios</button>`;
    } else if(type==='addGuest'){
      body = `<h2>Jugador invitado</h2><div class="sub" style="color:var(--muted);font-size:13px;margin-bottom:6px">Solo para los equipos de hoy.</div><label>Nombre</label><input type="text" id="guestName" placeholder="Nombre" /><label>Técnica</label><div class="chip-group" id="guestSkillGroup">${Object.keys(SKILL_LABEL).map(s=>`<button class="chip ${s==='medio'?'active':''}" data-val="${s}" onclick="app.pickChip(this,'guestSkillGroup')">${SKILL_LABEL[s]}</button>`).join('')}</div><label>Físico</label><div class="chip-group" id="guestStaminaGroup">${Object.keys(STAMINA_LABEL).map(s=>`<button class="chip ${s==='medio'?'active':''}" data-val="${s}" onclick="app.pickChip(this,'guestStaminaGroup')">${STAMINA_LABEL[s]}</button>`).join('')}</div><label>Posición</label><div class="chip-group" id="guestPosGroup"><button class="chip active" data-val="" onclick="app.pickChip(this,'guestPosGroup')">-</button>${POSITIONS.map(pos=>`<button class="chip" data-val="${pos}" onclick="app.pickChip(this,'guestPosGroup')">${pos}</button>`).join('')}</div><button class="btn btn-primary btn-block" style="margin-top:16px" onclick="app.submitGuest()">Añadir a la lista de hoy</button>`;
    } else if(type==='settleMatch'){
      const mt = this.teamsMatchType; const quotaBK = parseFloat(this._smQuotaBK) || 0; const quotaNormal = parseFloat(this._smQuotaNormal) || 0; const cost = parseFloat(this._smCost) || 0; const presentPlayers = Array.from(this.teamsPresent).map(id => this.findPresentPerson(id)).filter(Boolean);
      let countBK = 0; let countNormal = 0; this._smSelected.forEach(id => { const p = this.findPresentPerson(id); if(p) { if(p.bilbaoKirolak) countBK++; else countNormal++; } });
      const collectedTotal = (countBK * quotaBK) + (countNormal * quotaNormal); const surplus = collectedTotal - cost;
      const payerOptions = `<option value="bote" ${this._smPayer==='bote'?'selected':''}>Fondo común (Bote)</option>` + [...this.players].sort((a,b)=>a.name.localeCompare(b.name)).map(p => `<option value="${p.id}" ${this._smPayer===p.id?'selected':''}>${escapeHtml(p.name)}</option>`).join('');
      body = `<h2>Liquidar Partido ${mt}</h2><div class="field-row"><div><label>Cuota (BK)</label><input type="number" id="smInputQuotaBK" step="0.10" min="0" value="${this._smQuotaBK}" oninput="app._smQuotaBK=this.value; app.updateSettleMatchUI()" /></div><div><label>Cuota (Normal)</label><input type="number" id="smInputQuotaNormal" step="0.10" min="0" value="${this._smQuotaNormal}" oninput="app._smQuotaNormal=this.value; app.updateSettleMatchUI()" /></div></div><div class="field-row" style="margin-top:10px;"><div><label>Coste Pista</label><input type="number" id="smInputCost" step="0.05" min="0" value="${this._smCost}" oninput="app._smCost=this.value; app.updateSettleMatchUI()" /></div><div><label>¿Quién pagó?</label><select id="smSelectPayer" onchange="app._smPayer=this.value">${payerOptions}</select></div></div><div class="field-row" style="align-items:center; justify-content:space-between; margin-top:14px; margin-bottom:5px"><label id="smCountLabel" style="margin:0">Cobrar cuota a (${this._smSelected.size})</label><div style="display:flex; gap:6px;"><button class="icon-btn" style="background:var(--turf-soft); border-radius:12px; padding:4px 10px;" onclick="app.selectAllSmPlayers()">Todos</button><button class="icon-btn" style="background:var(--line); border-radius:12px; padding:4px 10px;" onclick="app.clearSmPlayers()">Ninguno</button></div></div><div class="checklist" style="max-height:170px">${presentPlayers.map(p=>`<label><input type="checkbox" data-sm-id="${p.id}" ${this._smSelected.has(p.id)?'checked':''} onchange="app.toggleSmPlayer('${p.id}')" />${escapeHtml(p.name)} ${p.bilbaoKirolak?'<span class="lvl-badge">BK</span>':''} ${String(p.id).startsWith('guest_')?'<span class="lvl-badge" style="background:var(--gold-soft);color:#8a5a12">Inv.</span>':''}<span class="mono sm-price-tag" data-is-bk="${p.bilbaoKirolak?'1':'0'}" style="margin-left:auto;font-size:12px;color:var(--muted)">${this._smSelected.has(p.id)?fmtPlain(p.bilbaoKirolak?quotaBK:quotaNormal):'0.00€'}</span></label>`).join('')}</div><div id="smSummaryBox" class="ticket neutral" style="margin-top:16px; background:var(--chalk); border:1px dashed var(--muted); cursor:default"><div style="font-size:13px; color:var(--ink); width:100%">Recaudación (${countBK} BK + ${countNormal} Norm.): <b style="float:right">${fmtPlain(collectedTotal)}</b><br>Coste pista: <b style="float:right; color:var(--debt)">-${fmtPlain(cost)}</b><br><div style="border-top:1px solid var(--line); margin:6px 0 0 0; padding-top:6px; font-weight:600;">Sobrante al bote: <b style="float:right; color:${surplus>=0?'var(--credit)':'var(--debt)'}">${surplus>=0?'+':''}${fmtPlain(surplus)}</b></div></div></div><button class="btn btn-primary btn-block" style="margin-top:16px" onclick="app.submitSettleMatch()">Confirmar y Liquidar</button>`;
    }
    return `<div class="sheet-backdrop" onclick="if(event.target===this) app.closeModal()"><div class="sheet" style="${skipAnim?'animation:none':''}"><div class="sheet-handle"></div><button class="close-x" onclick="app.closeModal()">✕</button><div id="modalBodyContent">${body}</div></div></div>`;
  }

  submitEditTx(){
    let amount = parseFloat(this._editTxAmount);
    if(isNaN(amount) || amount === 0){ this.toast('Introduce un importe válido'); return; }
    amount = this._editTxSign === 'minus' ? -Math.abs(amount) : Math.abs(amount);
    const isGen = this._editTxKind === 'bote';
    const t = isGen ? this.generalTransactions.find(x => x.id === this._editTxId) : this.transactions.find(x => x.id === this._editTxId);
    if(!t) return;
    t.amount = amount;
    t.reason = (this._editTxReason || '').trim();
    t.matchType = this._editTxMatchType;
    this.save();
    this.closeModal();
    this.toast('Movimiento actualizado');
  }

  updateSettleMatchUI() {
    const quotaBK = parseFloat(this._smQuotaBK) || 0; const quotaNormal = parseFloat(this._smQuotaNormal) || 0; const cost = parseFloat(this._smCost) || 0;
    let countBK = 0; let countNormal = 0;
    this._smSelected.forEach(id => { const p = this.findPresentPerson(id); if(p) { if(p.bilbaoKirolak) countBK++; else countNormal++; } });
    const collectedTotal = (countBK * quotaBK) + (countNormal * quotaNormal); const surplus = collectedTotal - cost;
    const lbl = document.getElementById('smCountLabel'); if(lbl) lbl.innerText = `Cobrar cuota a (${this._smSelected.size})`;
    document.querySelectorAll('[data-sm-id]').forEach(cb => {
      const id = cb.getAttribute('data-sm-id'); const checked = this._smSelected.has(id); cb.checked = checked;
      const tag = cb.parentElement.querySelector('.sm-price-tag');
      if(tag) { const isBk = tag.getAttribute('data-is-bk') === '1'; tag.innerText = checked ? fmtPlain(isBk ? quotaBK : quotaNormal) : '0.00€'; }
    });
    const box = document.getElementById('smSummaryBox');
    if(box) box.innerHTML = `<div style="font-size:13px; color:var(--ink); width:100%">Recaudación (${countBK} BK + ${countNormal} Norm.): <b style="float:right">${fmtPlain(collectedTotal)}</b><br>Coste pista: <b style="float:right; color:var(--debt)">-${fmtPlain(cost)}</b><br><div style="border-top:1px solid var(--line); margin:6px 0 0 0; padding-top:6px; font-weight:600;">Sobrante al bote: <b style="float:right; color:${surplus>=0?'var(--credit)':'var(--debt)'}">${surplus>=0?'+':''}${fmtPlain(surplus)}</b></div></div>`;
  }

  modMatchSeason(matchId, newSeason) {
    const m = this.matches.find(x => x.id === matchId);
    if(m && newSeason) { m.season = newSeason; }
  }

  modScore(matchId, team, val) { 
    const m = this.matches.find(x => x.id === matchId); 
    if(m) { 
      const num = parseInt(val) || 0;
      if(team === 'rojo') { m.scoreRojo = num; m._manualRojo = (num > 0); }
      if(team === 'blanco') { m.scoreBlanco = num; m._manualBlanco = (num > 0); }
      const diffEl = document.getElementById(`goal_diff_status_${m.id}`);
      if(diffEl) diffEl.innerHTML = this.renderGoalDiffStatus(m);
    } 
  }

  modGoal(matchId, playerId, delta, teamColor) {
    const m = this.matches.find(x => x.id === matchId);
    if(m) {
      const prevSum = (teamColor === 'rojo' ? m.teamRojo : m.teamBlanco).reduce((s, p) => s + (m.goals[p.id] || 0), 0);
      const next = (m.goals[playerId] || 0) + delta; if (next < 0) return; m.goals[playerId] = next;
      const newSum = prevSum + delta;

      if(teamColor === 'rojo') { 
        if(!m._manualRojo || m.scoreRojo === prevSum || newSum > m.scoreRojo) {
          m.scoreRojo = Math.max(0, newSum);
          if(newSum === 0) m._manualRojo = false;
        }
        const el = document.getElementById(`score_rojo_${m.id}`); if(el) el.value = m.scoreRojo; 
      } else if(teamColor === 'blanco') { 
        if(!m._manualBlanco || m.scoreBlanco === prevSum || newSum > m.scoreBlanco) {
          m.scoreBlanco = Math.max(0, newSum);
          if(newSum === 0) m._manualBlanco = false;
        }
        const el = document.getElementById(`score_blanco_${m.id}`); if(el) el.value = m.scoreBlanco; 
      }
      const elGoal = document.getElementById(`goal_val_${m.id}_${playerId}`); if(elGoal) elGoal.innerText = next;
      const diffEl = document.getElementById(`goal_diff_status_${m.id}`); if(diffEl) diffEl.innerHTML = this.renderGoalDiffStatus(m);
    }
  }

  finishMatch(matchId) { const m = this.matches.find(x => x.id === matchId); if(m) { delete m._manualRojo; delete m._manualBlanco; m.status = 'completed'; this.save(); this.closeModal(); this.toast('Guardado con éxito'); } }
  deleteMatch(matchId) { if(confirm('¿Eliminar partido?')) { this.matches = this.matches.filter(m => m.id !== matchId); this.save(); this.closeModal(); this.toast('Eliminado'); } }
  pickChip(btn, groupId){ document.getElementById(groupId).querySelectorAll('.chip').forEach(c=>c.classList.remove('active')); btn.classList.add('active'); }
  savePlayerForm(id){
    const name = document.getElementById('pName').value.trim(); if(!name){ this.toast('Falta nombre'); return; }
    const data = { name, type: document.querySelector('#pTypeGroup .chip.active').dataset.val, skill: document.querySelector('#pSkillGroup .chip.active').dataset.val, stamina: document.querySelector('#pStaminaGroup .chip.active').dataset.val, position: document.querySelector('#pPosGroup .chip.active').dataset.val, isRegular: document.querySelector('#pRegGroup .chip.active').dataset.val === 'true', bilbaoKirolak: document.querySelector('#pBKGroup .chip.active').dataset.val === 'true' };
    id ? this.updatePlayer(id, data) : this.addPlayer(data);
  }
  submitQuickTx(playerId, matchType){ let amount = parseFloat(document.getElementById('qtxAmount').value); if(isNaN(amount)){ this.toast('Introduce importe'); return; } amount = (this.qtxSign || 'plus') === 'minus' ? -Math.abs(amount) : Math.abs(amount); const reason = document.getElementById('qtxReason').value; this.qtxSign = null; this._qtxAmount = ''; this._qtxReason = ''; this.addTransaction([playerId], amount, matchType, reason); }
  toggleSmPlayer(id){ this._smSelected.has(id) ? this._smSelected.delete(id) : this._smSelected.add(id); this.updateSettleMatchUI(); }
  selectAllSmPlayers(){ this._smSelected = new Set(); this.teamsPresent.forEach(id => this._smSelected.add(id)); this.updateSettleMatchUI(); }
  clearSmPlayers(){ this._smSelected = new Set(); this.updateSettleMatchUI(); }
  submitSettleMatch(){
    const mt = this.teamsMatchType; const quotaBK = parseFloat(this._smQuotaBK) || 0; const quotaNormal = parseFloat(this._smQuotaNormal) || 0; const cost = parseFloat(this._smCost) || 0; const playerIds = Array.from(this._smSelected);
    localStorage.setItem(`sm_cost_${mt}`, this._smCost); localStorage.setItem(`sm_qbk_${mt}`, this._smQuotaBK); localStorage.setItem(`sm_qnorm_${mt}`, this._smQuotaNormal);
    let collectedTotal = 0; const idsBK = []; const idsNormal = [];
    playerIds.forEach(id => { const p = this.findPresentPerson(id); if(p) { if(p.bilbaoKirolak) { collectedTotal += quotaBK; if(!String(id).startsWith('guest_')) idsBK.push(id); } else { collectedTotal += quotaNormal; if(!String(id).startsWith('guest_')) idsNormal.push(id); } } });
    const surplus = collectedTotal - cost; if(playerIds.length === 0 && surplus === 0 && cost === 0) return;
    const now = new Date().toISOString();
    if(idsBK.length > 0 && quotaBK > 0) this.transactions.push({ id:uid(), playerIds: idsBK, amount: -Math.abs(quotaBK), matchType: mt, reason: 'Cuota partido (BK)', createdAt: now });
    if(idsNormal.length > 0 && quotaNormal > 0) this.transactions.push({ id:uid(), playerIds: idsNormal, amount: -Math.abs(quotaNormal), matchType: mt, reason: 'Cuota partido (Normal)', createdAt: now });
    if(this._smPayer && this._smPayer !== 'bote' && cost > 0) this.transactions.push({ id:uid(), playerIds: [this._smPayer], amount: Math.abs(cost), matchType: mt, reason: 'Pago pista adelantado', createdAt: now });
    if(surplus !== 0) this.generalTransactions.push({ id:uid(), amount: surplus, matchType: mt, reason: 'Sobrante partido', createdAt: now });
    this.save(); this.closeModal(); this.toast('Liquidado automáticamente');
  }
  
  descargarOCompartir(blob, filename) {
    const file = new File([blob], filename, { type: blob.type });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator.share({ title: filename, files: [file] }).catch(()=>{});
    } else {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none'; 
      a.href = url; 
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 150);
    }
  }
}
// === NUEVO: Funciones de Admin globales ===
function promptAdminLogin() {
  const pinIntroducido = prompt("Introduce el PIN de Administrador:");
  if (pinIntroducido === window.app.adminPin) {
    window.app.isAdmin = true;
    localStorage.setItem('gorkaFutbitoAdmin', 'true');
    alert("¡Modo Administrador activado con éxito en este dispositivo!");
    window.app.render();
  } else if (pinIntroducido !== null) {
    alert("PIN incorrecto.");
  }
}

function logoutAdmin() {
  window.app.isAdmin = false;
  localStorage.removeItem('gorkaFutbitoAdmin');
  alert("Modo Espectador activado.");
  window.app.render();
}
let appInstanciada = false;
function iniciarApp() {
  if (appInstanciada) return;
  appInstanciada = true;
  try {
    const el = document.getElementById('app');
    if(!el) return;
    window.app = new App(); 
    document.body.addEventListener('click', (e)=>{ if(e.target.closest('.fab') || e.target.closest('.bottom-nav')) return; });
  } catch(err) {
    document.body.innerHTML = `<div style="padding:20px;color:red;"><h3>🚨 Error Fatal</h3><pre>${err.message}</pre></div>`;
  }
}

if(document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', iniciarApp); } else { iniciarApp(); }
window.addEventListener('load', iniciarApp); setTimeout(iniciarApp, 500);

document.addEventListener('click', function(e){ const t = e.target.closest('[data-open-add-player]'); if(t) app.openModal('addPlayer'); });
if('serviceWorker' in navigator){ window.addEventListener('load', ()=>{ navigator.serviceWorker.register('sw.js').catch(()=>{}); }); }
window.addEventListener('online', ()=>{ if(window.app && window.app.githubSync && window.app.githubSyncStatus && !window.app.githubSyncStatus.ok){ window.app.pushToGithub(); } });
// === FIN DEL ARCHIVO APP.JS ===
