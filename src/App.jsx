import React from 'react'
import Server from "./components/Server";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col justify-betwen'>
      <header>
        <Navbar />
      </header>
      <main className='grow'>
        <Server />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
