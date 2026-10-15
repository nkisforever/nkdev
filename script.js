const ICONS={"house": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\"></path><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path>", "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>", "folder-git2": "<path d=\"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5\"></path><circle cx=\"13\" cy=\"12\" r=\"2\"></circle><path d=\"M18 19c-2.8 0-5-2.2-5-5v8\"></path><circle cx=\"20\" cy=\"19\" r=\"2\"></circle>", "cloud": "<path d=\"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z\"></path>", "chevron-down": "<path d=\"m6 9 6 6 6-6\"></path>", "github": "<path d=\"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4\"></path><path d=\"M9 18c-4.51 2-5-2-7-2\"></path>", "star": "<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\"></path>", "external-link": "<path d=\"M15 3h6v6\"></path><path d=\"M10 14 21 3\"></path><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path>", "chevron-left": "<path d=\"m15 18-6-6 6-6\"></path>", "chevron-right": "<path d=\"m9 18 6-6-6-6\"></path>", "cloud-rain": "<path d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\"></path><path d=\"M16 14v6\"></path><path d=\"M8 14v6\"></path><path d=\"M12 16v6\"></path>", "droplets": "<path d=\"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z\"></path><path d=\"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97\"></path>", "wind": "<path d=\"M12.8 19.6A2 2 0 1 0 14 16H2\"></path><path d=\"M17.5 8a2.5 2.5 0 1 1 2 4H2\"></path><path d=\"M9.8 4.4A2 2 0 1 1 11 8H2\"></path>", "discord": "<path d=\"M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.106c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z\"></path>", "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M12 2v2\"></path><path d=\"M12 20v2\"></path><path d=\"m4.93 4.93 1.41 1.41\"></path><path d=\"m17.66 17.66 1.41 1.41\"></path><path d=\"M2 12h2\"></path><path d=\"M20 12h2\"></path><path d=\"m6.34 17.66-1.41 1.41\"></path><path d=\"m19.07 4.93-1.41 1.41\"></path>"};
/* ===== CONFIG — edite aqui ===== */
const CFG={
  discordId:'1525986419762532476',   // número do seu ID (Lanyard precisa dele; entre em discord.gg/lanyard)
  github:'nkisforev3r',            // seu usuário do GitHub
  city:'goiânia',country:'brasil',lat:-16.6869,lon:-49.2648,tz:'America/Sao_Paulo',
  visitorLocation:true         // true = clima do local do visitante (GPS do navegador)
};
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ic=(n,c='',sw=2)=>n==='discord'?`<svg viewBox="0 0 24 24" fill="currentColor" class="${c}">${ICONS.discord}</svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" class="${c}">${ICONS[n]}</svg>`;
const paint=()=>document.querySelectorAll('[data-ic]').forEach(e=>{e.outerHTML=ic(e.dataset.ic,e.dataset.c)});

/* ===== navegação lateral + scroll ===== */
const SECS=[['home','home','house'],['profile','perfil','user'],['projects','projetos','folder-git2'],['weather','clima','cloud']];
const nav=$('#nav'),sb=$('#sb');
nav.innerHTML=SECS.map(([id,l,i])=>`<button data-go="${id}" aria-label="${l}" class="group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all">${ic(i,'w-5 h-5')}<span class="absolute left-full ml-3 px-2 py-1 rounded-md text-xs glass-strong text-mono opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">${l}</span></button>`).join('');
const go=id=>document.getElementById(id).scrollIntoView({behavior:'smooth'});
nav.onclick=e=>{const b=e.target.closest('[data-go]');if(b)go(b.dataset.go)};
sb.onclick=()=>go('profile');
const ON='bg-foreground text-background'.split(' '),OFF='text-muted-foreground hover:text-foreground hover:bg-foreground/10'.split(' ');
function spy(){let cur='home';SECS.forEach(([id])=>{if(document.getElementById(id).getBoundingClientRect().top<innerHeight*.4)cur=id});
  nav.querySelectorAll('button').forEach(b=>{const on=b.dataset.go===cur;b.classList.remove(...(on?OFF:ON));b.classList.add(...(on?ON:OFF))});
  sb.style.opacity=scrollY>80?0:.8;sb.style.pointerEvents=scrollY>80?'none':''}
