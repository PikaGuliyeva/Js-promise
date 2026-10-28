// // Task 1

// let number = 7;
// function sehrliQutuAc() {
//   return new Promise((resolve, reject) => {
//     if (number === 7) {
//       resolve("Təbriklər, sehrli rəqəmi tapdın! ✨");
//     } else {
//       reject("Təəssüf ki, səhv rəqəm! ❌");
//     }
//   });
// }

// sehrliQutuAc()
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// // Task 2

// // Menim yazdigim kod)
// // let x = +prompt("0-dan 100-e qeder reqem daxil edin")
// // let score = x;
// // function balYoxla(bal) {
// //     return new Promise((resolve, reject)=>{
// //     if(0<x<100) {
// //         reject("Yanlış bal daxil edildi")
// //     }else if (x>=50){
// //         resolve("İmtahandan keçdin")
// //     }else{
// //         reject("Kəsildin! ")
// //     }
// // });
// // }

// // balYoxla()
// // .then((response)=>console.log(response))
// // .catch((error)=>console.log(error));

// // AI-nin duzeltdiyi kodum
// let x = +prompt("0-dan 100-ə qədər bal daxil edin:");

// async function balYoxla(bal) {
//     try {
//         if (bal < 0 || bal > 100) {
//             throw new Error("Yanlış bal daxil edildi!");
//         }

//         if (bal >= 50) {
//             return "İmtahandan keçdin! 🎉";
//         } else {
//             return "Kəsildin! 📚";
//         }
//     } catch (error) {
//         console.log("Xəta baş verdi: " + error.message);
//     }
// }

// balYoxla(x).then((response) => {
//     if (response) {
//         console.log(response);
//     }
// });

// Task 3

// Menim yazdigim kod
// function sifarishVer(metbexHazirdirmi){
//     return new Promise ((resolve, reject)=>{
//         if(metbexHazirdirmi){
//             resolve("Sifarişiniz hazırdır, nuş olsun! ")
//         }else{
//             reject("Üzr istəyirik, mətbəx bağlandı! ")
//         }
//     })
// }
// sifarishVer()
// .then((response) => console.log(response))
// .catch((error) => console.log(error));

// async function anaProqram() {
//     try{
//         const response = await sifarishVer();
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// // // AI-nin duzeltdiyi kodum
// function sifarisVer(metbexHazirdirmi) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (metbexHazirdirmi) {
//                 resolve("Sifarişiniz hazırdır, nuş olsun! 🍕");
//             } else {
//                 reject("Üzr istəyirik, mətbəx bağlandı! 🍳");
//             }
//         }, 2000);
//     });
// }

// async function anaProqram() {
//     try {
//         const cavab = await sifarisVer(true);
//         console.log(cavab);
//     } catch (error) {
//         console.log(error);
//     }
// }

// anaProqram();

// Task 4

// let qardash1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Əli finişə çatdı!");
//     }, 2000);
// });

// let qardash2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Vəli finişə çatdı!");
//     }, 1000);
// });

// let qardash3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Pirməmməd finişə çatdı!");
//     }, 3000);
// });

// Promise.all([qardash1, qardash2, qardash3])
//     .then((netice) => {
//         console.log(netice);
//     });


// Task 5

// let qardash1 = new Promise((resolve,reject)=>{
//     resolve("A qazandi")
// });
// let qardash2 = new Promise((resolve,reject)=>{
//     reject("B qazanmadi")
// });
// let qardash3 = new Promise((resolve,reject)=>{
//     resolve("C qazandi")
// });
// let qardash4 = new Promise((resolve,reject)=>{
//     resolve("D qazandi")
// });
// Promise.all([qardash1, qardash2, qardash3, qardash4])
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));