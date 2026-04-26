const fs = require('fs');

const html = fs.readFileSync('../index.html', 'utf-8');

// Simple conversion for JSX
function htmlToJSX(htmlString) {
    let jsx = htmlString
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/<!--/g, '{/*')
        .replace(/-->/g, '*/}')
        .replace(/<img(.*?)>/g, (match, p1) => {
            if (p1.endsWith('/')) return match;
            return `<img${p1} />`;
        })
        .replace(/<input(.*?)>/g, (match, p1) => {
            if (p1.endsWith('/')) return match;
            return `<input${p1} />`;
        })
        .replace(/<canvas(.*?)><\/canvas>/g, '<canvas$1 />')
        .replace(/<br>/g, '<br />')
        .replace(/<hr>/g, '<hr />');
        
    jsx = jsx.replace(/style="background-image:url\('(.*?)'\);?"/g, 'style={{ backgroundImage: `url(${"$1"})` }}');
    jsx = jsx.replace(/style="transform:rotate\((.*?)deg\)"/g, 'style={{ transform: "rotate($1deg)" }}');
    jsx = jsx.replace(/style="margin-top:\s*0;?"/g, 'style={{ marginTop: 0 }}');
    jsx = jsx.replace(/style="display:flex; flex-direction:column; gap:30px; width: 100%; height: 100%;"/g, 'style={{ display: "flex", flexDirection: "column", gap: "30px", width: "100%", height: "100%" }}');
    
    return jsx;
}

const sections = {
    'Preloader': /{\/\* PRELOADER \*\/}([\s\S]*?){\/\* CURSOR \*\/}/,
    'Cursor': /{\/\* CURSOR \*\/}([\s\S]*?){\/\* PROGRESS BAR \*\/}/,
    'ProgressBar': /{\/\* PROGRESS BAR \*\/}([\s\S]*?){\/\* FLOATING PARTICLES \*\/}/,
    'FloatingParticles': /{\/\* FLOATING PARTICLES \*\/}([\s\S]*?){\/\* FLOATING NAV \*\/}/,
    'FloatingNav': /{\/\* FLOATING NAV \*\/}([\s\S]*?){\/\* LANDING \*\/}/,
    'Landing': /{\/\* LANDING \*\/}([\s\S]*?){\/\* SCROLL INTRO \*\/}/,
    'ScrollIntro': /{\/\* SCROLL INTRO \*\/}([\s\S]*?){\/\* MARQUEE \*\/}/,
    'Marquee': /{\/\* MARQUEE \*\/}([\s\S]*?){\/\* CRAFT \/ ABOUT \*\/}/,
    'Craft': /{\/\* CRAFT \/ ABOUT \*\/}([\s\S]*?){\/\* PORTFOLIO MAGAZINE \*\/}/,
    'PortfolioMagazine': /{\/\* PORTFOLIO MAGAZINE \*\/}([\s\S]*?){\/\* SKILLS \*\/}/,
    'Skills': /{\/\* SKILLS \*\/}([\s\S]*?){\/\* TIMELINE \*\/}/,
    'Timeline': /{\/\* TIMELINE \*\/}([\s\S]*?){\/\* ARCANE PROJECTS SECTION \*\/}/,
    'Projects': /{\/\* ARCANE PROJECTS SECTION \*\/}([\s\S]*?){\/\* CONTACT SECTION \*\/}/,
    'Contact': /{\/\* CONTACT SECTION \*\/}([\s\S]*?){\/\* FOOTER \*\/}/,
    'Footer': /{\/\* FOOTER \*\/}([\s\S]*?){\/\* ANIME\.JS & GSAP \*\/}/
};

if (!fs.existsSync('src/components')) {
    fs.mkdirSync('src/components');
}

const fullJSX = htmlToJSX(html);

let appImports = [];
let appComponents = [];

for (const [name, regex] of Object.entries(sections)) {
    const match = fullJSX.match(regex);
    if (match) {
        let compJSX = match[1];
        const compCode = `import React from 'react';\n\nexport default function ${name}() {\n  return (\n    <>\n${compJSX}\n    </>\n  );\n}\n`;
        fs.writeFileSync(`src/components/${name}.jsx`, compCode);
        appImports.push(`import ${name} from './components/${name}';`);
        appComponents.push(`      <${name} />`);
    } else {
        console.log(`Failed to find section: ${name}`);
    }
}

const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>\n<\/body>/);
const scripts = scriptMatch ? scriptMatch[1] : '';

const appCode = `import React, { useEffect } from 'react';
${appImports.join('\n')}

export default function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = \`${scripts.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="app">
${appComponents.join('\n')}
    </div>
  );
}
`;
fs.writeFileSync('src/App.jsx', appCode);

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
    fs.writeFileSync('src/index.css', styleMatch[1]);
}

const reactHtmlPath = 'index.html';
let reactHtml = fs.readFileSync(reactHtmlPath, 'utf-8');
if (!reactHtml.includes('Cormorant+Garamond')) {
    const headAdditions = `
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@300;400;600&family=Share+Tech+Mono&family=Cinzel+Decorative:wght@700;900&family=Metamorphous&family=Syncopate:wght@700&display=swap" rel="stylesheet">
    `;
    const bodyAdditions = `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/MotionPathPlugin.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js"></script>
    `;
    reactHtml = reactHtml.replace('</head>', headAdditions + '\n  </head>');
    reactHtml = reactHtml.replace('</body>', bodyAdditions + '\n  </body>');
    fs.writeFileSync(reactHtmlPath, reactHtml);
}

console.log("Converted successfully!");