addEventListener('scroll',spy,{passive:true});

/* ===== título digitando ===== */
/* ===== título com efeito scramble ===== */
(()=>{
  const el=$('#typed');
  const PH=['nk7','nk.exe','dev_software'];            // frases que se alternam
  const CH='!<>-_\\/[]{}=+*^?#EX01';                 // letras embaralhadas
  const PAUSA=1100;                                  // tempo parado em cada frase (ms)

  const set=arr=>{
    el.textContent='';
    arr.forEach(([ch,dud])=>{
      const s=document.createElement('span');
      s.textContent=ch;
      if(dud)s.style.color='rgba(255,255,255,.6)';   // letras ainda embaralhadas ficam cinza
      el.appendChild(s);
    });
  };

  const scramble=(from,to)=>new Promise(res=>{
    const L=Math.max(from.length,to.length),q=[];
    for(let i=0;i<L;i++){
      const s=Math.random()*20|0,e=s+8+(Math.random()*20|0);
      q.push({f:from[i]||'',t:to[i]||'',s,e,c:''});
    }
    let fr=0;
    const up=()=>{
      let done=0;const out=[];
      for(const o of q){
        if(fr>=o.e){done++;out.push([o.t,0])}
        else if(fr>=o.s){
          if(!o.c||Math.random()<.28)o.c=CH[Math.random()*CH.length|0];
          out.push([o.c,1]);
        }else out.push([o.f,0]);
      }
      set(out);
      if(done===q.length)return res();
      fr++;setTimeout(up,30);
    };
    up();
  });

  let i=0;
  const next=()=>scramble(PH[i],PH[(i+1)%PH.length]).then(()=>{
    i=(i+1)%PH.length;
    setTimeout(next,PAUSA);
  });
  setTimeout(next,PAUSA);
})();

/* ===== tags flutuantes ao redor da foto ===== */
const TAGS=['swift','asm','js','ts','py','go','rs','sh','sql','c#','c++','lua','java','php'];
setInterval(()=>{if(document.hidden)return;const a=Math.random()*6.283,r=175+Math.random()*55,s=document.createElement('span');
  s.className='absolute left-1/2 top-1/2 text-mono text-sm md:text-base font-bold px-2 py-0.5 rounded-md glass-strong animate-float select-none whitespace-nowrap';
  s.style.cssText=`--tx:${Math.cos(a)*r}px;--ty:${Math.sin(a)*r}px;color:rgb(250,250,250);text-shadow:0 0 12px rgba(0,0,0,.9),0 2px 6px rgba(0,0,0,.7)`;
  s.textContent=TAGS[Math.random()*TAGS.length|0];$('#tags').appendChild(s);setTimeout(()=>s.remove(),5000)},700);

