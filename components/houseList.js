import { useState } from "react";
import HouseRow from "./houseRow";

const housesArray = [
  {
    id: 1,
    address: "123 Main Street, Springfield",
    country: "USA",
    price: 350000,
  },
  {
    id: 2,
    address: "456 Elm Street, London",
    country: "UK",
    price: 450000,
  },
];

const HouseList = () => {
  const [houses, setHouses] = useState(housesArray);

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: "789 Maple Avenue, Toronto",
        country: "Canada",
        price: 600000,
      },
    ]);
  };
  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Hopuses currently on the market
        </h5>
      </div>
      <table>
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            <HouseRow key={h.id} house={h} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button>
    </>
  );
};

export default HouseList;
