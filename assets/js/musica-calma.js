(function(){
  var s=document.currentScript, src=(s&&s.getAttribute('data-src'))||'../../assets/audio/trilha-calma.mp3';
  function init(){
    var a=new Audio(src); a.loop=true; a.volume=0.35; a.preload='none';
    var b=document.createElement('button'); b.type='button';
    b.setAttribute('aria-pressed','false');
    b.style.cssText='position:fixed;right:14px;bottom:14px;z-index:9999;font:inherit;font-size:15px;padding:10px 14px;border:2px solid #111;border-radius:999px;background:#fff;color:#111;box-shadow:0 2px 8px rgba(0,0,0,.2);cursor:pointer';
    function lbl(){b.textContent=a.paused?'\u266A Música calma':'\u275A\u275A Pausar música';b.setAttribute('aria-pressed',a.paused?'false':'true');}
    b.onclick=function(){ if(a.paused){a.play().catch(function(){});} else {a.pause();} };
    a.onplay=lbl; a.onpause=lbl; lbl();
    var st=document.createElement('style'); st.textContent='@media print{.musica-calma{display:none!important}}'; b.className='musica-calma';
    document.head.appendChild(st); document.body.appendChild(b);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
