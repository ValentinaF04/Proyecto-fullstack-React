import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
    const { usuarioLogueado, logout } = useAuth();
    const navigate = useNavigate();

    const handleCerrarSesion = () => {
        logout();
        navigate('/'); 
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">PC Builder</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"><NavLink className="nav-link" end to="/">Inicio</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/catalogo">Catálogo</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/compatibilidad">Compatibilidad</NavLink></li>
                        </ul>
                        <div className="d-flex align-items-center">
                            <Link to="/carrito" className="nav-link me-3 text-white">
                                <i className="bi bi-cart fs-4"></i>
                            </Link>
                            
                            {usuarioLogueado ? (
                                <ul className="navbar-nav">
                                    <li className="nav-item"><NavLink className="nav-link" to="/perfil">Mi Perfil</NavLink></li>
                                    <li className="nav-item">
                                        <button className="btn btn-primary ms-2" onClick={handleCerrarSesion}>Cerrar Sesión</button>
                                    </li>
                                </ul>
                            ) : (
                                <ul className="navbar-nav">
                                    <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
                                    <li className="nav-item"><Link className="btn btn-primary ms-2" to="/registro">Registro</Link></li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;