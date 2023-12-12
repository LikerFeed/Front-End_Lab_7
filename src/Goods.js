import GoodsCard from "./GoodsCard";

import apple from "./images/Apple.jpg";
import pear from "./images/Pear.jpg";
import grape from "./images/Grape.jpg";
import peach from "./images/Peach.jpg";
import banana from "./images/Banana.jpg";
import watermelon from "./images/Watermelon.jpg";

const Goods = () => {
  const goods = [
    {
      name: "Apple",
      price: 15,
      image: apple,
    },
    {
      name: "Pear",
      price: 20,
      image: pear,
    },
    {
      name: "Grape",
      price: 25,
      image: grape,
    },
    {
      name: "Peach",
      price: 18,
      image: peach,
    },
    {
      name: "Banana",
      price: 30,
      image: banana,
    },
    {
      name: "Watermelon",
      price: 40,
      image: watermelon,
    },
  ];

  return (
    <div className="goods">
      {goods.map((el) => (
        <GoodsCard
          name={el.name}
          price={el.price}
          image={el.image}
          key={el.name}
        />
      ))}
    </div>
  );
};

export default Goods;
