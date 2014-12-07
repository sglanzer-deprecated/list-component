import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return {
            tasks: [
                Em.Object.create({id: 1, name: "Task 1"}),
                Em.Object.create({id: 2, name: "Task 2"})
            ]
        }
    }
});
