import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="section bg-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">
                  Information
                </h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/company">Company</Link>
                  </li>
                  <li>
                    <Link href="/mission">Mission & Vision</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">
                  Ressources
                </h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li>
                    <Link href="/managed-services">Managed Service</Link>
                  </li>
                  <li>
                    <Link href="/enterprise">Enterprise Solutions</Link>
                  </li>
                  <li>
                    <Link href="/management-consulting">
                      Management Consulting
                    </Link>
                  </li>
                  <li>
                    <Link href="/workforce-solution">Workforce Solutions</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-2">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">Help</h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li>
                    <Link href="/terms">Terms & Conditions </Link>
                  </li>
                  <li>
                    <Link href="/privacy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">
                  Contact Us
                </h6>
                <p class="contact-info mt-4">
                  Contact us if need help with anything
                </p>
                <p class="contact-info">(469) 361-2442</p>
                <div class="mt-5">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab facebook footer-social-icon fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab twitter footer-social-icon fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab google footer-social-icon fa-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <p class="footer-alt mb-0 f-14">
            2023 ©  Prescience Corporation, All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
