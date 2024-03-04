import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { fetchCountryByName } from "api/index";
import { BackBtn, DetailsCard, DetailsPageSection } from "components/index";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
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

  return (
    <DetailsPageSection>
      <BackBtn onClick={() => navigate(-1)}>
        <IoArrowBack />
        Back
      </BackBtn>

      {countryData && <DetailsCard countryData={countryData} />}
    </DetailsPageSection>
  );
};
