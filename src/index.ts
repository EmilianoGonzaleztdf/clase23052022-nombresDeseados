let nArray: number = Number(prompt("insert the long of the array:"));
let arrayName = new Array(nArray);
let i: number;

for (i = 0; i < nArray; i++) {
  arrayName[i] = prompt("enter the desired name in the position: " + i);
}

for (i = 0; i < nArray; i++) {
  console.log(
    "the name you entered in the position " + i,
    "is: " + arrayName[i]
  );
}
