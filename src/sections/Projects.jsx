import {motion} from 'framer-motion';import {ExternalLink,Github} from 'lucide-react';import Reveal from '../components/Reveal';import {projects} from '../data/content';
export default function Projects(){return <section id="projects" className="sec"><Reveal><p className="eyebrow">03 — Projects</p><h2>Selected <em>work</em>.</h2></Reveal>
 {projects.map((p,i)=><Reveal key={p.title}><motion.article className={'proj glass '+(i%2?'flip':'')} whileHover={{y:-6}}>
 <div className="shot" style={{background:p.g}}><span>{p.title}</span></div>
 <div className="pinfo"><small>0{i+1} — {p.sub}</small><h3>{p.title}</h3><p>{p.desc}</p><ul>{p.tech.map(t=><li key={t}>{t}</li>)}</ul>
 <div className="cta"><a className="btn sm" href={p.demo} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={15}/></a><a className="btn sm ghost" href={p.repo} target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a></div></div></motion.article></Reveal>)}</section>}
