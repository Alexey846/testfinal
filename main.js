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
