import Image from 'next/image'
import { ListCard } from './components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className='w-full flex justify-center flex-wrap gap-x-4 gap-y-4 lg:gap-y-0 lg:flex-nowrap'>
          <ListCard number={1}/>
          <ListCard number={2}/>
      </div>
    </main>
  )
}
