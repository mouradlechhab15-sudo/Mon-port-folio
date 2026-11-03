import {motion} from 'framer-motion';import Reveal from '../components/Reveal';import {skills} from '../data/content';
export default function Skills(){return <section id="skills" className="sec"><Reveal><p className="eyebrow">02 — Skills</p><h2>The <em>toolkit</em>.</h2></Reveal>
 <div className="grid g3">{skills.map((s,i)=>{const I=s.icon;return <Reveal key={s.name} delay={(i%3)*.08}><motion.div className="card glass skill" whileHover={{y:-8,scale:1.02}}><I size={28}/><h3>{s.name}</h3><small>{s.cat}</small>
 <div className="bar"><motion.i initial={{width:0}} whileInView={{width:s.level+'%'}} viewport={{once:true}} transition={{duration:1.2,delay:.2}}/></div><span className="pct">{s.level}%</span></motion.div></Reveal>})}</div></section>}
