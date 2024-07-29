

// let arrayy = ["Ali","Qabil", "Qalib", "Behlul", "Malik", "Kamil"];


// task 1
// arrow functiondan isdifade ederek ele bir function itifade edinki parametr olaraq array ve silinecek datani
// gonderdiyinizde o function hemen datani silsin ve consolede silindiyi barede melumat cixsin eger data yoxdursa
// oda ekranda cap olunsunki  data movcud deyil. meselen deleteFunc(arrayy,"Ali")


// Her value-dan 1 defe olarsa meselenin helli

// 1-ci hell

// const deletedFunc = (arr,item) => {
//     for (let index in arr) {
//         if (arr[index] == item) {
//             arr.splice(index, 1);
//             console.log(`${item} has been deleted`);
//         }
//         else {
//             console.log ( `${item} is not available`);
//          }
            
//       }
//     }

// deletedFunc(arrayy, "Ali");
// deletedFunc(arrayy, "Elshan");



// 2-ci hell

// const deletedFunc = (arr, item) => {
//     let index = arr.indexOf(item);
//     if (index !== -1) {
//         arr.splice(index, 1);
//         console.log(`${item} has been deleted`);
//     } else {
//         console.log(`${item} is not available`);
//     }
// }

// deletedFunc(arrayy, "Ali");
// deletedFunc(arrayy, "Elshan");



// Eger eyni value-dan bir nece defe olarsa meselenin helli


// 1-ci hell

// let arrayy = ["Ali","Qabil", "Qalib", "Behlul", "Malik", "Kamil"];

// const deleteValue = (arr, value) => {
//     let result = [];
//     for (let index in arr) {
//         if (arr[index] !== value) {
//             result.push(arr[index]);
//         }

//         if (arr.includes(value) == false) {
//             console.log(`${value} is not available`);
//         }
//     }

//     return result;
// }


// let newArray = deleteValue(array, "Ali");
// console.log(newArray);


//2-ci hell

// let arrayy = ["Ali","Qabil", "Qalib", "Behlul", "Malik", "Kamil"];

// const deleteFunc = (arr,delItem) => {
//     let result = false;

//     if (delItem == null || delItem == undefined) {
//         console.log("including value is null or undefined");
//     } else {
//         for ( let index in arr) {
//             if (arr[index] !== delItem) {
//                 result = true;
//             }

//             var del = arr.indexOf(delItem)
//             if (del >= 0) {
//                 arr.splice(del,1)
//                 console.log(`${delItem} has been deleted`)
//             }
//         }
//         if (result) {
//             console.log (`${delItem} is not available`)
//         }
       
//     }
// }

// deleteFunc(arrayy,"Ali")
// deleteFunc(arrayy, "Alis")





// task 2
//  bunun eynisini elave etmek ucunde isdifade edin yani arrow functiondan isdifade ederek array ve yeni deyeri
// parametr olaraq vererek arraya elave olunsun ve  elave olunanda logda elave oldugu barede melumat cixsin
// arraya data elave edende eyni elementin tekrar elave olundugunda logda bu datanin artiq var oldugunu  bildirsin
// meselen addedFunc(arrayy,10)


// let num = [1,2,3,4,5,6,7];

// const addedFunc = (arr,value) => {
//     for (let index in arr) {
//         if (!arr.includes(value) ) {
//             arr.push(value);
//             console.log(`${value} added`);
//             return;
//         }

//         else {
//             console.log(`${value}  is already in the array`);
//             return;
//         }

//     }

// }


// addedFunc(num,9);
// console.log(num);

// addedFunc(num,5);



// QEYD : her iki functionda for in den isdifade etmeyiniz teleb olunur ! ve bos deyer ( bosluq veya null olaraq)
// deyerin gonderilmesinide nezere alin yeni null ve bos deyer undefined gonderildiyinde logda gonderilen deyerin bos
// olundugunu bildirilsin



//Task3


// verilmis arraye uygunn olaraq arrow functiondan isdifade ederek dinamik olaraq
// bir array ve bir simvol("herf") qebul eden funksiya yaradin
// gonderilen herfle uygun olaraq o herfle baslayan adlari secib 
// yeni arrayde ekrana cap elesin
// qeyd: for of dan istifade ede bilersiz .
// basa dusmediyiniz hisse varsa sorusun ugurlar

// let arrayy = ["Ali", "Ali", "Qabil", "Qalib", "Behlul", "Ali", "Malik", "Kamil"];



// const letterFunc = (arr,letter) => {
//     let result = [];
//      for ( let name of arr) {
//         if (name[0] == letter) {
//             result.push(name);

//         }
//      }

//      return result;

// };


// console.log(letterFunc(arrayy, "A"));

