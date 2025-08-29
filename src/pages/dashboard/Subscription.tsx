import { useState } from 'react';
import { Table } from 'antd';
import { CiEdit } from 'react-icons/ci';
import CreateSubscription from '../../components/modals/CreateSubscription';


const Subscription = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(); 
  
  const data = [
    {
      key: 1,
      packageName: "Elite",
      description: [
        "Start 111 conversations",
        "Highlight your profile for 30 days FREE",
      ],
      price: "329",
    },
    {
      key: 2,
      packageName: "Classic",
      description: [
        "Start 111 conversations",
        "Highlight your profile for 30 days FREE",
      ],
      price: "429",
    },
    {
      key: 3,
      packageName: "Basic",
      description: [
        "Start 111 conversations",
        "Highlight your profile for 30 days FREE",
      ],
      price: "543",
    },
  ];

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Package Name",
      dataIndex: "packageName",
      key: "packageName",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_:any, record:any) => (
        <button
          onClick={() => {
            setOpen(true);
            setItems(record);
          }}
          className="cursor-pointer border-none outline-none text-[#00809E] bg-white"
        >
          <CiEdit size={25} />
        </button>
      ),
    },
  ];

  return (
    <div className=""> 
     <h1 className="text-2xl text-primary font-semibold">Subscriptions</h1>
      <Table columns={columns} dataSource={data} />
      <CreateSubscription open={open} setOpen={setOpen} items={items} />
    </div>
  );
};

export default Subscription;