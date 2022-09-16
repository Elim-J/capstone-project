import React from 'react';
//create a Form.css
//Could import a cool img for form

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
        <div className={props.darkMode ? 'dark' : ''}>
            <div className='form--container'>
                <form onSubmit={handleSubmit}>
                    <div className='first--last'>
                        <input
                            className='input--firstName'
                            type='text'
                            placeholder='First Name'
                            name="firstName"
                            onChange={updateForm}
                            value={formData.firstName}    
                        />
                        <input 
                            className='input--lastName'
                            type='text'
                            placeholder='Last Name'
                            name='lastName'
                            onChange={updateForm}
                            value={formData.lastName}
                        />
                    </div>

                    <div className="email--username--pass">
                        <input 
                            type='email'
                            placeholder='Email'
                            name='email'
                            onChange={updateForm}
                            value={formData.email}
                            
                        />

                        <input 
                            type='text'
                            placeholder='*Username'
                            name='userName'
                            onChange={updateForm}
                            value={formData.userName}
                            required
                        />

                        <input 
                            type='text'
                            placeholder='*Password'
                            name='password'
                            onChange={updateForm}
                            value={formData.password}
                            //pattern="#"
                            required
                        />
                    </div>

                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}
