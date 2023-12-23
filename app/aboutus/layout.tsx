import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Analytics } from '@vercel/analytics/react'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
        </>
    )
}

export default layout