// #Javascipt Execution Context(GEC)
// 1*  {} -> Global EC
// 2*  FUnction EC
// 3*  Eval EC (in mangoos)
/* execution process in JS 
1- Global execution- allocated by this
2- Creation (Memory) phase- like val1,2= undefined
   & addnum=defination & result1,2= undefined (this is first cycle)
3- Execution Phase- it consist new variable environ. exe. code which is futher divided
   into memory phase(values undefined) and exe. context(return total in GEC) */

// Call Stack (LIFO)

function one() {
   console.log("1");
   two();
}

function two() {
   console.log("2");
   three();
}

function three() {
   console.log("3");
}

one();
two();
three();