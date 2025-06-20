type TableNormalDataType = {
    key: string
    id: number
    name: string
    email: string
    age: number
    birthday: string
}

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
        key: 'id',
        label: 'ID',
        sorter: true
    },
    {
        key: 'name',
        label: 'NAME',
        sorter: true
    },
    {
        key: 'email',
        label: 'EMAIL',
        sorter: true
    },
    {
        key: 'age',
        label: 'AGE',
        sorter: (a: number, b: number) => a - b
    },
    {
        key: 'birthday',
        label: 'BIRTHDAY',
        sorter: true
    }
]

const sortRows: TableNormalDataType[] = [
    {
        key: '1',
        id: 1,
        name: 'Tony Reichert',
        email: 'a.email@email.com',
        age: 43,
        birthday: '1988-01-12'
    },
    {
        key: '2',
        id: 2,
        name: 'Zoey Lang',
        email: 'b.email@email.com',
        age: 25,
        birthday: '2023-01-12'
    },
    {
        key: '3',
        id: 3,
        name: 'Jane Fisher',
        email: 'd.email@email.com',
        age: 30,
        birthday: '1990-10-25'
    },
    {
        key: '4',
        id: 4,
        name: 'William Howard',
        email: 'c.email@email.com',
        age: 50,
        birthday: '2004-10-25'
    }
]

const customColumns = [
    { label: 'NAME', key: 'name', scopedSlot: 'name' },
    { label: 'ROLE', key: 'role', scopedSlot: 'role' },
    { label: 'STATUS', key: 'status', scopedSlot: 'status' },
    { label: 'ACTIONS', key: 'actions', scopedSlot: 'actions' }
]

const customRows = [
    {
        id: 1,
        name: 'Tony Reichert',
        role: 'CEO',
        team: 'Management',
        status: 'active',
        age: '29',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
        email: 'tony.reichert@example.com'
    },
    {
        id: 2,
        name: 'Zoey Lang',
        role: 'Technical Lead',
        team: 'Development',
        status: 'paused',
        age: '25',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        email: 'zoey.lang@example.com'
    },
    {
        id: 3,
        name: 'Jane Fisher',
        role: 'Senior Developer',
        team: 'Development',
        status: 'active',
        age: '22',
        avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
        email: 'jane.fisher@example.com'
    },
    {
        id: 4,
        name: 'William Howard',
        role: 'Community Manager',
        team: 'Marketing',
        status: 'vacation',
        age: '28',
        avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
        email: 'william.howard@example.com'
    },
    {
        id: 5,
        name: 'Kristen Copper',
        role: 'Sales Manager',
        team: 'Sales',
        status: 'active',
        age: '24',
        avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
        email: 'kristen.cooper@example.com'
    }
]

const paginatedRows = [
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
    },
    {
        key: '5',
        name: 'Emily Collins',
        role: 'Marketing Manager',
        status: 'Active'
    },
    {
        key: '6',
        name: 'Brian Kim',
        role: 'Product Manager',
        status: 'Active'
    },
    {
        key: '7',
        name: 'Laura Thompson',
        role: 'UX Designer',
        status: 'Active'
    },
    {
        key: '8',
        name: 'Michael Stevens',
        role: 'Data Analyst',
        status: 'Paused'
    },
    {
        key: '9',
        name: 'Sophia Nguyen',
        role: 'Quality Assurance',
        status: 'Active'
    },
    {
        key: '10',
        name: 'James Wilson',
        role: 'Front-end Developer',
        status: 'Vacation'
    },
    {
        key: '11',
        name: 'Ava Johnson',
        role: 'Back-end Developer',
        status: 'Active'
    },
    {
        key: '12',
        name: 'Isabella Smith',
        role: 'Graphic Designer',
        status: 'Active'
    },
    {
        key: '13',
        name: 'Oliver Brown',
        role: 'Content Writer',
        status: 'Paused'
    },
    {
        key: '14',
        name: 'Lucas Jones',
        role: 'Project Manager',
        status: 'Active'
    },
    {
        key: '15',
        name: 'Grace Davis',
        role: 'HR Manager',
        status: 'Active'
    },
    {
        key: '16',
        name: 'Elijah Garcia',
        role: 'Network Administrator',
        status: 'Active'
    },
    {
        key: '17',
        name: 'Emma Martinez',
        role: 'Accountant',
        status: 'Vacation'
    },
    {
        key: '18',
        name: 'Benjamin Lee',
        role: 'Operations Manager',
        status: 'Active'
    },
    {
        key: '19',
        name: 'Mia Hernandez',
        role: 'Sales Manager',
        status: 'Paused'
    },
    {
        key: '20',
        name: 'Daniel Lewis',
        role: 'DevOps Engineer',
        status: 'Active'
    },
    {
        key: '21',
        name: 'Amelia Clark',
        role: 'Social Media Specialist',
        status: 'Active'
    },
    {
        key: '22',
        name: 'Jackson Walker',
        role: 'Customer Support',
        status: 'Active'
    },
    {
        key: '23',
        name: 'Henry Hall',
        role: 'Security Analyst',
        status: 'Active'
    },
    {
        key: '24',
        name: 'Charlotte Young',
        role: 'PR Specialist',
        status: 'Paused'
    },
    {
        key: '25',
        name: 'Liam King',
        role: 'Mobile App Developer',
        status: 'Active'
    }
]

