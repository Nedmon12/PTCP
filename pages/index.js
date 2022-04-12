import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'
import Landingpage from '../pages/landingpage/index'
export default function Home({pokemon}) {
  return (
    <Layout title="Welcome to ptcp">
      <Landingpage/>

    </Layout>
  )
}
