import React from 'react';
import { Form } from './FormExample';
import { ContactList } from './FormExample2'



export const App = () => (
  <div>
    <h1 className='title'>Meteor Wallet </h1>
    <Form />
    <hr />
    <ContactList />
  </div>
);
