import {useState,useEffect} from 'react';
export default function useActiveSection(ids){const [a,setA]=useState(ids[0]);
 useEffect(()=>{const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setA(e.target.id)),{rootMargin:'-45% 0px -50% 0px'});
 ids.forEach(i=>{const el=document.getElementById(i);el&&o.observe(el)});return()=>o.disconnect()},[]);return a;}
