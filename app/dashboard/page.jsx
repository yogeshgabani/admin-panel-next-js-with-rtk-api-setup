"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/store/slices/authSlice";

export default function DashboardPage() {
    const user = useSelector(selectCurrentUser);

    const stats = [
        {
            name: "Total Users",
            value: "2,543",
            change: "+12.5%",
            changeType: "increase",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
        {
            name: "Revenue",
            value: "$45,231",
            change: "+8.2%",
            changeType: "increase",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            name: "Active Projects",
            value: "18",
            change: "+3",
            changeType: "increase",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            name: "Completion Rate",
            value: "94.5%",
            change: "+2.1%",
            changeType: "increase",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
    ];

    const recentActivities = [
        { id: 1, user: "John Doe", action: "Created new project", time: "2 hours ago" },
        { id: 2, user: "Jane Smith", action: "Updated user profile", time: "4 hours ago" },
        { id: 3, user: "Bob Johnson", action: "Completed task", time: "6 hours ago" },
        { id: 4, user: "Alice Brown", action: "Added new comment", time: "8 hours ago" },
        { id: 5, user: "Charlie Wilson", action: "Uploaded document", time: "10 hours ago" },
    ];

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Welcome message */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Welcome back, {user?.name || "Admin"}! 👋
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Here's what's happening with your projects today.
                    </p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.name}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                                    <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                                    <p
                                        className={`mt-2 text-sm ${stat.changeType === "increase"
                                                ? "text-green-600"
                                                : "text-red-600"
                                            }`}
                                    >
                                        {stat.change}
                                    </p>
                                </div>
                                <div className="ml-4 p-3 bg-indigo-100 rounded-lg text-indigo-600">
                                    {stat.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Activities */}
                <div className="bg-white rounded-lg shadow-md">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-900">Recent Activities</h2>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {recentActivities.map((activity) => (
                                <div
                                    key={activity.id}
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                                            <span className="text-white font-semibold text-sm">
                                                {activity.user.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">
                                                {activity.user}
                                            </p>
                                            <p className="text-sm text-gray-600">{activity.action}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-500">{activity.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md p-6 text-white hover:shadow-lg transition-shadow cursor-pointer">
                        <h3 className="text-lg font-semibold mb-2">Create New Project</h3>
                        <p className="text-blue-100">Start a new project and invite team members</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-md p-6 text-white hover:shadow-lg transition-shadow cursor-pointer">
                        <h3 className="text-lg font-semibold mb-2">Invite Users</h3>
                        <p className="text-purple-100">Add new team members to your workspace</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-md p-6 text-white hover:shadow-lg transition-shadow cursor-pointer">
                        <h3 className="text-lg font-semibold mb-2">View Reports</h3>
                        <p className="text-green-100">Check detailed analytics and reports</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}


