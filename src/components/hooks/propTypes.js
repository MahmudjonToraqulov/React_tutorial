import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Prop_product from './prop_product'

const url = 'https://jsonplaceholder.typicode.com/posts '
function PropTypes() {
    const [ posts,setPosts ] = useState([])
    const [ error,setError ] = useState('')
    const [ loading , setLoading ] = useState(true)
    
    const getPosts = ()=> {
        axios.get(url)
        .then(res => { 
            setPosts(res.data)
            setLoading(false)
        })
        .catch(err => {
            setError(err)
        })
    }

    useEffect(()=> {
        getPosts()
    },[url])
    console.log(posts)
  return (
    <h1>
        { posts.map(el => {
            return <Prop_product key={el.id} data={ el } />
        }) }
    </h1>
  )
}

export default PropTypes