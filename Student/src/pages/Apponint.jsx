import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Make sure to import axios for API calls
import info from "/src/assets/assets_frontend/info_icon.svg";

export default function Appointment() {
    const { teacherId } = useParams(); // Get teacherId from URL
    const [teacherInfo, setTeacherInfo] = useState(null);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState('');
    const [teachers, setTeachers] = useState([]); // To hold available slots

    // Define days of the week
    const daysOfweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Fetching teacher information
    const fetchTeacherInfo = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/teachers/${teacherId}`);
            setTeacherInfo(response.data);
        } catch (error) {
            console.error("Error fetching teacher data:", error);
        }
    };

    // Fetching available slots
    const getAvailableSlots = async () => {
        let today = new Date();
        const timeSlots = [];

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);
            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }

            let daySlots = [];
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                daySlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                });

                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }
            timeSlots.push(daySlots);
        }
        setTeachers(timeSlots);
    };

    useEffect(() => {
        fetchTeacherInfo();
    }, [teacherId]);

    useEffect(() => {
        if (teacherInfo) {
            getAvailableSlots();
        }
    }, [teacherInfo]);

    return teacherInfo && (
        <div>
            <div className='flex flex-col sm:flex-row gap-4'>
                <div>
                    <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={teacherInfo.image} alt="" />
                </div>
                <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                    <p className='flex items-center gap-2 text-2xl font-semibold text-gray-900'>{teacherInfo.name}</p>
                    <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                        <p>{teacherInfo.video}</p>
                    </div>
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={info} alt="" /></p>
                        <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{teacherInfo.bio}</p>
                    </div>
                    <p className='text-gray-500 font-medium mt-4'>
                        Appointment fee: <span className='text-gray-600'>{teacherInfo.bio}</span>
                    </p>
                </div>
            </div>

            <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
                <p>Booking Slots</p>
                <div className='flex gap-3 items-center w-full mt-4'>
                    {teachers.length > 0 && teachers.map((item, index) => (
                        <div key={index} onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}>
                            <p>{item[0] && daysOfweek[item[0].datetime.getDay()]}</p>
                            <p>{item[0] && item[0].datetime.getDate()}</p>
                        </div>
                    ))}
                </div>
                <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
                    {teachers.length > 0 && teachers[slotIndex].map((item, index) => (
                        <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-800 border border-gray-200'}`} key={index}>
                            {item.time.toLowerCase()}
                        </p>
                    ))}
                </div>
                <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full'>Appointment</button>
            </div>
        </div>
    );
}