import About from "./About";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",

  }
  return (
    <div style={styles}>
      <About title= "Logitech MX Master 3s" idx ={0} />
      <About title= "Apple Pencil (2nd gen)" idx = {1} />
      <About title= "Zebronics Zeb-N20" idx = {2}/>
      <About title= "Petronics Toad 23" idx = {3}/>
    </div>
  );
}
export default ProductTab;
