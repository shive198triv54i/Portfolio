import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(url)
      const result = await response.json()
      setData(result)
      setLoading(false)
    }
    fetchData()
  }, [url])

  return { loading, data, setLoading }
}

