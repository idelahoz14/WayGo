import React from "react";

const Registrate = () => {
return(
  <>
  <div className="wrapper">
        <div className="title-container">
          <h2 className='title-1'>Registrate</h2>
          <p className='subtitle-1'>Registrate</p>
        </div>
        <div className='form'>
          <form action="">
            <div className='input-container'>
              <label htmlFor="">Nombre</label>
              <input type="text" name='u-name' required />
            </div>
            <div className='input-container'>
              <label htmlFor="">Apellido</label>
              <input type="text" name='u-password' required />
            </div>
            <div className='input-container'>
              <label htmlFor="">Correo</label>
              <input type="text" name='u-password' required />
            </div>
            <div className='input-container'>
              <label htmlFor="">Password</label>
              <input type="text" name='u-password' required />
            </div>
            <div className='button-container'>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
  </>
)
}

export default Registrate;