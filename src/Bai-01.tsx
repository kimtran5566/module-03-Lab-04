import React, { useState } from 'react';

const CarSelectionApp: React.FC = () => {
  // Danh sách các loại xe và màu sắc
  const carList = ['Car1', 'Car2', 'Car3'];
  const colorList = ['Red', 'Blue', 'Green'];

  // Trạng thái để theo dõi lựa chọn của người dùng
  const [selectedCar, setSelectedCar] = useState(carList[0]);
  const [selectedColor, setSelectedColor] = useState(colorList[0]);

  return (
    <div>
      <h1>Car Selection App</h1>

      <div>
        <label>Chọn xe:</label>
        <select
          value={selectedCar}
          onChange={(e) => setSelectedCar(e.target.value)}
        >
          {carList.map((car, index) => (
            <option key={index} value={car}>
              {car}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Chọn màu sắc:</label>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          {colorList.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2>Kết quả lựa chọn:</h2>
        <p>Xe: {selectedCar}</p>
        <p>Màu sắc: {selectedColor}</p>
      </div>
    </div>
  );
};

export default CarSelectionApp;
