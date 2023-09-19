export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="text-projects">
                <p className="title">Projetos</p>
                <p className="job">Meu Portfólio</p>
            </div>
            <div className="projects-cards">
                <div className="project-card">
                    <img src="/to-do.png" alt="" className="project-image"/>
                    <div className="project-content">
                        <p>To-do List</p>
                        <p>Desenvolvi um aplicativo de gerenciamento de tarefas usando as tecnologias MongoDB, Mongoose e Express. Este projeto permitiu criar, listar, atualizar e excluir tarefas, fornecendo uma solução eficaz para o acompanhamento de atividades.</p>
                        <a href="https://github.com/Nathanhds/to-do-list" target="_blank" className="experience-link">
                            <img src="/github.svg" alt="github-icon" className="icons"/>
                                GitHub
                            </a>
                    </div>
                </div>
            </div>
        </section>
    )
}