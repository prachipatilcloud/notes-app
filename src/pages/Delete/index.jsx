import { useState } from "react"
import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import { useNotes } from "../../context/notes-context"

export const Delete = () => {
    const { deletedNotes, notesDispatch } = useNotes();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const onRestoreClick = (id) => {
        notesDispatch({
            type: 'RESTORE',
            payload: { id }
        })
    }

    const onPermanentDeleteClick = (id) => {
        notesDispatch({
            type: 'PERMANENT_DELETE',
            payload: { id }
        })
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
            <div className="flex">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <main className="flex-1 lg:ml-0">
                    <div className="max-w-7xl mx-auto p-4 sm:p-6">
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">Deleted Notes</h1>
                            <p className="text-gray-600">
                                {deletedNotes.length === 0 
                                    ? "No deleted notes" 
                                    : `${deletedNotes.length} deleted note${deletedNotes.length === 1 ? '' : 's'}`
                                }
                            </p>
                        </div>

                        {deletedNotes.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-16">
                                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-icons-outlined text-4xl text-gray-400">
                                        delete_outline
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">No deleted notes found</h3>
                                <p className="text-gray-500 text-center max-w-sm">
                                    Notes you delete will appear here. You can restore them or delete them permanently.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {deletedNotes.map(({ id, title, text, isPinned }) => (
                                    <div key={id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 min-w-0">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="font-semibold text-lg text-gray-800 truncate flex-1 mr-2">
                                                {title || "Untitled"}
                                            </h3>
                                            {isPinned && (
                                                <span className="material-icons text-yellow-500 text-sm">
                                                    push_pin
                                                </span>
                                            )}
                                        </div>
                                        
                                        <div className="mb-4">
                                            <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                                                {text || "No content"}
                                            </p>
                                        </div>
                                        
                                        <div className="flex justify-between gap-2 pt-3 border-t border-gray-100">
                                            <button 
                                                onClick={() => onRestoreClick(id)}
                                                className="flex items-center justify-center gap-1 px-3 py-2 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors flex-1 max-w-[120px]"
                                                title="Restore note"
                                            >
                                                <span className="material-icons-outlined text-base">
                                                    restore
                                                </span>
                                                <span>Restore</span>
                                            </button>
                                            <button 
                                                onClick={() => onPermanentDeleteClick(id)}
                                                className="flex items-center justify-center gap-1 px-2 py-2 text-xs bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition-colors flex-1 max-w-[120px]"
                                                title="Delete permanently"
                                            >
                                                <span className="material-icons-outlined text-base">
                                                    delete_forever
                                                </span>
                                                <span>Delete</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}
