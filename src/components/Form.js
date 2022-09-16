import React from 'react';
import '../css/Form.css';
import image from '../testimg.jpg';

export default function Form(props){
    
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: ''
    })

    function updateForm(event){

        setFormData(prevFormData => {
            const {name, value} = event.target

            return {
                ...prevFormData,
                [name]: value 
            }
        })
    }

    function handleSubmit(event){
        
        event.preventDefault(); //prevents page from refreshing and starting back at default values
        console.log(formData); //just check the data for now
        //submitToAPI(formData)       //if we have function to submit to API
    }

    return (
        <div className={props.darkMode ? 'dark form-img-container' : 'form-img-container'}>
            <img src={image} alt="People driving at night" />
                <form onSubmit={handleSubmit}>
                    <div className='text-container'>
                        <p>This is not a real online service!</p>
                        <p>However, if you still want to pay us, that's cool with us. Sign up!</p>
                        <p>You <em>know</em> you want to.</p>
                        <h2>Let's do this!</h2>
                    </div>


                    <div className='first--last'>
                        <input
                            className='firstName'
                            type='text'
                            placeholder='First Name'
                            name="firstName"
                            onChange={updateForm}
                            value={formData.firstName}    
                        />
                        <input 
                            className='lastName'
                            type='text'
                            placeholder='Last Name'
                            name='lastName'
                            onChange={updateForm}
                            value={formData.lastName}
                        />
                    </div>

                    <div className="email--username">
                        <input 
                            className='email'
                            type='email'
                            placeholder='Email'
                            name='email'
                            onChange={updateForm}
                            value={formData.email}
                            
                        />

                        <input 
                            className='userName'
                            type='text'
                            placeholder='*Username'
                            name='userName'
                            onChange={updateForm}
                            value={formData.userName}
                            required
                        />
                    </div>

                    <div className='label--pass'>
                        <label htmlFor="password">Password Requirements: 
                            <ul>
                                <li>Minimum length is 8 characters</li>
                                <li>At least one uppercase letter</li>
                                <li>At least one number</li>
                                <li>At least one special character</li>
                            </ul>
                        </label>
                        <input 
                            type='text'
                            placeholder='*Password'
                            name='password'
                            id='password'
                            onChange={updateForm}
                            oninput="this.setCustomValidity('test')"
                            value={formData.password}
                            pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
                            required
                        />
                    </div>    
                    <button>Submit</button>
                </form>
        </div>
    )
}
