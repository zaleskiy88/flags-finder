import { useState, useEffect } from "react";
import {
  DetailsImg,
  ListGroup,
  DetailsTitle,
  DescriptionItem,
  BordersTitle,
} from "components/index";

import { fetchCountryByCodes } from "api/fetchCountriesByCodes";

export const DetailsCard = ({ countryData }) => {
  //destructuring
  const {
    population,
    region,
    subregion,
    flags = {},
    name = {},
    currencies = {},
    languages = {},
    borders = [],
    capital = [],
    tld = [],
  } = countryData;

  const [borderCountries, setBorderCountries] = useState([]);

  //getting native name
  const nativeName = Object.values(name.nativeName)[0];

  useEffect(() => {
    const getBorders = async () => {
      try {
        const res = await fetchCountryByCodes(borders.join(","));
        setBorderCountries(res);
      } catch (error) {
        console.error("Error fetching border countries:", error);
      }
    };
    getBorders();
  }, [borders]);

  return (
    <div>
      <DetailsImg src={flags.svg} alt={flags.alt} />
      <DetailsTitle>{name.official}</DetailsTitle>
      <ListGroup>
        <ul>
          <DescriptionItem>
            <b>Native Name: </b>
            {nativeName.common}
          </DescriptionItem>
          <DescriptionItem>
            <b>Population: </b>
            {population.toLocaleString()}
          </DescriptionItem>
          <DescriptionItem>
            <b>Region: </b>
            {region}
          </DescriptionItem>
          <DescriptionItem>
            <b>Sub Region: </b>
            {subregion}
          </DescriptionItem>
          <DescriptionItem>
            <b>Capital: </b>
            {capital}
          </DescriptionItem>
        </ul>

        <ul>
          <DescriptionItem>
            <b>Top Level Domain: </b>
            {tld}
          </DescriptionItem>
          <DescriptionItem>
            <b>Currencies: </b>
            {Object.keys(currencies).map((currencyCode) => (
              <span key={currencyCode}>
                {currencies[currencyCode].name} ({currencyCode})
              </span>
            ))}
          </DescriptionItem>
          <DescriptionItem>
            <b>Languages: </b>
            {Object.values(languages).join(", ")}
          </DescriptionItem>
        </ul>

        <BordersTitle>Border Countries: </BordersTitle>
        {borders.length > 0 ? (
          <ul>
            {borderCountries.map((country) => (
              <li key={country.name.official}>{country.name.common}</li>
            ))}
          </ul>
        ) : (
          <p>This country has no border countries</p>
        )}
      </ListGroup>
    </div>
  );
};
