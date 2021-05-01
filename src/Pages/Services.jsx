import React from 'react';
import { Link } from 'react-router-dom';

function Services () {
    return (
        <div>
            <h1>Our Services</h1>
            <p>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Dolorum placeat soluta explicabo laborum neque adipisci, 
                reprehenderit, dolorem tempore voluptatum qui unde, 
                repellat beatae rem aperiam minus quas nobis error corrupti?
            </p>
                <Link to="/Services/6">Odds</Link>
                <Link to="/Services/83">swimming</Link>
        </div>
    )
}

export default Services;