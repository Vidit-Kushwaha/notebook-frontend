import React, { useContext } from 'react'
import AlertContext from '../contexts/notes/alertContext';

function Alert() {
  const context=useContext(AlertContext)
  const {alert}=context;

  const capital=(word)=>{
    let lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }

  return (
    <div style={{height:'50px'}}>
   {alert &&
    <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
     <strong>{capital(alert.type)}</strong> : {alert.msg}
   
  </div>
}
  </div>
  )
}

export default Alert