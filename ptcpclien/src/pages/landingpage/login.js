import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom';

const login = () => {
    return ( 
        <div>
            <Navbar/>
            <div>
                <span className='mt-5' >Choose side</span>
                <div className='flex flex-row'>
                    <div>
                        <Link to='/tlogin' >
                        <button className='text-xl p-10 bg-cyan-500 border-2 rounded-md text-white m-7'  >
                            Teachers
                        </button>
                        </Link>
                    </div>
                    <div>
                        <button className='text-xl p-10 bg-cyan-500 border-2 rounded-md text-white m-7'>
                            Parents
                        </button>
                    </div>
                    <div>
                        <button className='text-xl p-10 bg-cyan-500 border-2 rounded-md text-white m-7'>
                            School Admins
                        </button>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default login;