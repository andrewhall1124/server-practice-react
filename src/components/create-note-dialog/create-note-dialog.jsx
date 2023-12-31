import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Input } from '@mui/material';


export default function CreateNoteDialog({open, setOpen, notes, setNotes, createId}){

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState("");

  const handleName = (e) =>{
    setName(e.target.value);
  }

  const createNote = () => {
    const newNote = {
      name: name,
      id: createId(),
    };
  
    setNotes([...notes, newNote]);
    console.log(notes);
    setName("");    
    handleClose();
  }

  return(
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Name: <Input value={name} onChange={handleName} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='error'>Cancel</Button>
          <Button onClick={createNote} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
  </>
  )
}