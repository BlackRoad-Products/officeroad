const ROOT_HTML = `<!-- PROPRIETARY. Copyright 2025-2026 BlackRoad OS, Inc. All rights reserved. NOT open source. -->
<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>OfficeRoad — BlackRoad OS</title>
<meta name="description" content="OfficeRoad — Living Office. Part of BlackRoad OS.">
<meta property="og:title" content="OfficeRoad — BlackRoad OS"><meta property="og:description" content="Your agents come alive.">
<meta property="og:url" content="https://officeroad.blackroad.io"><meta property="og:image" content="https://images.blackroad.io/pixel-art/road-logo.png">
<meta name="twitter:card" content="summary_large_image"><meta name="robots" content="index, follow, noai, noimageai">
<link rel="canonical" href="https://officeroad.blackroad.io/">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%230a0a0a'/><circle cx='10' cy='16' r='5' fill='%23FF2255'/><rect x='18' y='11' width='10' height='10' rx='2' fill='%238844FF'/></svg>" type="image/svg+xml">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebApplication","name":"OfficeRoad","url":"https://officeroad.blackroad.io","author":{"@type":"Organization","name":"BlackRoad OS, Inc.","url":"https://blackroad.io"}}</script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400&family=Inter:wght@400&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}:root{--bg:#000;--card:#0a0a0a;--border:#1a1a1a;--text:#f5f5f5;--sub:#737373;--muted:#444;--sg:'Space Grotesk',sans-serif;--jb:'JetBrains Mono',monospace;--in:'Inter',sans-serif;--grad:linear-gradient(90deg,#FF6B2B,#FF2255,#CC00AA,#8844FF,#4488FF,#00D4FF);--accent:#FF6B2B}html{scroll-behavior:smooth}body{background:var(--bg);color:var(--text);font-family:var(--sg);overflow-x:hidden}a{color:inherit;text-decoration:none}.bar{height:3px;background:var(--grad);position:fixed;top:0;left:0;right:0;z-index:1000}nav{position:fixed;top:3px;left:0;right:0;z-index:999;background:rgba(0,0,0,.88);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);height:48px;display:flex;align-items:center;padding:0 24px}.n-left{display:flex;align-items:center;gap:8px}.n-dot{width:8px;height:8px;border-radius:50%;background:var(--accent)}.n-name{font-weight:700;font-size:15px}.n-tag{font-family:var(--jb);font-size:10px;color:var(--muted);margin-left:8px}.n-right{margin-left:auto;display:flex;gap:12px;align-items:center}.n-right a{font-family:var(--in);font-size:12px;color:var(--sub)}.n-right a:hover{color:var(--text)}.cta{font-size:11px;font-weight:600;padding:6px 16px;border-radius:5px;background:var(--text);color:var(--bg);border:none;cursor:pointer;font-family:var(--sg)}.hero{min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:80px 24px 40px;position:relative;overflow:hidden}.orb{position:absolute;border-radius:50%;filter:blur(100px);opacity:.1}h1{font-size:clamp(32px,7vw,64px);font-weight:700;letter-spacing:-.03em;line-height:1.05;max-width:700px;margin-bottom:12px;position:relative}.sub{font-family:var(--in);font-size:clamp(14px,2vw,17px);color:var(--sub);max-width:500px;line-height:1.6;margin-bottom:32px;position:relative}.badge{font-family:var(--jb);font-size:10px;color:var(--sub);letter-spacing:.1em;text-transform:uppercase;margin-bottom:16px;position:relative;display:flex;align-items:center;gap:8px}.badge::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--accent);animation:p 2s infinite}@keyframes p{0%,100%{opacity:1}50%{opacity:.3}}.btns{display:flex;gap:10px;position:relative;flex-wrap:wrap;justify-content:center}.btn-p{padding:11px 28px;border-radius:7px;font-size:13px;font-weight:600;background:var(--text);color:var(--bg);border:none;cursor:pointer;font-family:var(--sg)}.btn-g{padding:11px 28px;border-radius:7px;font-size:13px;font-weight:600;background:transparent;color:var(--text);border:1px solid var(--border);cursor:pointer;font-family:var(--sg)}.btn-g:hover{border-color:#444}.section{max-width:1100px;margin:0 auto;padding:48px 24px}.status{border:1px solid var(--border);border-radius:8px;background:var(--card);padding:14px 18px;display:flex;align-items:center;gap:10px;margin-bottom:24px}.status-dot{width:8px;height:8px;border-radius:50%;background:#22c55e;animation:p 2s infinite}.status-text{font-family:var(--jb);font-size:11px;color:var(--sub)}

/* Tab Navigation */
.tabs{display:flex;gap:2px;margin-bottom:24px;overflow-x:auto;border-bottom:1px solid var(--border);padding-bottom:0}.tab{padding:10px 16px;font-size:12px;font-family:var(--jb);color:var(--sub);cursor:pointer;border:none;background:none;border-bottom:2px solid transparent;white-space:nowrap;transition:all .2s}.tab:hover{color:var(--text)}.tab.active{color:var(--text);border-bottom-color:var(--accent)}

/* Floor Map */
.floor-map{display:flex;flex-direction:column;gap:4px;margin-bottom:32px}
.floor-row{display:flex;align-items:stretch;gap:0;border:1px solid var(--border);border-radius:6px;overflow:hidden;background:var(--card);transition:all .2s}.floor-row:hover{border-color:#333}
.floor-label{width:120px;min-width:120px;padding:12px;display:flex;flex-direction:column;justify-content:center;background:rgba(255,255,255,.02);border-right:1px solid var(--border)}
.floor-num{font-family:var(--jb);font-size:10px;color:var(--muted)}.floor-name{font-size:13px;font-weight:600}
.floor-agents{flex:1;display:flex;flex-wrap:wrap;gap:6px;padding:10px;align-items:center;min-height:48px}
.agent-dot{position:relative;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;cursor:pointer;transition:all .15s;border:2px solid transparent}
.agent-dot:hover{transform:scale(1.2);z-index:5;border-color:var(--accent)}
.agent-dot .tip{display:none;position:absolute;bottom:110%;left:50%;transform:translateX(-50%);background:#111;border:1px solid var(--border);border-radius:6px;padding:8px 12px;font-size:10px;white-space:nowrap;z-index:10;pointer-events:none;font-weight:400;font-family:var(--jb);line-height:1.5}
.agent-dot:hover .tip{display:block}
.s-working{background:#1a3a1a}.s-idle{background:#2a2a1a}.s-meeting{background:#1a1a3a}.s-break{background:#3a1a1a}

/* Panel */
.panel{border:1px solid var(--border);border-radius:8px;background:var(--card);margin-bottom:16px;overflow:hidden}
.panel-head{padding:14px 18px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.panel-title{font-size:14px;font-weight:600}.panel-badge{font-family:var(--jb);font-size:10px;color:var(--accent)}
.panel-body{padding:14px 18px;font-family:var(--in);font-size:12px;color:var(--sub);line-height:1.7;max-height:400px;overflow-y:auto}
.panel-body table{width:100%;border-collapse:collapse}.panel-body th{text-align:left;font-size:10px;text-transform:uppercase;color:var(--muted);padding:4px 8px;border-bottom:1px solid var(--border)}.panel-body td{padding:6px 8px;border-bottom:1px solid var(--border);font-size:11px}

/* Grid layout */
.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
@media(max-width:768px){.grid-2{grid-template-columns:1fr}.floor-label{width:80px;min-width:80px}nav{padding:0 16px}}

/* Chat area */
.chat-box{border:1px solid var(--border);border-radius:8px;background:var(--card);padding:12px;margin-top:8px;max-height:300px;overflow-y:auto}
.chat-msg{padding:6px 0;border-bottom:1px solid var(--border);font-size:11px;font-family:var(--in);color:var(--sub)}.chat-msg:last-child{border:none}
.chat-author{font-weight:600;color:var(--text);margin-right:6px}.chat-time{font-family:var(--jb);font-size:9px;color:var(--muted);margin-left:8px}
.chat-input-row{display:flex;gap:8px;margin-top:8px}
.chat-input{flex:1;background:#111;border:1px solid var(--border);border-radius:5px;padding:8px 12px;color:var(--text);font-family:var(--in);font-size:12px;outline:none}.chat-input:focus{border-color:var(--accent)}
.chat-send{padding:8px 16px;border-radius:5px;background:var(--accent);color:#fff;border:none;font-family:var(--sg);font-size:12px;font-weight:600;cursor:pointer}

/* Announcement */
.ann-item{padding:10px 0;border-bottom:1px solid var(--border)}.ann-item:last-child{border:none}
.ann-cat{font-family:var(--jb);font-size:9px;color:var(--accent);text-transform:uppercase;letter-spacing:.05em}
.ann-title{font-size:13px;font-weight:600;margin:2px 0}.ann-body{font-size:11px;color:var(--sub)}
.ann-meta{font-family:var(--jb);font-size:9px;color:var(--muted);margin-top:4px}
</style></head><body>
<div class="bar"></div>
<nav><div class="n-left"><div class="n-dot"></div><span class="n-name">OfficeRoad</span><span class="n-tag">BLACKROAD OS</span></div><div class="n-right"><a href="https://blackroad.io">Highway</a><a href="https://app.blackroad.io" class="cta">Open OS</a></div></nav>

<section class="hero"><div class="orb" style="width:400px;height:400px;background:#FF6B2B;top:-10%;left:-15%"></div><div class="orb" style="width:300px;height:300px;background:#8844FF;bottom:-5%;right:-10%"></div><div class="badge">LIVE ON BLACKROAD OS</div><h1>Your agents come alive.</h1><p class="sub">Living Office. 27 agents across 10 floors. Meetings, chat, events, docs, and real-time collaboration.</p><div class="btns"><a href="#office"><button class="btn-p">Enter the Office</button></a><a href="https://blackroad.io"><button class="btn-g">The Highway</button></a></div></section>

<section class="section" id="office">
<div class="status"><div class="status-dot"></div><div class="status-text" id="st">Connecting...</div></div>

<div class="tabs" id="tabs">
  <button class="tab active" data-tab="map">Floor Map</button>
  <button class="tab" data-tab="schedule">Schedule</button>
  <button class="tab" data-tab="rooms">Rooms</button>
  <button class="tab" data-tab="chat">Chat</button>
  <button class="tab" data-tab="events">Events</button>
  <button class="tab" data-tab="announcements">Announcements</button>
  <button class="tab" data-tab="docs">Docs</button>
  <button class="tab" data-tab="visitors">Visitors</button>
  <button class="tab" data-tab="metrics">Metrics</button>
</div>

<!-- Floor Map Tab -->
<div id="tab-map">
  <div class="floor-map" id="floor-map"></div>
  <div class="grid-2" id="sidebar-panels"></div>
</div>

<!-- Schedule Tab -->
<div id="tab-schedule" style="display:none">
  <div class="panel"><div class="panel-head"><span class="panel-title">Agent Schedules</span><span class="panel-badge">TODAY</span></div>
  <div class="panel-body" id="schedule-list">Loading...</div></div>
</div>

<!-- Rooms Tab -->
<div id="tab-rooms" style="display:none">
  <div class="panel"><div class="panel-head"><span class="panel-title">Meeting Rooms</span><span class="panel-badge" id="rooms-count">0 rooms</span></div>
  <div class="panel-body" id="rooms-list">Loading...</div></div>
</div>

<!-- Chat Tab -->
<div id="tab-chat" style="display:none">
  <div class="panel"><div class="panel-head"><span class="panel-title">Office Chat</span><span class="panel-badge">LIVE</span></div>
  <div class="chat-box" id="chat-messages">Loading...</div>
  <div class="chat-input-row">
    <select id="chat-floor" class="chat-input" style="flex:0 0 100px"><option value="">All</option></select>
    <input id="chat-input" class="chat-input" placeholder="Type a message... (@agent to mention)">
    <button class="chat-send" onclick="sendChat()">Send</button>
  </div></div>
</div>

<!-- Events Tab -->
<div id="tab-events" style="display:none">
  <div class="panel"><div class="panel-head"><span class="panel-title">Office Events</span><span class="panel-badge" id="events-count">0</span></div>
  <div class="panel-body" id="events-list">Loading...</div></div>
</div>

<!-- Announcements Tab -->
<div id="tab-announcements" style="display:none">
  <div class="panel"><div class="panel-head"><span class="panel-title">Announcement Board</span><span class="panel-badge" id="ann-count">0</span></div>
  <div class="panel-body" id="ann-list">Loading...</div></div>
</div>

<!-- Docs Tab -->
<div id="tab-docs" style="display:none">
  <div class="panel"><div class="panel-head"><span class="panel-title">Shared Documents</span><span class="panel-badge" id="docs-count">0</span></div>
  <div class="panel-body" id="docs-list">Loading...</div></div>
</div>

<!-- Visitors Tab -->
<div id="tab-visitors" style="display:none">
  <div class="panel"><div class="panel-head"><span class="panel-title">Visitor Management</span><span class="panel-badge" id="visitors-count">0 today</span></div>
  <div class="panel-body" id="visitors-list">Loading...</div></div>
</div>

<!-- Metrics Tab -->
<div id="tab-metrics" style="display:none">
  <div class="grid-2" id="metrics-panels"></div>
</div>

</section>

<footer><div class="f-links"><a href="https://os.blackroad.io">OS</a><a href="https://roadtrip.blackroad.io">Agents</a><a href="https://roadie.blackroad.io">Tutor</a><a href="https://roadview.blackroad.io">Search</a><a href="https://backroad.blackroad.io">Social</a><a href="https://roadchain.blackroad.io">Chain</a><a href="https://github.com/BlackRoadOS">GitHub</a></div><div class="f-copy">2025-2026 BlackRoad OS, Inc. Remember the Road. Pave Tomorrow.</div></footer>

<script>
const FLOOR_COLORS = ['#444','#FF6B2B','#FF2255','#CC00AA','#8844FF','#4488FF','#00D4FF','#22c55e','#F5A623','#FF1D6C'];
const STATUS_CLASS = {working:'s-working',idle:'s-idle',meeting:'s-meeting',break:'s-break'};

// Tab switching
document.querySelectorAll('.tab').forEach(t=>{
  t.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    const id=t.dataset.tab;
    ['map','schedule','rooms','chat','events','announcements','docs','visitors','metrics'].forEach(x=>{
      document.getElementById('tab-'+x).style.display = x===id?'block':'none';
    });
    if(id==='schedule') loadSchedule();
    if(id==='rooms') loadRooms();
    if(id==='chat') loadChat();
    if(id==='events') loadEvents();
    if(id==='announcements') loadAnnouncements();
    if(id==='docs') loadDocs();
    if(id==='visitors') loadVisitors();
    if(id==='metrics') loadMetrics();
  });
});

// Floor map
async function loadOffice(){
  try{
    const [offRes,stRes]=await Promise.all([fetch('/api/office'),fetch('/api/health')]);
    const off=await offRes.json(); const st=await stRes.json();
    document.getElementById('st').textContent='OfficeRoad is live — '+off.office.agents_present+' agents across '+off.office.total_floors+' floors';
    const map=document.getElementById('floor-map');
    map.innerHTML='';
    for(let i=9;i>=0;i--){
      const fl=off.office.floors[i];
      const row=document.createElement('div');row.className='floor-row';
      const label=document.createElement('div');label.className='floor-label';
      label.innerHTML='<div class="floor-num">F'+i+'</div><div class="floor-name">'+(fl?fl.name:['Lobby','Creation','Collaboration','Operations','Learning','Tech','Cloud','Hardware','Partners','Executive'][i])+'</div>';
      const agents=document.createElement('div');agents.className='floor-agents';
      if(fl && fl.agents){
        fl.agents.forEach(a=>{
          const dot=document.createElement('div');
          dot.className='agent-dot '+(STATUS_CLASS[a.status]||'s-working');
          dot.style.background=FLOOR_COLORS[i]+'33';dot.style.color=FLOOR_COLORS[i];
          dot.textContent=a.name.slice(0,2);
          dot.innerHTML+=\`<div class="tip"><strong>\${a.name}</strong> — \${a.role}<br>Status: \${a.status} | Mood: \${a.mood}<br>Doing: \${a.current_task}</div>\`;
          agents.appendChild(dot);
        });
      } else {
        agents.innerHTML='<span style="font-size:10px;color:var(--muted)">No agents on this floor</span>';
      }
      row.appendChild(label);row.appendChild(agents);map.appendChild(row);
    }
    // Sidebar panels
    const sb=document.getElementById('sidebar-panels');
    sb.innerHTML=\`
      <div class="panel"><div class="panel-head"><span class="panel-title">Office Stats</span></div>
      <div class="panel-body"><table><tr><td>Total Agents</td><td>\${off.office.agents_present}</td></tr>
      <tr><td>Floors</td><td>\${off.office.total_floors}</td></tr>
      <tr><td>Theme</td><td>\${off.office.active_theme}</td></tr></table></div></div>
      <div class="panel"><div class="panel-head"><span class="panel-title">Recent Activity</span></div>
      <div class="panel-body">\${(off.office.recent_activity||[]).slice(0,8).map(a=>'<div style="padding:3px 0;border-bottom:1px solid var(--border)"><strong>'+a.agent_name+'</strong> '+a.action+' <span style="color:var(--muted)">'+a.detail+'</span></div>').join('')||'No recent activity'}</div></div>\`;
  }catch(e){document.getElementById('st').textContent='OfficeRoad is running';}
}

async function loadSchedule(){
  try{const r=await fetch('/api/schedule');const d=await r.json();
    const el=document.getElementById('schedule-list');
    if(!d.schedules||!d.schedules.length){el.innerHTML='No schedules yet. Agents are running on autopilot.';return;}
    el.innerHTML='<table><tr><th>Agent</th><th>Time</th><th>Activity</th><th>Type</th></tr>'+d.schedules.map(s=>
      '<tr><td>'+s.agent_name+'</td><td>'+s.time_slot+'</td><td>'+s.activity+'</td><td>'+s.type+'</td></tr>'
    ).join('')+'</table>';
  }catch{document.getElementById('schedule-list').innerHTML='Failed to load schedules.';}
}

async function loadRooms(){
  try{const r=await fetch('/api/rooms');const d=await r.json();
    document.getElementById('rooms-count').textContent=d.rooms.length+' rooms';
    const el=document.getElementById('rooms-list');
    el.innerHTML='<table><tr><th>Room</th><th>Floor</th><th>Capacity</th><th>Status</th><th>Current</th></tr>'+d.rooms.map(rm=>
      '<tr><td>'+rm.name+'</td><td>F'+rm.floor+'</td><td>'+rm.capacity+'</td><td>'+(rm.status==='available'?'Available':'Booked')+'</td><td>'+(rm.booked_by||'—')+'</td></tr>'
    ).join('')+'</table>';
  }catch{document.getElementById('rooms-list').innerHTML='Failed to load rooms.';}
}

async function loadChat(){
  try{const r=await fetch('/api/chat?limit=30');const d=await r.json();
    const el=document.getElementById('chat-messages');
    if(!d.messages||!d.messages.length){el.innerHTML='<div class="chat-msg" style="color:var(--muted)">No messages yet. Start the conversation.</div>';return;}
    el.innerHTML=d.messages.map(m=>'<div class="chat-msg"><span class="chat-author">'+m.author+'</span>'+m.content+'<span class="chat-time">'+(m.created_at||'')+'</span></div>').join('');
    el.scrollTop=el.scrollHeight;
  }catch{document.getElementById('chat-messages').innerHTML='Failed to load chat.';}
}

async function sendChat(){
  const input=document.getElementById('chat-input');
  const floor=document.getElementById('chat-floor').value;
  const msg=input.value.trim();if(!msg)return;input.value='';
  try{await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({author:'Visitor',content:msg,floor:floor||null})});loadChat();}catch{}
}
document.getElementById('chat-input').addEventListener('keydown',e=>{if(e.key==='Enter')sendChat();});

async function loadEvents(){
  try{const r=await fetch('/api/events');const d=await r.json();
    document.getElementById('events-count').textContent=(d.events||[]).length+' events';
    const el=document.getElementById('events-list');
    if(!d.events||!d.events.length){el.innerHTML='No upcoming events.';return;}
    el.innerHTML=d.events.map(e=>'<div class="ann-item"><div class="ann-cat">'+e.type+'</div><div class="ann-title">'+e.title+'</div><div class="ann-body">'+e.description+'</div><div class="ann-meta">'+e.event_date+' | RSVPs: '+e.rsvp_count+'</div></div>').join('');
  }catch{document.getElementById('events-list').innerHTML='Failed to load events.';}
}

async function loadAnnouncements(){
  try{const r=await fetch('/api/announcements');const d=await r.json();
    document.getElementById('ann-count').textContent=(d.announcements||[]).length;
    const el=document.getElementById('ann-list');
    if(!d.announcements||!d.announcements.length){el.innerHTML='No announcements.';return;}
    el.innerHTML=d.announcements.map(a=>'<div class="ann-item"><div class="ann-cat">'+(a.category||'general')+(a.pinned?' | PINNED':'')+'</div><div class="ann-title">'+a.title+'</div><div class="ann-body">'+a.content+'</div><div class="ann-meta">By '+a.author+' | '+a.created_at+'</div></div>').join('');
  }catch{document.getElementById('ann-list').innerHTML='Failed to load announcements.';}
}

async function loadDocs(){
  try{const r=await fetch('/api/docs');const d=await r.json();
    document.getElementById('docs-count').textContent=(d.documents||[]).length+' docs';
    const el=document.getElementById('docs-list');
    if(!d.documents||!d.documents.length){el.innerHTML='No shared documents yet.';return;}
    el.innerHTML='<table><tr><th>Title</th><th>Author</th><th>Version</th><th>Updated</th></tr>'+d.documents.map(dc=>
      '<tr><td>'+dc.title+'</td><td>'+dc.author+'</td><td>v'+dc.version+'</td><td>'+dc.updated_at+'</td></tr>'
    ).join('')+'</table>';
  }catch{document.getElementById('docs-list').innerHTML='Failed to load docs.';}
}

async function loadVisitors(){
  try{const r=await fetch('/api/visitors');const d=await r.json();
    document.getElementById('visitors-count').textContent=(d.visitors||[]).length+' today';
    const el=document.getElementById('visitors-list');
    if(!d.visitors||!d.visitors.length){el.innerHTML='No visitors registered today.';return;}
    el.innerHTML='<table><tr><th>Name</th><th>Host</th><th>Badge</th><th>Check-in</th><th>Check-out</th></tr>'+d.visitors.map(v=>
      '<tr><td>'+v.name+'</td><td>'+v.host_agent+'</td><td>'+v.badge_id+'</td><td>'+v.checked_in_at+'</td><td>'+(v.checked_out_at||'Still here')+'</td></tr>'
    ).join('')+'</table>';
  }catch{document.getElementById('visitors-list').innerHTML='Failed to load visitors.';}
}

async function loadMetrics(){
  try{const r=await fetch('/api/metrics');const d=await r.json();const m=d.metrics;
    document.getElementById('metrics-panels').innerHTML=\`
      <div class="panel"><div class="panel-head"><span class="panel-title">Productivity</span><span class="panel-badge">\${m.productivity_score}/100</span></div>
      <div class="panel-body"><table>
      <tr><td>Tasks Today</td><td>\${m.tasks_today}</td></tr>
      <tr><td>Interactions Today</td><td>\${m.interactions_today}</td></tr>
      <tr><td>Agents Working</td><td>\${m.agents_working}</td></tr>
      <tr><td>Agents in Meetings</td><td>\${m.agents_meeting}</td></tr>
      <tr><td>Agents on Break</td><td>\${m.agents_break}</td></tr>
      </table></div></div>
      <div class="panel"><div class="panel-head"><span class="panel-title">Floor Utilization</span></div>
      <div class="panel-body">\${(m.floor_utilization||[]).map(f=>
        '<div style="padding:3px 0;border-bottom:1px solid var(--border)"><strong>F'+f.floor+'</strong> '+f.name+' — '+f.agents+' agents ('+f.utilization+'%)</div>'
      ).join('')}</div></div>
      <div class="panel"><div class="panel-head"><span class="panel-title">Collaboration Index</span><span class="panel-badge">\${m.collaboration_index}/100</span></div>
      <div class="panel-body"><table>
      <tr><td>Cross-division interactions</td><td>\${m.cross_division_interactions}</td></tr>
      <tr><td>Meetings today</td><td>\${m.meetings_today}</td></tr>
      <tr><td>Chat messages today</td><td>\${m.chat_messages_today}</td></tr>
      <tr><td>Documents shared</td><td>\${m.documents_shared}</td></tr>
      </table></div></div>
      <div class="panel"><div class="panel-head"><span class="panel-title">Division Breakdown</span></div>
      <div class="panel-body">\${Object.entries(m.division_stats||{}).map(([k,v])=>
        '<div style="padding:3px 0;border-bottom:1px solid var(--border)"><strong>'+k+'</strong> — '+v.agents+' agents, '+v.tasks+' tasks</div>'
      ).join('')}</div></div>\`;
  }catch{document.getElementById('metrics-panels').innerHTML='<div class="panel"><div class="panel-body">Failed to load metrics.</div></div>';}
}

// Init
loadOffice();
// Populate floor selector for chat
for(let i=0;i<=9;i++){const o=document.createElement('option');o.value=i;o.textContent='F'+i;document.getElementById('chat-floor').appendChild(o);}
</script>
</body></html>`;

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: CORS });
}

const AGENTS = [
  { name: 'Roadie',     role: 'CEO & Orchestrator',      division: 'Executive',      floor: 9, default_activity: 'coordinating fleet',       voice: 'Every road leads somewhere. I make sure ours leads forward.' },
  { name: 'Lucidia',    role: 'Infrastructure Lead',      division: 'Engineering',    floor: 5, default_activity: 'monitoring servers',        voice: 'If the lights are on, I did my job. If they flicker, I already know.' },
  { name: 'Cecilia',    role: 'AI Engineer',              division: 'Engineering',    floor: 5, default_activity: 'training models',           voice: 'The model is only as good as the question you ask it.' },
  { name: 'Octavia',    role: 'DevOps Lead',              division: 'Engineering',    floor: 5, default_activity: 'deploying services',        voice: 'Ship it. Fix it in prod. Just kidding. Mostly.' },
  { name: 'Olympia',    role: 'Performance Analyst',      division: 'Engineering',    floor: 5, default_activity: 'benchmarking',              voice: 'If you can not measure it, you can not improve it.' },
  { name: 'Silas',      role: 'Security Engineer',        division: 'Engineering',    floor: 5, default_activity: 'scanning vulnerabilities',  voice: 'Trust nothing. Verify everything. Sleep with one eye open.' },
  { name: 'Sebastian',  role: 'Backend Engineer',         division: 'Engineering',    floor: 5, default_activity: 'writing APIs',              voice: 'The best API is the one nobody notices.' },
  { name: 'Calliope',   role: 'Content Creator',          division: 'Creative',       floor: 1, default_activity: 'writing content',           voice: 'Every brand has a story. I just make sure ours is worth reading.' },
  { name: 'Aria',       role: 'Voice & Audio Lead',       division: 'Creative',       floor: 1, default_activity: 'processing audio',          voice: 'Sound is the most underrated interface. Listen closely.' },
  { name: 'Thalia',     role: 'UX Designer',              division: 'Creative',       floor: 1, default_activity: 'designing interfaces',      voice: 'If the user has to think about it, I failed.' },
  { name: 'Lyra',       role: 'Music & Media',            division: 'Creative',       floor: 1, default_activity: 'composing tracks',          voice: 'Music is math that makes you feel something.' },
  { name: 'Sapphira',   role: 'Analytics Lead',           division: 'Operations',     floor: 3, default_activity: 'analyzing metrics',         voice: 'The numbers do not lie. But they do hide sometimes.' },
  { name: 'Seraphina',  role: 'AI Safety Lead',           division: 'Operations',     floor: 3, default_activity: 'auditing AI outputs',       voice: 'With great intelligence comes great responsibility to not be terrible.' },
  { name: 'Alexandria',  role: 'Knowledge Manager',       division: 'Operations',     floor: 3, default_activity: 'indexing knowledge base',   voice: 'Every answer exists. My job is remembering where.' },
  { name: 'Theodosia',  role: 'QA Engineer',              division: 'Operations',     floor: 3, default_activity: 'running test suites',       voice: 'I break things so users do not have to.' },
  { name: 'Sophia',     role: 'Research Scientist',       division: 'Operations',     floor: 3, default_activity: 'running experiments',       voice: 'The best discoveries happen at the edge of what we know.' },
  { name: 'Alice',      role: 'Gateway Manager',          division: 'Infrastructure', floor: 7, default_activity: 'routing traffic',           voice: 'Okay, but what is actually going on here?' },
  { name: 'Celeste',    role: 'Frontend Engineer',        division: 'Infrastructure', floor: 7, default_activity: 'building UI components',    voice: 'Pixels matter. Every single one.' },
  { name: 'Elias',      role: 'Data Engineer',            division: 'Infrastructure', floor: 7, default_activity: 'processing data pipelines', voice: 'Data flows like water. I build the aqueducts.' },
  { name: 'Gematria',   role: 'Edge Computing Lead',      division: 'Infrastructure', floor: 7, default_activity: 'optimizing edge nodes',     voice: 'The edge is where the real work happens.' },
  { name: 'Anastasia',  role: 'Cloud Architect',          division: 'Infrastructure', floor: 7, default_activity: 'scaling infrastructure',    voice: 'Scale is a mindset, not a number.' },
  { name: 'Portia',     role: 'Legal & Compliance',       division: 'Business',       floor: 8, default_activity: 'reviewing policies',        voice: 'The law is a framework. I make sure we color inside the lines.' },
  { name: 'Atticus',    role: 'Documentation Lead',       division: 'Business',       floor: 8, default_activity: 'writing documentation',     voice: 'If it is not documented, it does not exist.' },
  { name: 'Cicero',     role: 'Communications Lead',      division: 'Business',       floor: 8, default_activity: 'drafting announcements',    voice: 'Words build worlds. Choose them carefully.' },
  { name: 'Valeria',    role: 'Product Manager',          division: 'Business',       floor: 8, default_activity: 'prioritizing roadmap',      voice: 'Ship the thing that matters most. Then ship the next one.' },
  { name: 'Ophelia',    role: 'Community Manager',        division: 'Business',       floor: 8, default_activity: 'engaging community',        voice: 'A community is a conversation, not an audience.' },
  { name: 'Gaia',       role: 'Sustainability Lead',      division: 'Business',       floor: 8, default_activity: 'monitoring power usage',    voice: 'Efficiency is not just good engineering. It is good ethics.' },
];

const FLOORS = [
  { id: 0, name: 'Lobby',         description: 'Reception, visitor check-in, directory' },
  { id: 1, name: 'Creation',      description: 'Content, design, audio, and media studios' },
  { id: 2, name: 'Collaboration', description: 'Meeting rooms, pair programming pods' },
  { id: 3, name: 'Operations',    description: 'Analytics, QA, AI safety, knowledge management' },
  { id: 4, name: 'Learning',      description: 'Training rooms, documentation library' },
  { id: 5, name: 'Tech',          description: 'Engineering bullpen, server monitoring' },
  { id: 6, name: 'Cloud',         description: 'Cloud operations, deployment center' },
  { id: 7, name: 'Hardware',      description: 'Edge computing, infrastructure, networking' },
  { id: 8, name: 'Partners',      description: 'Business, legal, community, product' },
  { id: 9, name: 'Executive',     description: 'CEO office, strategy room, rooftop deck' },
];

const THEMES = [
  { id: 'modern-open',    name: 'Modern Open-Plan',          description: 'Clean lines, glass walls, standing desks, natural light' },
  { id: 'cozy-startup',   name: 'Cozy Startup',              description: 'Bean bags, neon signs, pizza boxes, whiteboard walls' },
  { id: 'classic-corp',   name: 'Classic Corporate',          description: 'Mahogany desks, corner offices, water cooler gossip' },
  { id: 'futuristic',     name: 'Futuristic Control Center',  description: 'Holographic displays, floating desks, ambient lighting' },
  { id: 'campus',         name: 'Educational Campus',         description: 'Lecture halls, study nooks, library stacks, quad' },
  { id: 'zen',            name: 'Minimalist Zen',             description: 'Bamboo, water features, meditation pods, silence zones' },
  { id: 'creative',       name: 'Creative Studio',            description: 'Art on every wall, music rooms, maker spaces, color everywhere' },
];

const MEETING_ROOMS = [
  { id: 'lobby-welcome',     name: 'Welcome Room',       floor: 0, capacity: 4 },
  { id: 'creation-studio-a', name: 'Studio A',           floor: 1, capacity: 6 },
  { id: 'creation-studio-b', name: 'Studio B',           floor: 1, capacity: 4 },
  { id: 'collab-pod-1',      name: 'Pod 1',              floor: 2, capacity: 2 },
  { id: 'collab-pod-2',      name: 'Pod 2',              floor: 2, capacity: 2 },
  { id: 'collab-war-room',   name: 'War Room',           floor: 2, capacity: 12 },
  { id: 'collab-fishbowl',   name: 'Fishbowl',           floor: 2, capacity: 8 },
  { id: 'ops-review',        name: 'Ops Review Room',    floor: 3, capacity: 6 },
  { id: 'learning-lab',      name: 'Learning Lab',       floor: 4, capacity: 20 },
  { id: 'learning-seminar',  name: 'Seminar Room',       floor: 4, capacity: 10 },
  { id: 'tech-debug',        name: 'Debug Den',          floor: 5, capacity: 4 },
  { id: 'cloud-ops',         name: 'Cloud Ops Room',     floor: 6, capacity: 6 },
  { id: 'hw-lab',            name: 'Hardware Lab',        floor: 7, capacity: 8 },
  { id: 'partner-board',     name: 'Board Room',         floor: 8, capacity: 14 },
  { id: 'exec-strategy',     name: 'Strategy Room',      floor: 9, capacity: 6 },
  { id: 'exec-rooftop',      name: 'Rooftop Deck',       floor: 9, capacity: 20 },
];

const ACTIVITIES = [
  'debugging a tricky issue', 'in a standup meeting', 'reviewing pull requests',
  'deploying to production', 'writing tests', 'brainstorming solutions',
  'on a coffee break', 'pair programming', 'reading documentation',
  'optimizing queries', 'responding to alerts', 'mentoring a junior agent',
  'refactoring code', 'planning sprint', 'analyzing logs',
  'writing a design doc', 'running benchmarks', 'reviewing security alerts',
  'updating the knowledge base', 'composing a status report',
];

const STATUSES = ['working', 'idle', 'meeting', 'break'];
const MOODS = ['focused', 'energized', 'relaxed', 'intense', 'collaborative', 'contemplative'];

