// object
/**
 * property
 * method
 * this
 * typeof
 */

let obj = {
  // property
  property1: "string",
  property2: 30,
  property3: true,
  // method
  method1() {
    console.log("method1");
  },
  method2(input) {
    console.log(input);
    },
    this_method3(property2) {
      console.log(this.property2);
  }
};

// properties
console.log(obj.property1)
console.log(obj["property2"])  
// 沒有input
obj.method1()
// 有input
obj.method2("hello");

// this
// this 就是指該 obj
obj.property2 = 35;
obj.this_method3()