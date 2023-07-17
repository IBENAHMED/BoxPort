import React from 'react'
import Navbar from '../Components/PrincipaleItem/Navbar'
import Body from '../Components/PrincipaleItem/Body'
import Footer from '../Components/PrincipaleItem/Footer'

const Principale = () => {
    return (
        <div className='Principale'>
            <Navbar />
            <Body />
            <Footer />
        </div>
    )
}

export default Principale