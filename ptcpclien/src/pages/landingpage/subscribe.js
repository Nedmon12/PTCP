import Navbar from "../../components/navbar";
import Footerlog from "../../components/Footer";
const Subscribe = () => {
    return ( 
        <div className='bg-slate-100 min-w-screen min-h-screen'>
        <div className="flex justify-center">
           <img className=" mt-4" src="http://localhost:3000/logo2.png" alt="logo" width={100} height={100}/>
         </div>
         <div>
            <h1 className="text-3xl font-bold flex justify-center pt-2 text-cyan-500 ">   
                Beare PTC PlatForm
             </h1> 
         </div>
        <div className='pt-4'> 
            <h1 className="flex justify-center text-2xl font-bold text-slate-700">
            Start your School full access 30-day free Beare trial today
            </h1>
        </div>
        <div class="flex flex-wrap">
            <div class="w-full sm:w-full md:w-2/5 lg:w-2/5 xl:w-2/5 mb-4 bg-gray-500 h-12 mt-4"></div>
            <div class="w-full sm:w-full md:w-3/5 lg:w-3/5 xl:w-3/5 mb-4 mt-4">
                   <form class="w-full max-w-2xl	 ml-5  bg-white border-2 rounded-md border-gray-300" action="http://localhost:3000/api/subscribeform" method="post">
                        <div className="pt-8 pl-6 pb-6" >
                                <h2 className="text-xl ">
                                    Enter your school information
                                </h2>
                        </div>

                        <div class="flex flex-wrap ">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                 <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first" type="text" placeholder="Jane"/>
                                 <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                 <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                     Last Name
                                 </label>
                                 <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last" type="text" placeholder="Doe"/>
                            </div>
                        </div>
                        <div class="flex flex-wrap ">
                            <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Password
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
                            <p class="text-gray-600 text-xs italic">make it a long</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap ">
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                City
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
                            </div>
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                State
                            </label>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                Zip
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"></input>
                            </div>
                        </div>
                        <div>
                        <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
        </div>
        <Footerlog className="-mb-10"/>
        </div>
     );
}
 
export default Subscribe;