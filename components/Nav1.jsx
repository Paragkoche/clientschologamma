"use client"
import React from 'react'

export default function Nav() {
    // hamburger = document.querySelector(".hamburger");
    // hamburger.onclick = function(){
   
    // }
    const toggle =()=>{
        navBar = document.querySelector(".nav-bar");
        navBar.classList.toggle("active");
    }
  return (
    <div>
       <section className="header-section">
        <header>
            <div className="logo"><img src="/schologamma_-removebg-preview.png" alt=""/></div>
            <button className="hamburger" onClick={toggle}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            <nav className="nav-bar">
                <ul>
                    <li><a href="" className="active">Home</a></li>
                    <li><a href="">Committee</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Sign In</a></li>
                </ul>
            </nav>
        </header>
        <script>
          
        </script>
    </section>
    </div>
  )
}
