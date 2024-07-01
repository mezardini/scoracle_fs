import React from 'react';

const Header = () => (
  <section className="bg-gradient pt-5 pb-6">
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-row align-items-center justify-content-between">
          <div className="heading-brand">Scoracle</div>
          <a href="" className="btn btn-dark">Try It</a>
        </div>
      </div>
      <div className="row mt-6">
        <div className="col-md-12 mx-auto">
          <h1>Scoracle Football Predictor: How It Works</h1>
          <h2>Data Collection</h2>
          <p>We scrape football data from various sources on the web, including team statistics, fixture lists, and historical match results.</p>
          <h2>Statistical Model</h2>
          <p>Our prediction model is based on the Poisson formula, a statistical method that considers historical team performance and calculates the probability of different match outcomes.</p>
          <h2>Python Libraries</h2>
          <p>We utilize Python libraries like Beautiful Soup for web scraping, requests for making HTTP requests, and scipy for implementing the Poisson formula.</p>
          <h2>Making Predictions</h2>
          <p>Using the collected data and applying the Poisson formula with calculated lambda values, we predict the number of goals for each team and determine match outcomes.</p>
          <h2>Benefits</h2>
          <ul>
            <li>Improved Accuracy.</li>
            <li>Informed betting decisions based on statistical analysis.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Header;
