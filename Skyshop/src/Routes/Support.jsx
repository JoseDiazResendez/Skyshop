import { Link } from 'react-router-dom';
import React from 'react';

export function Support() {
    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <main>
            <div className='text'>
                <h3>Para contactarnos puedes rellenar los datos o da clic <a href='mailto:soporteclienteskyshop@gmail.com' rel='noreferrer' target='_blank'>aquí</a></h3>
            </div>
            <div style={{ display: 'grid', justifyContent: 'center' }}>
                <h3><input className='container2' placeholder='Nombre' /></h3>
                <h3><input className='container2' placeholder='Apellido' /></h3>
                <h3><textarea className='container2' placeholder="Describe tu comentario" style={{ height: 300 }} /></h3>
                <button className='boton buttonText' onClick={refreshPage}>Enviar</button>
            </div>
        </main>
    )
}