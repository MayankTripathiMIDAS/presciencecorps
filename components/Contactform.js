import React from "react";

const Contactform = () => {
  return (
    <>
      <div class="contact-form-wrapper d-flex justify-content-center">
        <form action="#" class="contact-form">
          <h5 class="title">Contact us</h5>

          <div>
            <input
              type="text"
              class="form-control rounded border-white mb-3 form-input"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              class="form-control rounded border-white mb-3 form-input"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              class="form-control rounded border-white mb-3 form-text-area"
              rows="5"
              cols="30"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div class="submit-button-wrapper">
            <input type="button" value="Send" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contactform;
