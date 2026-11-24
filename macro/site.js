function U(h){h=String(h).replace(/^#/,'');var p=h.split('/');
 if(!h||h==='home')return 'index.html';
 if(p[0]==='topic')return 'chapters/'+p[1]+'.html';
 if(p[0]==='practice'||p[0]==='real')return p[1]?p[0]+'/'+p[1]+'.html':p[0]+'.html';
 return (h==='cheat'?'cheatsheet':h)+'.html';}
function go(h){location.href=(window.SITE_ROOT||'')+U(h);}
function filterGloss(q){
  q=(q||'').trim().toLowerCase();
  document.querySelectorAll('#glossBody .gloss-item').forEach(el=>{
    el.style.display = (!q || el.dataset.s.indexOf(q)>=0) ? '' : 'none';
  });
  document.querySelectorAll('#glossBody .gloss-letter').forEach(h=>{
    let n=h.nextElementSibling, any=false;
    while(n && !n.classList.contains('gloss-letter')){ if(n.classList.contains('gloss-item') && n.style.display!=='none'){any=true;break;} n=n.nextElementSibling; }
    h.style.display = any ? '' : 'none';
  });
}
document.addEventListener('keydown',function(e){if(e.key==='Enter'&&e.target.matches&&e.target.matches('[role=link]'))e.target.click();});
(function(){var b=document.createElement('button');b.className='totop';b.setAttribute('aria-label','Back to top');b.innerHTML='&#8593;';b.onclick=function(){window.scrollTo({top:0,behavior:'smooth'})};
function add(){if(!b.parentNode)document.body.appendChild(b)}if(document.body)add();else document.addEventListener('DOMContentLoaded',add);
window.addEventListener('scroll',function(){b.classList.toggle('show',window.scrollY>700)},{passive:true});})();
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a.mailme');if(!a)return;
 e.preventDefault();location.href='mailto:'+a.dataset.u+'@'+a.dataset.d+'?subject='+encodeURIComponent('Feedback: '+document.title);});
