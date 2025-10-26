import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


function Login() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (evento) => {
        evento.preventDefault();
        setError('');
        setLoading(true);

        const resultado = login(correo, password);

        if (resultado.success) {
            setError('<div class="alert alert-success">¡Inicio de sesión exitoso! Redireccionando a tu perfil...</div>');
            setTimeout(() => {
                navigate('/perfil');
            }, 2000);
        } else {
            setError(`<div class="alert alert-danger">${resultado.message}</div>`);
            setLoading(false);
        }
    };

    return (
        <main className="container py-5 mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="p-4 rounded-3" style={{ backgroundColor: 'var(--card-bg)' }}>
                        <h2 className="section-title mb-4 text-center">Iniciar Sesión</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="correo" 
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required 
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                                {loading ? 'Ingresando...' : 'Ingresar'}
                            </button>
                        </form>
                        <div id="divError" className="mt-3" dangerouslySetInnerHTML={{ __html: error }} />
                        <p className="text-center mt-3 text-white-50">
                            ¿No tienes una cuenta? <Link to="/registro" className="footer-link">Regístrate</Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;