import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
function Perfil() {
    const { usuarioLogueado, updateProfile, deleteAccount } = useAuth();
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [editUsername, setEditUsername] = useState('');
    const [mensaje, setMensaje] = useState('');

    // Cargar datos del usuario en el formulario de edición cuando se monta
    useEffect(() => {
        if (usuarioLogueado) {
            setEditUsername(usuarioLogueado.username);
        }
    }, [usuarioLogueado]);


    if (!usuarioLogueado) {
        return <p>Cargando...</p>;
    }

    // Funciones de 'funciones.js' adaptadas
    const mostrarFormularioEdicion = () => setIsEditing(true);
    const ocultarFormularioEdicion = () => setIsEditing(false);

    const guardarCambios = (evento) => {
        evento.preventDefault();
        updateProfile(editUsername);
        setIsEditing(false);
        setMensaje('<div class="alert alert-success">¡Perfil actualizado!</div>');
        setTimeout(() => setMensaje(''), 3000); // Borra el mensaje después de 3 seg
    };

    const eliminarCuenta = () => {
        if (window.confirm('¿Seguro que quieres borrar tu cuenta? No podrás recuperarla.')) {
            deleteAccount();
            navigate('/registro'); // Redirige a registro tras borrar
        }
    };

    return (
        <main className="container py-5 mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h2 className="section-title mb-4">Mi Perfil</h2>
                    
                    {/* Vista de Perfil */}
                    <div id="vistaPerfil" className={`p-4 rounded-3 ${isEditing ? 'd-none' : ''}`} style={{ backgroundColor: 'var(--card-bg)' }}>
                        <p><strong>Usuario:</strong> <span id="view-username">{usuarioLogueado.username}</span></p>
                        <p><strong>Correo:</strong> <span id="view-correo">{usuarioLogueado.correo}</span></p>
                        <button onClick={mostrarFormularioEdicion} className="btn btn-secondary">Editar</button>
                        <button onClick={eliminarCuenta} className="btn btn-danger ms-2">Eliminar Cuenta</button>
                    </div>

                    {/* Edición de Perfil */}
                    <div id="edicionPerfil" className={`p-4 rounded-3 ${isEditing ? '' : 'd-none'}`} style={{ backgroundColor: 'var(--card-bg)' }}>
                        <h3>Editar Perfil</h3>
                        <form onSubmit={guardarCambios}>
                            <div className="mb-3">
                                <label htmlFor="edit-username" className="form-label">Usuario</label>
                                <input 
                                    type="text" 
                                    id="edit-username" 
                                    className="form-control" 
                                    value={editUsername}
                                    onChange={(e) => setEditUsername(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="edit-correo" className="form-label">Correo</label>
                                <input 
                                    type="email" 
                                    id="edit-correo" 
                                    className="form-control" 
                                    value={usuarioLogueado.correo} 
                                    disabled 
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                            <button type="button" onClick={ocultarFormularioEdicion} className="btn btn-secondary ms-2">Cancelar</button>
                        </form>
                    </div>

                    {/* Mensajes de feedback */}
                    <div id="divMensaje" className="mt-3" dangerouslySetInnerHTML={{ __html: mensaje }} />
                </div>
            </div>
        </main>
    );
}

export default Perfil;