import axios from 'axios'

export const fetchCardList = async () => {
  const res = await axios.get('http://localhost:3000/posts/1')
  return res.data
}
