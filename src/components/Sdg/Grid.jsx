import React from "react";
import FlippableCard from "./flippable-card";
import { FilterTabs } from "./constants";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap;
`;

const CardsGrid = () => {
  return (
    <Grid>
      {FilterTabs.map((tab) => (
        <FlippableCard
          key={tab.nameFront}
          nameFront={tab.nameFront}
          nameBack={tab.nameBack}
          icon={tab.icon}
        />
      ))}
    </Grid>
  );
};

export default CardsGrid;
