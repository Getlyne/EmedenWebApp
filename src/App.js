import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, Home, Footer } from './components'



const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col">
      <Header />    

      <main classname="'mt-24 p-8 w-full">
        <Routes>
          <Route path="/*" element={ <Home /> }/>
          <Route path="/footer" element={ <Footer /> }/>
        </Routes>
      </main>
    </div>
    
  )
}

export default App