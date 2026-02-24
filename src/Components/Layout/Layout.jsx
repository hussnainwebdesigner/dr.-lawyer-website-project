import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = ( ) => {
    return (
        <>
            <div className=" h-screen">
                <Header />
                <main className="flex-1 w-full ">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout
