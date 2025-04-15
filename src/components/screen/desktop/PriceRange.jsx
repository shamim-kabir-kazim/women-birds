import React, { useState, useEffect } from 'react';
import './PriceRange.css';

const PriceRange = ({ onFilterByPrice }) => {
  const initialMinPrice = 0;
  const initialMaxPrice = 1000;

  const [sliderMinValue] = useState(initialMinPrice);
  const [sliderMaxValue] = useState(initialMaxPrice);

  const [minVal, setMinVal] = useState(initialMinPrice);
  const [maxVal, setMaxVal] = useState(initialMaxPrice);
  const [minInput, setMinInput] = useState(initialMinPrice);
  const [maxInput, setMaxInput] = useState(initialMaxPrice);

  const [isDragging, setIsDragging] = useState(false);

  const minGap = 5;

  const slideMin = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= sliderMinValue && maxVal - value >= minGap) {
      setMinVal(value);
      setMinInput(value);
    }
  };

  const slideMax = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value <= sliderMaxValue && value - minVal >= minGap) {
      setMaxVal(value);
      setMaxInput(value);
    }
  };

  const handleFilter = () => {
    onFilterByPrice(minVal, maxVal); // Call the parent function with selected range
  };

  useEffect(() => {
    const setSliderTrack = () => {
      const range = document.querySelector('.slider-track');
      if (range) {
        const minPercent =
          ((minVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;
        const maxPercent =
          ((maxVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;

        range.style.left = `${minPercent}%`;
        range.style.right = `${100 - maxPercent}%`;
      }
    };

    setSliderTrack();
  }, [minVal, maxVal]);

  return (
    <div className="double-slider-box">
      <div className="range-slider">
        <div className="slider-track"></div>

        <input
          type="range"
          min={sliderMinValue}
          max={sliderMaxValue}
          value={minVal}
          onChange={slideMin}
          className="min-val"
        />
        <input
          type="range"
          min={sliderMinValue}
          max={sliderMaxValue}
          value={maxVal}
          onChange={slideMax}
          className="max-val"
        />
        {isDragging && <div className="min-tooltip">{minVal}</div>}
        {isDragging && <div className="max-tooltip">{maxVal}</div>}
      </div>
      <div className="input-box">
        <div className="min-box">
          <input
            type="number"
            value={minInput}
            onChange={(e) => setMinInput(parseInt(e.target.value, 10))}
            className="min-input"
            min={sliderMinValue}
            max={maxVal - minGap}
          />
        </div>
        <div className="to">To</div>
        <div className="max-box">
          <input
            type="number"
            value={maxInput}
            onChange={(e) => setMaxInput(parseInt(e.target.value, 10))}
            className="max-input"
            min={minVal + minGap}
            max={sliderMaxValue}
          />
        </div>
        <button className="go" onClick={handleFilter}>
          Go
        </button>
      </div>
    </div>
  );
};

export default PriceRange;