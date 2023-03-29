import './ChangeAlert.css'
import React from "react";
import { withStorageListener } from './withStorageListener';
import { SimpleSnackbar } from '../ChangeAlert/SimpleSnackbar';


function ChangeAlert({ show, toggleShow, }) {
    if (show) {
        return (
            <SimpleSnackbar toggleShow={toggleShow} />
        )
    } else {

    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export {
    ChangeAlertWithStorageListener
}