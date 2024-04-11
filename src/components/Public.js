
import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Himanshi TechNotes</span></h1>
            </header>
            <main className="public__main">
                <p>It is a place where Employee can write their tech notes and which can modify by manager and admin and also they write their technotes to complete </p>
                <address className="public__addr">
                    Himansh TechNotes<br />
                    Ahmedabad<br />
                    <a href="tel:7041092774">7041092774</a>
                </address>
                <br />
                <p>Owner: Himanshi Gandhi</p>
            </main>
            <footer>
                <Link to="/login">Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public