import React, { useEffect, useState } from 'react';
import CardDate from './CardDate';
const CardDateWithTimer = ({ product }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = () => {
      const targetDate = new Date(product.endDate); // Assuming each product has an 'endDate' property
      const now = new Date();

      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, [product.endDate]);

  return (
    <div className="card-date">
      <CardDate product={product} />
      <div className="countdown-timer">
        <div className="time-box">
          <span>{timeLeft.days}</span>
          <small>Days</small>
        </div>
        <div className="time-box">
          <span>{timeLeft.hours}</span>
          <small>Hours</small>
        </div>
        <div className="time-box">
          <span>{timeLeft.minutes}</span>
          <small>Minutes</small>
        </div>
        <div className="time-box">
          <span>{timeLeft.seconds}</span>
          <small>Seconds</small>
        </div>
      </div>
    </div>
  );
};

export default CardDateWithTimer;
