export default function Book(props) {
  const {bname, price, quantity, rating} = props.book;
  return (
    <div>
      <img src={props.book.picUrl} alt={props.book.bname} />

      <h1>Let Us React</h1>

      <h2>Price: ${props.book.price}</h2>
      <h2>Rating: {props.book.rating}</h2>
      <h3>Quantity: {props.book.quantity}</h3>
      <button className="lal_button" style={{color:'red', margin:'15px'}}>Buy Now</button>
    </div>
  );
}