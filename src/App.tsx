import React from "react";
import "./App.css";
import { Header, Footer, SectionBanner } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context";
import {
  AboutThePrize,
  Awards,
  TheOrganiser,
  ThePatron,
  ContactUs,
  Home,
} from "./pages";

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
