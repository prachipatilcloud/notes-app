import { useNotes } from "../../context/notes-context"
import { findNotesInArchive } from "../../utlis/findNotesInArchive";


export const NotesCard = ({ id, title, text, isPinned }) => {

    const { notesDispatch, archive } = useNotes();

    const isNotesInArchive = findNotesInArchive(archive, id);

    const onPinClick = (id) => {
        !isPinned ? notesDispatch({
            type: 'PIN',
            payload: { id }
        }) : notesDispatch({
            type: 'UNPIN',
            payload: { id }
        })
    }

    const onArchiveClick = (id) => {
        !isNotesInArchive ? notesDispatch({
            type: 'ARCHIVE',
            payload: { id }
        }) : notesDispatch({
            type: 'UNARCHIVE',
            payload: { id }
        })
    }

    const onDeleteClick = (id) => {
        notesDispatch({
            type: 'DELETE',
            payload: { id }
        })
    }

    return (
        <div className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200" key={id}>
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 flex-1 mr-2">
                    {title || "Untitled"}
                </h3>
                {!isNotesInArchive && (
                    <button 
                        onClick={() => onPinClick(id)}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                            isPinned 
                                ? 'text-yellow-500 bg-yellow-50 hover:bg-yellow-100' 
                                : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50'
                        }`}
                        title={isPinned ? 'Unpin note' : 'Pin note'}
                    >
                        <span className={isPinned ? 'material-icons' : 'material-icons-outlined'}>
                            push_pin
                        </span>
                    </button>
                )}
            </div>

            {/* Content */}
            <div className="mb-4">
                <p className="text-gray-600 text-sm line-clamp-4 leading-relaxed">
                    {text || "No content"}
                </p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-1 pt-2 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button 
                    onClick={() => onArchiveClick(id)}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                        isNotesInArchive
                            ? 'text-blue-600 hover:bg-blue-50'
                            : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    title={isNotesInArchive ? 'Unarchive note' : 'Archive note'}
                >
                    <span className={isNotesInArchive ? 'material-icons' : 'material-icons-outlined'}>
                        archive
                    </span>
                </button>
                <button 
                    onClick={() => onDeleteClick(id)}
                    className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors duration-200"
                    title="Delete note"
                >
                    <span className="material-icons-outlined">
                        delete
                    </span>
                </button>
            </div>
        </div>
    )
}