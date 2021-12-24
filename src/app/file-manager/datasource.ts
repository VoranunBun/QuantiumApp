/**
 * Test cases data source
 */
 export let sampleData: Object[] = [
    {
        taskID: 1,
        Name: 'USD Fund I, L.P.',
        Size: "22 items",
        LastModifed: "2021-04-20 01:20:41",
        ModifedBy: '',
        subtasks: [
            { 
                taskID: 2,
                Name: 'Legal',
                Size: "2 items",
                LastModifed: "2021-04-20 01:20:41",
                ModifedBy: '22322demo1@xxx.com',
                subtasks: [
                    { 
                        taskID: 3,
                        Name: 'Article of association.pdf',
                        Size: "17.20 KB",
                        LastModifed: "2021-04-20 01:20:41",
                        ModifedBy: '22322demo1@xxx.com',
                    },
                    { 
                        taskID: 3,
                        Name: 'Fund formation.pdf',
                        Size: "17.20 KB",
                        LastModifed: "2021-04-20 01:20:41",
                        ModifedBy: '22322demo1@xxx.com',
                    },
                ]
            },
            { 
                taskID: 2,
                Name: 'Transaction Attachments',
                Size: "20 items",
                LastModifed: "2021-04-20 01:20:41",
                ModifedBy: '',
                subtasks: [
                    { 
                        taskID: 3,
                        Name: 'Article of association.pdf',
                        Size: "17.20 KB",
                        LastModifed: "2021-04-20 01:20:41",
                        ModifedBy: '22322demo1@xxx.com',
                    },
                    { 
                        taskID: 3,
                        Name: 'Fund formation.pdf',
                        Size: "17.20 KB",
                        LastModifed: "2021-04-20 01:20:41",
                        ModifedBy: '22322demo1@xxx.com',
                    },
                ]
            },
            { 
                taskID: 2,
                Name: 'Reports',
                Size: "1 items",
                LastModifed: "2021-04-20 01:20:41",
                ModifedBy: '',
                subtasks: [
                    { 
                        taskID: 3,
                        Name: 'Article of association.pdf',
                        Size: "17.20 KB",
                        LastModifed: "2021-04-20 01:20:41",
                        ModifedBy: '',
                    }
                ]
            },
        ]
    }    
];