/* ===== Lanyard (status do Discord em tempo real) ===== */
const COL={online:'rgb(35,165,90)',idle:'rgb(240,178,50)',dnd:'rgb(232,48,48)',offline:'rgb(128,132,142)'};
const LBL={online:'Online',idle:'Ausente',dnd:'Não perturbe',offline:'Offline'};
const row=(img,a,b)=>`<div class="rounded-lg bg-foreground/5 border border-foreground/10 p-3 flex items-center gap-3">${img?`<img src="${esc(img)}" alt="" class="w-12 h-12 rounded-md object-cover shrink-0">`:''}<div class="min-w-0"><div class="text-sm truncate">${esc(a)}</div><div class="text-xs text-muted-foreground truncate">${esc(b)}</div></div></div>`;
function render(d){
  const u=d.discord_user,st=d.discord_status||'offline',c=COL[st]||COL.offline;
  const av=u.avatar?`https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.${u.avatar.startsWith('a_')?'gif':'png'}?size=256`:'https://cdn.discordapp.com/embed/avatars/0.png';
  $('#av1').src=$('#av2').src=av;
  ['#dot1','#dot2','#dot3'].forEach(s=>$(s).style.background=c);
  $('#dot1').setAttribute('aria-label','status '+st);
  $('#name').textContent=u.global_name||u.username;
  $('#uname').textContent='@'+u.username;$('#dct').textContent='@'+u.username;
  $('#stxt').textContent=LBL[st]||st;
  $('#dc').href='https://discord.com/users/'+u.id;
  let h='';
 
}
function lanyard(){const id=CFG.discordId;if(!/^\d{15,22}$/.test(id))return;let hb;
  fetch('https://api.lanyard.rest/v1/users/'+id).then(r=>r.json()).then(j=>j.success&&render(j.data)).catch(()=>{});
  const ws=new WebSocket('wss://api.lanyard.rest/socket');
  ws.onmessage=e=>{const m=JSON.parse(e.data);
    if(m.op===1){ws.send(JSON.stringify({op:2,d:{subscribe_to_id:id}}));hb=setInterval(()=>ws.send(JSON.stringify({op:3})),m.d.heartbeat_interval)}
    else if(m.op===0)render(m.d)};
  ws.onclose=()=>{clearInterval(hb);setTimeout(lanyard,5000)}}
$('#gh').href='https://github.com/'+CFG.github;$('#ght').textContent='@'+CFG.github.toLowerCase();
$('#av1').src=$('#av2').src='https://cdn.discordapp.com/embed/avatars/0.png';
$('#name').textContent='offline';$('#stxt').textContent=LBL.offline;
['#dot1','#dot2','#dot3'].forEach(s=>$(s).style.background=COL.offline);
$('#dc').href='https://discord.com/users/'+CFG.discordId;$('#dct').textContent='discord';

/* ===== insígnias ao lado do nome =====
   t = texto que aparece ao passar o mouse (edite à vontade)
   svg = desenho do ícone | src = (opcional) caminho de uma imagem PNG/SVG sua, ex: 'badges/orb.png'
   Para usar os ícones originais do Discord: salve cada um na pasta 'badges' e troque 'svg' por 'src'. */
const BADGES=[
  {t:'orb',src:'',svg:'<path d="M3 8.5c2-2.4 5-3.6 8.2-3.1 4.1.6 7 3.8 7 7.9a7.1 7.1 0 0 1-7.2 7 7.1 7.1 0 0 1-7-7.1c0-1.3.3-2.5.9-3.5z" fill="#e8741a"/><circle cx="12" cy="13" r="3.4" fill="#a84a0a"/><circle cx="12" cy="13" r="1.6" fill="#f59a4a"/><path d="M2.5 9.5h5" stroke="#ffb066" stroke-width="1.6" stroke-linecap="round"/>'},
  {t:'triângulo',src:'',svg:'<path d="M12 3.5 21.5 20h-19z" fill="#f06ff0" stroke="#f06ff0" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 10.5 16.2 18H7.8z" fill="#ffb3ff"/>'},
  {t:'espada',src:'',svg:'<g transform="rotate(45 12 12)"><path d="M12 1l3 4v10H9V5z" fill="#4be08a"/><path d="M12 3v12" stroke="#a6f5c5" stroke-width="1"/><rect x="6" y="15" width="12" height="2.6" rx="1.2" fill="#2bb673"/><rect x="10.4" y="17.6" width="3.2" height="3.6" fill="#2bb673"/><circle cx="12" cy="21.9" r="1.4" fill="#2bb673"/></g>'},
  {t:'controle',src:'',svg:'<path d="M7 7h10c2.6 0 4.1 2.1 4.6 5.1l.7 4.4c.3 2.1-1.3 3.4-2.9 2.3L16 16.6H8l-3.4 2.2c-1.6 1.1-3.2-.2-2.9-2.3l.7-4.4C2.9 9.1 4.4 7 7 7z" fill="#9fd28a"/><path d="M7.2 10.4v3.2M5.6 12h3.2" stroke="#3b5d33" stroke-width="1.4" stroke-linecap="round"/><circle cx="16" cy="11" r=".95" fill="#3b5d33"/><circle cx="18" cy="12.8" r=".95" fill="#3b5d33"/><rect x="10.5" y="4.4" width="3" height="1.8" rx=".9" fill="#b8e6a4"/>'}
];
$('#badges').innerHTML=BADGES.map(b=>`<span title="${esc(b.t)}" class="w-5 h-5 shrink-0 cursor-help transition-transform hover:scale-125">${b.src?`<img src="${esc(b.src)}" alt="${esc(b.t)}" class="w-full h-full object-contain">`:`<svg viewBox="0 0 24 24" class="w-full h-full" aria-label="${esc(b.t)}">${b.svg}</svg>`}</span>`).join('');

