import { createClient } from '@/prismicio'

import { Albums, Header, Hero } from './components'

const App: React.FC = async () => {
  const client = createClient()
  const res = await client.getByUID('albums', 'pickups')
  const pickups = res.data.slices

  return (
    <>
      <Header />
      <Hero pickups={pickups} />
      <Albums />
    </>
  )
}

export default App
