import { Hero } from './components'

import { createClient } from '@/prismicio'

const App: React.FC = async () => {
  const client = createClient()
  const res = await client.getByUID('albums', 'pickups')
  const pickups = res.data.slices

  return <Hero pickups={pickups} />
}

export default App
