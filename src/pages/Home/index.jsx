import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import { NotesCard } from "../../components/NotesCard"
import { useNotes } from "../../context/notes-context"

export const Home = () => {

    const { title, text, notes, notesDispatch } = useNotes();

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

    const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
    const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);


    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <div className="flex flex-col w-screen mt-7">
                    <div className="flex flex-col gap-3 p-3 w-[450px] border relative self-center">
                        <input
                            value={title}
                            onChange={onTitleChange} className="border border-neutral-800 rounded-t-md focus:outline-none border-b-0 p-1" placeholder="Enter title"
                        />
                        <textarea
                            value={text}
                            onChange={onTextChange} className="h-[100px] border border-neutral-800 rounded-b-md focus:outline-none border-t-0 p-1" placeholder="Enter content"
                        />
                        <button
                            disabled={title.length === 0}
                            onClick={onAddClick} className="absolute bottom-2 right-2  border bg-blue-500 text-slate-50 p-2 rounded-full shadow" >
                            <span className="material-icons">
                                add
                            </span>
                        </button>
                    </div>
                    <div className="mt-14 ml-10 flex flex-col gap-6">
                        {
                            pinnedNotes?.length > 0 && (
                                <div>
                                    <h3 className="">Pinned Notes</h3>
                                    <div className="flex flex-wrap gap-6">
                                        {
                                            pinnedNotes?.length > 0 && pinnedNotes.map(({ id, title, text, isPinned }) => (
                                                <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                            ))
                                        }
                                    </div>

                                </div>
                            )
                        }
                        <div>
                            {
                                pinnedNotes?.length > 0 && <h3>Other Notes</h3>
                            }
                            <div className="flex flex-wrap gap-6">
                                {
                                    otherNotes?.length > 0 && otherNotes.map(({ id, title, text, isPinned }) => (
                                        <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}