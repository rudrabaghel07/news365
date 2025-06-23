import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* About Text */}
          <div className="col-md-6">
            <h2 className="about-title mb-4">About RS NEWS DASHBOARD</h2>
            <p className="about-text">
              Welcome to <strong>RS NEWS DASHBOARD</strong>, your trusted source for the
              latest news and updates. We bring you breaking news, in-depth
              analysis, and inspiring stories from around the world. Our
              mission is to deliver accurate, unbiased, and timely information
              to keep you informed and empowered.
            </p>
            <p className="about-text">
              Stay connected with RS NEWS DASHBOARD for updates that matter.
            </p>
          </div>

          {/* About Image */}
          <div className="col-md-6 text-center">
            <img
              src="https://via.placeholder.com/500"
              alt="About RS NEWS DASHBOARD"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>

        {/* Key Features */}
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="features-title mb-4">Why Choose RS NEWS DASHBOARD?</h3>
          </div>

          <div className="col-md-4 text-center">
            <div className="feature-card">
              <i className="bi bi-newspaper feature-icon"></i>
              <h5 className="mt-3">Reliable News</h5>
              <p>
                Get trustworthy and verified news from our dedicated team of
                journalists.
              </p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="feature-card">
              <i className="bi bi-lightning-charge feature-icon"></i>
              <h5 className="mt-3">Real-Time Updates</h5>
              <p>
                Stay ahead with instant updates and breaking news alerts.
              </p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="feature-card">
              <i className="bi bi-globe feature-icon"></i>
              <h5 className="mt-3">Global Coverage</h5>
              <p>
                Access stories and reports from every corner of the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
