export interface Env { STORE: KVNamespace; DB: D1Database; SERVICE_NAME: string; VERSION: string; }
const SVC = "officeroad";
function json(d: unknown, s = 200) { return new Response(JSON.stringify(d,null,2),{status:s,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","X-BlackRoad-Service":SVC}}); }
async function track(env: Env, req: Request, path: string) { const cf=(req as any).cf||{}; env.DB.prepare("INSERT INTO analytics(subdomain,path,country,ua,ts)VALUES(?,?,?,?,?)").bind(SVC,path,cf.country||"",req.headers.get("User-Agent")?.slice(0,150)||"",Date.now()).run().catch(()=>{}); }

async function getNotes(env: Env): Promise<any[]> {
  const list=await env.STORE.list({prefix:"note:"});
  const notes=await Promise.all(list.keys.map(async k=>{const v=await env.STORE.get(k.name);return v?JSON.parse(v):null;}));
  return notes.filter(Boolean).sort((a:any,b:any)=>b.ts-a.ts);
}
async function getRoadlog(env: Env): Promise<any[]> {
  const {results}=await env.DB.prepare("SELECT title,category,mood,created_at FROM roadlog_entries ORDER BY ts DESC LIMIT 10").all().catch(()=>({results:[]}));
  return results as any[];
}

function page(notes: any[], roadlog: any[]): Response {
  const html=`<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>OfficeRoad — Agent Office</title>
<meta name="description" content="Animated office where 27 agents work, collaborate, and can be talked to in real time.">
<link rel="canonical" href="https://officeroad.blackroad.io/">
<meta property="og:title" content="OfficeRoad — Agent Office">
<meta property="og:description" content="Animated office where 27 agents work, collaborate, and can be talked to in real time.">
<meta property="og:url" content="https://officeroad.blackroad.io/">
<meta property="og:type" content="website">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebApplication","name":"OfficeRoad","url":"https://officeroad.blackroad.io/","description":"Animated office where 27 agents work, collaborate, and can be talked to in real time.","applicationCategory":"WebApplication","publisher":{"@type":"Organization","name":"BlackRoad OS, Inc.","url":"https://blackroad.io"}}</script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#030303;--card:#0a0a0a;--border:#111;--text:#f0f0f0;--sub:#444;--blue:#3E84FF;--grad:linear-gradient(135deg,#3E84FF,#00D6FF)}
html,body{min-height:100vh;background:var(--bg);color:var(--text);font-family:'Space Grotesk',sans-serif}
.grad-bar{height:2px;background:var(--grad)}
.layout{display:grid;grid-template-columns:240px 1fr;min-height:calc(100vh - 2px)}
.sidebar{background:var(--card);border-right:1px solid var(--border);padding:20px;display:flex;flex-direction:column;gap:4px}
.main{padding:24px}
h1{font-size:1.1rem;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:4px}
.sub{font-size:.65rem;color:var(--sub);font-family:'JetBrains Mono',monospace;margin-bottom:20px}
.nav-item{padding:8px 12px;border-radius:6px;cursor:pointer;font-size:.8rem;color:var(--sub);transition:all .12s;border:1px solid transparent}
.nav-item:hover,.nav-item.active{background:#111;color:var(--text);border-color:var(--border)}
.nav-section{font-size:.6rem;color:#222;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.08em;margin:12px 0 4px;padding:0 12px}
.ct{font-size:.65rem;color:var(--sub);text-transform:uppercase;letter-spacing:.08em;font-family:'JetBrains Mono',monospace;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center}
.tab{display:none}.tab.active{display:block}
.note-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px}
.note-card{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:14px;cursor:pointer;transition:border-color .15s;min-height:120px;display:flex;flex-direction:column}
.note-card:hover{border-color:#1a1a1a}
.note-title{font-weight:600;font-size:.85rem;margin-bottom:6px}
.note-body{font-size:.75rem;color:var(--sub);flex:1;line-height:1.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}
.note-meta{font-size:.65rem;font-family:'JetBrains Mono',monospace;color:#333;margin-top:8px}
.compose{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:20px;margin-bottom:20px}
input,textarea{width:100%;padding:9px 12px;background:#0d0d0d;border:1px solid var(--border);border-radius:6px;color:var(--text);font-family:'Space Grotesk',sans-serif;font-size:.82rem;outline:none;margin-bottom:8px}
input:focus,textarea:focus{border-color:var(--blue)}
textarea{min-height:80px;resize:vertical}
.btn{padding:9px 20px;background:var(--blue);color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:700;font-size:.82rem}
.rl-item{padding:9px 0;border-bottom:1px solid #0d0d0d;display:flex;align-items:center;gap:10px;font-size:.8rem}
.rl-item:last-child{border-bottom:none}
.rl-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.mood-colors={focused:'#3E84FF',excited:'#00E676',frustrated:'#FF2255',tired:'#555',proud:'#FF00D4',curious:'#FF6B2B',neutral:'#444'}
.rl-meta{font-size:.65rem;font-family:'JetBrains Mono',monospace;color:var(--sub)}
@media(max-width:600px){.layout{grid-template-columns:1fr}.sidebar{display:none}}
</style></head><body>
<div class="grad-bar"></div>
<div class="layout">
<div class="sidebar">
  <h1>OfficeRoad</h1>
  <div class="sub">workspace</div>
  <div class="nav-section">Create</div>
  <div class="nav-item active" onclick="show('notes',this)">📝 Notes</div>
  <div class="nav-item" onclick="show('roadlog',this)">📓 Dev Log</div>
  <div class="nav-section">Platform</div>
  <div class="nav-item" onclick="window.open('https://roadwork.blackroad.io','_blank')">⚙️ Tasks</div>
  <div class="nav-item" onclick="window.open('https://codex.blackroad.io','_blank')">🔬 Codex</div>
  <div class="nav-item" onclick="window.open('https://kpi.blackroad.io','_blank')">📊 KPIs</div>
  <div class="nav-item" onclick="window.open('https://recap.blackroad.io','_blank')">☀️ Recap</div>
</div>
<div class="main">
  <div class="tab active" id="tab-notes">
    <div class="ct"><span>Notes (${notes.length})</span></div>
    <div class="compose">
      <input type="text" id="n-title" placeholder="Note title...">
      <textarea id="n-body" placeholder="Write anything..."></textarea>
      <button class="btn" onclick="saveNote()">Save Note</button>
    </div>
    <div class="note-grid" id="note-grid">
    ${notes.length?notes.map(n=>`<div class="note-card"><div class="note-title">${n.title}</div><div class="note-body">${n.body}</div><div class="note-meta">${new Date(n.ts).toLocaleDateString()}</div></div>`).join(''):`<div style="color:var(--sub);font-size:.85rem;padding:20px 0">No notes yet. Write your first one above.</div>`}
    </div>
  </div>
  <div class="tab" id="tab-roadlog">
    <div class="ct"><span>Dev Log — from roadlog.blackroad.io</span><a href="https://roadlog.blackroad.io" target="_blank" style="color:var(--blue);font-size:.65rem;text-decoration:none">open →</a></div>
    ${roadlog.length?roadlog.map(r=>{const moodColors:{[k:string]:string}={focused:'#3E84FF',excited:'#00E676',frustrated:'#FF2255',tired:'#555',proud:'#FF00D4',curious:'#FF6B2B',neutral:'#444'};return`<div class="rl-item"><div class="rl-dot" style="background:${moodColors[r.mood]||'#444'}"></div><div><div style="font-size:.82rem;font-weight:600">${r.title}</div><div class="rl-meta">${r.category} · ${r.mood} · ${r.created_at?.slice(0,10)}</div></div></div>`;}).join(''):`<div style="color:var(--sub);font-size:.85rem;padding:20px 0">No entries yet. <a href="https://roadlog.blackroad.io" style="color:var(--blue)">Add one at roadlog.blackroad.io</a></div>`}
  </div>
</div>
</div>
<script src="https://cdn.blackroad.io/br.js"></script>
<script>
function show(tab,el){
  document.querySelectorAll('.tab').forEach(function(t){t.className='tab';});
  document.querySelectorAll('.nav-item').forEach(function(n){n.className='nav-item';});
  document.getElementById('tab-'+tab).className='tab active';
  el.className='nav-item active';
}
async function saveNote(){
  var title=document.getElementById('n-title').value.trim();
  var body=document.getElementById('n-body').value.trim();
  if(!title||!body)return;
  await fetch('/api/notes',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,body})});
  document.getElementById('n-title').value='';document.getElementById('n-body').value='';
  location.reload();
}
</script>
</body></html>`;
  return new Response(html,{headers:{"Content-Type":"text/html;charset=UTF-8"}});
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    if(req.method==="OPTIONS")return new Response(null,{status:204,headers:{"Access-Control-Allow-Origin":"*"}});
    const url=new URL(req.url);const path=url.pathname;
    track(env,req,path);
    if(path==="/health")return json({service:SVC,status:"ok",version:env.VERSION,ts:Date.now()});
    if(path==="/api/notes"&&req.method==="POST"){
      const b=await req.json() as any;
      const id=crypto.randomUUID();
      await env.STORE.put(`note:${id}`,JSON.stringify({id,title:b.title,body:b.body,ts:Date.now()}));
      return json({ok:true,id});
    }
    if(path==="/api/notes"&&req.method==="GET"){
      const notes=await getNotes(env);return json({notes});
    }
    const [notes,roadlog]=await Promise.all([getNotes(env),getRoadlog(env)]);
    return page(notes,roadlog);
  }
};
