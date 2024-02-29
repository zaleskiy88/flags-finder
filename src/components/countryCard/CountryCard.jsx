import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardList,
  CardListItem,
} from "components/index";

export const CountryCard = ({ img, countryName, info = [], onClick }) => {
  return (
    <Card onClick={onClick}>
      <CardImg src={img} />
      <CardBody>
        <CardTitle>{countryName}</CardTitle>

        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}: </b>
              {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Card>
  );
};
