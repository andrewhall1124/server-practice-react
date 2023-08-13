import './App.css';
import { useState } from 'react';
import FloatingButton from './components/floating-button/floating-button';
import Header from './components/header/header';
import Note from './components/note/note';
import CreateNoteDialog from './components/create-note-dialog/create-note-dialog';

export default function App() {
  function createId(){
    return Math.round(Math.random()*10000);
  }

  const [notes, setNotes ] = useState([]);

  const [openDialog, setOpenDialog ] = useState(false);

  const handleOpenDialog = () =>{
    setOpenDialog(true);
  }

  return (
    <div className='bg-slate-100 h-[100vh]'>
      <Header/>
      <main className='flex gap-4 p-4'>
        {notes.map((note, index) => (
          <Note
            title={note.name}
            key={note.id}
            noteId = {note.id}
            notes={notes}
            setNotes={setNotes}
            createId={createId}
          />
        ))}

        <FloatingButton click={handleOpenDialog}/>
        <CreateNoteDialog open={openDialog} setOpen={setOpenDialog} notes={notes} setNotes={setNotes} createId={createId}/>
      </main>
    </div>
  )
}