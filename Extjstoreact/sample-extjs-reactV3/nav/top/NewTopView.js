Ext.define('MyExtGenApp.view.main.nav.top.TopView', {
    extend: 'Ext.Toolbar',
    xtype: 'topview',
    cls: 'topview',
    shadow: false,
    viewModel: {},

    height: 80, // Increased height to accommodate vertical stacking
    padding: '10 20',

    // Dynamically set layout based on navCollapsed
    bind: {
        layout: '{navCollapsed ? "vbox" : "hbox"}'
    },

    defaults: {
        margin: '0 5' // Add some margin for spacing between items
    },

    items: [
        {
            xtype: 'image',
            cls: 'topview-logo',
            height: 40,
            width: 170,
            bind: {
                src: '{navCollapsed ? "resources/images/AidenAI_Short.svg" : "resources/images/AidenAI_Logo.svg"}'
            }
        },
        '->', // Spacer to push the button to the right in hbox layout
        {
            xtype: 'button',
            ui: 'topviewbutton',
            reference: 'navtoggle',
            handler: 'onTopViewNavToggle',
            iconCls: 'x-fa fa-bars',
            tooltip: 'Toggle Navigation',
            cls: 'nav-toggle-btn'
        }
    ]
});