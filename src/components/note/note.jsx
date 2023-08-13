import {useState} from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Checkbox } from '@mui/material';
import { TextField, Menu, MenuItem, Button } from '@mui/material';
import { Add, Delete, Edit, MoreVert } from '@mui/icons-material';
import RenameNoteDialog from '../rename-note-dialog/rename-note-dialog';

export default function Note({title, noteId, notes, setNotes, createId}){

  //Bullet points state
  let newId = createId();
  const [bullets, setBullets] = useState([{
    id: newId, text: ""
  }])

  const addBullet = () =>{
    setBullets([...bullets,{id: createId(), text: ""}])
    console.log(bullets);
  }

  const deleteBullet = (id) =>{
   const updatedBullets = bullets.filter(bullet => bullet.id !== id);
    setBullets(updatedBullets);
  }

  //Menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteNote = (key) => {
    const updatedNotes = notes.filter(note => note.id !== key)
    setNotes(updatedNotes);
    handleClose();
  }

  //Dialog State
  const [openDialog, setOpenDialog ] = useState(false);

  const handleOpenDialog = () =>{
    setOpenDialog(true);
  }

  // Input box state
  const handleTextChange = (id,event) =>{
    setBullets(
      bullets.map(bullet =>{
        if(bullet.id === id){
          return {id: bullet.id, text: event.target.value}
        }
        return bullet;
      })
    )
  }

  return(
    <>
    <Card>
      <CardContent>
        <Typography variant="h5" color="text.primary">
          {title}
          <IconButton onClick={handleClick}>
            <MoreVert/>
          </IconButton>
          <div>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleOpenDialog}>
                Rename
              </MenuItem>
              <MenuItem onClick={() => {deleteNote(noteId)}}>
                Delete<Delete/>
              </MenuItem>
            </Menu>
          </div>
        </Typography>
        {bullets.map((bullet) => (
          <Typography variant="h6" component="div" key={bullet.id}>
            <div className='w-full'>
              <Checkbox/> 
              <TextField id={String(bullet.id)} value={bullet.text} onChange={(event)=>handleTextChange(bullet.id,event)} variant="standard" sx={{width: "auto"}} />
              <IconButton onClick={() => deleteBullet(bullet.id)}>
                <Delete/>
              </IconButton>
            </div>
          </Typography>
        ))}
        <IconButton onClick={addBullet}>
          <Add/>
        </IconButton>
      </CardContent>
    </Card>
    <RenameNoteDialog open={openDialog} setOpen={setOpenDialog} notes={notes} setNotes={setNotes} noteId={noteId} />
    </>
  )
}