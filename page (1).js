"use client";
import Link from "next/link";
import { Check, Clock3, Flame, Star, X } from "lucide-react";
import { useState } from "react";
import { useApp } from "../../components/Providers";
export default function MyPlan(){
 const {plan,saved,get,removePlan,removeSaved}=useApp(); const [tab,setTab]=useState("plan"); const [done,setDone]=useState([]);
 const ids=tab==="plan"?plan:saved,items=ids.map(get).filter(Boolean);
 const minutes=plan.reduce((s,id)=>s+(get(id)?.duration||0),0), calories=plan.reduce((s,id)=>s+(get(id)?.caloriesBurned||0),0);
 const mark=id=>{setDone(x=>x.includes(id)?x:[...x,id])};
 return <div className="container py-16">
  <p className="text-[#ccff00] text-xs font-black tracking-[.25em]">YOUR LOG</p><h1 className="display text-6xl sm:text-7xl mt-2">MY PLAN</h1><p className="text-[#999] mt-3">Cap of five lifts for today. Finish them, then load more.</p>
  <div className="grid sm:grid-cols-3 gap-3 mt-10">{[["Exercises",plan.length],["Minutes",minutes],["Calories",calories]].map(([a,b])=><div key={a} className="card p-5 rounded"><p className="text-[#777] text-xs uppercase font-bold">{a}</p><p className="display text-4xl mt-2">{b}</p></div>)}</div>
  <div className="flex border-b border-[#292929] mt-10 mb-7"><button onClick={()=>setTab("plan")} className={`px-5 py-4 text-xs font-black uppercase ${tab==="plan"?"text-[#ccff00] border-b-2 border-[#ccff00]": "text-[#777]"}`}>Today's Plan ({plan.length})</button><button onClick={()=>setTab("saved")} className={`px-5 py-4 text-xs font-black uppercase ${tab==="saved"?"text-[#ccff00] border-b-2 border-[#ccff00]": "text-[#777]"}`}>Saved ({saved.length})</button></div>
  {!items.length?<div className="card rounded p-12 text-center"><h2 className="display text-4xl">NOTHING HERE YET</h2><p className="text-[#999] mt-3">Browse the library and add a lift to get today moving.</p><Link href="/" className="btn btn-primary mt-6">Go to workouts</Link></div>:
  <div className="space-y-3">{items.map(w=><div key={w.id} className={`card rounded p-4 flex flex-col md:flex-row gap-5 md:items-center ${done.includes(w.id)?"opacity-60":""}`}><img src={w.image} alt="" className="w-full md:w-28 h-28 object-cover rounded"/><div className="flex-1"><h3 className="display text-3xl uppercase">{w.name}</h3><p className="text-[#999] text-sm">{w.equipment}</p><div className="flex gap-4 mt-3 text-xs text-[#aaa]"><span><Clock3 size={13} className="inline"/> {w.duration} min</span><span><Flame size={13} className="inline"/> {w.caloriesBurned} kcal</span><span><Star size={13} className="inline"/> {w.rating}</span></div></div><div className="flex flex-wrap gap-2"><Link href={`/workouts/${w.id}`} className="btn btn-secondary">View Details</Link>{tab==="plan"&&<button onClick={()=>mark(w.id)} className="btn btn-secondary"><Check size={15}/> {done.includes(w.id)?"Done":"Mark as Done"}</button>}<button onClick={()=>tab==="plan"?removePlan(w.id):removeSaved(w.id)} className="w-10 h-10 grid place-items-center border border-[#444] rounded hover:border-red-400"><X size={16}/></button></div></div>)}</div>}
 </div>
}