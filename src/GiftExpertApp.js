import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

const GiftExpertApp = () => {
  // const categories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(["Dragon Ball"]);

  // const handleAdd = (e) => {
  //   setCategories([...categories, "HunterXHunter"]);
  // };
  return (
    <>
      <h2>Hola</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
