Ext.define('MyExtGenApp.view.main.header.HeaderView', {
    extend: 'Ext.Toolbar',
    xtype: 'headerview',
    cls: 'headerview',
    layout: {
        type: 'hbox',
        align: 'middle'
    },
    minHeight: 60,
    padding: '16 24',
    defaults: {
        margin: '0 18'
    },
    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            flex: 1,
            items: [
                {
                    xtype: 'component',
                    cls: 'headerviewtext',
                    bind: { html: '{heading}' },
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '10px',
                        fontFamily: '\'Poppins\', sans-serif',
                        color: '#ffffff'
                    }
                }
            ]
        },
        {
            xtype: 'container',
            cls: 'headerview-icons',
            layout: { type: 'hbox', align: 'middle' },
            defaults: {
                xtype: 'button',
                ui: 'headerbutton',
                margin: '0 18'
            },
            items: [
                {
                    iconCls: 'x-fa fa-home headerbutton',
                    tooltip: 'Home',
                    route: 'homeview'
                },
                {
                    iconCls: 'x-fa fa-user headerbutton',
                    tooltip: 'Profile',
                    handler: 'onProfileClick'
                },
                {
                    iconCls: 'x-fa fa-bell headerbutton',
                    tooltip: 'Notifications',
                    handler: 'onNotificationsClick'
                },
                {
                    iconCls: 'x-fa fa-cog headerbutton',
                    tooltip: 'Settings',
                    handler: 'onSettingsClick'
                }
            ]
        }
    ]
});