"use client";
import DashboardLayout from "@/components/DashboardLayout";

export default function ReportsPage() {
    const reports = [
        {
            id: 1,
            name: "Monthly Sales Report",
            date: "Oct 1, 2025",
            status: "Completed",
            type: "Sales",
        },
        {
            id: 2,
            name: "User Activity Report",
            date: "Oct 5, 2025",
            status: "In Progress",
            type: "Analytics",
        },
        {
            id: 3,
            name: "Q3 Financial Summary",
            date: "Sep 30, 2025",
            status: "Completed",
            type: "Financial",
        },
        {
            id: 4,
            name: "Customer Feedback Report",
            date: "Oct 7, 2025",
            status: "Pending",
            type: "Feedback",
        },
    ];

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
                        <p className="mt-2 text-gray-600">Generate and view your reports</p>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        Generate Report
                    </button>
                </div>

                {/* Reports List */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Report Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {reports.map((report) => (
                                <tr key={report.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {report.name}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                            {report.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{report.date}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${report.status === "Completed"
                                                    ? "bg-green-100 text-green-800"
                                                    : report.status === "In Progress"
                                                        ? "bg-yellow-100 text-yellow-800"
                                                        : "bg-gray-100 text-gray-800"
                                                }`}
                                        >
                                            {report.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                                            View
                                        </button>
                                        <button className="text-green-600 hover:text-green-900 mr-4">
                                            Download
                                        </button>
                                        <button className="text-red-600 hover:text-red-900">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}


