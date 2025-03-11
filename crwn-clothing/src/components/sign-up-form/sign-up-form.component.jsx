import {useState} from 'react'; 
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss' ; 
import Button from '../button/button.component'; 
import { signup } from '../../utils/collab.utils';

const defaultFormFields = { 
    firstname: '',
    lastname: '', 
    displayName: '', 
    email:'', 
    password:'', 
    confirmPassword:''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields); 
    const {firstname, lastname, displayName, email, password, confirmPassword} = formFields; 

    const resetFormfields = () => {
        setFormFields(defaultFormFields); 
    }

    const handleSubmit = async (event) => {
        event.preventDefault();  

        if (password !== confirmPassword){
            alert("passwords do not match"); 
            return;
        }
        try {
                const result = await signup(firstname, lastname, displayName, email, password);
                console.log("sign up success:", result);
              } catch (error) {
                console.error("sign up failed:", error.message);}
            resetFormfields(); 
    }
    
    const handleChange = (event) => {
        const {name, value} = event.target; 
        setFormFields({...formFields, [name]: value});
    }; 

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label="First Name"
                type="text"
                required
                onChange={handleChange}
                name='firstname'
                value={firstname}
                />
                <FormInput 
                label ="Last Name"
                type="text"
                required
                onChange={handleChange}
                name='lastname'
                value={lastname}
                />
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
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm; 