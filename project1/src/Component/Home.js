import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link className='btn btn-primary m-2' to="/product" >Products</Link>
            <Link className='btn btn-warning m-2' to="/price" >Price</Link>
            <Outlet />
        </div>
    )
}

export default Home
