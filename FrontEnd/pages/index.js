import Head from 'next/head'
import Image from 'next/image'
import Header from '../component/Header'
import Header2 from '../component/Header2'
import TeacherMain from '../component/TeacherMain'


export default function Home(){
  return (
    <div className="px-5 mx-auto">
      <Head>
         <title>ptcp</title>
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      
      <Header2/>
         {/*main component*/}
      <Foooter/>
    </div>
  )
}


