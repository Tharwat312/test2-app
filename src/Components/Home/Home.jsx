import React from 'react'
import Heading from '../Heading/Heading'
import test from '../../assets/images/Avatar.svg'
function Home() {
    return (
        <>
            <img src={test} className='w-1/4 mx-auto' alt="" />
            <Heading text={'start framework'}></Heading>

        </>
    )
}

export default Home