Ext.define('MyExtGenApp.view.home.HomeView', {
    extend: 'Ext.Container',
    xtype: 'homeview',
    cls: 'home-view',
    scrollable: true,
    padding: 30,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'component',
            html: '<h1 class="main-heading">Start Exploring our Innovations</h1>',
            margin: '0 0 20 0'
        },
        {
            xtype: 'container',
            cls: 'highlight-card',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            padding: '24 30',
            margin: '0 0 30 0',
            height: 200,
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        type: 'vbox',
                        align: 'start',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'component',
                            html: '<h2 class="highlight-title">Welcome to the Compound Synthesis Request Management System</h2>'
                        },
                        {
                            xtype: 'component',
                            html: '<p class="highlight-desc">Streamline your pharmaceutical research with our comprehensive compound synthesis request platform.</p>'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'end',
                        pack: 'end'
                    },
                    items: [
                        {
                            xtype: 'button',
                            text: 'Get Started →',
                            cls: 'btn-primary',
                            scale: 'medium',
                            margin: '0 0 0 30'
                        }
                    ],
                    flex: 0
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                wrap: true,
                align: 'stretch',
                pack: 'center'
            },
            defaults: {
                xtype: 'panel',
                cls: 'feature-card',
                width: 300,
                height: 180,
                margin: 12,
                bodyPadding: 16
            },
            items: [
                {
                    html: `
                        <div class="feature-content">
                            <i class="fas fa-paper-plane"></i>
                            <h3>Submit Requests</h3>
                            <p>Submit detailed compound synthesis requests with automated validation and pre-screening.</p>
                        </div>
                    `,
                    listeners: {
                        render: function (cmp) {
                            cmp.getEl().on('click', function () {
                                Ext.Msg.alert('Card Clicked', 'Submit Requests clicked!');
                            });
                        }
                    }
                },
                {
                    html: `
                        <div class="feature-content">
                            <i class="fas fa-search"></i>
                            <h3>Track Progress</h3>
                            <p>Monitor your requests in real-time through our comprehensive tracking system.</p>
                        </div>
                    `,
                    listeners: {
                        render: function (cmp) {
                            cmp.getEl().on('click', function () {
                                Ext.Msg.alert('Card Clicked', 'Track Progress clicked!');
                            });
                        }
                    }
                },
                {
                    html: `
                        <div class="feature-content">
                            <i class="fas fa-shield-alt"></i>
                            <h3>Compliance</h3>
                            <p>Automated compliance checks for controlled substances and regulatory requirements.</p>
                        </div>
                    `,
                    listeners: {
                        render: function (cmp) {
                            cmp.getEl().on('click', function () {
                                Ext.Msg.alert('Card Clicked', 'Compliance clicked!');
                            });
                        }
                    }
                },
                {
                    html: `
                        <div class="feature-content">
                            <i class="fas fa-users"></i>
                            <h3>Collaboration</h3>
                            <p>Seamless workflow between discovery scientists, supervisors, and synthesis teams.</p>
                        </div>
                    `,
                    listeners: {
                        render: function (cmp) {
                            cmp.getEl().on('click', function () {
                                Ext.Msg.alert('Card Clicked', 'Collaboration clicked!');
                            });
                        }
                    }
                }
            ]
        }
    ]
});
