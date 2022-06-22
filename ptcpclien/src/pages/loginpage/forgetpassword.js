import React,{useRef} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router";
import Navbar from "../landingpage/component/AuthNavbar";


export default function Forgetpassword() {
    const email = useRef()
    const navigate= useNavigate();
    const forgetpassword = async (e) => {
        e.preventDefault();
        if (email.current.value !== null) {
            const sendemail={
                email: email.current.value
            }
            console.log("fuck")
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
									Email
								</label>
								<input
                                    ref={email}
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Enter Email Address..."
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
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./register.html"
								>
									Create an Account!
								</a>
							</div>
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./index.html"
								>
									Already have an account? Login!
								</a>
							</div>
						</form>           


                </div>

                </div>
    )
}
