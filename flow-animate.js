// flow-animate.js

async function injectHeroSVG() {
    const host = document.getElementById('hero-bg');
    try {
      const res = await fetch('assets/hero-art.svg');   // caminho do seu arquivo
      const svg = await res.text();
      host.innerHTML = svg;
  
      const s = host.querySelector('svg');
      if (s) {
        s.setAttribute('width', '100%');
        s.setAttribute('height', '100%');
        s.setAttribute('preserveAspectRatio', 'xMidYMid slice');
      }
    } catch (e) {
      console.error('Erro ao carregar hero-art.svg', e);
    }
  }
  
  function startGSAP() {
    // pegue os elementos DEPOIS que o SVG foi injetado
    var $circles  = document.getElementsByClassName("dot-line1");
    var $circles2 = document.getElementsByClassName("dot-line2");
    var $circles3 = document.getElementsByClassName("dot-line3");
    var $circles4 = document.getElementsByClassName("dot-line4");
    var $circles5 = document.getElementsByClassName("dot-line5");
    var $circles6 = document.getElementsByClassName("dot-line6");
    var $circles7 = document.getElementsByClassName("dot-line7");
    var $circles8 = document.getElementsByClassName("dot-line8");
  
    var $cube1 = document.getElementById('cube1');
    var $cube2 = document.getElementById('cube2');
    // var $cubeLines1 = document.getElementById('cubeLines1'); // se usar
  
    // timelines (evite duplicar var tl2)
    var tl  = new TimelineMax({ repeat: -1 });
    var tl2 = new TimelineMax({ repeat: -1 });
    var tl3 = new TimelineMax({ repeat: -1 });
    var tl4 = new TimelineMax({ repeat: -1 });
    var tl5 = new TimelineMax({ repeat: -1 });
    var tl6 = new TimelineMax({ repeat: -1 });
    var tl7 = new TimelineMax({ repeat: -1 });
    var tl8 = new TimelineMax({ repeat: -1 });
  
    var cubetl  = new TimelineMax({ repeat: -1, repeatDelay: 4 });
    var cubetl2 = new TimelineMax({ repeat: -1, repeatDelay: 2 });
  
    // mesmas animações que você já tinha
    tl .staggerTo($circles , 0.01, { fill: "#F13738", scale: 2 }, 0.1);
    tl .staggerTo($circles , 0.01, { fill: "#FFFFFF", scale: 1 }, 0.1, "-=2.2");
  
    tl2.staggerTo($circles2, 0.01, { fill: "#F13738", scale: 2 }, 0.1);
    tl2.staggerTo($circles2, 0.01, { fill: "#FFFFFF", scale: 1 }, 0.1, "-=6.3");
  
    tl3.staggerTo($circles3, 0.01, { fill: "#F13738", scale: 2 }, 0.1);
    tl3.staggerTo($circles3, 0.01, { fill: "#FFFFFF", scale: 1 }, 0.1, "-=3.3");
  
    tl4.staggerTo($circles4, 0.01, { fill: "#F13738", scale: 2 }, 0.1);
    tl4.staggerTo($circles4, 0.01, { fill: "#FFFFFF", scale: 1 }, 0.1, "-=7.3");
  
    tl5.staggerTo($circles5, 0.01, { fill: "#F13738", scale: 2 }, 0.1);
    tl5.staggerTo($circles5, 0.01, { fill: "#FFFFFF", scale: 1 }, 0.1, "-=2");
  
    tl6.staggerTo($circles6, 0.01, { fill: "#F13738", scale: 2 }, -0.1);
    tl6.staggerTo($circles6, 0.01, { fill: "#FFFFFF", scale: 1 }, -0.1, "-=3.3");
  
    tl7.staggerTo($circles7, 0.01, { fill: "#F13738", scale: 2 }, -0.1);
    tl7.staggerTo($circles7, 0.01, { fill: "#FFFFFF", scale: 1 }, -0.1, "-=1");
  
    tl8.staggerTo($circles8, 0.01, { fill: "#F13738", scale: 2 }, 0.1);
    tl8.staggerTo($circles8, 0.01, { fill: "#FFFFFF", scale: 1 }, 0.1, "-=10.6");
  
    // cubos (ajuste se precisar)
    if ($cube1) cubetl .to($cube1, 1,   { y: 55,   autoAlpha: 0, delay: 3 });
    if ($cube2) {
      cubetl2.to($cube2, 2.5, { y: -210, autoAlpha: 1, delay: 3, ease: Expo.easeOut });
      // a transformação abaixo depende do sistema de coords do seu SVG;
      // se o grupo #cube2 já está posicionado, talvez nem precise:
      cubetl2.to($cube2, 1,   { x: 91.244, y: -338.96, delay: 3 });
    }
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    await injectHeroSVG();  // coloca o SVG no #hero-bg
    startGSAP();            // só então pega os nós e anima
  });
  