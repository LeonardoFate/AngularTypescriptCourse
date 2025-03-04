function addNumbers(a: number, b: number) {
    return a+b;

}

const addNumbersArrow = (a:number, b:number):string => {
    return `${a + b}`;
}

function multiplay(firstNumber: number, secondNumber?: number, base: number = 2) {
 return firstNumber * base;
}


const result = addNumbers(1, 2)
const result2:string = addNumbersArrow(1, 12)
const multiplayResult:number= multiplay(5)
console.log(result2)
console.log(result)
console.log(multiplayResult)

export {};
