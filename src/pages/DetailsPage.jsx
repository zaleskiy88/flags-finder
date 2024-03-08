import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { ThreeDots } from "react-loader-spinner";
import { fetchCountryByName } from "api/index";
import { BackBtn, DetailsCard, DetailsPageSection } from "components/index";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [countryData, setCountryData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async (name) => {
    setLoading(true);
    try {
      const countryDetails = await fetchCountryByName(name);
      setCountryData(countryDetails);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(name);
  }, [name]);

  return (
    <DetailsPageSection>
      <BackBtn onClick={() => navigate(-1)}>
        <IoArrowBack />
        Back
      </BackBtn>

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
        countryData && <DetailsCard countryData={countryData} />
      )}
    </DetailsPageSection>
  );
};
