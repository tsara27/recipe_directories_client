import Ember from 'ember';

export default Ember.Controller.extend({
  modalIsOpen: false,
  actions: {
    openModal: function() {
      this.set('modalIsOpen', true);
    },
    closeModal: function() {
      this.set('modalIsOpen', false);
    },
    addBook: function(){
      var book = this.store.createRecord('recipe', {
        title: this.get('bookTitle'),
        description: this.get('bookDescription')
      });
      book.save();
    }
  }
});
