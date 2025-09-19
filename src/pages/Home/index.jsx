import { useState } from "react"
import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import { NotesCard } from "../../components/NotesCard"
import { useNotes } from "../../context/notes-context"

export const Home = () => {

    const { title, text, notes, archive, notesDispatch } = useNotes();

    const onTitleChange = (e) => {
        notesDispatch({
            type: 'TITLE',
            payload: e.target.value
        })
    }
    const onTextChange = (e) => {
        notesDispatch({
            type: 'TEXT',
            payload: e.target.value
        })
    }

    const onAddClick = () => {
        notesDispatch({
            type: 'ADD_NOTE'

        })
        notesDispatch({
            type: 'CLEAR_INPUT'

        })
    }

    const pinnedNotes = notes?.length > 0 ? notes.filter(({ isPinned }) => isPinned) : [];
    const otherNotes = notes?.length > 0 ? notes.filter(({ isPinned }) => !isPinned) : [];
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
            <div className="flex">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <main className="flex-1 lg:ml-0">
                    <div className="max-w-7xl mx-auto p-4 sm:p-6">
                        {/* Note Creation Form */}
                        <div className="mb-8">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden max-w-2xl mx-auto">
                                <div className="p-6">
                                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Create a new note</h2>
                                    <div className="space-y-4">
                                        <input
                                            value={title}
                                            onChange={onTitleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                                            placeholder="Enter note title..."
                                        />
                                        <textarea
                                            value={text}
                                            onChange={onTextChange}
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                                            placeholder="Write your note content..."
                                        />
                                    </div>
                                </div>
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
                                    <button
                                        disabled={title.length === 0}
                                        onClick={onAddClick}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-indigo-600"
                                    >
                                        <span className="material-icons text-lg">add</span>
                                        <span className="hidden sm:inline">Add Note</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Notes Display */}
                        <div className="space-y-8">
                            {/* Pinned Notes */}
                            {pinnedNotes.length > 0 && (
                                <section>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="material-icons text-yellow-500">push_pin</span>
                                        <h3 className="text-xl font-semibold text-gray-800">Pinned Notes</h3>
                                        <span className="text-sm text-gray-500">({pinnedNotes.length})</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                        {pinnedNotes.map(({ id, title: noteTitle, text, isPinned }) => (
                                            <NotesCard key={id} id={id} title={noteTitle} text={text} isPinned={isPinned} />
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Other Notes */}
                            <section>
                                {pinnedNotes.length > 0 && otherNotes.length > 0 && (
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="material-icons-outlined text-gray-500">description</span>
                                        <h3 className="text-xl font-semibold text-gray-800">Other Notes</h3>
                                        <span className="text-sm text-gray-500">({otherNotes.length})</span>
                                    </div>
                                )}
                                
                                {otherNotes.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                        {otherNotes.map(({ id, title: noteTitle, text, isPinned }) => (
                                            <NotesCard key={id} id={id} title={noteTitle} text={text} isPinned={isPinned} />
                                        ))}
                                    </div>
                                ) : notes.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center py-16">
                                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                            <span className="material-icons-outlined text-4xl text-gray-400">
                                                note_add
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No notes yet</h3>
                                        <p className="text-gray-500 text-center max-w-sm">
                                            Create your first note using the form above to get started!
                                        </p>
                                    </div>
                                ) : null}
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}