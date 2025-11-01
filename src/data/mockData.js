// src/data/mockData.js

export const indianHospitals = [
    { name: "AIIMS, New Delhi", city: "Delhi", state: "Delhi", bloodGroups: ["A+", "B+", "O-"] },
    { name: "Apollo Hospital, Chennai", city: "Chennai", state: "Tamil Nadu", bloodGroups: ["O+", "A-", "AB+"] },
    { name: "Fortis Hospital, Mumbai", city: "Mumbai", state: "Maharashtra", bloodGroups: ["B-", "A+", "O+"] },
    { name: "Manipal Hospital, Bangalore", city: "Bangalore", state: "Karnataka", bloodGroups: ["AB-", "B+", "A-"] },
    { name: "Narayana Hrudayalaya, Bangalore", city: "Bangalore", state: "Karnataka", bloodGroups: ["A+", "O+", "B+"] },
    { name: "Medanta - The Medicity, Gurgaon", city: "Gurgaon", state: "Haryana", bloodGroups: ["O-", "AB+", "B-"] },
    { name: "CMC, Vellore", city: "Vellore", state: "Tamil Nadu", bloodGroups: ["A-", "B+", "O+"] },
    { name: "Lilavati Hospital, Mumbai", city: "Mumbai", state: "Maharashtra", bloodGroups: ["A+", "B-", "AB+"] },
    { name: "Indraprastha Apollo, Delhi", city: "Delhi", state: "Delhi", bloodGroups: ["O+", "A-", "B+"] },
    { name: "PGIMER, Chandigarh", city: "Chandigarh", state: "Punjab", bloodGroups: ["B+", "A+", "AB-"] },
    { name: "JIPMER, Puducherry", city: "Puducherry", state: "Puducherry", bloodGroups: ["O-", "A+", "B-"] },
    { name: "Sankara Nethralaya, Chennai", city: "Chennai", state: "Tamil Nadu", bloodGroups: ["A+", "B+", "O+"] },
    { name: "Tata Memorial Hospital, Mumbai", city: "Mumbai", state: "Maharashtra", bloodGroups: ["A-", "B-", "AB+"] },
    { name: "AMRI Hospital, Kolkata", city: "Kolkata", state: "West Bengal", bloodGroups: ["B+", "O+", "A-"] },
];

export const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

export const mockRequests = [
    { name: 'Aditya Sharma', blood: 'A+', location: 'Mumbai', time: '15 mins ago' },
    { name: 'Priya Patel', blood: 'O-', location: 'Delhi', time: '45 mins ago' },
    { name: 'Rohan Verma', blood: 'B+', location: 'Bangalore', time: '1 hr ago' },
];

export const mockDonors = [
    { name: 'Sneha Reddy', blood: 'O+', location: 'Chennai', time: '2 hrs ago' },
    { name: 'Vikram Singh', blood: 'AB+', location: 'Kolkata', time: '3 hrs ago' },
    { name: 'Anjali Gupta', blood: 'A-', location: 'Hyderabad', time: '5 hrs ago' },
];

export const mockChats = [
    { name: 'Dr. Neha Desai', message: 'The blood units are ready...', time: '5 mins ago' },
    { name: 'Ambulance Unit 7', message: 'En route to Fortis, ETA 12 mins.', time: '8 mins ago' },
];

export const mockTasks = [
    { task: 'Check inventory for O- group', due: 'Today' },
    { task: 'Schedule donor drive for next month', due: 'This Week' },
    { task: 'Update emergency contact list', due: 'Today' },
];

// --- ADMIN DUMMY DATA ---
export const mockUsers = [
    { id: 1, name: 'Aditya Sharma', email: 'aditya@example.com', bloodGroup: 'A+', location: 'Mumbai', joinDate: '2024-01-15' },
    { id: 2, name: 'Sneha Reddy', email: 'sneha@example.com', bloodGroup: 'O+', location: 'Chennai', joinDate: '2024-02-20' },
    { id: 3, name: 'Vikram Singh', email: 'vikram@example.com', bloodGroup: 'AB+', location: 'Kolkata', joinDate: '2024-03-10' },
    { id: 4, name: 'Anjali Gupta', email: 'anjali@example.com', bloodGroup: 'A-', location: 'Hyderabad', joinDate: '2024-04-05' },
    { id: 5, name: 'Rohan Verma', email: 'rohan@example.com', bloodGroup: 'B+', location: 'Bangalore', joinDate: '2024-05-21' },
];

export const mockDonationRecords = [
    { id: 101, donorName: 'Sneha Reddy', recipientName: 'Riya Das', hospital: 'Apollo, Chennai', bloodGroup: 'O+', date: '2025-10-05', status: 'Completed' },
    { id: 102, donorName: 'Rajesh Kumar', recipientName: 'Amit Singh', hospital: 'Fortis, Mumbai', bloodGroup: 'A+', date: '2025-10-06', status: 'Completed' },
    { id: 103, donorName: 'Priya Patel', recipientName: 'N/A (Stock)', hospital: 'AIIMS, New Delhi', bloodGroup: 'O-', date: '2025-10-06', status: 'In Stock' },
    { id: 104, donorName: 'Vikram Singh', recipientName: 'Sunita Sharma', hospital: 'AMRI, Kolkata', bloodGroup: 'AB+', date: '2025-10-07', status: 'In Transit' },
];

export const analyticsData = {
    totalUsers: 1428,
    totalDonors: 712,
    requestsFulfilled: '92%',
    bloodSupply: { 'A+': 150, 'A-': 45, 'B+': 120, 'B-': 30, 'AB+': 60, 'AB-': 15, 'O+': 200, 'O-': 80 },
    demandVsSupply: [
        { group: 'A+', supply: 150, demand: 130 },
        { group: 'O-', supply: 80, demand: 110 },
        { group: 'B+', supply: 120, demand: 90 },
        { group: 'AB+', supply: 60, demand: 55 },
    ],
};