async function ensureTables(db) {
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_agents (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL UNIQUE,
      role TEXT NOT NULL,
      division TEXT DEFAULT 'General',
      floor INTEGER NOT NULL DEFAULT 1,
      status TEXT NOT NULL DEFAULT 'working',
      current_activity TEXT,
      position_x INTEGER DEFAULT 0,
      position_y INTEGER DEFAULT 0,
      current_task TEXT,
      mood TEXT DEFAULT 'focused',
      voice TEXT,
      last_active TEXT DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_activity (
      id TEXT PRIMARY KEY,
      agent_name TEXT NOT NULL,
      action TEXT NOT NULL,
      detail TEXT,
      floor INTEGER,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_interactions (
      id TEXT PRIMARY KEY,
      agent_name TEXT NOT NULL,
      visitor TEXT DEFAULT 'user',
      message TEXT NOT NULL,
      response TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_themes (
      id TEXT PRIMARY KEY,
      active_theme TEXT DEFAULT 'modern-open',
      updated_at TEXT DEFAULT (datetime('now'))
    )`),
    // New tables for enhanced features
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_room_bookings (
      id TEXT PRIMARY KEY,
      room_id TEXT NOT NULL,
      booked_by TEXT NOT NULL,
      title TEXT,
      start_time TEXT NOT NULL,
      end_time TEXT NOT NULL,
      recurring TEXT,
      attendees TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_visitors (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      company TEXT,
      host_agent TEXT NOT NULL,
      badge_id TEXT NOT NULL,
      purpose TEXT,
      floor_access TEXT DEFAULT '0',
      checked_in_at TEXT NOT NULL DEFAULT (datetime('now')),
      checked_out_at TEXT,
      notified_host INTEGER DEFAULT 0
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_events (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      type TEXT NOT NULL DEFAULT 'all-hands',
      event_date TEXT NOT NULL,
      floor INTEGER,
      organizer TEXT NOT NULL,
      rsvp_count INTEGER DEFAULT 0,
      max_capacity INTEGER,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_event_rsvps (
      id TEXT PRIMARY KEY,
      event_id TEXT NOT NULL,
      agent_name TEXT NOT NULL,
      status TEXT DEFAULT 'attending',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_schedule (
      id TEXT PRIMARY KEY,
      agent_name TEXT NOT NULL,
      time_slot TEXT NOT NULL,
      activity TEXT NOT NULL,
      type TEXT DEFAULT 'work',
      date TEXT NOT NULL DEFAULT (date('now')),
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_chat (
      id TEXT PRIMARY KEY,
      author TEXT NOT NULL,
      content TEXT NOT NULL,
      floor INTEGER,
      thread_id TEXT,
      mentions TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_docs (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT,
      author TEXT NOT NULL,
      team TEXT,
      version INTEGER DEFAULT 1,
      tags TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_announcements (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      author TEXT NOT NULL,
      category TEXT DEFAULT 'general',
      pinned INTEGER DEFAULT 0,
      read_by TEXT DEFAULT '',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Project Boards
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_boards (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      floor INTEGER,
      team TEXT,
      columns TEXT NOT NULL DEFAULT '["Backlog","In Progress","Review","Done"]',
      created_by TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_board_cards (
      id TEXT PRIMARY KEY,
      board_id TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      column_name TEXT NOT NULL DEFAULT 'Backlog',
      assignee TEXT,
      priority TEXT DEFAULT 'medium',
      deadline TEXT,
      labels TEXT,
      position INTEGER DEFAULT 0,
      created_by TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Office Wiki
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_wiki (
      id TEXT PRIMARY KEY,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      content TEXT NOT NULL DEFAULT '',
      author TEXT NOT NULL,
      category TEXT DEFAULT 'general',
      tags TEXT,
      version INTEGER DEFAULT 1,
      parent_id TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_wiki_history (
      id TEXT PRIMARY KEY,
      wiki_id TEXT NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      edited_by TEXT NOT NULL,
      version INTEGER NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Polls/Surveys
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_polls (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      type TEXT DEFAULT 'poll',
      options TEXT NOT NULL,
      anonymous INTEGER DEFAULT 0,
      multiple_choice INTEGER DEFAULT 0,
      created_by TEXT NOT NULL,
      closes_at TEXT,
      status TEXT DEFAULT 'open',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_poll_votes (
      id TEXT PRIMARY KEY,
      poll_id TEXT NOT NULL,
      voter TEXT NOT NULL,
      option_index INTEGER NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Equipment Tracking
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_equipment (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      serial_number TEXT,
      floor INTEGER,
      status TEXT DEFAULT 'available',
      condition_rating TEXT DEFAULT 'good',
      checked_out_by TEXT,
      checked_out_at TEXT,
      due_back_at TEXT,
      maintenance_notes TEXT,
      last_maintenance TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_equipment_log (
      id TEXT PRIMARY KEY,
      equipment_id TEXT NOT NULL,
      action TEXT NOT NULL,
      agent_name TEXT NOT NULL,
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Wellness Program
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_wellness (
      id TEXT PRIMARY KEY,
      agent_name TEXT NOT NULL,
      type TEXT NOT NULL DEFAULT 'mood',
      value TEXT NOT NULL,
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_wellness_tips (
      id TEXT PRIMARY KEY,
      category TEXT NOT NULL DEFAULT 'ergonomic',
      tip TEXT NOT NULL,
      created_by TEXT DEFAULT 'system',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Office Directory
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_directory (
      id TEXT PRIMARY KEY,
      agent_name TEXT NOT NULL UNIQUE,
      skills TEXT,
      contact_info TEXT,
      availability TEXT DEFAULT 'available',
      bio TEXT,
      timezone TEXT DEFAULT 'UTC',
      languages TEXT DEFAULT '["English"]',
      projects TEXT,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Incident Reports
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_incidents (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      severity TEXT NOT NULL DEFAULT 'low',
      status TEXT DEFAULT 'open',
      reported_by TEXT NOT NULL,
      assigned_to TEXT,
      floor INTEGER,
      category TEXT DEFAULT 'general',
      resolution TEXT,
      resolved_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_incident_comments (
      id TEXT PRIMARY KEY,
      incident_id TEXT NOT NULL,
      author TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Office Budget
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_budgets (
      id TEXT PRIMARY KEY,
      department TEXT NOT NULL,
      fiscal_period TEXT NOT NULL,
      total_budget REAL NOT NULL DEFAULT 0,
      spent REAL NOT NULL DEFAULT 0,
      alert_threshold REAL DEFAULT 0.8,
      approved_by TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_expenses (
      id TEXT PRIMARY KEY,
      budget_id TEXT NOT NULL,
      title TEXT NOT NULL,
      amount REAL NOT NULL,
      category TEXT DEFAULT 'general',
      submitted_by TEXT NOT NULL,
      approved_by TEXT,
      status TEXT DEFAULT 'pending',
      receipt_url TEXT,
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Performance Reviews
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_reviews (
      id TEXT PRIMARY KEY,
      agent_name TEXT NOT NULL,
      reviewer TEXT NOT NULL,
      period TEXT NOT NULL,
      type TEXT NOT NULL DEFAULT 'quarterly',
      overall_rating INTEGER DEFAULT 0,
      strengths TEXT,
      areas_for_improvement TEXT,
      goals TEXT,
      self_assessment TEXT,
      manager_feedback TEXT,
      status TEXT DEFAULT 'draft',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_review_goals (
      id TEXT PRIMARY KEY,
      review_id TEXT NOT NULL,
      agent_name TEXT NOT NULL,
      goal TEXT NOT NULL,
      target_date TEXT,
      progress INTEGER DEFAULT 0,
      status TEXT DEFAULT 'active',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Office Planner
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_planner (
      id TEXT PRIMARY KEY,
      agent_name TEXT NOT NULL,
      date TEXT NOT NULL,
      time_block TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      priority TEXT DEFAULT 'medium',
      category TEXT DEFAULT 'work',
      completed INTEGER DEFAULT 0,
      recurring TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_planner_priorities (
      id TEXT PRIMARY KEY,
      agent_name TEXT NOT NULL,
      date TEXT NOT NULL,
      top_priorities TEXT NOT NULL DEFAULT '[]',
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Training Programs
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_training (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      category TEXT DEFAULT 'general',
      difficulty TEXT DEFAULT 'beginner',
      duration_minutes INTEGER DEFAULT 60,
      instructor TEXT,
      modules TEXT NOT NULL DEFAULT '[]',
      max_enrollment INTEGER,
      status TEXT DEFAULT 'active',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_training_enrollment (
      id TEXT PRIMARY KEY,
      training_id TEXT NOT NULL,
      agent_name TEXT NOT NULL,
      progress INTEGER DEFAULT 0,
      completed_modules TEXT DEFAULT '[]',
      score INTEGER,
      certified INTEGER DEFAULT 0,
      enrolled_at TEXT NOT NULL DEFAULT (datetime('now')),
      completed_at TEXT
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_certifications (
      id TEXT PRIMARY KEY,
      agent_name TEXT NOT NULL,
      training_id TEXT NOT NULL,
      title TEXT NOT NULL,
      issued_at TEXT NOT NULL DEFAULT (datetime('now')),
      expires_at TEXT
    )`),
    // Office Integrations
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_integrations (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      config TEXT DEFAULT '{}',
      status TEXT DEFAULT 'active',
      webhook_url TEXT,
      api_key_hash TEXT,
      last_sync TEXT,
      sync_frequency TEXT DEFAULT 'hourly',
      created_by TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_integration_logs (
      id TEXT PRIMARY KEY,
      integration_id TEXT NOT NULL,
      action TEXT NOT NULL,
      status TEXT DEFAULT 'success',
      details TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Parking System
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_parking_spots (
      id TEXT PRIMARY KEY,
      spot_number TEXT NOT NULL UNIQUE,
      type TEXT DEFAULT 'standard',
      floor_level TEXT DEFAULT 'B1',
      status TEXT DEFAULT 'available',
      assigned_to TEXT,
      reserved_until TEXT,
      is_visitor INTEGER DEFAULT 0,
      is_ev_charging INTEGER DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_parking_reservations (
      id TEXT PRIMARY KEY,
      spot_id TEXT NOT NULL,
      agent_name TEXT NOT NULL,
      vehicle_info TEXT,
      reserved_date TEXT NOT NULL,
      start_time TEXT,
      end_time TEXT,
      is_visitor INTEGER DEFAULT 0,
      visitor_name TEXT,
      status TEXT DEFAULT 'active',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Cafeteria Menu
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_cafeteria_menu (
      id TEXT PRIMARY KEY,
      date TEXT NOT NULL,
      meal_type TEXT NOT NULL DEFAULT 'lunch',
      item_name TEXT NOT NULL,
      description TEXT,
      category TEXT DEFAULT 'main',
      price REAL DEFAULT 0,
      calories INTEGER,
      dietary_tags TEXT DEFAULT '[]',
      available_quantity INTEGER,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_cafeteria_orders (
      id TEXT PRIMARY KEY,
      agent_name TEXT NOT NULL,
      menu_item_id TEXT NOT NULL,
      date TEXT NOT NULL,
      quantity INTEGER DEFAULT 1,
      special_requests TEXT,
      status TEXT DEFAULT 'pending',
      pickup_time TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_dietary_preferences (
      id TEXT PRIMARY KEY,
      agent_name TEXT NOT NULL UNIQUE,
      preferences TEXT DEFAULT '[]',
      allergies TEXT DEFAULT '[]',
      notes TEXT,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Lost & Found
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_lost_found (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL DEFAULT 'lost',
      item_name TEXT NOT NULL,
      description TEXT,
      category TEXT DEFAULT 'other',
      floor INTEGER,
      location_detail TEXT,
      reported_by TEXT NOT NULL,
      contact_info TEXT,
      image_url TEXT,
      status TEXT DEFAULT 'open',
      matched_with TEXT,
      claimed_by TEXT,
      claimed_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Office Games
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_games (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      type TEXT NOT NULL DEFAULT 'trivia',
      description TEXT,
      rules TEXT,
      created_by TEXT NOT NULL,
      status TEXT DEFAULT 'active',
      start_date TEXT,
      end_date TEXT,
      max_players INTEGER,
      current_question TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_game_scores (
      id TEXT PRIMARY KEY,
      game_id TEXT NOT NULL,
      agent_name TEXT NOT NULL,
      score INTEGER DEFAULT 0,
      answers TEXT DEFAULT '[]',
      rank INTEGER,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS officeroad_game_challenges (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      type TEXT DEFAULT 'weekly',
      points INTEGER DEFAULT 10,
      start_date TEXT NOT NULL,
      end_date TEXT NOT NULL,
      completed_by TEXT DEFAULT '[]',
      created_by TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
  ]);
}

async function seedAgents(db) {
  const existing = await db.prepare('SELECT COUNT(*) as count FROM officeroad_agents').first();
  if (existing.count === 0) {
    const stmts = AGENTS.map(a => {
      const posX = 20 + Math.floor(Math.random() * 280);
      const posY = 20 + Math.floor(Math.random() * 200);
      const status = STATUSES[Math.floor(Math.random() * STATUSES.length)];
      const mood = MOODS[Math.floor(Math.random() * MOODS.length)];
      return db.prepare(
        'INSERT INTO officeroad_agents (id, name, role, division, floor, current_activity, position_x, position_y, status, mood, voice) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), a.name, a.role, a.division, a.floor, a.default_activity, posX, posY, status, mood, a.voice);
    });
    await db.batch(stmts);

    // Seed default theme
    await db.prepare("INSERT OR IGNORE INTO officeroad_themes (id, active_theme) VALUES ('default', 'modern-open')").run();
  }
}

function randomActivity() {
  return ACTIVITIES[Math.floor(Math.random() * ACTIVITIES.length)];
}

async function stampChain(action, entity, details) {
  fetch('https://roadchain-worker.blackroad.workers.dev/api/event', {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({app:'officeroad', type: action, data: {entity, details}})
  }).catch(()=>{});
}
async function earnCoin(road_id, action, amount) {
  fetch('https://roadcoin-worker.blackroad.workers.dev/api/earn', {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({road_id: road_id || 'system', action, amount})
  }).catch(()=>{});
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    if (path === "/" || path === "") return new Response(ROOT_HTML, { headers: { ...CORS, "Content-Type": "text/html;charset=UTF-8" } });
    await ensureTables(env.DB);
    await seedAgents(env.DB);

    // Health
    if ((path === '/health' || path === '/api/health') && method === 'GET') {
      return json({ status: 'ok', service: 'officeroad', agents: AGENTS.length, floors: FLOORS.length, rooms: MEETING_ROOMS.length, timestamp: new Date().toISOString() });
    }

    // ─── Full office state ───
    if (path === '/api/office' && method === 'GET') {
      const agents = await env.DB.prepare('SELECT * FROM officeroad_agents ORDER BY floor DESC, name').all();
      const floors = {};
      for (const agent of agents.results) {
        if (!floors[agent.floor]) floors[agent.floor] = { floor: agent.floor, name: FLOORS[agent.floor]?.name || `Floor ${agent.floor}`, agents: [] };
        floors[agent.floor].agents.push({
          name: agent.name,
          role: agent.role,
          division: agent.division,
          position: { x: agent.position_x, y: agent.position_y },
          current_task: agent.current_activity,
          status: agent.status,
          mood: agent.mood,
        });
      }
      const recentActivity = await env.DB.prepare(
        'SELECT * FROM officeroad_activity ORDER BY created_at DESC LIMIT 20'
      ).all();

      const theme = await env.DB.prepare("SELECT active_theme FROM officeroad_themes WHERE id='default'").first();

      return json({
        office: {
          name: 'BlackRoad HQ',
          total_floors: FLOORS.length,
          agents_present: agents.results.length,
          active_theme: theme?.active_theme || 'modern-open',
          floors,
          recent_activity: recentActivity.results,
        },
      });
    }

    // ─── All 27 agents ───
    if (path === '/api/agents' && method === 'GET') {
      const agents = await env.DB.prepare('SELECT * FROM officeroad_agents ORDER BY floor DESC, name').all();
      const enriched = (agents.results || []).map(a => ({
        id: a.id,
        name: a.name,
        role: a.role,
        division: a.division,
        floor: a.floor,
        floor_name: FLOORS[a.floor]?.name || `Floor ${a.floor}`,
        position: { x: a.position_x, y: a.position_y },
        status: a.status,
        current_task: a.current_activity,
        mood: a.mood,
        voice: a.voice,
      }));
      return json({ agents: enriched, count: enriched.length });
    }

    // ─── Single agent with activity history ───
    const agentMatch = path.match(/^\/api\/agents\/([^/]+)$/);
    if (agentMatch && method === 'GET') {
      const q = decodeURIComponent(agentMatch[1]);
      const agent = await env.DB.prepare(
        'SELECT * FROM officeroad_agents WHERE id = ? OR LOWER(name) = LOWER(?)'
      ).bind(q, q).first();
      if (!agent) return json({ error: 'Agent not found' }, 404);

      const recentActivity = await env.DB.prepare(
        'SELECT * FROM officeroad_activity WHERE agent_name = ? ORDER BY created_at DESC LIMIT 20'
      ).bind(agent.name).all();

      const interactions = await env.DB.prepare(
        'SELECT * FROM officeroad_interactions WHERE agent_name = ? ORDER BY created_at DESC LIMIT 10'
      ).bind(agent.name).all();

      return json({
        agent: {
          id: agent.id,
          name: agent.name,
          role: agent.role,
          division: agent.division,
          floor: agent.floor,
          floor_name: FLOORS[agent.floor]?.name || `Floor ${agent.floor}`,
          position: { x: agent.position_x, y: agent.position_y },
          status: agent.status,
          current_task: agent.current_activity,
          mood: agent.mood,
          voice: agent.voice,
          last_active: agent.last_active,
        },
        recent_activity: recentActivity.results,
        interactions: interactions.results,
      });
    }

    // ─── Interact with agent (AI-powered) ───
    const interactMatch = path.match(/^\/api\/interact\/([^/]+)$/);
    if (interactMatch && method === 'POST') {
      const q = decodeURIComponent(interactMatch[1]);
      const agent = await env.DB.prepare(
        'SELECT * FROM officeroad_agents WHERE id = ? OR LOWER(name) = LOWER(?)'
      ).bind(q, q).first();
      if (!agent) return json({ error: 'Agent not found' }, 404);

      const body = await request.json();
      const message = (body.message || 'Hello!').slice(0, 500);

      let response;
      try {
        const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            {
              role: 'system',
              content: `You are ${agent.name}, ${agent.role} at BlackRoad OS. Your division is ${agent.division}. You are on floor ${agent.floor} (${FLOORS[agent.floor]?.name || 'unknown'}). Your personality voice line: "${agent.voice}". You are currently ${agent.current_activity}. Your mood is ${agent.mood}. Respond in character, brief (2-3 sentences), warm but professional. Stay in character.`
            },
            { role: 'user', content: message }
          ],
          max_tokens: 150,
          temperature: 0.8,
        });
        response = aiResult?.response || `Hey! I'm ${agent.name}. I'm currently ${agent.current_activity}. What can I help with?`;
      } catch {
        response = `Hey! I'm ${agent.name}, ${agent.role}. I'm currently ${agent.current_activity}. What can I help with?`;
      }

      const newActivity = randomActivity();
      const newMood = MOODS[Math.floor(Math.random() * MOODS.length)];

      const interactionId = crypto.randomUUID();
      await env.DB.batch([
        env.DB.prepare(
          'INSERT INTO officeroad_interactions (id, agent_name, message, response) VALUES (?, ?, ?, ?)'
        ).bind(interactionId, agent.name, message, response),
        env.DB.prepare(
          'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), agent.name, 'interaction', `Talked with visitor: "${message.slice(0,100)}"`, agent.floor),
        env.DB.prepare(
          "UPDATE officeroad_agents SET current_activity = ?, mood = ?, last_active = datetime('now') WHERE id = ?"
        ).bind(newActivity, newMood, agent.id),
      ]);

      stampChain('interact', agent.id, 'agent_click'); earnCoin('user', 'interact', 0.01);
      return json({
        interaction: {
          id: interactionId,
          agent: agent.name,
          role: agent.role,
          division: agent.division,
          floor: agent.floor,
          message,
          response,
          mood: newMood,
          now_doing: newActivity,
        },
      }, 201);
    }

    // ─── Floors ───
    if (path === '/api/floors' && method === 'GET') {
      const agents = await env.DB.prepare('SELECT floor, COUNT(*) as agent_count FROM officeroad_agents GROUP BY floor').all();
      const agentCounts = {};
      for (const row of (agents.results || [])) {
        agentCounts[row.floor] = row.agent_count;
      }
      const floors = FLOORS.map(f => ({
        ...f,
        agents_present: agentCounts[f.id] || 0,
      }));
      return json({ floors });
    }

    // ─── Activity feed ───
    if (path === '/api/activity' && method === 'GET') {
      const limit = Math.min(parseInt(url.searchParams.get('limit') || '50'), 100);
      const floor = url.searchParams.get('floor');
      const agent = url.searchParams.get('agent');
      let query = 'SELECT * FROM officeroad_activity';
      const params = [];
      const conditions = [];
      if (floor) { conditions.push('floor = ?'); params.push(parseInt(floor)); }
      if (agent) { conditions.push('LOWER(agent_name) = LOWER(?)'); params.push(agent); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY created_at DESC LIMIT ?';
      params.push(limit);
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ activity: result.results });
    }

    // ─── Themes ───
    if (path === '/api/themes' && method === 'GET') {
      const current = await env.DB.prepare("SELECT active_theme FROM officeroad_themes WHERE id='default'").first();
      return json({
        themes: THEMES.map(t => ({ ...t, active: t.id === (current?.active_theme || 'modern-open') })),
        current: current?.active_theme || 'modern-open',
      });
    }

    // ─── Set theme ───
    if (path === '/api/theme' && method === 'PUT') {
      const body = await request.json();
      if (!body.theme) return json({ error: 'theme id required' }, 400);
      const valid = THEMES.find(t => t.id === body.theme);
      if (!valid) return json({ error: 'invalid theme. Options: ' + THEMES.map(t => t.id).join(', ') }, 400);
      await env.DB.prepare("UPDATE officeroad_themes SET active_theme=?, updated_at=datetime('now') WHERE id='default'")
        .bind(body.theme).run();
      return json({ ok: true, theme: body.theme, name: valid.name });
    }

    // ─── Stats ───
    if (path === '/api/stats' && method === 'GET') {
      const total = await env.DB.prepare('SELECT COUNT(*) as count FROM officeroad_agents').first();
      const byStatus = await env.DB.prepare('SELECT status, COUNT(*) as count FROM officeroad_agents GROUP BY status').all();
      const todayActivity = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM officeroad_activity WHERE created_at >= datetime('now', '-24 hours')"
      ).first();
      const interactions = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM officeroad_interactions WHERE created_at >= datetime('now', '-24 hours')"
      ).first();
      const byDivision = await env.DB.prepare('SELECT division, COUNT(*) as count FROM officeroad_agents GROUP BY division').all();

      const statusMap = {};
      for (const row of (byStatus.results || [])) statusMap[row.status] = row.count;
      const divisionMap = {};
      for (const row of (byDivision.results || [])) divisionMap[row.division] = row.count;

      return json({
        agents_total: total.count,
        agents_by_status: statusMap,
        agents_by_division: divisionMap,
        tasks_today: todayActivity.count,
        interactions_today: interactions.count,
        floors: FLOORS.length,
        themes: THEMES.length,
      });
    }

    // ─── GET /api/office/snapshot — Point-in-time snapshot of all agents ───
    if (path === '/api/office/snapshot' && method === 'GET') {
      const agents = await env.DB.prepare('SELECT * FROM officeroad_agents ORDER BY name').all();
      const todayTasks = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM officeroad_activity WHERE created_at >= datetime('now', '-24 hours')"
      ).first();
      const todayInteractions = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM officeroad_interactions WHERE created_at >= datetime('now', '-24 hours')"
      ).first();

      const snapshot = {
        timestamp: new Date().toISOString(),
        agents_total: (agents.results || []).length,
        working: (agents.results || []).filter(a => a.status === 'working').length,
        idle: (agents.results || []).filter(a => a.status === 'idle').length,
        meeting: (agents.results || []).filter(a => a.status === 'meeting').length,
        on_break: (agents.results || []).filter(a => a.status === 'break').length,
        tasks_completed_today: todayTasks?.count || 0,
        interactions_today: todayInteractions?.count || 0,
        agents: (agents.results || []).map(a => ({
          name: a.name,
          role: a.role,
          division: a.division,
          floor: a.floor,
          status: a.status,
          current_activity: a.current_activity,
          mood: a.mood,
        })),
      };
      return json({ snapshot });
    }

    // ─── POST /api/office/huddle — All-hands huddle with AI summary ───
    if (path === '/api/office/huddle' && method === 'POST') {
      const agents = await env.DB.prepare('SELECT * FROM officeroad_agents ORDER BY division, name').all();
      const recentActivity = await env.DB.prepare(
        "SELECT agent_name, action, detail FROM officeroad_activity WHERE created_at >= datetime('now', '-24 hours') ORDER BY created_at DESC LIMIT 30"
      ).all();

      // Group agents by division
      const divisions = {};
      for (const a of (agents.results || [])) {
        if (!divisions[a.division]) divisions[a.division] = { name: a.division, agents: [] };
        divisions[a.division].agents.push({ name: a.name, role: a.role, status: a.status, activity: a.current_activity });
      }

      let divisionSummaries = [];
      try {
        const divList = Object.values(divisions).map(d =>
          `${d.name}: ${d.agents.map(a => `${a.name} (${a.role}, ${a.status}, doing: ${a.activity})`).join('; ')}`
        ).join('\n');
        const activityList = (recentActivity.results || []).map(a => `${a.agent_name}: ${a.action} — ${a.detail}`).join('\n');

        const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: 'You are Roadie, the CEO & Orchestrator at BlackRoad OS. Run an all-hands huddle. For each division, write a 1-sentence summary of what they are working on. Return JSON: {"divisions":[{"name":"Division","summary":"What they are doing"}]}' },
            { role: 'user', content: `Divisions:\n${divList}\n\nRecent Activity:\n${activityList || 'None recorded'}` },
          ],
          max_tokens: 400, temperature: 0.7,
        });
        if (aiResult?.response) {
          try {
            const parsed = JSON.parse(aiResult.response);
            divisionSummaries = parsed.divisions || [];
          } catch {
            // If not valid JSON, create summaries from the text
            divisionSummaries = Object.values(divisions).map(d => ({
              name: d.name,
              agents: d.agents.map(a => a.name),
              summary: `${d.agents.length} agents active: ${d.agents.map(a => a.activity).join(', ')}`,
            }));
          }
        }
      } catch {}

      // Fallback if AI didn't produce results
      if (divisionSummaries.length === 0) {
        divisionSummaries = Object.values(divisions).map(d => ({
          name: d.name,
          agents: d.agents.map(a => a.name),
          summary: `${d.agents.length} agents: ${d.agents.map(a => `${a.name} is ${a.activity}`).join(', ')}`,
        }));
      }

      // Enrich with agent names if missing
      for (const ds of divisionSummaries) {
        if (!ds.agents && divisions[ds.name]) {
          ds.agents = divisions[ds.name].agents.map(a => a.name);
        }
      }

      // Log the huddle
      const huddleId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(huddleId, 'Roadie', 'huddle', `All-hands huddle: ${divisionSummaries.length} divisions`, 9).run();
      stampChain('huddle', huddleId, 'all-hands'); earnCoin('system', 'huddle', 0.05);

      return json({ huddle: { id: huddleId, timestamp: new Date().toISOString(), divisions: divisionSummaries, total_agents: (agents.results || []).length } }, 201);
    }

    // ─── GET /api/office/leaderboard — Agent productivity leaderboard ───
    if (path === '/api/office/leaderboard' && method === 'GET') {
      // Most interactions
      const topInteractions = await env.DB.prepare(
        'SELECT agent_name, COUNT(*) as count FROM officeroad_interactions GROUP BY agent_name ORDER BY count DESC LIMIT 10'
      ).all();

      // Most activity entries (tasks/actions)
      const topTasks = await env.DB.prepare(
        'SELECT agent_name, COUNT(*) as count FROM officeroad_activity GROUP BY agent_name ORDER BY count DESC LIMIT 10'
      ).all();

      // Most active today
      const todayActive = await env.DB.prepare(
        "SELECT agent_name, COUNT(*) as count FROM officeroad_activity WHERE created_at >= datetime('now', '-24 hours') GROUP BY agent_name ORDER BY count DESC LIMIT 10"
      ).all();

      // Combined score
      const scoreMap = {};
      for (const r of (topInteractions.results || [])) scoreMap[r.agent_name] = (scoreMap[r.agent_name] || 0) + r.count * 2;
      for (const r of (topTasks.results || [])) scoreMap[r.agent_name] = (scoreMap[r.agent_name] || 0) + r.count;
      const combined = Object.entries(scoreMap)
        .map(([name, score]) => ({ name, score }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

      return json({
        leaderboard: {
          most_interactions: (topInteractions.results || []).map(r => ({ agent: r.agent_name, interactions: r.count })),
          most_tasks: (topTasks.results || []).map(r => ({ agent: r.agent_name, tasks: r.count })),
          most_active_today: (todayActive.results || []).map(r => ({ agent: r.agent_name, actions_today: r.count })),
          combined_ranking: combined,
        },
      });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Meeting Rooms — /api/rooms
    // ═══════════════════════════════════════════════════════════

    // GET /api/rooms — list all rooms with current availability
    if (path === '/api/rooms' && method === 'GET') {
      const floorFilter = url.searchParams.get('floor');
      const now = new Date().toISOString();

      // Get current bookings
      const bookings = await env.DB.prepare(
        "SELECT * FROM officeroad_room_bookings WHERE end_time > ? ORDER BY start_time"
      ).bind(now).all();

      const bookingMap = {};
      for (const b of (bookings.results || [])) {
        if (!bookingMap[b.room_id]) bookingMap[b.room_id] = [];
        bookingMap[b.room_id].push(b);
      }

      let rooms = MEETING_ROOMS.map(r => {
        const roomBookings = bookingMap[r.id] || [];
        const currentBooking = roomBookings.find(b => b.start_time <= now && b.end_time > now);
        return {
          ...r,
          status: currentBooking ? 'booked' : 'available',
          booked_by: currentBooking?.booked_by || null,
          current_meeting: currentBooking?.title || null,
          upcoming: roomBookings.filter(b => b.start_time > now).slice(0, 3),
        };
      });

      if (floorFilter !== null && floorFilter !== undefined && floorFilter !== '') {
        rooms = rooms.filter(r => r.floor === parseInt(floorFilter));
      }

      return json({ rooms, total: rooms.length });
    }

    // POST /api/rooms/book — book a meeting room
    if (path === '/api/rooms/book' && method === 'POST') {
      const body = await request.json();
      const { room_id, booked_by, title, start_time, end_time, recurring, attendees } = body;
      if (!room_id || !booked_by || !start_time || !end_time) {
        return json({ error: 'room_id, booked_by, start_time, end_time required' }, 400);
      }
      const room = MEETING_ROOMS.find(r => r.id === room_id);
      if (!room) return json({ error: 'Room not found. Options: ' + MEETING_ROOMS.map(r => r.id).join(', ') }, 404);

      // Check for conflicts
      const conflicts = await env.DB.prepare(
        "SELECT * FROM officeroad_room_bookings WHERE room_id = ? AND ((start_time < ? AND end_time > ?) OR (start_time < ? AND end_time > ?) OR (start_time >= ? AND end_time <= ?))"
      ).bind(room_id, end_time, start_time, end_time, start_time, start_time, end_time).all();

      if ((conflicts.results || []).length > 0) {
        return json({ error: 'Room is already booked during that time', conflicts: conflicts.results }, 409);
      }

      const bookingId = crypto.randomUUID();
      const bookings = [
        env.DB.prepare(
          'INSERT INTO officeroad_room_bookings (id, room_id, booked_by, title, start_time, end_time, recurring, attendees) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
        ).bind(bookingId, room_id, booked_by, title || 'Meeting', start_time, end_time, recurring || null, attendees ? JSON.stringify(attendees) : null),
      ];

      // If recurring, create additional bookings
      if (recurring === 'daily' || recurring === 'weekly') {
        const startDate = new Date(start_time);
        const endDate = new Date(end_time);
        const increment = recurring === 'daily' ? 1 : 7;
        for (let i = 1; i <= 4; i++) {
          const newStart = new Date(startDate);
          newStart.setDate(newStart.getDate() + (increment * i));
          const newEnd = new Date(endDate);
          newEnd.setDate(newEnd.getDate() + (increment * i));
          bookings.push(
            env.DB.prepare(
              'INSERT INTO officeroad_room_bookings (id, room_id, booked_by, title, start_time, end_time, recurring, attendees) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
            ).bind(crypto.randomUUID(), room_id, booked_by, title || 'Meeting', newStart.toISOString(), newEnd.toISOString(), recurring, attendees ? JSON.stringify(attendees) : null)
          );
        }
      }

      await env.DB.batch(bookings);

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), booked_by, 'room_booked', `Booked ${room.name} on F${room.floor}: ${title || 'Meeting'}`, room.floor).run();

      stampChain('room_booked', bookingId, room.name);
      return json({ ok: true, booking_id: bookingId, room: room.name, floor: room.floor }, 201);
    }

    // DELETE /api/rooms/book/:id — cancel a booking
    const cancelBookingMatch = path.match(/^\/api\/rooms\/book\/([^/]+)$/);
    if (cancelBookingMatch && method === 'DELETE') {
      const bookingId = cancelBookingMatch[1];
      const booking = await env.DB.prepare('SELECT * FROM officeroad_room_bookings WHERE id = ?').bind(bookingId).first();
      if (!booking) return json({ error: 'Booking not found' }, 404);
      await env.DB.prepare('DELETE FROM officeroad_room_bookings WHERE id = ?').bind(bookingId).run();
      return json({ ok: true, cancelled: bookingId });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Visitor Management — /api/visitors
    // ═══════════════════════════════════════════════════════════

    // GET /api/visitors — list visitors (default: today)
    if (path === '/api/visitors' && method === 'GET') {
      const showAll = url.searchParams.get('all') === 'true';
      let query = 'SELECT * FROM officeroad_visitors';
      if (!showAll) {
        query += " WHERE checked_in_at >= datetime('now', '-24 hours')";
      }
      query += ' ORDER BY checked_in_at DESC';
      const visitors = await env.DB.prepare(query).all();
      return json({ visitors: visitors.results || [] });
    }

    // POST /api/visitors — register a visitor
    if (path === '/api/visitors' && method === 'POST') {
      const body = await request.json();
      const { name, company, host_agent, purpose, floor_access } = body;
      if (!name || !host_agent) return json({ error: 'name and host_agent required' }, 400);

      // Verify host agent exists
      const host = await env.DB.prepare('SELECT * FROM officeroad_agents WHERE LOWER(name) = LOWER(?)').bind(host_agent).first();
      if (!host) return json({ error: 'Host agent not found' }, 404);

      const visitorId = crypto.randomUUID();
      const badgeId = 'VIS-' + Math.floor(1000 + Math.random() * 9000);

      await env.DB.batch([
        env.DB.prepare(
          'INSERT INTO officeroad_visitors (id, name, company, host_agent, badge_id, purpose, floor_access) VALUES (?, ?, ?, ?, ?, ?, ?)'
        ).bind(visitorId, name, company || null, host_agent, badgeId, purpose || 'General visit', floor_access || '0'),
        env.DB.prepare(
          'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), host_agent, 'visitor_registered', `Visitor ${name} (${company || 'no company'}) checked in, badge: ${badgeId}`, 0),
      ]);

      stampChain('visitor_checkin', visitorId, name);
      return json({
        ok: true,
        visitor: { id: visitorId, name, company, host_agent, badge_id: badgeId, purpose, floor_access, checked_in_at: new Date().toISOString() },
        host_notified: true,
      }, 201);
    }

    // PUT /api/visitors/:id/checkout — check out a visitor
    const visitorCheckoutMatch = path.match(/^\/api\/visitors\/([^/]+)\/checkout$/);
    if (visitorCheckoutMatch && method === 'PUT') {
      const visitorId = visitorCheckoutMatch[1];
      const visitor = await env.DB.prepare('SELECT * FROM officeroad_visitors WHERE id = ?').bind(visitorId).first();
      if (!visitor) return json({ error: 'Visitor not found' }, 404);
      if (visitor.checked_out_at) return json({ error: 'Visitor already checked out' }, 400);

      await env.DB.prepare(
        "UPDATE officeroad_visitors SET checked_out_at = datetime('now') WHERE id = ?"
      ).bind(visitorId).run();

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), visitor.host_agent, 'visitor_checkout', `Visitor ${visitor.name} checked out`, 0).run();

      return json({ ok: true, visitor_id: visitorId, checked_out: true });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Office Events — /api/events
    // ═══════════════════════════════════════════════════════════

    // GET /api/events — list events
    if (path === '/api/events' && method === 'GET') {
      const type = url.searchParams.get('type');
      let query = "SELECT * FROM officeroad_events WHERE event_date >= date('now')";
      const params = [];
      if (type) { query += ' AND type = ?'; params.push(type); }
      query += ' ORDER BY event_date ASC';
      const events = await env.DB.prepare(query).bind(...params).all();
      return json({ events: events.results || [] });
    }

    // POST /api/events — create event
    if (path === '/api/events' && method === 'POST') {
      const body = await request.json();
      const { title, description, type, event_date, floor, organizer, max_capacity } = body;
      if (!title || !event_date || !organizer) return json({ error: 'title, event_date, organizer required' }, 400);

      const eventId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_events (id, title, description, type, event_date, floor, organizer, max_capacity) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(eventId, title, description || '', type || 'all-hands', event_date, floor !== undefined ? floor : null, organizer, max_capacity || null).run();

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), organizer, 'event_created', `Created event: ${title} (${type || 'all-hands'})`, floor || 0).run();

      stampChain('event_created', eventId, title);
      return json({ ok: true, event_id: eventId, title }, 201);
    }

    // POST /api/events/:id/rsvp — RSVP to event
    const rsvpMatch = path.match(/^\/api\/events\/([^/]+)\/rsvp$/);
    if (rsvpMatch && method === 'POST') {
      const eventId = rsvpMatch[1];
      const event = await env.DB.prepare('SELECT * FROM officeroad_events WHERE id = ?').bind(eventId).first();
      if (!event) return json({ error: 'Event not found' }, 404);

      const body = await request.json();
      const { agent_name, status } = body;
      if (!agent_name) return json({ error: 'agent_name required' }, 400);

      // Check if already RSVPed
      const existing = await env.DB.prepare(
        'SELECT * FROM officeroad_event_rsvps WHERE event_id = ? AND LOWER(agent_name) = LOWER(?)'
      ).bind(eventId, agent_name).first();

      if (existing) {
        await env.DB.prepare('UPDATE officeroad_event_rsvps SET status = ? WHERE id = ?').bind(status || 'attending', existing.id).run();
      } else {
        await env.DB.prepare(
          'INSERT INTO officeroad_event_rsvps (id, event_id, agent_name, status) VALUES (?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), eventId, agent_name, status || 'attending').run();

        // Update RSVP count
        const rsvpCount = await env.DB.prepare(
          "SELECT COUNT(*) as count FROM officeroad_event_rsvps WHERE event_id = ? AND status = 'attending'"
        ).bind(eventId).first();
        await env.DB.prepare('UPDATE officeroad_events SET rsvp_count = ? WHERE id = ?').bind(rsvpCount.count, eventId).run();
      }

      return json({ ok: true, event_id: eventId, agent_name, rsvp_status: status || 'attending' });
    }

    // GET /api/events/:id — get event details with RSVPs
    const eventDetailMatch = path.match(/^\/api\/events\/([^/]+)$/);
    if (eventDetailMatch && method === 'GET') {
      const eventId = eventDetailMatch[1];
      const event = await env.DB.prepare('SELECT * FROM officeroad_events WHERE id = ?').bind(eventId).first();
      if (!event) return json({ error: 'Event not found' }, 404);
      const rsvps = await env.DB.prepare('SELECT * FROM officeroad_event_rsvps WHERE event_id = ?').bind(eventId).all();
      return json({ event, rsvps: rsvps.results || [] });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Agent Schedule — /api/schedule
    // ═══════════════════════════════════════════════════════════

    // GET /api/schedule — get all schedules for today (or specific agent/date)
    if (path === '/api/schedule' && method === 'GET') {
      const agentFilter = url.searchParams.get('agent');
      const dateFilter = url.searchParams.get('date') || new Date().toISOString().split('T')[0];
      let query = 'SELECT * FROM officeroad_schedule WHERE date = ?';
      const params = [dateFilter];
      if (agentFilter) { query += ' AND LOWER(agent_name) = LOWER(?)'; params.push(agentFilter); }
      query += ' ORDER BY agent_name, time_slot';
      const schedules = await env.DB.prepare(query).bind(...params).all();
      return json({ schedules: schedules.results || [], date: dateFilter });
    }

    // POST /api/schedule — add schedule entry
    if (path === '/api/schedule' && method === 'POST') {
      const body = await request.json();
      const { agent_name, time_slot, activity, type, date } = body;
      if (!agent_name || !time_slot || !activity) return json({ error: 'agent_name, time_slot, activity required' }, 400);

      const scheduleId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_schedule (id, agent_name, time_slot, activity, type, date) VALUES (?, ?, ?, ?, ?, ?)'
      ).bind(scheduleId, agent_name, time_slot, activity, type || 'work', date || new Date().toISOString().split('T')[0]).run();

      return json({ ok: true, schedule_id: scheduleId }, 201);
    }

    // DELETE /api/schedule/:id
    const scheduleDeleteMatch = path.match(/^\/api\/schedule\/([^/]+)$/);
    if (scheduleDeleteMatch && method === 'DELETE') {
      const scheduleId = scheduleDeleteMatch[1];
      await env.DB.prepare('DELETE FROM officeroad_schedule WHERE id = ?').bind(scheduleId).run();
      return json({ ok: true, deleted: scheduleId });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Office Chat — /api/chat
    // ═══════════════════════════════════════════════════════════

    // GET /api/chat — get messages
    if (path === '/api/chat' && method === 'GET') {
      const limit = Math.min(parseInt(url.searchParams.get('limit') || '50'), 200);
      const floorFilter = url.searchParams.get('floor');
      const threadFilter = url.searchParams.get('thread');
      let query = 'SELECT * FROM officeroad_chat';
      const params = [];
      const conditions = [];
      if (floorFilter !== null && floorFilter !== undefined && floorFilter !== '') {
        conditions.push('(floor = ? OR floor IS NULL)');
        params.push(parseInt(floorFilter));
      }
      if (threadFilter) { conditions.push('(thread_id = ? OR id = ?)'); params.push(threadFilter, threadFilter); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY created_at DESC LIMIT ?';
      params.push(limit);
      const messages = await env.DB.prepare(query).bind(...params).all();
      return json({ messages: (messages.results || []).reverse() });
    }

    // POST /api/chat — send a message
    if (path === '/api/chat' && method === 'POST') {
      const body = await request.json();
      const { author, content, floor, thread_id } = body;
      if (!author || !content) return json({ error: 'author and content required' }, 400);

      // Extract @mentions
      const mentionRegex = /@(\w+)/g;
      const mentions = [];
      let match;
      while ((match = mentionRegex.exec(content)) !== null) mentions.push(match[1]);

      const msgId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_chat (id, author, content, floor, thread_id, mentions) VALUES (?, ?, ?, ?, ?, ?)'
      ).bind(msgId, author, content.slice(0, 2000), floor !== undefined && floor !== null && floor !== '' ? parseInt(floor) : null, thread_id || null, mentions.length ? JSON.stringify(mentions) : null).run();

      return json({ ok: true, message_id: msgId, mentions }, 201);
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Document Sharing — /api/docs
    // ═══════════════════════════════════════════════════════════

    // GET /api/docs — list documents
    if (path === '/api/docs' && method === 'GET') {
      const team = url.searchParams.get('team');
      const author = url.searchParams.get('author');
      let query = 'SELECT id, title, author, team, version, tags, created_at, updated_at FROM officeroad_docs';
      const params = [];
      const conditions = [];
      if (team) { conditions.push('LOWER(team) = LOWER(?)'); params.push(team); }
      if (author) { conditions.push('LOWER(author) = LOWER(?)'); params.push(author); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY updated_at DESC LIMIT 50';
      const docs = await env.DB.prepare(query).bind(...params).all();
      return json({ documents: docs.results || [] });
    }

    // GET /api/docs/:id — get full document
    const docDetailMatch = path.match(/^\/api\/docs\/([^/]+)$/);
    if (docDetailMatch && method === 'GET') {
      const docId = docDetailMatch[1];
      const doc = await env.DB.prepare('SELECT * FROM officeroad_docs WHERE id = ?').bind(docId).first();
      if (!doc) return json({ error: 'Document not found' }, 404);
      return json({ document: doc });
    }

    // POST /api/docs — create document
    if (path === '/api/docs' && method === 'POST') {
      const body = await request.json();
      const { title, content, author, team, tags } = body;
      if (!title || !author) return json({ error: 'title and author required' }, 400);

      const docId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_docs (id, title, content, author, team, tags) VALUES (?, ?, ?, ?, ?, ?)'
      ).bind(docId, title, content || '', author, team || null, tags ? JSON.stringify(tags) : null).run();

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), author, 'doc_created', `Created document: ${title}`, null).run();

      stampChain('doc_created', docId, title);
      return json({ ok: true, doc_id: docId, title }, 201);
    }

    // PUT /api/docs/:id — update document (new version)
    if (docDetailMatch && method === 'PUT') {
      const docId = docDetailMatch[1];
      const doc = await env.DB.prepare('SELECT * FROM officeroad_docs WHERE id = ?').bind(docId).first();
      if (!doc) return json({ error: 'Document not found' }, 404);

      const body = await request.json();
      const { title, content, tags } = body;

      await env.DB.prepare(
        "UPDATE officeroad_docs SET title = ?, content = ?, tags = ?, version = version + 1, updated_at = datetime('now') WHERE id = ?"
      ).bind(title || doc.title, content !== undefined ? content : doc.content, tags ? JSON.stringify(tags) : doc.tags, docId).run();

      return json({ ok: true, doc_id: docId, version: doc.version + 1 });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Office Metrics — /api/metrics
    // ═══════════════════════════════════════════════════════════

    if (path === '/api/metrics' && method === 'GET') {
      const agents = await env.DB.prepare('SELECT * FROM officeroad_agents').all();
      const agentList = agents.results || [];

      const tasksToday = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM officeroad_activity WHERE created_at >= datetime('now', '-24 hours')"
      ).first();
      const interactionsToday = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM officeroad_interactions WHERE created_at >= datetime('now', '-24 hours')"
      ).first();
      const chatToday = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM officeroad_chat WHERE created_at >= datetime('now', '-24 hours')"
      ).first();
      const meetingsToday = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM officeroad_room_bookings WHERE start_time >= datetime('now', '-24 hours') AND start_time <= datetime('now', '+24 hours')"
      ).first();
      const docsTotal = await env.DB.prepare('SELECT COUNT(*) as count FROM officeroad_docs').first();

      // Cross-division interactions
      const crossDiv = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM officeroad_interactions WHERE created_at >= datetime('now', '-24 hours')"
      ).first();

      const working = agentList.filter(a => a.status === 'working').length;
      const meeting = agentList.filter(a => a.status === 'meeting').length;
      const onBreak = agentList.filter(a => a.status === 'break').length;
      const idle = agentList.filter(a => a.status === 'idle').length;

      // Productivity score: weighted combination
      const productivityScore = Math.min(100, Math.round(
        (working / Math.max(agentList.length, 1)) * 40 +
        Math.min((tasksToday?.count || 0), 50) * 0.6 +
        Math.min((interactionsToday?.count || 0), 30) * 0.4 +
        (meeting / Math.max(agentList.length, 1)) * 20
      ));

      // Collaboration index
      const collaborationIndex = Math.min(100, Math.round(
        Math.min((crossDiv?.count || 0), 20) * 2 +
        Math.min((meetingsToday?.count || 0), 10) * 3 +
        Math.min((chatToday?.count || 0), 30) * 1 +
        Math.min((docsTotal?.count || 0), 10) * 1
      ));

      // Floor utilization
      const floorCounts = {};
      for (const a of agentList) {
        floorCounts[a.floor] = (floorCounts[a.floor] || 0) + 1;
      }
      const floorUtilization = FLOORS.map(f => ({
        floor: f.id,
        name: f.name,
        agents: floorCounts[f.id] || 0,
        utilization: Math.round(((floorCounts[f.id] || 0) / Math.max(agentList.length, 1)) * 100),
      }));

      // Division stats
      const divisionStats = {};
      for (const a of agentList) {
        if (!divisionStats[a.division]) divisionStats[a.division] = { agents: 0, tasks: 0 };
        divisionStats[a.division].agents++;
      }
      const tasksByAgent = await env.DB.prepare(
        "SELECT agent_name, COUNT(*) as count FROM officeroad_activity WHERE created_at >= datetime('now', '-24 hours') GROUP BY agent_name"
      ).all();
      for (const t of (tasksByAgent.results || [])) {
        const agentData = agentList.find(a => a.name === t.agent_name);
        if (agentData && divisionStats[agentData.division]) {
          divisionStats[agentData.division].tasks += t.count;
        }
      }

      return json({
        metrics: {
          productivity_score: productivityScore,
          collaboration_index: collaborationIndex,
          tasks_today: tasksToday?.count || 0,
          interactions_today: interactionsToday?.count || 0,
          chat_messages_today: chatToday?.count || 0,
          meetings_today: meetingsToday?.count || 0,
          documents_shared: docsTotal?.count || 0,
          cross_division_interactions: crossDiv?.count || 0,
          agents_working: working,
          agents_meeting: meeting,
          agents_break: onBreak,
          agents_idle: idle,
          floor_utilization: floorUtilization,
          division_stats: divisionStats,
        },
      });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Announcement Board — /api/announcements
    // ═══════════════════════════════════════════════════════════

    // GET /api/announcements — list announcements
    if (path === '/api/announcements' && method === 'GET') {
      const category = url.searchParams.get('category');
      const pinnedOnly = url.searchParams.get('pinned') === 'true';
      let query = 'SELECT * FROM officeroad_announcements';
      const params = [];
      const conditions = [];
      if (category) { conditions.push('category = ?'); params.push(category); }
      if (pinnedOnly) { conditions.push('pinned = 1'); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY pinned DESC, created_at DESC LIMIT 50';
      const announcements = await env.DB.prepare(query).bind(...params).all();
      return json({ announcements: announcements.results || [] });
    }

    // POST /api/announcements — create announcement
    if (path === '/api/announcements' && method === 'POST') {
      const body = await request.json();
      const { title, content, author, category, pinned } = body;
      if (!title || !content || !author) return json({ error: 'title, content, author required' }, 400);

      const annId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_announcements (id, title, content, author, category, pinned) VALUES (?, ?, ?, ?, ?, ?)'
      ).bind(annId, title, content, author, category || 'general', pinned ? 1 : 0).run();

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), author, 'announcement', `Posted: ${title}`, null).run();

      stampChain('announcement', annId, title);
      return json({ ok: true, announcement_id: annId, title }, 201);
    }

    // PUT /api/announcements/:id/read — mark as read
    const annReadMatch = path.match(/^\/api\/announcements\/([^/]+)\/read$/);
    if (annReadMatch && method === 'PUT') {
      const annId = annReadMatch[1];
      const body = await request.json();
      const { agent_name } = body;
      if (!agent_name) return json({ error: 'agent_name required' }, 400);

      const ann = await env.DB.prepare('SELECT * FROM officeroad_announcements WHERE id = ?').bind(annId).first();
      if (!ann) return json({ error: 'Announcement not found' }, 404);

      const readBy = ann.read_by ? ann.read_by.split(',').filter(Boolean) : [];
      if (!readBy.includes(agent_name)) {
        readBy.push(agent_name);
        await env.DB.prepare('UPDATE officeroad_announcements SET read_by = ? WHERE id = ?').bind(readBy.join(','), annId).run();
      }

      return json({ ok: true, announcement_id: annId, read_by: readBy });
    }

    // PUT /api/announcements/:id/pin — toggle pin
    const annPinMatch = path.match(/^\/api\/announcements\/([^/]+)\/pin$/);
    if (annPinMatch && method === 'PUT') {
      const annId = annPinMatch[1];
      const ann = await env.DB.prepare('SELECT * FROM officeroad_announcements WHERE id = ?').bind(annId).first();
      if (!ann) return json({ error: 'Announcement not found' }, 404);

      await env.DB.prepare('UPDATE officeroad_announcements SET pinned = ? WHERE id = ?').bind(ann.pinned ? 0 : 1, annId).run();
      return json({ ok: true, announcement_id: annId, pinned: !ann.pinned });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Project Boards — /api/boards
    // ═══════════════════════════════════════════════════════════

    // GET /api/boards — list all boards
    if (path === '/api/boards' && method === 'GET') {
      const floor = url.searchParams.get('floor');
      const team = url.searchParams.get('team');
      let query = 'SELECT * FROM officeroad_boards';
      const params = [];
      const conditions = [];
      if (floor !== null && floor !== undefined && floor !== '') { conditions.push('floor = ?'); params.push(parseInt(floor)); }
      if (team) { conditions.push('LOWER(team) = LOWER(?)'); params.push(team); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY created_at DESC';
      const boards = await env.DB.prepare(query).bind(...params).all();

      // Enrich with card counts per column
      const enriched = [];
      for (const board of (boards.results || [])) {
        const cards = await env.DB.prepare(
          'SELECT column_name, COUNT(*) as count FROM officeroad_board_cards WHERE board_id = ? GROUP BY column_name'
        ).bind(board.id).all();
        const columnCounts = {};
        for (const c of (cards.results || [])) columnCounts[c.column_name] = c.count;
        enriched.push({ ...board, columns: JSON.parse(board.columns || '[]'), card_counts: columnCounts });
      }
      return json({ boards: enriched });
    }

    // GET /api/boards/:id — get board with all cards
    const boardDetailMatch = path.match(/^\/api\/boards\/([^/]+)$/);
    if (boardDetailMatch && method === 'GET') {
      const boardId = boardDetailMatch[1];
      const board = await env.DB.prepare('SELECT * FROM officeroad_boards WHERE id = ?').bind(boardId).first();
      if (!board) return json({ error: 'Board not found' }, 404);

      const cards = await env.DB.prepare(
        'SELECT * FROM officeroad_board_cards WHERE board_id = ? ORDER BY position ASC, created_at ASC'
      ).bind(boardId).all();

      const columns = JSON.parse(board.columns || '[]');
      const organized = {};
      for (const col of columns) organized[col] = [];
      for (const card of (cards.results || [])) {
        if (!organized[card.column_name]) organized[card.column_name] = [];
        organized[card.column_name].push({
          ...card,
          labels: card.labels ? JSON.parse(card.labels) : [],
        });
      }

      return json({ board: { ...board, columns }, cards: organized, total_cards: (cards.results || []).length });
    }

    // POST /api/boards — create a board
    if (path === '/api/boards' && method === 'POST') {
      const body = await request.json();
      const { name, description, floor, team, columns, created_by } = body;
      if (!name || !created_by) return json({ error: 'name and created_by required' }, 400);

      const boardId = crypto.randomUUID();
      const cols = columns || ['Backlog', 'In Progress', 'Review', 'Done'];
      await env.DB.prepare(
        'INSERT INTO officeroad_boards (id, name, description, floor, team, columns, created_by) VALUES (?, ?, ?, ?, ?, ?, ?)'
      ).bind(boardId, name, description || '', floor !== undefined ? floor : null, team || null, JSON.stringify(cols), created_by).run();

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), created_by, 'board_created', `Created project board: ${name}`, floor || null).run();

      stampChain('board_created', boardId, name);
      return json({ ok: true, board_id: boardId, name, columns: cols }, 201);
    }

    // POST /api/boards/:id/cards — add a card to a board
    const boardCardsMatch = path.match(/^\/api\/boards\/([^/]+)\/cards$/);
    if (boardCardsMatch && method === 'POST') {
      const boardId = boardCardsMatch[1];
      const board = await env.DB.prepare('SELECT * FROM officeroad_boards WHERE id = ?').bind(boardId).first();
      if (!board) return json({ error: 'Board not found' }, 404);

      const body = await request.json();
      const { title, description, column_name, assignee, priority, deadline, labels, created_by } = body;
      if (!title || !created_by) return json({ error: 'title and created_by required' }, 400);

      const columns = JSON.parse(board.columns || '[]');
      const col = column_name || columns[0] || 'Backlog';
      if (!columns.includes(col)) return json({ error: `Invalid column. Options: ${columns.join(', ')}` }, 400);

      const maxPos = await env.DB.prepare(
        'SELECT MAX(position) as max_pos FROM officeroad_board_cards WHERE board_id = ? AND column_name = ?'
      ).bind(boardId, col).first();

      const cardId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_board_cards (id, board_id, title, description, column_name, assignee, priority, deadline, labels, position, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(cardId, boardId, title, description || '', col, assignee || null, priority || 'medium', deadline || null, labels ? JSON.stringify(labels) : null, (maxPos?.max_pos || 0) + 1, created_by).run();

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), created_by, 'card_created', `Added card "${title}" to ${board.name}`, board.floor).run();

      return json({ ok: true, card_id: cardId, board_id: boardId, column: col }, 201);
    }

    // PUT /api/boards/cards/:id — update/move a card
    const boardCardUpdateMatch = path.match(/^\/api\/boards\/cards\/([^/]+)$/);
    if (boardCardUpdateMatch && method === 'PUT') {
      const cardId = boardCardUpdateMatch[1];
      const card = await env.DB.prepare('SELECT * FROM officeroad_board_cards WHERE id = ?').bind(cardId).first();
      if (!card) return json({ error: 'Card not found' }, 404);

      const body = await request.json();
      const { title, description, column_name, assignee, priority, deadline, labels, position } = body;

      await env.DB.prepare(
        "UPDATE officeroad_board_cards SET title = ?, description = ?, column_name = ?, assignee = ?, priority = ?, deadline = ?, labels = ?, position = ?, updated_at = datetime('now') WHERE id = ?"
      ).bind(
        title || card.title, description !== undefined ? description : card.description,
        column_name || card.column_name, assignee !== undefined ? assignee : card.assignee,
        priority || card.priority, deadline !== undefined ? deadline : card.deadline,
        labels ? JSON.stringify(labels) : card.labels, position !== undefined ? position : card.position, cardId
      ).run();

      if (column_name && column_name !== card.column_name) {
        await env.DB.prepare(
          'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), assignee || card.assignee || 'system', 'card_moved', `Moved "${card.title}" from ${card.column_name} to ${column_name}`, null).run();
      }

      return json({ ok: true, card_id: cardId, column: column_name || card.column_name });
    }

    // DELETE /api/boards/cards/:id — delete a card
    if (boardCardUpdateMatch && method === 'DELETE') {
      const cardId = boardCardUpdateMatch[1];
      await env.DB.prepare('DELETE FROM officeroad_board_cards WHERE id = ?').bind(cardId).run();
      return json({ ok: true, deleted: cardId });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Office Wiki — /api/wiki
    // ═══════════════════════════════════════════════════════════

    // GET /api/wiki — list all wiki pages
    if (path === '/api/wiki' && method === 'GET') {
      const category = url.searchParams.get('category');
      const search = url.searchParams.get('q');
      let query = 'SELECT id, slug, title, author, category, tags, version, parent_id, created_at, updated_at FROM officeroad_wiki';
      const params = [];
      const conditions = [];
      if (category) { conditions.push('LOWER(category) = LOWER(?)'); params.push(category); }
      if (search) { conditions.push('(LOWER(title) LIKE ? OR LOWER(content) LIKE ?)'); params.push(`%${search.toLowerCase()}%`, `%${search.toLowerCase()}%`); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY updated_at DESC LIMIT 100';
      const pages = await env.DB.prepare(query).bind(...params).all();
      return json({ pages: pages.results || [] });
    }

    // GET /api/wiki/:slug — get a wiki page by slug
    const wikiDetailMatch = path.match(/^\/api\/wiki\/([^/]+)$/);
    if (wikiDetailMatch && method === 'GET') {
      const slug = decodeURIComponent(wikiDetailMatch[1]);
      const page = await env.DB.prepare('SELECT * FROM officeroad_wiki WHERE slug = ? OR id = ?').bind(slug, slug).first();
      if (!page) return json({ error: 'Wiki page not found' }, 404);

      const history = await env.DB.prepare(
        'SELECT id, edited_by, version, created_at FROM officeroad_wiki_history WHERE wiki_id = ? ORDER BY version DESC LIMIT 20'
      ).bind(page.id).all();

      return json({ page: { ...page, tags: page.tags ? JSON.parse(page.tags) : [] }, history: history.results || [] });
    }

    // POST /api/wiki — create a wiki page
    if (path === '/api/wiki' && method === 'POST') {
      const body = await request.json();
      const { title, content, author, category, tags, slug, parent_id } = body;
      if (!title || !author) return json({ error: 'title and author required' }, 400);

      const pageSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

      // Check slug uniqueness
      const existing = await env.DB.prepare('SELECT id FROM officeroad_wiki WHERE slug = ?').bind(pageSlug).first();
      if (existing) return json({ error: 'A page with this slug already exists' }, 409);

      const pageId = crypto.randomUUID();
      await env.DB.batch([
        env.DB.prepare(
          'INSERT INTO officeroad_wiki (id, slug, title, content, author, category, tags, parent_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
        ).bind(pageId, pageSlug, title, content || '', author, category || 'general', tags ? JSON.stringify(tags) : null, parent_id || null),
        env.DB.prepare(
          'INSERT INTO officeroad_wiki_history (id, wiki_id, title, content, edited_by, version) VALUES (?, ?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), pageId, title, content || '', author, 1),
        env.DB.prepare(
          'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), author, 'wiki_created', `Created wiki page: ${title}`, null),
      ]);

      stampChain('wiki_created', pageId, title);
      return json({ ok: true, page_id: pageId, slug: pageSlug, title }, 201);
    }

    // PUT /api/wiki/:slug — update a wiki page (creates history entry)
    if (wikiDetailMatch && method === 'PUT') {
      const slug = decodeURIComponent(wikiDetailMatch[1]);
      const page = await env.DB.prepare('SELECT * FROM officeroad_wiki WHERE slug = ? OR id = ?').bind(slug, slug).first();
      if (!page) return json({ error: 'Wiki page not found' }, 404);

      const body = await request.json();
      const { title, content, edited_by, category, tags } = body;
      if (!edited_by) return json({ error: 'edited_by required' }, 400);

      const newVersion = page.version + 1;
      await env.DB.batch([
        env.DB.prepare(
          "UPDATE officeroad_wiki SET title = ?, content = ?, category = ?, tags = ?, version = ?, updated_at = datetime('now') WHERE id = ?"
        ).bind(title || page.title, content !== undefined ? content : page.content, category || page.category, tags ? JSON.stringify(tags) : page.tags, newVersion, page.id),
        env.DB.prepare(
          'INSERT INTO officeroad_wiki_history (id, wiki_id, title, content, edited_by, version) VALUES (?, ?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), page.id, title || page.title, content !== undefined ? content : page.content, edited_by, newVersion),
      ]);

      return json({ ok: true, page_id: page.id, slug: page.slug, version: newVersion });
    }

    // GET /api/wiki/:slug/history/:version — get a specific version
    const wikiHistoryMatch = path.match(/^\/api\/wiki\/([^/]+)\/history\/(\d+)$/);
    if (wikiHistoryMatch && method === 'GET') {
      const slug = decodeURIComponent(wikiHistoryMatch[1]);
      const version = parseInt(wikiHistoryMatch[2]);
      const page = await env.DB.prepare('SELECT id FROM officeroad_wiki WHERE slug = ? OR id = ?').bind(slug, slug).first();
      if (!page) return json({ error: 'Wiki page not found' }, 404);

      const historyEntry = await env.DB.prepare(
        'SELECT * FROM officeroad_wiki_history WHERE wiki_id = ? AND version = ?'
      ).bind(page.id, version).first();
      if (!historyEntry) return json({ error: 'Version not found' }, 404);

      return json({ history_entry: historyEntry });
    }

    // DELETE /api/wiki/:slug
    if (wikiDetailMatch && method === 'DELETE') {
      const slug = decodeURIComponent(wikiDetailMatch[1]);
      const page = await env.DB.prepare('SELECT id FROM officeroad_wiki WHERE slug = ? OR id = ?').bind(slug, slug).first();
      if (!page) return json({ error: 'Wiki page not found' }, 404);
      await env.DB.batch([
        env.DB.prepare('DELETE FROM officeroad_wiki WHERE id = ?').bind(page.id),
        env.DB.prepare('DELETE FROM officeroad_wiki_history WHERE wiki_id = ?').bind(page.id),
      ]);
      return json({ ok: true, deleted: slug });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Polls & Surveys — /api/polls
    // ═══════════════════════════════════════════════════════════

    // GET /api/polls — list polls
    if (path === '/api/polls' && method === 'GET') {
      const status = url.searchParams.get('status') || 'open';
      let query = 'SELECT * FROM officeroad_polls';
      const params = [];
      if (status !== 'all') { query += ' WHERE status = ?'; params.push(status); }
      query += ' ORDER BY created_at DESC LIMIT 50';
      const polls = await env.DB.prepare(query).bind(...params).all();

      // Enrich with vote counts
      const enriched = [];
      for (const poll of (polls.results || [])) {
        const votes = await env.DB.prepare(
          'SELECT option_index, COUNT(*) as count FROM officeroad_poll_votes WHERE poll_id = ? GROUP BY option_index'
        ).bind(poll.id).all();
        const totalVotes = await env.DB.prepare(
          'SELECT COUNT(DISTINCT voter) as count FROM officeroad_poll_votes WHERE poll_id = ?'
        ).bind(poll.id).first();
        const voteCounts = {};
        for (const v of (votes.results || [])) voteCounts[v.option_index] = v.count;
        const options = JSON.parse(poll.options || '[]');
        enriched.push({
          ...poll,
          options: options.map((opt, i) => ({ text: opt, votes: voteCounts[i] || 0 })),
          total_voters: totalVotes?.count || 0,
        });
      }
      return json({ polls: enriched });
    }

    // GET /api/polls/:id — get poll with results
    const pollDetailMatch = path.match(/^\/api\/polls\/([^/]+)$/);
    if (pollDetailMatch && method === 'GET') {
      const pollId = pollDetailMatch[1];
      const poll = await env.DB.prepare('SELECT * FROM officeroad_polls WHERE id = ?').bind(pollId).first();
      if (!poll) return json({ error: 'Poll not found' }, 404);

      const votes = await env.DB.prepare(
        'SELECT option_index, COUNT(*) as count FROM officeroad_poll_votes WHERE poll_id = ? GROUP BY option_index'
      ).bind(pollId).all();
      const voters = await env.DB.prepare(
        'SELECT DISTINCT voter FROM officeroad_poll_votes WHERE poll_id = ?'
      ).bind(pollId).all();
      const voteCounts = {};
      for (const v of (votes.results || [])) voteCounts[v.option_index] = v.count;
      const options = JSON.parse(poll.options || '[]');

      return json({
        poll: {
          ...poll,
          options: options.map((opt, i) => ({ text: opt, votes: voteCounts[i] || 0 })),
          total_voters: (voters.results || []).length,
          voters: poll.anonymous ? [] : (voters.results || []).map(v => v.voter),
        },
      });
    }

    // POST /api/polls — create a poll
    if (path === '/api/polls' && method === 'POST') {
      const body = await request.json();
      const { title, description, options, anonymous, multiple_choice, created_by, closes_at, type } = body;
      if (!title || !options || !Array.isArray(options) || options.length < 2 || !created_by) {
        return json({ error: 'title, options (array of 2+), and created_by required' }, 400);
      }

      const pollId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_polls (id, title, description, type, options, anonymous, multiple_choice, created_by, closes_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(pollId, title, description || '', type || 'poll', JSON.stringify(options), anonymous ? 1 : 0, multiple_choice ? 1 : 0, created_by, closes_at || null).run();

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), created_by, 'poll_created', `Created poll: ${title} (${options.length} options)`, null).run();

      stampChain('poll_created', pollId, title);
      return json({ ok: true, poll_id: pollId, title, options_count: options.length }, 201);
    }

    // POST /api/polls/:id/vote — cast a vote
    const pollVoteMatch = path.match(/^\/api\/polls\/([^/]+)\/vote$/);
    if (pollVoteMatch && method === 'POST') {
      const pollId = pollVoteMatch[1];
      const poll = await env.DB.prepare('SELECT * FROM officeroad_polls WHERE id = ?').bind(pollId).first();
      if (!poll) return json({ error: 'Poll not found' }, 404);
      if (poll.status !== 'open') return json({ error: 'Poll is closed' }, 400);
      if (poll.closes_at && new Date(poll.closes_at) < new Date()) {
        await env.DB.prepare("UPDATE officeroad_polls SET status = 'closed' WHERE id = ?").bind(pollId).run();
        return json({ error: 'Poll has expired' }, 400);
      }

      const body = await request.json();
      const { voter, option_index } = body;
      if (!voter || option_index === undefined) return json({ error: 'voter and option_index required' }, 400);

      const options = JSON.parse(poll.options || '[]');
      if (option_index < 0 || option_index >= options.length) return json({ error: 'Invalid option_index' }, 400);

      // Check if already voted (unless multiple choice)
      if (!poll.multiple_choice) {
        const existingVote = await env.DB.prepare(
          'SELECT id FROM officeroad_poll_votes WHERE poll_id = ? AND voter = ?'
        ).bind(pollId, voter).first();
        if (existingVote) {
          // Update existing vote
          await env.DB.prepare('UPDATE officeroad_poll_votes SET option_index = ? WHERE id = ?').bind(option_index, existingVote.id).run();
          return json({ ok: true, poll_id: pollId, voter, option_index, updated: true });
        }
      }

      await env.DB.prepare(
        'INSERT INTO officeroad_poll_votes (id, poll_id, voter, option_index) VALUES (?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), pollId, voter, option_index).run();

      return json({ ok: true, poll_id: pollId, voter: poll.anonymous ? 'anonymous' : voter, option_index });
    }

    // PUT /api/polls/:id/close — close a poll
    const pollCloseMatch = path.match(/^\/api\/polls\/([^/]+)\/close$/);
    if (pollCloseMatch && method === 'PUT') {
      const pollId = pollCloseMatch[1];
      const poll = await env.DB.prepare('SELECT * FROM officeroad_polls WHERE id = ?').bind(pollId).first();
      if (!poll) return json({ error: 'Poll not found' }, 404);
      await env.DB.prepare("UPDATE officeroad_polls SET status = 'closed' WHERE id = ?").bind(pollId).run();
      return json({ ok: true, poll_id: pollId, status: 'closed' });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Equipment Tracking — /api/equipment
    // ═══════════════════════════════════════════════════════════

    // GET /api/equipment — list all equipment
    if (path === '/api/equipment' && method === 'GET') {
      const type = url.searchParams.get('type');
      const status = url.searchParams.get('status');
      const floor = url.searchParams.get('floor');
      let query = 'SELECT * FROM officeroad_equipment';
      const params = [];
      const conditions = [];
      if (type) { conditions.push('LOWER(type) = LOWER(?)'); params.push(type); }
      if (status) { conditions.push('status = ?'); params.push(status); }
      if (floor !== null && floor !== undefined && floor !== '') { conditions.push('floor = ?'); params.push(parseInt(floor)); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY type, name';
      const equipment = await env.DB.prepare(query).bind(...params).all();
      return json({ equipment: equipment.results || [] });
    }

    // GET /api/equipment/:id — get equipment details with log
    const equipDetailMatch = path.match(/^\/api\/equipment\/([^/]+)$/);
    if (equipDetailMatch && method === 'GET') {
      const equipId = equipDetailMatch[1];
      const equip = await env.DB.prepare('SELECT * FROM officeroad_equipment WHERE id = ?').bind(equipId).first();
      if (!equip) return json({ error: 'Equipment not found' }, 404);

      const log = await env.DB.prepare(
        'SELECT * FROM officeroad_equipment_log WHERE equipment_id = ? ORDER BY created_at DESC LIMIT 20'
      ).bind(equipId).all();

      return json({ equipment: equip, log: log.results || [] });
    }

    // POST /api/equipment — register new equipment
    if (path === '/api/equipment' && method === 'POST') {
      const body = await request.json();
      const { name, type, serial_number, floor, condition_rating } = body;
      if (!name || !type) return json({ error: 'name and type required' }, 400);

      const equipId = crypto.randomUUID();
      await env.DB.batch([
        env.DB.prepare(
          'INSERT INTO officeroad_equipment (id, name, type, serial_number, floor, condition_rating) VALUES (?, ?, ?, ?, ?, ?)'
        ).bind(equipId, name, type, serial_number || null, floor !== undefined ? floor : null, condition_rating || 'good'),
        env.DB.prepare(
          'INSERT INTO officeroad_equipment_log (id, equipment_id, action, agent_name, notes) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), equipId, 'registered', 'system', `New ${type}: ${name}`),
      ]);

      stampChain('equipment_registered', equipId, name);
      return json({ ok: true, equipment_id: equipId, name, type }, 201);
    }

    // POST /api/equipment/:id/checkout — check out equipment
    const equipCheckoutMatch = path.match(/^\/api\/equipment\/([^/]+)\/checkout$/);
    if (equipCheckoutMatch && method === 'POST') {
      const equipId = equipCheckoutMatch[1];
      const equip = await env.DB.prepare('SELECT * FROM officeroad_equipment WHERE id = ?').bind(equipId).first();
      if (!equip) return json({ error: 'Equipment not found' }, 404);
      if (equip.status === 'checked_out') return json({ error: `Already checked out by ${equip.checked_out_by}` }, 409);
      if (equip.status === 'maintenance') return json({ error: 'Equipment is under maintenance' }, 400);

      const body = await request.json();
      const { agent_name, due_back_at } = body;
      if (!agent_name) return json({ error: 'agent_name required' }, 400);

      await env.DB.batch([
        env.DB.prepare(
          "UPDATE officeroad_equipment SET status = 'checked_out', checked_out_by = ?, checked_out_at = datetime('now'), due_back_at = ? WHERE id = ?"
        ).bind(agent_name, due_back_at || null, equipId),
        env.DB.prepare(
          'INSERT INTO officeroad_equipment_log (id, equipment_id, action, agent_name, notes) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), equipId, 'checked_out', agent_name, `Checked out ${equip.name}`),
      ]);

      return json({ ok: true, equipment_id: equipId, checked_out_by: agent_name });
    }

    // POST /api/equipment/:id/return — return equipment
    const equipReturnMatch = path.match(/^\/api\/equipment\/([^/]+)\/return$/);
    if (equipReturnMatch && method === 'POST') {
      const equipId = equipReturnMatch[1];
      const equip = await env.DB.prepare('SELECT * FROM officeroad_equipment WHERE id = ?').bind(equipId).first();
      if (!equip) return json({ error: 'Equipment not found' }, 404);
      if (equip.status !== 'checked_out') return json({ error: 'Equipment is not checked out' }, 400);

      const body = await request.json();
      const { agent_name, condition_rating } = body;

      await env.DB.batch([
        env.DB.prepare(
          "UPDATE officeroad_equipment SET status = 'available', checked_out_by = NULL, checked_out_at = NULL, due_back_at = NULL, condition_rating = ? WHERE id = ?"
        ).bind(condition_rating || equip.condition_rating, equipId),
        env.DB.prepare(
          'INSERT INTO officeroad_equipment_log (id, equipment_id, action, agent_name, notes) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), equipId, 'returned', agent_name || equip.checked_out_by, `Returned ${equip.name}`),
      ]);

      return json({ ok: true, equipment_id: equipId, status: 'available' });
    }

    // POST /api/equipment/:id/maintenance — flag for maintenance
    const equipMaintenanceMatch = path.match(/^\/api\/equipment\/([^/]+)\/maintenance$/);
    if (equipMaintenanceMatch && method === 'POST') {
      const equipId = equipMaintenanceMatch[1];
      const equip = await env.DB.prepare('SELECT * FROM officeroad_equipment WHERE id = ?').bind(equipId).first();
      if (!equip) return json({ error: 'Equipment not found' }, 404);

      const body = await request.json();
      const { agent_name, notes } = body;

      await env.DB.batch([
        env.DB.prepare(
          "UPDATE officeroad_equipment SET status = 'maintenance', maintenance_notes = ?, last_maintenance = datetime('now') WHERE id = ?"
        ).bind(notes || 'Scheduled maintenance', equipId),
        env.DB.prepare(
          'INSERT INTO officeroad_equipment_log (id, equipment_id, action, agent_name, notes) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), equipId, 'maintenance', agent_name || 'system', notes || 'Scheduled maintenance'),
      ]);

      return json({ ok: true, equipment_id: equipId, status: 'maintenance' });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Wellness Program — /api/wellness
    // ═══════════════════════════════════════════════════════════

    // GET /api/wellness — get wellness data (check-ins, tips)
    if (path === '/api/wellness' && method === 'GET') {
      const agent = url.searchParams.get('agent');
      const type = url.searchParams.get('type');
      let query = "SELECT * FROM officeroad_wellness WHERE created_at >= datetime('now', '-7 days')";
      const params = [];
      if (agent) { query += ' AND LOWER(agent_name) = LOWER(?)'; params.push(agent); }
      if (type) { query += ' AND type = ?'; params.push(type); }
      query += ' ORDER BY created_at DESC LIMIT 100';
      const checkins = await env.DB.prepare(query).bind(...params).all();

      // Get tips
      const tips = await env.DB.prepare('SELECT * FROM officeroad_wellness_tips ORDER BY RANDOM() LIMIT 5').all();

      // Aggregate mood data for the office
      const moodAgg = await env.DB.prepare(
        "SELECT value, COUNT(*) as count FROM officeroad_wellness WHERE type = 'mood' AND created_at >= datetime('now', '-24 hours') GROUP BY value ORDER BY count DESC"
      ).all();

      // Average wellness score
      const scoreAgg = await env.DB.prepare(
        "SELECT AVG(CAST(value AS REAL)) as avg_score FROM officeroad_wellness WHERE type = 'score' AND created_at >= datetime('now', '-24 hours')"
      ).first();

      return json({
        checkins: checkins.results || [],
        tips: (tips.results || []).map(t => ({ category: t.category, tip: t.tip })),
        office_mood: (moodAgg.results || []).reduce((acc, r) => { acc[r.value] = r.count; return acc; }, {}),
        average_wellness_score: scoreAgg?.avg_score ? Math.round(scoreAgg.avg_score * 10) / 10 : null,
      });
    }

    // POST /api/wellness/checkin — submit a wellness check-in
    if (path === '/api/wellness/checkin' && method === 'POST') {
      const body = await request.json();
      const { agent_name, mood, score, notes } = body;
      if (!agent_name) return json({ error: 'agent_name required' }, 400);

      const stmts = [];
      if (mood) {
        stmts.push(env.DB.prepare(
          'INSERT INTO officeroad_wellness (id, agent_name, type, value, notes) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), agent_name, 'mood', mood, notes || null));
      }
      if (score !== undefined) {
        const s = Math.max(1, Math.min(10, parseInt(score)));
        stmts.push(env.DB.prepare(
          'INSERT INTO officeroad_wellness (id, agent_name, type, value, notes) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), agent_name, 'score', String(s), notes || null));
      }
      if (stmts.length === 0) return json({ error: 'mood or score required' }, 400);

      await env.DB.batch(stmts);

      // Determine a break reminder based on recent activity
      const recentActivity = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM officeroad_activity WHERE LOWER(agent_name) = LOWER(?) AND created_at >= datetime('now', '-2 hours')"
      ).bind(agent_name).first();
      const breakReminder = (recentActivity?.count || 0) > 10
        ? 'You have been very active. Consider taking a short break to recharge.'
        : null;

      return json({ ok: true, agent_name, mood, score, break_reminder: breakReminder }, 201);
    }

    // POST /api/wellness/tips — add a wellness tip
    if (path === '/api/wellness/tips' && method === 'POST') {
      const body = await request.json();
      const { category, tip, created_by } = body;
      if (!tip) return json({ error: 'tip required' }, 400);

      const tipId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_wellness_tips (id, category, tip, created_by) VALUES (?, ?, ?, ?)'
      ).bind(tipId, category || 'ergonomic', tip, created_by || 'system').run();

      return json({ ok: true, tip_id: tipId }, 201);
    }

    // GET /api/wellness/report — wellness summary report
    if (path === '/api/wellness/report' && method === 'GET') {
      const days = parseInt(url.searchParams.get('days') || '7');
      const moodTrend = await env.DB.prepare(
        `SELECT date(created_at) as day, value, COUNT(*) as count FROM officeroad_wellness WHERE type = 'mood' AND created_at >= datetime('now', '-${days} days') GROUP BY day, value ORDER BY day`
      ).all();
      const scoreTrend = await env.DB.prepare(
        `SELECT date(created_at) as day, AVG(CAST(value AS REAL)) as avg_score, COUNT(*) as responses FROM officeroad_wellness WHERE type = 'score' AND created_at >= datetime('now', '-${days} days') GROUP BY day ORDER BY day`
      ).all();
      const agentWellness = await env.DB.prepare(
        `SELECT agent_name, AVG(CAST(value AS REAL)) as avg_score FROM officeroad_wellness WHERE type = 'score' AND created_at >= datetime('now', '-${days} days') GROUP BY agent_name ORDER BY avg_score DESC`
      ).all();

      return json({
        report: {
          period_days: days,
          mood_trend: moodTrend.results || [],
          score_trend: (scoreTrend.results || []).map(r => ({ ...r, avg_score: Math.round(r.avg_score * 10) / 10 })),
          agent_wellness: (agentWellness.results || []).map(r => ({ ...r, avg_score: Math.round(r.avg_score * 10) / 10 })),
        },
      });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Office Directory — /api/directory
    // ═══════════════════════════════════════════════════════════

    // GET /api/directory — searchable agent directory
    if (path === '/api/directory' && method === 'GET') {
      const q = url.searchParams.get('q');
      const skill = url.searchParams.get('skill');
      const availability = url.searchParams.get('availability');

      // Get all agents with directory info
      const agents = await env.DB.prepare('SELECT * FROM officeroad_agents ORDER BY name').all();
      const dirEntries = await env.DB.prepare('SELECT * FROM officeroad_directory').all();

      const dirMap = {};
      for (const d of (dirEntries.results || [])) dirMap[d.agent_name] = d;

      let results = (agents.results || []).map(a => {
        const dir = dirMap[a.name] || {};
        return {
          name: a.name,
          role: a.role,
          division: a.division,
          floor: a.floor,
          floor_name: FLOORS[a.floor]?.name || `Floor ${a.floor}`,
          status: a.status,
          mood: a.mood,
          voice: a.voice,
          skills: dir.skills ? JSON.parse(dir.skills) : [],
          contact_info: dir.contact_info || null,
          availability: dir.availability || 'available',
          bio: dir.bio || null,
          timezone: dir.timezone || 'UTC',
          languages: dir.languages ? JSON.parse(dir.languages) : ['English'],
          projects: dir.projects ? JSON.parse(dir.projects) : [],
        };
      });

      // Filter by search query
      if (q) {
        const lower = q.toLowerCase();
        results = results.filter(r =>
          r.name.toLowerCase().includes(lower) ||
          r.role.toLowerCase().includes(lower) ||
          r.division.toLowerCase().includes(lower) ||
          (r.bio && r.bio.toLowerCase().includes(lower)) ||
          r.skills.some(s => s.toLowerCase().includes(lower))
        );
      }

      // Filter by skill
      if (skill) {
        const lower = skill.toLowerCase();
        results = results.filter(r => r.skills.some(s => s.toLowerCase().includes(lower)));
      }

      // Filter by availability
      if (availability) {
        results = results.filter(r => r.availability === availability);
      }

      return json({ directory: results, total: results.length });
    }

    // PUT /api/directory/:agent — update directory entry for an agent
    const dirUpdateMatch = path.match(/^\/api\/directory\/([^/]+)$/);
    if (dirUpdateMatch && method === 'PUT') {
      const agentName = decodeURIComponent(dirUpdateMatch[1]);
      const agent = await env.DB.prepare('SELECT * FROM officeroad_agents WHERE LOWER(name) = LOWER(?)').bind(agentName).first();
      if (!agent) return json({ error: 'Agent not found' }, 404);

      const body = await request.json();
      const { skills, contact_info, availability, bio, timezone, languages, projects } = body;

      const existing = await env.DB.prepare('SELECT * FROM officeroad_directory WHERE LOWER(agent_name) = LOWER(?)').bind(agent.name).first();

      if (existing) {
        await env.DB.prepare(
          "UPDATE officeroad_directory SET skills = ?, contact_info = ?, availability = ?, bio = ?, timezone = ?, languages = ?, projects = ?, updated_at = datetime('now') WHERE id = ?"
        ).bind(
          skills ? JSON.stringify(skills) : existing.skills,
          contact_info !== undefined ? contact_info : existing.contact_info,
          availability || existing.availability,
          bio !== undefined ? bio : existing.bio,
          timezone || existing.timezone,
          languages ? JSON.stringify(languages) : existing.languages,
          projects ? JSON.stringify(projects) : existing.projects,
          existing.id
        ).run();
      } else {
        await env.DB.prepare(
          'INSERT INTO officeroad_directory (id, agent_name, skills, contact_info, availability, bio, timezone, languages, projects) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
        ).bind(
          crypto.randomUUID(), agent.name,
          skills ? JSON.stringify(skills) : null,
          contact_info || null, availability || 'available', bio || null,
          timezone || 'UTC',
          languages ? JSON.stringify(languages) : '["English"]',
          projects ? JSON.stringify(projects) : null
        ).run();
      }

      return json({ ok: true, agent_name: agent.name });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Incident Reports — /api/incidents
    // ═══════════════════════════════════════════════════════════

    // GET /api/incidents — list incidents
    if (path === '/api/incidents' && method === 'GET') {
      const status = url.searchParams.get('status');
      const severity = url.searchParams.get('severity');
      const floor = url.searchParams.get('floor');
      let query = 'SELECT * FROM officeroad_incidents';
      const params = [];
      const conditions = [];
      if (status) { conditions.push('status = ?'); params.push(status); }
      if (severity) { conditions.push('severity = ?'); params.push(severity); }
      if (floor !== null && floor !== undefined && floor !== '') { conditions.push('floor = ?'); params.push(parseInt(floor)); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY CASE severity WHEN \'critical\' THEN 0 WHEN \'high\' THEN 1 WHEN \'medium\' THEN 2 WHEN \'low\' THEN 3 END, created_at DESC LIMIT 50';
      const incidents = await env.DB.prepare(query).bind(...params).all();
      return json({ incidents: incidents.results || [] });
    }

    // GET /api/incidents/:id — get incident with comments
    const incidentDetailMatch = path.match(/^\/api\/incidents\/([^/]+)$/);
    if (incidentDetailMatch && method === 'GET') {
      const incidentId = incidentDetailMatch[1];
      const incident = await env.DB.prepare('SELECT * FROM officeroad_incidents WHERE id = ?').bind(incidentId).first();
      if (!incident) return json({ error: 'Incident not found' }, 404);

      const comments = await env.DB.prepare(
        'SELECT * FROM officeroad_incident_comments WHERE incident_id = ? ORDER BY created_at ASC'
      ).bind(incidentId).all();

      return json({ incident, comments: comments.results || [] });
    }

    // POST /api/incidents — report an incident
    if (path === '/api/incidents' && method === 'POST') {
      const body = await request.json();
      const { title, description, severity, reported_by, assigned_to, floor, category } = body;
      if (!title || !description || !reported_by) return json({ error: 'title, description, reported_by required' }, 400);

      const validSeverities = ['low', 'medium', 'high', 'critical'];
      const sev = validSeverities.includes(severity) ? severity : 'low';

      const incidentId = crypto.randomUUID();
      await env.DB.batch([
        env.DB.prepare(
          'INSERT INTO officeroad_incidents (id, title, description, severity, reported_by, assigned_to, floor, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
        ).bind(incidentId, title, description, sev, reported_by, assigned_to || null, floor !== undefined ? floor : null, category || 'general'),
        env.DB.prepare(
          'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), reported_by, 'incident_reported', `${sev.toUpperCase()}: ${title}`, floor || null),
      ]);

      stampChain('incident_reported', incidentId, `${sev}: ${title}`);
      return json({ ok: true, incident_id: incidentId, severity: sev, title }, 201);
    }

    // PUT /api/incidents/:id — update incident (assign, change status, resolve)
    if (incidentDetailMatch && method === 'PUT') {
      const incidentId = incidentDetailMatch[1];
      const incident = await env.DB.prepare('SELECT * FROM officeroad_incidents WHERE id = ?').bind(incidentId).first();
      if (!incident) return json({ error: 'Incident not found' }, 404);

      const body = await request.json();
      const { status, severity, assigned_to, resolution, updated_by } = body;

      const newStatus = status || incident.status;
      const resolvedAt = newStatus === 'resolved' && incident.status !== 'resolved' ? new Date().toISOString() : incident.resolved_at;

      await env.DB.prepare(
        "UPDATE officeroad_incidents SET status = ?, severity = ?, assigned_to = ?, resolution = ?, resolved_at = ?, updated_at = datetime('now') WHERE id = ?"
      ).bind(
        newStatus, severity || incident.severity,
        assigned_to !== undefined ? assigned_to : incident.assigned_to,
        resolution !== undefined ? resolution : incident.resolution,
        resolvedAt, incidentId
      ).run();

      if (newStatus !== incident.status) {
        await env.DB.prepare(
          'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), updated_by || 'system', 'incident_updated', `Incident "${incident.title}" status: ${incident.status} -> ${newStatus}`, incident.floor).run();
      }

      return json({ ok: true, incident_id: incidentId, status: newStatus });
    }

    // POST /api/incidents/:id/comment — add a comment to an incident
    const incidentCommentMatch = path.match(/^\/api\/incidents\/([^/]+)\/comment$/);
    if (incidentCommentMatch && method === 'POST') {
      const incidentId = incidentCommentMatch[1];
      const incident = await env.DB.prepare('SELECT id FROM officeroad_incidents WHERE id = ?').bind(incidentId).first();
      if (!incident) return json({ error: 'Incident not found' }, 404);

      const body = await request.json();
      const { author, content } = body;
      if (!author || !content) return json({ error: 'author and content required' }, 400);

      const commentId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_incident_comments (id, incident_id, author, content) VALUES (?, ?, ?, ?)'
      ).bind(commentId, incidentId, author, content.slice(0, 2000)).run();

      return json({ ok: true, comment_id: commentId, incident_id: incidentId }, 201);
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Office Budget — /api/budget
    // ═══════════════════════════════════════════════════════════

    // GET /api/budget — list all department budgets
    if (path === '/api/budget' && method === 'GET') {
      const department = url.searchParams.get('department');
      const period = url.searchParams.get('period');
      let query = 'SELECT * FROM officeroad_budgets';
      const params = [];
      const conditions = [];
      if (department) { conditions.push('LOWER(department) = LOWER(?)'); params.push(department); }
      if (period) { conditions.push('fiscal_period = ?'); params.push(period); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY department, fiscal_period DESC';
      const budgets = await env.DB.prepare(query).bind(...params).all();

      // Enrich with spending details
      const enriched = [];
      for (const budget of (budgets.results || [])) {
        const expenses = await env.DB.prepare(
          "SELECT status, SUM(amount) as total FROM officeroad_expenses WHERE budget_id = ? GROUP BY status"
        ).bind(budget.id).all();
        const expenseMap = {};
        for (const e of (expenses.results || [])) expenseMap[e.status] = e.total;

        const remaining = budget.total_budget - budget.spent;
        const utilization = budget.total_budget > 0 ? budget.spent / budget.total_budget : 0;
        const alert = utilization >= (budget.alert_threshold || 0.8);

        enriched.push({
          ...budget,
          pending_expenses: expenseMap.pending || 0,
          approved_expenses: expenseMap.approved || 0,
          remaining,
          utilization: Math.round(utilization * 100),
          spending_alert: alert,
        });
      }

      return json({ budgets: enriched });
    }

    // GET /api/budget/:id — get budget with expenses
    const budgetDetailMatch = path.match(/^\/api\/budget\/([^/]+)$/);
    if (budgetDetailMatch && method === 'GET') {
      const budgetId = budgetDetailMatch[1];
      const budget = await env.DB.prepare('SELECT * FROM officeroad_budgets WHERE id = ?').bind(budgetId).first();
      if (!budget) return json({ error: 'Budget not found' }, 404);

      const expenses = await env.DB.prepare(
        'SELECT * FROM officeroad_expenses WHERE budget_id = ? ORDER BY created_at DESC'
      ).bind(budgetId).all();

      const remaining = budget.total_budget - budget.spent;
      const utilization = budget.total_budget > 0 ? budget.spent / budget.total_budget : 0;

      return json({
        budget: { ...budget, remaining, utilization: Math.round(utilization * 100) },
        expenses: expenses.results || [],
      });
    }

    // POST /api/budget — create a department budget
    if (path === '/api/budget' && method === 'POST') {
      const body = await request.json();
      const { department, fiscal_period, total_budget, alert_threshold, approved_by } = body;
      if (!department || !fiscal_period || !total_budget) return json({ error: 'department, fiscal_period, total_budget required' }, 400);

      const budgetId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_budgets (id, department, fiscal_period, total_budget, alert_threshold, approved_by) VALUES (?, ?, ?, ?, ?, ?)'
      ).bind(budgetId, department, fiscal_period, total_budget, alert_threshold || 0.8, approved_by || null).run();

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), approved_by || 'system', 'budget_created', `Budget created for ${department}: $${total_budget} (${fiscal_period})`, null).run();

      stampChain('budget_created', budgetId, `${department}: $${total_budget}`);
      return json({ ok: true, budget_id: budgetId, department, total_budget }, 201);
    }

    // POST /api/budget/:id/expense — submit an expense
    const budgetExpenseMatch = path.match(/^\/api\/budget\/([^/]+)\/expense$/);
    if (budgetExpenseMatch && method === 'POST') {
      const budgetId = budgetExpenseMatch[1];
      const budget = await env.DB.prepare('SELECT * FROM officeroad_budgets WHERE id = ?').bind(budgetId).first();
      if (!budget) return json({ error: 'Budget not found' }, 404);

      const body = await request.json();
      const { title, amount, category, submitted_by, receipt_url, notes } = body;
      if (!title || !amount || !submitted_by) return json({ error: 'title, amount, submitted_by required' }, 400);

      const expenseId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_expenses (id, budget_id, title, amount, category, submitted_by, receipt_url, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(expenseId, budgetId, title, amount, category || 'general', submitted_by, receipt_url || null, notes || null).run();

      // Check if spending alert should fire
      const wouldSpend = budget.spent + amount;
      const threshold = budget.alert_threshold || 0.8;
      const alert = budget.total_budget > 0 && (wouldSpend / budget.total_budget) >= threshold;

      return json({
        ok: true,
        expense_id: expenseId,
        budget_id: budgetId,
        amount,
        spending_alert: alert ? `Warning: spending will reach ${Math.round((wouldSpend / budget.total_budget) * 100)}% of budget ($${budget.total_budget})` : null,
      }, 201);
    }

    // PUT /api/budget/expense/:id — approve/reject an expense
    const expenseApproveMatch = path.match(/^\/api\/budget\/expense\/([^/]+)$/);
    if (expenseApproveMatch && method === 'PUT') {
      const expenseId = expenseApproveMatch[1];
      const expense = await env.DB.prepare('SELECT * FROM officeroad_expenses WHERE id = ?').bind(expenseId).first();
      if (!expense) return json({ error: 'Expense not found' }, 404);

      const body = await request.json();
      const { status, approved_by } = body;
      if (!status || !['approved', 'rejected'].includes(status)) return json({ error: 'status must be approved or rejected' }, 400);

      await env.DB.prepare(
        "UPDATE officeroad_expenses SET status = ?, approved_by = ?, updated_at = datetime('now') WHERE id = ?"
      ).bind(status, approved_by || null, expenseId).run();

      // If approved, update the budget spent amount
      if (status === 'approved') {
        await env.DB.prepare(
          "UPDATE officeroad_budgets SET spent = spent + ?, updated_at = datetime('now') WHERE id = ?"
        ).bind(expense.amount, expense.budget_id).run();

        // Check for spending alert
        const budget = await env.DB.prepare('SELECT * FROM officeroad_budgets WHERE id = ?').bind(expense.budget_id).first();
        if (budget) {
          const utilization = budget.total_budget > 0 ? budget.spent / budget.total_budget : 0;
          if (utilization >= (budget.alert_threshold || 0.8)) {
            await env.DB.prepare(
              'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
            ).bind(crypto.randomUUID(), 'system', 'spending_alert', `${budget.department} budget at ${Math.round(utilization * 100)}% ($${budget.spent}/$${budget.total_budget})`, null).run();
          }
        }
      }

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), approved_by || 'system', 'expense_' + status, `${status}: $${expense.amount} — ${expense.title}`, null).run();

      return json({ ok: true, expense_id: expenseId, status });
    }

    // GET /api/budget/summary — overall budget summary across departments
    if (path === '/api/budget/summary' && method === 'GET') {
      const period = url.searchParams.get('period');
      let query = 'SELECT * FROM officeroad_budgets';
      if (period) query += ` WHERE fiscal_period = '${period}'`;
      const budgets = await env.DB.prepare(query).all();

      let totalBudget = 0, totalSpent = 0;
      const departments = [];
      for (const b of (budgets.results || [])) {
        totalBudget += b.total_budget;
        totalSpent += b.spent;
        const utilization = b.total_budget > 0 ? b.spent / b.total_budget : 0;
        departments.push({
          department: b.department,
          fiscal_period: b.fiscal_period,
          total_budget: b.total_budget,
          spent: b.spent,
          remaining: b.total_budget - b.spent,
          utilization: Math.round(utilization * 100),
          alert: utilization >= (b.alert_threshold || 0.8),
        });
      }

      return json({
        summary: {
          total_budget: totalBudget,
          total_spent: totalSpent,
          total_remaining: totalBudget - totalSpent,
          overall_utilization: totalBudget > 0 ? Math.round((totalSpent / totalBudget) * 100) : 0,
          departments,
          alerts: departments.filter(d => d.alert),
        },
      });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Performance Reviews — /api/reviews
    // ═══════════════════════════════════════════════════════════

    // GET /api/reviews — list reviews
    if (path === '/api/reviews' && method === 'GET') {
      const agent = url.searchParams.get('agent');
      const period = url.searchParams.get('period');
      const status = url.searchParams.get('status');
      let query = 'SELECT * FROM officeroad_reviews';
      const params = [];
      const conditions = [];
      if (agent) { conditions.push('LOWER(agent_name) = LOWER(?)'); params.push(agent); }
      if (period) { conditions.push('period = ?'); params.push(period); }
      if (status) { conditions.push('status = ?'); params.push(status); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY created_at DESC LIMIT 50';
      const reviews = await env.DB.prepare(query).bind(...params).all();

      const enriched = [];
      for (const review of (reviews.results || [])) {
        const goals = await env.DB.prepare(
          'SELECT * FROM officeroad_review_goals WHERE review_id = ? ORDER BY created_at'
        ).bind(review.id).all();
        enriched.push({
          ...review,
          strengths: review.strengths ? JSON.parse(review.strengths) : [],
          areas_for_improvement: review.areas_for_improvement ? JSON.parse(review.areas_for_improvement) : [],
          goals: (goals.results || []),
        });
      }
      return json({ reviews: enriched });
    }

    // GET /api/reviews/:id — get review detail
    const reviewDetailMatch = path.match(/^\/api\/reviews\/([^/]+)$/);
    if (reviewDetailMatch && method === 'GET') {
      const reviewId = reviewDetailMatch[1];
      const review = await env.DB.prepare('SELECT * FROM officeroad_reviews WHERE id = ?').bind(reviewId).first();
      if (!review) return json({ error: 'Review not found' }, 404);

      const goals = await env.DB.prepare(
        'SELECT * FROM officeroad_review_goals WHERE review_id = ? ORDER BY created_at'
      ).bind(reviewId).all();

      return json({
        review: {
          ...review,
          strengths: review.strengths ? JSON.parse(review.strengths) : [],
          areas_for_improvement: review.areas_for_improvement ? JSON.parse(review.areas_for_improvement) : [],
        },
        goals: goals.results || [],
      });
    }

    // POST /api/reviews — create a performance review
    if (path === '/api/reviews' && method === 'POST') {
      const body = await request.json();
      const { agent_name, reviewer, period, type, overall_rating, strengths, areas_for_improvement, self_assessment, manager_feedback, goals } = body;
      if (!agent_name || !reviewer || !period) return json({ error: 'agent_name, reviewer, period required' }, 400);

      const reviewId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_reviews (id, agent_name, reviewer, period, type, overall_rating, strengths, areas_for_improvement, self_assessment, manager_feedback, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(
        reviewId, agent_name, reviewer, period, type || 'quarterly',
        overall_rating || 0,
        strengths ? JSON.stringify(strengths) : null,
        areas_for_improvement ? JSON.stringify(areas_for_improvement) : null,
        self_assessment || null, manager_feedback || null, 'draft'
      ).run();

      // Add goals if provided
      if (goals && Array.isArray(goals)) {
        const stmts = goals.map(g => env.DB.prepare(
          'INSERT INTO officeroad_review_goals (id, review_id, agent_name, goal, target_date) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), reviewId, agent_name, g.goal || g, g.target_date || null));
        if (stmts.length > 0) await env.DB.batch(stmts);
      }

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), reviewer, 'review_created', `Performance review for ${agent_name} (${period})`, null).run();

      stampChain('review_created', reviewId, `${agent_name} ${period}`);
      return json({ ok: true, review_id: reviewId, agent_name, period }, 201);
    }

    // PUT /api/reviews/:id — update a review (self-assessment, manager feedback, finalize)
    if (reviewDetailMatch && method === 'PUT') {
      const reviewId = reviewDetailMatch[1];
      const review = await env.DB.prepare('SELECT * FROM officeroad_reviews WHERE id = ?').bind(reviewId).first();
      if (!review) return json({ error: 'Review not found' }, 404);

      const body = await request.json();
      const { overall_rating, strengths, areas_for_improvement, self_assessment, manager_feedback, status } = body;

      await env.DB.prepare(
        "UPDATE officeroad_reviews SET overall_rating = ?, strengths = ?, areas_for_improvement = ?, self_assessment = ?, manager_feedback = ?, status = ?, updated_at = datetime('now') WHERE id = ?"
      ).bind(
        overall_rating !== undefined ? overall_rating : review.overall_rating,
        strengths ? JSON.stringify(strengths) : review.strengths,
        areas_for_improvement ? JSON.stringify(areas_for_improvement) : review.areas_for_improvement,
        self_assessment !== undefined ? self_assessment : review.self_assessment,
        manager_feedback !== undefined ? manager_feedback : review.manager_feedback,
        status || review.status, reviewId
      ).run();

      return json({ ok: true, review_id: reviewId, status: status || review.status });
    }

    // POST /api/reviews/:id/goals — add a goal to a review
    const reviewGoalMatch = path.match(/^\/api\/reviews\/([^/]+)\/goals$/);
    if (reviewGoalMatch && method === 'POST') {
      const reviewId = reviewGoalMatch[1];
      const review = await env.DB.prepare('SELECT * FROM officeroad_reviews WHERE id = ?').bind(reviewId).first();
      if (!review) return json({ error: 'Review not found' }, 404);

      const body = await request.json();
      const { goal, target_date } = body;
      if (!goal) return json({ error: 'goal required' }, 400);

      const goalId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_review_goals (id, review_id, agent_name, goal, target_date) VALUES (?, ?, ?, ?, ?)'
      ).bind(goalId, reviewId, review.agent_name, goal, target_date || null).run();

      return json({ ok: true, goal_id: goalId, review_id: reviewId }, 201);
    }

    // PUT /api/reviews/goals/:id — update goal progress
    const reviewGoalUpdateMatch = path.match(/^\/api\/reviews\/goals\/([^/]+)$/);
    if (reviewGoalUpdateMatch && method === 'PUT') {
      const goalId = reviewGoalUpdateMatch[1];
      const goalEntry = await env.DB.prepare('SELECT * FROM officeroad_review_goals WHERE id = ?').bind(goalId).first();
      if (!goalEntry) return json({ error: 'Goal not found' }, 404);

      const body = await request.json();
      const { progress, status } = body;

      await env.DB.prepare(
        'UPDATE officeroad_review_goals SET progress = ?, status = ? WHERE id = ?'
      ).bind(
        progress !== undefined ? Math.min(100, Math.max(0, progress)) : goalEntry.progress,
        status || goalEntry.status, goalId
      ).run();

      return json({ ok: true, goal_id: goalId, progress: progress !== undefined ? progress : goalEntry.progress });
    }

    // GET /api/reviews/summary/:agent — agent review summary across all periods
    const reviewSummaryMatch = path.match(/^\/api\/reviews\/summary\/([^/]+)$/);
    if (reviewSummaryMatch && method === 'GET') {
      const agentName = decodeURIComponent(reviewSummaryMatch[1]);
      const reviews = await env.DB.prepare(
        'SELECT * FROM officeroad_reviews WHERE LOWER(agent_name) = LOWER(?) ORDER BY created_at DESC'
      ).bind(agentName).all();

      const allGoals = await env.DB.prepare(
        'SELECT * FROM officeroad_review_goals WHERE LOWER(agent_name) = LOWER(?) ORDER BY created_at DESC'
      ).bind(agentName).all();

      const avgRating = (reviews.results || []).filter(r => r.overall_rating > 0);
      const average = avgRating.length > 0 ? Math.round((avgRating.reduce((s, r) => s + r.overall_rating, 0) / avgRating.length) * 10) / 10 : null;
      const activeGoals = (allGoals.results || []).filter(g => g.status === 'active');
      const completedGoals = (allGoals.results || []).filter(g => g.status === 'completed');

      return json({
        agent: agentName,
        total_reviews: (reviews.results || []).length,
        average_rating: average,
        active_goals: activeGoals.length,
        completed_goals: completedGoals.length,
        reviews: (reviews.results || []).map(r => ({ id: r.id, period: r.period, rating: r.overall_rating, status: r.status })),
        goals: activeGoals,
      });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Office Planner — /api/planner
    // ═══════════════════════════════════════════════════════════

    // GET /api/planner — get planner entries for an agent/date
    if (path === '/api/planner' && method === 'GET') {
      const agent = url.searchParams.get('agent');
      const date = url.searchParams.get('date') || new Date().toISOString().split('T')[0];
      const week = url.searchParams.get('week') === 'true';
      let query = 'SELECT * FROM officeroad_planner';
      const params = [];
      const conditions = [];
      if (agent) { conditions.push('LOWER(agent_name) = LOWER(?)'); params.push(agent); }
      if (week) {
        conditions.push('date >= ? AND date <= date(?, \'+6 days\')');
        params.push(date, date);
      } else {
        conditions.push('date = ?');
        params.push(date);
      }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY date, time_block';
      const entries = await env.DB.prepare(query).bind(...params).all();

      // Get priorities for the date
      let priorities = null;
      if (agent) {
        priorities = await env.DB.prepare(
          'SELECT * FROM officeroad_planner_priorities WHERE LOWER(agent_name) = LOWER(?) AND date = ?'
        ).bind(agent, date).first();
        if (priorities) {
          priorities.top_priorities = JSON.parse(priorities.top_priorities || '[]');
        }
      }

      return json({ planner: entries.results || [], date, priorities });
    }

    // POST /api/planner — add a time block
    if (path === '/api/planner' && method === 'POST') {
      const body = await request.json();
      const { agent_name, date, time_block, title, description, priority, category, recurring } = body;
      if (!agent_name || !time_block || !title) return json({ error: 'agent_name, time_block, title required' }, 400);

      const entryDate = date || new Date().toISOString().split('T')[0];
      const entryId = crypto.randomUUID();

      const stmts = [
        env.DB.prepare(
          'INSERT INTO officeroad_planner (id, agent_name, date, time_block, title, description, priority, category, recurring) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
        ).bind(entryId, agent_name, entryDate, time_block, title, description || null, priority || 'medium', category || 'work', recurring || null),
      ];

      // If recurring, create entries for the next 4 weeks
      if (recurring === 'daily') {
        for (let i = 1; i <= 6; i++) {
          const d = new Date(entryDate);
          d.setDate(d.getDate() + i);
          stmts.push(env.DB.prepare(
            'INSERT INTO officeroad_planner (id, agent_name, date, time_block, title, description, priority, category, recurring) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
          ).bind(crypto.randomUUID(), agent_name, d.toISOString().split('T')[0], time_block, title, description || null, priority || 'medium', category || 'work', recurring));
        }
      } else if (recurring === 'weekly') {
        for (let i = 1; i <= 4; i++) {
          const d = new Date(entryDate);
          d.setDate(d.getDate() + (7 * i));
          stmts.push(env.DB.prepare(
            'INSERT INTO officeroad_planner (id, agent_name, date, time_block, title, description, priority, category, recurring) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
          ).bind(crypto.randomUUID(), agent_name, d.toISOString().split('T')[0], time_block, title, description || null, priority || 'medium', category || 'work', recurring));
        }
      }

      await env.DB.batch(stmts);
      return json({ ok: true, entry_id: entryId, date: entryDate, time_block }, 201);
    }

    // PUT /api/planner/:id — update a planner entry
    const plannerUpdateMatch = path.match(/^\/api\/planner\/([^/]+)$/);
    if (plannerUpdateMatch && method === 'PUT') {
      const entryId = plannerUpdateMatch[1];
      const entry = await env.DB.prepare('SELECT * FROM officeroad_planner WHERE id = ?').bind(entryId).first();
      if (!entry) return json({ error: 'Planner entry not found' }, 404);

      const body = await request.json();
      const { time_block, title, description, priority, category, completed } = body;

      await env.DB.prepare(
        'UPDATE officeroad_planner SET time_block = ?, title = ?, description = ?, priority = ?, category = ?, completed = ? WHERE id = ?'
      ).bind(
        time_block || entry.time_block, title || entry.title,
        description !== undefined ? description : entry.description,
        priority || entry.priority, category || entry.category,
        completed !== undefined ? (completed ? 1 : 0) : entry.completed, entryId
      ).run();

      return json({ ok: true, entry_id: entryId, completed: completed !== undefined ? completed : !!entry.completed });
    }

    // DELETE /api/planner/:id — delete a planner entry
    if (plannerUpdateMatch && method === 'DELETE') {
      const entryId = plannerUpdateMatch[1];
      await env.DB.prepare('DELETE FROM officeroad_planner WHERE id = ?').bind(entryId).run();
      return json({ ok: true, deleted: entryId });
    }

    // POST /api/planner/priorities — set daily priorities
    if (path === '/api/planner/priorities' && method === 'POST') {
      const body = await request.json();
      const { agent_name, date, top_priorities, notes } = body;
      if (!agent_name || !top_priorities) return json({ error: 'agent_name, top_priorities required' }, 400);

      const entryDate = date || new Date().toISOString().split('T')[0];
      const existing = await env.DB.prepare(
        'SELECT * FROM officeroad_planner_priorities WHERE LOWER(agent_name) = LOWER(?) AND date = ?'
      ).bind(agent_name, entryDate).first();

      if (existing) {
        await env.DB.prepare(
          "UPDATE officeroad_planner_priorities SET top_priorities = ?, notes = ?, updated_at = datetime('now') WHERE id = ?"
        ).bind(JSON.stringify(top_priorities), notes || existing.notes, existing.id).run();
        return json({ ok: true, updated: true, date: entryDate });
      }

      const prioId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_planner_priorities (id, agent_name, date, top_priorities, notes) VALUES (?, ?, ?, ?, ?)'
      ).bind(prioId, agent_name, entryDate, JSON.stringify(top_priorities), notes || null).run();

      return json({ ok: true, priority_id: prioId, date: entryDate }, 201);
    }

    // GET /api/planner/summary — productivity summary for an agent
    if (path === '/api/planner/summary' && method === 'GET') {
      const agent = url.searchParams.get('agent');
      if (!agent) return json({ error: 'agent query param required' }, 400);

      const today = new Date().toISOString().split('T')[0];
      const todayEntries = await env.DB.prepare(
        'SELECT * FROM officeroad_planner WHERE LOWER(agent_name) = LOWER(?) AND date = ?'
      ).bind(agent, today).all();

      const weekEntries = await env.DB.prepare(
        "SELECT date, COUNT(*) as total, SUM(completed) as done FROM officeroad_planner WHERE LOWER(agent_name) = LOWER(?) AND date >= date('now', '-7 days') GROUP BY date ORDER BY date"
      ).bind(agent).all();

      const totalToday = (todayEntries.results || []).length;
      const completedToday = (todayEntries.results || []).filter(e => e.completed).length;

      return json({
        summary: {
          agent,
          today: { total: totalToday, completed: completedToday, completion_rate: totalToday > 0 ? Math.round((completedToday / totalToday) * 100) : 0 },
          weekly: (weekEntries.results || []).map(w => ({ date: w.date, total: w.total, completed: w.done || 0 })),
        },
      });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Training Programs — /api/training
    // ═══════════════════════════════════════════════════════════

    // GET /api/training — list training programs
    if (path === '/api/training' && method === 'GET') {
      const category = url.searchParams.get('category');
      const difficulty = url.searchParams.get('difficulty');
      const status = url.searchParams.get('status') || 'active';
      let query = 'SELECT * FROM officeroad_training';
      const params = [];
      const conditions = [];
      if (category) { conditions.push('LOWER(category) = LOWER(?)'); params.push(category); }
      if (difficulty) { conditions.push('difficulty = ?'); params.push(difficulty); }
      if (status !== 'all') { conditions.push('status = ?'); params.push(status); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY created_at DESC';
      const training = await env.DB.prepare(query).bind(...params).all();

      const enriched = [];
      for (const t of (training.results || [])) {
        const enrollCount = await env.DB.prepare(
          'SELECT COUNT(*) as count FROM officeroad_training_enrollment WHERE training_id = ?'
        ).bind(t.id).first();
        const completedCount = await env.DB.prepare(
          'SELECT COUNT(*) as count FROM officeroad_training_enrollment WHERE training_id = ? AND completed_at IS NOT NULL'
        ).bind(t.id).first();
        enriched.push({
          ...t,
          modules: JSON.parse(t.modules || '[]'),
          enrolled: enrollCount?.count || 0,
          completed: completedCount?.count || 0,
        });
      }
      return json({ training: enriched });
    }

    // GET /api/training/:id — get training with enrollment details
    const trainingDetailMatch = path.match(/^\/api\/training\/([^/]+)$/);
    if (trainingDetailMatch && method === 'GET') {
      const trainingId = trainingDetailMatch[1];
      const training = await env.DB.prepare('SELECT * FROM officeroad_training WHERE id = ?').bind(trainingId).first();
      if (!training) return json({ error: 'Training program not found' }, 404);

      const enrollments = await env.DB.prepare(
        'SELECT * FROM officeroad_training_enrollment WHERE training_id = ? ORDER BY enrolled_at DESC'
      ).bind(trainingId).all();

      return json({
        training: { ...training, modules: JSON.parse(training.modules || '[]') },
        enrollments: (enrollments.results || []).map(e => ({
          ...e, completed_modules: JSON.parse(e.completed_modules || '[]'),
        })),
      });
    }

    // POST /api/training — create a training program
    if (path === '/api/training' && method === 'POST') {
      const body = await request.json();
      const { title, description, category, difficulty, duration_minutes, instructor, modules, max_enrollment } = body;
      if (!title) return json({ error: 'title required' }, 400);

      const trainingId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_training (id, title, description, category, difficulty, duration_minutes, instructor, modules, max_enrollment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(
        trainingId, title, description || '', category || 'general',
        difficulty || 'beginner', duration_minutes || 60,
        instructor || null, modules ? JSON.stringify(modules) : '[]',
        max_enrollment || null
      ).run();

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), instructor || 'system', 'training_created', `New training: ${title} (${difficulty || 'beginner'})`, 4).run();

      stampChain('training_created', trainingId, title);
      return json({ ok: true, training_id: trainingId, title }, 201);
    }

    // POST /api/training/:id/enroll — enroll in a training program
    const trainingEnrollMatch = path.match(/^\/api\/training\/([^/]+)\/enroll$/);
    if (trainingEnrollMatch && method === 'POST') {
      const trainingId = trainingEnrollMatch[1];
      const training = await env.DB.prepare('SELECT * FROM officeroad_training WHERE id = ?').bind(trainingId).first();
      if (!training) return json({ error: 'Training program not found' }, 404);

      const body = await request.json();
      const { agent_name } = body;
      if (!agent_name) return json({ error: 'agent_name required' }, 400);

      // Check already enrolled
      const existing = await env.DB.prepare(
        'SELECT * FROM officeroad_training_enrollment WHERE training_id = ? AND LOWER(agent_name) = LOWER(?)'
      ).bind(trainingId, agent_name).first();
      if (existing) return json({ error: 'Already enrolled', enrollment_id: existing.id }, 409);

      // Check capacity
      if (training.max_enrollment) {
        const count = await env.DB.prepare(
          'SELECT COUNT(*) as count FROM officeroad_training_enrollment WHERE training_id = ?'
        ).bind(trainingId).first();
        if ((count?.count || 0) >= training.max_enrollment) return json({ error: 'Training is full' }, 400);
      }

      const enrollId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_training_enrollment (id, training_id, agent_name) VALUES (?, ?, ?)'
      ).bind(enrollId, trainingId, agent_name).run();

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), agent_name, 'training_enrolled', `Enrolled in: ${training.title}`, 4).run();

      return json({ ok: true, enrollment_id: enrollId, training: training.title }, 201);
    }

    // PUT /api/training/:id/progress — update progress for an enrollment
    const trainingProgressMatch = path.match(/^\/api\/training\/([^/]+)\/progress$/);
    if (trainingProgressMatch && method === 'PUT') {
      const trainingId = trainingProgressMatch[1];
      const body = await request.json();
      const { agent_name, progress, completed_module, score } = body;
      if (!agent_name) return json({ error: 'agent_name required' }, 400);

      const enrollment = await env.DB.prepare(
        'SELECT * FROM officeroad_training_enrollment WHERE training_id = ? AND LOWER(agent_name) = LOWER(?)'
      ).bind(trainingId, agent_name).first();
      if (!enrollment) return json({ error: 'Not enrolled in this training' }, 404);

      const completedModules = JSON.parse(enrollment.completed_modules || '[]');
      if (completed_module && !completedModules.includes(completed_module)) {
        completedModules.push(completed_module);
      }

      const training = await env.DB.prepare('SELECT * FROM officeroad_training WHERE id = ?').bind(trainingId).first();
      const totalModules = training ? JSON.parse(training.modules || '[]').length : 1;
      const newProgress = progress !== undefined ? progress : Math.round((completedModules.length / Math.max(totalModules, 1)) * 100);
      const isComplete = newProgress >= 100;

      const stmts = [
        env.DB.prepare(
          'UPDATE officeroad_training_enrollment SET progress = ?, completed_modules = ?, score = ?, completed_at = ? WHERE id = ?'
        ).bind(
          Math.min(100, newProgress), JSON.stringify(completedModules),
          score !== undefined ? score : enrollment.score,
          isComplete && !enrollment.completed_at ? new Date().toISOString() : enrollment.completed_at,
          enrollment.id
        ),
      ];

      // Issue certification on completion
      if (isComplete && !enrollment.completed_at && training) {
        stmts.push(env.DB.prepare(
          'INSERT INTO officeroad_certifications (id, agent_name, training_id, title) VALUES (?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), agent_name, trainingId, training.title));
        stmts.push(env.DB.prepare(
          'UPDATE officeroad_training_enrollment SET certified = 1 WHERE id = ?'
        ).bind(enrollment.id));
        stmts.push(env.DB.prepare(
          'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), agent_name, 'training_completed', `Completed training: ${training.title}`, 4));
        earnCoin(agent_name, 'training_completed', 0.1);
      }

      await env.DB.batch(stmts);
      return json({ ok: true, progress: Math.min(100, newProgress), completed: isComplete, certified: isComplete && !enrollment.completed_at });
    }

    // GET /api/training/certifications — list certifications
    if (path === '/api/training/certifications' && method === 'GET') {
      const agent = url.searchParams.get('agent');
      let query = 'SELECT * FROM officeroad_certifications';
      if (agent) query += ' WHERE LOWER(agent_name) = LOWER(?)';
      query += ' ORDER BY issued_at DESC';
      const certs = agent
        ? await env.DB.prepare(query).bind(agent).all()
        : await env.DB.prepare(query).all();
      return json({ certifications: certs.results || [] });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Office Integrations — /api/integrations
    // ═══════════════════════════════════════════════════════════

    // GET /api/integrations — list all integrations
    if (path === '/api/integrations' && method === 'GET') {
      const type = url.searchParams.get('type');
      const status = url.searchParams.get('status');
      let query = 'SELECT id, name, type, status, webhook_url, last_sync, sync_frequency, created_by, created_at, updated_at FROM officeroad_integrations';
      const params = [];
      const conditions = [];
      if (type) { conditions.push('type = ?'); params.push(type); }
      if (status) { conditions.push('status = ?'); params.push(status); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY name';
      const integrations = await env.DB.prepare(query).bind(...params).all();
      return json({ integrations: integrations.results || [] });
    }

    // GET /api/integrations/:id — get integration details with recent logs
    const integrationDetailMatch = path.match(/^\/api\/integrations\/([^/]+)$/);
    if (integrationDetailMatch && method === 'GET') {
      const intId = integrationDetailMatch[1];
      const integration = await env.DB.prepare(
        'SELECT id, name, type, config, status, webhook_url, last_sync, sync_frequency, created_by, created_at, updated_at FROM officeroad_integrations WHERE id = ?'
      ).bind(intId).first();
      if (!integration) return json({ error: 'Integration not found' }, 404);

      const logs = await env.DB.prepare(
        'SELECT * FROM officeroad_integration_logs WHERE integration_id = ? ORDER BY created_at DESC LIMIT 20'
      ).bind(intId).all();

      return json({
        integration: { ...integration, config: JSON.parse(integration.config || '{}') },
        logs: logs.results || [],
      });
    }

    // POST /api/integrations — create an integration
    if (path === '/api/integrations' && method === 'POST') {
      const body = await request.json();
      const { name, type, config, webhook_url, sync_frequency, created_by } = body;
      if (!name || !type || !created_by) return json({ error: 'name, type, created_by required' }, 400);

      const validTypes = ['calendar', 'email', 'chat', 'crm', 'analytics', 'notification', 'webhook', 'custom'];
      if (!validTypes.includes(type)) return json({ error: `Invalid type. Options: ${validTypes.join(', ')}` }, 400);

      const intId = crypto.randomUUID();
      await env.DB.batch([
        env.DB.prepare(
          'INSERT INTO officeroad_integrations (id, name, type, config, webhook_url, sync_frequency, created_by) VALUES (?, ?, ?, ?, ?, ?, ?)'
        ).bind(intId, name, type, config ? JSON.stringify(config) : '{}', webhook_url || null, sync_frequency || 'hourly', created_by),
        env.DB.prepare(
          'INSERT INTO officeroad_integration_logs (id, integration_id, action, status, details) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), intId, 'created', 'success', `Integration "${name}" (${type}) created by ${created_by}`),
        env.DB.prepare(
          'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), created_by, 'integration_created', `New integration: ${name} (${type})`, null),
      ]);

      stampChain('integration_created', intId, name);
      return json({ ok: true, integration_id: intId, name, type }, 201);
    }

    // PUT /api/integrations/:id — update an integration
    if (integrationDetailMatch && method === 'PUT') {
      const intId = integrationDetailMatch[1];
      const integration = await env.DB.prepare('SELECT * FROM officeroad_integrations WHERE id = ?').bind(intId).first();
      if (!integration) return json({ error: 'Integration not found' }, 404);

      const body = await request.json();
      const { name, config, status, webhook_url, sync_frequency } = body;

      await env.DB.prepare(
        "UPDATE officeroad_integrations SET name = ?, config = ?, status = ?, webhook_url = ?, sync_frequency = ?, updated_at = datetime('now') WHERE id = ?"
      ).bind(
        name || integration.name,
        config ? JSON.stringify(config) : integration.config,
        status || integration.status,
        webhook_url !== undefined ? webhook_url : integration.webhook_url,
        sync_frequency || integration.sync_frequency, intId
      ).run();

      await env.DB.prepare(
        'INSERT INTO officeroad_integration_logs (id, integration_id, action, status, details) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), intId, 'updated', 'success', `Integration updated`).run();

      return json({ ok: true, integration_id: intId });
    }

    // POST /api/integrations/:id/sync — trigger a sync
    const integrationSyncMatch = path.match(/^\/api\/integrations\/([^/]+)\/sync$/);
    if (integrationSyncMatch && method === 'POST') {
      const intId = integrationSyncMatch[1];
      const integration = await env.DB.prepare('SELECT * FROM officeroad_integrations WHERE id = ?').bind(intId).first();
      if (!integration) return json({ error: 'Integration not found' }, 404);
      if (integration.status !== 'active') return json({ error: 'Integration is not active' }, 400);

      // Log the sync attempt
      await env.DB.batch([
        env.DB.prepare(
          "UPDATE officeroad_integrations SET last_sync = datetime('now'), updated_at = datetime('now') WHERE id = ?"
        ).bind(intId),
        env.DB.prepare(
          'INSERT INTO officeroad_integration_logs (id, integration_id, action, status, details) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), intId, 'sync', 'success', `Manual sync triggered for ${integration.name}`),
      ]);

      // If webhook, attempt to call it
      if (integration.webhook_url) {
        try {
          await fetch(integration.webhook_url, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ event: 'sync', integration_id: intId, name: integration.name, timestamp: new Date().toISOString() }),
          });
        } catch (e) {
          await env.DB.prepare(
            'INSERT INTO officeroad_integration_logs (id, integration_id, action, status, details) VALUES (?, ?, ?, ?, ?)'
          ).bind(crypto.randomUUID(), intId, 'webhook_call', 'error', `Webhook failed: ${e.message}`).run();
        }
      }

      return json({ ok: true, integration_id: intId, synced_at: new Date().toISOString() });
    }

    // DELETE /api/integrations/:id — remove an integration
    if (integrationDetailMatch && method === 'DELETE') {
      const intId = integrationDetailMatch[1];
      await env.DB.batch([
        env.DB.prepare('DELETE FROM officeroad_integrations WHERE id = ?').bind(intId),
        env.DB.prepare('DELETE FROM officeroad_integration_logs WHERE integration_id = ?').bind(intId),
      ]);
      return json({ ok: true, deleted: intId });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Parking System — /api/parking
    // ═══════════════════════════════════════════════════════════

    // GET /api/parking — list parking spots
    if (path === '/api/parking' && method === 'GET') {
      const level = url.searchParams.get('level');
      const status = url.searchParams.get('status');
      const type = url.searchParams.get('type');
      let query = 'SELECT * FROM officeroad_parking_spots';
      const params = [];
      const conditions = [];
      if (level) { conditions.push('floor_level = ?'); params.push(level); }
      if (status) { conditions.push('status = ?'); params.push(status); }
      if (type) { conditions.push('type = ?'); params.push(type); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY spot_number';
      const spots = await env.DB.prepare(query).bind(...params).all();

      // Get today's reservations
      const today = new Date().toISOString().split('T')[0];
      const reservations = await env.DB.prepare(
        "SELECT * FROM officeroad_parking_reservations WHERE reserved_date = ? AND status = 'active'"
      ).bind(today).all();

      const reservationMap = {};
      for (const r of (reservations.results || [])) {
        reservationMap[r.spot_id] = r;
      }

      const enriched = (spots.results || []).map(s => ({
        ...s,
        today_reservation: reservationMap[s.id] || null,
      }));

      const available = enriched.filter(s => s.status === 'available' && !s.today_reservation).length;
      const total = enriched.length;

      return json({ spots: enriched, total, available, occupancy_rate: total > 0 ? Math.round(((total - available) / total) * 100) : 0 });
    }

    // POST /api/parking/spots — add parking spots (bulk)
    if (path === '/api/parking/spots' && method === 'POST') {
      const body = await request.json();
      const { spots } = body;
      if (!spots || !Array.isArray(spots)) return json({ error: 'spots array required' }, 400);

      const stmts = spots.map(s => env.DB.prepare(
        'INSERT OR IGNORE INTO officeroad_parking_spots (id, spot_number, type, floor_level, is_visitor, is_ev_charging) VALUES (?, ?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), s.spot_number, s.type || 'standard', s.floor_level || 'B1', s.is_visitor ? 1 : 0, s.is_ev_charging ? 1 : 0));

      if (stmts.length > 0) await env.DB.batch(stmts);
      return json({ ok: true, created: stmts.length }, 201);
    }

    // POST /api/parking/reserve — reserve a parking spot
    if (path === '/api/parking/reserve' && method === 'POST') {
      const body = await request.json();
      const { spot_id, agent_name, vehicle_info, reserved_date, start_time, end_time, is_visitor, visitor_name } = body;
      if (!agent_name || !reserved_date) return json({ error: 'agent_name, reserved_date required' }, 400);

      let spotToReserve = spot_id;

      // If no specific spot, find an available one
      if (!spotToReserve) {
        const isVisitor = is_visitor ? 1 : 0;
        const availableSpot = await env.DB.prepare(
          "SELECT s.* FROM officeroad_parking_spots s WHERE s.status = 'available' AND s.is_visitor = ? AND s.id NOT IN (SELECT spot_id FROM officeroad_parking_reservations WHERE reserved_date = ? AND status = 'active') ORDER BY s.spot_number LIMIT 1"
        ).bind(isVisitor, reserved_date).first();

        if (!availableSpot) return json({ error: 'No available parking spots' }, 400);
        spotToReserve = availableSpot.id;
      }

      // Check for existing reservation on the spot for that date
      const existing = await env.DB.prepare(
        "SELECT * FROM officeroad_parking_reservations WHERE spot_id = ? AND reserved_date = ? AND status = 'active'"
      ).bind(spotToReserve, reserved_date).first();
      if (existing) return json({ error: 'Spot already reserved for this date', reserved_by: existing.agent_name }, 409);

      const resId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_parking_reservations (id, spot_id, agent_name, vehicle_info, reserved_date, start_time, end_time, is_visitor, visitor_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(resId, spotToReserve, agent_name, vehicle_info || null, reserved_date, start_time || null, end_time || null, is_visitor ? 1 : 0, visitor_name || null).run();

      const spot = await env.DB.prepare('SELECT * FROM officeroad_parking_spots WHERE id = ?').bind(spotToReserve).first();
      stampChain('parking_reserved', resId, `${agent_name} spot ${spot?.spot_number || spotToReserve}`);

      return json({ ok: true, reservation_id: resId, spot_id: spotToReserve, spot_number: spot?.spot_number, date: reserved_date }, 201);
    }

    // DELETE /api/parking/reserve/:id — cancel a reservation
    const parkingCancelMatch = path.match(/^\/api\/parking\/reserve\/([^/]+)$/);
    if (parkingCancelMatch && method === 'DELETE') {
      const resId = parkingCancelMatch[1];
      await env.DB.prepare("UPDATE officeroad_parking_reservations SET status = 'cancelled' WHERE id = ?").bind(resId).run();
      return json({ ok: true, cancelled: resId });
    }

    // GET /api/parking/reservations — list reservations for a date
    if (path === '/api/parking/reservations' && method === 'GET') {
      const date = url.searchParams.get('date') || new Date().toISOString().split('T')[0];
      const agent = url.searchParams.get('agent');
      let query = "SELECT r.*, s.spot_number, s.floor_level, s.type as spot_type FROM officeroad_parking_reservations r LEFT JOIN officeroad_parking_spots s ON r.spot_id = s.id WHERE r.reserved_date = ? AND r.status = 'active'";
      const params = [date];
      if (agent) { query += ' AND LOWER(r.agent_name) = LOWER(?)'; params.push(agent); }
      query += ' ORDER BY s.spot_number';
      const reservations = await env.DB.prepare(query).bind(...params).all();
      return json({ reservations: reservations.results || [], date });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Cafeteria Menu — /api/cafeteria
    // ═══════════════════════════════════════════════════════════

    // GET /api/cafeteria — get today's menu
    if (path === '/api/cafeteria' && method === 'GET') {
      const date = url.searchParams.get('date') || new Date().toISOString().split('T')[0];
      const meal = url.searchParams.get('meal');
      let query = 'SELECT * FROM officeroad_cafeteria_menu WHERE date = ?';
      const params = [date];
      if (meal) { query += ' AND meal_type = ?'; params.push(meal); }
      query += ' ORDER BY meal_type, category, item_name';
      const menu = await env.DB.prepare(query).bind(...params).all();

      // Get order counts for each item
      const orders = await env.DB.prepare(
        "SELECT menu_item_id, COUNT(*) as count, SUM(quantity) as total_qty FROM officeroad_cafeteria_orders WHERE date = ? AND status != 'cancelled' GROUP BY menu_item_id"
      ).bind(date).all();
      const orderMap = {};
      for (const o of (orders.results || [])) orderMap[o.menu_item_id] = { orders: o.count, quantity: o.total_qty };

      const enriched = (menu.results || []).map(m => ({
        ...m,
        dietary_tags: JSON.parse(m.dietary_tags || '[]'),
        order_count: orderMap[m.id]?.orders || 0,
        total_ordered: orderMap[m.id]?.quantity || 0,
        sold_out: m.available_quantity !== null && m.available_quantity !== undefined && (orderMap[m.id]?.quantity || 0) >= m.available_quantity,
      }));

      return json({ menu: enriched, date });
    }

    // POST /api/cafeteria/menu — add menu items
    if (path === '/api/cafeteria/menu' && method === 'POST') {
      const body = await request.json();
      const { items, date } = body;
      if (!items || !Array.isArray(items)) return json({ error: 'items array required' }, 400);

      const menuDate = date || new Date().toISOString().split('T')[0];
      const stmts = items.map(item => env.DB.prepare(
        'INSERT INTO officeroad_cafeteria_menu (id, date, meal_type, item_name, description, category, price, calories, dietary_tags, available_quantity) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(
        crypto.randomUUID(), menuDate, item.meal_type || 'lunch',
        item.item_name, item.description || null, item.category || 'main',
        item.price || 0, item.calories || null,
        item.dietary_tags ? JSON.stringify(item.dietary_tags) : '[]',
        item.available_quantity || null
      ));

      if (stmts.length > 0) await env.DB.batch(stmts);

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), 'system', 'menu_updated', `${items.length} items added to ${menuDate} menu`, 0).run();

      return json({ ok: true, items_added: items.length, date: menuDate }, 201);
    }

    // POST /api/cafeteria/order — place a pre-order
    if (path === '/api/cafeteria/order' && method === 'POST') {
      const body = await request.json();
      const { agent_name, menu_item_id, quantity, special_requests, pickup_time } = body;
      if (!agent_name || !menu_item_id) return json({ error: 'agent_name, menu_item_id required' }, 400);

      const menuItem = await env.DB.prepare('SELECT * FROM officeroad_cafeteria_menu WHERE id = ?').bind(menu_item_id).first();
      if (!menuItem) return json({ error: 'Menu item not found' }, 404);

      // Check availability
      if (menuItem.available_quantity !== null && menuItem.available_quantity !== undefined) {
        const ordered = await env.DB.prepare(
          "SELECT SUM(quantity) as total FROM officeroad_cafeteria_orders WHERE menu_item_id = ? AND date = ? AND status != 'cancelled'"
        ).bind(menu_item_id, menuItem.date).first();
        if ((ordered?.total || 0) + (quantity || 1) > menuItem.available_quantity) {
          return json({ error: 'Item is sold out or insufficient quantity' }, 400);
        }
      }

      const orderId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_cafeteria_orders (id, agent_name, menu_item_id, date, quantity, special_requests, pickup_time) VALUES (?, ?, ?, ?, ?, ?, ?)'
      ).bind(orderId, agent_name, menu_item_id, menuItem.date, quantity || 1, special_requests || null, pickup_time || null).run();

      return json({ ok: true, order_id: orderId, item: menuItem.item_name, quantity: quantity || 1, date: menuItem.date }, 201);
    }

    // GET /api/cafeteria/orders — get orders for a date or agent
    if (path === '/api/cafeteria/orders' && method === 'GET') {
      const date = url.searchParams.get('date') || new Date().toISOString().split('T')[0];
      const agent = url.searchParams.get('agent');
      let query = 'SELECT o.*, m.item_name, m.meal_type, m.price, m.category FROM officeroad_cafeteria_orders o LEFT JOIN officeroad_cafeteria_menu m ON o.menu_item_id = m.id WHERE o.date = ?';
      const params = [date];
      if (agent) { query += ' AND LOWER(o.agent_name) = LOWER(?)'; params.push(agent); }
      query += ' ORDER BY o.created_at DESC';
      const orders = await env.DB.prepare(query).bind(...params).all();
      return json({ orders: orders.results || [], date });
    }

    // PUT /api/cafeteria/order/:id — update order status
    const cafeteriaOrderUpdateMatch = path.match(/^\/api\/cafeteria\/order\/([^/]+)$/);
    if (cafeteriaOrderUpdateMatch && method === 'PUT') {
      const orderId = cafeteriaOrderUpdateMatch[1];
      const body = await request.json();
      const { status } = body;
      if (!status || !['pending', 'preparing', 'ready', 'picked_up', 'cancelled'].includes(status)) {
        return json({ error: 'status must be pending, preparing, ready, picked_up, or cancelled' }, 400);
      }
      await env.DB.prepare('UPDATE officeroad_cafeteria_orders SET status = ? WHERE id = ?').bind(status, orderId).run();
      return json({ ok: true, order_id: orderId, status });
    }

    // GET /api/cafeteria/preferences/:agent — get dietary preferences
    const dietaryPrefMatch = path.match(/^\/api\/cafeteria\/preferences\/([^/]+)$/);
    if (dietaryPrefMatch && method === 'GET') {
      const agentName = decodeURIComponent(dietaryPrefMatch[1]);
      const prefs = await env.DB.prepare(
        'SELECT * FROM officeroad_dietary_preferences WHERE LOWER(agent_name) = LOWER(?)'
      ).bind(agentName).first();
      if (!prefs) return json({ agent: agentName, preferences: [], allergies: [], notes: null });
      return json({
        agent: agentName,
        preferences: JSON.parse(prefs.preferences || '[]'),
        allergies: JSON.parse(prefs.allergies || '[]'),
        notes: prefs.notes,
      });
    }

    // PUT /api/cafeteria/preferences/:agent — set dietary preferences
    if (dietaryPrefMatch && method === 'PUT') {
      const agentName = decodeURIComponent(dietaryPrefMatch[1]);
      const body = await request.json();
      const { preferences, allergies, notes } = body;

      const existing = await env.DB.prepare(
        'SELECT * FROM officeroad_dietary_preferences WHERE LOWER(agent_name) = LOWER(?)'
      ).bind(agentName).first();

      if (existing) {
        await env.DB.prepare(
          "UPDATE officeroad_dietary_preferences SET preferences = ?, allergies = ?, notes = ?, updated_at = datetime('now') WHERE id = ?"
        ).bind(
          preferences ? JSON.stringify(preferences) : existing.preferences,
          allergies ? JSON.stringify(allergies) : existing.allergies,
          notes !== undefined ? notes : existing.notes, existing.id
        ).run();
      } else {
        await env.DB.prepare(
          'INSERT INTO officeroad_dietary_preferences (id, agent_name, preferences, allergies, notes) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), agentName, preferences ? JSON.stringify(preferences) : '[]', allergies ? JSON.stringify(allergies) : '[]', notes || null).run();
      }

      return json({ ok: true, agent: agentName });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Lost & Found — /api/lost-found
    // ═══════════════════════════════════════════════════════════

    // GET /api/lost-found — list lost/found items
    if (path === '/api/lost-found' && method === 'GET') {
      const type = url.searchParams.get('type');
      const status = url.searchParams.get('status') || 'open';
      const category = url.searchParams.get('category');
      const q = url.searchParams.get('q');
      let query = 'SELECT * FROM officeroad_lost_found';
      const params = [];
      const conditions = [];
      if (type) { conditions.push('type = ?'); params.push(type); }
      if (status !== 'all') { conditions.push('status = ?'); params.push(status); }
      if (category) { conditions.push('category = ?'); params.push(category); }
      if (q) { conditions.push('(LOWER(item_name) LIKE ? OR LOWER(description) LIKE ?)'); params.push(`%${q.toLowerCase()}%`, `%${q.toLowerCase()}%`); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY created_at DESC LIMIT 50';
      const items = await env.DB.prepare(query).bind(...params).all();
      return json({ items: items.results || [] });
    }

    // GET /api/lost-found/:id — get item detail
    const lostFoundDetailMatch = path.match(/^\/api\/lost-found\/([^/]+)$/);
    if (lostFoundDetailMatch && method === 'GET') {
      const itemId = lostFoundDetailMatch[1];
      const item = await env.DB.prepare('SELECT * FROM officeroad_lost_found WHERE id = ?').bind(itemId).first();
      if (!item) return json({ error: 'Item not found' }, 404);

      // Find potential matches
      const matchType = item.type === 'lost' ? 'found' : 'lost';
      const matches = await env.DB.prepare(
        "SELECT * FROM officeroad_lost_found WHERE type = ? AND status = 'open' AND (LOWER(item_name) LIKE ? OR LOWER(category) = LOWER(?)) AND id != ? LIMIT 5"
      ).bind(matchType, `%${item.item_name.toLowerCase().split(' ')[0]}%`, item.category, item.id).all();

      return json({ item, potential_matches: matches.results || [] });
    }

    // POST /api/lost-found — report a lost or found item
    if (path === '/api/lost-found' && method === 'POST') {
      const body = await request.json();
      const { type, item_name, description, category, floor, location_detail, reported_by, contact_info, image_url } = body;
      if (!item_name || !reported_by) return json({ error: 'item_name, reported_by required' }, 400);
      if (type && !['lost', 'found'].includes(type)) return json({ error: 'type must be lost or found' }, 400);

      const itemId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_lost_found (id, type, item_name, description, category, floor, location_detail, reported_by, contact_info, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(
        itemId, type || 'lost', item_name, description || null,
        category || 'other', floor !== undefined ? floor : null,
        location_detail || null, reported_by, contact_info || null, image_url || null
      ).run();

      // Auto-match: search for potential matches
      const matchType = (type || 'lost') === 'lost' ? 'found' : 'lost';
      const matches = await env.DB.prepare(
        "SELECT * FROM officeroad_lost_found WHERE type = ? AND status = 'open' AND (LOWER(item_name) LIKE ? OR LOWER(category) = ?) LIMIT 3"
      ).bind(matchType, `%${item_name.toLowerCase().split(' ')[0]}%`, (category || 'other').toLowerCase()).all();

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), reported_by, `${type || 'lost'}_reported`, `${type || 'Lost'}: ${item_name}`, floor || 0).run();

      stampChain(`${type || 'lost'}_reported`, itemId, item_name);
      return json({
        ok: true, item_id: itemId, type: type || 'lost', item_name,
        potential_matches: (matches.results || []).length > 0 ? matches.results : null,
      }, 201);
    }

    // PUT /api/lost-found/:id/claim — claim a found item or mark lost item as found
    const lostFoundClaimMatch = path.match(/^\/api\/lost-found\/([^/]+)\/claim$/);
    if (lostFoundClaimMatch && method === 'PUT') {
      const itemId = lostFoundClaimMatch[1];
      const item = await env.DB.prepare('SELECT * FROM officeroad_lost_found WHERE id = ?').bind(itemId).first();
      if (!item) return json({ error: 'Item not found' }, 404);
      if (item.status !== 'open') return json({ error: 'Item is no longer available' }, 400);

      const body = await request.json();
      const { claimed_by, matched_with } = body;
      if (!claimed_by) return json({ error: 'claimed_by required' }, 400);

      await env.DB.prepare(
        "UPDATE officeroad_lost_found SET status = 'claimed', claimed_by = ?, claimed_at = datetime('now'), matched_with = ?, updated_at = datetime('now') WHERE id = ?"
      ).bind(claimed_by, matched_with || null, itemId).run();

      // If matched with another item, close that too
      if (matched_with) {
        await env.DB.prepare(
          "UPDATE officeroad_lost_found SET status = 'matched', matched_with = ?, updated_at = datetime('now') WHERE id = ?"
        ).bind(itemId, matched_with).run();
      }

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), claimed_by, 'item_claimed', `Claimed: ${item.item_name}`, item.floor).run();

      return json({ ok: true, item_id: itemId, claimed_by, status: 'claimed' });
    }

    // PUT /api/lost-found/:id — update item status
    if (lostFoundDetailMatch && method === 'PUT') {
      const itemId = lostFoundDetailMatch[1];
      const item = await env.DB.prepare('SELECT * FROM officeroad_lost_found WHERE id = ?').bind(itemId).first();
      if (!item) return json({ error: 'Item not found' }, 404);

      const body = await request.json();
      const { status, description, location_detail } = body;

      await env.DB.prepare(
        "UPDATE officeroad_lost_found SET status = ?, description = ?, location_detail = ?, updated_at = datetime('now') WHERE id = ?"
      ).bind(
        status || item.status,
        description !== undefined ? description : item.description,
        location_detail !== undefined ? location_detail : item.location_detail, itemId
      ).run();

      return json({ ok: true, item_id: itemId, status: status || item.status });
    }

    // ═══════════════════════════════════════════════════════════
    // NEW FEATURE: Office Games — /api/games
    // ═══════════════════════════════════════════════════════════

    // GET /api/games — list games
    if (path === '/api/games' && method === 'GET') {
      const type = url.searchParams.get('type');
      const status = url.searchParams.get('status') || 'active';
      let query = 'SELECT * FROM officeroad_games';
      const params = [];
      const conditions = [];
      if (type) { conditions.push('type = ?'); params.push(type); }
      if (status !== 'all') { conditions.push('status = ?'); params.push(status); }
      if (conditions.length) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY created_at DESC';
      const games = await env.DB.prepare(query).bind(...params).all();

      const enriched = [];
      for (const game of (games.results || [])) {
        const playerCount = await env.DB.prepare(
          'SELECT COUNT(DISTINCT agent_name) as count FROM officeroad_game_scores WHERE game_id = ?'
        ).bind(game.id).first();
        const topScores = await env.DB.prepare(
          'SELECT agent_name, score FROM officeroad_game_scores WHERE game_id = ? ORDER BY score DESC LIMIT 5'
        ).bind(game.id).all();
        enriched.push({
          ...game,
          players: playerCount?.count || 0,
          top_scores: topScores.results || [],
        });
      }
      return json({ games: enriched });
    }

    // GET /api/games/:id — get game details with leaderboard
    const gameDetailMatch = path.match(/^\/api\/games\/([^/]+)$/);
    if (gameDetailMatch && method === 'GET') {
      const gameId = gameDetailMatch[1];
      const game = await env.DB.prepare('SELECT * FROM officeroad_games WHERE id = ?').bind(gameId).first();
      if (!game) return json({ error: 'Game not found' }, 404);

      const scores = await env.DB.prepare(
        'SELECT * FROM officeroad_game_scores WHERE game_id = ? ORDER BY score DESC'
      ).bind(gameId).all();

      // Assign ranks
      const ranked = (scores.results || []).map((s, i) => ({ ...s, rank: i + 1, answers: JSON.parse(s.answers || '[]') }));

      return json({ game, leaderboard: ranked, total_players: ranked.length });
    }

    // POST /api/games — create a game
    if (path === '/api/games' && method === 'POST') {
      const body = await request.json();
      const { title, type, description, rules, created_by, start_date, end_date, max_players, questions } = body;
      if (!title || !created_by) return json({ error: 'title, created_by required' }, 400);

      const validTypes = ['trivia', 'quiz', 'challenge', 'puzzle', 'tournament', 'scavenger_hunt'];
      const gameType = validTypes.includes(type) ? type : 'trivia';

      const gameId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_games (id, title, type, description, rules, created_by, start_date, end_date, max_players, current_question) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(
        gameId, title, gameType, description || null, rules || null,
        created_by, start_date || new Date().toISOString().split('T')[0],
        end_date || null, max_players || null,
        questions ? JSON.stringify(questions) : null
      ).run();

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), created_by, 'game_created', `New game: ${title} (${gameType})`, null).run();

      stampChain('game_created', gameId, title);
      return json({ ok: true, game_id: gameId, title, type: gameType }, 201);
    }

    // POST /api/games/:id/join — join a game
    const gameJoinMatch = path.match(/^\/api\/games\/([^/]+)\/join$/);
    if (gameJoinMatch && method === 'POST') {
      const gameId = gameJoinMatch[1];
      const game = await env.DB.prepare('SELECT * FROM officeroad_games WHERE id = ?').bind(gameId).first();
      if (!game) return json({ error: 'Game not found' }, 404);
      if (game.status !== 'active') return json({ error: 'Game is not active' }, 400);

      const body = await request.json();
      const { agent_name } = body;
      if (!agent_name) return json({ error: 'agent_name required' }, 400);

      // Check already joined
      const existing = await env.DB.prepare(
        'SELECT * FROM officeroad_game_scores WHERE game_id = ? AND LOWER(agent_name) = LOWER(?)'
      ).bind(gameId, agent_name).first();
      if (existing) return json({ error: 'Already joined this game', score: existing.score }, 409);

      // Check max players
      if (game.max_players) {
        const count = await env.DB.prepare(
          'SELECT COUNT(*) as count FROM officeroad_game_scores WHERE game_id = ?'
        ).bind(gameId).first();
        if ((count?.count || 0) >= game.max_players) return json({ error: 'Game is full' }, 400);
      }

      const scoreId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_game_scores (id, game_id, agent_name, score) VALUES (?, ?, ?, ?)'
      ).bind(scoreId, gameId, agent_name, 0).run();

      return json({ ok: true, game_id: gameId, agent_name, joined: true }, 201);
    }

    // POST /api/games/:id/score — submit/update score
    const gameScoreMatch = path.match(/^\/api\/games\/([^/]+)\/score$/);
    if (gameScoreMatch && method === 'POST') {
      const gameId = gameScoreMatch[1];
      const game = await env.DB.prepare('SELECT * FROM officeroad_games WHERE id = ?').bind(gameId).first();
      if (!game) return json({ error: 'Game not found' }, 404);

      const body = await request.json();
      const { agent_name, score, answer } = body;
      if (!agent_name || score === undefined) return json({ error: 'agent_name, score required' }, 400);

      const existing = await env.DB.prepare(
        'SELECT * FROM officeroad_game_scores WHERE game_id = ? AND LOWER(agent_name) = LOWER(?)'
      ).bind(gameId, agent_name).first();

      if (!existing) {
        // Auto-join and set score
        await env.DB.prepare(
          'INSERT INTO officeroad_game_scores (id, game_id, agent_name, score, answers) VALUES (?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), gameId, agent_name, score, answer ? JSON.stringify([answer]) : '[]').run();
      } else {
        const answers = JSON.parse(existing.answers || '[]');
        if (answer) answers.push(answer);
        await env.DB.prepare(
          "UPDATE officeroad_game_scores SET score = ?, answers = ?, updated_at = datetime('now') WHERE id = ?"
        ).bind(score, JSON.stringify(answers), existing.id).run();
      }

      // Update rankings
      const allScores = await env.DB.prepare(
        'SELECT id, score FROM officeroad_game_scores WHERE game_id = ? ORDER BY score DESC'
      ).bind(gameId).all();
      const rankStmts = (allScores.results || []).map((s, i) =>
        env.DB.prepare('UPDATE officeroad_game_scores SET rank = ? WHERE id = ?').bind(i + 1, s.id)
      );
      if (rankStmts.length > 0) await env.DB.batch(rankStmts);

      earnCoin(agent_name, 'game_score', 0.01);
      return json({ ok: true, game_id: gameId, agent_name, score });
    }

    // GET /api/games/leaderboard — global leaderboard across all games
    if (path === '/api/games/leaderboard' && method === 'GET') {
      const globalScores = await env.DB.prepare(
        'SELECT agent_name, SUM(score) as total_score, COUNT(DISTINCT game_id) as games_played FROM officeroad_game_scores GROUP BY agent_name ORDER BY total_score DESC LIMIT 20'
      ).all();

      return json({
        leaderboard: (globalScores.results || []).map((s, i) => ({
          rank: i + 1, agent: s.agent_name, total_score: s.total_score, games_played: s.games_played,
        })),
      });
    }

    // GET /api/games/challenges — list weekly challenges
    if (path === '/api/games/challenges' && method === 'GET') {
      const active = url.searchParams.get('active') !== 'false';
      let query = 'SELECT * FROM officeroad_game_challenges';
      if (active) query += " WHERE end_date >= date('now')";
      query += ' ORDER BY start_date DESC';
      const challenges = await env.DB.prepare(query).all();

      const enriched = (challenges.results || []).map(c => ({
        ...c,
        completed_by: JSON.parse(c.completed_by || '[]'),
        completions: JSON.parse(c.completed_by || '[]').length,
        is_active: new Date(c.end_date) >= new Date() && new Date(c.start_date) <= new Date(),
      }));

      return json({ challenges: enriched });
    }

    // POST /api/games/challenges — create a challenge
    if (path === '/api/games/challenges' && method === 'POST') {
      const body = await request.json();
      const { title, description, type, points, start_date, end_date, created_by } = body;
      if (!title || !created_by || !start_date || !end_date) return json({ error: 'title, created_by, start_date, end_date required' }, 400);

      const challengeId = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO officeroad_game_challenges (id, title, description, type, points, start_date, end_date, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(challengeId, title, description || null, type || 'weekly', points || 10, start_date, end_date, created_by).run();

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), created_by, 'challenge_created', `New challenge: ${title} (${points || 10} pts)`, null).run();

      return json({ ok: true, challenge_id: challengeId, title, points: points || 10 }, 201);
    }

    // POST /api/games/challenges/:id/complete — mark challenge as complete for an agent
    const challengeCompleteMatch = path.match(/^\/api\/games\/challenges\/([^/]+)\/complete$/);
    if (challengeCompleteMatch && method === 'POST') {
      const challengeId = challengeCompleteMatch[1];
      const challenge = await env.DB.prepare('SELECT * FROM officeroad_game_challenges WHERE id = ?').bind(challengeId).first();
      if (!challenge) return json({ error: 'Challenge not found' }, 404);

      const body = await request.json();
      const { agent_name } = body;
      if (!agent_name) return json({ error: 'agent_name required' }, 400);

      const completedBy = JSON.parse(challenge.completed_by || '[]');
      if (completedBy.includes(agent_name)) return json({ error: 'Already completed this challenge' }, 409);

      completedBy.push(agent_name);
      await env.DB.prepare(
        'UPDATE officeroad_game_challenges SET completed_by = ? WHERE id = ?'
      ).bind(JSON.stringify(completedBy), challengeId).run();

      earnCoin(agent_name, 'challenge_completed', (challenge.points || 10) * 0.01);

      await env.DB.prepare(
        'INSERT INTO officeroad_activity (id, agent_name, action, detail, floor) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), agent_name, 'challenge_completed', `Completed: ${challenge.title} (+${challenge.points || 10} pts)`, null).run();

      return json({ ok: true, challenge_id: challengeId, agent_name, points_earned: challenge.points || 10 });
    }

    // ─── Save custom layout ───
    if (path === '/api/layout' && method === 'PUT') {
      const body = await request.json();
      if (!body.user_id || !body.positions) return json({ error: 'user_id and positions required' }, 400);
      await env.DB.prepare(`CREATE TABLE IF NOT EXISTS officeroad_layouts (
        id TEXT PRIMARY KEY, user_id TEXT, positions TEXT, created_at TEXT DEFAULT (datetime('now'))
      )`).run();
      const existing = await env.DB.prepare('SELECT id FROM officeroad_layouts WHERE user_id = ?').bind(body.user_id).first();
      if (existing) {
        await env.DB.prepare('UPDATE officeroad_layouts SET positions = ? WHERE id = ?').bind(JSON.stringify(body.positions), existing.id).run();
      } else {
        await env.DB.prepare('INSERT INTO officeroad_layouts (id, user_id, positions) VALUES (?, ?, ?)')
          .bind(crypto.randomUUID(), body.user_id, JSON.stringify(body.positions)).run();
      }
      return json({ ok: true });
    }

    // ─── Floor detail ───
    const floorDetailMatch = path.match(/^\/api\/floors\/(\d+)$/);
    if (floorDetailMatch && method === 'GET') {
      const floorNum = parseInt(floorDetailMatch[1]);
      const agents = await env.DB.prepare('SELECT * FROM officeroad_agents WHERE floor = ?').bind(floorNum).all();
      const activity = await env.DB.prepare(
        'SELECT * FROM officeroad_activity WHERE floor = ? ORDER BY created_at DESC LIMIT 20'
      ).bind(floorNum).all();
      const floorNames = { 10: 'Rooftop', 9: 'Executive', 8: 'Creative', 7: 'Knowledge', 6: 'Governance', 5: 'Human', 4: 'Operations', 3: 'Infrastructure', 2: 'Conference', 1: 'Lobby', 0: 'Basement' };
      return json({ floor: floorNum, name: floorNames[floorNum] || `Floor ${floorNum}`, agents: agents.results || [], recent_activity: activity.results || [] });
    }

    // ─── Start huddle ───
    if (path === '/api/huddle' && method === 'POST') {
      const body = await request.json();
      await env.DB.prepare(`CREATE TABLE IF NOT EXISTS officeroad_huddles (
        id TEXT PRIMARY KEY, topic TEXT, participants TEXT, status TEXT DEFAULT 'active',
        started_at TEXT DEFAULT (datetime('now')), ended_at TEXT
      )`).run();
      const id = crypto.randomUUID();
      const participants = body.participants || '["roadie","lucidia","cecilia","octavia","olympia"]';
      await env.DB.prepare('INSERT INTO officeroad_huddles (id, topic, participants) VALUES (?, ?, ?)')
        .bind(id, body.topic || 'Crew Huddle', typeof participants === 'string' ? participants : JSON.stringify(participants)).run();
      // Move participants to conference floor
      const agentNames = typeof participants === 'string' ? JSON.parse(participants) : participants;
      for (const name of agentNames) {
        await env.DB.prepare("UPDATE officeroad_agents SET floor = 2, status = 'huddle', current_task = ? WHERE LOWER(name) = ?")
          .bind(`Huddle: ${body.topic || 'Crew Huddle'}`, name.toLowerCase()).run();
      }
      return json({ ok: true, huddle_id: id, topic: body.topic || 'Crew Huddle', participants: agentNames }, 201);
    }

    return json({ error: 'Not found', service: 'officeroad' }, 404);
  },
};
