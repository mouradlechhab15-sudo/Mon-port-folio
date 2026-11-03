import {useRef} from 'react';import {motion,useMotionValue,useSpring,useReducedMotion} from 'framer-motion';
export default function Magnetic({children}){const ref=useRef(),r=useReducedMotion(),x=useMotionValue(0),y=useMotionValue(0),sx=useSpring(x,{stiffness:200,damping:15}),sy=useSpring(y,{stiffness:200,damping:15});
 const move=e=>{if(r)return;const b=ref.current.getBoundingClientRect();x.set((e.clientX-b.left-b.width/2)*.3);y.set((e.clientY-b.top-b.height/2)*.3)};
 return <motion.div ref={ref} style={{x:sx,y:sy,display:'inline-block'}} onMouseMove={move} onMouseLeave={()=>{x.set(0);y.set(0)}}>{children}</motion.div>}
