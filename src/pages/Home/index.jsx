import "./style.css"
import React from 'react'
import Navbar from '../../component/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <header class="hero">

        <div class="header-text">
            <h1 class="depth">NextGenCity</h1>
            <h4>SOLUTIONS FOR THE NEXT SMART CITY</h4>
        </div>
    </header>
    </div>
  )
}

export default Home