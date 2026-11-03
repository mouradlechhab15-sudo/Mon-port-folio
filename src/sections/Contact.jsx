import {useState} from 'react';import {Mail,MessageCircle,Instagram,Github,Linkedin,Copy,Check} from 'lucide-react';import Reveal from '../components/Reveal';import {profile as p} from '../data/content';
const links=[[Mail,'Email',p.email,`mailto:${p.email}`],[MessageCircle,'WhatsApp','+'+p.whatsapp,`https://wa.me/${p.whatsapp}`],[Instagram,'Instagram',p.instagram,p.instagram],[Github,'GitHub',p.github,p.github],[Linkedin,'LinkedIn',p.linkedin,p.linkedin]];
export default function Contact(){const [c,setC]=useState(null);const [f,setF]=useState({name:'',email:'',message:''});const [err,setErr]=useState({});const [sent,setSent]=useState(false);
 const copy=async(v,k)=>{try{await navigator.clipboard.writeText(v)}catch{}setC(k);setTimeout(()=>setC(null),1500)};
 const submit=e=>{e.preventDefault();const x={};if(f.name.trim().length<2)x.name='Enter your name';if(!/^\S+@\S+\.\S+$/.test(f.email))x.email='Enter a valid email';if(f.message.trim().length<10)x.message='At least 10 characters';setErr(x);if(Object.keys(x).length)return;
 // mailto fallback: opens the visitor's mail app. See README for EmailJS/Formspree.
 location.href=`mailto:${p.email}?subject=${encodeURIComponent('Portfolio message from '+f.name)}&body=${encodeURIComponent(f.message+'\n\n— '+f.name+' ('+f.email+')')}`;setSent(true)};
 return <section id="contact" className="sec"><Reveal><p className="eyebrow">05 — Contact</p><h2>Let's build something <em>extraordinary</em>.</h2></Reveal>
 <div className="grid g2"><div className="stack">{links.map(([I,l,v,h])=><Reveal key={l}><div className="card glass row"><I size={22}/><a href={h} target="_blank" rel="noreferrer"><b>{l}</b><small>{v}</small></a><button aria-label={'Copy '+l} onClick={()=>copy(v,l)}>{c===l?<Check size={18}/>:<Copy size={18}/>}</button></div></Reveal>)}</div>
 <Reveal><form className="card glass form" onSubmit={submit} noValidate>{['name','email'].map(k=><label key={k}>{k}<input value={f[k]} onChange={e=>setF({...f,[k]:e.target.value})}/>{err[k]&&<em>{err[k]}</em>}</label>)}
 <label>message<textarea rows="5" value={f.message} onChange={e=>setF({...f,message:e.target.value})}/>{err.message&&<em>{err.message}</em>}</label>
 <button className="btn">Send Message</button>{sent&&<small>Opening your mail app…</small>}</form></Reveal></div>
 <footer>© {new Date().getFullYear()} NØX — Mourad Lechhab. The Future of Digital Experiences.</footer></section>}
