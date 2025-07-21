for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);  // var is function scoped
}
// Output: 3, 3, 3

// Fix using let
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);  //let is blocked scoped
}
// Output: 0, 1, 2
