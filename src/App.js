import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <div className="list-contact">
        <Contact contact={contacts[0]} />
        <Contact contact={contacts[1]} />
        <Contact contact={contacts[2]} />
        <Contact contact={contacts[3]} />
        <Contact contact={contacts[4]} />
        <Contact contact={contacts[5]} />
      </div>
    </div>
  );
};

export default App;
