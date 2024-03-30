import React, { useState, useEffect } from 'react';
import '../.env';

const UserInput = ({ }) => {
    const [trackId, setTrackId] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log("button dabaya re")
        console.log(event.target.value)
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="trackId"
                placeholder="Spotify Track ID"
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default UserInput