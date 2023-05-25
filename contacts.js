const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "/db/contacts.json");

const getContactsList = async () => {
  try {
    const fileText = await fs.readFile(contactsPath, "utf-8");

    const contactsList = JSON.parse(fileText);

    return contactsList;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// returns a list of contacts
function listContacts() {
  const getContactsList = async () => {
    try {
      const fileText = await fs.readFile(contactsPath);

      const contactsList = JSON.parse(fileText);

      return contactsList;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  return getContactsList();
  // getContactsList().then((response) => console.table(response));
}

// TODO: задокументувати кожну функцію
function getContactById(contactId) {
  // ...твій код
}

// TODO: задокументувати кожну функцію
function removeContact(contactId) {
  // ...твій код
}

// TODO: задокументувати кожну функцію
function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
