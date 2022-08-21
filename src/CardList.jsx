import {
  useQuery,
} from '@tanstack/react-query'
import { fetchCards } from './api/CardApi'

export const CardList = () => {
  // Queries
  const { isLoading, isError, data, error } = useQuery(['cards'], fetchCards)

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      {
        data.map((card) => {
          return (
            <>
              <p>title: {card.title} author: {card.author}</p>
            </>
          )

        })
      }
    </div>
  )
}
