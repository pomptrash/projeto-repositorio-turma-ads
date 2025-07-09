import { useState } from 'react'
import { Navbar } from './Navbar'
import { Header } from './Header'
import { Home } from './Home'
import { Route, Routes } from 'react-router-dom'

// Matéiras
import {HomePrimeiroSemestre} from "./assets/pages/primeiro-semestre/HomePrimeiroSemestre"
import {HomeSegundoSemestre} from "./assets/pages/segundo-semestre/HomeSegundoSemestre"
import {HomeTerceiroSemestre} from "./assets/pages/terceiro-semestre/HomeTerceiroSemestre"
import {HomeQuartoSemestre} from "./assets/pages/quarto-semestre/HomeQuartoSemestre"


function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/1-semestre' element={<HomePrimeiroSemestre/>} />
        <Route path='/2-semestre' element={<HomeSegundoSemestre/>} />
        <Route path='/3-semestre' element={<HomeTerceiroSemestre/>} />
        <Route path='/4-semestre' element={<HomeQuartoSemestre/>} />
      </Routes>
    </>
  )
}

export default App
