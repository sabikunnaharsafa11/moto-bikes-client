import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from "@mui/material/Typography";
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
     
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography sx={{ fontWeight: 500, m: 2, textAlign:'center', color: 'info.main' }} variant="h6" component="div">
               OUR SERVICES
           </Typography>
           <Typography sx={{ fontWeight: 600, m: 2, textAlign:'center'}} variant="h4" component="div">
              Services We Provide
           </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
           products.slice(0,6).map(product =><Product
                 key={product.name}
                 product={product}
            ></Product>)
        }
       </Grid>
        </Container>
     </Box>
    
            
        
    );
};

export default Products;