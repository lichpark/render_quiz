import FruitButton from "./FruitButton";

const catList = [
  { cat: "😺", setCat: "😻" },
  { cat: "😺", setCat: "😹" },
  { cat: "😺", setCat: "😿" },
];

const Fruits = () => {
  return (
    <div>
      {catList.map((v) => (
        <FruitButton {...v} />
      ))}
    </div>
  );
};

export default Fruits;
