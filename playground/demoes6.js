/**
 * 1------------let,var,const
  let: không cho phép khai báo 1 biến có 2 giá trị trong cùng một khu vực
  Phạm vi hoạt động của let nhỏ hơn var:let chỉ được dùng trong 1 block '{}'


  2-------------for
  var chars = ["a","b"];

  --forOf--
  syntax:
  for(let item of chars){
  }


  --forIn
  syntax:
  for(let i in chars){
  }



  3----------------Arrow function--------------------
  const demo = (a,b) => a + b;
const demo2 = () =>{{ name:"nam" }};
function thường làm đổi ngữ cảnh của this,Arrow function giữ nguyễn ngữ cảnh cảu function



  4-------------Default parameters--------------------
   const Calcsum = (a=2,b=5) => {
  console.log(a+b);
};
Calcsum(1) ;Kết quả bằng 6,gán a=1;
Calcsum(); Kết quả bằng 7;

  

  5-------------Spear operator-------------
    ----1.Copy object-----------------
let student1 = {name:"Nam",age:21};
// let student2 = student1;

// let student2 = Object.assign({},student1);

let student2 ={...student1};
student2.name ="H";

console.log(studen1,student2);
  */
//------2.Copy array----------
// let num1 = [1,2,3];

// let num2 = [...num1,1,2,0,3];

// console.log(num1,num2);

//-----3.Nối array,nối object---------
// let num1 =[1,5];
// let num2 =[1,2,0,3];
// let num3 =[...num1,...num2];

// console.log(num3); 

  //6.----------------Rest parameter-----------------------
  // const Calcsum = (...num) => {
  //   let sum = 0;
  //   for(let num of nums){
  //     sum += num;
  //   }
  //   console.log(sum);
  // };
  // Calcsum(1,2,2,3,4,1);

  //7.----------------Object Literal (object chân phương)----------------
  // let keyName = "name";
  // let keyAge = "age";
  // let student = {[keyName]:"Nam", [keyAge]:20}

  //  console.log(student);

  //8.----------String template------------
  
  //9.----------Hide order function--------------

