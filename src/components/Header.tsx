import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { FC } from 'react';

export interface IBurger {
  burger: boolean,
  setBurger: (value:boolean)=> void
}

const Header:FC<IBurger> = ({burger,setBurger}) => {

  


  return (
    <header className='fixed left-0 z-50 right-0 top-0 py-8 shadow-md bg-white'>
      <div className="flex items-center justify-between px-4 md:px-10">
        <h1 className='font-extrabold text-sm md:text-xl'>Amankos Ansar</h1>
        <nav>
          <ul className='md:flex items-center gap-9 hidden'>
          <li><a className="hover:text-slate-400 cursor-pointer font-semibold" href="#home">Home</a></li>
            <li><a className="hover:text-slate-400 cursor-pointer font-semibold" href="#about">About</a></li>
            <li><a className="hover:text-slate-400 cursor-pointer font-semibold" href="#projects">Projects</a></li>
            <li><a className="hover:text-slate-400 cursor-pointer font-semibold" href="#contact">Contact</a></li>
          </ul>
          
        </nav>
        <div className="md:hidden">
        {
            burger
            ?
            <i className='absolute right-4 -translate-y-1/2' onClick={()=>setBurger(false)}>
            <CloseIcon/>
            </i>
            :
            <i className='absolute right-4 -translate-y-1/2' onClick={()=>setBurger(true)}>
            <MenuIcon/>
            </i>
          }
        </div>
      </div>
    </header>
  )
}

export default Header