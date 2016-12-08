
exports.seed = function(knex, Promise) {
  return knex('dogs').del()
    .then(function () {
      const dogs = [{
        name:'Spot',
        age: 2,
        breed: 'Lab'
      }, {
        name:'Fido',
        age: 3,
        breed: 'Corgi'
      }, {
        name:'Stella',
        age: 3,
        breed: 'Mutt'
      }];

      return knex('dogs').insert(dogs);
    });
};
