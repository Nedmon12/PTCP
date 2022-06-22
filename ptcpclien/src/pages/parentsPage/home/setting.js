import React, { useState, useContext, useEffect } from 'react'
import Navbar from "../../../components/parents/parentsnavbar"
import Header from "../../../components/parents/parentsheader"
import { AuthContext } from '../../../context/AuthContext'
import useFetch from '../../../hook/useFetch'
import axios from "axios";

export default function Home() {
    const {user}= useContext(AuthContext)
    const [change, setchange] = useState(false);
    const changePasswordHandler=()=>{
        setchange(!change);
    } 
    const [Student, setStudent]= useState([]);
    useEffect(() => {
      const fetchmykid = async () => {
        const res = await axios.get("/api/studentManagmentRoutes/fetchmykid/"+ user.user.studentid);
        setStudent(res.data);
      };
      fetchmykid();
    }, [user.user._id]);
    
  const png=".png";
  const image=Student.pokemanUrl;
  const imageurl= `${Student.pokemanUrl}${png}`;
  const PFavater = process.env.REACT_APP_PUBLIC_FOLDER2;
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
   
  return (
    <div className='totalcontainer'>
        <div  className='sticky top-0'>
        <Header/>
        <Navbar/>
        </div>
        <div className='postandeventcontainer flex flex-row bg-slate-100'>    
            <div className='sidebar basis-0 md:basis-3/12' ></div>
            <div className='middle basis-12/12 md:basis-6/12 bg-white  w-full h-[100vh] border border-slate-50 mt-4  flex flex-col' >
                  <div className='header h-16 w-full border-b border-slate-50 shadow-blue-50 shadow-sm py-4 px-5' >
                      <span className='text-lg font-bold text-gray-600' >Account Settings</span>
                  </div>
                  <div className='overflow-y-auto ' >
                      <div className='profileimagecontainer w-full h-[30vh] p-6 flex items-center  justify-center'>
                          <img className="postProfileImg h-36 w-36 rounded-full border border-cyan-400 object-cover" 
                            src={
                                user.user.profilePicture
                                  ? PF + user.profilePicture
                                  : PF + "profile/noAvatar.png"
                              } alt=""/>  
                      </div>
                      <div className='p-4' >
                        <span className='text-lg font-semibold text-gray-500' >Basic Information</span>
                      </div>
                      <div className='flex flex-row px-5' >
                          <div className='px-4' >
                             <div class="flex justify-center">
                                <div class="mb-3 xl:w-[60vh]">
                                    <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                                      >First name </label
                                    >
                                    <input
                                      type="text" class="shadow-md form-control block w-full px-3 py-1.5 text-base m-0 font-normal border border-solid rounded transition ease-in-out border-gray-300  text-gray-700 bg-white bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                      id="exampleText0"
                                      placeholder={user.user.firstname}
                                    ></input>
                                </div>
                              </div>
                              </div>  
                              <div className='px-4' >
                              <div class="flex justify-center">
                                <div class="mb-3 xl:w-[60vh]">
                                    <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                                      >Last name </label>
                                    <input
                                      type="text" class="shadow-md form-control block w-full px-3 py-1.5 text-base m-0 font-normal border border-solid rounded transition ease-in-out border-gray-300  text-gray-700 bg-white bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                      id="exampleText0"
                                      placeholder={user.user.lastname}
                                    ></input>
                                </div>
                              </div>
                              </div>
                      </div>
                      <div className='p-4' >
                        <span className='text-lg font-semibold text-gray-500' >Login Detail</span>
                      </div>
                      <div>
                      <div class="py-4 px-8">
                        <div class="mb-3 w-full">
                          <label for="exampleFormControlInput5" class="form-label inline-block mb-2 text-gray-700"
                            >Email </label>
                          <input
                            type="text"
                            class="shadow-md form-control block w-full px-3 py-1.5 text-base m-0 font-normal border border-solid rounded transition ease-in-out border-gray-300  text-gray-700 bg-white bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput5"
                            placeholder={user.user.email}
                            aria-label="Disabled input example"
                            disabled
                          />
                        </div>
                      </div>
                      </div>
                      <div className='px-8 py-2'>
                        <button onClick={changePasswordHandler} className='bg-white text-cyan-500 border border-cyan-400 h-10 w-[30vh] shadow-md shadow-cyan-200' >
                          Change Your Password
                        </button>
                        {change==true ?
                            <div className='flex flex-row px-5' >
                                <div className='px-2 py-2' >
                                  <div class="flex justify-center">
                                      <div class="mb-3 xl:w-[58vh]">
                                          <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                                            >New Password </label>
                                          <input
                                            type="text" class="shadow-md form-control block w-full px-3 py-1.5 text-base m-0 font-normal border border-solid rounded transition ease-in-out border-gray-300  text-gray-700 bg-white bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleText0"
                                            placeholder=""
                                          ></input>
                                      </div>
                                    </div>
                                    </div>  
                                    <div className='px-2 py-2' >
                                    <div class="flex justify-center">
                                      <div class="mb-3 xl:w-[58vh]">
                                          <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
                                            >Confirm Password </label>
                                          <input
                                            type="text" class="shadow-md form-control block w-full px-3 py-1.5 text-base m-0 font-normal border border-solid rounded transition ease-in-out border-gray-300  text-gray-700 bg-white bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleText0"
                                            placeholder=""
                                          ></input>
                                      </div>
                                    </div>
                                    </div>
                            </div>
                        :<div> </div>
                        }
                      </div>
                      <div className='p-4' >
                        <span className='text-lg font-semibold text-gray-500' >Your Kids</span>
                      </div>
                      <div className='p-4  flex flex-row' >
                        <img className='pokeman w-10 h-10 mx-4 '  src={PFavater + imageurl} alt="k" />
                        <div className='w-26 h-16 rounded-lg'>
                              <span className='StudentName font-sans font-medium text-gray-600 p-2 py-2 '>{Student.firstname}</span>
                              <span className='StudentName font-sans font-medium text-gray-600 p-2 py-2 '>{Student.lastname}</span>
                        </div>
                      </div>
                   
                  </div>

                      <div className='p-4 h-20' >
                      <div className='flex mx-auto flex-row justify justify-between py-5 md:shrink-0 ' >
                          <button className=" rounded-sm w-[24vw] md:w-[16vw] SendButton px-2 -mt-4 text-red-500  h-10 " type="submit ">
                              <span>Delete Account</span>
                          </button>
                            <button className=" rounded-xl w-[12vw] md:w-[10vw] SendButton  px-2  text-white bg-cyan-500  h-10 " type="submit ">
                                Save
                            </button>
                      </div>
                  </div> 
              </div>
            <div className='leftbar basis-0 md:basis-3/12'></div>
        </div>    
    </div>
  )
}
