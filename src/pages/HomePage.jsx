import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, CountriesSection, CountryCard } from "components/index";
import { fetchAllCountries } from "api/index";

export const HomePage = ({ countries, setCountries }) => {
  const [filterredCountries, setFilterredCountries] = useState(countries);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) =>
        c.region.toLowerCase().includes(region.toLowerCase())
      );
    }

    if (search) {
      data = data.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterredCountries(data);
  };

  useEffect(() => {
    if (countries.length === 0) {
      const fetchData = async () => {
        const allCountriesData = await fetchAllCountries();
        setCountries(allCountriesData);
        setFilterredCountries(allCountriesData);
      };
      fetchData();
    }
  }, [countries, setCountries]);

  return (
    <>
      <Search onSearch={handleSearch} />
      <CountriesSection>
        {filterredCountries.map((country) => {
          const countryInfo = {
            img: country.flags.png,
            countryName: country.name.official,
            info: [
              {
                title: "Population",
                description: country.population.toLocaleString(),
              },
              {
                title: "Region",
                description: country.region,
              },
              {
                title: "Capital",
                description: country.capital,
              },
            ],
          };
          return (
            <Link
              to={`country/${country.name.common}`}
              key={country.name.official}
            >
              <CountryCard {...countryInfo} />
            </Link>
          );
        })}
      </CountriesSection>
    </>
  );
};
