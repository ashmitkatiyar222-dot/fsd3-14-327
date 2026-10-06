// import React from 'react'

// function fruits() {
//     const{fruitName, price, quantity, rating} = props.fruit;
//   return (
//     <>
//     <img src={props.fruit.picUrl} alt={props.fruit.bname} />
//     <h1>{props.fruit.bname}</h1>
//     <h2>${props.fruit.price.toFixed(2)}</h2>
//     <p>Quantity: {props.fruit.quantity}</p>
//     <p>Rating: {props.fruit.rating} stars</p>
//     </>   
//   )
// }

// export default fruits    

 const product=[
{title: "Apple", price: 120, quantity: 10, rating: 5},
{title: "Mango", price: 150, quantity: 10, rating: 4.5},
{title: "Orange", price: 80, quantity: 10, rating: 4},
{title: "Strawberry", price: 200, quantity: 10, rating: 4.5},
{title: "Banana", price: 60, quantity: 10, rating: 4}
];

const ListItems=product.map((item)=>{
    return <li>{item.title}</li>;
}
);




function Fruits() {
  return (
    <>
    <ul>{ListItems}</ul>
    </>
  )
}

export default Fruits 


