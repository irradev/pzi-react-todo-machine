import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlertStorage({ show, toggleShow }) {
   return show ? (
      <div>
         <p>Hubo cambios en otra pestaña</p>
         <button onClick={toggleShow}>Volver a cargar la información</button>
      </div>
   ) : null;
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlertStorage);

export { ChangeAlertWithStorageListener };
