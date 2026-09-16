import React from 'react'
import '../dock.scss'

const Dock = () => {
  return (
    <div>
      <footer className='dock'>
        <div className="icon github"> <img src="/doc-icons/github.svg" alt=""></img> </div>
         <div className="icon note"> <img src="/doc-icons/note.svg" alt=""></img> </div>
          <div className="icon pdf"> <img src="/doc-icons/pdf.svg" alt=""></img> </div>
          <div className="icon link"> <img src="/doc-icons/link.svg" alt=""></img> </div>
          <div className="icon calender"> <img src="/doc-icons/calender.svg" alt=""></img> </div>
          <div className="icon cli"> <img src="/doc-icons/cli.svg" alt=""></img> </div>
         <div className="icon mail"> <img src="/doc-icons/mail.svg" alt=""></img> </div>
          <div className="icon spotify"> <img src="/doc-icons/spotify.svg" alt=""></img> </div>

      </footer>
     
    </div>
  )
}

export default Dock
