import React, { useState, useEffect } from 'react';
import '../.env';

const UserInput = ({ }) => {
    const [formData, setFormData] = useState({
        trackId: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        // Access form data from state
        const { trackId, } = formData;
        console.log('Submitted data:', trackId)
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="trackId"
                placeholder="Spotify Track ID"
                autoComplete='off'
                onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default UserInput;