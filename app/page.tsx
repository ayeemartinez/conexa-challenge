'use client';
import { ListCard, EpisodesList, Header } from './components'

export default function Home() {
  


  return (
    <main className="flex min-h-screen flex-col items-center">
      
      <Header/>
      <div className='p-5 lg:p-10 w-full'>
        <div className='w-full flex justify-center flex-wrap gap-4 xl:flex-nowrap'>
        <ListCard
            id={1}/>
          <ListCard
            id={2}/>
        </div>
        <div className='w-full flex flex-wrap justify-center gap-4 mt-7 lg:flex-nowrap '>
          <EpisodesList type="first character's"/>
          <EpisodesList type="in common"/>
          <EpisodesList type="second character's"/>
      </div>
      </div>
    </main>
  )
}
