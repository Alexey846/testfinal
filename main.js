"use strict"
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
let clone = {};
for (let key in user) {

  clone[key] = user[key]

}
console.log(clone);
console.log(user.sizes == clone.sizes);
user.sizes.height = "123"
console.log(clone);
console.log(1234342);
