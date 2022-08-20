export const fetchCardList = async () => {
  const result = await new Promise(resolve => setTimeout(() => { resolve; return 1 }, 1000))
  console.log(result)
  return result
}
