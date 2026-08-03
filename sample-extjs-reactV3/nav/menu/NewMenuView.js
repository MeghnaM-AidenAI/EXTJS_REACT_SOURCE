Ext.define('MyExtGenApp.view.nav.menu.MenuView', {
    extend: 'Ext.list.Tree',
    xtype: 'menuview',

    ui: 'nav',
    scrollable: true,

    viewModel: {
        data: {
            navCollapsed: false
        },
        stores: {
            menu: {
                type: 'tree',
                root: {
                    expanded: true,
                    children: [
                        {
                            text: 'Home',
                            iconCls: 'x-fa fa-home',
                            xtype: 'homeview',
                            leaf: true
                        },
                        {
                            text: 'Request Form',
                            iconCls: 'x-fa fa-file-alt',
                            xtype: 'compoundrequestform',
                            leaf: true
                        },
                        {
                            text: 'Tracking Panel',
                            iconCls: 'x-fa fa-chart-line',
                            xtype: 'trackingpanel',
                            leaf: true
                        },
                        {
                            text: 'Dashboard',
                            iconCls: 'x-fa fa-chart-pie',
                            xtype: 'dashboard',
                            leaf: true
                        },
                        {
                            text: 'TechD',
                            iconCls: 'x-fa fa-chart-pie',
                            xtype: 'dashboard',
                            leaf: true
                        },
                        {
                            text: 'TX',
                            iconCls: 'x-fa fa-chart-pie',
                            xtype: 'dashboard',
                            leaf: true
                        }
                    ]
                }
            }
        }
    },

    bind: {
        store: '{menu}',
        micro: '{navCollapsed}'
    },

    expanderFirst: false,
    expanderOnly: false
});
