"use client";
import { ArrowLeft, Check, Clock3, Flame, Plus, Save, Star } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useApp } from "../../../components/Providers";
export default function Detail(){
 const {id}=useParams(); const {get,addPlan,addSaved,plan}=useApp(); const w=get(id);
 if(!w) return <div className="container py-32"><h1 className="display text-6xl">WORKOUT NOT FOUND</h1><Link className="btn btn-primary mt-7" href="/">Back to workouts</Link></div>;
 return <div className="container py-12">
  <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase font-bold text-[#999] mb-8"><ArrowLeft size={15}/> Back to library</Link>
  <div className="grid lg:grid-cols-2 gap-10">
   <div className="rounded-xl overflow-hidden border border-[#222] bg-[#111] min-h-[560px]"><img src={w.image} alt={w.name} className="w-full h-full object-cover"/></div>
   <div className="py-2"><div className="flex gap-2 flex-wrap">{w.muscleGroups.map(x=><span key={x} className="badge bg-[#222]">{x}</span>)}</div><h1 className="display text-6xl uppercase leading-none mt-5">{w.name}</h1><p className="text-[#aaa] leading-7 mt-5">{w.description}</p>
    <div className="grid grid-cols-2 gap-px bg-[#292929] border border-[#292929] mt-8">{[["Equipment",w.equipment],["Difficulty",w.difficulty],["Sets",w.sets],["Reps",w.reps],["Duration",`${w.duration} min`],["Calories",`${w.caloriesBurned} kcal`],["Rating",w.rating]].map(([a,b])=><div key={a} className="bg-[#111] p-4"><p className="text-[10px] text-[#777] font-bold uppercase">{a}</p><p className="font-bold mt-1">{b}</p></div>)}</div>
    <div className="mt-8"><h2 className="display text-3xl">INSTRUCTIONS</h2><ol className="mt-4 space-y-3">{w.instructions.map((x,i)=><li key={x} className="flex gap-4 text-[#bbb] leading-6"><span className="text-[#ccff00] font-black">{String(i+1).padStart(2,"0")}</span>{x}</li>)}</ol></div>
    <div className="flex flex-wrap gap-3 mt-9"><button onClick={()=>addPlan(w.id)} disabled={plan.length>=5&&!plan.includes(w.id)} className="btn btn-primary disabled:opacity-40"><Plus size={17}/> Add to today's plan</button><button onClick={()=>addSaved(w.id)} className="btn btn-secondary"><Save size={17}/> Save for later</button></div>
   </div>
  </div>
 </div>
}