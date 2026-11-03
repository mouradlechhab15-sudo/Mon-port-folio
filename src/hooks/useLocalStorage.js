import {useState,useEffect} from 'react';
export default function useLocalStorage(key,init){
 const [v,setV]=useState(()=>{try{const s=localStorage.getItem(key);return s!==null?JSON.parse(s):init}catch{return init}});
 useEffect(()=>{try{localStorage.setItem(key,JSON.stringify(v))}catch{}},[key,v]);return [v,setV];}
