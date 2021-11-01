import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import useFirebase from '../Hooks/FirebaseHook';
import { useLocation, useHistory } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
    const { signInUsingGoogle } = useFirebase();
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            }).catch(error => {
                setError(error.messege)
            })
    }
    return (
        <div className="p-4">
            <div className=" google-signIn mx-auto border rounded p-4">
                <img className="img-fluid" src="https://i.ibb.co/XtXJkVY/google-1762248-1280.png" alt="" />
                <div className="google-txt mx-auto">
                    <h3 className="">Please Sign In With Your Google Account</h3>
                    <Button onClick={handleGoogleLogin} className="btn btn-danger my-2" type="submit">
                        Google Sign In
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;