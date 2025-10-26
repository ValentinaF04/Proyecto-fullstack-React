import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [usuarioLogueado, setUsuarioLogueado] = useState(null);

    useEffect(() => {
        const usuarioGuardado = sessionStorage.getItem('usuarioLogueado');
        if (usuarioGuardado) {
            setUsuarioLogueado(JSON.parse(usuarioGuardado));
        }
    }, []);

    const login = (correo, password) => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioEncontrado = usuarios.find(u => u.correo === correo && u.password === password);

        if (usuarioEncontrado) {
            sessionStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado));
            setUsuarioLogueado(usuarioEncontrado);
            return { success: true, usuario: usuarioEncontrado };
        } else {
            return { success: false, message: 'Correo o contraseña incorrectos.' };
        }
    };

    const register = (username, correo, password) => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        
        if (usuarios.some(u => u.correo === correo)) {
            return { success: false, message: 'Ese correo ya está registrado.' };
        }

        const nuevoUsuario = { id: Date.now(), username, correo, password };
        usuarios.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        
        return { success: true };
    };
    const logout = () => {
        sessionStorage.removeItem('usuarioLogueado');
        setUsuarioLogueado(null);
    };

    const updateProfile = (nuevoUsername) => {
        if (!usuarioLogueado) return;

        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
        const usuariosActualizados = usuarios.map(u => 
            u.id === usuarioLogueado.id ? { ...u, username: nuevoUsername } : u
        );
        localStorage.setItem('usuarios', JSON.stringify(usuariosActualizados));

        const usuarioActualizado = { ...usuarioLogueado, username: nuevoUsername };
        sessionStorage.setItem('usuarioLogueado', JSON.stringify(usuarioActualizado));
        setUsuarioLogueado(usuarioActualizado);
    };

    const deleteAccount = () => {
        if (!usuarioLogueado) return;


        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
        const usuariosRestantes = usuarios.filter(u => u.id !== usuarioLogueado.id);
        localStorage.setItem('usuarios', JSON.stringify(usuariosRestantes));


        logout();
    };


    const value = {
        usuarioLogueado,
        login,
        register,
        logout,
        updateProfile,
        deleteAccount
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};