import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithRedirect } from '@firebase/auth'
import {auth} from './firebase'

const Login = () => {
    function SignInWithGoogle(){
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }
    function SignInWithFacebook(){
        const provider = new FacebookAuthProvider()
        signInWithRedirect(auth, provider)
    }
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to MixChat!</h2>
                <div className="login-button google" onClick={SignInWithGoogle}>
                    <GoogleOutlined></GoogleOutlined>Sign In With Google
                </div>
                <br /> <br />
                <div className="login-button facebook" onClick={SignInWithFacebook}>
                    <FacebookOutlined></FacebookOutlined>Sign In With Facebook
                </div>
            </div>
        </div>
    )
}

export default Login;