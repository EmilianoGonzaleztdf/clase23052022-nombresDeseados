let nArray: number = Number(prompt("ingrese la cantidad de nombres a cargar:"));
let arrayName: string[] = new Array(nArray);
let i: number;

for (i = 0; i < nArray; i++) {
  arrayName[i] = prompt(
    "ingrese el nombre que desea colocar ena la posicion: " + i
  );
}

for (i = 0; i < nArray; i++) {
  console.log(
    "el nommbre que usted ingreso en la posicion " + i,
    "es: " + arrayName[i]
  );
}
