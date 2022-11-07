export default function Navbar() {
    return <nav className="nav" style={{height: 75}}>
        <a href="/" className="site-title">Malcolm Kaplan</a>
        <ul>
            <li>
                <a href="resume">Resume</a>
            </li>
            <li>
                <a href="misc">Misc</a>
            </li>
            <li>
                <a href="github">Github</a>
            </li>
            <li>
                <a href="youtube">YouTube</a>
            </li>
        </ul>
    </nav>
}