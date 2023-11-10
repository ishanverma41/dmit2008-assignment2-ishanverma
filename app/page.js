import Image from 'next/image'
import styles from './page.module.css'
import PageHeader from '../components/header/PageHeader'
import PageFooter from '@/components/footer/PageFooter'
import HomeContent from '@/components/landingPage/HomeContent'

export default function Home() {
  return (
    <main>
      <PageHeader title={"Explore and Purchase Videos"}></PageHeader>
      <HomeContent></HomeContent>
      <PageFooter></PageFooter>
    </main>
  )
}
