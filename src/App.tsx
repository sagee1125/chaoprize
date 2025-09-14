import React from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const AboutThePrize = () => <div>ABOUT THE PRIZE</div>;
const TheOrganiser = () => <div>THE ORGANISER</div>;
const ThePatron = () => <div>THE PATRON</div>;

const Awards = () => <div>AWARDS</div>;
const Laureates = () => <div>LAUREATES</div>;

const Nomination = () => <div>NOMINATION</div>;
const ImportantDates = () => <div>IMPORTANT DATES</div>;

const News = () => <div>NEWS</div>;
const Gallery = () => <div>GALLERY</div>;
const Publications = () => <div>PUBLICATIONS</div>;

const ContactUs = () => <div>CONTACT US</div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* 內容區域 */}
        <main className="flex-1">
          <Routes>
            {/* INTRODUCTION */}
            <Route path="/" element={<Home />} />
            <Route path="/abouttheprize" element={<AboutThePrize />} />
            <Route path="/theorganiser" element={<TheOrganiser />} />
            <Route path="/thepatron" element={<ThePatron />} />

            {/* AWARDS & LAUREATES */}
            <Route path="/awards" element={<Awards />} />
            <Route path="/laureates" element={<Laureates />} />

            {/* NOMINATION */}
            <Route path="/nomination" element={<Nomination />} />
            <Route path="/importantdates" element={<ImportantDates />} />

            {/* MEDIA */}
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/publications" element={<Publications />} />

            {/* CONTACT US */}
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
