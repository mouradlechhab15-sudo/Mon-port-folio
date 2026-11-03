import {Code2,Palette,Braces,Atom,Server,Route,Database,GitBranch,Cloud} from 'lucide-react';
export const profile={name:'Mourad Lechhab',age:22,brand:'NØX',role:'Full Stack Developer & Creative Digital Artist',location:'Morocco',
 email:'Mouradlechhab15@gmail.com',whatsapp:'212760434854',instagram:'https://www.instagram.com/mourad_lechhab?utm_source=qr',github:'https://github.com/mouradlechhab15-sudo',linkedin:'https://www.linkedin.com/in/mourad-lechhab-17850138a?utm_source=share_via&utm_content=profile&utm_medium=member_ios'};
export const nav=['About','Skills','Projects','Experience','Contact'];
export const skills=[
 {name:'HTML5',cat:'Frontend',level:95,icon:Code2},{name:'CSS3',cat:'Frontend',level:92,icon:Palette},
 {name:'JavaScript',cat:'Language',level:90,icon:Braces},{name:'React',cat:'Frontend',level:88,icon:Atom},
 {name:'Node.js',cat:'Backend',level:85,icon:Server},{name:'Express.js',cat:'Backend',level:84,icon:Route},
 {name:'MongoDB',cat:'Database',level:82,icon:Database},{name:'Git & GitHub',cat:'Tooling',level:88,icon:GitBranch},
 {name:'Microsoft Azure',cat:'Cloud',level:75,icon:Cloud}];
export const projects=[
 {title:'StockFlow',sub:'Inventory Management SaaS',desc:'A multi-tenant inventory platform with real-time stock tracking, low-stock alerts and analytics.',tech:['React','Node.js','Express','MongoDB'],demo:'https://projcet-mourad-lechhab.vercel.app/',repo:'https://github.com/mouradlechhab15-sudo/Projcet-Mourad-Lechhab',g:'linear-gradient(135deg,#6d5dfc,#1b2a6b)'},
 {title:'Velora',sub:'Premium E-commerce Experience',desc:'A luxury storefront with fluid product transitions, cart logic and a streamlined checkout.',tech:['React','Framer Motion','Node.js'],demo:'https://mourad-lechhab.vercel.app/',repo:'https://github.com/mouradlechhab15-sudo/Mourad-lechhab',g:'linear-gradient(135deg,#b9a7ff,#5aa9ff)'},
 {title:'Cloud Portfolio',sub:'Azure Deployment',desc:'A portfolio shipped through a CI/CD pipeline on Microsoft Azure with custom domain and HTTPS.',tech:['Azure','GitHub Actions','Vite'],demo:'https://mon-port-folio-q4ix.vercel.app/',repo:'https://github.com/mouradlechhab15-sudo/Mon-port-folio',g:'linear-gradient(135deg,#2b1b5e,#4fa3ff)'}];
export const experience=[{year:'2024 — Now',title:'Freelance Full Stack Developer',text:'Building web products for clients, from design to deployment.'},{year:'2022 — 2024',title:'Self-taught Journey',text:'Mastered the MERN stack through projects, and cloud deployment on Azure.'}];
// Add your MP3s to public/music/ then list them here.
// BASE_URL keeps paths valid in dev, production and GitHub Pages subfolders. Files live in public/music/.
const m=f=>`${import.meta.env.BASE_URL}music/${f}`;
export const playlist=[
 {title:'Track 01 — Midnight Drive',artist:'NØX',src:m('track-01.mp3'),g:'linear-gradient(135deg,#6d5dfc,#0b1033)'},
 {title:'Track 02 — Dark Atmosphere',artist:'NØX',src:m('track-02.mp3'),g:'linear-gradient(135deg,#9c1030,#1a2a8b)'},
 {title:'Track 03 — Night Journey',artist:'NØX',src:m('track-03.mp3'),g:'linear-gradient(135deg,#1b2a6b,#b9a7ff)'}];
