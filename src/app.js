import "./style.css";

window.onload = () => {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let who = [
    "The dog",
    "My grandmother",
    "A 4geeker",
    "A pedestrian",
    "The neighbour"
  ];

  let action = ["ate", "stole", "broke", "threw", "forgot", "locked"];

  let what = [
    "my sunglasses",
    "my mobile phone",
    "the car",
    "my wallet",
    "my keys",
    "my bike"
  ];

  let when = [
    "while I was cooking",
    "when I was taking a shower",
    "while I was sleeping",
    "when I was gaming ",
    "when I was playing the guitar"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
}; 