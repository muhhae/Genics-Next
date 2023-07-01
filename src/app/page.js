'use client';

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [shows, setShows] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.tvmaze.com/shows")
      const data = await response.json()
      console.log(data)
      setShows(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <div className='flex justify-center text-center font-sans font-bold text-6xl m-2 p-2'>
        <h2>SHOWS</h2>
      </div>
      <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   ">
        {shows.map(show => (
          showCard({ show })
        ))}
      </div>
    </>
  )
}

function showCard({ show }) {
  return (
    <div className=" rounded-2xl bg-slate-300 p-10 m-10 flex flex-col">
      <img src={show.image.medium} alt={show.name} />
      <h2 className="my-3 text-center text-xl font-sans font-bold text-slate-600">{show.name}</h2>
      <div>
        <p className="text-center text-black">Genres: {show.genres.join(", ")}</p>
        <p className='my-3 text-justify text-black'> {show.summary ? show.summary : "No description available"} </p>
      </div>

    </div >
  )
}

