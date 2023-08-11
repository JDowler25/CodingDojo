import React , {useState} from "react";
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("anonymous");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmpassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
                {(firstname.length < 3 && firstname.length > 0)  &&  <p>first name must 3 characters</p> }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
                {(lastname.length < 3 && lastname.length > 0)  &&  <p>first name must 3 characters</p> }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                {(email.length < 3 && email.length > 0)  &&  <p>first name must 3 characters</p> }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                {(password.length < 8 && password.length > 0)  &&  <p>first name must 8 characters</p> }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmpassword(e.target.value) } />
                {(confirmpassword != password)  &&  <p>Passwords must match!</p> }
            </div>
            {/* <input type="submit" value="Create User" /> */}
        </form>
    );
};
    
export default UserForm;
