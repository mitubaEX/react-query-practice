import {
  useQuery,
} from '@tanstack/react-query'
import { fetchCardList } from './api/CardListApi'

export const CardList = () => {
  // Queries
  const { isLoading, isError, data, error } = useQuery(['CardList'], fetchCardList)

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      {data}
      <p>query</p>
    </div>
  )
}
