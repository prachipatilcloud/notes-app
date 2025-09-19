import { NavLink } from "react-router-dom"

export const Sidebar = ({ isOpen, onClose }) => {
    const getStyles = ({ isActive }) => {
        const baseStyles = 'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium'
        return isActive 
            ? `${baseStyles} bg-indigo-600 text-white shadow-md` 
            : `${baseStyles} text-gray-700 hover:bg-indigo-50 hover:text-indigo-600`
    }

    const menuItems = [
        { path: '/', icon: 'home', label: 'Home' },
        { path: '/important', icon: 'label_important', label: 'Important' },
        { path: '/archive', icon: 'archive', label: 'Archive' },
        { path: '/bin', icon: 'delete', label: 'Bin' },
    ]

    return (
        <>
            {/* Mobile backdrop */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed lg:relative
                top-0 left-0
                h-full lg:h-auto
                w-72 lg:w-64
                bg-white
                border-r border-gray-200
                shadow-lg lg:shadow-none
                z-50 lg:z-auto
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                flex flex-col
            `}>
                {/* Mobile header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
                    <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                    <button 
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Close menu"
                    >
                        <span className="material-icons-outlined text-gray-600">
                            close
                        </span>
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        {menuItems.map(({ path, icon, label }) => (
                            <li key={path}>
                                <NavLink 
                                    className={getStyles} 
                                    to={path}
                                    onClick={onClose}
                                >
                                    <span className="material-icons-outlined text-xl">
                                        {icon}
                                    </span>
                                    <span className="text-sm">{label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 text-center">
                        NoteCraft v1.0
                    </p>
                </div>
            </aside>
        </>
    )
}