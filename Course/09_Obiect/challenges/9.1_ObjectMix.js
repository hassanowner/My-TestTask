/******** MINI FINAL TASK  ********/

let key = "premium";

let base = {
  active: true,
  isActive(){return`active: ${this.active}`}
}; // active status 


let user = {
  name: "Hassan",
  stats: { level: 7, score: 1200 },
  summary() { return `${this.name}, Level ${this.stats.level}`; }
}; // name + status+ summary(as short function)


user[key] = true;


let config = {
  lang: "EN",
  info() { return `Lang: ${this.lang}`; }
}; // function return the language 


let status = Object.create(base); // a new object inherits all properties and methods from base.
status.active = false  // update active value 


let final = Object.assign(Object.create(base), user, config, status);
//By using Object.create(base), final becomes completely independent from status,
//while still maintaining inheritance from base.


final.report = function () { //add function to final
  return `
  User:${this.name}
  Level:${this.stats.level} 
  Premium:${this[key]}
  Active:${this.active}  `;
};

// TESTS
console.log(final.summary());
console.log(final.info());
console.log(final.isActive());
console.log(final.report());
