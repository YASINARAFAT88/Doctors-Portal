import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem exercitationem esse ipsam iure nostrum debitis cupiditate autem optio facere!</p>
            </div>
            <div className='flex items-center justify-center'>
                <div className="avatar py-3">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={review.img} alt='' />
                    </div>
                    </div>
                    <div>
                        <h3 className='text-xl'>{review.name}</h3>
                        <p>{review.location}</p>
                    </div>
                
            </div>
        </div>
    );
};

export default Review;