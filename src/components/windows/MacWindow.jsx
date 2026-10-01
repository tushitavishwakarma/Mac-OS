import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'

const MacWindow = ({ children, visible = true, onClose, title = 'tushitavishwakarma-zsh' }) => {
  if (!visible) return null

  return (
    <Rnd
      default={{
        x: 220,
        y: 110,
        width: 700,
        height: 430,
      }}
      minWidth={420}
      minHeight={280}
      bounds="window"
      dragHandleClassName="window-header"
      className="window-rnd"
    >
      <div className="window">
        <div className="window-header">
          <div className="dots">
            <button type="button" className="dot red" onClick={onClose} aria-label="Close window" />
            <div className="dot yellow" />
            <div className="dot green" />
          </div>
          <div className="title">{title}</div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  )
}

export default MacWindow
