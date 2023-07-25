import { useEffect, useState } from 'react'
import axios from 'axios'

export default function usePostSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [books, setBooks] = useState([])
  const [hasMore, setHasMore] = useState(false)

//   useEffect(() => {
//     setBooks([])
//   }, [query])

  useEffect(() => {
    // setLoading(true)
    // setError(false)
    let cancel
    axios({
      method: 'GET',
      url: `http://localhost:5000/client1/getposts?page=3&limit=3`,
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setBooks(prevBooks => {
        return [...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])]
      })
    //   setHasMore(res.data.docs.length > 0)
    //   setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, books, hasMore }
}