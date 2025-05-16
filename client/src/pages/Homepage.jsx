import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Taglist from "../components/Taglist";
import EntryList from "../components/EntryList";

function Homepage() {
  return (
    <div className="@container">
      <Header />
      <div className="grid grid-cols-2">
        <Taglist />
        <EntryList />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
