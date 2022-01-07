import React from "react";

import profile from "../images/favicon.ico";

function Hero() {
  return (
    <div>
      <div className="container col-xxl-100% px-10 py-50">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={profile}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
              style={{borderRadius: "50%"}}
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3" style={{ color: "white" }}>
              Full Stack Web Developer
            </h1>
            <p className="lead" style={{ color: "#AFAFAF" }}>
              Hello, my name is Alexander Yarnell. I am an MIT certifide Full Stack Web Developer. 
              With a firm understanding of ES6 JavaScript, and the ability to quickly learn, adaptive, and overcome any challenges thrown my way.

            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <a
                className="btn btn-primary btn-lg px-4"
                href="http://github.com/Alexander-Yarnell"
                target="_blank"
              >
                Github
              </a>
              <a
                className="btn btn-outline-secondary btn-lg px-4"
                href="https://docs.google.com/document/d/1ocfBKRAzySO6t6epFXWQgnDa5dAuL1WpavCN5CISB9s/edit?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
