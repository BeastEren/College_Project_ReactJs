import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
    return (
        <div>
            <p style={{ color: 'white' }}>What the f man</p>
            <Link to={'/login'}><button>Login</button></Link>
            <Link to={'/adminLogin'}><button>Admin Login</button></Link>
        </div>
    )
}