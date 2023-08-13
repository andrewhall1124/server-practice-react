import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Input } from '@mui/material';


export default function RenameNoteDialog({open, setOpen, notes, setNotes, noteId}){

  const handleClose = () => {
    setOpen(false);
  };

  const note = notes.find(note => note.id === noteId);
  const initialName = note ? note.name : "";

  const [name, setName] = useState(initialName);

  const handleName = (e) =>{
    setName(e.target.value);
  }

  const submitName = () => {
    const updatedNotes = notes.map(note => {
      if (note.id === noteId) {
        return {
          ...note,
          name: name
        };
      }
      return note;
    });

    setNotes(updatedNotes);
    handleClose();
  }

  return(
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Rename Note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Name: <Input value={name} onChange={handleName} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='error'>Cancel</Button>
          <Button onClick={submitName} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
  </>
  )
}