import React, { useState, useEffect } from 'react';

interface ClockHookProps {
  // Bạn có thể định nghĩa các prop nếu cần
}

const useClock = (props: ClockHookProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Hàm này sẽ chạy sau mỗi lần render
    const intervalId = setInterval(() => {
      // Cập nhật thời gian mỗi giây
      setCurrentTime(new Date());
    }, 1000);

    // Hủy interval khi component unmount
    return () => clearInterval(intervalId);
  }, []); // Tham số thứ hai là một mảng rỗng để đảm bảo useEffect chỉ chạy một lần sau khi component mount

  return currentTime;
};

// Sử dụng Hook trong component
const ClockComponent: React.FC = () => {
  const currentTime = useClock({});

  return (
    <div>
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default ClockComponent;
