import {useState} from 'react';import {Play,Pause,SkipBack,SkipForward,Volume2,VolumeX} from 'lucide-react';
import {playlist} from '../data/content';import {useAudio} from '../hooks/AudioContext';
const fmt=s=>isFinite(s)&&s>0?`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`:'0:00';
// Replace public/images/nox-cover.jpg to change the artwork (no code change). Missing file -> NØX placeholder.
const COVER=`${import.meta.env.BASE_URL}images/nox-cover.jpg`;
function Disc({on}){const [miss,setMiss]=useState(false);
 return <div className={'disc '+(on?'on':'')}><i className="orbit o1"/><i className="orbit o2"/>
 <div className="vinyl spin">{miss?<span className="ph">NØX</span>:<img src={COVER} alt="" draggable="false" onError={()=>setMiss(true)}/>}</div><i className="shine"/><i className="hole"/></div>}
// One component for intro + main; both read the single shared <audio> from AudioContext.
export default function MusicPlayer({variant='main'}){const {idx,playing,t,d,vol,muted,bad,toggle,pick,seek,setVol,setMuted}=useAudio();const [list,setList]=useState(false);const tr=playlist[idx];
 return <div className={`player glass ${variant} ${playing?'playing':''}`}><i className="p-glow"/>
 <button className="disc-btn" aria-label="Open playlist" onClick={()=>setList(!list)}><Disc on={playing}/></button>
 <div className="p-mid"><div className="p-info"><div className="p-t"><b>{tr.title}</b><small>{bad[idx]?'File not found in public/music':tr.artist}</small></div>
  <div className="viz" aria-hidden="true">{[...Array(5)].map((_,k)=><i key={k} style={{animationDelay:k*.11+'s'}}/>)}</div></div>
  <div className="p-prog"><span>{fmt(t)}</span><input type="range" min="0" max={d||0} step=".1" value={t} aria-label="Progress" onChange={e=>seek(+e.target.value)}/><span>{fmt(d)}</span></div></div>
 <div className="p-ctl"><button aria-label="Previous track" onClick={()=>pick(idx-1)}><SkipBack size={16}/></button>
 <button className="pp" aria-label={playing?'Pause':'Play'} onClick={toggle}>{playing?<Pause size={17}/>:<Play size={17}/>}</button>
 <button aria-label="Next track" onClick={()=>pick(idx+1)}><SkipForward size={16}/></button></div>
 <div className="vwrap"><button aria-label={muted?'Unmute':'Mute'} onClick={()=>setMuted(!muted)}>{muted||vol===0?<VolumeX size={16}/>:<Volume2 size={16}/>}</button>
 <input className="vol" type="range" min="0" max="1" step=".01" value={muted?0:vol} aria-label="Volume" onChange={e=>setVol(+e.target.value)}/></div>
 {list&&<ul className="plist glass">{playlist.map((p,n)=><li key={n}><button className={n===idx?'on':''} onClick={()=>{pick(n);setList(false)}}><span className="dot" style={{background:p.g}}/>{p.title}<small>{p.artist}</small></button></li>)}</ul>}</div>}
