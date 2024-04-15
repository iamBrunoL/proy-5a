import React, { Modal } from 'react-responsive-modal';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ModalActions = ({open,onCloseModal,getEmployees,edit,employee}) => {
  const initialState={
    nombres:"",
    fecha:"",
    alergias:"",
    servicio1:"Baño",
    servicio2:"Uñas",
    servicio3:"Limpieza oidos",
    servicio4:"Corte pelo",
    raza:"Chihuahua",
    telefono:"",
    edad:"",
    genero:"Macho",
    pago_realizado:""
  };
  const [dataEmployee,setDataEmployee]= useState(initialState);
  const servicios1 = ["Baño", "Uñas", "Limpieza oidos", "Corte pelo", "Cepillado dental"];
  const servicios2 = ["Uñas", "Baño", "Limpieza oidos", "Corte pelo", "Cepillado dental"];
  const servicios3 = ["Limpieza oidos", "Baño", "Uñas",  "Corte pelo", "Cepillado dental"];
  const servicios4 = ["Corte pelo", "Baño", "Uñas", "Limpieza oidos",  "Cepillado dental"];
  const razas = ["Chihuahua", "Bull Dog", "Labrador", "Pug", "Dalmata", "Doberman"];
  const generos = ["Macho", "Hembra"];

  useEffect(() => {
    edit ? setDataEmployee(employee) : setDataEmployee(initialState);
    //eslint-disable-next-line
  }, [edit, employee]);


  const handleChange=(e)=>{
    setDataEmployee({...dataEmployee,[e.target.name]:e.target.value});
  }

  const saveEmployee= async(e)=>{
    try {
      //e.preventDefault();
      const { data } = await axios.post("/employee",dataEmployee);
      Swal.fire({
        icon: 'success',
        title: data.message,
        showConfirmButton: false,
        timer: 1500
      });
      onCloseModal();
      getEmployees();
    } catch (error) {
      if(!error.response.data.ok){
        return Swal.fire({
           icon: 'error',
           title: error.response.data.message,
           showConfirmButton: false,
           timer: 1500
         });
       }
       console.log('error en la función saveEmployee',error.message);
    }
  };
  const updateEmployee= async(e)=>{
    try {
      //e.preventDefault();
      const { data } = await axios.put(`/employee/update/${employee._id}`,dataEmployee);
      Swal.fire({
        icon: 'success',
        title: data.message,
        showConfirmButton: false,
        timer: 1500
      });
      onCloseModal();
      getEmployees();
    } catch (error) {
      if(!error.response.data.ok){
        return Swal.fire({
           icon: 'error',
           title: error.response.data.message,
           showConfirmButton: false,
           timer: 1500
         });
       }
       console.log('error en la función updateEmployee',error.message);
    }
  };

  const actions=(e)=>{
    e.preventDefault(e)
    edit ? updateEmployee() : saveEmployee()
  }

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className='card'>
          <div className='card-header'>
            <h5>{edit ? 'Modificar servicio' : 'Agregar servicio'}</h5>
          </div>{/*card-header*/}
          <div className='card-body'>
            <form onSubmit={actions}>
              <div className='mb-3'>
                <label className='form-label'>Nombre mascota:</label>
                <input type="text" className='form-control'
                  name="nombres" required autoFocus
                  onChange={(e)=>handleChange(e)}
                  value={dataEmployee.nombres}
                />
              </div>{/*mb-3*/}
              <div className='mb-3'>
                <label className='form-label'>Fecha:</label>
                <input type="text" className='form-control' name="fecha" 
                  required onChange={(e)=>handleChange(e)}
                  value={dataEmployee.fecha}
                />
              </div>{/*mb-3*/}
              <div className='mb-3'>
                <label className='form-label'>Alergias:</label>
                <input type="text" className='form-control' name="alergias" 
                  required onChange={(e)=>handleChange(e)}
                  value={dataEmployee.alergias}
                />
              </div>{/*mb-3*/}

              <div className='mb-3'>
                <label className='form-label'>Servicio 1:</label>
                <select name="servicio1" className='form-select'
                onChange={(e)=>handleChange(e)}
                value={dataEmployee.servicio1}>
                  {
                    servicios1.map((item)=>(
                      <option key={item}>{item}</option>
                    ))
                  }
                </select>
              </div>{/*mb-3*/}
              <div className='mb-3'>
                <label className='form-label'>Servicio 2:</label>
                <select name="servicio2" className='form-select'
                onChange={(e)=>handleChange(e)}
                value={dataEmployee.servicio2}>
                  {
                    servicios2.map((item)=>(
                      <option key={item}>{item}</option>
                    ))
                  }
                </select>
              </div>{/*mb-3*/}
              <div className='mb-3'>
                <label className='form-label'>Servicio 3:</label>
                <select name="servicio3" className='form-select'
                onChange={(e)=>handleChange(e)}
                value={dataEmployee.servicio3}>
                  {
                    servicios3.map((item)=>(
                      <option key={item}>{item}</option>
                    ))
                  }
                </select>
              </div>{/*mb-3*/}
              <div className='mb-3'>
                <label className='form-label'>Servicio 4:</label>
                <select name="servicio4" className='form-select'
                onChange={(e)=>handleChange(e)}
                value={dataEmployee.servicio4}>
                  {
                    servicios4.map((item)=>(
                      <option key={item}>{item}</option>
                    ))
                  }
                </select>
              </div>{/*mb-3*/}

              <div className='mb-3'>
                <label className='form-label'>Raza mascota</label>
                <select name="raza" className='form-select'
                onChange={(e)=>handleChange(e)}
                value={dataEmployee.raza}>
                  {
                    razas.map((item)=>(
                      <option key={item}>{item}</option>
                    ))
                  }
                </select>
              </div>{/*mb-3*/}
              <div className='mb-3'>
                <label className='form-label'>Telefono del propietario:</label>
                <input type="text" className='form-control' name="telefono" 
                  required onChange={(e)=>handleChange(e)}
                  value={dataEmployee.telefono}
                />
              </div>{/*mb-3*/}
              <div className='mb-3'>
                <label className='form-label'>Edad mascota:</label>
                <input type="text" className='form-control' name="edad" 
                  required onChange={(e)=>handleChange(e)}
                  value={dataEmployee.edad}
                />
              </div>{/*mb-3*/}
              <div className='mb-3'>
                <label className='form-label'>Genero mascota</label>
                <select name="genero" className='form-select'
                onChange={(e)=>handleChange(e)}
                value={dataEmployee.genero}>
                  {
                    generos.map((item)=>(
                      <option key={item}>{item}</option>
                    ))
                  }
                </select>
              </div>{/*mb-3*/}
              <div className='mb-3'>
                <label className='form-label'>Pago realizado:</label>
                <input type="text" className='form-control' name="pago_realizado" 
                  required onChange={(e)=>handleChange(e)}
                  value={dataEmployee.pago_realizado}
                />
              </div>{/*mb-3*/}

              <div className='mb-3'>
                <button type="submit" className='btn btn-primary form-control'>
                  {edit ? 'Actualizar':'Guardar'}
                </button>
              </div>{/*mb-3*/}
            </form>
          </div>{/*card-body */}
        </div>{/*card*/}
      </Modal>

    </div>
  )
}

export default ModalActions