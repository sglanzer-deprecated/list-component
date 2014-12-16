import Ember from 'ember';

export default Ember.Component.extend({
    defaultLayout: function() {
        var templateName = this.get('customTemplate') || 'optional1';
        return this.container.lookup('template:components/' + templateName);
    }.property(),

    actions: {
        action1: function() {
            console.log('action1');
        },
        action2: function() {
            console.log('action2');
        }
    }
});
