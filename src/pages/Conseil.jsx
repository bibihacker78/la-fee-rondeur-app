import { faDigitalOcean } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Header from "../components/Header";
import "/conseil.css"
import Footer from "../components/Footer";

const Conseil = () => {
    return (

        <div>

            <Header />

            <div className="container-conseil ">
              <div className="items">
                <img src="./assets/876A9874.jpg" alt=""  width={"100%"} height={"300px"}/>
                  <h3>Digital Ocean</h3>
                  <p>DigitalOcean est une plateforme cloud hébergée en ligne qui vous permet de créer, gérer et déployer des applications web et applications logicielles. Elle est disponible à travers plus de 180 pays et 2500 régions...</p>
              </div>
              <div className="items">
                <img src="./assets/876A9874.jpg" alt="" width={"100%"} height={"300px"}/>
                  <h3>Digital Ocean</h3>
                  <p>DigitalOcean est une plateforme cloud hébergée en ligne qui vous permet de créer, gérer et déployer des applications web et applications logicielles. Elle est disponible à travers plus de 180 pays et 2500 régions...</p>
              </div>
              <div className="items">
                <img src="./assets/876A9874.jpg" alt=""  width={"100%"} height={"300px"}/>
                  <h3>Digital Ocean</h3>
                  <p>DigitalOcean est une plateforme cloud hébergée en ligne qui vous permet de créer, gérer et déployer des applications web et applications logicielles. Elle est disponible à travers plus de 180 pays et 2500 régions...</p>
              </div>
            </div>


            <div className="aside">
          <h4 class="fst-italic">Recent posts</h4>
          <ul class="list-unstyled">
            <li>
              <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                <div class="col-lg-8">
                  <h6 class="mb-0">Example blog post title</h6>
                  <small class="text-body-secondary">January 15, 2024</small>
                </div>
              </a>
            </li>
            <li>
              <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                <div class="col-lg-8">
                  <h6 class="mb-0">This is another blog post title</h6>
                  <small class="text-body-secondary">January 14, 2024</small>
                </div>
              </a>
            </li>
            <li>
              <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                <div class="col-lg-8">
                  <h6 class="mb-0">Longer blog post title: This one has multiple lines!</h6>
                  <small class="text-body-secondary">January 13, 2024</small>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <Footer />

        </div>
    )
}

export default Conseil;