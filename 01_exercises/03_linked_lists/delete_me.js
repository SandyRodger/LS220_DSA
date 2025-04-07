let myMap = new Map();

myMap.set(1, 0);
myMap.set(2, 1);
myMap.set(3, 2);

for (i = 3; i <= myMap.size; i++) {
  // myMap.set(i, myMap.get(i) + 10);
  // console.log(myMap.get(i));
  if (myMap.has(i)) {
    console.log(myMap.get(i))
  }
}