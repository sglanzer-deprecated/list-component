import Ember from 'ember';

export default Ember.Component.extend({
    // Style bindings
    classNameBindings: ['model._isSelected:ciena-list__item--selected'],

    // Actions in a yield target the original controller,
    // but we want to target the list instead, so change
    // the target to the wrapping list component
    targetObject: Ember.computed.alias('parentView'),

    // Actions
    itemSelected: 'itemSelected',
    click: function() {
        var model = this.get('model');
        model.set('_isSelected', !model.get('_isSelected'));
        this.sendAction('itemSelected', model);
    }
});
