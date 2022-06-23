import React,{useRef} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router";
import Navbar from "../landingpage/component/AuthNavbar";


export default function Forgetpassword() {
    const confirmPassword = useRef()
	const password = useRef()
    const navigate= useNavigate();
    const forgetpassword = async (e) => {
        e.preventDefault();
        if (password.current.value !== confirmPassword.current.value) {
            const sendemail={
               password:password.current.value,
			   confirmpassword:confirmPassword.current.value
            }
            try {
            await axios.post("api/auth/forgetpassword", sendemail);
            //navigate("/tlogin");
            document.getElementById('message').innerText="email is sent Check you email"
        } catch (err) {
            console.log(err);
          }
        } 
      };
  
  
  return (
                <div className='' >
                        <Navbar/>
                <div className='p-40 pl-48 flex justify-center w-[100vw]' >
                           
                        
                    	<form onSubmit={forgetpassword} class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									New	Password
								</label>
								<input
                                    ref={password}
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Enter a new Password"
								/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Confirm	Password
								</label>
								<input
                                    ref={confirmPassword}
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="password"
									placeholder="Enter your Password again"
								/>
							</div>
							<div class="mb-6 text-center">
								<button 
                                    
									class="w-full px-4 py-2 font-bold text-white bg-cyan-500 rounded-full hover:bg-cyan-700 focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Reset Password
								</button>
							</div>
							<hr class="mb-6 border-t" />
                            <p id='message' className='text-green-500' >

                            </p>
							</form>           


                </div>

                </div>
    )
}
