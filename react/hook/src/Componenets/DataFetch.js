import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetch() {

    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idFromBtn, setIdFromBtn] = useState(1)

    useEffect (() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromBtn])

    const handleClick = () => {
        setIdFromBtn(id)
    }

    return (
        <div>
        <input type= "text" value={id} onChange={e => setId(e.target.value)} />
        <button type='button' onClick={handleClick}>Fetch</button>
        <h2>{post.title}</h2>
            {/* <ul>
                {post.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default DataFetch
