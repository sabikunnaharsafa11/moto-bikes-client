import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import Pay from '../Pay/Pay';
import Orders from '../Orders/Orders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';


import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import Review from '../Review/Review';
import ManageProduct from '../ManageProduct/ManageProduct';



const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const{admin} = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to="/explore"><Button color="inherit">Explore</Button></Link>
      <br />
     <Link to={`${url}/orders`}><Button color="inherit">My Orders</Button></Link>
     <br />
     <Link to={`${url}/pay`}><Button color="inherit">Pay</Button></Link>
     <br />
     <Link to={`${url}/review`}><Button color="inherit">Add Review</Button></Link>
     <br />
     {admin && <Box>

         <Link to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></Link>
       
         <Link to={`${url}/manageAllOrders`}><Button color="inherit">Manage All Orders</Button></Link>
      
        <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
       
        <Link to={`${url}/manageProduct`}><Button color="inherit">Manage Product</Button></Link>
        </Box>
         }  
         
      <Divider />
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        

        <Switch>
                <Route exact path={path}>
                <DashboardHome></DashboardHome>
                 </Route>  

                <Route path={`${path}/pay`}>
                 <Pay></Pay>
                </Route>
                <Route path={`${path}/orders`}>
                <Orders></Orders>
                </Route>
                <Route path={`${path}/review`}>
                <Review></Review>
                </Route>
                <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
                </AdminRoute>
                <AdminRoute path={`${path}/manageAllOrders`}>
                <ManageAllOrders></ManageAllOrders>
                </AdminRoute>
                <AdminRoute path={`${path}/manageProduct`}>
                <ManageProduct></ManageProduct>
                </AdminRoute>

                </Switch>
        
      </Box>
    </Box>
  );
}
  


export default Dashboard;
