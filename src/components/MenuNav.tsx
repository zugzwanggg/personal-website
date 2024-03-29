import { FC } from "react"
import {IBurger} from "./Header"



export const MenuNav:FC<IBurger> = ({burger,setBurger}) => {
  return (
    <nav className={`${burger ? 'translate-x-0 ' : '-translate-x-full'} z-40 transition ease-in-out duration-500 p-20 fixed top-16 h-screen w-screen bg-slate-50`}>
      <ul className="flex flex-col gap-6 justify-center items-center">
      <li onClick={()=>setBurger(false)}><a className="hover:bg-slate-300 p-6 font-semibold" href="#home">Home</a></li>
        <li onClick={()=>setBurger(false)}><a className="hover:bg-slate-300 p-6 font-semibold" href="#about">About</a></li>
        <li onClick={()=>setBurger(false)}><a className="hover:bg-slate-300 p-6 font-semibold" href="#projects">Projects</a></li>
        <li onClick={()=>setBurger(false)}><a className="hover:bg-slate-300 p-6 font-semibold" href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
