export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <a href="#" className="logo">Nathan</a>
                <div className="footer-buttons">
                    <a href="https://github.com/nathanhds" target="_blank" className="link-footer">
                       <img src="public/github.svg" alt="github-icon" className="icons"/>
                    </a>
                    <a href="https://linkedin.com/in/nathanhds" target="_blank" className="link-footer">
                       <img src="public/linkedin.svg" alt="linkedin-icon" className="icons"/>
                       
                    </a>
                </div>
            </div>
            <hr />
            <div className="copy">
                <p>© Nathan Silva</p>
                <p>Todos os direitos reservados</p>
            </div>
        </footer>
    )
}