const b1={
  picUrl:"https://miro.medium.com/v2/resize:fit:640/format:webp/1*caLp_vAWp09Zkuk_KB-DtA.png",
  bname:'book',
  price :$11,
  quantity: 5,
  rating :5.0

  

};
const b2={
  picUrl:"https://www.cb-india.com/images/detailed/74/9789368082392_h2n5-4p.png",
  bname:'book',
  price :$11,
  quantity: 5,
  rating :5.0

  

};

function Book(props) {
  return (
    <div>

      <img src={props.book.picUrl} alt={props.book.bname} />
      <h1>let us react</h1>
      <h2>Price:{props.book.price}</h2>
      <h2>rating:{props.book.rating}</h2>
      <h3>quantity:{props.book.quantity}</h3>
    </div>
  )
}




export default function App() {
  return (
    <>
      <h1>hello react</h1>
      <Book book={b1} />
      <Book book={b2}/>
      <Book book={b1}/>
      <Book book={b2}/>
    </>

  )
}