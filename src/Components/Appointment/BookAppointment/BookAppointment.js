import React from 'react';
import '../../../App.css'
import BookingCart from '../BookingCart/BookingCart';

const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalspace: 10
    },
    {
        id: 2,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalspace: 10
    },
    {
        id: 3,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalspace: 10
    },
    {
        id: 4,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalspace: 10
    },
    {
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalspace: 10
    },
    {
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalspace: 10
    },
]

const BookAppointment = ({ date }) => {
    return (
        <section>
            <h2 className="App-link text-center mb-5">Available Appointments on {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCart booking={booking} key={booking.id} date={date}></BookingCart>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;