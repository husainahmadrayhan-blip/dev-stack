"use client";
import { useEffect, useState } from "react";
import { ArrowDown, ChevronDown } from "lucide-react";
import WorkoutCard from "../components/WorkoutCard";
import { useApp } from "../components/Providers";
export default function Home(){
 const {workouts}=useApp(); const [loading,setLoading]=useState(true); const [sort,setSort]=useState("duration");
 useEffect(()=>{const t=setTimeout(()=>setLoading(false),450);return()=>clearTimeout(t)},[]);
 const list=[...workouts].sort((a,b)=>sort==="rating"?b.rating-a.rating:sort==="calories"?b.caloriesBurned-a.caloriesBurned:a.duration-b.duration);
 return <div>
  <section className="container min-h-[620px] grid lg:grid-cols-2 gap-10 items-center py-20">
   <div><p className="text-[#ccff00] text-xs font-black tracking-[.25em] mb-5">WORKOUT LIBRARY</p><h1 className="display text-6xl sm:text-7xl lg:text-8xl leading-[.86] uppercase">TRAIN WITH INTENT. LOG EVERY SET.</h1><p className="text-[#aaa] max-w-xl mt-7 text-base leading-7">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p><a href="#library" className="btn btn-primary mt-8">Browse Workouts <ArrowDown size={16}/></a></div>
   <div className="rounded-xl overflow-hidden border border-[#222] h-[420px] bg-[#141414]"><img src={workouts[0].image} alt="Workout" className="w-full h-full object-cover"/></div>
  </section>
  <section id="library" className="container py-16">
   <div className="flex flex-col sm:flex-row justify-between gap-5 mb-8"><div><p className="text-[#777] text-xs font-bold tracking-widest">12 LIFTS</p><h2 className="display text-5xl uppercase">THE LIBRARY</h2><p className="text-[#999] mt-2">Twelve lifts covering every major muscle group.</p></div>
   <label className="self-start flex items-center gap-3 text-xs font-bold uppercase">Sort By <span className="relative"><select value={sort} onChange={e=>setSort(e.target.value)} className="appearance-none bg-[#111] border border-[#333] rounded px-4 py-3 pr-10 outline-none"><option value="duration">Duration</option><option value="calories">Calories</option><option value="rating">Rating</option></select><ChevronDown size={15} className="absolute right-3 top-3.5 pointer-events-none"/></span></label></div>
   {loading?<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{[1,2,3,4,5,6].map(i=><div key={i} className="h-[380px] card rounded-lg animate-pulse"/></div>:<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">{list.map(w=><WorkoutCard key={w.id} w={w}/>)}</div>}
  </section>
 </div>
}