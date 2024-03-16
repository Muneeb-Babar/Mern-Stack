
import {createBrowserRouter,RouterProvider,Outlet,useNavigate} from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";
import SignUp from "../components/Signup";
import Login from "../components/Login";
import Selloptions from "../components/Selloptions";
import Sellerform from "../components/Sellerform";
import GetMyAd from "../MyAds";
import Header from "../components/Header";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "./firebase";
import { useState,useEffect } from "react";
import Forget from "../components/Forget";
import Cart from "../views/CartDetail";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path: "/",
                element: <Dashboard/>,
            },
            {
                path: '/detail/:adId',
                element: <Detail/>
            },
            {
                path: 'cart',
                element: <Cart/>
            },
                ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
    path: '/signup',
    element: <SignUp/>
    },
    {
        path: '/selloptions',
        element: <Selloptions/>
    },
    {
        path: '/sellerform',
        element: <Sellerform/>
    },
    {
        path: '/myads',
        element: <GetMyAd/>
    },
    {
        path: '/forgetpassword',
        element: <Forget/>
    },
    
]);

function Layout(){
    const[user,setUser]=useState()
    const navigate=useNavigate()

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
    }, [])

    useEffect(()=>{
        const path=window.location.pathname
        if(user){
            if(path==='/login'){
                navigate('/')
            }
            else{
                if(path==='/selloptions'){
                    navigate('/login')
                }
            }
        }
    },[window.location.pathname,user])

    return <div>
        <Header/>
        <Outlet/>
    </div>
}
function Router(){
    return <RouterProvider router={router} />
}

export default Router;