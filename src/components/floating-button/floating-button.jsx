import { Add } from '@mui/icons-material';
import { Fab } from '@mui/material';


export default function FloatingButton({click}){

  return(
  <div className='fixed bottom-4 right-4'>
    <Fab color="primary" onClick={click}>
      <Add/>
    </Fab>
  </div>
  )
}