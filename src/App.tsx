// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <h1>Welcome to Rygo Foss' Website</h1>
        <p>Your trusted advisor in law and business strategy.</p>
      </section>
      <section id="about">
        <h1>About Rygo Foss</h1>
        <p>Rygo Foss is a distinguished lawyer and business strategist...</p>
      </section>
      <section id="contact">
        <h1>Contact Rygo</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
}

export default App;
