import React, { useEffect, useState } from 'react';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }, []);

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <strong>Name:</strong> {contact.name}, <strong>Phone:</strong>{' '}
            {contact.phone}, <strong>Email:</strong> {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
