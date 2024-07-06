import React, { useState } from 'react';
import logoBlack from '../assets/logo_black.png';
import '../styles/Login.css';
import AdminForm from './AdminForm';

const Login = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const User = "utsav";
    const Password = "utsav";

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const username = e.target.username.value;
    //     const password = e.target.password.value;
    //     if (username === User && password === Password) {
    //         setIsAuthenticated(true); 
    //     } else {
    //         alert("Invalid credentials");
    //     }
    //     e.target.username.value = "";
    //     e.target.password.value = "";
    // };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
    
        try {
            const response = await fetch('http://localhost:5000/api/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
    
            if (response.ok) {
                // const { token } = await response.json();
                // sessionStorage.setItem('authToken', token);
                setIsAuthenticated(true);
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.error('Authentication error:', error);
            alert("An error occurred during authentication.");
        }
    
        e.target.username.value = "";
        e.target.password.value = "";
    };
    if (isAuthenticated) {
        return <AdminForm />;
    }

    return (
        <>
            <div id="out" className='mt-5 container' style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div id="container1">
                    <form id='form' onSubmit={handleSubmit}>
                        <div id="image">
                            <img src={logoBlack} alt="" />
                        </div>
                        <center>
                            <h2 id='h2'>Admin Login</h2>
                        </center>
                        <input type="text" name="username" id="username" placeholder="Username" />
                        <input name="password" type='password' id="password" placeholder="Enter your password"></input>
                        <button id="login" type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
