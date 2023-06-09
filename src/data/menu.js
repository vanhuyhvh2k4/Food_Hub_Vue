import routesConfig from "@/config/routes";

const menuData = [
    {
        id: 1,
        title: 'My Orders',
        icon: 'document',
        path: routesConfig.myOrders
    },
    {
        id: 2,
        title: 'My Profile',
        icon: 'profile',
        path: routesConfig.profile
    },
    {
        id: 3,
        title: 'Delivery Address',
        icon: 'location'
    },
    {
        id: 4,
        title: 'Payment methods',
        icon: 'wallet'
    },
    {
        id: 5,
        title: 'Contact Us',
        icon: 'message'
    },
    {
        id: 6,
        title: 'Settings',
        icon: 'setting'
    },
    {
        id: 7,
        title: 'Helps & FAQS',
        icon: 'help'
    },
]

export default menuData;