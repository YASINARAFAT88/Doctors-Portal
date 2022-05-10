import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import PrimaryButton from '../Shared/PrimaryButton';


const Banner = () => {
    return (
        <div style={{  
            background: `url(${bg})`
        }} className="hero min-h-screen w-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-50 mx-3'>
                    <h1 className="text-5xl font-bold">Your new Smile Starts here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. Cum voluptates assumenda omnis expedita sapiente? Cum quisquam totam excepturi facere voluptatem aut</p>
                    <PrimaryButton>GET STARTS</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;