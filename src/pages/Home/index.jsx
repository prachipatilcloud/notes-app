import { useReducer, useState } from "react"
import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import { notesReducer } from "../../reducers/notesReducer"

export const Home = () => {

    const initialState = {
        title: '',
        text: '',
        notes: []
    }
    const [{ title, text, notes }, notesDispatch] = useReducer(notesReducer, initialState)

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


    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <div >
                    <div className="flex flex-col gap-3 p-3 w-[300px] border relative">
                        <input
                            value={title} onChange={onTitleChange} className="border p-1" placeholder="Enter title"
                        />
                        <textarea
                            value={text}
                            onChange={onTextChange} className="border p-1" placeholder="Enter content"
                        />
                        <button
                            disabled={title.length === 0}
                            onClick={onAddClick} className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full shadow" >
                            <span className="material-symbols-outlined">
                                add
                            </span>
                        </button>
                    </div>
                    <div className="mt-[14px] flex flex-wrap gap-6">
                        {
                            notes?.length > 0 && notes.map(({ id, title, text }) => (
                                <div className="w-56 border border-neutral-800 rounded-md p-2" key={id}>
                                    <div className="flex justify-between">
                                        <p>{title}</p>
                                        <button>
                                            <span class="material-symbols-outlined">
                                                keep
                                            </span>
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <p>{text}</p>
                                        <div className="ml-auto">
                                            <button>
                                                <span className="material-symbols-outlined">
                                                    archive
                                                </span>
                                            </button>
                                            <button>
                                                <span className="material-symbols-outlined">
                                                    delete
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
        </>
    )
}