const usageColumns = [
    { label: 'ID', key: 'id', sorter: true },
    { label: 'NAME', key: 'name', sorter: true, scopedSlot: 'name' },
    { label: 'AGE', key: 'age', sorter: true },
    { label: 'ROLE', key: 'role', sorter: true, scopedSlot: 'role' },
    { label: 'TEAM', key: 'team' },
    { label: 'EMAIL', key: 'email' },
    { label: 'STATUS', key: 'status', sorter: true, scopedSlot: 'status' },
    { label: 'ACTIONS', key: 'actions', scopedSlot: 'actions' }
]

const usageRows = [
    {
        id: 1,
        name: 'Tony Reichert',
        role: 'CEO',
        team: 'Management',
        status: 'active',
        age: '29',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
        email: 'tony.reichert@example.com'
    },
    {
        id: 2,
        name: 'Zoey Lang',
        role: 'Tech Lead',
        team: 'Development',
        status: 'paused',
        age: '25',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        email: 'zoey.lang@example.com'
    },
    {
        id: 3,
        name: 'Jane Fisher',
        role: 'Sr. Dev',
        team: 'Development',
        status: 'active',
        age: '22',
        avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
        email: 'jane.fisher@example.com'
    },
    {
        id: 4,
        name: 'William Howard',
        role: 'C.M.',
        team: 'Marketing',
        status: 'vacation',
        age: '28',
        avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
        email: 'william.howard@example.com'
    },
    {
        id: 5,
        name: 'Kristen Copper',
        role: 'S. Manager',
        team: 'Sales',
        status: 'active',
        age: '24',
        avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
        email: 'kristen.cooper@example.com'
    },
    {
        id: 6,
        name: 'Brian Kim',
        role: 'P. Manager',
        team: 'Management',
        age: '29',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
        email: 'brian.kim@example.com',
        status: 'Active'
    },
    {
        id: 7,
        name: 'Michael Hunt',
        role: 'Designer',
        team: 'Design',
        status: 'paused',
        age: '27',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29027007d',
        email: 'michael.hunt@example.com'
    },
    {
        id: 8,
        name: 'Samantha Brooks',
        role: 'HR Manager',
        team: 'HR',
        status: 'active',
        age: '31',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e27027008d',
        email: 'samantha.brooks@example.com'
    },
    {
        id: 9,
        name: 'Frank Harrison',
        role: 'F. Manager',
        team: 'Finance',
        status: 'vacation',
        age: '33',
        avatar: 'https://i.pravatar.cc/150?img=4',
        email: 'frank.harrison@example.com'
    },
    {
        id: 10,
        name: 'Emma Adams',
        role: 'Ops Manager',
        team: 'Operations',
        status: 'active',
        age: '35',
        avatar: 'https://i.pravatar.cc/150?img=5',
        email: 'emma.adams@example.com'
    },
    {
        id: 11,
        name: 'Brandon Stevens',
        role: 'Jr. Dev',
        team: 'Development',
        status: 'active',
        age: '22',
        avatar: 'https://i.pravatar.cc/150?img=8',
        email: 'brandon.stevens@example.com'
    },
    {
        id: 12,
        name: 'Megan Richards',
        role: 'P. Manager',
        team: 'Product',
        status: 'paused',
        age: '28',
        avatar: 'https://i.pravatar.cc/150?img=10',
        email: 'megan.richards@example.com'
    },
    {
        id: 13,
        name: 'Oliver Scott',
        role: 'S. Manager',
        team: 'Security',
        status: 'active',
        age: '37',
        avatar: 'https://i.pravatar.cc/150?img=12',
        email: 'oliver.scott@example.com'
    },
    {
        id: 14,
        name: 'Grace Allen',
        role: 'M. Specialist',
        team: 'Marketing',
        status: 'active',
        age: '30',
        avatar: 'https://i.pravatar.cc/150?img=16',
        email: 'grace.allen@example.com'
    },
    {
        id: 15,
        name: 'Noah Carter',
        role: 'IT Specialist',
        team: 'I. Technology',
        status: 'paused',
        age: '31',
        avatar: 'https://i.pravatar.cc/150?img=15',
        email: 'noah.carter@example.com'
    },
    {
        id: 16,
        name: 'Ava Perez',
        role: 'Manager',
        team: 'Sales',
        status: 'active',
        age: '29',
        avatar: 'https://i.pravatar.cc/150?img=20',
        email: 'ava.perez@example.com'
    },
    {
        id: 17,
        name: 'Liam Johnson',
        role: 'Data Analyst',
        team: 'Analysis',
        status: 'active',
        age: '28',
        avatar: 'https://i.pravatar.cc/150?img=33',
        email: 'liam.johnson@example.com'
    },
    {
        id: 18,
        name: 'Sophia Taylor',
        role: 'QA Analyst',
        team: 'Testing',
        status: 'active',
        age: '27',
        avatar: 'https://i.pravatar.cc/150?img=29',
        email: 'sophia.taylor@example.com'
    },
    {
        id: 19,
        name: 'Lucas Harris',
        role: 'Administrator',
        team: 'Information Technology',
        status: 'paused',
        age: '32',
        avatar: 'https://i.pravatar.cc/150?img=50',
        email: 'lucas.harris@example.com'
    },
    {
        id: 20,
        name: 'Mia Robinson',
        role: 'Coordinator',
        team: 'Operations',
        status: 'active',
        age: '26',
        avatar: 'https://i.pravatar.cc/150?img=45',
        email: 'mia.robinson@example.com'
    }
]

const statusColorMap = {
    active: 'success',
    paused: 'danger',
    vacation: 'warning'
}

const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Paused', value: 'paused' },
    { label: 'Vacation', value: 'vacation' }
]

export {
    normalColumns,
    sortColumns,
    sortRows,
    normalRows,
    customColumns,
    customRows,
    paginatedRows,
    statusOptions,
    statusColorMap,
    usageColumns,
    usageRows
}
