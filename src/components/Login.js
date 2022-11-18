import React, { useEffect, useState } from "react";
import { useLocalState } from "../util/useLocalStorage";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Login = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");

    const sendLoginRequest = (e) => {
        e.preventDefault();
        console.log('sending req');
        const data = new FormData(e.currentTarget);
        const reqBody = {
            "username": data.get('email'),
            "password": data.get('password'),
        };
        console.log(JSON.stringify(reqBody));
    
        //default fetch is get
        fetch('api/auth/login', 
        {
            headers: {
                "content-type": "application/json"
            },
            method: "post",
            body: JSON.stringify(reqBody)
        }).then(response => {
            if(response.status === 200)
                return Promise.all([response.json(), response.headers])
            else
                return Promise.reject("Invalid login attempt");
        })
        .then(([body, headers]) => {
            setJwt(headers.get("authorization")); //JWT
            console.log('jwt acquired');
            window.location.href = '/';
        }).catch((msg) => alert(msg));
    };

    const theme = createTheme();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
  };

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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={sendLoginRequest} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;