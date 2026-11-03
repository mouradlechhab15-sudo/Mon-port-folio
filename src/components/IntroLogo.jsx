import {motion,useReducedMotion} from 'framer-motion';
export default function IntroLogo({x,y}){const r=useReducedMotion();
 return <motion.div className="ilogo" style={{x,y}}><motion.div className="iglow" initial={r?false:{opacity:0,scale:.5}} animate={{opacity:1,scale:1}} transition={{duration:2.4,delay:.5}}/>
 <div className="iring"/><div className="iring r2"/>
 <h1 className="ibrand" aria-label="NØX">{['N','Ø','X'].map((c,i)=><motion.span key={i} aria-hidden="true" initial={r?false:{opacity:0,y:36,filter:'blur(20px)'}} animate={{opacity:1,y:0,filter:'blur(0px)'}} transition={{duration:1.5,delay:1.5+i*.28,ease:[.22,1,.36,1]}}>{c}</motion.span>)}</h1></motion.div>}
