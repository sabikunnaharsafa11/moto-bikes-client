import React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  const { _id, title, price, description, img} = product;
  
    return (      
    
     <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275 }}>
      <CardMedia
        component="img"
       style={{width:'auto', height: '200px', margin: '0 auto' }}
        image={img}
        alt="green iguana"
      />
        <CardContent>
          <Typography sx={{ fontWeight: 600}} variant="h5" component="div">
          { title}
          </Typography>
          <Typography sx={{ fontWeight: 600, color:'red'}} variant="h6" component="div">
          ${ price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
        <Button  variant="contained" type="submit" size="small"> <Link style={{textDecoration: 'none', color:'white' }} to={`/purchase/${_id}`}> Buy Now</Link></Button>
       </CardActions>
      </Card>
    </Grid>

 
 

    );
};

export default Product;