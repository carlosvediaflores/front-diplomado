import React, {useEffect} from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const newsSchema = z.object({
    id: z.number().optional(),
    title: z.string().min(1, 'El título es requerido'),
    description: z.string().min(1, 'El contenido es requerido'),
});

type NewsForm = z.infer<typeof newsSchema>;

interface Props {
    open: boolean;
    onClose: () => void;
    news?: NewsForm | null;
    onSubmit: (data: NewsForm) => void;
}

const AddEditNewsDialog: React.FC<Props> = ({ open, onClose, news, onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewsForm>({
        resolver: zodResolver(newsSchema),
        defaultValues: news || { title: '', description: '' },
    });

    useEffect(() => {
        console.log(news)
    }, [news]);

    const onFormSubmit = (data: NewsForm) => {
        onSubmit(data);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{news ? 'Editar Noticia' : 'Agregar Noticia'}</DialogTitle>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <DialogContent>
                    <TextField
                        {...register('title')}
                        label="Título"
                        fullWidth
                        margin="normal"
                        error={!!errors.title}
                        helperText={errors.title?.message}
                    />
                    <TextField
                        {...register('description')}
                        label="Contenido"
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                        error={!!errors.description}
                        helperText={errors.description?.message}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancelar</Button>
                    <Button type="submit">{news ? 'Actualizar' : 'Agregar'}</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default AddEditNewsDialog;
