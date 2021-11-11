import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bannerimg from '../../../images/images (1).jpg'
// import bg from '../../../images/baae29f89c1dfb4fd09fa48ba5b23f1ba.jpg'
import { Button, Typography, Container } from '@mui/material';

// const bannerBg = {
//     background:`url(${bg})`,
//     height: 500
// }

const verticalCenter ={
    display:'flex',
    alignItems: 'center',
    height: 450
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item style={{ ...verticalCenter, textAlign: 'left'}} xs={12} md={5}>
            <Box>
            <Typography variant="h3">
              Your New 
            </Typography>
            <Typography variant="h6" sx={{fontSize:14, fontWeight:300, color:'gray'}}>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad voluptates reiciendis nemo ipsa, minus molestias totam labore eum blanditiis ullam?
            </Typography>
            <Button variant="contained" >Buy Now</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} style={verticalCenter}>
          <img style={{width: '450px'}} src={bannerimg} alt="" />
          </Grid>
         
        </Grid>
      </Container>
    );
};

export default Banner;