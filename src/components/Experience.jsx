import { useState } from "react"
import FrontEnd from "./experiences/FrontEnd"

export default function Experience() {
    const [modalFront, setModalFront] = useState(false)
    return ( 
        
        <section className="experience" id="experience">
        {modalFront && (
                <div>
                    <FrontEnd setModalFront={setModalFront}/>
                </div>
        )}
            <div className="text-experience">
                <p className="title">Minhas Habilidades</p>
                <h1 className="job">Minha Experiência</h1>
            </div>
            <div className="cards">
            <div className="card">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="53.3" height="53.3" backfill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
             
                <p className="card-title">Linguagens e Frameworks</p>
                <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nam modi perspiciatis fugit rem repellendus aliquam, nulla eligendi asperiores fuga.</p>

                <div className="experience-links">
                    <button className="experience-link">Ver mais</button>
                </div>
            </div>
            <div className="card">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="53.3" height="53.3" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                </svg>
                
                <p className="card-title">Desenvolvimento Front end</p>
                <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nam modi perspiciatis fugit rem repellendus aliquam, nulla eligendi asperiores fuga.</p>
                <div className="experience-links">
                    <button className="experience-link" onClick={() => {
                        setModalFront(true)
                    }}>Ver mais</button>
                </div>
            </div>
            <div className="card">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="53.3" height="53.3" backfill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
                
                <p className="card-title">Desenvolvimento Back end</p>
                <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nam modi perspiciatis fugit rem repellendus aliquam, nulla eligendi asperiores fuga.</p>
                <div className="experience-links">
                    <button className="experience-link">Ver mais</button>
                </div>
            </div>
            <div className="card">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="53.3" height="53.3" fill="currentColor" className="bi bi-trello" viewBox="0 0 16 16">
                <path d="M14.1 0H1.903C.852 0 .002.85 0 1.9v12.19A1.902 1.902 0 0 0 1.902 16h12.199A1.902 1.902 0 0 0 16 14.09V1.9A1.902 1.902 0 0 0 14.1 0ZM7 11.367a.636.636 0 0 1-.64.633H3.593a.633.633 0 0 1-.63-.633V3.583c0-.348.281-.631.63-.633h2.765c.35.002.632.284.633.633L7 11.367Zm6.052-3.5a.633.633 0 0 1-.64.633h-2.78A.636.636 0 0 1 9 7.867V3.583a.636.636 0 0 1 .633-.633h2.778c.35.002.631.285.631.633l.01 4.284Z"/>
                </svg>
                
                <p className="card-title">Gerenciamento de Projetos</p>
                <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nam modi perspiciatis fugit rem repellendus aliquam, nulla eligendi asperiores fuga.</p>
                <div className="experience-links">
                    <button className="experience-link">Ver mais</button>
                </div>
            </div>
            </div>
        </section>
    )
}