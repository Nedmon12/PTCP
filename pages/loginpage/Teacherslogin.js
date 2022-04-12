import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
export default function TeachersLogin() {
  return (
      <Layout title="Teacher login">
    <div className="container mx-auto max-w-xl min-h-screen pt-8">
        <div className="flex justify-center">
        <img src="http://localhost:3000/logo2.png" alt="logo" width={120} height={120}/>
         </div>
        <h1 className="text-3xl font-bold flex justify-center pt-5 text-blue-500 ">   
           Beare PTC PlatForm
        </h1>  
        <h1 className="flex justify-center">
            parents Login
        </h1>
           

        </div>
    </Layout>
  )
}
