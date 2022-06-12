import Footerlog from "../../components/Footer";
import React, { useRef } from 'react'
import axios from "axios";
import { useNavigate } from "react-router";
import Navbar from "./component/AuthNavbar";

const Subscribe = () => {
    const firstname=useRef();
    const lastname=useRef();
    const schoolname=useRef();
    const subcity=useRef();
    const schooladresscity = useRef();
    const zip = useRef();
    const email = useRef();
    const contact = useRef();
    const password = useRef();
    const confirmpassword = useRef();
    const navigate = useNavigate();
    const handleSubscribe = async (e) => {
        console.log(password.current.value)
        console.log(confirmpassword.current.value)
        e.preventDefault();
        if (confirmpassword.current.value !== password.current.value) {
          confirmpassword.current.setCustomValidity("Passwords don't match!");
        } else {
            console.log("here")
          const SchoolUser = {
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            schoolName: schoolname.current.value,
            schooladresscity: schooladresscity.current.value,
            subcity: subcity.current.value,
            zip: zip.current.value,
            email: email.current.value,
            subscriptionStatus:"false" ,
            password: password.current.value,
            contact: contact.current.value,
        };
          try {
            await axios.post("api/school/addschool", SchoolUser);
            navigate("/");
          } catch (err) {
            console.log(err);
          }
        }
      };
    return ( 
        <>
        <Navbar/>
        <div className='bg-white min-w-screen min-h-screen flex flex-col mt-16'>
        <div className="basis-11/12 py-4" >
            <div className="py-2" >
                <h1 className="text-3xl font-semibold flex justify-center pt-2 text-gray-800">   
                    Be'are PTC PlatForm
                </h1> 
            </div>
            <div className='pt-2'> 
                <h1 className="flex justify-center text-2xl font-bold text-slate-700">
                Start your School full access 30-day free Beare trial today
                </h1>
            </div>

            <div class="flex flex-wrap">
                
                <div class="w-full sm:w-full md:w-2/5 lg:w-2/5 xl:w-2/5 mb-4 bg-gray-500 h-12 mt-28">
                <img
                    alt="..."
                    src="https://images.ctfassets.net/eh05n0xjhplz/5sK25xKRFl1KSnLn98jxA9/f01ac520bec75cb7aca3cf78d12b5b12/0720_Blog_7_Stats_Salespeople_Need_to_Know_Hero_Image.png?w=850&h=319&q=50&fm=png"
                    className="mx-auto max-w-120-px"
                  />
                 </div>
            <div class="w-full sm:w-full md:w-3/5 lg:w-3/5 xl:w-3/5 mb-6 mt-2">
                   <form class="w-full max-w-2xl ml-5  bg-white  rounded-md border-cyan-500" action="http://localhost:3000/api/subscribeform" method="post">
                        <div className="pt-8 pl-6 pb-6" >
                                <h2 className="text-xl ">
                                    Enter your basic information
                                </h2>
                        </div>
                        <div class="flex flex-wrap ">
                            <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                               School Name
                            </label>
                            <input ref={schoolname} class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last" type="text" placeholder="Saint Joesph Primary School"/>
                            <p class="text-gray-600 text-xs italic"></p>
                            </div>
                        </div>
                        <div class="flex flex-wrap mt-4 ">
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                City
                            </label>
                            <div class="relative">
                                <select ref={schooladresscity} class="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>Adiss Abeba</option>
                                <option>Adama</option>
                                <option>hawasa</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                             </div>
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-state">
                                SubCity
                            </label>
                            <input ref={subcity} class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="bole"/>
                             </div>
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                Zip
                            </label>
                            <input ref={zip} class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"></input>
                            </div>
                        </div>

                        <div class="flex flex-wrap  mt-4">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                 <input ref={firstname} class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first" type="text" placeholder="Jane"/>
                                 <p class="text-red-500 text-xs italic"></p>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                 <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                     Last Name
                                 </label>
                                 <input ref={lastname} class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last" type="text" placeholder="Doe"/>
                            </div>
                        </div>
                        <div class="flex flex-wrap ">
                            <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                                Email
                            </label>
                            <input ref={email} class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="SaintJospth@gmail.com"/> 
                            <p class="text-gray-600 text-xs italic"></p>
                            </div>
                        </div>
                        <div class="flex flex-wrap mt-4">
                            <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="contact">
                                Contact address
                            </label>
                            <input ref={contact} class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact" type="number" placeholder="phone no"/> 
                            <p class="text-gray-600 text-xs italic"></p>
                            </div>
                        </div>
                        <div class="flex flex-wrap mt-4 ">
                            <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Password
                            </label>
                            <input ref={password} class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password" placeholder="******************"/>
                            <p class="text-gray-600 text-xs italic"></p>
                            </div>
                        </div>
                        <div class="flex flex-wrap ">
                            <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Confirm Password
                            </label>
                            <input ref={confirmpassword} class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="confirmpassword" type="password" placeholder="******************"/>
                            <p class="text-gray-600 text-xs italic"></p>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse" >
                        <button onClick={handleSubscribe} className="bg-cyan-500 rounded-lg text-white mt-2 w-28 h-12 font-semibold text-lg" type="submit">
                            Subscribe
                        </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            <div className="basis-1/12" >
                <Footerlog className=""/>
            </div>
        </div>
        </>
     );
}
 
export default Subscribe;