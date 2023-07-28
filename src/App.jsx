import './App.css';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Checkbox } from '@mui/material';
import { TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Fab } from '@mui/material';

export default function App() {

  return (
    <div className='bg-slate-100 h-[100vh]'>
      <header>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ✏️QuickNote
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </header>
      <main className='flex gap-4 p-4'>
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
        <div className='fixed bottom-4 right-4'>
        <Fab color="primary">
          <Add/>
        </Fab>
        </div>

      </main>
    </div>
  )
}