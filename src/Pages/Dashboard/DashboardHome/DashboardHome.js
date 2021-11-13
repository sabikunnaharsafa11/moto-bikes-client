import { Typography } from '@mui/material';
import React from 'react';

const DashboardHome = () => {
    return (
        <div>
            <Typography sx={{ fontWeight: 600, m: 2, textAlign:'center'}} variant="h4" component="div">
            Welcome to Dashboard
           </Typography>
        </div>
    );
};

export default DashboardHome;