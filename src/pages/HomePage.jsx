import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  CountriesSection,
  CountryCard,
  Pagination,
} from "components/index";
import { ThreeDots } from "react-loader-spinner";
import { chunkArray } from "utils/index";
import { fetchAllCountries } from "api/index";

export const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [filterredCountries, setFilterredCountries] = useState(countries);
  const [pageIndex, setPageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

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
  const fetchData = async () => {
    setLoading(true);
    try {
      const allCountriesData = await fetchAllCountries().then((data) =>
        data.sort((a, b) => a.name.official.localeCompare(b.name.official))
      );
      setCountries(allCountriesData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (countries.length === 0) {
      setPageIndex(0);
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleSearch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);

  return (
    <>
      {loading ? (
        <ThreeDots
          visible={true}
          height="50vh"
          width="150"
          color="var(--colors-active)"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ display: "flex", justifyContent: "center" }}
          wrapperClass="loader-wrapper"
        />
      ) : (
        <>
          <Search onSearch={handleSearch} />
          {filterredCountries.length > 0 ? (
            <>
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

              <Pagination
                index={pageIndex}
                setIndex={setPageIndex}
                length={filterredCountries.length}
              />
            </>
          ) : (
            <p>Sorry there is no match on your search</p>
          )}
        </>
      )}
    </>
  );
};
