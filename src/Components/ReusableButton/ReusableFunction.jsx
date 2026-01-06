import axios from 'axios'
export const saveUser = async (userData) => {
  const { data } = await axios.post(
    `https://assignment-10-eosin.vercel.app/all-user`,
    userData
  )
  return data
}
