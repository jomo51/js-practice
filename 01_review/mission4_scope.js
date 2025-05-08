testScope = () => {
  if (true) {
    var a = "varです";
    let b = "letです";
    const c = "constです";
  }
  console.log("a:",a);
  console.log("b:",b);
  console.log("c:",c);
}

testScope();