import React from 'react'
import githubData from "../../assets/github.json" 
import MacWindow from './MacWindow'

const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {
    return <div className="card">

        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description' >{data.description}</p>

        <div className="tags">
            {
                data.tags.map((tag, index) => <p key={`${data.title}-${tag}-${index}`} className='tag' >{tag}</p>)
            }
        </div>

        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            {data.demoLink && <a href={data.demoLink}>Demo link</a>}
        </div>
    </div>
}


const Github = ({ windowName, setWindowsState }) => {
    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="cards">
                {githubData.map((project, index) => {
                    return <GitCard key={project.id ?? project.title ?? index} data={project} />
                })}
            </div>
        </MacWindow>
    )
}


export default Github
