import React from "react";
import Table from "../Components/Table";
import Tr from "../Components/Tr";
import Td from "../Components/Td";

const StatTable = props => (
  <Table>
    <Tr>
      <Td title>Heading 1</Td>
      <Td title>Text 1</Td>
    </Tr>
    <Tr>
      <Td>Heading 2</Td>
      <Td>Text 2</Td>
    </Tr>
    <Tr>
      <Td>Heading 3</Td>
      <Td>Text 3</Td>
    </Tr>
  </Table>
);

export default StatTable;
