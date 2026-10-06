#frontend-backend
1 create project folder(lab7)
create frontend backend folder with in project folder
open terminal and split it in two 
open frontend in to left side
open backend in to right side
in backend 
    a.initialize backend by `npm init -y
    install nodemon by `npm i nodemon`
    open package.json from backend update `type to module` and script 
    create app.js

 in frontend

 npm create vite@latest
 enter. as project name
 select framework as react
 select variant as javascript from arrow keys
 select eslist for linting from arrow keys
 select install and start the frontend 


 ## components

 simple js function return html directory
 it must  starts with capital letter
 it should be treated as html tag


object destructure(const ```{bname, price, quantity, rating}``` = props.book;)
does not depends on order,if property is not available then it is initialized with null \
any components include style
1. externalC CSS (create class in index.css and used in component)
2. Internal CSS(create property as a object like ```<button className="lal_button" style={{color:'red', margin:'15px'}}>Buy Now</button> ```then apply with style attribute and pass the object )
3. Inline CSS (in this method we use two curly bracket with style attribut all the CSS property must be single word for example ```text-align``` become textAlign)

APP.JSX SHOULD BE MINIMUM CODE 