import { useState } from "react"
import FrontEnd from "./experiences/FrontEnd"
import BackEnd from "./experiences/BackEnd"
import Database from "./experiences/Database"
import ProjectsManagement from "./experiences/ProjectsManagement"

export default function Experience() {
    const [modalFront, setModalFront] = useState(false)
    const [modalBack, setModalBack] = useState(false)
    const [modalDatabase, setModalDatabase] = useState(false)
    const [modalProjectsManagement, setModalProjectsManagement] = useState(false)

    return ( 
        
        <section className="experience" id="experience">
        {modalFront && (
                <div>
                    <FrontEnd setModalFront={setModalFront}/>
                </div>
        )}

        {modalBack && (
                <div>
                    <BackEnd setModalBack={setModalBack}/>
                </div>
        )}

        {modalDatabase && (
                <div>
                    <Database setModalDatabase={setModalDatabase}/>
                </div>
        )}

        {modalProjectsManagement && (
                <div>
                    <ProjectsManagement setModalProjectsManagement={setModalProjectsManagement}/>
                </div>
        )}
            <div className="text-experience">
                <p className="title">Minhas Habilidades</p>
                <h1 className="job">Minha Experiência</h1>
            </div>
            <div className="cards">
            <div className="card">
                
                <div className="card-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="53.3" height="53.3" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                    </svg>
                    
                    <p className="card-title">Desenvolvimento Front end</p>
                    <p className="card-description">Criei interfaces interativas, responsivas e atrativas para sites e aplicativos.</p>
                </div>
                <div className="experience-links">
                    <button className="experience-link" onClick={() => {
                        setModalFront(true)
                    }}>Ver mais</button>
                </div>
            </div>
            <div className="card">
                
                <div className="card-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="53.3" height="53.3" backfill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                    </svg>
                    
                    <p className="card-title">Desenvolvimento Back end</p>
                    <p className="card-description">Construí sistemas robustos e escaláveis, gerenciando servidores, bancos de dados e lógica de aplicação para suportar aplicações web.</p>
                </div>
                <div className="experience-links">
                    <button className="experience-link" onClick={() => {
                        setModalBack(true)
                    }}>Ver mais</button>
                </div>
            </div>
            <div className="card">
                
                <div className="card-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="53.3" height="53.3" fill="currentColor" className="bi bi-database" viewBox="0 0 16 16">
                        <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313ZM13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A4.92 4.92 0 0 0 13 5.698ZM14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13V4Zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A4.92 4.92 0 0 0 13 8.698Zm0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525Z"/>
                    </svg>
                    <p className="card-title">Banco de <br></br>dados</p>
                    <p className="card-description">Projetei e otimizei sistemas de armazenamento de dados para aplicações, garantindo eficiência e confiabilidade</p>
                </div>

                <div className="experience-links">
                    <button className="experience-link" onClick={() => {
                        setModalDatabase(true)
                    }}>Ver mais</button>
                </div>
            </div>
            <div className="card">
                
                <div className="card-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="53.3" height="53.3" fill="currentColor" className="bi bi-trello" viewBox="0 0 16 16">
                    <path d="M14.1 0H1.903C.852 0 .002.85 0 1.9v12.19A1.902 1.902 0 0 0 1.902 16h12.199A1.902 1.902 0 0 0 16 14.09V1.9A1.902 1.902 0 0 0 14.1 0ZM7 11.367a.636.636 0 0 1-.64.633H3.593a.633.633 0 0 1-.63-.633V3.583c0-.348.281-.631.63-.633h2.765c.35.002.632.284.633.633L7 11.367Zm6.052-3.5a.633.633 0 0 1-.64.633h-2.78A.636.636 0 0 1 9 7.867V3.583a.636.636 0 0 1 .633-.633h2.778c.35.002.631.285.631.633l.01 4.284Z"/>
                    </svg>
                    
                    <p className="card-title">Gerenciamento de Projetos</p>
                    <p className="card-description">Contribuí para a entrega bem-sucedida de projetos, assegurando eficiência e cumprimento de prazos.</p>
                </div>
                <div className="experience-links">
                    <button className="experience-link" onClick={() => {
                        setModalProjectsManagement(true)
                    }}>Ver mais</button>
                </div>
            </div>
            </div>
        </section>
    )
}