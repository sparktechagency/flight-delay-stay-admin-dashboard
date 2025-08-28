import { Button, Table } from 'antd';
import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import AddCompaniesModal from '../../components/modals/AddCompaniesModal';

// Sample data
const data = [
    {
        key: '1',
        name: 'Gym',
        logo: '/company1.png',
    },
    {
        key: '2',
        name: 'Swimming Pool',
        logo: '/company2.png',
    },
    {
        key: '3',
        name: 'Parking',
        logo: '/company3.png',
    },
    {
        key: '4',
        name: 'Spa',
        logo: '/company1.png',
    },
    {
        key: '5',
        name: 'Conference Room',
        logo: '/company2.png',
    },
    {
        key: '6',
        name: 'Playground',
        logo: '/company3.png',
    },
    {
        key: '7',
        name: 'Restaurant',
        logo: '/company1.png',
    },
    {
        key: '8',
        name: 'Lounge',
        logo: '/company3.png',
    },
    {
        key: '9',
        name: 'Laundry',
        logo: '/company2.png',
    },
];

// Column definitions

const Facilities = () => {
    const [isOpen, setIsOpen] = useState(false);

    const columns = [
        {
            title: 'S/No',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Facilities Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Facilities Logo',
            dataIndex: 'logo',
            key: 'logo',
            render: (logo: string) => <img src={logo} alt="logo" style={{ width: 50, height: 43, objectFit: 'contain' }} />,
        },
        {
            title: 'Actions',
            key: 'action',
            render: () => (
                <div className="flex items-center gap-3">

                    <button className="text-red-500">
                        <AiOutlineDelete size={24} />
                    </button>
                </div>
            ),
        },
    ];
    return (
        <div className="">
            <div className="my-3 flex items-center justify-between mb-5">
                <h1 className="text-2xl text-primary font-semibold">Facilities</h1>
                <Button
                    onClick={() => setIsOpen(true)}
                    style={{
                        height: 40,
                    }}
                    type="primary"
                >
                    Create Facilities
                </Button>
            </div>
            <Table columns={columns} dataSource={data} rowClassName="hover:bg-gray-100" pagination={{ pageSize: 8 }} />
            <AddCompaniesModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default Facilities;