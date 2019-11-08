import React from "react";
import Table from "../Components/Table";
import Tr from "../Components/Tr";
import Td from "../Components/Td";
import Arrow from "../Components/Arrow";

const fragmentStyles = {
  display: "flex",
  alignItems: "center"
};

const StatTable = ({ weapons, properties, stats, nextJob, prevJob }) => (
  <x style={fragmentStyles}>
    <Arrow prevJob={prevJob} />
    <Table>
      <Tr>
        <Td heading>Weapon(s) Used</Td>
        <Td>{weapons}</Td>
      </Tr>
      <Tr>
        <Td heading>Properties</Td>
        <Td>{properties}</Td>
      </Tr>
      <Tr>
        <Td heading>Major Stats</Td>
        <Td>{stats}</Td>
      </Tr>
    </Table>
    <Arrow right nextJob={nextJob} />
  </x>
);

export default StatTable;
