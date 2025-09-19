import { useNotes } from "../../context/notes-context"


export const NotesCard = ({ id, title, text, isPinned }) => {

    const { notesDispatch } = useNotes();

    const onPinClick = (id) => {
        !isPinned ? notesDispatch({
            type: 'PIN',
            payload: { id }
        }) : notesDispatch({
            type: 'UNPIN',
            payload: { id }
        })
    }


    return (
        <div className="w-56 border border-neutral-800 rounded-md p-2" key={id}>
            <div className="flex justify-between">
                <p>{title}</p>
                <button onClick={() => onPinClick(id)}>
                    <span className={isPinned ? 'material-icons' : 'material-icons-outlined'}>
                        push_pin
                    </span>
                </button>
            </div>
            <div className="flex flex-col">
                <p>{text}</p>
                <div className="ml-auto">
                    <button>
                        <span class="material-icons-outlined">
                            archive
                        </span>
                    </button>
                    <button>
                        <span className="material-icons-outlined">
                            delete
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}