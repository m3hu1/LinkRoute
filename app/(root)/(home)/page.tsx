"use client";

import React, { useState } from "react";
import RedirectTracker from "@/components/RedirectTracker";
import SearchForm from "@/components/SearchForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [redirectData, setRedirectData] = useState(null);

  const handleSearchFormSubmit = async (url: string) => {
    try {
      // const response = await fetch(`http://localhost:8000/check-redirects?url=${url}`);
      // const response = await fetch(
      //   `https://linkrouteapi-66be0d9c6a6f.herokuapp.com/check-redirects?url=${url}`
      // );
      const response = await fetch(
        `https://redirect-tracker-api.onrender.com/check-redirects?url=${url}`
      );
      const data = await response.json();
      setRedirectData(data);
    } catch (error) {
      console.error(error);
      setRedirectData(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col flex-grow">
        <section className="nav-padding w-full">
          <div className="glow-effect flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
            <h1 className="smXheading1 heading2 mb-6 text-center text-white">
              <span className="hidden sm:inline">
                Qaution - Redirect Tracker
              </span>
            </h1>
            <h1 className="smXheading1 heading2 mb-6 text-center text-white">
              <span className="sm:hidden">Qaution</span>
            </h1>
          </div>
          <SearchForm onSubmit={handleSearchFormSubmit} />
          <RedirectTracker redirectData={redirectData} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
