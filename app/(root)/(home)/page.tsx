"use client"
import MeetingTypeList from '@/components/MeetingTypeList';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {

    const updateTime = () => {

      const now = new Date()
      // const timeOptions: Intl.DateTimeFormat = {
      //   hour: '2-digit',
      //   minute: '2-digit',
      //   hour12: true,
      // }
      // const dateOptions: Intl.DateTimeFormat = {
      //   weekday: 'long',
      //   year: 'numeric',
      //   month:'long',
      //   day: 'numeric'
      // }
      
      const formattedtime = now.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})
      const formatteddate = (new Intl.DateTimeFormat('en-IN', { dateStyle: 'full'})).format(now)

      setTime(formattedtime)
      setDate(formatteddate)
    }

    updateTime()

    const intervalTimer = setInterval(updateTime, 1000);

    return () => clearInterval(intervalTimer)

  }, [])

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h1 className='glassmorphism max-w-[300px] rounded py-2 px-2 text-center text-base font-normal'>Upcoming meeting at : 13:45 PM</h1>

          <div className="flex flex-col gap-2">
            <h1 className='text-4xl font-extrabold lg:text-7xl'>
              {time} 
            </h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList/>
    </section>
  )
}

export default Home