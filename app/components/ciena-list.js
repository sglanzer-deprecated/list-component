import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        itemSelected: function(selectedItem) {
            this.get('model').forEach(function(item) {
                if (item !== selectedItem) {
                    item.set('_isSelected', false);
                }
            });
        }
    }
});
