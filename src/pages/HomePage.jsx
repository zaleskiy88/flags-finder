import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  CountriesSection,
  CountryCard,
  Pagination,
} from "components/index";
import { chunkArray } from "utils/index";
import { fetchAllCountries } from "api/index";

export const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [filterredCountries, setFilterredCountries] = useState(countries);
  const [pageIndex, setPageIndex] = useState(0);

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
    const chunkedData = chunkArray(data, 20);
    setFilterredCountries(chunkedData);
    setPageIndex(0);
  };

  useEffect(() => {
    if (countries.length === 0) {
      const fetchData = async () => {
        const allCountriesData = await fetchAllCountries();
        setCountries(allCountriesData);
      };
      fetchData();
      setPageIndex(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);

  return (
    <>
      <Search onSearch={handleSearch} />
      <Pagination
        index={pageIndex}
        setIndex={setPageIndex}
        length={filterredCountries.length}
      />

      <CountriesSection>
        {filterredCountries[pageIndex]?.map((country) => {
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
