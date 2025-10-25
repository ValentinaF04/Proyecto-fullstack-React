import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Registro() {
    const [username, setUsername] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { register } = useAuth();

    const handleSubmit = (evento) => {
        evento.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('<div class="alert alert-danger">Las contraseñas no coinciden.</div>');
            return;
        }

        setLoading(true);
        const resultado = register(username, correo, password);

        if (resultado.success) {
            setError('<div class="alert alert-success">¡Registro exitoso! Redireccionando...</div>');
            setTimeout(() => {
                navigate('/login');
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
                        <h2 className="section-title mb-4 text-center">Crear Cuenta</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Nombre de Usuario</label>
                                <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirm-password" className="form-label">Confirmar Contraseña</label>
                                <input type="password" className="form-control" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                                {loading ? 'Registrando...' : 'Registrarse'}
                            </button>
                        </form>
                        <div id="divError" className="mt-3" dangerouslySetInnerHTML={{ __html: error }} />
                        <p className="text-center mt-3 text-white-50">
                            ¿Ya tienes una cuenta? <Link to="/login" className="footer-link">Inicia Sesión</Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Registro;