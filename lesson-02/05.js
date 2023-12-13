let passport = {
  name: "Petr",
  surname: "Petrov",
};

let newPassport = {...passport};
newPassport.name = 'Ivan';

console.log(passport);
console.log(newPassport);
