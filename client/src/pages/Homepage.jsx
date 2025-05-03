import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Taglist from "../components/Taglist";
import EntryList from "../components/EntryList";

function Homepage() {
  return (
    <div className="@container w-full">
      <Header className="header" text="Meltdown Tracker" />
      <div className="flex justify-center items-center gap-10">
        <Taglist />
        <EntryList />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
