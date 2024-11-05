import useHouses from "../hooks/useHouses";
import HouseRow from "./houseRow";

const HouseList = ({ selectHouse }) => {
  const { houses, setHouses } = useHouses();

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
            <HouseRow key={h.id} house={h} selectHouse={selectHouse} />
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
