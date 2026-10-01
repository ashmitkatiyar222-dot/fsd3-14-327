export default function Penn(props) {
  const {bname, price, company, rating} = props.pen;
  return (
    <div>
      <img src={props.pen.picUrl} alt={props.pen.bname} />

      {/* <h1>Let Us React</h1> */}
      <h1>company: {props.pen.company}</h1>

      <h2>Price: ${props.pen.price}</h2>
      <h2>Rating: {props.pen.rating}</h2>
      
      <button className="lal_button" style={{color:'red', margin:'15px'}}>Buy Now</button>
    </div>
  );
}