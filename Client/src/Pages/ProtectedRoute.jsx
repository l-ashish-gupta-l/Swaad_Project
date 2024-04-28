import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const [isAdmin, setisAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/Userdata', { withCredentials: true });
                setisAdmin(response.data.isAdmin);
                setIsLoading(false); // Set loading to false after fetching the data
            } catch (error) {
                console.error('Error fetching user data in admin Panel ', error);
                setIsLoading(false); // Also set loading to false if there's an error
            }
        };
        fetchUserData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; // Or your own loading spinner
    }

    if (!isAdmin) {
        return <Navigate to={'/home'} />
    }

    return children;
}

export default ProtectedRoute;
