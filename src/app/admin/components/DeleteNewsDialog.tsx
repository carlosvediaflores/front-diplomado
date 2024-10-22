import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface Props {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const DeleteNewsDialog: React.FC<Props> = ({ open, onClose, onConfirm }) => {
    const handleDelete = () => {
        onConfirm();
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Confirmar Eliminación</DialogTitle>
            <DialogContent>
                ¿Estás seguro de que quieres eliminar esta noticia?
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={handleDelete} color="error">Eliminar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteNewsDialog;
