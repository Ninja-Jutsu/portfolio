import Approach from '@/components/Approach'
import Experiences from '@/components/Experiences'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import Clients from '@/components/ui/Clients'
import { FloatingNav } from '@/components/ui/FloatingNav'

export default function Home() {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden max-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experiences />
        <Approach />
      </div>
    </main>
  )
}
