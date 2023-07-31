import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Checkbox } from '@mui/material';
import { TextField } from '@mui/material';
import { Add } from '@mui/icons-material';

export default function Note(){
  return(
    <Card sx={{ width: "50%" }}>
      <CardContent>
        <Typography variant="h5" color="text.primary">
          My Note
        </Typography>
        <Typography variant="h6" component="div">
          <div className='w-full'>
            <Checkbox/> 
            <TextField variant="standard" sx={{width: "80%"}} />
          </div>
          <IconButton>
            <Add/>
          </IconButton>
        </Typography>
      </CardContent>
    </Card>
  )
}