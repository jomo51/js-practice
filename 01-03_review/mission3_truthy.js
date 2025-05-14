const falsy_values = [false,4+'a',0,2,"","aaa",null,undefined,NaN]

for (let i = 0; i < falsy_values.length; i++) {
  console.log(`data of ${falsy_values[i]} \t\t:\t ${falsy_values[i] ? "truthy":"falsy"}`);
}