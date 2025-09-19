import { useState } from "react"
import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import { NotesCard } from "../../components/NotesCard"
import { useNotes } from "../../context/notes-context"

export const Important = () => {
    const { notes } = useNotes();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Filter notes to get only pinned (important) notes
    const importantNotes = notes.filter(note => note.isPinned);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
            <div className="flex">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <main className="flex-1 lg:ml-0">
                    <div className="max-w-7xl mx-auto p-4 sm:p-6">
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">Important Notes</h1>
                            <p className="text-gray-600">
                                {importantNotes.length === 0 
                                    ? "No important notes" 
                                    : `${importantNotes.length} important note${importantNotes.length === 1 ? '' : 's'}`
                                }
                            </p>
                        </div>

                        {importantNotes.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-16">
                                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-icons-outlined text-4xl text-gray-400">
                                        label_important
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">No important notes found</h3>
                                <p className="text-gray-500 text-center max-w-sm">
                                    Pin notes to mark them as important and they'll appear here for quick access.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {importantNotes.map(({ id, title, text, isPinned }) => (
                                    <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}