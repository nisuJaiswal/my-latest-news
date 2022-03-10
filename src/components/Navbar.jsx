// import { Container, Nav } from 'react-bootstrap';
// import { Card, Button } from 'react-bootstrap';
// import { ButtonGroup, ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        // <nav>
        //     <span> MyLatestNews </span>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand fs-3 d-flex align-items-center" to="/">MyLatestNews</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-1">
                            <Link className="nav-link" aria-current="page" to="/">General</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="nav-link" to="/science">Science</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="nav-link" to="/buisness">Buisness</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>

                        <li className="nav-item mx-1">
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="nav-link" to="/health">Health</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar