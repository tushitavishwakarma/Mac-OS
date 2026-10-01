import { useState } from 'react'
import './App.scss'
import Dock from './components/Dock.jsx'
import Nav from './components/Nav.jsx'
import Github from './components/windows/github.jsx'
import Note from './components/windows/note.jsx'
import Resume from './components/windows/resume.jsx'
import Spotify from './components/windows/spotify.jsx'
import Cli from './components/windows/Cli.jsx'

function App() {

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })
  
  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      { windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
      { windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
      { windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
      { windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
      { windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} />}
    </main>
  )
}


export default App
