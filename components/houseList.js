import HouseRow from "./houseRow";

const houses = [
  {
    id: 1,
    address: "123 Main Street, Springfield",
    country: "USA",
    price: "$350,000",
  },
  {
    id: 2,
    address: "456 Elm Street, London",
    country: "UK",
    price: "£450,000",
  },
  {
    id: 3,
    address: "789 Maple Avenue, Toronto",
    country: "Canada",
    price: "CAD 600,000",
  },
];

const HouseList = () => {
  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Hopuses curremtly on the market
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
    </>
  );
};

export default HouseList;
