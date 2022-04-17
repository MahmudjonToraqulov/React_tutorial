import { useEffect,useState } from 'react'

export const useFetch = (url) => {
  const [ loading , setLoading ] = useState(true)
  const [ products , setProducts ] = useState([])

  const getRequest = async () => {
    const response = await fetch(url)
    const product = await response.json()
    setLoading(false)
    setProducts(product)
  }

  useEffect(()=>{
    getRequest()
  },[url])

  return { loading , products }
}
 