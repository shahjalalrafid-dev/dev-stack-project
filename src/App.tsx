

import { Suspense, useState } from 'react'
import './App.css'
import Banner from './layouts/Banner'
import Explore from './layouts/Explore'
import Navbar from './layouts/Navbar'
import type { ITechnologyType } from './types/types'

const technologyFetch = async(): Promise<ITechnologyType[]> => {
  const res = await fetch ('./data.json');
  const data = await res.json();
  return data;
}

function App() {

    const [technologyPromise] = useState(() => technologyFetch());

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback = {<h2 className='text-center text-3xl'>Loading Data...</h2>}>
      <Explore technologyPromise={technologyPromise} ></Explore>
    </Suspense>
    

    </>
  )
}

export default App
