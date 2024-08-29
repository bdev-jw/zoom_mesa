'use client'

import MeetingTypeList from '@/components/MeetingTypeList';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('ko-KO', { hour: '2-digit', minute: '2-digit' }));
      setDate(new Intl.DateTimeFormat('ko-KO', { dateStyle: 'full' }).format(now));
    };

    updateTime(); // 초기 시간과 날짜 설정
    const interval = setInterval(updateTime, 1000); // 1초마다 업데이트

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, []);

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>
          </h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold'>
              {time}
            </h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
