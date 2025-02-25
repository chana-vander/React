import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Login from "./Components/Login"
import SignIn from './Components/SignIn';
import Recipes from './Components/Recipes'
import AddRecipe from './Components/AddRecipe';
import EditRecipe from './Components/EditRecipe';
import { AuthProvider } from './Hook/authUserContext';
function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/editRecipe' element={<EditRecipe />} />
            <Route path='/addRecipe' element={<AddRecipe />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
