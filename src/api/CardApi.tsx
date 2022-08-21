import axios from 'axios'

export const fetchCards = async () => {
  const res = await axios.get('http://localhost:3000/cards')
  return res.data
}
