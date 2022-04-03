import { Outlet } from "react-router-dom"

export const Header = () => {
    return <h1>This is Header</h1>
}

export const Footer = () => {
    return <h1>This is Header</h1>
}

export const AppLayout = () => {
    return <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
}