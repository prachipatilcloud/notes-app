import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducers/notesReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {

    const initialState = {
        title: '',
        text: '',
        notes: [],
        archive: [],
        deletedNotes: []
        
    }
    const [{ title, text, notes, archive, deletedNotes }, notesDispatch] = useReducer(notesReducer, initialState)

    return(
        <NotesContext.Provider value={{ title, text, notes, archive, deletedNotes, notesDispatch }}>
            {children}
        </NotesContext.Provider>
    )
}


const useNotes = () => useContext(NotesContext);

export {NotesProvider, useNotes};