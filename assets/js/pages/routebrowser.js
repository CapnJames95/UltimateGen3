function buildRouteBrowserPage() {
  var RB_GAME = 'FR';
  var RB_GAMES = ['FR','LG','R','S','E'];
  var RB_GAME_LABELS = {FR:'🔥 FireRed',LG:'🌿 LeafGreen',R:'💎 Ruby',S:'🔷 Sapphire',E:'💚 Emerald'};
  var RB_GAME_COLORS = {FR:'var(--fire)',LG:'var(--leaf)',R:'#FF5555',S:'#5599FF',E:'#44DD88'};

  var rbIndex = null;
  var rbSelectedArea = null;
  var rbFilterQ = '';

  function buildIndex(game) {
    var idx = {};
    POKE.forEach(function(p) {
      var text = (p.games && p.games[game]) || '';
      if (!text) return;
      var lines = text.split('\n');
      lines.forEach(function(line) {
        line = line.trim();
        if (!line) return;
        var locMatch = line.match(/\(([^,)]+)/);
        if (!locMatch) return;
        var loc = locMatch[1].trim();
        if (!loc || loc.length < 3) return;
        if (!idx[loc]) idx[loc] = [];
        idx[loc].push({num:p.num, name:p.name, types:p.types, line:line});
      });
    });
    return idx;
  }

  function sortedAreas(idx) {
    return Object.keys(idx).sort(function(a,b){
      var aR = a.match(/Route (\d+)/), bR = b.match(/Route (\d+)/);
      if (aR && bR) return parseInt(aR[1]) - parseInt(bR[1]);
      if (aR) return -1;
      if (bR) return 1;
      return a.localeCompare(b);
    }).filter(function(k){
      if (!rbFilterQ) return true;
      return k.toLowerCase().indexOf(rbFilterQ.toLowerCase()) !== -1;
    });
  }

  function renderAreaList(idx) {
    var areas = sortedAreas(idx);
    var list = document.getElementById('rb-area-list');
    var cnt = document.getElementById('rb-area-count');
    if (!list) return;
    if (cnt) cnt.textContent = areas.length + ' areas';
    list.innerHTML = areas.map(function(a){
      var active = a === rbSelectedArea;
      return '<div onclick="rbSelectArea(\''+a.replace(/'/g,"\\'")+'\')"'
        +' style="padding:8px 14px;cursor:pointer;font-size:12px;font-weight:'+(active?'700':'400')+';'
        +'color:'+(active?'var(--gold)':'var(--text)')+';'
        +'background:'+(active?'rgba(255,215,0,.08)':'transparent')+';'
        +'border-left:3px solid '+(active?'var(--gold)':'transparent')+';"'
        +' onmouseover="if(this.style.background!==\'rgba(255,215,0,.08)\')this.style.background=\'rgba(255,255,255,.04)\'"'
        +' onmouseout="if(\''+a+'\'!==window._rbSel)this.style.background=\'\'">'
        +a+'<span style="float:right;font-size:10px;color:var(--muted);">'+idx[a].length+'</span>'
        +'</div>';
    }).join('');
    window._rbSel = rbSelectedArea;
  }

  function renderDetail(idx) {
    var detail = document.getElementById('rb-detail');
    if (!detail) return;
    if (!rbSelectedArea || !idx[rbSelectedArea]) {
      detail.innerHTML = '<div style="color:var(--muted);font-size:12px;padding:24px;text-align:center;">Select an area from the list to see available Pokémon.</div>';
      return;
    }
    var entries = idx[rbSelectedArea];
    detail.innerHTML = '<div style="font-family:\'Press Start 2P\',monospace;font-size:8px;color:var(--gold);margin-bottom:16px;">'+rbSelectedArea+'</div>'
      +'<div style="display:flex;flex-wrap:wrap;gap:8px;">'
      + entries.map(function(e){
          var types = (e.types||[]).map(function(t){
            return '<span style="font-size:8px;font-weight:800;padding:1px 4px;border-radius:2px;text-transform:uppercase;background:'+({normal:'#9E9E9E',fire:'#E8501A',water:'#1B8FE8',grass:'#3DA83D',electric:'#D4A800',ice:'#60C8C8',fighting:'#B83020',poison:'#8B3099',ground:'#8B6840',flying:'#6850C0',psychic:'#D01868',bug:'#78A810',rock:'#807840',ghost:'#4030A0',dragon:'#5038E8',dark:'#403030',steel:'#9898A8'}[t]||'#666')+';color:#fff;">'+t+'</span>';
          }).join('');
          return '<div onclick="_openDexSearch(\''+e.name+'\','+e.num+')" style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:var(--card);border:1px solid var(--border);border-radius:7px;cursor:pointer;min-width:180px;max-width:260px;transition:border-color .12s;" onmouseover="this.style.borderColor=\'var(--fire)\'" onmouseout="this.style.borderColor=\'var(--border)\'">'
            +'<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+e.num+'.png" width="36" height="36" style="image-rendering:pixelated;flex-shrink:0;">'
            +'<div style="min-width:0;">'
            +'<div style="font-size:12px;font-weight:800;color:var(--text);">'+e.name+'</div>'
            +'<div style="margin:2px 0;">'+types+'</div>'
            +'<div style="font-size:9px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:140px;" title="'+e.line.replace(/"/g,'&quot;')+'">'+e.line+'</div>'
            +'</div></div>';
        }).join('')
      +'</div>';
  }

  function rbRender() {
    if (!rbIndex) rbIndex = buildIndex(RB_GAME);
    renderAreaList(rbIndex);
    renderDetail(rbIndex);
  }

  var gameBtns = document.getElementById('rb-game-btns');
  if (gameBtns) {
    gameBtns.innerHTML = RB_GAMES.map(function(g){
      var active = g===RB_GAME;
      return '<button onclick="rbSetGame(\''+g+'\')" id="rb-gbtn-'+g+'"'
        +' style="font-size:10px;font-weight:700;padding:4px 9px;border-radius:4px;cursor:pointer;font-family:\'Nunito\',sans-serif;'
        +'background:'+(active?RB_GAME_COLORS[g]:'var(--panel)')+';color:'+(active?'#000':'var(--text)')+';border:1px solid '+(active?RB_GAME_COLORS[g]:'var(--border)')+';">'
        +RB_GAME_LABELS[g]+'</button>';
    }).join('');
  }

  window.rbSetGame = function(g) {
    RB_GAME=g;
    rbIndex=buildIndex(g);
    rbSelectedArea=null;
    RB_GAMES.forEach(function(x){
      var b=document.getElementById('rb-gbtn-'+x);
      if(!b) return;
      var active=x===g;
      b.style.background=active?RB_GAME_COLORS[x]:'var(--panel)';
      b.style.color=active?'#000':'var(--text)';
      b.style.borderColor=active?RB_GAME_COLORS[x]:'var(--border)';
    });
    rbRender();
  };
  window.rbSelectArea = function(a) { rbSelectedArea=a; window._rbSel=a; if(rbIndex) { renderAreaList(rbIndex); renderDetail(rbIndex); } };
  window.rbFilter = function() {
    var inp=document.getElementById('rb-search');
    rbFilterQ=inp?inp.value:'';
    if(rbIndex) renderAreaList(rbIndex);
  };

  rbRender();
}
