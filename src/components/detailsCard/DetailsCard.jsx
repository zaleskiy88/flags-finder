import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getNativeName } from "utils/index";
import {
  DetailsImg,
  ListGroup,
  DetailsTitle,
  DescriptionItem,
  BordersTitle,
  DetailsArticle,
  Meta,
  BordersList,
  BordersItem,
} from "components/index";
import { fetchCountryByCodes } from "api/fetchCountriesByCodes";

export const DetailsCard = ({ countryData }) => {
  const [borderCountries, setBorderCountries] = useState([]);
  const navigate = useNavigate();
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
  //getting native name
  const nativeName = getNativeName(name);

  const navigateTo = (country) => {
    navigate(`/country/${country.name.common}`);
  };

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
    <>
      <DetailsArticle>
        <DetailsImg src={flags.svg} alt={flags.alt} />
        <div style={{ padding: "30px 0" }}>
          <DetailsTitle>{name.official}</DetailsTitle>

          <ListGroup>
            <ul>
              <DescriptionItem>
                <b>Native Name: </b>
                {nativeName?.common}
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
          </ListGroup>

          <Meta>
            <BordersTitle>Border Countries: </BordersTitle>
            {borders.length > 0 ? (
              <BordersList>
                {borderCountries.map((country) => (
                  <BordersItem
                    key={country.name.official}
                    onClick={() => navigateTo(country)}
                  >
                    {country.name.common}
                  </BordersItem>
                ))}
              </BordersList>
            ) : (
              <p>This country has no border countries</p>
            )}
          </Meta>
        </div>
      </DetailsArticle>
    </>
  );
};
