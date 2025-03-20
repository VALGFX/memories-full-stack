import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import PromotionCard from '../components/PromotionCard';

const PromotionsList = () => {
    const promotions = [
        {
            id: 1,
            name: '*Magia Zilei de 8 Martie',
            startDate: new Date('2025-03-08T00:00:00'),
            image: assets.spring_img,
        },
        {
            id: 2,
            name: '*Magia Zilei de primavara',
            startDate: new Date('2025-04-01T00:00:00'),
            image: assets.springs_img,
        },
    ];

    const calculateTimeRemaining = (startDate) => {
        const currentDate = new Date();
        const timeDifference = startDate - currentDate;

        if (timeDifference > 0) {
            return {
                days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timers, setTimers] = useState(
        promotions.map(promo => ({ id: promo.id, timeRemaining: calculateTimeRemaining(promo.startDate) }))
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimers(promotions.map(promo => ({ id: promo.id, timeRemaining: calculateTimeRemaining(promo.startDate) })));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='grid gap-8 grid-cols-1'>
            {promotions.map(promotion => {
                const timer = timers.find(timer => timer.id === promotion.id)?.timeRemaining;
                return (
                    <PromotionCard 
                        key={promotion.id} 
                        promotion={promotion} 
                        timeRemaining={timer} 
                    />
                );
            })}
        </div>
    );
};

export default PromotionsList;
