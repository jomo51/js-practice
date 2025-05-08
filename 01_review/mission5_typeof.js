const obj_array = [42,"JavaScript",true,undefined,null,[1,2,3],{name:"たろう"},() => {}]
const Get_object_type = (obj) => {
  for (let i = 0; i < obj.length; i++) {
    const value = obj[i];
    const value_type = typeof obj[i];
    // console.log(`${obj[i]} -> ${typeof obj[i]}`);
    console.log(value,'->',value_type);
  }
}

Get_object_type(obj_array);