let passport = {
  name: "Petr",
  surname: "Petrov",
};

let passport1 = {...passport};
passport1.name = 'Ivan';

console.log(passport);
console.log(passport1);
