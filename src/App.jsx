import React, { useEffect, useState } from 'react';
import ContactList from './Components.jsx/ContactList';
import AddContactForm from './Components.jsx/AddContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Contact Book App</h1>
      <AddContactForm onAddContact={handleAddContact} />
      <ContactList />
    </div>
  );
};

export default App;
