import logo from "../../assets/logo.png";


export const Navbar = () => {
    return(
        <header className="flex px-3 py-2 gap-3 border-b-2 border-gray-300 items-center">
            <div className="w-12 h-12">
                <img className="w-full h-full" src= {logo} alt="Logo" />
            </div>
            <h1 className="text-indigo-800 text-4xl font-bold">NoteCraft</h1>
        </header>
    )
}