export default function Price({ oldPrice, newPrice }) {

  return (
    <div style ={{backgroundColor: "#e0c367", height : "33px",width: "230px", borderBottomLeftRadius: "14px", borderBottomRightRadius: "14px"}}>
      <span style={{textDecoration: "line-through"}}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;
      <span style={{ fontWeight: "bold" }}>{newPrice}</span>
    </div>
  );
}
