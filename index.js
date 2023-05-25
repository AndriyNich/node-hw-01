// fs.readFile("./db/contacts.json")
//   .then((data) => console.log(data.toString()))
//   .catch((error) => console.log(error));
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

console.table(listContacts());
