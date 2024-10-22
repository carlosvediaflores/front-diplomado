
'use client'

import React, { useEffect, useState } from 'react';
import { Container, Typography, Button,Card, CardContent } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';


const API_URL = process.env.NEXT_PUBLIC_API_URL;
interface Products {
  id: number;
  name: string;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/products`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error al cargar Productos:', error);
    }
  };
  return (
    <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
     
      <Typography variant="h2" component="h1" gutterBottom>
                Lista de Productos
            </Typography>
           <Grid container spacing={4}>
           {products.map((item) => (
                    <Grid
                        size={{xs: 12, sm: 6, md: 4}}
                        key={item.id}>
                        <Card>
                            <Image
                                src={`https://picsum.photos/id/${item.id}/500/300`}
                                alt={item.name}
                                width={500}
                                height={300}
                                layout="responsive"
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.name.substring(0, 100)}...
                                </Typography>
                                <Link href={`/products/${item.id}`} passHref legacyBehavior>
                                    <Button variant="contained" color="primary" sx={{mt: 2}}>
                                        Leer más
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
       </Grid>

    </Container>
  );
};

export default Dashboard; 