import React, {useState} from 'react'
import './CSS/LoginSignup.css'

 const LoginSignup = () => {

 const [state,setState] = useState("Login");
 // state is a state variable that is initialized with the value "Login"
 //This variable likely indicates whether the component is currently in login mode or signup mode.
 //setState is the function used to update this state. It can be called later to switch between "Login" and "Signup" modes.

 const[formData, setFormData] = useState({
  username:"",
  password:"",
  email:""

 })

 const changeHandler = (e)=>{
  // a function named changeHandler that takes an event object e as an argument
  // This function will be called whenever an input field's value change
  setFormData({...formData, [e.target.name]:e.target.value})
  //e.target.name the field name being changed
  //e.target.value this gets the current value of the input field that triggered the change event.
  //store all the changes into the formData object
  //setFormData will update the formData object

 }


 const login = async() =>{
  //an asynchronous login function designed to handle user login by sending a request to a backend server
  console.log("Login Function Executed", formData);//This line logs a message and the current state of formData to the console for debugging purposes. 
  let responseData;//A variable named responseData is declared to store the response data from the server after the login request is completed.
  await fetch('http://localhost:4000/login',{ //fetch is used to send a POST request to the login endpoint at http://localhost:4000/login.
    method: 'POST', //The method property specifies that this is a POST request.
    headers:{ // header object
      Accept:'application/form-data', // Indicates the type of data the client expects back from the server
      'Content-Type':'application/json', //Indicates that the data being sent in the request body is in JSON format.
    },
    body: JSON.stringify(formData), //Converts the formData object into a JSON string to send it in the request body.

  }).then((response)=>response.json()).then((data)=>responseData=data) //The first .then() converts the response from the server into JSON format.
  //The second .then() assigns the parsed data to responseData.
  if(responseData.success){ //If responseData.success is true, it means the login was successful
    localStorage.setItem('auth-token', responseData.token); //Stores the returned authentication token in the browser's local storage for future requests
    window.location.replace("/"); //Redirects the user to the home page (or another specified route).
  }
  else{
    alert(responseData.errors) //If the login fails (i.e., responseData.success is false), it displays an alert with the error message returned from the server.
  }

 }

 const signup = async() =>{
  console.log("Signup Function Executed", formData);
  let responseData;
  await fetch('http://localhost:4000/signup',{
    method: 'POST',
    headers:{
      Accept:'application/form-data',
      'Content-Type':'application/json',
    },
    body: JSON.stringify(formData),

  }).then((response)=>response.json()).then((data)=>responseData=data)
  if(responseData.success){
    localStorage.setItem('auth-token', responseData.token);
    window.location.replace("/");
  }
  else{
    alert(responseData.errors)
  }
 }



  return (
    <div className = 'loginsignup'>

    <div className="loginsignup-container">
    <h1>{state}</h1>
    <div className ="loginsignup-fields">
    {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type = "text" placeholder ='Your Name'/>:<></>}
    <input name='email' value={formData.email} onChange={changeHandler} type = "email" placeholder ='Email Adress'/>
    <input name='password' value={formData.password}  onChange={changeHandler}  type = "password"  placeholder = 'Password' />
    </div>
    <button onClick={()=>{state==="Login"?login():signup()}} >Continue</button>
    {state==="Sign Up"
    ?<p className="loginsignup-login">Already have an account?<span onClick={()=>{setState("Login")}}> Login here</span></p>
    :<p className="loginsignup-login">Create an account?<span onClick ={()=>{setState("Sign Up")}}> Click here</span></p>}
    
    
   
    </div>      
    </div>
  )
}

export default LoginSignup
