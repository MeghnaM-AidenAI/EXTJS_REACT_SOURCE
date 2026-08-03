Ext.define('MyExtGenApp.view.home.TrackingPanel', {
    extend: 'Ext.Panel',
    xtype: 'trackingpanel',
    controller: 'tracking',


    requires: [
        'Ext.grid.Grid',
        'Ext.field.Search',
        'Ext.field.Select',
        'Ext.field.Date',
        'Ext.Button',
        'Ext.Toolbar'
    ],

    layout: 'vbox',
    padding: 10,
    scrollable: true,

    items: [{
        xtype: 'toolbar',
        docked: 'top',
        title: '<i class="fas fa-search"></i> Track Requests',
        items: [{
            xtype: 'button',
            iconCls: 'x-fa fa-tachometer-alt',
            text: 'Dashboard',
            handler: 'onDashboardTap'
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-plus',
            text: 'request-form',
            handler: 'onNewRequestTap'
        }]
    }, {
        xtype: 'panel',
        layout: 'vbox',
        margin: '0 0 10 0',
        padding: 10,
        shadow: true,
        items: [{
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'searchfield',
                flex: 1,
                placeholder: 'Search by Request ID, Compound Name, or Status...',
                reference: 'searchField'
            }, {
                xtype: 'button',
                text: '<i class="fas fa-search"></i> Search',
                margin: '0 0 0 10',
                handler: 'onSearchTap'
            }]
        }, {
            xtype: 'container',
            layout: 'hbox',
            margin: '10 0 0 0',
            defaults: {
                margin: '0 10 0 0'
            },
            items: [{
                xtype: 'selectfield',
                reference: 'statusFilter',
                placeholder: 'All Statuses',
                options: [{
                    text: 'All Statuses',
                    value: ''
                }, {
                    text: 'Submitted',
                    value: 'submitted'
                }, {
                    text: 'Pre-screening',
                    value: 'pre-screening'
                }, {
                    text: 'Supervisor Review',
                    value: 'supervisor-review'
                }, {
                    text: 'Approved',
                    value: 'approved'
                }, {
                    text: 'Assigned',
                    value: 'assigned'
                }, {
                    text: 'In Synthesis',
                    value: 'in-synthesis'
                }, {
                    text: 'Quality Check',
                    value: 'quality-check'
                }, {
                    text: 'Completed',
                    value: 'completed'
                }]
            }, {
                xtype: 'selectfield',
                reference: 'priorityFilter',
                placeholder: 'All Priorities',
                options: [{
                    text: 'All Priorities',
                    value: ''
                }, {
                    text: 'Low',
                    value: 'low'
                }, {
                    text: 'Medium',
                    value: 'medium'
                }, {
                    text: 'High',
                    value: 'high'
                }]
            }, {
                xtype: 'datefield',
                reference: 'dateFromFilter',
                placeholder: 'From Date'
            }, {
                xtype: 'datefield',
                reference: 'dateToFilter',
                placeholder: 'To Date'
            }, {
                xtype: 'button',
                text: '<i class="fas fa-times"></i> Clear',
                handler: 'onClearFiltersTap'
            }]
        }]
    }, {
        xtype: 'panel',
        layout: 'vbox',
        flex: 1,
        shadow: true,
        padding: 10,
        items: [{
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'component',
                html: '<h2>Your Requests</h2>',
                flex: 1
            }, {
                xtype: 'component',
                reference: 'resultsCount',
                html: '{requestCount} requests found'
            }]
        }, {
            xtype: 'grid',
            flex: 1,
            margin: '10 0 0 0',
            reference: 'requestsGrid',
            bind: {
                store: '{requests}'
            },
            columns: [{
                text: 'Request ID',
                dataIndex: 'id',
                width: 100,
                cell: {
                    encodeHtml: false,
                    userCls: 'request-id-cell'
                },
                renderer: function(value) {
                    return '<strong>' + value + '</strong>';
                }
            }, {
                text: 'Compound Name',
                dataIndex: 'compoundName',
                flex: 1
            }, {
                text: 'Priority',
                dataIndex: 'priorityLevel',
                width: 100,
                cell: {
                    encodeHtml: false
                },
                renderer: function(value) {
                    return '<span class="priority-badge priority-' + value + '">' + value + '</span>';
                }
            }, {
                text: 'Status',
                dataIndex: 'status',
                width: 120,
                cell: {
                    encodeHtml: false
                },
                renderer: function(value, record) {
                    var statusName = value.toLowerCase().replace('_', '-');
                    return '<span class="status-badge status-' + statusName + '">' + record.get('statusDisplay') + '</span>';
                }
            }, {
                text: 'Progress',
                dataIndex: 'progressPercentage',
                width: 150,
                cell: {
                    encodeHtml: false
                },
                renderer: function(value) {
                    return '<div class="progress-container">' +
                           '<div class="progress-bar"><div class="progress-fill" style="width:' + value + '%"></div></div>' +
                           '<small>' + value + '%</small>' +
                           '</div>';
                }
            }, {
                text: 'Submitted',
                dataIndex: 'requestDate',
                width: 120,
                renderer: function(value) {
                    return Ext.Date.format(value, 'M d, Y');
                }
            }, {
                text: 'Timeline',
                dataIndex: 'timelineRequired',
                width: 120,
                renderer: function(value) {
                    return Ext.Date.format(value, 'M d, Y');
                }
            }, {
                text: 'Actions',
                width: 150,
                cell: {
                    tools: {
                        view: {
                            iconCls: 'x-fa fa-eye',
                            handler: 'onViewRequest',
                            tooltip: 'View'
                        },
                        details: {
                            iconCls: 'x-fa fa-info-circle',
                            handler: 'onDetailsRequest',
                            tooltip: 'Details'
                        }
                    }
                }
            }]
        }, {
            xtype: 'toolbar',
            docked: 'bottom',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            items: [{
                xtype: 'button',
                text: '<i class="fas fa-chevron-left"></i> Previous',
                handler: 'onPreviousPage',
                bind: {
                    disabled: '{isFirstPage}'
                }
            }, {
                xtype: 'component',
                html: 'Page {currentPage} of {totalPages}',
                margin: '0 10'
            }, {
                xtype: 'button',
                text: 'Next <i class="fas fa-chevron-right"></i>',
                handler: 'onNextPage',
                bind: {
                    disabled: '{isLastPage}'
                }
            }]
        }]
    }]
});