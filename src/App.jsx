import {useEffect,useState} from 'react';import {AnimatePresence,motion} from 'framer-motion';import useLocalStorage from './hooks/useLocalStorage';import {AudioProvider} from './hooks/AudioContext';
import Navbar from './components/Navbar';import MainMusicPlayer from './components/MainMusicPlayer';import CinematicIntro from './components/CinematicIntro';
import Hero from './sections/Hero';import About from './sections/About';import Skills from './sections/Skills';import Projects from './sections/Projects';import Experience from './sections/Experience';import Contact from './sections/Contact';
export default function App(){const [theme,setTheme]=useLocalStorage('nox-theme','dark');const [done,setDone]=useState(false);
 useEffect(()=>{document.documentElement.setAttribute('data-theme',theme)},[theme]);
 return <AudioProvider><div className="bg"><i/><i/><i/></div>
 <AnimatePresence>{!done&&<CinematicIntro key="intro" onDone={()=>setDone(true)}/>}</AnimatePresence>
 {done&&<><Navbar theme={theme} toggle={()=>setTheme(theme==='dark'?'light':'dark')}/>
 <motion.main initial={{opacity:0,scale:1.06,filter:'blur(14px)'}} animate={{opacity:1,scale:1,filter:'blur(0px)'}} transition={{duration:1.8,ease:[.22,1,.36,1]}}><Hero/><About/><Skills/><Projects/><Experience/><Contact/></motion.main><MainMusicPlayer/></>}</AudioProvider>}
