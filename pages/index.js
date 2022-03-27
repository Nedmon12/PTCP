import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'
export default function Home({pokemon}) {
  return (
    <Layout title="NextJs Pokedex">
        <h1 className="text-4xl mb-8 text-center">
          NextJs Pokedex
        </h1>
        <ul>
          {pokemon.map((pokeman , index)=>(
              <li key={index}>
                  <Link href={`/pokeman?id=${index+1}`}>
                    <a className="border p-2 border-grey my-2 capitalize flex items-center text-lg bg-gray-200 rounded-md">
                    <img className="h-20 w-20" src={pokeman.image} alt={pokeman.name}/>
                    <span className="mr-2 ml-2 font-bold" >{index + 1}.</span>
                      {pokeman.name}

                    </a>
                  </Link>
              </li>
              ))}
        </ul>
    </Layout>
  )
}
export async function getStaticProps(context){
  try{
    const res= await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    const {results}= await res.json();
    const pokemon = results.map((result, index)=>{
      const paddedIndex =("00" + (index +1)).slice(-3)
      const image =`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
        return{
        ...result,
        image,
      }
    
    })
    return {
      props: {pokemon}
    }
  }catch (err){
    console.error(err)
  }
  
}