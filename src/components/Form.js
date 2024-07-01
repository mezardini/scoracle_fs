import React, { useState } from 'react';

const Form = () => {
  const [league, setLeague] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Selected League:', league);
  };

  return (
    <div className="row mt-5" style={{ marginTop: '5%' }}>
      <div className="col-md-9 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="league"
              value={league}
              onChange={(e) => setLeague(e.target.value)}
            >
              <option>Choose League</option>
              {/* ...options... */}
            </select>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">Get Predictions</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
