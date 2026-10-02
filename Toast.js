"use client";
import { useEffect } from "react";
export default function Toast({message,onClose}) {
  useEffect(()=>{ if(!message) return; const t=setTimeout(onClose,2600); return ()=>clearTimeout(t)},[message,onClose]);
  if(!message) return null;
  return <div className="fixed bottom-5 right-5 z-50 bg-[#ccff00] text-black px-5 py-3 rounded font-bold text-sm shadow-2xl">{message}</div>;
}