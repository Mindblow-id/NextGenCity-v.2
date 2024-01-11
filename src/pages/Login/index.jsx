import React from 'react'
import "./style.css"

export default function Login() {
  return (
    <div>
        <form action="">
            <div className="input">
                <label htmlFor="username">Username</label>
                <input type="text" id='username' name='username' />
            </div>
        </form>
    </div>
  )
}
