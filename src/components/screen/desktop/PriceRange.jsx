import React, { useState, useEffect } from 'react';
import './PriceRange.css';

const PriceRange = ({ onFilterByPrice, resetTrigger }) => {
  const initialMinPrice = 0;
  const initialMaxPrice = 15000; // Updated max range to 15000

  const [sliderMinValue] = useState(initialMinPrice);
  const [sliderMaxValue] = useState(initialMaxPrice);

  const [minVal, setMinVal] = useState(initialMinPrice);
  const [maxVal, setMaxVal] = useState(initialMaxPrice);
  const [minInput, setMinInput] = useState(initialMinPrice);
  const [maxInput, setMaxInput] = useState(initialMaxPrice);

  const [isDragging, setIsDragging] = useState(false);

  const minGap = 5;

  // Update the slider and input values when the slider moves
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

  // Allow any valid number in the input boxes
  const handleMinInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= sliderMinValue) {
      setMinInput(value);
    } else {
      setMinInput(''); // Allow clearing the input
    }
  };

  const handleMaxInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value <= sliderMaxValue) {
      setMaxInput(value);
    } else {
      setMaxInput(''); // Allow clearing the input
    }
  };

  // Reset or filter based on input when "Go" is pressed
  const handleFilter = () => {
    const min = parseInt(minInput, 10);
    const max = parseInt(maxInput, 10);

    // Reset sliders if min > max
    if (min > max || isNaN(min) || isNaN(max)) {
      setMinVal(initialMinPrice);
      setMaxVal(initialMaxPrice);
      setMinInput(initialMinPrice);
      setMaxInput(initialMaxPrice);
    } else {
      // Update the slider values and trigger the filter
      setMinVal(min);
      setMaxVal(max);
      onFilterByPrice(min, max);
    }
  };

  // Reset the price range when resetTrigger changes
  useEffect(() => {
    setMinVal(initialMinPrice);
    setMaxVal(initialMaxPrice);
    setMinInput(initialMinPrice);
    setMaxInput(initialMaxPrice);
  }, [resetTrigger]);

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
            onChange={handleMinInputChange}
            className="min-input"
            min={sliderMinValue}
            max={sliderMaxValue}
            placeholder="Min"
          />
        </div>
        <div className="to">To</div>
        <div className="max-box">
          <input
            type="number"
            value={maxInput}
            onChange={handleMaxInputChange}
            className="max-input"
            min={sliderMinValue}
            max={sliderMaxValue}
            placeholder="Max"
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