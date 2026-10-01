import React from 'react'
import '../dock.scss'

const Dock = ({ setWindowsState }) => {
  const openWindow = (windowName) => {
    setWindowsState((current) => ({ ...current, [windowName]: true }))
  }

  return (
    <div>
      <footer className='dock'>
        <button type="button" className="icon github" onClick={() => openWindow('github')} aria-label="Open GitHub">
          <img src="/doc-icons/github.svg" alt=""></img>
        </button>
        <button type="button" className="icon note" onClick={() => openWindow('note')} aria-label="Open notes">
          <img src="/doc-icons/note.svg" alt=""></img>
        </button>
        <button type="button" className="icon pdf" onClick={() => openWindow('resume')} aria-label="Open resume">
          <img src="/doc-icons/pdf.svg" alt=""></img>
        </button>
        <button type="button" className="icon link" onClick={() => openWindow('github')} aria-label="Open project links">
          <img src="/doc-icons/link.svg" alt=""></img>
        </button>
        <a className="icon calender" href="https://calendar.google.com/" target="_blank" rel="noreferrer" aria-label="Open calendar">
          <img src="/doc-icons/calender.svg" alt=""></img>
        </a>
        <button type="button" className="icon cli" onClick={() => openWindow('cli')} aria-label="Open terminal">
          <img src="/doc-icons/cli.svg" alt=""></img>
        </button>
        <a className="icon mail" href="mailto:" aria-label="Compose an email">
          <img src="/doc-icons/mail.svg" alt=""></img>
        </a>
        <button type="button" className="icon spotify" onClick={() => openWindow('spotify')} aria-label="Open Spotify">
          <img src="/doc-icons/spotify.svg" alt=""></img>
        </button>
      </footer>
    </div>
  )
}

export default Dock
