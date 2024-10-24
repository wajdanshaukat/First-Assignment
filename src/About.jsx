import "./product.css";
import Price from "./Price";

function About({ title, idx }) {
  let Oldprice = ["12,495", "11,900", "1,599", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];
  let Description = [
    ["8000DPI", "5 programmable buttons"],
    ["Intuitive surface", "Designed for ipad pro"],
    ["Designed for ipad pro","Intuitive surface"],
    ["Wirless", "Optical orientation"]
  ];
  // let isDiscount = price > 30000;
  // let styles = { backgroundColor: isDiscount ? "green" : null};
  return (
    <div className="About">
      <h3>{title}</h3>
      <p>{Description[idx][0]}</p>
      <p>{Description[idx][1]}</p>
      <p>{Description[idx][2]}</p>
      <p>{Description[idx][3]}</p>
      <Price oldPrice={Oldprice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default About;
