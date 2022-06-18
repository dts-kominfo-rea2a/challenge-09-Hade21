// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ contact }) => {
  return (
    <div className="card-contact">
      <img src={contact.photo} alt="profile" className="photo" />
      <div className="detail">
        <h3 className="name">{contact.name}</h3>
        <p className="phone">{contact.phone}</p>
        <p className="email">{contact.email}</p>
      </div>
    </div>
  );
};

export default Contact;
