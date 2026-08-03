Ext.define('MyExtGenApp.view.main.nav.NavView', {
    extend: 'Ext.Panel',
    xtype: 'navview',
    controller: 'navviewcontroller',
    viewModel: {},
    cls: 'navview',
    layout: 'fit',
    width: 260,
    tbar: {
        xtype: 'topview',
        height: 60
    },
    items: [
        {
            xtype: 'menuview',
            reference: 'menuview',
            bind: {
                width: '{menuview_width}'
            },
            scrollable: 'y',
            listeners: {
                selectionchange: 'onMenuViewSelectionChange'
            }
        }
    ],
});
