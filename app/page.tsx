import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PaddingContainer from '@/components/layout/padding-container'

export default function Home() {
  return (
    <PaddingContainer>
      <main>
        <Header />
        <Hero />
      </main>
    </PaddingContainer>
  )
}
