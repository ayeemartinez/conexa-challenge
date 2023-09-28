import Image from 'next/image'
import { ListCard, EpisodesList } from './components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <div className='w-full flex justify-center flex-wrap gap-4 xl:flex-nowrap'>
          <ListCard number={1}/>
          <ListCard number={2}/>
      </div>
      <div className='w-full flex flex-wrap justify-center gap-4 mt-7 lg:flex-nowrap '>
        <EpisodesList type="first character's"/>
        <EpisodesList type="in common"/>
        <EpisodesList type="second character's"/>
      </div>
    </main>
  )
}
