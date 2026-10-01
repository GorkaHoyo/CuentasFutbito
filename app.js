console.log("🚀 app.js detectado y cargando...");

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
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`
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
function todayStr(){ return new Date().toLocaleDateString('es-ES', { weekday:'long', day:'numeric', month:'long', year:'numeric' }); }
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
    
    this.currentSeason = localStorage.getItem('football-season') || '2026/2027';
    this.teamsMatchType = localStorage.getItem('football-teams-match') || 'F5';
    
    try { 
      const parsed = JSON.parse(localStorage.getItem('football-teams-present'));
      this.teamsPresent = new Set(Array.isArray(parsed) ? parsed : []);
    } catch(e) { this.teamsPresent = new Set(); }
    
    try { 
      const parsed = JSON.parse(localStorage.getItem('football-teams-guests'));
      this.teamsGuests = Array.isArray(parsed) ? parsed : [];
    } catch(e) { this.teamsGuests = []; }
    
    try { this.teamsResult = JSON.parse(localStorage.getItem('football-teams-result')); } catch(e) { this.teamsResult = null; }
    this.teamsSwapSel = null;
  }

  saveTeamsLocal() { 
    localStorage.setItem('football-teams-match', this.teamsMatchType); 
    localStorage.setItem('football-teams-present', JSON.stringify(Array.from(this.teamsPresent))); 
    localStorage.setItem('football-teams-guests', JSON.stringify(this.teamsGuests)); 
    localStorage.setItem('football-teams-result', JSON.stringify(this.teamsResult)); 
    this.scheduleGithubPush(); 
  }

  saveLocalOnly() {
    localStorage.setItem('football-players', JSON.stringify(this.players)); 
    localStorage.setItem('football-transactions', JSON.stringify(this.transactions)); 
    localStorage.setItem('football-general-transactions', JSON.stringify(this.generalTransactions)); 
    localStorage.setItem('football-matches', JSON.stringify(this.matches));
    localStorage.setItem('football-season', this.currentSeason);
  }

  save() { 
    this.saveLocalOnly();
    this.scheduleGithubPush(); 
  }

  saveGithubConfig(cfg){ this.githubSync = cfg; localStorage.setItem('githubSyncConfig', JSON.stringify(cfg)); }
  
  clearGithubConfig(){ 
    if(!confirm('¿Desconectar sincronización con GitHub?')) return; 
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

  hardResetApp() {
    if(confirm('¿Forzar actualización de la app?')) {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(registrations => {
                for(let r of registrations) r.unregister();
                window.location.reload(true);
            });
        } else {
            window.location.reload(true);
        }
    }
  }
  
  async pullFromGithub(silent){
    if(!this.githubSync) return;
    if(this._isSyncing) return;
    this._isSyncing = true;
    const branch = this.githubSync.branch ?? 'main'; 
    try{
      const res = await fetch(`${this.githubApiUrl()}?ref=${encodeURIComponent(branch)}&nocache=${Math.random()}`, { 
        headers: { Authorization: `Bearer ${this.githubSync.token}`, Accept: 'application/vnd.github+json' }
      });
      if(res.status === 404){ 
        this.githubSync.sha = null; this.saveGithubConfig(this.githubSync); this._isSyncing = false;
        await this.pushToGithub(); return; 
      }
      if(res.status === 401 || res.status === 403) throw new Error('Token inválido');
      if(!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json(); 
      this.githubSync.sha = data.sha; this.saveGithubConfig(this.githubSync);
      const json = JSON.parse(b64DecodeUnicode(data.content));
      this.players = json.players ?? []; 
      this.transactions = json.transactions ?? []; 
      this.generalTransactions = json.generalTransactions ?? [];
      this.matches = json.matches ?? [];
      if (json.currentSeason) this.currentSeason = json.currentSeason;
      if (json.teamsMatchType) this.teamsMatchType = json.teamsMatchType;
      if (json.teamsPresent) this.teamsPresent = new Set(json.teamsPresent);
      if (json.teamsGuests) this.teamsGuests = json.teamsGuests;
      if (json.teamsResult !== undefined) this.teamsResult = json.teamsResult;
      this.saveLocalOnly(); 
      localStorage.setItem('football-teams-match', this.teamsMatchType);
      localStorage.setItem('football-teams-present', JSON.stringify(Array.from(this.teamsPresent)));
      localStorage.setItem('football-teams-guests', JSON.stringify(this.teamsGuests));
      localStorage.setItem('football-teams-result', JSON.stringify(this.teamsResult));
      this.githubSyncStatus = {ok:true, at:new Date()};
      if(!silent) this.toast('Sincronizado');
    } catch(err){ 
      this.githubSyncStatus = {ok:false, error: err.message, at:new Date()}; 
      if(!silent) this.toast(`Error: ${err.message}`); 
    } finally {
      this._isSyncing = false; this.render(); 
    }
  }

  async pushToGithub(){
    if(!this.githubSync) return;
    if(this._isSyncing) { clearTimeout(this._pushTimer); this._pushTimer = setTimeout(()=>this.pushToGithub(), 1000); return; }
    this._isSyncing = true;
    const branch = this.githubSync.branch ?? 'main'; 
    try {
      const payload = { 
        players: this.players, transactions: this.transactions, generalTransactions: this.generalTransactions, 
        matches: this.matches, currentSeason: this.currentSeason, teamsMatchType: this.teamsMatchType,
        teamsPresent: Array.from(this.teamsPresent), teamsGuests: this.teamsGuests, teamsResult: this.teamsResult,
        exportDate: new Date().toISOString(), version: '2.1' 
      };
      const body = { message: 'Actualización', content: b64EncodeUnicode(JSON.stringify(payload, null, 2)), branch };
      if(this.githubSync.sha) body.sha = this.githubSync.sha;
      const headers = { Authorization: `Bearer ${this.githubSync.token}`, Accept:'application/vnd.github+json', 'Content-Type':'application/json' };
      let res = await fetch(this.githubApiUrl(), { method:'PUT', headers, body: JSON.stringify(body) });
      if(res.status === 409 || res.status === 422){ 
        const fresh = await fetch(`${this.githubApiUrl()}?ref=${encodeURIComponent(branch)}&nocache=${Math.random()}`, { headers: { Authorization: `Bearer ${this.githubSync.token}`, Accept: 'application/vnd.github+json' } }); 
        if(fresh.ok){ 
          const fd = await fresh.json(); body.sha = fd.sha; this.githubSync.sha = fd.sha; this.saveGithubConfig(this.githubSync);
          res = await fetch(this.githubApiUrl(), { method:'PUT', headers, body: JSON.stringify(body) }); 
        } 
      }
      if(!res.ok) throw new Error(`HTTP ${res.status}`);
      const rd = await res.json(); 
      this.githubSync.sha = rd.content.sha; this.saveGithubConfig(this.githubSync); 
      this.githubSyncStatus = {ok:true, at:new Date()};
    } catch(err){ this.githubSyncStatus = {ok:false, error: err.message, at:new Date()}; } finally { this._isSyncing = false; this.render(); }
  }

  toast(msg){ this.toastMsg = msg; this.render(); setTimeout(()=>{ this.toastMsg=null; this.render(); }, 1800); }

  getPlayerBalance(playerId, matchType){
    const player = this.players.find(p=>p.id===playerId); if(!player) return 0;
    let balance = 0;
    this.transactions.forEach(t=>{
      if(!t.playerIds.includes(playerId)) return;
      if(player.type === 'F5/F7' && t.matchType === matchType) balance += t.amount; 
      else if(player.type === matchType && t.matchType === matchType) balance += t.amount;
    });
    return balance;
  }
  getPlayerTotalBalance(playerId){ return this.transactions.reduce((bal, t) => t.playerIds.includes(playerId) ? bal + t.amount : bal, 0); }
  getTotalPot(matchType){ return this.generalTransactions.filter(t=>t.matchType===matchType).reduce((s,t)=>s+t.amount,0); }
  getPlayersForMatch(matchType){ return this.players.filter(p=> p.type === matchType || p.type === 'F5/F7').sort((a,b)=>a.name.localeCompare(b.name)); }
  classify(matchType){
    const players = this.getPlayersForMatch(matchType); const credit=[], neutral=[], debt=[];
    players.forEach(p=>{
      const b = this.getPlayerBalance(p.id, matchType);
      if(b > 0.001) credit.push({p, b}); else if(b < -0.001) debt.push({p, b}); else neutral.push({p, b});
    });
    credit.sort((a,b)=>a.p.name.localeCompare(b.p.name)); neutral.sort((a,b)=>a.p.name.localeCompare(b.p.name)); debt.sort((a,b)=>a.p.name.localeCompare(b.p.name));
    return {credit, neutral, debt};
  }

  addPlayer(data){
    this.players.push({ id: uid(), name: data.name.trim(), type: data.type, isRegular: data.isRegular, skill: data.skill || 'medio', stamina: data.stamina || 'medio', position: data.position || '', bilbaoKirolak: data.bilbaoKirolak || false, createdAt: new Date().toISOString() });
    this.save(); this.closeModal(); this.toast('Añadido');
  }
  updatePlayer(id, data){ const p = this.players.find(x=>x.id===id); if(!p) return; Object.assign(p, data); this.save(); this.closeModal(); this.toast('Actualizado'); }
  deletePlayer(id){
    if(!confirm('¿Eliminar jugador?')) return;
    this.players = this.players.filter(p=>p.id!==id);
    this.transactions = this.transactions.map(t => { if(t.playerIds.includes(id)) { return { ...t, playerIds: t.playerIds.filter(pid=>pid!==id) }; } return t; }).filter(t => t.playerIds.length > 0);
    this.teamsPresent.delete(id); this.save(); this.closeModal(); this.toast('Eliminado');
  }
  addTransaction(playerIds, amount, matchType, reason){
    if(playerIds.length===0 || !amount) return;
    this.transactions.push({ id:uid(), playerIds, amount:parseFloat(amount), matchType, reason: reason || '', createdAt:new Date().toISOString() });
    this.save(); this.closeModal(); this.toast('Registrado');
  }
  updateTransaction(id, data){ const t = this.transactions.find(x=>x.id===id); if(!t) return; Object.assign(t, data); this.save(); this.closeModal(); this.toast('Actualizado'); }
  deleteTransaction(id){ if(!confirm('¿Eliminar?')) return; this.transactions = this.transactions.filter(t=>t.id!==id); this.save(); this.closeModal(); this.toast('Eliminado'); }
  addGeneralTransaction(amount, matchType, reason){
    if(!amount) return;
    this.generalTransactions.push({ id:uid(), amount:parseFloat(amount), matchType, reason: reason || '', createdAt:new Date().toISOString() });
    this.save(); this.closeModal(); this.toast('Registrado');
  }
  deleteGeneralTransaction(id){ if(!confirm('¿Eliminar?')) return; this.generalTransactions = this.generalTransactions.filter(t=>t.id!==id); this.save(); this.closeModal(); this.toast('Eliminado'); }
  settleDebt(playerId, matchType, amount){ this.addTransaction([playerId], amount, matchType, 'Saldar deuda'); }

  exportBackup(){
    const data = { players:this.players, transactions:this.transactions, generalTransactions:this.generalTransactions, matches:this.matches, exportDate:new Date().toISOString(), version:'2.1' };
    const blob = new Blob([JSON.stringify(data,null,2)], {type:'application/json'}); const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `futbol-backup-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(url);
    this.toast('Exportado');
  }
  importBackup(file){
    const reader = new FileReader();
    reader.onload = (e)=>{
      try{
        const data = JSON.parse(e.target.result); if(!confirm('¿Reemplazar datos?')) return;
        this.players = data.players || []; this.transactions = data.transactions || []; this.generalTransactions = data.generalTransactions || []; this.matches = data.matches || [];
        this.save(); this.render(); this.toast('Importado');
      }catch(err){ alert('Archivo no válido.'); }
    }; reader.readAsText(file);
  }

  requiredTeamSizes(matchType){ return matchType === 'F5' ? [10,12] : [14, 16]; }
  findPresentPerson(id){ return this.players.find(x=>x.id===id) || this.teamsGuests.find(x=>x.id===id); }
  presentWithoutPosition(){ return Array.from(this.teamsPresent).map(id=>this.findPresentPerson(id)).filter(p=> p && !p.position); }
  generateTeams(balanced){
    const ids = Array.from(this.teamsPresent); const required = this.requiredTeamSizes(this.teamsMatchType);
    if(!required.includes(ids.length)){ this.toast(`Hacen falta ${required.join(' o ')} jugadores`); return; }
    const missingPosition = this.presentWithoutPosition();
    if(missingPosition.length > 0){ alert(`Asigna posición a:\n${missingPosition.map(p=>'· '+p.name).join('\n')}`); return; }
    
    let pool = ids.map(id=>{ const p = this.findPresentPerson(id); if(!p) return null; return { id:p.id, name:p.name, weight: (SKILL_WEIGHT[p.skill] || 3) + (STAMINA_WEIGHT[p.stamina] || 2), position: p.position || 'sin posición' }; }).filter(Boolean);
    const teamRojo=[], teamBlanco=[]; let sumRojo=0, sumBlanco=0;
    
    if(balanced){
      const byPos = {}; pool.forEach(p=>{ if(!byPos[p.position]) byPos[p.position] = []; byPos[p.position].push(p); });
      Object.values(byPos).forEach(group=>{
        group.sort(()=>Math.random()-0.5); group.sort((a,b)=>b.weight-a.weight);
        group.forEach(pl=>{ if(sumRojo <= sumBlanco){ teamRojo.push(pl); sumRojo += pl.weight; } else { teamBlanco.push(pl); sumBlanco += pl.weight; } });
      });
    } else {
      pool.sort(()=>Math.random()-0.5);
      pool.forEach(pl=>{ if(teamRojo.length <= teamBlanco.length){ teamRojo.push(pl); } else { teamBlanco.push(pl); } });
    }
    this.sortByPosition(teamRojo); this.sortByPosition(teamBlanco);
    this.teamsResult = { teamRojo, teamBlanco }; this.teamsSwapSel = null; this.saveTeamsLocal(); this.render();
  }
  sortByPosition(list){ const order = { portero:0, defensa:1, medio:2, delantero:3, 'sin posición':4 }; return list.sort((a,b)=> (order[a.position] ?? 4) - (order[b.position] ?? 4)); }
  swapTeamPlayer(team, idx){
    if(!this.teamsSwapSel){ this.teamsSwapSel = {team, idx}; this.render(); return; }
    const sel = this.teamsSwapSel; if(sel.team === team && sel.idx === idx){ this.teamsSwapSel = null; this.render(); return; }
    const a = sel.team==='rojo' ? this.teamsResult.teamRojo : this.teamsResult.teamBlanco; const b = team==='rojo' ? this.teamsResult.teamRojo : this.teamsResult.teamBlanco;
    const tmp = a[sel.idx]; a[sel.idx] = b[idx]; b[idx] = tmp;
    this.sortByPosition(this.teamsResult.teamRojo); this.sortByPosition(this.teamsResult.teamBlanco);
    this.teamsSwapSel = null; this.saveTeamsLocal(); this.render();
  }

  sellarPartidoOficial() {
    if(!this.teamsResult) return;
    if(confirm('¿Sellar como partido oficial? Quedará pendiente de anotar resultado.')) {
      const match = { id: 'match_' + uid(), date: new Date().toISOString(), season: this.currentSeason, matchType: this.teamsMatchType, teamRojo: this.teamsResult.teamRojo.map(p => ({ id: p.id, name: p.name })), teamBlanco: this.teamsResult.teamBlanco.map(p => ({ id: p.id, name: p.name })), scoreRojo: 0, scoreBlanco: 0, goals: {}, status: 'pending' };
      this.matches.push(match); this.save(); this.toast('Partido sellado'); this.setPage('estadisticas'); this.statTab = 'partidos'; this.render();
    }
  }

  calcularClasificacion(season) {
    const stats = {}; this.players.forEach(p => { stats[p.id] = { p, pj:0, pg:0, pe:0, pp:0, goles:0 }; });
    const matchesToCount = this.matches.filter(m => m.status === 'completed' && m.season === season);
    matchesToCount.forEach(m => {
      let winner = null; if(m.scoreRojo > m.scoreBlanco) winner = 'rojo'; else if(m.scoreBlanco > m.scoreRojo) winner = 'blanco';
      const processTeam = (team, color) => { team.forEach(player => { if(!stats[player.id]) return; stats[player.id].pj++; if(winner === null) stats[player.id].pe++; else if(winner === color) stats[player.id].pg++; else stats[player.id].pp++; if(m.goals[player.id]) stats[player.id].goles += m.goals[player.id]; }); };
      processTeam(m.teamRojo, 'rojo'); processTeam(m.teamBlanco, 'blanco');
    });
    return Object.values(stats).filter(s => s.pj > 0).map(s => { s.winrate = Math.round((s.pg / s.pj) * 100); return s; }).sort((a, b) => { if(b.winrate !== a.winrate) return b.winrate - a.winrate; if(b.pj !== a.pj) return b.pj - a.pj; return b.goles - a.goles; });
  }

  async ensureFonts(){ try{ await Promise.all([ document.fonts.load('700 32px Oswald'), document.fonts.load('600 20px Oswald'), document.fonts.load('400 16px Oswald'), document.fonts.load('700 24px "Space Mono"'), document.fonts.load('400 16px "Space Mono"')]); }catch(e){} }

  shareTeams(){
    const r = this.teamsResult; if(!r) return;
    let txt = `⚽ EQUIPOS ${this.teamsMatchType}\n\n🔴 Equipo Rojo\n${r.teamRojo.map(p=>`- ${p.name}`).join('\n')}\n\n🔵 Equipo Azul\n${r.teamBlanco.map(p=>`- ${p.name}`).join('\n')}`;
    if(navigator.share){ navigator.share({ text: txt }).catch(()=>{}); } else { navigator.clipboard.writeText(txt).then(()=>{ this.toast('Copiado'); }); }
  }

  openModal(type, payload){ 
    if(type === 'settleMatch') { this._smCost = "19.55"; this._smQuotaBK = "3.00"; this._smQuotaNormal = "0.00"; this._smPayer = 'bote'; this._smSelected = new Set(); this.teamsPresent.forEach(id => { if(!String(id).startsWith('guest_')) this._smSelected.add(id); }); }
    this.modal = {type, payload: payload || {}}; this.render(); 
  }
  closeModal(){ this.modal = null; this.render(); }
  setPage(p){ this.page = p; this.modal = null; this.pageAnim = true; this.render(); this.pageAnim = false; }

  render(){
    const el = document.getElementById('app');
    if(!el) { console.error("No se ha encontrado el elemento <div id='app'> en tu index.html"); return; }

    try {
      let prevContent = el.querySelector('.content'); let contentScroll = prevContent ? prevContent.scrollTop : 0;
      let activeId = null; let selStart = null;
      if(document.activeElement && document.activeElement.id){
        activeId = document.activeElement.id;
        try { if(document.activeElement.selectionStart !== undefined && document.activeElement.selectionStart !== null) selStart = document.activeElement.selectionStart; } catch(e) {}
      }
      
      let inner = `${this.renderTopbar()}<div class="content ${this.pageAnim ? 'animate-fade' : ''}">${this.renderPage()}</div>${this.renderFab()}${this.renderBottomNav()}`;
      if (this.modal) inner += this.renderModal();
      if (this.toastMsg) inner += `<div class="toast">${escapeHtml(this.toastMsg)}</div>`;
      el.innerHTML = inner;

      let newContent = el.querySelector('.content'); if(newContent) newContent.scrollTop = contentScroll;
      if(activeId){ let actEl = document.getElementById(activeId); if(actEl){ actEl.focus(); try { if(selStart != null && actEl.setSelectionRange) actEl.setSelectionRange(selStart, selStart); } catch(e){} } }
    } catch(err) {
      el.innerHTML = `<div style="padding:20px;color:red;background:white;"><h3>🚨 Error</h3><pre>${err.message}</pre></div>`;
    }
  }

  renderTopbar(){ return `<div class="topbar"><div class="brand">${ICONS.ball}<div><h1>Cuentas F5·F7</h1><div class="date">${todayStr()}</div></div></div><div class="match-switch"><button class="${this.matchFilter==='F5'?'active':''}" onclick="app.matchFilter='F5';app.render()">F5</button><button class="${this.matchFilter==='F7'?'active':''}" onclick="app.matchFilter='F7';app.render()">F7</button></div></div>`; }

  renderScoreboard(matchType){
    const bote = this.getTotalPot(matchType); const {credit, debt} = this.classify(matchType); const jugadores = [...credit, ...debt].reduce((s,x)=>s+x.b,0); const balance = bote + jugadores; const cls = v => v>0.001?'pos':(v<-0.001?'neg':'neu');
    return `<div class="scoreboard"><div class="cell"><div class="stat-label">Bote</div><div class="stat-value mono ${cls(bote)}">${fmtPlain(bote)}</div></div><div class="cell"><div class="stat-label">Jugadores</div><div class="stat-value mono ${cls(jugadores)}">${fmt(jugadores)}</div></div><div class="cell"><div class="stat-label">Balance</div><div class="stat-value mono ${cls(balance)}">${fmtPlain(balance)}</div></div></div>`;
  }

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
    return `${this.renderScoreboard(mt)}
      <div class="section-title"><span class="dot" style="background:var(--credit)"></span>Con crédito<span class="count">${credit.length}</span></div>${credit.length ? credit.map(i=>row(i,'credit')).join('') : '<div class="empty-state">Nadie tiene crédito todavía</div>'}
      <div class="section-title"><span class="dot" style="background:var(--line)"></span>Al día<span class="count">${neutral.length}</span></div>${neutral.length ? neutral.map(i=>row(i,'neutral')).join('') : '<div class="empty-state">—</div>'}
      <div class="section-title"><span class="dot" style="background:var(--debt)"></span>Con deuda<span class="count">${debt.length}</span></div>${debt.length ? debt.map(i=>row(i,'debt')).join('') : '<div class="empty-state">Nadie tiene deudas 🎉</div>'}`;
  }

  renderJugadores(){
    let list = [...this.players];
    if(this.jugSearch) { const q = this.jugSearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); list = list.filter(p=> p.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(q)); }
    if(this.jugFilterType) list = list.filter(p => p.type === this.jugFilterType || p.type === 'F5/F7');
    if(this.jugFilterRegular) list = list.filter(p=> String(p.isRegular) === this.jugFilterRegular);
    list.sort((a,b)=>a.name.localeCompare(b.name));
    const pList = list.map(p=>{ const total = this.getPlayerTotalBalance(p.id); return `<div class="ticket neutral" onclick="app.openModal('editPlayer',{id:'${p.id}'})"><div><div class="name">${escapeHtml(p.name)}</div><div class="sub">${p.type}${p.isRegular ? ' · habitual' : ' · esporádico'}${p.bilbaoKirolak ? ' · Bilbao Kirolak' : ''}</div></div><div class="amt mono ${total>0?'pos':(total<0?'neg':'zero')}">${fmt(total)}</div></div>`; }).join('');
    return `<input type="search" class="search-bar" placeholder="Buscar jugador..." value="${escapeHtml(this.jugSearch)}" oninput="app.jugSearch=this.value; app.render()" />
      <div class="filter-bar"><button class="chip ${this.jugFilterType===''?'active':''}" onclick="app.jugFilterType='';app.render()">Todos</button><button class="chip ${this.jugFilterType==='F5'?'active':''}" onclick="app.jugFilterType='F5';app.render()">F5</button><button class="chip ${this.jugFilterType==='F7'?'active':''}" onclick="app.jugFilterType='F7';app.render()">F7</button></div>
      <div class="section-title">Jugadores<span class="count">${list.length}</span></div>${pList || '<div class="empty-state">No hay jugadores.</div>'}`;
  }

  renderMovimientos(){
    return `<div class="subtabs"><button class="chip ${this.movTab==='jugador'?'active':''}" style="flex:1" onclick="app.movTab='jugador';app.render()">A jugadores</button><button class="chip ${this.movTab==='bote'?'active':''}" style="flex:1" onclick="app.movTab='bote';app.render()">Al bote</button></div>
      ${this.movTab==='jugador' ? this.renderMovJugadorForm() : this.renderMovBoteForm()}`;
  }

  renderMovJugadorForm(){
    const mt = this._movMatchType || this.matchFilter; const sign = this._movSign || 'plus'; 
    const players = this.getPlayersForMatch(mt); const sel = this._movSelected || new Set();
    const pList = players.map(p=>`<label><input type="checkbox" value="${p.id}" ${sel.has(p.id)?'checked':''} onchange="app.toggleMovPlayer('${p.id}')" />${escapeHtml(p.name)}</label>`).join('');
    return `<label>Tipo de partido</label><div class="chip-group"><button class="chip ${mt==='F5'?'active':''}" onclick="app._movMatchType='F5';app.render()">F5</button><button class="chip ${mt==='F7'?'active':''}" onclick="app._movMatchType='F7';app.render()">F7</button></div>
      <div class="field-row" style="align-items:center; justify-content:space-between; margin-top:14px; margin-bottom:5px"><label style="margin:0">Jugadores</label><div style="display:flex; gap:6px;"><button class="icon-btn" style="color:var(--pitch); font-size:12px; font-weight:600; background:var(--turf-soft); padding:4px 10px; border-radius:12px; width:auto;" onclick="app.selectPresentPlayers()">Del partido de hoy</button><button class="icon-btn" style="color:var(--muted); font-size:12px; font-weight:600; background:var(--line); padding:4px 10px; border-radius:12px; width:auto;" onclick="app.clearMovPlayers()">Vaciar</button></div></div>
      <div class="checklist">${pList || '<div class="empty-state">No hay jugadores</div>'}</div>
      <label>Importe (por jugador)</label><div class="sign-toggle"><button class="${sign==='plus'?'active plus':''}" onclick="app._movSign='plus';app.render()">+ Abona</button><button class="${sign==='minus'?'active minus':''}" onclick="app._movSign='minus';app.render()">− Carga</button></div>
      <input type="number" step="0.01" min="0" id="movAmount" placeholder="0.00" value="${this._movAmount || ''}" oninput="app._movAmount=this.value" style="margin-top:8px" />
      <label>Motivo (opcional)</label><input type="text" id="movReason" placeholder="Partido, balón..." value="${this._movReason || ''}" oninput="app._movReason=this.value" />
      <button class="btn btn-primary btn-block" style="margin-top:16px" onclick="app.submitMovJugador()">Registrar movimiento</button>`;
  }

  toggleMovPlayer(id){ this._movSelected = this._movSelected || new Set(); this._movSelected.has(id) ? this._movSelected.delete(id) : this._movSelected.add(id); }
  clearMovPlayers(){ this._movSelected = new Set(); this.render(); }
  selectPresentPlayers(){ if(this.teamsPresent.size === 0){ this.toast('Ve a Equipos y marca quién juega hoy'); return; } this._movSelected = this._movSelected || new Set(); this.teamsPresent.forEach(id => { if(!String(id).startsWith('guest_')) this._smSelected.add(id); }); this.render(); }
  submitMovJugador(){ 
    const mt = this._movMatchType || this.matchFilter; const sel = Array.from(this._movSelected || []); 
    let amount = parseFloat(this._movAmount); if(isNaN(amount)){ this.toast('Introduce un importe'); return; } 
    amount = (this._movSign || 'plus') === 'minus' ? -Math.abs(amount) : Math.abs(amount); 
    this.addTransaction(sel, amount, mt, this._movReason); this._movSelected = new Set(); this._movAmount=''; this._movReason=''; this.render(); 
  }

  renderMovBoteForm(){
    const mt = this._boteMatchType || this.matchFilter; const sign = this._boteSign || 'plus';
    const hList = this.generalTransactions.filter(t=>t.matchType===mt).sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).slice(0,8).map(t=>`<div class="ticket neutral"><div><div class="name">${t.reason ? escapeHtml(t.reason) : 'Movimiento del bote'}</div><div class="sub">${new Date(t.createdAt).toLocaleDateString('es-ES')}</div></div><div style="display:flex;align-items:center;gap:10px"><div class="amt mono ${t.amount>0?'pos':'neg'}">${fmt(t.amount)}</div><button class="icon-btn" onclick="event.stopPropagation();app.deleteGeneralTransaction('${t.id}')">${ICONS.trash}</button></div></div>`).join('');
    return `<label>Tipo de partido</label><div class="chip-group"><button class="chip ${mt==='F5'?'active':''}" onclick="app._boteMatchType='F5';app.render()">F5</button><button class="chip ${mt==='F7'?'active':''}" onclick="app._boteMatchType='F7';app.render()">F7</button></div>
      <label>Importe</label><div class="sign-toggle"><button class="${sign==='plus'?'active plus':''}" onclick="app._boteSign='plus';app.render()">+ Ingreso</button><button class="${sign==='minus'?'active minus':''}" onclick="app._boteSign='minus';app.render()">− Gasto</button></div>
      <input type="number" step="0.01" min="0" placeholder="0.00" value="${this._boteAmount || ''}" oninput="app._boteAmount=this.value" style="margin-top:8px" />
      <label>Motivo (opcional)</label><input type="text" placeholder="Balón, pista..." value="${this._boteReason || ''}" oninput="app._boteReason=this.value" />
      <button class="btn btn-primary btn-block" style="margin-top:16px" onclick="app.submitMovBote()">Registrar en el bote</button>
      <div class="section-title" style="margin-top:24px">Últimos movimientos</div>${hList || '<div class="empty-state">Sin movimientos</div>'}`;
  }
  submitMovBote(){ const mt = this._boteMatchType || this.matchFilter; let amount = parseFloat(this._boteAmount); if(isNaN(amount)){ this.toast('Introduce importe'); return; } amount = (this._boteSign || 'plus') === 'minus' ? -Math.abs(amount) : Math.abs(amount); this.addGeneralTransaction(amount, mt, this._boteReason); this._boteAmount=''; this._boteReason=''; this.render(); }

  renderEquipos(){
    const mt = this.teamsMatchType; let players = this.getPlayersForMatch(mt);
    if(this.teamsSearch) { const q = this.teamsSearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); players = players.filter(p=> p.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(q)); }
    const count = this.teamsPresent.size; const required = this.requiredTeamSizes(mt); const sizeOk = required.includes(count);
    const missingPosition = this.presentWithoutPosition(); const ok = sizeOk && missingPosition.length === 0;

    const playersHtml = players.length > 0 ? players.map(p=>`<label><input type="checkbox" ${this.teamsPresent.has(p.id)?'checked':''} onchange="app.togglePresent('${p.id}')" />${escapeHtml(p.name)}${p.position?'':' <span class="lvl-badge" style="background:var(--debt-soft);color:var(--debt)">Sin pos.</span>'} <span class="lvl-badge" style="margin-left:auto">Niv:${SKILL_LABEL[p.skill] || 'Medio'} • Fis:${STAMINA_LABEL[p.stamina] || 'Medio'}</span></label>`).join('') : '<div class="empty-state">No hay jugadores que coincidan</div>';
    const guestsHtml = this.teamsGuests.map(g=>`<label><input type="checkbox" ${this.teamsPresent.has(g.id)?'checked':''} onchange="app.togglePresent('${g.id}')" />${escapeHtml(g.name)} <span class="lvl-badge" style="background:var(--gold-soft);color:#8a5a12">Invitado</span>${g.position?'':' <span class="lvl-badge" style="background:var(--debt-soft);color:var(--debt)">Sin pos.</span>'}<span class="lvl-badge" style="margin-left:auto">Niv:${SKILL_LABEL[g.skill] || 'Medio'} • Fis:${STAMINA_LABEL[g.stamina] || 'Medio'}</span><button class="icon-btn" onclick="event.preventDefault();app.removeGuest('${g.id}')">${ICONS.trash}</button></label>`).join('');

    return `
      <label>Tipo de partido</label><div class="chip-group"><button class="chip ${mt==='F5'?'active':''}" onclick="app.teamsMatchType='F5';app.teamsPresent=new Set();app.teamsGuests=[];app.teamsResult=null;app.saveTeamsLocal();app.render()">F5</button><button class="chip ${mt==='F7'?'active':''}" onclick="app.teamsMatchType='F7';app.teamsPresent=new Set();app.teamsGuests=[];app.teamsResult=null;app.saveTeamsLocal();app.render()">F7</button></div>
      <label style="display:flex; justify-content:space-between; align-items:flex-end;">Jugadores presentes hoy <span class="mono" style="text-transform:none;font-weight:700;color:${sizeOk ? 'var(--credit)' : 'var(--debt)'}">${count} / ${required.join(' o ')}</span></label>
      <input type="search" class="search-bar" placeholder="Buscar jugador..." value="${escapeHtml(this.teamsSearch || '')}" oninput="app.teamsSearch=this.value; app.render()" style="margin-bottom:8px;" />
      <div class="checklist" style="margin-bottom:8px">${playersHtml}${guestsHtml}</div>
      <div class="field-row" style="margin-bottom:14px"><button class="btn btn-sm btn-outline" onclick="app.openModal('addGuest')">${ICONS.plus} Añadir invitado</button></div>
      ${!sizeOk ? `<div class="empty-state" style="text-align:left;padding:8px 2px">Hacen falta exactamente ${required.join(' o ')} jugadores presentes.</div>` : ''}
      ${sizeOk && missingPosition.length > 0 ? `<div class="empty-state" style="text-align:left;padding:8px 2px;color:var(--debt)">Falta asignar posición a: ${missingPosition.map(p=>escapeHtml(p.name)).join(', ')}.</div>` : ''}
      <div class="field-row"><button class="btn btn-primary" ${!ok?'disabled style="opacity:.45"':''} onclick="app.generateTeams(true)">${ICONS.shuffle} Equilibrar</button><button class="btn btn-outline" ${!ok?'disabled style="opacity:.45"':''} onclick="app.generateTeams(false)">Aleatorio</button></div>
      ${count > 0 ? `<button class="btn btn-block" style="margin-top:12px; background:var(--gold-soft); color:#8a5a12; border:1.5px solid var(--gold);" onclick="app.openModal('settleMatch')">💰 Liquidar Partido</button>` : ''}
      ${this.teamsResult ? this.renderTeamsResult(this.teamsResult) : ''}
    `;
  }

  togglePresent(id){ this.teamsPresent.has(id) ? this.teamsPresent.delete(id) : this.teamsPresent.add(id); this.saveTeamsLocal(); this.render(); }
  removeGuest(id){ this.teamsGuests = this.teamsGuests.filter(g=>g.id!==id); this.teamsPresent.delete(id); this.saveTeamsLocal(); this.render(); }
  submitGuest(){ 
    const name = document.getElementById('guestName').value.trim(); if(!name){ this.toast('Falta nombre'); return; } 
    const skill = document.querySelector('#guestSkillGroup .chip.active').dataset.val; const stamina = document.querySelector('#guestStaminaGroup .chip.active').dataset.val; const position = document.querySelector('#guestPosGroup .chip.active').dataset.val; 
    const guest = { id:'guest_'+uid(), name, skill, stamina, position, bilbaoKirolak: false }; this.teamsGuests.push(guest); this.teamsPresent.add(guest.id); this.saveTeamsLocal(); this.closeModal(); this.toast('Invitado añadido'); 
  }

  renderTeamsResult(r){
    const avg = list => list.length ? (list.reduce((s,p)=>s+p.weight,0)/list.length) : 0;
    const teamBlock = (team, label, list, average, accent) => {
      const pList = list.length > 0 ? list.map((p,i)=>`<div class="team-player ${this.teamsSwapSel?.team===team && this.teamsSwapSel?.idx===i ? 'selected':''}" onclick="app.swapTeamPlayer('${team}', ${i})"><span>${escapeHtml(p.name)} <span class="lvl-badge" style="background:${POSITION_COLOR[p.position] || '#8A8A8A'};color:#fff">${POSITION_ABBR[p.position] || '-'}</span></span><span class="lvl-badge">★ ${p.weight}</span></div>`).join('') : '<div class="empty-state">Sin jugadores</div>';
      return `<div class="team-card" style="border-left:4px solid ${accent}"><h3><span>${label}</span><span class="mono" style="font-size:12px;color:var(--muted)">peso global ${average.toFixed(1)}</span></h3>${pList}</div>`;
    };
    return `<div class="section-title" style="margin-top:22px">Equipos generados <span class="count">toca dos jugadores para intercambiarlos</span></div>${teamBlock('rojo', '🔴 Equipo Rojo', r.teamRojo, avg(r.teamRojo), '#C3423F')}${teamBlock('blanco', '🔵 Equipo Azul', r.teamBlanco, avg(r.teamBlanco), '#1E3A8A')}<div class="field-row" style="margin-top:6px"><button class="btn btn-sm btn-outline" onclick="app.exportTeamsImage()">${ICONS.download} Exportar</button><button class="btn btn-sm btn-gold" onclick="app.shareTeams()">${ICONS.share} Compartir</button></div><button class="btn btn-block" style="margin-top:12px; background:var(--pitch); color:#fff;" onclick="app.sellarPartidoOficial()">⚽ Sellar como Partido Oficial</button>`;
  }

  renderEstadisticas() {
    return `<div class="subtabs"><button class="chip ${this.statTab==='clasificacion'?'active':''}" style="flex:1" onclick="app.statTab='clasificacion';app.render()">Clasificación</button><button class="chip ${this.statTab==='partidos'?'active':''}" style="flex:1" onclick="app.statTab='partidos';app.render()">Partidos</button></div>${this.statTab==='clasificacion' ? this.renderClasificacion() : this.renderListaPartidos()}`;
  }

  renderClasificacion() {
    const data = this.calcularClasificacion(this.currentSeason);
    let tableHtml = `<div class="empty-state">No hay partidos jugados esta temporada.</div>`;
    if (data.length > 0) {
      tableHtml = `<div style="background:var(--paper); border:1px solid var(--line); border-radius:12px; overflow:hidden;"><table class="stat-table"><thead><tr><th>Jugador</th><th class="num">PJ</th><th class="num">PG</th><th class="num">G</th><th class="num">% WIN</th></tr></thead><tbody>${data.map((row, i) => `<tr onclick="app.openModal('cromoPlayer', '${row.p.id}')" style="cursor:pointer; background:${i%2===0?'#fff':'#f9f9f9'}"><td><b>${i+1}.</b>${escapeHtml(row.p.name)}</td><td class="num">${row.pj}</td><td class="num" style="color:var(--credit)">${row.pg}</td><td class="num"><b>${row.goles}</b></td><td class="num"><b>${row.winrate}%</b></td></tr>`).join('')}</tbody></table></div><button class="btn btn-block btn-outline" style="margin-top:16px" onclick="app.exportClasificacionImage()">📸 Exportar Clasificación General</button>`;
    }
    return `<label>Temporada actual</label><input type="text" value="${this.currentSeason}" onchange="app.currentSeason = this.value; app.save(); app.render();" placeholder="Ej: 2026/2027" style="margin-bottom:16px; font-family:'Space Mono'; text-align:center" />${tableHtml}`;
  }

  renderListaPartidos() {
    let html = `<div class="section-title">Partidos de la Temporada ${this.currentSeason}</div>`;
    const partidosTemp = this.matches.filter(m => m.season === this.currentSeason).sort((a,b) => new Date(b.date) - new Date(a.date));
    if (partidosTemp.length === 0) return html + '<div class="empty-state">No se han registrado partidos. Genera equipos y séllalos para empezar.</div>';
    html += partidosTemp.map(m => {
      const isPending = m.status === 'pending'; const fecha = new Date(m.date).toLocaleDateString('es-ES', {weekday:'short', day:'numeric', month:'short'});
      const boxStyle = isPending ? 'border-left-color:var(--gold); background:var(--gold-soft); cursor:pointer;' : 'border-left-color:var(--credit); cursor:pointer;';
      let resHtml = isPending ? `<span style="font-weight:700; color:#8a5a12; font-size:12px; text-transform:uppercase;">Anotar resultado ➔</span>` : `<div style="font-size:24px; font-weight:700; font-family:'Space Mono'; color:var(--pitch)"><span style="color:var(--debt)">${m.scoreRojo}</span> - <span style="color:#1E3A8A">${m.scoreBlanco}</span></div>`;
      return `<div class="ticket" style="${boxStyle}" onclick="app.openModal('resolveMatch', '${m.id}')"><div><div class="name">${m.matchType} · ${fecha}</div><div class="sub">${m.teamRojo.length} vs ${m.teamBlanco.length} jugadores</div></div><div>${resHtml}</div></div>`;
    }).join('');
    return html;
  }

  renderGithubSyncBox(){
    if(!this.githubSync){ 
      return `<div class="ticket neutral" style="cursor:default;display:block"><div style="font-size:13px;line-height:1.5;margin-bottom:10px">Guarda los datos en tu repo de GitHub para que se sincronicen automáticamente entre el móvil, el ordenador, etc. Necesitas un <b>token de acceso personal</b>.</div><label>Usuario u organización</label><input type="text" id="ghOwner" placeholder="ividat84" /><label>Repositorio</label><input type="text" id="ghRepo" placeholder="CuentasFutbito" /><label>Archivo dentro del repo</label><input type="text" id="ghPath" placeholder="futbol-cuentas-backup.json" value="futbol-cuentas-backup.json" /><label>Rama</label><input type="text" id="ghBranch" placeholder="main" value="main" /><label>Token de acceso personal</label><input type="password" id="ghToken" placeholder="github_pat_..." /><button class="btn btn-primary btn-block" style="margin-top:14px" onclick="app.submitGithubConfig()">Guardar y sincronizar</button></div>`; 
    }
    const pending = !this.githubSyncStatus?.ok; const cloudLine = this.githubSyncStatus?.ok ? `✅ Sincronizado con la nube ${timeAgo(this.githubSyncStatus.at)}` : (this.githubSyncStatus ? `⚠️ Sin sincronizar: ${escapeHtml(this.githubSyncStatus.error)} (${timeAgo(this.githubSyncStatus.at)})` : 'Sincronizando…');
    return `<div class="ticket ${pending ? 'debt':'credit'}" style="cursor:default;display:block"><div class="name">${escapeHtml(this.githubSync.owner)}/${escapeHtml(this.githubSync.repo)}</div><div class="sub">${escapeHtml(this.githubSync.path)} · rama ${escapeHtml(this.githubSync.branch || 'main')}</div><div class="sub" style="margin-top:8px">📱 Guardado en este dispositivo</div><div class="sub">${cloudLine}</div>${pending ? `<div class="sub" style="margin-top:4px;color:var(--muted)">Tus últimos cambios están a salvo en el móvil. En cuanto haya conexión con GitHub se subirán solos, o pulsa "Reintentar".</div>` : ''}</div><div class="field-row" style="margin-top:8px"><button class="btn btn-outline" onclick="app.pullFromGithub(false)">Descargar de la nube</button>${pending ? `<button class="btn btn-primary" onclick="app.pushToGithub()">Reintentar subida</button>` : ''}</div><button class="btn btn-danger btn-block" style="margin-top:8px" onclick="app.clearGithubConfig()">Desconectar</button>`;
  }
  submitGithubConfig(){ const owner = document.getElementById('ghOwner').value.trim(); const repo = document.getElementById('ghRepo').value.trim(); const path = document.getElementById('ghPath').value.trim() || 'futbol-cuentas-backup.json'; const branch = document.getElementById('ghBranch').value.trim() || 'main'; const token = document.getElementById('ghToken').value.trim(); if(!owner || !repo || !token){ this.toast('Rellena usuario, repositorio y token'); return; } this.saveGithubConfig({owner, repo, path, branch, token, sha:null}); this.render(); this.pullFromGithub(false); }

  renderAjustes(){
    return `<div class="section-title">Sincronización con GitHub</div>${this.renderGithubSyncBox()}<div class="section-title" style="margin-top:24px">Copia de seguridad manual</div><div class="field-row"><button class="btn btn-sm btn-outline" onclick="app.exportBackup()">${ICONS.download} Exportar JSON</button><input type="file" id="importFile" accept="application/json" style="display:none" onchange="app.importBackup(this.files[0])" /><button class="btn btn-sm btn-outline" onclick="document.getElementById('importFile').click()">${ICONS.upload} Importar JSON</button></div><div class="section-title" style="margin-top:24px">Solución de problemas</div><div class="ticket neutral" style="cursor:default"><div style="font-size:13px;line-height:1.5;margin-bottom:10px">Si notas que la app no se actualiza, pulsa este botón para borrar la memoria interna y forzar la descarga de la última versión.</div><button class="btn btn-danger btn-block" onclick="app.hardResetApp()">↻ Forzar actualización de la App</button></div><div class="section-title" style="margin-top:24px">Historial de movimientos</div>${this.renderHistorial()}<div class="section-title" style="margin-top:24px">Instalar como app</div><div class="ticket neutral" style="cursor:default"><div style="font-size:13px;line-height:1.5">En Chrome (Android) pulsa el menú ⋮ y elige <b>"Instalar app"</b>.</div></div>`;
  }

  renderHistorial(){
    let all = [ ...this.transactions.map(t=>({...t, kind:'jugador'})), ...this.generalTransactions.map(t=>({...t, kind:'bote'})) ];
    if(this.histMatchFilter) all = all.filter(t=>t.matchType===this.histMatchFilter);
    if(this.histSearch){ const q = this.histSearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); all = all.filter(t=>{ const names = (t.playerIds || []).map(id=> this.players.find(x=>x.id===id)?.name || '').join(' ').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); const resText = (t.reason || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); return names.includes(q) || resText.includes(q); }); }
    all.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)); const totalItems = all.length; all = all.slice(0, this.histLimit);
    const tList = all.map(t=>{ const names = t.kind==='jugador' ? (t.playerIds || []).map(id=> this.players.find(x=>x.id===id)?.name || '(borrado)').join(', ') : 'Bote general'; return `<div class="ticket ${t.amount>0 ? 'credit' : 'debt'}"><div><div class="name">${escapeHtml(names)}</div><div class="sub">${t.matchType} · ${t.reason ? escapeHtml(t.reason) : 'sin motivo'} · ${new Date(t.createdAt).toLocaleDateString('es-ES')}</div></div><div style="display:flex;align-items:center;gap:8px"><div class="amt mono ${t.amount>0 ? 'pos' : 'neg'}">${fmt(t.amount)}</div><button class="icon-btn" onclick="app.${t.kind==='jugador' ? 'deleteTransaction' : 'deleteGeneralTransaction'}('${t.id}')">${ICONS.trash}</button></div></div>`; }).join('');
    return `<input type="search" class="search-bar" placeholder="Buscar en historial..." value="${escapeHtml(this.histSearch)}" oninput="app.histSearch=this.value;app.histLimit=40;app.render()" /><div class="filter-bar"><button class="chip ${this.histMatchFilter===''?'active':''}" onclick="app.histMatchFilter='';app.histLimit=40;app.render()">Todos</button><button class="chip ${this.histMatchFilter==='F5'?'active':''}" onclick="app.histMatchFilter='F5';app.histLimit=40;app.render()">F5</button><button class="chip ${this.histMatchFilter==='F7'?'active':''}" onclick="app.histMatchFilter='F7';app.histLimit=40;app.render()">F7</button></div>${tList || '<div class="empty-state">Sin movimientos</div>'}${this.histLimit < totalItems ? `<button class="btn btn-outline btn-block" style="margin-top:16px" onclick="app.histLimit += 40; app.render()">Cargar más (${totalItems - this.histLimit} restantes)</button>` : ''}`;
  }

  renderFab(){ return this.page==='resumen' ? `<button class="fab" onclick="app.setPage('movimientos')">${ICONS.plus}</button>` : (this.page==='jugadores' ? `<button class="fab" onclick="app.openModal('addPlayer')">${ICONS.plus}</button>` : ''); }
  
  renderBottomNav(){ return `<div class="bottom-nav">${[ {id:'resumen', label:'Resumen', icon:ICONS.home}, {id:'jugadores', label:'Jugadores', icon:ICONS.users}, {id:'movimientos', label:'Movim.', icon:ICONS.euro}, {id:'equipos', label:'Equipos', icon:ICONS.shirts}, {id:'estadisticas', label:'Estadísticas', icon:ICONS.chart}, {id:'ajustes', label:'Ajustes', icon:ICONS.gear} ].map(t=>`<button class="${this.page===t.id?'active':''}" onclick="app.setPage('${t.id}')">${t.icon}<span class="tab-label">${t.label}</span></button>`).join('')}</div>`; }

  renderModal(){
    const {type, payload} = this.modal; let body = '';
    
    if(type==='addPlayer' || type==='editPlayer'){
      const p = type==='editPlayer' ? this.players.find(x=>x.id===payload.id) : null;
      if(type==='editPlayer' && !p) { this.modal = null; return ''; }
      body = `<h2>${p ? 'Editar jugador' : 'Nuevo jugador'}</h2><label>Nombre</label><input type="text" id="pName" value="${p ? escapeHtml(p.name) : ''}" placeholder="Nombre y apellido" /><label>Tipo</label><div class="chip-group" id="pTypeGroup">${['F5','F7','F5/F7'].map(t=>`<button class="chip ${(p?.type===t || (!p && t==='F5/F7')) ? 'active' : ''}" data-val="${t}" onclick="app.pickChip(this,'pTypeGroup')">${t}</button>`).join('')}</div><label>Habilidad Técnica</label><div class="chip-group" id="pSkillGroup">${Object.keys(SKILL_LABEL).map(s=>`<button class="chip ${(p?.skill===s || (!p && s==='medio')) ? 'active' : ''}" data-val="${s}" onclick="app.pickChip(this,'pSkillGroup')">${SKILL_LABEL[s]}</button>`).join('')}</div><label>Físico / Resistencia</label><div class="chip-group" id="pStaminaGroup">${Object.keys(STAMINA_LABEL).map(s=>`<button class="chip ${(p?.stamina===s || (!p && s==='medio')) ? 'active' : ''}" data-val="${s}" onclick="app.pickChip(this,'pStaminaGroup')">${STAMINA_LABEL[s]}</button>`).join('')}</div><label>Posición</label><div class="chip-group" id="pPosGroup"><button class="chip ${!p?.position ? 'active' : ''}" data-val="" onclick="app.pickChip(this,'pPosGroup')">-</button>${POSITIONS.map(pos=>`<button class="chip ${p?.position===pos ? 'active' : ''}" data-val="${pos}" onclick="app.pickChip(this,'pPosGroup')">${pos}</button>`).join('')}</div><label>Abonado Bilbao Kirolak</label><div class="chip-group" id="pBKGroup"><button class="chip ${p?.bilbaoKirolak ? 'active' : ''}" data-val="true" onclick="app.pickChip(this,'pBKGroup')">Sí</button><button class="chip ${!p?.bilbaoKirolak ? 'active' : ''}" data-val="false" onclick="app.pickChip(this,'pBKGroup')">No</button></div><label>Habitual</label><div class="chip-group" id="pRegGroup"><button class="chip ${p?.isRegular !== false ? 'active' : ''}" data-val="true" onclick="app.pickChip(this,'pRegGroup')">Sí</button><button class="chip ${p?.isRegular === false ? 'active' : ''}" data-val="false" onclick="app.pickChip(this,'pRegGroup')">Esporádico</button></div><button class="btn btn-primary btn-block" style="margin-top:18px" onclick="app.savePlayerForm(${p ? `'${p.id}'` : 'null'})">Guardar</button>${p ? `<button class="btn btn-danger btn-block" style="margin-top:8px" onclick="app.deletePlayer('${p.id}')">Eliminar jugador</button>` : ''}`;
    } else if(type==='resolveMatch'){
      const m = this.matches.find(x=>x.id===payload); if(!m) return '';
      const renderTeamGoals = (team, color) => team.map(p => { const goles = m.goals[p.id] || 0; return `<div class="team-player"><span style="font-weight:600">${escapeHtml(p.name)}</span><div class="goal-counter"><button onclick="app.modGoal('${m.id}', '${p.id}', -1, '${color}')">-</button><span id="goal_val_${m.id}_${p.id}">${goles}</span><button onclick="app.modGoal('${m.id}', '${p.id}', 1, '${color}')">+</button></div></div>`; }).join('');
      const btnSaveText = m.status === 'pending' ? '💾 Guardar Partido Oficial' : '💾 Guardar Cambios';
      body = `<h2>${m.status === 'pending' ? 'Anotar Resultado' : 'Editar Partido'}</h2><div class="sub" style="margin-bottom:12px">El marcador se suma solo, pero puedes ajustarlo manualmente si hay goles en propia.</div><div class="score-input-group"><div style="text-align:center"><div style="color:var(--debt);font-weight:700;margin-bottom:4px">ROJO</div><input type="number" min="0" id="score_rojo_${m.id}" value="${m.scoreRojo}" onchange="app.modScore('${m.id}', 'rojo', this.value)" /></div><span>-</span><div style="text-align:center"><div style="color:#1E3A8A;font-weight:700;margin-bottom:4px">AZUL</div><input type="number" min="0" id="score_blanco_${m.id}" value="${m.scoreBlanco}" onchange="app.modScore('${m.id}', 'blanco', this.value)" /></div></div><div class="section-title">Goleadores Equipo Rojo 🔴</div><div class="team-card" style="border-left:4px solid var(--debt); padding: 4px 12px">${renderTeamGoals(m.teamRojo, 'rojo')}</div><div class="section-title">Goleadores Equipo Azul 🔵</div><div class="team-card" style="border-left:4px solid #1E3A8A; padding: 4px 12px">${renderTeamGoals(m.teamBlanco, 'blanco')}</div><button class="btn btn-primary btn-block" style="margin-top:16px" onclick="app.finishMatch('${m.id}')">${btnSaveText}</button><button class="btn btn-danger btn-block" style="margin-top:8px" onclick="app.deleteMatch('${m.id}')">🗑️ Eliminar Partido</button>`;
    } else if(type==='cromoPlayer'){
      const s = this.calcularClasificacion(this.currentSeason).find(x => x.p.id === payload); if(!s) return '';
      const posName = POSITION_LABEL[s.p.position] || 'SIN POSICIÓN';
      body = `<div class="cromo-preview" id="cromoCapture"><h3>${escapeHtml(s.p.name.toUpperCase())}</h3><div class="pos-badge">${posName}</div><div class="cromo-grid"><div class="cromo-stat"><div class="val">${s.winrate}%</div><div class="lbl">Victoria</div></div><div class="cromo-stat"><div class="val">${s.goles}</div><div class="lbl">Goles</div></div><div class="cromo-stat"><div class="val">${s.pj}</div><div class="lbl">Partidos</div></div><div class="cromo-stat"><div class="val">${s.pg}</div><div class="lbl">Ganados</div></div></div></div><button class="btn btn-gold btn-block" onclick="app.exportCromoImage('${s.p.id}')">📸 Exportar Cromo</button>`;
    } else if(type==='quickTx'){
      const p = this.players.find(x=>x.id===payload.playerId); const bal = this.getPlayerBalance(p.id, payload.matchType);
      body = `<h2>${escapeHtml(p.name)}</h2><div class="sub" style="color:var(--muted);font-size:13px;margin-bottom:10px">Saldo actual ${payload.matchType}: <b class="mono">${fmt(bal)}</b></div><label>Importe</label><div class="sign-toggle"><button id="qtxPlus" class="${this.qtxSign==='minus' ? '' : 'active plus'}" onclick="app.qtxSign='plus';app.render()">+ Abona</button><button id="qtxMinus" class="${this.qtxSign==='minus' ? 'active minus' : ''}" onclick="app.qtxSign='minus';app.render()">− Carga</button></div><input type="number" step="0.01" min="0" id="qtxAmount" placeholder="0.00" style="margin-top:8px" /><label>Motivo (opcional)</label><input type="text" id="qtxReason" placeholder="Partido, balón..." /><button class="btn btn-primary btn-block" style="margin-top:16px" onclick="app.submitQuickTx('${p.id}','${payload.matchType}')">Registrar</button>${bal < -0.001 ? `<button class="btn btn-outline btn-block" style="margin-top:12px; border-color:var(--credit); color:var(--credit);" onclick="app.settleDebt('${p.id}', '${payload.matchType}',${Math.abs(bal)})">✅ Saldar deuda exacta (${fmtPlain(Math.abs(bal))})</button>` : ''}`;
    } else if(type==='addGuest'){
      body = `<h2>Jugador invitado</h2><div class="sub" style="color:var(--muted);font-size:13px;margin-bottom:6px">Solo se usa para generar los equipos de hoy.</div><label>Nombre</label><input type="text" id="guestName" placeholder="Nombre del invitado" /><label>Habilidad Técnica</label><div class="chip-group" id="guestSkillGroup">${Object.keys(SKILL_LABEL).map(s=>`<button class="chip ${s==='medio'?'active':''}" data-val="${s}" onclick="app.pickChip(this,'guestSkillGroup')">${SKILL_LABEL[s]}</button>`).join('')}</div><label>Físico / Resistencia</label><div class="chip-group" id="guestStaminaGroup">${Object.keys(STAMINA_LABEL).map(s=>`<button class="chip ${s==='medio'?'active':''}" data-val="${s}" onclick="app.pickChip(this,'guestStaminaGroup')">${STAMINA_LABEL[s]}</button>`).join('')}</div><label>Posición</label><div class="chip-group" id="guestPosGroup"><button class="chip active" data-val="" onclick="app.pickChip(this,'guestPosGroup')">-</button>${POSITIONS.map(pos=>`<button class="chip" data-val="${pos}" onclick="app.pickChip(this,'guestPosGroup')">${pos}</button>`).join('')}</div><button class="btn btn-primary btn-block" style="margin-top:16px" onclick="app.submitGuest()">Añadir a la lista de hoy</button>`;
    } else if(type==='settleMatch'){
      const mt = this.teamsMatchType; const quotaBK = parseFloat(this._smQuotaBK) || 0; const quotaNormal = parseFloat(this._smQuotaNormal) || 0; const cost = parseFloat(this._smCost) || 0;
      const presentPlayers = Array.from(this.teamsPresent).map(id => this.findPresentPerson(id)).filter(Boolean);
      let countBK = 0; let countNormal = 0;
      this._smSelected.forEach(id => { const p = this.findPresentPerson(id); if(p) { if(p.bilbaoKirolak) countBK++; else countNormal++; } });
      const collectedBK = countBK * quotaBK; const collectedNormal = countNormal * quotaNormal; const collectedTotal = collectedBK + collectedNormal; const surplus = collectedTotal - cost;
      const payerOptions = `<option value="bote" ${this._smPayer==='bote'?'selected':''}>Fondo común (Bote)</option>` + [...this.players].sort((a,b)=>a.name.localeCompare(b.name)).map(p => `<option value="${p.id}" ${this._smPayer===p.id?'selected':''}>${escapeHtml(p.name)}</option>`).join('');
      body = `<h2>Liquidar Partido ${mt}</h2><div class="field-row"><div><label>Cuota (BK)</label><input type="number" step="0.10" min="0" value="${this._smQuotaBK}" oninput="app._smQuotaBK=this.value; app.render()" /></div><div><label>Cuota (Normal)</label><input type="number" step="0.10" min="0" value="${this._smQuotaNormal}" oninput="app._smQuotaNormal=this.value; app.render()" /></div></div><div class="field-row" style="margin-top:10px;"><div><label>Coste Pista</label><input type="number" step="0.05" min="0" value="${this._smCost}" oninput="app._smCost=this.value; app.render()" /></div><div><label>¿Quién pagó?</label><select onchange="app._smPayer=this.value; app.render()">${payerOptions}</select></div></div><div class="field-row" style="align-items:center; justify-content:space-between; margin-top:14px; margin-bottom:5px"><label style="margin:0">Cobrar cuota a (${this._smSelected.size})</label><div style="display:flex; gap:6px;"><button class="icon-btn" style="background:var(--turf-soft); border-radius:12px; padding:4px 10px;" onclick="app.selectAllSmPlayers()">Todos</button><button class="icon-btn" style="background:var(--line); border-radius:12px; padding:4px 10px;" onclick="app.clearSmPlayers()">Ninguno</button></div></div><div class="checklist" style="max-height:150px">${presentPlayers.map(p=>`<label><input type="checkbox" ${this._smSelected.has(p.id)?'checked':''} onchange="app.toggleSmPlayer('${p.id}')" />${escapeHtml(p.name)}${p.bilbaoKirolak?'<span class="lvl-badge">BK</span>':''}</label>`).join('')}</div><div class="ticket neutral" style="margin-top:16px; background:var(--chalk); border:1px dashed var(--muted); cursor:default"><div style="font-size:13px; color:var(--ink); width:100%">Recaudación: <b style="float:right">${fmtPlain(collectedTotal)}</b><br>Coste pista: <b style="float:right; color:var(--debt)">-${fmtPlain(cost)}</b><br><div style="border-top:1px solid var(--line); margin:6px 0 0 0; padding-top:6px; font-weight:600;">Sobrante al bote: <b style="float:right; color:${surplus>=0?'var(--credit)':'var(--debt)'}">${surplus>=0?'+':''}${fmtPlain(surplus)}</b></div></div></div><button class="btn btn-primary btn-block" style="margin-top:16px" onclick="app.submitSettleMatch()">Confirmar y Liquidar</button>`;
    }
    return `<div class="sheet-backdrop" onclick="if(event.target===this) app.closeModal()"><div class="sheet"><div class="sheet-handle"></div><button class="close-x" onclick="app.closeModal()">✕</button>${body}</div></div>`;
  }

  modScore(matchId, team, val) { const m = this.matches.find(x => x.id === matchId); if(m) { if(team === 'rojo') m.scoreRojo = parseInt(val) || 0; if(team === 'blanco') m.scoreBlanco = parseInt(val) || 0; } }
  modGoal(matchId, playerId, delta, teamColor) {
    const m = this.matches.find(x => x.id === matchId);
    if(m) {
      const next = (m.goals[playerId] || 0) + delta; if (next < 0) return; m.goals[playerId] = next;
      if(teamColor === 'rojo') { m.scoreRojo = Math.max(0, (m.scoreRojo || 0) + delta); const el = document.getElementById(`score_rojo_${m.id}`); if(el) el.value = m.scoreRojo; } 
      else if(teamColor === 'blanco') { m.scoreBlanco = Math.max(0, (m.scoreBlanco || 0) + delta); const el = document.getElementById(`score_blanco_${m.id}`); if(el) el.value = m.scoreBlanco; }
      const elGoal = document.getElementById(`goal_val_${m.id}_${playerId}`); if(elGoal) elGoal.innerText = next;
    }
  }
  finishMatch(matchId) { const m = this.matches.find(x => x.id === matchId); if(m) { m.status = 'completed'; this.save(); this.closeModal(); this.toast('Guardado con éxito'); } }
  deleteMatch(matchId) { if(confirm('¿Eliminar partido?')) { this.matches = this.matches.filter(m => m.id !== matchId); this.save(); this.closeModal(); this.toast('Eliminado'); } }
  pickChip(btn, groupId){ document.getElementById(groupId).querySelectorAll('.chip').forEach(c=>c.classList.remove('active')); btn.classList.add('active'); }
  savePlayerForm(id){
    const name = document.getElementById('pName').value.trim(); if(!name){ this.toast('Falta nombre'); return; }
    const data = { name, type: document.querySelector('#pTypeGroup .chip.active').dataset.val, skill: document.querySelector('#pSkillGroup .chip.active').dataset.val, stamina: document.querySelector('#pStaminaGroup .chip.active').dataset.val, position: document.querySelector('#pPosGroup .chip.active').dataset.val, isRegular: document.querySelector('#pRegGroup .chip.active').dataset.val === 'true', bilbaoKirolak: document.querySelector('#pBKGroup .chip.active').dataset.val === 'true' };
    id ? this.updatePlayer(id, data) : this.addPlayer(data);
  }
  submitQuickTx(playerId, matchType){ let amount = parseFloat(document.getElementById('qtxAmount').value); if(isNaN(amount)){ this.toast('Introduce importe'); return; } amount = (this.qtxSign || 'plus') === 'minus' ? -Math.abs(amount) : Math.abs(amount); const reason = document.getElementById('qtxReason').value; this.qtxSign = null; this.addTransaction([playerId], amount, matchType, reason); }
  toggleSmPlayer(id){ this._smSelected.has(id) ? this._smSelected.delete(id) : this._smSelected.add(id); this.render(); }
  selectAllSmPlayers(){ this._smSelected = new Set(); this.teamsPresent.forEach(id => this._smSelected.add(id)); this.render(); }
  clearSmPlayers(){ this._smSelected = new Set(); this.render(); }
  submitSettleMatch(){
    const mt = this.teamsMatchType; const quotaBK = parseFloat(this._smQuotaBK) || 0; const quotaNormal = parseFloat(this._smQuotaNormal) || 0; const cost = parseFloat(this._smCost) || 0; const playerIds = Array.from(this._smSelected);
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
}

let app;

function iniciarApp() {
  try {
    if(window.app) return;
    app = new App(); window.app = app; 
    document.body.addEventListener('click', (e)=>{ if(e.target.closest('.fab') || e.target.closest('.bottom-nav')) return; });
  } catch(err) {
    document.getElementById('app').innerHTML = `<div style="padding:20px;color:red;background:white;"><h3>🚨 Error</h3><pre>${err.message}</pre></div>`;
  }
}

if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', iniciarApp); } else { iniciarApp(); }
document.addEventListener('click', function(e){ const t = e.target.closest('[data-open-add-player]'); if(t) app.openModal('addPlayer'); });
if('serviceWorker' in navigator){ window.addEventListener('load', ()=>{ navigator.serviceWorker.register('sw.js').catch(()=>{}); }); }
window.addEventListener('online', ()=>{ if(window.app && app.githubSync && app.githubSyncStatus && !app.githubSyncStatus.ok){ app.pushToGithub(); } });
