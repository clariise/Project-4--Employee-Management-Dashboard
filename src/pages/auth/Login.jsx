import {Link, useNavigate} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebaseConfig";
import {useState } from 'react';

function Login (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate ();

    const handleLogin =() => {

        if (email !== '' && password !== ''){
    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("Signed In");
        navigate("/");
        // ...
      })
      .catch((error) => {
        alert("error");
      });

    }else {
        alert("Missing Credentials");

    }}

    return (

     <div className= "container boarder p-5 rounded mt-5 shadow">
        <h1 className="fw-bold">Login</h1>
        <p>Please Login to your account.</p>

       
        <label htmlFor="email">Email</label>
        
        <input type="email" id="email" className= "form-control" 
        onChange={(e) => 
        setEmail(e.target.value)} value={email} />
        <br />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" className= "form-control" 
        onChange={(e) => 
        setPassword(e.target.value)} 
        value={password}/>

        <button className="btn btn-warning mt-3" onClick={()=> handleLogin()} >Login</button>
        <hr></hr>
        <Link to="/Register"> Don't have an account? Register here. </Link>

     </div>
     
    )
}

export default Login; 