(() => {
  'use strict';
  // Coordinates refer to positions in the CONCEPT aerial image, not engineering drawings.
  const locations = [
    {id:'cbg', x:.342, y:.585, title:'Compressed<br><em>Biogas</em>', label:'CBG PLANT', kicker:'BIOENERGY SYSTEMS', copy:'A proposed conversion pathway for suitable biomass streams — a connected component of Rivanta’s integrated resource strategy.', meta:'BIOENERGY / CBG'},
    {id:'biomass', x:.147,y:.665,title:'Biomass<br><em>Reception</em>',label:'BIOMASS',kicker:'THE STARTING POINT',copy:'Agricultural residues arrive for sorting, grading and organized covered storage before moving into appropriate process streams.',meta:'FEEDSTOCK / RECEIVING & STORAGE'},
    {id:'power',x:.525,y:.535,title:'Captive<br><em>Power</em>',label:'POWER HOUSE',kicker:'INTEGRATED UTILITIES',copy:'A proposed controlled biomass-based energy system linking thermal recovery, industrial utilities and electricity generation.',meta:'ENERGY / POWER & UTILITIES'},
    {id:'silica',x:.620,y:.49,title:'Biogenic<br><em>Silica</em>',label:'BIO-SILICA',kicker:'ADVANCED MATERIALS',copy:'A value-added materials pathway focused on extracting and refining silica from biomass-derived feedstocks.',meta:'MATERIALS / SILICA REFINING'},
    {id:'silicon',x:.746,y:.535,title:'Green<br><em>Silicon</em>',label:'SILICON',kicker:'DOWNSTREAM MANUFACTURING',copy:'The envisioned downstream manufacturing platform connects biogenic inputs with high-value silicon materials.',meta:'MATERIALS / SILICON'},
    {id:'saf',x:.862,y:.535,title:'Sustainable<br><em>Aviation Fuel</em>',label:'SAF COMPLEX',kicker:'FUTURE FUEL PATHWAYS',copy:'A future hydrocarbon-upgrading pathway for aviation fuels, subject to technology selection, technical validation and regulatory requirements.',meta:'FUELS / SAF'},
    {id:'solar',x:.165,y:.462,title:'Solar<br><em>Energy</em>',label:'SOLAR',kicker:'RENEWABLE POWER',copy:'Ground-mounted photovoltaic systems illustrate the campus ambition for a diversified, lower-carbon energy mix.',meta:'ENERGY / SOLAR PV'},
    {id:'wind',x:.350,y:.330,title:'Wind<br><em>Energy</em>',label:'WIND TURBINES',kicker:'RENEWABLE POWER',copy:'Wind generation is shown as a conceptual energy component, subject to actual site suitability and technical feasibility.',meta:'ENERGY / WIND'}
  ];
  const q = id => document.getElementById(id);
  const stage = q('stage'), experience=q('journey'), world=q('aerial-world'), worldPin=q('world-pin');
  const chapters=[...document.querySelectorAll('.scroll-chapter')];
  const imageLayers=[...document.querySelectorAll('[data-photo]')];
  const navLinks=[...document.querySelectorAll('[data-link]')];
  const info=q('stage-info');
  const phase=q('stage-phase');
  const cap=q('stage-caption');
  const stageShade=q('stage-overlay');
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let frameRequested=false, lastIndex=-1, cover={imgw:0,imgh:0,left:0,top:0},height=innerHeight;
  const ease=(a,b,t)=>{ const v=Math.max(0,Math.min(1,(t-a)/(b-a)));return v*v*(3-2*v);};
  const mix=(a,b,t)=>a+(b-a)*t;
  const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
  function renderImageGeometry(){
    const src=q('aerial-image'), w=stage.clientWidth,h=stage.clientHeight;
    const iw=src.naturalWidth||1648,ih=src.naturalHeight||928;
    const coverScale=Math.max(w/iw,h/ih);
    cover={imgw:iw*coverScale,imgh:ih*coverScale,left:(w-iw*coverScale)/2,top:(h-ih*coverScale)/2};
    // Pins are positioned over the displayed image, accounting for object-fit crop on phones.
    const loc=locations[Math.max(0,lastIndex)];
    if(loc)positionPin(loc);
  }
  function positionPin(loc){
    const x=cover.left+loc.x*cover.imgw,y=cover.top+loc.y*cover.imgh;
    worldPin.style.left=x+'px';worldPin.style.top=y+'px';
    return {x,y};
  }
  function updateContent(i){
    if(i===lastIndex)return;
    lastIndex=i;
    const a=locations[i];
    q('current-number').textContent=String(i+1).padStart(2,'0');
    q('current-kicker').textContent=a.kicker;
    q('current-title').innerHTML=a.title;  // static project-authored content only
    q('current-copy').textContent=a.copy;
    q('current-meta').textContent=a.meta;
    cap.textContent=`${String(i+1).padStart(2,'0')} — ${a.label}`;
    q('world-pin-label').textContent=a.label;
    navLinks.forEach(n=>{const active=n.dataset.link===a.id;n.classList.toggle('is-active',active);if(active)n.setAttribute('aria-current','location');else n.removeAttribute('aria-current')});
    positionPin(a);
  }
  function update(){
    frameRequested=false;
    const viewport=window.innerHeight;
    const y=window.scrollY||window.pageYOffset;
    const docMax=Math.max(1,document.documentElement.scrollHeight-viewport);
    q('page-progress').style.width=(y/docMax*100).toFixed(3)+'%';
    q('header').classList.toggle('is-solid',y>65);
    const hero=document.querySelector('.hero');
    if(y<hero.offsetHeight+300&&!reduceMotion){document.querySelector('.hero-image').style.transform=`translate3d(0,${Math.min(y*.12,130)}px,0) scale(1.05)`;}
    const start=experience.offsetTop;
    const length=chapters.reduce((v,c)=>v+c.offsetHeight,0);
    const pos=y-start;
    const total=clamp(pos/Math.max(1,length-viewport),0,1);
    if(pos < -viewport || pos > length+viewport)return;
    const t=clamp(pos/Math.max(1,length),0,.999999);
    const raw=t*locations.length;
    const index=Math.floor(raw);
    const local=raw-index;
    updateContent(index);
    const loc=locations[index];
    const focus=positionPin(loc);
    const W=stage.clientWidth,H=stage.clientHeight;
    const zoom=window.innerWidth<=760?2.9:3.15;
    // Smooth: wide aerial -> accurate plant location -> detail photo -> wide aerial.
    const approach=ease(.025,.36,local);
    const retreat=ease(.78,.99,local);
    const strength=approach*(1-retreat);
    const s=mix(1.0,zoom,strength);
    const tx=(W*.53-(W/2+(focus.x-W/2)*s))*strength;
    const ty=(H*.49-(H/2+(focus.y-H/2)*s))*strength;
    world.style.transform=`translate3d(${tx.toFixed(2)}px,${ty.toFixed(2)}px,0) scale(${s.toFixed(4)})`;
    const detail=ease(.30,.52,local)*(1-ease(.77,.94,local));
    const textAlpha=ease(.44,.57,local)*(1-ease(.75,.88,local));
    for(const [j,img] of imageLayers.entries()){
      const alpha=j===index?detail:0;
      img.style.opacity=String(alpha);
      if(j===index)img.style.transform=`scale(${(1.06-.05*ease(.35,.86,local)).toFixed(4)})`;
    }
    const pinAlpha=ease(.13,.26,local)*(1-ease(.31,.46,local));
    worldPin.style.opacity=String(pinAlpha);
    info.style.opacity=String(textAlpha);
    info.style.transform=`translateY(${Math.round(24*(1-textAlpha))}px)`;
    stageShade.style.opacity=String(.65+.35*detail);
    phase.textContent=local<.3?'ZOOMING TO LOCATION':local<.53?'ENTERING FACILITY':local<.78?'EXPLORE THE FACILITY':'MOVING TO NEXT PLANT';
    q('step-progress').style.width=(total*100).toFixed(3)+'%';
  }
  const onScroll=()=>{if(!frameRequested){frameRequested=true;requestAnimationFrame(update)}};
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',()=>{renderImageGeometry();onScroll()});
  q('aerial-image').addEventListener('load',()=>{renderImageGeometry();onScroll()});
  renderImageGeometry();update();
})();
