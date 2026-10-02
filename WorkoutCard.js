"use client";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
export default function WorkoutCard({w}){
 return <Link href={`/workouts/${w.id}`} className="card rounded-lg overflow-hidden group hover:border-[#ccff00]/60 transition">
  <div className="h-52 bg-[#191919] overflow-hidden"><img src={w.image} alt={w.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/></div>
  <div className="p-5">
   <div className="flex flex-wrap gap-2 mb-3">{w.muscleGroups.map(x=><span key={x} className="text-[10px] font-bold px-2 py-1 bg-[#222] rounded uppercase">{x}</span>)}</div>
   <h3 className="display text-2xl uppercase">{w.name}</h3><p className="text-sm text-[#999] mt-2">{w.equipment}</p>
   <div className="flex gap-4 mt-5 text-xs text-[#bbb]"><span><Clock3 size={14} className="inline mr-1"/> {w.duration} min</span><span><Flame size={14} className="inline mr-1"/> {w.caloriesBurned} kcal</span><span><Star size={14} className="inline mr-1"/> {w.rating}</span></div>
  </div>
 </Link>
}