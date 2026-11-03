import {useEffect,useRef} from 'react';import {motion,useReducedMotion,useMotionValue,useSpring,useTransform} from 'framer-motion';import {Volume2,ArrowRight} from 'lucide-react';
import PoliceLightBackground from './PoliceLightBackground';import IntroLogo from './IntroLogo';import IntroMusicPlayer from './IntroMusicPlayer';
import {useAudio} from '../hooks/AudioContext';import {profile} from '../data/content';
export default function CinematicIntro({onDone}){const r=useReducedMotion();const {playing,toggle}=useAudio();const skip=useRef();const T=r?5:8;
 const mx=useMotionValue(0),my=useMotionValue(0);const sx=useSpring(mx,{stiffness:55,damping:18}),sy=useSpring(my,{stiffness:55,damping:18});
 const rotY=useTransform(sx,[-1,1],[-9,9]),rotX=useTransform(sy,[-1,1],[7,-7]),lx=useTransform(sx,[-1,1],[-20,20]),ly=useTransform(sy,[-1,1],[-14,14]);
 const move=e=>{if(r||e.pointerType!=='mouse')return;mx.set(e.clientX/innerWidth*2-1);my.set(e.clientY/innerHeight*2-1)};
 useEffect(()=>{const id=setTimeout(onDone,T*1000);const k=e=>e.key==='Escape'&&onDone();addEventListener('keydown',k);document.body.style.overflow='hidden';skip.current?.focus();
  return()=>{clearTimeout(id);removeEventListener('keydown',k);document.body.style.overflow=''}},[]);
 const fade=(d,y=16)=>({initial:r?false:{opacity:0,y,filter:'blur(10px)'},animate:{opacity:1,y:0,filter:'blur(0px)'},transition:{duration:1.3,delay:r?0:d,ease:[.22,1,.36,1]}});
 return <motion.div className="intro" role="dialog" aria-label="NØX intro" onPointerMove={move} exit={{opacity:0}} transition={{duration:1.4}}>
 <PoliceLightBackground mx={sx} my={sy}/>
 <div className="iprog"><motion.i initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:T,ease:'linear'}}/></div>
 <button ref={skip} className="iskip glass" onClick={onDone}>Skip Intro</button>
 <motion.div className="istack" style={{rotateX:rotX,rotateY:rotY,transformPerspective:900}}>
  <motion.p className="ikick" {...fade(.8)}>ENTER THE WORLD OF</motion.p>
  <IntroLogo x={lx} y={ly}/>
  <motion.h2 className="iname" {...fade(3)}>{profile.name.toUpperCase()}</motion.h2>
  <motion.p className="iwelcome" {...fade(3.8,10)}>Digital experiences beyond imagination.</motion.p></motion.div>
 <div className="ibottom"><motion.div className="iacts" {...fade(4.2,10)}>{!playing&&<button className="btn ghost sm" onClick={toggle}><Volume2 size={16}/>Tap for Sound</button>}
  <button className="btn sm" onClick={onDone}>Enter Portfolio <ArrowRight size={16}/></button></motion.div><IntroMusicPlayer/></div></motion.div>}
