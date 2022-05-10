import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/Navber/PrimaryButton/PrimaryButton';

const MakeAppoientment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-4xl font-bold my-2 text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment</h2>
                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam tempore, sequi exercitationem nostrum alias natus eum consequuntur sapiente facilis in odit eos hic quaerat possimus tenetur nobis. Cum voluptates assumenda omnis expedita sapiente? Cum quisquam totam excepturi facere voluptatem aut.</p>
                <PrimaryButton>GET STARTED</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoientment;