import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { fetchCountryByName } from "api/index";
import { BackBtn } from "components/index";

export const Details = () => {
  const { name } = useParams();
  const [countryData, setCountryData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const countryDetails = await fetchCountryByName(name);

      setCountryData(countryDetails);
    };
    fetchData();
  }, [name]);
  console.log(countryData);
  return (
    <div>
      {countryData && (
        <>
          <Link to="/">
            <BackBtn>
              <IoArrowBack />
              Back
            </BackBtn>
          </Link>
          <img
            src={countryData.flags.svg}
            width="320"
            alt={countryData.flags.alt}
          />
          <h2>{countryData.name.official}</h2>
          <div>
            <ul>
              <li>
                <b>Native name: </b>
                {}
              </li>
              <li>
                <b>Population: </b>
                {countryData.population}
              </li>
              <li>
                <b>Region: </b>
                {countryData.region}
              </li>
              <li>
                <b>Sub Region: </b>
                {countryData.subregion}
              </li>
              <li>
                <b>Capital: </b>
                {countryData.capital}
              </li>
            </ul>

            <ul>
              <li>
                <b>Top Level Domain: </b>
                {countryData.tld}
              </li>
              <li>
                <b>Currencies: </b>
                {Object.keys(countryData.currencies).map((currencyCode) => (
                  <span key={currencyCode}>
                    {countryData.currencies[currencyCode].name} ({currencyCode})
                  </span>
                ))}
              </li>
              <li>
                <b>Languages: </b>
                {Object.values(countryData.languages).join(", ")}
              </li>
            </ul>
            <h3>Border Countries: </h3>
            <ul>
              {countryData.borders.map((country) => (
                <li key={country}>{country}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

//name.official
//name.nativeNmae?
//population Number
//region ""
//subregion ""
//capital[0]
//tld[0]
//currencies{}
//languages[]
//borders[]
