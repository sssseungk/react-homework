
import Nav from './Nav';
export default function HeaderBar(){

  return (
    <header className="bg-slate-300 flex items-center justify-between">
      <h1 className="pl-10  py-7">Music Player</h1>
      <Nav/>
    </header>
  )
}
