import { useState } from "react";
import AlertContext from "./alertContext";

const AlertState = (props) => {

    const [alert, setalert] = useState(null);

    const showalert = (message, type) => {
      setalert({
        msg: message,
        type: type
      });
      setTimeout(()=>{
        setalert(null)
      },2300);
    };
  return (
    <AlertContext.Provider value={{ showalert,alert}}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState;