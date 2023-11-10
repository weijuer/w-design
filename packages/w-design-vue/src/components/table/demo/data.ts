type TableNormalDataType = {
    key: string;
    name: string;
    age: number;
    status: string;
};

const normalColumns = [
    {
        key: 'name',
        label: 'NAME',
        defaultSortOrder: 'descend'
    },
    {
        key: 'role',
        label: 'ROLE'
    },
    {
        key: 'status',
        label: 'STATUS'
    }
]

const normalRows = [
    {
        key: '1',
        name: 'Tony Reichert',
        role: 'CEO',
        status: 'Active'
    },
    {
        key: '2',
        name: 'Zoey Lang',
        role: 'Technical Lead',
        status: 'Paused'
    },
    {
        key: '3',
        name: 'Jane Fisher',
        role: 'Senior Developer',
        status: 'Active'
    },
    {
        key: '4',
        name: 'William Howard',
        role: 'Community Manager',
        status: 'Vacation'
    }
]

const sortColumns = [
    {
        key: 'name',
        label: 'NAME',
        order: 'descend',
        sorter: (a: TableNormalDataType, b: TableNormalDataType) => a.name.length - b.name.length
    },
    {
        key: 'age',
        label: 'AGE',
        order: 'descend',
        sorter: (a: TableNormalDataType, b: TableNormalDataType) => a.age - b.age
    },
    {
        key: 'status',
        label: 'STATUS'
    }
]

const sortRows = [
    {
        key: '1',
        name: 'Tony Reichert',
        age: 43,
        status: 'Active'
    },
    {
        key: '2',
        name: 'Zoey Lang',
        age: 25,
        status: 'Paused'
    },
    {
        key: '3',
        name: 'Jane Fisher',
        age: 30,
        status: 'Active'
    },
    {
        key: '4',
        name: 'William Howard',
        age: 50,
        status: 'Vacation'
    }
]

const customColumns = [
    { label: "NAME", key: "name", scopedSlot: 'name' },
    { label: "ROLE", key: "role", scopedSlot: 'role' },
    { label: "STATUS", key: "status", scopedSlot: 'status' },
    { label: "ACTIONS", key: "actions", scopedSlot: 'actions' },
];

const customRows = [
    {
        id: 1,
        name: "Tony Reichert",
        role: "CEO",
        team: "Management",
        status: "active",
        age: "29",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "tony.reichert@example.com",
    },
    {
        id: 2,
        name: "Zoey Lang",
        role: "Technical Lead",
        team: "Development",
        status: "paused",
        age: "25",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        email: "zoey.lang@example.com",
    },
    {
        id: 3,
        name: "Jane Fisher",
        role: "Senior Developer",
        team: "Development",
        status: "active",
        age: "22",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        email: "jane.fisher@example.com",
    },
    {
        id: 4,
        name: "William Howard",
        role: "Community Manager",
        team: "Marketing",
        status: "vacation",
        age: "28",
        avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        email: "william.howard@example.com",
    },
    {
        id: 5,
        name: "Kristen Copper",
        role: "Sales Manager",
        team: "Sales",
        status: "active",
        age: "24",
        avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
        email: "kristen.cooper@example.com",
    },
];


export { normalColumns, sortColumns, sortRows, normalRows, customColumns, customRows };
