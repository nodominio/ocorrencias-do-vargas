import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainPage from '../pages/MainPage'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'

export const route = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/home" element={<MainPage/>}/> 
    <Route path="/" element={<LoginPage/>}/>
    <Route path="/cadastra-se" element={<SignUpPage/>}/> 
  </>
))
