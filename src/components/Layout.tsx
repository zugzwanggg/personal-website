import {useState} from 'react'
import Header from './Header'
import { Footer } from "./Footer"
import { MenuNav } from './MenuNav'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'



export const Layout = () => {

  const [burger,setBurger] = useState<boolean>(false)

  

  return (
    <>
      <Header burger={burger} setBurger={setBurger}/>

      <MenuNav burger={burger} setBurger={setBurger}/>

      <main>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </main>


      <Footer/>
    </>
  )
}
