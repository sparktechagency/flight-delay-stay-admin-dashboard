import { Select } from 'antd';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Legend, Bar } from 'recharts';
const { Option } = Select;
const SubscriptionChart = () => {
    interface UserData {
        month: string;
        totalSubscription: number;
        newSubscription: number; 
    }

    const data: UserData[] = [
        { month: 'February', totalSubscription: 120, newSubscription: 30 },
        { month: 'March', totalSubscription: 200, newSubscription: 45 },
        { month: 'April', totalSubscription: 150, newSubscription: 40 },
        { month: 'May', totalSubscription: 220, newSubscription: 50 },
        { month: 'June', totalSubscription: 180, newSubscription: 35 },
        { month: 'July', totalSubscription: 300, newSubscription: 70 },
        { month: 'August', totalSubscription: 250, newSubscription: 60 },
        { month: 'September', totalSubscription: 270, newSubscription: 80 },
        { month: 'October', totalSubscription: 320, newSubscription: 90 },
        { month: 'November', totalSubscription: 280, newSubscription: 75 },
        { month: 'December', totalSubscription: 350, newSubscription: 100 },
    ];

    return (
        <div className='bg-white drop-shadow-md  p-4 mx-2 rounded-2xl'
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
            }}
        >
            <div className="px-2 flex items-center justify-between">
                <h1 className="text-xl font-medium">Total Subscriptions Statistics</h1>
                <Select defaultValue="2024" className="w-32 h-[40px]">
                    <Option value="2024">2024</Option>
                    <Option value="2025">2025</Option>
                    <Option value="2026">2026</Option>
                    <Option value="2027">2027</Option>
                    <Option value="2028">2028</Option>
                    <Option value="2029">2029</Option>
                    <Option value="2030">2030</Option>
                </Select>
            </div>
            <ResponsiveContainer width="100%" height={260}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalSubscription" fill="#083A65" />
                    <Bar dataKey="newSubscription" fill="#5C450D" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SubscriptionChart;
