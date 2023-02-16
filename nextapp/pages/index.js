import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ItemList from '@/src/component/ItemList'
import { Divider, Header } from 'semantic-ui-react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const envname = process.env.NEXT_PUBLIC_name;
  const envname = process.env.name;
  //const API_URL = "https://jsonplaceholder.typicode.com/photos"
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const [photos, setPhotos] = useState() ;

  function getPhotos() {
    axios.get(API_URL)
    .then( res => {
      console.log(res.data[0])
      setPhotos(res.data) ;
    })
  }

  useEffect( ()=> {
    getPhotos();
  }, [] )

  return (
    <>
      <Head>
        <title>flower</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {envname}
        <div>
          <Header as='h2'>신상품</Header>
          <ItemList list={photos && photos.slice(0,9)}/>
        </div>
        <Divider/>
        <div>
          <Header as='h2'>계절상품</Header>
          <ItemList list={photos && photos.slice(9,15)}/>
        </div>

      </div>
    </>
  )
}