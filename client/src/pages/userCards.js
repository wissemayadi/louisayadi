import React,{useEffect} from 'react'
import { getUsers } from '../JS/Action/actionUser';
import Header from "../partials/Header";
import {Link} from "react-router-dom";
import Footer from "../partials/Footer";

import {useDispatch,useSelector} from "react-redux";




const Cards = () => {
 
    const user=useSelector(state=>state.userReducer.users);


    const dispatch = useDispatch()

    useEffect(() => {
    
      dispatch(getUsers())
      
      
    }, [])




    return (

        <div>

<Header/>
<div><br/>
{/* flex-row items-center h-screen justify-center wrap" */}
{/* flex flex-wrap  justify-between  m-8 */}
{user.map((user,key)=>(
<div class="flex-wrap  justify-between  m-8">

<div class="mg-8">
    <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
        </div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{user.pseudo}</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>Web Developer</p>
            </div>
            <table class="text-xs my-3">
                <tbody><tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td class="px-2 py-2">-----</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td class="px-2 py-2">-----</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">{user.email}</td>
                    <td class="px-2 py-2">-----</td>
                </tr>
            </tbody></table>

            <div class="text-center my-3">
                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#"><Link to="/profile"></Link>View Profile</a>
            </div>

        </div>
    </div>
</div>
</div>
))}
</div>
<div class="mt-10">
<Footer />
</div>
        </div>
    )
}

export default Cards
