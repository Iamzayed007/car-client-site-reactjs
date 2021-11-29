import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MakeAdmin = () => {


    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://powerful-beach-17355.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                   alert('Admin make successfully')
                   setEmail('')
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
             <div>
            <h2>Make an Admin</h2>
            <form  onSubmit={handleAdminSubmit}>
                <input
                    className="form-control w-25 my-3"
                   placeholder="Enter Email"
                    type="email"
                    required
                    onBlur={handleOnBlur}
                     />
                <button className="btn btn-outline-danger" type="submit">Make Admin</button>
            </form>
        </div>
        </div>
    );
};

export default MakeAdmin;