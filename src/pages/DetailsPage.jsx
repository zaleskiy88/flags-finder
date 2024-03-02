import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { fetchCountryByName } from "api/index";
import { BackBtn, DetailsCard, DetailsPageWrapper } from "components/index";

export const Details = () => {
  const { name } = useParams();
  const [countryData, setCountryData] = useState();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const countryDetails = await fetchCountryByName(name);

        setCountryData(countryDetails);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [name]);

  //console.log(countryData);
  return (
    <DetailsPageWrapper>
      <Link to="/">
        <BackBtn>
          <IoArrowBack />
          Back
        </BackBtn>
      </Link>

      {countryData && <DetailsCard countryData={countryData} />}
    </DetailsPageWrapper>
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
