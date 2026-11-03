import {useMemo} from 'react';import {motion,useTransform} from 'framer-motion';
// mx/my: smoothed cursor values in [-1,1] (stay 0 on touch / reduced motion -> pure ambient animation)
export default function PoliceLightBackground({mx,my}){
 const W=typeof innerWidth==='number'?innerWidth:1200,H=typeof innerHeight==='number'?innerHeight:800;
 const bx=useTransform(mx,v=>v*60),by=useTransform(my,v=>v*30),rx=useTransform(mx,v=>v*-60),ry=useTransform(my,v=>v*-30);
 const gx=useTransform(mx,v=>v*W*.4),gy=useTransform(my,v=>v*H*.4),px=useTransform(mx,v=>v*-22),py=useTransform(my,v=>v*-16);
 const dots=useMemo(()=>[...Array(26)].map((_,i)=>({l:(i*37)%100,t:(i*53)%100,s:2+(i%3),d:(i%7)*1.3,k:9+(i%5)*2})),[]);
 return <div className="pl" aria-hidden="true"><i className="smoke"/>
 <motion.div className="plx" style={{x:bx,y:by}}><i className="blob blue"/><i className="beam bb"/></motion.div>
 <motion.div className="plx" style={{x:rx,y:ry}}><i className="blob red"/><i className="beam br"/></motion.div>
 <i className="blob b2"/><i className="blob purple"/><i className="floor"/>
 <motion.i className="spot" style={{x:gx,y:gy}}/>
 <motion.div className="plx" style={{x:px,y:py}}>{dots.map((p,i)=><i key={i} className="mote" style={{left:p.l+'%',top:p.t+'%',width:p.s,height:p.s,animationDelay:-p.d+'s',animationDuration:p.k+'s'}}/>)}</motion.div>
 <i className="vignette"/></div>}
