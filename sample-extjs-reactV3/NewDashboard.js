Ext.define('MyExtGenApp.view.home.Dashboard', {
    extend: 'Ext.container.Container',
    xtype: 'dashboard',
    layout: 'vbox',
    scrollable: true,
    padding: 20,
    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'component',
                    html: '<h1><i class="fas fa-tachometer-alt"></i> Dashboard</h1>',
                    flex: 1
                },
                {
                    xtype: 'button',
                    text: 'New Request',
                    iconCls: 'fas fa-plus',
                    handler: () => window.location.href = 'request-form.jsp'
                },
                {
                    xtype: 'button',
                    text: 'Track Requests',
                    iconCls: 'fas fa-search',
                    handler: () => window.location.href = 'tracking.jsp'
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'container',
                width: 200,
                height: 100,
                padding: 15,
                style: {
                    'border-radius': '10px',
                    'box-shadow': '0 4px 15px rgba(0,0,0,0.1)',
                    'margin-right': '20px',
                    'text-align': 'center',
                    'background': '#f8f9fa'
                }
            },
            items: [
                {
                    html: '<i class="fas fa-paper-plane fa-2x" style="color:#3498db"></i><br><h3>0</h3><p>Total Requests</p>'
                },
                {
                    html: '<i class="fas fa-clock fa-2x" style="color:#f39c12"></i><br><h3>0</h3><p>Pending Approval</p>'
                },
                {
                    html: '<i class="fas fa-flask fa-2x" style="color:#9b59b6"></i><br><h3>0</h3><p>In Synthesis</p>'
                },
                {
                    html: '<i class="fas fa-check fa-2x" style="color:#27ae60"></i><br><h3>0</h3><p>Completed</p>'
                }
            ]
        },
        {
            xtype: 'grid',
            title: '<i class="fas fa-list"></i> Recent Requests',
            margin: '20 0',
            width: '100%',
            height: 400,
            bind: '{recentRequests}',  // ViewModel binding
            columns: [
                { text: 'Request ID', dataIndex: 'id', flex: 1 },
                { text: 'Compound Name', dataIndex: 'compoundName', flex: 2 },
                { text: 'Priority', dataIndex: 'priorityLevel', flex: 1,
                    renderer: value => `<span class="priority-${value.toLowerCase()}">${value}</span>`
                },
                { text: 'Status', dataIndex: 'status', flex: 1,
                    renderer: value => `<span class="status-${value.toLowerCase()}">${value}</span>`
                },
                { text: 'Submitted', dataIndex: 'requestDate', xtype: 'datecolumn', format: 'M d, Y', flex: 1 },
                {
                    text: 'Actions',
                    xtype: 'widgetcolumn',
                    widget: {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                text: 'View',
                                iconCls: 'fas fa-eye',
                                handler: btn => {
                                    const record = btn.getWidgetRecord();
                                    window.location.href = `view-request?id=${record.get('id')}`;
                                }
                            },
                            {
                                xtype: 'button',
                                text: 'Edit',
                                iconCls: 'fas fa-edit',
                                handler: btn => {
                                    const record = btn.getWidgetRecord();
                                    if (record.get('status') === 'SUBMITTED') {
                                        window.location.href = `edit-request?id=${record.get('id')}`;
                                    }
                                }
                            }
                        ]
                    },
                    flex: 2
                }
            ],
            emptyText: 'No requests found. <a href="request-form.jsp">Submit your first request</a>'
        },
        {
            xtype: 'container',
            title: '<i class="fas fa-bolt"></i> Quick Actions',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: {
                xtype: 'container',
                flex: 1,
                padding: 20,
                margin: '10 10 10 0',
                style: {
                    'background': 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                    'border-radius': '10px',
                    'text-align': 'center',
                    'transition': 'transform 0.3s ease',
                    'cursor': 'pointer'
                },
                listeners: {
                    render: function(cmp) {
                        cmp.getEl().on('click', cmp.redirectFn);
                    }
                }
            },
            items: [
                {
                    html: '<i class="fas fa-plus-circle fa-2x"></i><h3>New Request</h3><p>Submit a new compound synthesis request</p>',
                    redirectFn: () => window.location.href = 'request-form.jsp'
                },
                {
                    html: '<i class="fas fa-search fa-2x"></i><h3>Track Progress</h3><p>Monitor your request status and progress</p>',
                    redirectFn: () => window.location.href = 'tracking.jsp'
                },
                {
                    html: '<i class="fas fa-chart-bar fa-2x"></i><h3>View Reports</h3><p>Access synthesis reports and analytics</p>',
                    redirectFn: () => window.location.href = 'reports.jsp'
                }
            ]
        }
    ]
});
