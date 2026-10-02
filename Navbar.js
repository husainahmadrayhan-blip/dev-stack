"use client";
import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { useApp } from "./Providers";
import { usePathname } from "next/navigation";
export default function Navbar(){
 const {plan,saved}=useApp(),path=usePathname();
 return <header className="sticky top-0 z-40 bg-black/90 backdrop-blur border-b border-[#222]">
  <div className="container h-20 flex items-center justify-between gap-5">
   <Link href="/" className="flex items-center gap-2 font-black tracking-widest"><span className="w-9 h-9 bg-[#ccff00] text-black grid place-items-center rounded"><Dumbbell size={20}/></span>FITLOG</Link>
   <nav className="hidden sm:flex gap-8 text-xs font-bold uppercase tracking-widest"><Link className={path==="/"?"text-[#ccff00]":""} href="/">Workout</Link><Link className={path==="/my-plan"?"text-[#ccff00]":""} href="/my-plan">My Plan</Link></nav>
   <div className="flex gap-2"><Link href="/my-plan" className="badge bg-[#ccff00] text-black">Plan {plan.length}</Link><Link href="/my-plan" className="badge border border-[#555]">Saved {saved.length}</Link></div>
  </div>
 </header>
}