import { Table, Input, Select } from 'antd';
import { Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import CustomModal from '../../components/shared/CustomModal';
import { ImInfo } from 'react-icons/im';
import BookingDetailsModal from '../../components/modals/BookingDetailsModal';
import { BookingHistoryType, bookingsData } from '../../data/bookingHistoryData';

const { Option } = Select;


const BookingHistory = () => {
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [showDetails, setShowDetails] = useState<any | null>(null)

  const statusOptions = ["Completed", "Pending", "Canceled"];

const columns: ColumnsType<BookingHistoryType> = [
  { title: "S/N", dataIndex: "key", key: "key" },
  { title: "Booking ID", dataIndex: "BookingId", key: "BookingId" },
  { title: "Guest Name", dataIndex: "guestName", key: "guestName" },
  { title: "Host Name", dataIndex: "hostName", key: "hostName" },
  { title: "Guest Mail", dataIndex: "guestMail", key: "guestMail" },
  { title: "Price ($)", dataIndex: "price", key: "price" },
  { title: "Total Guests", dataIndex: "hostMail", key: "hostMail" },
  { 
    title: "Booking Status", 
    dataIndex: "status", 
    key: "status",
    render: (status: string) => {
      let color = "default";
      if (status === "Completed") color = "green";
      else if (status === "Pending") color = "orange";
      else if (status === "Canceled") color = "red";
      return <Tag color={color}>{status}</Tag>;
    },
  }, 
   {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className='flex items-center gap-4'>
          <p onClick={() => { setShowDetails(record); setShowBookingDetails(true) }} className='cursor-pointer'> <ImInfo className='text-primary' size={20} /> </p>
          <Select
            defaultValue={record.status}
            style={{ width: 120 }}
            onChange={(value) => {
              console.log("Updated status for:", record, "->", value);
            }}
            options={statusOptions.map(status => ({ label: status, value: status }))}
          />
        </div>
      ),
    },
];
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl text-[#083A65] font-semibold">Booking History</h1>
        </div>
        <div className="flex items-center gap-5 justify-end mb-5">
          <Input
            style={{
              maxWidth: 300,
              height: 42,
            }}
            placeholder="Search"
            prefix={<SearchOutlined />}
          />

          {/* Dropdown Filter */}
          <Select defaultValue="All" className="w-52 h-[42px]">
            <Option value="All">All</Option>
            <Option value="Completed">Completed</Option>
            <Option value="Pending">Pending</Option>
            <Option value="Canceled">Canceled</Option>
          </Select>
        </div>
      </div>
      <Table columns={columns} dataSource={bookingsData} rowClassName="hover:bg-gray-100" pagination={{ pageSize: 9 }} />
      <CustomModal
        open={showBookingDetails}
        setOpen={setShowBookingDetails}
        body={<BookingDetailsModal showDetails={showDetails} />}
        key={'influencer-details'}
        width={550}
      />
    </div>
  );
};

export default BookingHistory;
