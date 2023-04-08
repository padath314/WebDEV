import React, { useState } from 'react';

const Page1 = () => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');

  const handleQ1Change = (e) => {
    setQ1(e.target.value);
  };

  const handleQ2Change = (e) => {
    setQ2(e.target.value);
  };

  return (
    <div>
      <h1>Respondent Travel Profile</h1>
      <div>
        <h3>Q1: What is your most frequently used means of travel from your home to work location?</h3>
        <div>
          <input type="radio" name="q1" value="bus" onChange={handleQ1Change} /> Bus<br />
          <input type="radio" name="q1" value="metro" onChange={handleQ1Change} /> Metro<br />
          <input type="radio" name="q1" value="two-wheeler" onChange={handleQ1Change} /> Own Two-wheeler<br />
          <input type="radio" name="q1" value="car" onChange={handleQ1Change} /> Own Car<br />
          <input type="radio" name="q1" value="walk-bicycle" onChange={handleQ1Change} /> Walk / Bicycle<br />
          <input type="radio" name="q1" value="auto" onChange={handleQ1Change} /> Auto<br />
          <input type="radio" name="q1" value="app-based-ride-hailing-cab" onChange={handleQ1Change} /> App based ride hailing cab services including Ola / Uber<br />
        </div>
      </div>
      <div>
        <h3>Q2: What is the total distance between your home and workplace?</h3>
        <div>
          <input type="radio" name="q2" value="<5km" onChange={handleQ2Change} /> &lt; 5 km<br />
          <input type="radio" name="q2" value="5-10km" onChange={handleQ2Change} /> 5 - 10 km<br />
          <input type="radio" name="q2" value="10-15km" onChange={handleQ2Change} /> 10 - 15 km<br />
          <input type="radio" name="q2" value="15-20km" onChange={handleQ2Change} /> 15 - 20 km<br />
          <input type="radio" name="q2" value="20-25km" onChange={handleQ2Change} /> 20 - 25 km<br />
          <input type="radio" name="q2" value=">25km" onChange={handleQ2Change} /> &gt; 25 km<br />
        </div>
      </div>
      <button>Next</button>
    </div>
  );
};

export default Page1;