lanyard();

/* ===== números do perfil (contagem) ===== */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const n=+e.target.dataset.n,t0=performance.now();
  const f=t=>{const p=Math.min(1,(t-t0)/1200);e.target.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)};f(t0)}),{threshold:.6});
document.querySelectorAll('[data-n]').forEach(e=>io.observe(e));

/* ===== carrossel de projetos ===== */
const PROJ=[['neural-shell',142,'Shell experimental com sugestões via IA local.',['rust','tui','ai']],['plexus-net',98,'Visualizador 3D de redes em tempo real.',['ts','webgl']],['dotfiles',76,'Setup minimalista grafite/preto para Linux.',['nix','wm']],['hash-router',211,'Roteador HTTP minimalista e rápido.',['go','http']],['nk7-ui',54,'Componentes monocromáticos para apps internos.',['react','css']]];
const tr=$('#track');
tr.innerHTML=PROJ.map((p,i)=>`<div class="min-w-0 flex-[0_0_88%] sm:flex-[0_0_55%] lg:flex-[0_0_38%]"><article class="glass rounded-2xl p-6 h-64 flex flex-col justify-between transition-all duration-500 scale-95 opacity-60"><div><div class="flex items-center justify-between"><span class="text-xs text-mono text-muted-foreground">// projeto ${String(i+1).padStart(2,'0')}</span><span class="flex items-center gap-1 text-xs text-mono text-muted-foreground">${ic('star','w-3 h-3')} ${p[1]}</span></div><h3 class="text-2xl font-display font-semibold mt-2">${p[0]}</h3><p class="text-sm text-muted-foreground mt-3 leading-relaxed">${p[2]}</p></div><div class="flex items-end justify-between"><div class="flex gap-1.5 flex-wrap">${p[3].map(t=>`<span class="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-foreground/10 text-mono">${t}</span>`).join('')}</div><button class="text-foreground hover:translate-x-1 transition-transform">${ic('external-link','w-4 h-4')}</button></div></article></div>`).join('');
$('#dots').innerHTML=PROJ.map((_,i)=>`<button class="h-1 rounded-full transition-all" aria-label="go to ${i+1}" data-i="${i}"></button>`).join('');
let cur=0;
function show(n){cur=Math.max(0,Math.min(PROJ.length-1,n));
  const sl=[...tr.children],w=sl[0].offsetWidth+20,max=Math.max(0,tr.scrollWidth-$('#vp').offsetWidth);
  tr.style.transform=`translate3d(${-Math.min(cur*w,max)}px,0,0)`;
  sl.forEach((s,i)=>{const a=s.firstChild,on=i===cur;a.classList.toggle('scale-100',on);a.classList.toggle('opacity-100',on);a.classList.toggle('scale-95',!on);a.classList.toggle('opacity-60',!on)});
  [...$('#dots').children].forEach((b,i)=>{const on=i===cur;b.classList.toggle('w-10',on);b.classList.toggle('bg-foreground',on);b.classList.toggle('w-4',!on);b.classList.toggle('bg-foreground/30',!on)})}
