import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ title, onClose }) => {
    return (
        <MacWindow title={title} onClose={onClose}>
            <div className="resume-window">
                <embed src="/resume.pdf" title="Resume" />
            </div>
        </MacWindow>
    )
}

export default Resume
