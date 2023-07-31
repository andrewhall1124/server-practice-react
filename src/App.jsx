import './App.css';
import FloatingButton from './components/floating-button/floating-button';
import Header from './components/header/header';
import Note from './components/note/note';

export default function App() {

  return (
    <div className='bg-slate-100 h-[100vh]'>
      <Header/>
      <main className='flex gap-4 p-4'>
        <Note/>
        <FloatingButton/>
      </main>
    </div>
  )
}