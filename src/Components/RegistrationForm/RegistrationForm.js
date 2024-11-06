import React, { useState } from 'react';
import logo from '../../Assets/logo.png';

const RegistrationForm = ({ onStartExam }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && phone && email && address) {
            onStartExam({ name, phone, email, address });
        } else {
            alert("Please fill in all the required fields.");
        }
    };

    return (
        <div className="registration-form">
            <img src={logo} alt="Logo" className="logo" />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <button type="submit">Start Exam</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
