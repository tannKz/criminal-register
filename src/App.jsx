import { useState } from 'react';
import './App.css';

import huella from './huella.webp';
import logo from './LSPD_POSITIVO_LIMPIO.png';

function App() {
  const [imgur, setImgur] = useState(''); 
  const [nombre, setNombre] = useState(''); 
  const [estatura, setEstatura] = useState(''); 
  const [peso, setPeso] = useState(''); 
  const [ojos, setOjos] = useState(''); 
  const [etnia, setEtnia] = useState(''); 
  const [nacimiento, setNacimiento] = useState(''); 
  const [address, setAddress] = useState(''); 
  
  return (
    <div className="App">
          <div className="center">
        <img src={logo} width={100} />
      </div>
      <div className="box-arrest">
        <div className="left">
          <img src={imgur} alt="" />
        </div>
        <div className="huella" style={{
          position: 'absolute',
          marginLeft: '60px', 
          transform: 'rotate(-30deg)', 
          zIndex: 10, 
          opacity: 0.5
        }}>
          <img src={huella} width={150} />
        </div>
        <div className="right">
          <div className="box-info">
            <div className="input" style={{ borderBottom: '1px solid white'}}>Nombre de pila (documento): {nombre}</div>
            <div className="input" style={{ borderBottom: '1px solid white'}}>Estatura (en cm): {estatura}</div>
            <div className="input" style={{ borderBottom: '1px solid white'}}>Peso (en cm): {peso}</div>
            <div className="input" style={{ borderBottom: '1px solid white'}}>Ojos: {ojos}</div>
            <div className="input" style={{ borderBottom: '1px solid white'}}>Etnia: {etnia}</div>
            <div className="input" style={{ borderBottom: '1px solid white'}}>Fecha de nacimiento: {nacimiento}</div>
            <div className="input">Dirección: {address}</div>
          </div>
        </div>
      </div>

      <div className="box-form">
        <div className="left-form">
          <input type="text" placeholder='LINK IMGUR' onChange={(e) => setImgur(e.target.value)}/>
          <input type="text" placeholder='Ejemplo: Doug Dyer (329472)' onChange={(e) => setNombre(e.target.value)} />
          <input type="text" placeholder='Ejemplo: 180' onChange={(e) => setEstatura(e.target.value)} />
          <input type="text" placeholder='Ejemplo: 80' onChange={(e) => setPeso(e.target.value)} />
          <input type="text" placeholder='Ejemplo: Marrones' onChange={(e) => setOjos(e.target.value)} />
          <input type="text" placeholder='Ejemplo: Caucásico' onChange={(e) => setEtnia(e.target.value)} />
          <input type="text" placeholder='Ejemplo: 10/2/1999' onChange={(e) => setNacimiento(e.target.value)} />
          <input type="text" placeholder='Ejemplo: Idlewood SN' onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="right-form">
          
          <p>Esta web le permitirá crear la ficha de un criminal sin antecedentes. Debe seguir los siguientes pasos:
            <ol>
              <li>Rolear que toma los datos (nombre, peso, ojos, etnia y fecha de nacimiento, además del documento)</li>
              <li>Tomar una foto del detenido y subirla a IMGUR, posteriormente pegar la imagen en el primer campo.</li>
              <li>Una vez rellenado todo, tome una captura de la pantalla y enviela al canal correspondiente de discord.</li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
