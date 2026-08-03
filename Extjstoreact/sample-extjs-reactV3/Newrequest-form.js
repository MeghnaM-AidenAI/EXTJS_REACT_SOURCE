Ext.define('MyExtGenApp.view.home.CompoundRequestForm', {
    extend: 'Ext.form.Panel',
    xtype: 'compoundrequestform',
    title: 'Compound Synthesis Request',
    scrollable: true,
    bodyPadding: 24,
    width: 850,
    cls: 'compound-request-form',

    // Global field styling
    fieldDefaults: {
        labelAlign: 'top',
        labelStyle: 'font-weight:bold;color:#333;font-size:14px;',
        fieldStyle: 'background:#f9f9f9;border-radius:4px;',
        anchor: '100%',
        margin: '0 0 12 0'
    },

    defaults: {
        xtype: 'fieldset',
        anchor: '100%',
        margin: '0 0 24 0'
    },

    items: [
        {
            title: 'Section 1: Requestor Information',
            items: [
                { xtype: 'textfield', fieldLabel: 'Requester Name', name: 'requesterName', readOnly: true },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Department',
                    name: 'department',
                    store: ['Medicinal Chemistry', 'Discovery Biology', 'Pharmacology', 'Toxicology'],
                    forceSelection: true,
                    allowBlank: false
                },
                { xtype: 'textfield', fieldLabel: 'Email', name: 'email', readOnly: true },
                { xtype: 'textfield', fieldLabel: 'Supervisor Name', name: 'supervisorName', allowBlank: false },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Date of Request',
                    name: 'requestDate',
                    readOnly: true,
                    format: 'Y-m-d H:i'
                }
            ]
        },
        {
            title: 'Section 2: Compound Information',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Compound Name',
                    name: 'compoundName',
                    allowBlank: false,
                    regex: /^[A-Za-z0-9\s\-_]+$/,
                    maxLength: 100
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'SMILES String',
                    name: 'smilesString',
                    allowBlank: false
                },
                {
                    xtype: 'button',
                    text: 'Validate Structure',
                    handler: 'onValidateStructure',
                    ui: 'action',
                    margin: '0 0 12 0'
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'InChI String',
                    name: 'inchiString'
                },
                {
                    xtype: 'filefield',
                    fieldLabel: 'Molecular Structure',
                    name: 'molecularStructure',
                    accept: '.mol,.sdf,.cdx,.png,.jpg',
                    buttonText: 'Upload File'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'CAS Number',
                    name: 'casNumber',
                    regex: /^\d{1,7}-\d{2}-\d$/
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Molecular Weight',
                    name: 'molecularWeight',
                    minValue: 100,
                    maxValue: 800,
                    readOnly: true
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Target Pathway',
                    name: 'targetPathway',
                    store: ['GPCR Signaling', 'Kinase Inhibition', 'Protease Inhibition', 'Ion Channel Modulation', 'Other'],
                    forceSelection: true,
                    allowBlank: false
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'Proposed Use',
                    name: 'proposedUse',
                    minLength: 20,
                    allowBlank: false
                },
                {
                    xtype: 'checkboxfield',
                    boxLabel: 'Is this a controlled substance?',
                    name: 'controlledSubstance'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Related Compound IDs',
                    name: 'relatedCompoundIds'
                }
            ]
        },
        {
            title: 'Section 3: Request Details',
            items: [
                {
                    xtype: 'combobox',
                    fieldLabel: 'Priority Level',
                    name: 'priorityLevel',
                    store: ['Low', 'Medium', 'High'],
                    allowBlank: false,
                    listeners: {
                        change: 'onPriorityChange'
                    }
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'Priority Justification',
                    name: 'justification',
                    hidden: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Requested Quantity (mg)',
                    name: 'requestedQuantity',
                    minValue: 1,
                    maxValue: 500,
                    allowBlank: false
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Purity Requirement (%)',
                    name: 'purityRequirement',
                    minValue: 90,
                    maxValue: 100,
                    allowBlank: false
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Timeline Required',
                    name: 'timelineRequired',
                    allowBlank: false
                },
                {
                    xtype: 'checkboxfield',
                    boxLabel: 'Is this compound IP-sensitive?',
                    name: 'ipSensitive'
                },
                {
                    xtype: 'checkboxfield',
                    boxLabel: 'External Disclosure Risk?',
                    name: 'externalDisclosureRisk',
                    listeners: {
                        change: 'onDisclosureRiskChange'
                    }
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'Disclosure Risk Comment',
                    name: 'disclosureCommentText',
                    hidden: true
                }
            ]
        },
        {
            title: 'Section 4: Supporting Documents',
            items: [
                {
                    xtype: 'filefield',
                    fieldLabel: 'Supporting Protocol (PDF/DOCX)',
                    name: 'supportingProtocol',
                    multiple: true,
                    accept: '.pdf,.docx',
                    buttonText: 'Select File(s)'
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'References',
                    name: 'references'
                },
                {
                    xtype: 'filefield',
                    fieldLabel: 'Analogue Compounds',
                    name: 'analogueCompounds',
                    accept: '.mol,.sdf,.txt',
                    buttonText: 'Upload File'
                }
            ]
        }
    ],

    buttons: [
        { text: 'Save Draft', handler: 'onSaveDraft', ui: 'soft-blue' },
        { text: 'Preview', handler: 'onPreview', ui: 'soft-green' },
        { text: 'Submit', formBind: true, handler: 'onSubmitRequest', ui: 'action' }
    ]
});
