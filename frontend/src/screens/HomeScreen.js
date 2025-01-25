import React from 'react';
import { Hero, TrendingImages } from '../components/HomePage';
import { Container } from 'react-bootstrap';

export function HomeScreen() {
    return (
        <div>
            <Hero/>
            <Container>
                <TrendingImages/> 
            </Container>        
        </div>
    )
}
