const sayNameFunc = function(obj){
    obj.sayName = function(){
        return `Hello my name is ${this.name}`;
    };
};

const me = {name: "Lori"};
const you = {name: "Catalina"}

sayNameFunc(me);
sayNameFunc(you);

me.sayName();
you.sayName();

// const sayNameFunc = obj => {
//     obj.sayName = function(){
//          console.log(`Hello my name is ${this.name}`);
//     };
// };

// const me = {name: "Lori"};
// const you = {name: "Catalina"}

// sayNameFunc(me);
// sayNameFunc(you);

// me.sayName();
// you.sayName();

// TK example
// const sayNameFunc = obj => {
//     obj.sayName = function() {
//       console.log(`Hello my name is ${this.name}`);
//       console.log(this);
//     };
//   };
//   const me = { name: 'Ryan' };
//   const you = { name: 'Freddy' };
//   sayNameFunc(me);
//   sayNameFunc(you);

// me.sayName();
// you.sayName();