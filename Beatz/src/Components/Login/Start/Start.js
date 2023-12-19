import React from 'react'
import {Button} from '@mui/base/Button';
import { useNavigate } from 'react-router-dom';
import './start.scss'

function Start() {
    const navigate=useNavigate();
    return (
        <div className='login-main1'>
            <div>
                <span className='text-login'>Start Vibing!</span>
            </div>
            <div>
                <Button className='button-login' onClick={()=>navigate('/SignIn')}>Login</Button>
                <Button className='button-login' onClick={()=>navigate('/signUp')}>SignUp</Button>
            </div>

        </div>
    )
}

export default Start