import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        alert('Admin add');
        const user = {email};
        fetch('https://serene-beyond-53028.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
          
            </form>
        </div>
    );
};

export default MakeAdmin;