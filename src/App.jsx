import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CardList } from './CardList'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const [count, setCount] = useState(0)

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <h1>Vite + React</h1>
      <CardList />
    </QueryClientProvider>
  )
}

export default App
