import Penn from "./components/pen.jsx";
import { p1, p2 } from "./components/pen_lib.jsx";



export default function App() {
  return (
    <>
      <h1>PEN Store</h1>
      <div className="container">
        <Penn pen={p1} />
        <Penn pen={p2} />
        <Penn pen={p1} />
        <Penn pen={p2} />
      </div>
    </>
  );
}