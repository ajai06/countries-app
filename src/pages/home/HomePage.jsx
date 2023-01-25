import React, { useEffect, useState } from "react";
import Country from "../../components/Country";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar/NavBar";

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (filter !== "All") {
      const filtered = countries.filter((country) => country.region === filter);
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(countries);
    }
  }, [filter]);

  function fetchCountries() {
    fetch(`https://restcountries.com/v2/all?fields=name,region,flag`)
      .then((response) => response.json())
      .then((res) => {
        setCountries(res);
        setFilteredCountries(res);
      });
  }

  return (
    <div className="container my-3 p-4">
      {filteredCountries.length > 0 ? (
        <>
          <NavBar setFilter={setFilter} filter={filter} />
          <div className="row mt-5">
            {filteredCountries.map((country) => (
              <div key={country.name} className="col-lg-6 col-sm-12">
                <Country country={country} />
              </div>
            ))}
          </div>
          <Footer />
        </>
      ) : (
        <div style={{ textAlign: "center" }}>Loading ....</div>
      )}
    </div>
  );
}

export default HomePage;
