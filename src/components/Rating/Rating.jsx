import React, { useState } from 'react';
import './Rating.css';

export default function Rating({
  id = 'rating',
  label = 'Nota',
  value,
  onChange,
  visible = true,
  maxStars = 5,
  required = true,
  className = ''
}) {
  if (!visible) return null;

  const [hoverValue, setHoverValue] = useState(0);

  const stars = [...Array(maxStars)];

  const handleClick = (newValue) => {
    if (onChange) {
      onChange(id, newValue, { valid: true });
    }
  };

  return (
    <div className={`rating-field ${className}`}>
      <label className="rating-label">
        {label} {required && <span className="required-star">*</span>}
      </label>
      <div className="stars-container">
        {stars.map((_, index) => {
          const ratingValue = index + 1;
          const isSelected = ratingValue <= (hoverValue || value);
          
          return (
            <span
              key={index}
              className={`star ${isSelected ? 'selected' : ''}`}
              onClick={() => handleClick(ratingValue)}
              onMouseEnter={() => setHoverValue(ratingValue)}
              onMouseLeave={() => setHoverValue(0)}
            >
              ★
            </span>
          );
        })}
      </div>
    </div>
  );
}