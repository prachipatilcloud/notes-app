import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"

export const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Sidebar />
            </main>
        </>
    )
}