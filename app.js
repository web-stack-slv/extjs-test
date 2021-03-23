Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Library',
    appFolder: 'app',
    controllers: ['Books'],
     
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'booklist'
            }
        });
    }
});