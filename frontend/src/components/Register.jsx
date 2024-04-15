import React, { useState } from 'react';
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
export const Register = () => {
    const navigate = useNavigate();
    const { registerUser } = useUser();
    const [dataUser, setDataUser] = useState({ correo: '', password: '', nombre: '', nivel: '' });
    const handleChange = (e) => {
        setDataUser({ ...dataUser, [e.target.name]: e.target.value })
    }
    const register = (e) => {
        e.preventDefault();
        registerUser(dataUser, navigate);
    }

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-6 mx-auto'>
                    <div className='card'>
                        <div className='container text-center'>
                            <i className='fas fa-user fa-5x'></i>
                        </div>

                        <div className='card-header text-center-plus mt-3'>
                            <h4>Crear perfil</h4>
                        </div>{/* card-header text-center mt-3 */}

                        <div className='card-body'>

                            <form onSubmit={register}>
                                <div className='mb-3'>
                                    <label className='form-label'>Nombre de usuario:</label>
                                    <input type="texto" name="nombre" className='form-control' autoFocus required onChange={(e) => handleChange(e)} />
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label'>Correo:</label>
                                    <input type="email" name="correo" className='form-control' required onChange={(e) => handleChange(e)} />
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label'>Contraseña:</label>
                                    <input type="password" name="password" className='form-control' required onChange={(e) => handleChange(e)} />
                                </div>{/* mb-3 */}


                                <div className='mb-3'>
                                    <label className='form-label'>Nombre(s):</label>
                                    <input type="texto" name="nombreU" className='form-control' autoFocus required onChange={(e) => handleChange(e)} />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Apellido(s)</label>
                                    <input type="texto" name="apellidos" className='form-control' autoFocus required onChange={(e) => handleChange(e)} />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Nivel:</label>
                                    <input type="texto" name="nivel" className='form-control' autoFocus required onChange={(e) => handleChange(e)} />
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label'>Edad:</label>
                                    <input type="texto" name="edad" className='form-control' autoFocus required onChange={(e) => handleChange(e)} />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Genero:</label>
                                    <input type="texto" name="genero" className='form-control' autoFocus required onChange={(e) => handleChange(e)} />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Domicilio:</label>
                                    <input type="texto" name="domicilio" className='form-control' autoFocus required onChange={(e) => handleChange(e)} />
                                </div>

                                <button type="submit" className='form-control btn btn-primary'>REGISTRAR</button>

                            </form>

                        </div>{/* card-body */}

                    </div>{/* card */}

                </div>{/* col-md-6 mx-auto */}

            </div>{/* row */}

        </div>//container mt-4
    )
}