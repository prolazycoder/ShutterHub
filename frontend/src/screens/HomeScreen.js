import React from 'react';
import { AboutMe, FeatureList, Hero, TrendingImages } from '../components/HomePage';
import { Container } from 'react-bootstrap';

export function HomeScreen() {
    return (
        <div>
            <Hero/>
            <Container>
                <TrendingImages/>
                <FeatureList/> 
                <AboutMe/>
            </Container>        
        </div>
    )
}
