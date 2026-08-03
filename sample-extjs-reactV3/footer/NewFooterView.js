Ext.define('MyExtGenApp.view.main.footer.FooterView', {
    extend: 'Ext.Toolbar',
    xtype: 'footerview',
    cls: 'footerview',
    viewModel: {},
    minHeight: 60,
    items: [
        {
            xtype: 'container',
            cls: 'footerviewtext',
        html: '© 2025 AidenAI. All Rights Reserved.'
            //bind: { html: '{name} footer' }
        }
    ]
});
