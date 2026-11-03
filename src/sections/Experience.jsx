import Reveal from '../components/Reveal';import {experience} from '../data/content';
export default function Experience(){return <section id="experience" className="sec"><Reveal><p className="eyebrow">04 — Experience</p><h2>The <em>path</em> so far.</h2></Reveal>
 <div className="tl">{experience.map(e=><Reveal key={e.title}><div className="card glass"><small>{e.year}</small><h3>{e.title}</h3><p>{e.text}</p></div></Reveal>)}</div></section>}
