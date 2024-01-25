import React, { useState } from 'react';

const AddContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleAddContact = () => {
    if (name && phone && email) {
      const newContact = { name, phone, email };
      onAddContact(newContact);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

export default AddContactForm;
