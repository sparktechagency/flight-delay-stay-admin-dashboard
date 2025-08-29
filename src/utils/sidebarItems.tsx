import { TSidebarItem } from './generateSidebarItems';
import {  AiOutlineDollarCircle } from 'react-icons/ai';
import { IoBarChartOutline } from 'react-icons/io5';
import { TbLogout, TbMessage2Check } from 'react-icons/tb';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { BsBuildingGear } from 'react-icons/bs';
import { LuCrown } from 'react-icons/lu';

const sidebarItems: TSidebarItem[] = [
    {
        key: 'analytics',
        label: 'Analytics',
        path: '',
        icon: <IoBarChartOutline size={24} />,
    },
    {
        key: 'users',
        label: 'User Management',
        path: 'users',
        icon: <HiOutlineUserGroup size={24} />,
    },
    {
        key: 'booking-history',
        label: 'Booking History',
        path: 'booking-history',
        icon: <TbMessage2Check size={24} />,
    },
    {
        key: 'facilities',
        label: 'Facilities',
        path: 'facilities',
        icon: <BsBuildingGear size={24} />,
    },
    {
        key: 'subscription',
        label: 'Subscription',
        path: 'subscription',
        icon: <LuCrown size={24} />,
    },
    {
        key: 'transactions',
        label: 'Transactions',
        path: 'transactions',
        icon: <AiOutlineDollarCircle size={24} />,
    },
    {
        key: 'logout',
        label: 'Log Out',
        path: 'login',
        icon: <TbLogout size={24} />,
    },
];

export default sidebarItems;
