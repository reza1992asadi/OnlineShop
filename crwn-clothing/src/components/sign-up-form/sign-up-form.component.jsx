import {useState} from 'react'; 
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = { 
    displayname: '', 
    email:'', 
    password:'', 
    confirmPassword:''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields); 
    const {displayName, email, password, confirmPassword} = formFields; 

    console.log(formFields); 

    const handleSubmit = async (event) => {
        event.preventDefault();  

        if (password !== confirmPassword){
            alert("passwords do not match"); 
            return;
        }
        try {
            const response = createAuthUserWithEmailAndPassword(email, password);
            console.log(response);
        }catch(error){
            console.log('user creation encoutnered an error', error); 
        }
    }
    
    const handleChange = (event) => {
        const {name, value} = event.target; 
        setFormFields({...formFields, [name]: value});
    }; 

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label="Display Name"
                type='text'
                required
                onChange={handleChange}
                name='displayName'
                value={displayName}
                />
                <FormInput 
                 label="Email"
                 type='email'
                 required
                 onChange={handleChange}
                 name='email'
                 value={email} 
                />
                <FormInput 
                 label="Password"
                 type='password'
                 required
                 onChange={handleChange}
                 name='password'
                 value={password} 
                />
                <FormInput
                 label="Confirmpassword"
                 type='password'
                 required
                 onChange={handleChange}
                 name='confirmPassword'
                 value={confirmPassword}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm; 