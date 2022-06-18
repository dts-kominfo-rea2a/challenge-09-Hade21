// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ contact }) => {
  return (
    <div className="card-contact">
      <img src={contact.photo} alt="profile" className="photo" id="photo" />
      <h3 className="name" id="name">
        {contact.name}
      </h3>
      <p className="phone" id="phone">
        {contact.phone}
      </p>
      <p className="email" id="email">
        {contact.email}
      </p>
    </div>
  );
};

export default Contact;
