import React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import { ThemeProvider } from '@mui/material/styles';
import { CustomTheme } from "./CustomTheme";
import { Alert } from '@mui/material';



function SimpleSnackbar({ toggleShow }) {
    const [open, setOpen] = React.useState(true);
    const theme = CustomTheme();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        toggleShow(false);
        setOpen(false);
    };

    const action = (
        <>
            <Button color="primary" size="small" onClick={handleClose}>
                refresh
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <ReplayIcon fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <ThemeProvider theme={theme}>
            <Snackbar

                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                onClose={handleClose}
                action={action}
                sx={{ width: '100%' }}
            >
                <Alert severity='info' icon={false}>
                    Changes occurred
                    <Button color="secondary" size="small" onClick={handleClose}>
                        refresh
                    </Button>
                    <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <ReplayIcon fontSize="small" />
            </IconButton>
                </Alert>


            </Snackbar>
        </ThemeProvider>
    );
}

export {
    SimpleSnackbar
}