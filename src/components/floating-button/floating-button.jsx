import { Add } from '@mui/icons-material';
import { Fab } from '@mui/material';

export default function FloatingButton(){
  return(
    <div className='fixed bottom-4 right-4'>
      <Fab color="primary">
        <Add/>
      </Fab>
    </div>
  )
}