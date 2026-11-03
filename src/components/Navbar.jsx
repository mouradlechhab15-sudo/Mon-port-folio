import {useState} from 'react';import {Sun,Moon,Search,Menu,X} from 'lucide-react';import {motion} from 'framer-motion';
import {nav} from '../data/content';import useActiveSection from '../hooks/useActiveSection';
const go=id=>document.getElementById(id.toLowerCase())?.scrollIntoView({behavior:'smooth'});
export default function Navbar({theme,toggle}){const active=useActiveSection(nav.map(n=>n.toLowerCase()));const [open,setOpen]=useState(false);const [sq,setSq]=useState(null);
 const hits=sq?nav.filter(n=>n.toLowerCase().includes(sq.toLowerCase())):[];
 return <header className="nav glass"><button className="logo" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>NØX</button>
 <nav className={'links '+(open?'open':'')}>{nav.map(n=><a key={n} href={'#'+n.toLowerCase()} onClick={e=>{e.preventDefault();setOpen(false);go(n)}} className={active===n.toLowerCase()?'on':''}>{n}{active===n.toLowerCase()&&<motion.span layoutId="ind" className="ind"/>}</a>)}</nav>
 <div className="nav-r"><span className="avail"><i/>Available</span>
 <div className="search"><button aria-label="Search" onClick={()=>setSq(sq===null?'':null)}><Search size={18}/></button>
 {sq!==null&&<div className="pop glass"><input autoFocus value={sq} onChange={e=>setSq(e.target.value)} placeholder="Jump to…"/>{hits.map(h=><button key={h} onClick={()=>{go(h);setSq(null)}}>{h}</button>)}</div>}</div>
 <button aria-label="Toggle theme" onClick={toggle}>{theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}</button>
 <button className="btn sm" onClick={()=>go('contact')}>Get in Touch</button>
 <button className="burger" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X size={20}/>:<Menu size={20}/>}</button></div></header>}
