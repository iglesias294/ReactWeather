// var names = ['Andrew', 'Julie', 'Jen'];
// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowfunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => (name) + '!';
//
// console.log(returnMe('Arturo'));
//
// var person = {
//   name: 'Arturo',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + 'says hi to ' + name)
//     });
//   }
// };

//person.greet();



var addStatement = (a, b) => {
  return a + b;
};
console.log(addStatement(1,7));

var addStatement2 = (a, b) => a + b;
console.log(addStatement2(99,1));
