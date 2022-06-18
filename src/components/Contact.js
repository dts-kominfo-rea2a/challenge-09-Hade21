// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
  return (
    <div className="card-contact">
      <img src={data.photo} alt="profile" className="photo" id="photo" />
      <h3 className="name" id="name">
        {data.name}
      </h3>
      <p className="phone" id="phone">
        {data.phone}
      </p>
      <p className="email" id="email">
        {data.email}
      </p>
    </div>
  );
};

export default Contact;
