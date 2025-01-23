import React, {useState, useEffect} from 'react';
import { Hero, TrendingImages } from '../components/HomePage';

export function HomeScreen() {
    return (
        <div>
            <Hero/>
            <TrendingImages/>         
        </div>
    )
}
