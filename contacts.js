const fs = require('fs').promises;
const { nanoid } = require('nanoid');
const path = require('path');

const contactsPath = path.join(__dirname, '/db/contacts.json');

const getContactsList = async () => {
  try {
    const fileText = await fs.readFile(contactsPath, 'utf-8');

    const contactsList = JSON.parse(fileText);

    return contactsList;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// returns a list of contacts
async function listContacts() {
  const fileText = await fs.readFile(contactsPath);
  return JSON.parse(fileText);
}

// return contact by id
async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find(item => item.id === contactId);
  return contact || null;
}

// remove contact by id
async function removeContact(contactId) {
  const contacts = await listContacts();
  const idx = contacts.findIndex(item => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const [result] = contacts.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
}

// add new contact
async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
