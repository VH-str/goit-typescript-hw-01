function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const object1 = { name: "Alice", age: 25 };
const object2 = { job: "Engineer", city: "New York" };

const mergedObject = merge(object1, object2);
console.log(mergedObject);
