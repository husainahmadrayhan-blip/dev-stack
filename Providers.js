"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { workouts } from "../data/workouts";
const C=createContext(null);
export function AppProvider({children}) {
 const [plan,setPlan]=useState([]),[saved,setSaved]=useState([]),[toast,setToast]=useState("");
 useEffect(()=>{try{setPlan(JSON.parse(localStorage.getItem("fitlog-plan")||"[]"));setSaved(JSON.parse(localStorage.getItem("fitlog-saved")||"[]"))}catch{}},[]);
 useEffect(()=>{localStorage.setItem("fitlog-plan",JSON.stringify(plan))},[plan]);
 useEffect(()=>{localStorage.setItem("fitlog-saved",JSON.stringify(saved))},[saved]);
 const addPlan=id=>{if(plan.includes(id)){setToast("Already in today's plan");return false} if(plan.length>=5){setToast("Today's plan is limited to 5 lifts");return false} setPlan(x=>[...x,id]);setToast("Added to today's plan");return true};
 const addSaved=id=>{if(saved.includes(id)){setToast("Already saved");return false} setSaved(x=>[...x,id]);setToast("Saved for later");return true};
 const removePlan=id=>{setPlan(x=>x.filter(v=>v!==id));setToast("Removed from today's plan")};
 const removeSaved=id=>{setSaved(x=>x.filter(v=>v!==id));setToast("Removed from saved")};
 const get=id=>workouts.find(w=>w.id===Number(id));
 return <C.Provider value={{workouts,plan,saved,addPlan,addSaved,removePlan,removeSaved,get,toast,setToast}}>{children}</C.Provider>
}
export const useApp=()=>useContext(C);