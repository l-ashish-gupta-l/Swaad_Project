import React from 'react'
import Navbar from '../Components/Navbar'
import LandingPage from '../Components/LandingPage'
import Aboutme from '../Components/Aboutme'
import Populardishes from '../Components/Populardishes'
import Menu from '../Components/Menu'
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'

function Home() {
    return (<>
        {/* <Navbar /> */}
        <LandingPage />
        <Aboutme />
        <Populardishes />
        <Menu />
        <Blog />
        <Footer />
    </>
    )
}

export default Home