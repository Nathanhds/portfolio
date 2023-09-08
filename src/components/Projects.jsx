export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="text-projects">
                <p className="title">Projetos</p>
                <p className="job">Meu Portfólio</p>
            </div>
            <div className="projects-cards">
                <div className="project-card">
                    <img src="./placeholder-image.svg" alt="" className="project-image"/>
                    <div className="project-content">
                        <p>Name</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sapiente dicta illo veniam, illum itaque enim voluptate odit mollitia molestias.</p>
                        <a href="">Link</a>
                    </div>
                </div>
                <div className="project-card">
                    <img src="../../public/placeholder-image.svg" alt="" className="project-image"/>
                    <div className="project-content">
                        <p>Name</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sapiente dicta illo veniam, illum itaque enim voluptate odit mollitia molestias.</p>
                        <a href="">Link</a>
                    </div>
                </div>
                <div className="project-card">
                    <img src="../../public/placeholder-image.svg" alt="" className="project-image"/>
                    <div className="project-content">
                        <p>Name</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sapiente dicta illo veniam, illum itaque enim voluptate odit mollitia molestias.</p>
                        <a href="">Link</a>
                    </div>
                </div>
            </div>
        </section>
    )
}