$('#prev').onclick=()=>show(cur-1);$('#next').onclick=()=>show(cur+1);
$('#dots').onclick=e=>{const b=e.target.closest('[data-i]');if(b)show(+b.dataset.i)};
let sx=null;const vp=$('#vp');
vp.onpointerdown=e=>sx=e.clientX;
vp.onpointerup=e=>{if(sx!==null&&Math.abs(e.clientX-sx)>50)show(cur+(e.clientX<sx?1:-1));sx=null};
addEventListener('resize',()=>show(cur));

/* ===== clima + relógio ===== */
const WC={0:['Céu limpo','sun'],1:['Predominantemente limpo','sun'],2:['Parcialmente nublado','cloud'],3:['Nublado','cloud'],45:['Neblina','cloud'],48:['Neblina','cloud'],51:['Garoa leve','cloud-rain'],53:['Garoa','cloud-rain'],55:['Garoa intensa','cloud-rain'],61:['Chuva leve','cloud-rain'],63:['Chuva','cloud-rain'],65:['Chuva forte','cloud-rain'],80:['Pancadas leves','cloud-rain'],81:['Pancadas de chuva','cloud-rain'],82:['Pancadas fortes','cloud-rain']};
const wc=c=>WC[c]||(c>=95?['Trovoada','cloud-rain']:c>=71&&c<=86&&c!==80&&c!==81&&c!==82?['Neve','cloud']:c>=51?['Chuva','cloud-rain']:['Nublado','cloud']);
let TZ=CFG.tz;
const clock=()=>{const n=new Date();$('#clock').textContent=n.toLocaleTimeString('pt-BR',{timeZone:TZ,hour12:false});$('#date').textContent=n.toLocaleDateString('pt-BR',{timeZone:TZ,weekday:'long',day:'numeric',month:'long'})};
clock();setInterval(clock,1000);
async function weather(){
  let{lat,lon,city,country}=CFG;
  if(CFG.visitorLocation){try{const p=await new Promise((ok,no)=>navigator.geolocation.getCurrentPosition(ok,no,{timeout:8000}));lat=p.coords.latitude;lon=p.coords.longitude;TZ=Intl.DateTimeFormat().resolvedOptions().timeZone;
    const g=await(await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=pt`)).json();city=(g.city||g.locality||city).toLowerCase();country=(g.countryName||country).toLowerCase()}catch{}}
  const j=await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=${encodeURIComponent(TZ)}&forecast_days=7`)).json();
  const c=j.current,[desc,icn]=wc(c.weather_code);
  $('#wtitle').textContent=$('#wtitle').dataset.text='clima · '+city;
  $('#wplace').textContent=city+' · '+country;
  $('#wicon').innerHTML=ic(icn,'w-14 h-14 text-foreground/80',1.5);
  $('#wtemp').textContent=Math.round(c.temperature_2m)+'°';$('#wdesc').textContent=desc;
  $('#whum').textContent=c.relative_humidity_2m+'%';$('#wrain').textContent=c.precipitation+' mm';$('#wwind').textContent=Math.round(c.wind_speed_10m)+' km/h';
  $('#fc').innerHTML=j.daily.time.map((t,i)=>{const dn=new Date(t+'T12:00:00').toLocaleDateString('pt-BR',{weekday:'short'}).replace('.',''),I=wc(j.daily.weather_code[i])[1],mx=Math.round(j.daily.temperature_2m_max[i])+'°',mn=Math.round(j.daily.temperature_2m_min[i])+'°';
    return i===0?`<div class="relative rounded-lg bg-foreground/10 border-2 border-white p-2 text-center animate-today-pulse"><div class="absolute -top-2 left-1/2 -translate-x-1/2 text-[8px] text-mono uppercase tracking-wider bg-white text-black px-1.5 rounded-sm">hoje</div><div class="text-[10px] text-mono uppercase text-white">${dn}</div>${ic(I,'w-4 h-4 mx-auto my-1.5 text-white',1.5)}<div class="text-xs text-mono text-white font-semibold">${mx}</div><div class="text-[10px] text-mono text-white/80">${mn}</div></div>`
    :`<div class="rounded-lg bg-foreground/5 border border-foreground/10 p-2 text-center"><div class="text-[10px] text-mono uppercase text-muted-foreground">${dn}</div>${ic(I,'w-4 h-4 mx-auto my-1.5 text-foreground/70',1.5)}<div class="text-xs text-mono">${mx}</div><div class="text-[10px] text-mono text-muted-foreground">${mn}</div></div>`}).join('')}
weather().catch(()=>{});setInterval(()=>weather().catch(()=>{}),9e5);

/* ===== fundo animado (constelação) ===== */
/* ===== fundo animado (constelação) ===== */
(()=>{
  const c=$('#bg'),x=c.getContext('2d'),m={x:-999,y:-999};
  const DIST=200;   // alcance das linhas entre pontos
  const DENS=20000; // área por ponto (menor = mais pontos)
  const MAXN=300;   // máximo de pontos
  const SPEED=.17;  // velocidade base
  const MR=145;     // raio de alcance do mouse
  const PULL=.03;   // força com que os pontos seguem o mouse
  let W,H,P=[];

  const rs=()=>{
    const d=devicePixelRatio||1;
    W=innerWidth;H=innerHeight;
    c.width=W*d;c.height=H*d;
    x.setTransform(d,0,0,d,0,0);
    P=Array.from({length:Math.min(MAXN,W*H/DENS|0)},()=>({
      x:Math.random()*W,y:Math.random()*H,
      vx:(Math.random()-.5)*SPEED*2,vy:(Math.random()-.5)*SPEED*2,
      r:.9+Math.random()*1.1,k:0
    }));
  };
  const mv=(px,py)=>{m.x=px;m.y=py};
  addEventListener('resize',rs);
  addEventListener('mousemove',e=>mv(e.clientX,e.clientY));
  addEventListener('touchmove',e=>mv(e.touches[0].clientX,e.touches[0].clientY),{passive:true});
  document.addEventListener('mouseleave',()=>mv(-999,-999));
  rs();

  (function f(){
    x.clearRect(0,0,W,H);
    for(const p of P){
      const dx=m.x-p.x,dy=m.y-p.y,dm=Math.hypot(dx,dy);
      p.k=Math.max(0,1-dm/MR);                 // 0 = longe do mouse, 1 = em cima
      if(dm<MR&&dm>70){p.x+=dx*p.k*PULL;p.y+=dy*p.k*PULL}  // segue o mouse
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1;
      if(p.y<0||p.y>H)p.vy*=-1;
      x.fillStyle=`rgba(255,255,255,${.45+.5*p.k})`;
      x.beginPath();x.arc(p.x,p.y,p.r+p.k*1.2,0,6.283);x.fill();
    }
    x.lineWidth=1;
    for(let i=0;i<P.length;i++){
      const a=P[i];
      for(let j=i+1;j<P.length;j++){
        const b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<DIST){
          const boost=Math.max(a.k,b.k);       // linhas perto do mouse ficam mais fortes
          x.strokeStyle=`rgba(255,255,255,${(.3+.4*boost)*(1-d/DIST)})`;
          x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke();
        }
      }
      if(a.k>0){                                // linha de cada ponto até o mouse
        x.strokeStyle=`rgba(255,255,255,${.75*a.k})`;
        x.beginPath();x.moveTo(a.x,a.y);x.lineTo(m.x,m.y);x.stroke();
      }
    }
    if(m.x>0){x.fillStyle='rgba(255,255,255,.9)';x.beginPath();x.arc(m.x,m.y,2.2,0,6.283);x.fill()}
    requestAnimationFrame(f);
  })();
})();

paint();show(0);spy();
