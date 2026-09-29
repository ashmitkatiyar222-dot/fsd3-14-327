const b1={
  picUrl:"https://miro.medium.com/v2/resize:fit:640/format:webp/1*caLp_vAWp09Zkuk_KB-DtA.png",
  bname:'book',
  

}

function Book() {
  return (
    <div>

      <img src="https://m.media-amazon.com/images/I/816HBXHJsaL._SY385_.jpg" alt="react_ki_book" />
      <h1>let us react</h1>
      <h2>Price :$765.00</h2>
      <h2>Rating 4.5/5</h2>
      <h3>quantity:5</h3>
    </div>
  )
}




export default function App() {
  return (
    <>
      <h1>hello react</h1>
      <Book />
      <Book />
      <Book />
    </>

  )
}