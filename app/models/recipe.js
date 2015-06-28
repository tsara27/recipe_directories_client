import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string')
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Chocolate Book",
      description: "Chocolate Recipes"
    },
    {
      id: 2,
      title: "Rice Book",
      description: "Rice Recipes"
    },
    {
      id: 3,
      title: "Meat Book",
      description: "Meat Recipes"
    }
  ]
});
