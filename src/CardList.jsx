import {
  useQuery,
} from '@tanstack/react-query'
import { fetchCardList } from './api/CardListApi'

export const CardList = () => {
  // Queries
  const query = useQuery(['CardList'], fetchCardList)

  return (
    <div>{query.data}</div>
  )
}
