import './ChangeAlert.css'
import React from "react";
import { withStorageListener } from './withStorageListener';

function ChangeAlert({show,toggleShow,}) {
    if (show) {
        return(
            <div className='ChangeAlert'>
                <p>Changes occurred</p> 
                <button onClick={()=>toggleShow(false)}>Reload info</button>
            </div>
        )
    }else{
        
    }
}

const ChangeAlertWithStorageListener=withStorageListener(ChangeAlert);

export{
    ChangeAlertWithStorageListener
}