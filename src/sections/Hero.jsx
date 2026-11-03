import {useEffect,useState} from 'react';import {motion,useMotionValue,useTransform,useReducedMotion} from 'framer-motion';import {ArrowDownRight} from 'lucide-react';
import Magnetic from '../components/Magnetic';
const full='Engineering digital experiences beyond imagination.';
export default function Hero(){const r=useReducedMotion();const [n,setN]=useState(r?full.length:0);const mx=useMotionValue(0),my=useMotionValue(0);
 const ex=useTransform(mx,[-1,1],[-24,24]),ey=useTransform(my,[-1,1],[-24,24]);
 useEffect(()=>{if(r)return;const id=setInterval(()=>setN(v=>v<full.length?v+1:v),45);return()=>clearInterval(id)},[r]);
 const go=id=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
 const word=(w,d)=><span className="mask"><motion.span initial={r?false:{y:'110%'}} animate={{y:0}} transition={{duration:1,delay:d,ease:[.22,1,.36,1]}}>{w}</motion.span></span>;
 return <section id="hero" className="hero" onMouseMove={e=>{mx.set(e.clientX/innerWidth*2-1);my.set(e.clientY/innerHeight*2-1)}}>
 <div className="hero-l"><span className="badge glass"><i/>Available for new projects</span>
 <h1>{word('Mourad',.1)}<br/>{word('NØX.',.25)}</h1>
 <p className="sub">{full.slice(0,n)}<span className="caret"/></p>
 <p className="desc">I'm a 22-year-old creative full stack developer from Morocco, transforming ideas into elegant, powerful, and immersive digital experiences.</p>
 <div className="cta"><Magnetic><button className="btn" onClick={()=>go('projects')}>Explore My Work <ArrowDownRight size={18}/></button></Magnetic><Magnetic><button className="btn ghost" onClick={()=>go('contact')}>Let's Connect</button></Magnetic></div></div>
 <motion.div className="emblem" style={{x:ex,y:ey}}><div className="ring r1"/><div className="ring r2"/><div className="ring r3"/><div className="core"><span>NØX</span></div>
 <div className="orb o1"/><div className="orb o2"/><div className="orb o3"/></motion.div></section>}
