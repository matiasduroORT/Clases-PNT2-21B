import { useState } from 'react'
import './App.css'
import { Principal } from './components/Principal/Principal'
import { Contador } from './components/Contador/Contador'
import { TodoApp } from './components/TodoApp/TodoApp'

function App() {

  return (
    <>
    {/* <Principal /> */}
    <Contador />
    <TodoApp/>
    </>
  )
}

export default App
