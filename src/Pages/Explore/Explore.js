import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from "@mui/material/Typography";
import Product from '../Home/Product/Product';
import Navigation from '../Navigation/Navigation';


const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://serene-beyond-53028.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        
           <Typography sx={{ fontWeight: 600, m: 5, textAlign:'center'}} variant="h4" component="div">
             ALL PRODUCTS
           </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
           products.map(product =><Product
                 key={product.name}
                 product={product}
            ></Product>)
        }
       </Grid>
        </Container>
     </Box>
    );
};

export default Explore;