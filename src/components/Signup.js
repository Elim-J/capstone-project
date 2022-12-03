import React from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Signup = () => {

    const createAccount = (e) => {
        e.preventDefault();
        console.log('sending req');
        const data = new FormData(e.currentTarget);
        const reqBody = {
            "username": data.get('username'),
            "password": data.get('password'),
        };
        console.log(JSON.stringify(reqBody));
    
        fetch("/api/auth/signup", {
            headers: {
                "content-type": "application/json",
            },
            method: "post",
            body: JSON.stringify(reqBody)
        }).then(res => {
            if (res.status === 200){
                return res.json();
            } else {
                return Promise.reject("Username already taken");
            }
        }).then(data => {
            console.log(data);
            window.location.href = '/login';
        })
        .catch((msg) => alert(msg));
    };
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box component="form" onSubmit={createAccount} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );

    // return(
    //     <div>
    //         <Button onClick={createAccount}>Create account</Button>
    //     </div>
    // );
};

export default Signup;