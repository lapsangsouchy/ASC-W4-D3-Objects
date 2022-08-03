let hector = {
  fullName: 'Hector Egbuson',
  age: 15,
  favFood: 'Pizza',
  introduce: function () {
    console.log(
      `Hey! My name is ${this.fullName}, I'm ${this.age} and my favorite food is ONLY ${this.favFood}. :)`
    );
  },
};

let louis = {
  fullName: 'Louis Angel Profit',
  age: 17,
  favFoods: ['flan', 'sandwiches', 'cake', 'mashed potato', 'etc'],
  yearsFromNow: function (years) {
    const ageWithYears = this.age + years;
    console.log(
      `Right now, I'm ${this.age}, but in ${years} years I'll be ${ageWithYears}`
    );
  },
};

louis.yearsFromNow(30);
