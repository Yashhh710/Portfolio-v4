import React, { useEffect } from 'react';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import ProgressBar from './components/ProgressBar';
import FloatingParticles from './components/FloatingParticles';
import FloatingNav from './components/FloatingNav';
import Landing from './components/Landing';
import ScrollIntro from './components/ScrollIntro';
import Marquee from './components/Marquee';
import Craft from './components/Craft';
import PortfolioMagazine from './components/PortfolioMagazine';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
    // ===== PRELOADER ANIME.JS =====
    window.scrollTo(0,0);
    const lTarget = document.getElementById('loader-target');
    if (lTarget) {
        const text = lTarget.innerText;
        lTarget.innerHTML = text.split('').map(char => 
            \`<span class="loader-letter">\${char === ' ' ? '&nbsp;' : char}</span>\`
        ).join('');

        const tl = anime.timeline({
            loop: false,
            complete: function() {
                const preloader = document.getElementById('preloader');
                preloader.style.opacity = '0';
                setTimeout(() => { preloader.style.display = 'none'; }, 800);
            }
        });

        tl.add({
            targets: '.loader-letter',
            translateY: [0, -100, 0],
            scaleY: [1, 0.5, 1.2, 1],
            scaleX: [1, 1.5, 0.8, 1],
            rotateZ: () => anime.random(-20, 20),
            duration: 800,
            delay: anime.stagger(80),
            easing: 'easeOutElastic(1, .6)'
        })
        .add({
            targets: '.loader-letter',
            opacity: [1, 0],
            scale: 0,
            filter: 'blur(20px)',
            duration: 500,
            delay: anime.stagger(40, {from: 'center'}),
            easing: 'easeInExpo'
        });
    }

    // ===== LENIS ULTRA SMOOTH SCROLL =====
    const lenis = new Lenis({
        duration: 2.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        smooth: true,
        mouseMultiplier: 0.8,
        smoothTouch: false,
        touchMultiplier: 1.2,
        infinite: false,
        lerp: 0.04,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    // Connect GSAP ScrollTrigger to Lenis
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    // ===== CUSTOM CURSOR =====
    const cursor = document.getElementById('cursor');
    const trail = document.getElementById('cursor-trail');
    let mx = 0, my = 0, tx = 0, ty = 0;
    document.addEventListener('mousemove', (e) => {
        mx = e.clientX; my = e.clientY;
        cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    });
    function lerp(a, b, t) { return a + (b - a) * t; }
    function animCursor() {
        tx = lerp(tx, mx, 0.12); ty = lerp(ty, my, 0.12);
        trail.style.left = tx + 'px'; trail.style.top = ty + 'px';
        requestAnimationFrame(animCursor);
    }
    animCursor();
    document.querySelectorAll('a,button,.tcg-card,.glass-card,.marquee-item').forEach(el => {
        el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); trail.classList.add('hover'); });
        el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); trail.classList.remove('hover'); });
    });

    // ===== PROGRESS BAR =====
    const bar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
        const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = pct + '%';
    });

    // ===== FLOATING NAV SCROLL =====
    const nav = document.getElementById('floating-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
        // Active link
        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id');
        });
        navLinks.forEach(l => {
            l.classList.remove('active');
            if (l.getAttribute('href') === '#' + current) l.classList.add('active');
        });
    });
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('expanded');
            menuToggle.textContent = nav.classList.contains('expanded') ? '✕' : '☰';
        });
    }

    // Smooth nav click
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) { 
                e.preventDefault(); 
                nav.classList.remove('expanded');
                if(menuToggle) menuToggle.textContent = '☰';
                lenis.scrollTo(target, { duration: 2 }); 
            }
        });
    });

    // ===== FLOATING PARTICLES =====
    const fp = document.getElementById('float-particles');
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'float-particle';
        p.style.setProperty('--dur', (8 + Math.random() * 12) + 's');
        p.style.setProperty('--delay', (Math.random() * 10) + 's');
        p.style.setProperty('--left', Math.random() * 100 + '%');
        fp.appendChild(p);
    }

    // ===== SMOKE CANVAS =====
    const canvas = document.getElementById('smokeCanvas');
    const ctx = canvas.getContext('2d');
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize); resize();
    class Particle {
        constructor() { this.init(); }
        init() { this.x=Math.random()*canvas.width; this.y=canvas.height+Math.random()*100; this.size=Math.random()*120+60; this.speedY=Math.random()*.5+.2; this.opacity=Math.random()*.2+.05; }
        update() { this.y-=this.speedY; if(this.y<canvas.height*.6) this.opacity-=.001; if(this.opacity<=0) this.init(); }
        draw() { ctx.beginPath(); let g=ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.size); g.addColorStop(0,\`rgba(150,0,0,\${this.opacity})\`); g.addColorStop(1,'rgba(0,0,0,0)'); ctx.fillStyle=g; ctx.arc(this.x,this.y,this.size,0,Math.PI*2); ctx.fill(); }
    }
    const particles = [];
    for (let i=0;i<40;i++) particles.push(new Particle());
    function animate() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p=>{p.update();p.draw();}); requestAnimationFrame(animate); }
    animate();

    // ===== REVEAL IMG ON MOUSE =====
    const container2 = document.getElementById('container');
    const revealImg = document.getElementById('revealImg');
    document.addEventListener('mousemove', (e) => {
        if (!container2||!revealImg) return;
        const rect = container2.getBoundingClientRect();
        const x = e.clientX-rect.left, y = e.clientY-rect.top;
        revealImg.style.clipPath = \`circle(160px at \${x}px \${y}px)\`;
    });
    document.addEventListener('mouseleave', () => { if(revealImg) revealImg.style.clipPath='circle(0% at 50% 50%)'; });

    // ===== HERO SCROLL EFFECT =====
    const landingSection = document.getElementById('landing-section');
    const sunEl = document.querySelector('.sun');
    let tick = false;
    window.addEventListener('scroll', () => {
        if (!tick) {
            window.requestAnimationFrame(() => {
                const sy = window.scrollY, hh = landingSection ? landingSection.offsetHeight : window.innerHeight;
                if (landingSection && sy <= hh) {
                    const p = sy/hh;
                    landingSection.style.transform = \`perspective(1200px) translateY(\${sy*.85}px) translateZ(\${p*-400}px) rotateX(\${p*70}deg)\`;
                    landingSection.style.transformOrigin = 'center bottom';
                    landingSection.style.opacity = 1-(p*1.2);
                    if (sunEl) sunEl.style.opacity = 1-(p*2);
                }
                tick = false;
            }); tick = true;
        }
    });

    // ===== MARQUEE LERP SCROLL =====
    const row1 = document.getElementById('row-1');
    const row2 = document.getElementById('row-2');
    const marqueeSec = document.getElementById('marquee-section');
    let curScroll = window.scrollY, tgtScroll = window.scrollY;
    function smoothMarquee() {
        tgtScroll = window.scrollY;
        curScroll += (tgtScroll-curScroll)*.08;
        if (marqueeSec) {
            const st = marqueeSec.offsetTop, sh = marqueeSec.offsetHeight, vh = window.innerHeight;
            if (curScroll+vh>st && curScroll<st+sh) {
                const rel = curScroll-st+vh;
                if(row1) row1.style.transform=\`translateX(\${(rel*.15)-300}px)\`;
                if(row2) row2.style.transform=\`translateX(\${(-rel*.15)+100}px)\`;
            }
        }
        requestAnimationFrame(smoothMarquee);
    }
    smoothMarquee();

    // ===== CARD TILT =====
    document.querySelectorAll('.glass-card,.main-orange-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect();
            const x = e.clientX-r.left, y = e.clientY-r.top;
            const cx = r.width/2, cy = r.height/2;
            const rx = ((y-cy)/cy)*-5, ry = ((x-cx)/cx)*5;
            card.style.transform = \`perspective(1000px) rotateX(\${rx}deg) rotateY(\${ry}deg) scale(1.01)\`;
            card.style.zIndex = 100;
        });
        card.addEventListener('mouseleave', () => { card.style.transform=''; card.style.zIndex=''; });
    });

    // ===== CLOCK =====
    function updateClock() {
        const n=new Date(), sc=n.getSeconds(), mn=n.getMinutes(), hr=n.getHours();
        const sd=(sc/60)*360, md=(mn/60)*360+(sc/60)*6, hd=(hr%12/12)*360+(mn/60)*30;
        const se=document.getElementById('second'), me=document.getElementById('minute'), he=document.getElementById('hour');
        if(se) se.style.transform=\`rotate(\${sd}deg)\`;
        if(me) me.style.transform=\`rotate(\${md}deg)\`;
        if(he) he.style.transform=\`rotate(\${hd}deg)\`;
        const de=document.getElementById('digital-clock');
        if(de) de.innerText=hr.toString().padStart(2,'0')+':'+mn.toString().padStart(2,'0')+':'+sc.toString().padStart(2,'0');
    }
    setInterval(updateClock,1000); updateClock();

    // ===== PORTFOLIO REVEAL =====
    const profileImg = document.getElementById('profile-img');
    const magazineFrame = document.querySelector('.magazine-frame');
    const portfolioSec = document.getElementById('portfolio-section');
    const idCardFloat = document.getElementById('scrollIdCard');
    const scrollObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                if(magazineFrame) magazineFrame.classList.add('revealed');
                if(profileImg) profileImg.classList.add('show');
            } else { if(e.boundingClientRect.top>0) { if(magazineFrame) magazineFrame.classList.remove('revealed'); if(profileImg) profileImg.classList.remove('show'); } }
        });
    }, { threshold:.1 });
    if(portfolioSec) scrollObs.observe(portfolioSec);
    const idObs = new IntersectionObserver(entries => {
        entries.forEach(e => { if(e.isIntersecting){if(idCardFloat)idCardFloat.classList.add('show');} else{if(e.boundingClientRect.top>0&&idCardFloat)idCardFloat.classList.remove('show');} });
    }, { threshold:.5 });
    if(portfolioSec) idObs.observe(portfolioSec);

    // ===== TERMINAL =====
    const tBody = document.getElementById('termBody');
    const tContent = document.getElementById('termContent');
    const tData = [
        {type:'system',text:'Initializing YashOS v3.0.26...'},
        {type:'system',text:'Authenticating developer status...'},
        {type:'prompt',command:'load_skills --all'},
        {type:'system',text:'Fetching encrypted Skillset_Main...'},
        {type:'output',text:'[OK] Frontend Architecture active.'},
        {type:'output',text:'[OK] Backend Logic synced.'},
        {type:'prompt',command:'show frontend'},
        {type:'output',text:'> HTML, CSS, JavaScript, React, Responsive Design'},
        {type:'prompt',command:'show programming'},
        {type:'output',text:'> C++, Data Structures, Algorithms, Problem Solving'},
        {type:'prompt',command:'show tools'},
        {type:'output',text:'> GitHub, Figma, VS Code, Firebase, Canva, Photoshop'},
        {type:'prompt',command:'show creative'},
        {type:'output',text:'> Graphic Design, UI/UX, Color Theory, Drawing & Sketching'},
        {type:'system',text:'Display complete. System idling...'},
        {type:'prompt',command:''}
    ];
    let lIdx=0, tBusy=false;
    const runBtn=document.getElementById('runTerminalBtn');
    const statusText=document.querySelector('.terminal-status');
    async function runTerminal() {
        if(tBusy) return;
        tContent.innerHTML=''; lIdx=0; tBusy=true;
        document.getElementById('termControls').style.display='none';
        for(;lIdx<tData.length;lIdx++) {
            const line=tData[lIdx];
            if(line.type==='prompt') {
                const p=document.createElement('span'); p.className='t-prompt'; p.textContent='Yash@mac:~\$ '; tContent.appendChild(p);
                const c=document.createElement('span'); c.className='t-command'; tContent.appendChild(c);
                for(let i=0;i<line.command.length;i++) { c.textContent+=line.command[i]; tBody.scrollTop=tBody.scrollHeight; await new Promise(r=>setTimeout(r,30+Math.random()*30)); }
                tContent.appendChild(document.createElement('br'));
            } else {
                const o=document.createElement('span'); o.className=line.type==='system'?'t-system':'t-output'; tContent.appendChild(o); o.textContent=line.text; tContent.appendChild(document.createElement('br'));
                await new Promise(r=>setTimeout(r,100));
            }
            tBody.scrollTop=tBody.scrollHeight; await new Promise(r=>setTimeout(r,300));
        }
        tBusy=false; if(statusText){statusText.textContent='System: Finished';statusText.style.color='#00f0ff';}
    }
    if(runBtn) runBtn.addEventListener('click',runTerminal);

    // ===== SCROLL INTRO GSAP =====
    const siWords=document.querySelectorAll('.si-word');
    const siBgs=document.querySelectorAll('.si-bg-layer');
    const siGlow=document.getElementById('si-glow');
    const siBgStack=document.getElementById('si-bg-stack');
    if(siWords.length>0) {
        const siTl=gsap.timeline({ scrollTrigger:{trigger:'#scroll-intro-section',start:'top top',end:'+=6000',pin:true,scrub:1.5} });
        siWords.forEach((word,i) => {
            siTl.fromTo(word,{opacity:0,filter:'blur(40px)',scale:1.3,letterSpacing:'4em'},{opacity:1,filter:'blur(0px)',scale:1,letterSpacing:'0.1em',duration:2.5,ease:'power2.out'},i*4)
                .fromTo(siBgs[i],{opacity:0,scale:1.2},{opacity:1,scale:1,duration:2.5},i*4)
                .to(word,{textShadow:'0 0 50px var(--accent-orange)',scale:1.05,duration:1.5},(i*4)+2)
                .to(word,{opacity:0,filter:'blur(20px)',scale:.9,letterSpacing:'-0.2em',duration:1.5},(i*4)+3.5)
                .to(siBgs[i],{opacity:0,scale:1.1,duration:1.5},(i*4)+3.5);
        });
        // Added: Hide the entire intro section after scroll is done to reveal content below
        siTl.to('#scroll-intro-section', { opacity: 0, visibility: 'hidden', pointerEvents: 'none', duration: 1 });
        window.addEventListener('mousemove',e=>{
            const x=(e.clientX-window.innerWidth/2)/40, y=(e.clientY-window.innerHeight/2)/40;
            if(siGlow) gsap.to(siGlow,{x,y,duration:1.2});
            if(siBgStack) gsap.to(siBgStack,{x:x*.5,y:y*.5,duration:1.5});
        });
    }

    // ===== CRAFT SECTION GSAP =====
    gsap.from('.about-image',{x:-60,opacity:0,duration:1.5,ease:'power4.out',scrollTrigger:{trigger:'.about-grid',start:'top 80%'}});
    gsap.from('.about-content',{x:60,opacity:0,duration:1.5,ease:'power4.out',scrollTrigger:{trigger:'.about-grid',start:'top 80%'}});
    // Removed gsap.from for service-item to ensure visibility
    // Removed gsap.from for skill boxes to ensure visibility
    // gsap.from('.about-skill',{x:-30,opacity:0,stagger:.08,duration:.8,ease:'back.out(1.5)',scrollTrigger:{trigger:'.about-skills',start:'top 85%'}});

    // ===== CONTACT SECTION GSAP =====
    gsap.from('.contact-left > *',{y:50,opacity:0,stagger:.2,duration:1.2,ease:'power3.out',scrollTrigger:{trigger:'#contact-section',start:'top 80%'}});
    gsap.from('.contact-form-wrap',{x:60,opacity:0,duration:1.5,ease:'power3.out',scrollTrigger:{trigger:'#contact-section',start:'top 80%'}});
    // Removed gsap.from for contact links to ensure visibility
    // gsap.from('.contact-link-item',{x:-30,opacity:0,stagger:.1,duration:.8,ease:'back.out(1.2)',scrollTrigger:{trigger:'.contact-links',start:'top 85%'}});

    // ===== TCG CARD REVEAL =====
    // Removed gsap.from for cards to ensure visibility, using simple trigger for title
    gsap.from('.arcane-title-wrap',{y:40,opacity:0,duration:1.2,ease:'power3.out',scrollTrigger:{trigger:'#projects-section',start:'top 80%'}});

    // ===== TIMELINE GSAP =====
    gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);
    setTimeout(()=>{
        const path=document.querySelector('#main-path');
        const follower=document.querySelector('#follower');
        if(!path) return;
        gsap.fromTo(path, { strokeDasharray: 4600, strokeDashoffset: 4600 }, { strokeDashoffset: 0, ease:'none', scrollTrigger:{trigger:'.timeline-container', start:'top 50%', end:'bottom 50%', scrub:1.5}});
        gsap.to(follower,{motionPath:{path:'#main-path',align:'#main-path',alignOrigin:[.5,.5]},ease:'none',scrollTrigger:{trigger:'.timeline-container',start:'top 50%',end:'bottom 50%',scrub:1.5}});
        gsap.from('.timeline-header',{y:50,opacity:0,duration:1.2,ease:'power3.out',scrollTrigger:{trigger:'#timeline-section',start:'top 80%',toggleActions:'play none none reverse'}});
        document.querySelectorAll('.timeline-item').forEach((item,i)=>{
            const content=item.querySelector('.timeline-content');
            const isLeft=item.classList.contains('item-left'), isCenter=item.classList.contains('item-center');
            const sx=isCenter?0:(isLeft?-100:100), sr=isCenter?0:(isLeft?15:-15), sy=isCenter?50:0;
            gsap.fromTo(content,{x:sx,y:sy,opacity:0,rotateY:sr},{x:0,y:0,opacity:1,rotateY:0,duration:1.5,ease:'back.out(1.2)',scrollTrigger:{trigger:item,start:'top 75%',toggleActions:'play none none reverse'}});
        });
        gsap.to('#final-box',{borderColor:'var(--accent-orange)',boxShadow:'0 0 40px rgba(255,77,0,.4)',duration:1,ease:'power2.out',scrollTrigger:{trigger:'#final-box',start:'top 60%',toggleActions:'play none none reverse'}});
        ScrollTrigger.refresh();
    }, 500);

    // ===== EMBER PARTICLES =====
    const eCanvas=document.getElementById('ember-canvas');
    const eCtx=eCanvas.getContext('2d');
    function resizeEmber(){eCanvas.width=eCanvas.offsetWidth;eCanvas.height=eCanvas.offsetHeight;}
    window.addEventListener('resize',resizeEmber); resizeEmber();
    class Ember {
        constructor(){this.reset();}
        reset(){this.x=Math.random()*eCanvas.width;this.y=eCanvas.height+10;this.size=Math.random()*2+1;this.speedY=Math.random()*1+.5;this.speedX=(Math.random()-.5)*.5;this.opacity=Math.random()*.5+.2;}
        update(){this.y-=this.speedY;this.x+=this.speedX;this.opacity-=.002;if(this.opacity<=0||this.y<-10)this.reset();}
        draw(){eCtx.fillStyle=\`rgba(255,77,0,\${this.opacity})\`;eCtx.beginPath();eCtx.arc(this.x,this.y,this.size,0,Math.PI*2);eCtx.fill();}
    }
    const embers=[];
    for(let i=0;i<60;i++) embers.push(new Ember());
    function animEmbers(){eCtx.clearRect(0,0,eCanvas.width,eCanvas.height);embers.forEach(e=>{e.update();e.draw();});requestAnimationFrame(animEmbers);}
    animEmbers();

    // ===== CONTACT FORM =====
    const formSubmit=document.getElementById('form-submit');
    if(formSubmit) {
        formSubmit.addEventListener('click',()=>{
            const name=document.getElementById('form-name').value;
            const email=document.getElementById('form-email').value;
            const subject=document.getElementById('form-subject')?.value || 'Portfolio Contact';
            const msg=document.getElementById('form-message').value;
            
            if(!name || !email || !msg){
                formSubmit.style.background='#c0392b';
                formSubmit.textContent='Fill all fields!';
                setTimeout(()=>{formSubmit.style.background='';formSubmit.textContent='Send Message 🚀';},2000);
                return;
            }
            
            // Construct mailto link
            const mailtoLink = \`mailto:yashtambade56@gmail.com?subject=\${encodeURIComponent(subject)}&body=\${encodeURIComponent("Name: " + name + "\\nEmail: " + email + "\\n\\nMessage:\\n" + msg)}\`;
            
            formSubmit.textContent='Opening Email... ✈️';
            
            // Open email client
            window.location.href = mailtoLink;
            
            setTimeout(()=>{
                formSubmit.style.display='none';
                document.getElementById('form-success').classList.add('show');
            },1500);
        });
    }

    // ===== SKILLS MARQUEE HOVER PAUSE =====
    document.querySelectorAll('.skills-marquee-row').forEach(row=>{
        row.addEventListener('mouseenter',()=>{row.querySelectorAll('.skills-marquee-content').forEach(c=>{c.style.animationPlayState='paused';});});
        row.addEventListener('mouseleave',()=>{row.querySelectorAll('.skills-marquee-content').forEach(c=>{c.style.animationPlayState='running';});});
    });

    setTimeout(()=>{ ScrollTrigger.refresh(); }, 100);
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="app">
      <Preloader />
      <Cursor />
      <ProgressBar />
      <FloatingParticles />
      <FloatingNav />
      <Landing />
      <ScrollIntro />
      <Marquee />
      <Craft />
      <PortfolioMagazine />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
