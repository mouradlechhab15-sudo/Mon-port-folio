import {createContext,useContext,useRef,useState,useEffect} from 'react';
import {playlist} from '../data/content';import useLocalStorage from './useLocalStorage';
const Ctx=createContext(null);export const useAudio=()=>useContext(Ctx);
// ONE <audio> instance for the whole app: it lives in this provider, so the intro -> portfolio swap never restarts the music.
export function AudioProvider({children}){
 const a=useRef(null);if(!a.current)a.current=new Audio();
 const [saved,setI]=useLocalStorage('nox-track',0);const idx=saved<playlist.length?saved:0;
 const [vol,setVol]=useLocalStorage('nox-vol',.6);const [muted,setMuted]=useLocalStorage('nox-muted',false);
 const [playing,setPlaying]=useState(false);const [t,setT]=useState(0);const [d,setD]=useState(0);const [bad,setBad]=useState({});
 const resume=useRef(false),idxRef=useRef(idx);idxRef.current=idx;
 const markBad=()=>{setBad(b=>({...b,[idxRef.current]:1}));setPlaying(false)};
 const play=()=>a.current.play().then(()=>setPlaying(true)).catch(markBad);
 useEffect(()=>{const el=a.current;const on=(n,f)=>el.addEventListener(n,f);
  on('timeupdate',()=>setT(el.currentTime));on('loadedmetadata',()=>setD(el.duration));on('error',markBad);
  on('play',()=>setPlaying(true));on('pause',()=>setPlaying(false));on('ended',()=>{resume.current=true;setI(i=>(i+1)%playlist.length)});
  return()=>el.pause()},[]);
 useEffect(()=>{const el=a.current;el.src=playlist[idx].src;setT(0);setD(0);if(resume.current){resume.current=false;play()}},[idx]);
 useEffect(()=>{a.current.volume=vol;a.current.muted=muted},[vol,muted]);
 const value={idx,playing,t,d,vol,muted,bad,
  toggle:()=>playing?a.current.pause():play(),
  pick:n=>{resume.current=playing;setI((n+playlist.length)%playlist.length)},
  seek:v=>{a.current.currentTime=v;setT(v)},
  setVol:v=>{setVol(v);setMuted(false)},setMuted};
 return <Ctx.Provider value={value}>{children}</Ctx.Provider>}
