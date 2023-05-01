import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='text-center'>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit incidunt iusto beatae laboriosam debitis tenetur modi neque non, esse dicta fugit similique delectus nemo rerum mollitia iste laborum sunt quas.</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;