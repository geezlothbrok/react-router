import React from 'react';

function ServicesDetails (props) {
    return (
        <div>
            <h1>Services Details {props.match.params.id}</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsa maiores vel neque repudiandae quam alias cumque, 
                voluptatem, id accusamus tempora quia rem fugiat, 
                praesentium optio eos ad in sit atque?
            </p>
        </div>
    )
}

export default ServicesDetails;