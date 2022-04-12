import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Navbar from '../../components/navbar'
const login = () => {
    return ( 
        <Layout title="Choose your side">
            <Navbar/>
            <p className="mt-10 text-center">
             <Link href="../loginpage/Parentslogin">
                <a className="text-2xl underline">Parents</a>
                </Link>
            </p>
            <p className="mt-10 text-center">
                <Link href="../loginpage/Teacherslogin">
                 <a className="text-2xl underline">Teachers</a>
                 </Link>
              </p>
         <p className="mt-10 text-center">
                <Link href="../loginpage/Schoollogin">
                <a className="text-2xl underline">Schools</a>
            </Link>
        </p>
        </Layout>
     );
}
 
export default login;