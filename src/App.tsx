import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SectionBanner from "./components/SectionBanner";
import { LanguageProvider } from "./context";
import Home from "./pages/Home/Home";
import AboutThePrize from "./pages/AboutThePrize/AboutThePrize";
import ContactUs from "./pages/ContactUs/ContactUs";
import TheOrganiser from "./pages/TheOrganiser/TheOrganiser";
import ThePatron from "./pages/ThePatron/ThePatron";

const Awards = () => <SectionBanner title="AWARDS" />;
const Laureates = () => <SectionBanner title="LAUREATES" />;

const Nomination = () => <SectionBanner title="NOMINATION" />;
const ImportantDates = () => <SectionBanner title="IMPORTANT DATES" />;

const News = () => <SectionBanner title="NEWS" />;
const Gallery = () => <SectionBanner title="GALLERY" />;
const Publications = () => <SectionBanner title="PUBLICATIONS" />;

function App() {
  return (
    <Router>
      <LanguageProvider>
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
      </LanguageProvider>
    </Router>
  );
}

export default App;
