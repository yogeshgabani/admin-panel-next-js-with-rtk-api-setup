"use client";
import Link from "next/link";

const roles = [
    {
        name: "Admin",
        description: "Full access to all features, settings, and user management.",
        users: 3,
        color: "bg-red-100 text-red-700",
        permissions: ["Manage users", "Manage billing", "Manage settings", "View all reports", "Export data"],
    },
    {
        name: "Manager",
        description: "Manage team members, view reports, and approve requests.",
        users: 8,
        color: "bg-indigo-100 text-indigo-700",
        permissions: ["Manage team", "View all reports", "Approve requests", "Export data"],
    },
    {
        name: "User",
        description: "Standard access to most features within their team.",
        users: 124,
        color: "bg-blue-100 text-blue-700",
        permissions: ["Create content", "View team reports", "Comment"],
    },
    {
        name: "Viewer",
        description: "Read-only access. Cannot create or modify any content.",
        users: 42,
        color: "bg-gray-100 text-gray-700",
        permissions: ["View dashboards", "View reports"],
    },
];

export default function UserRolesPage() {
    return (
            <div className="space-y-6">
                {/* Breadcrumb */}
                <nav className="flex items-center text-sm text-gray-500 space-x-2">
                    <Link href="/users" className="hover:text-indigo-600">Users</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">User Roles</span>
                </nav>

                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">User Roles</h1>
                        <p className="mt-2 text-gray-600">Define what each type of user can do.</p>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        + Add Role
                    </button>
                </div>

                {/* Roles grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {roles.map((role) => (
                        <div
                            key={role.name}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${role.color}`}>
                                        {role.name}
                                    </span>
                                    <p className="mt-2 text-sm text-gray-600">{role.description}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-gray-900">{role.users}</p>
                                    <p className="text-xs text-gray-500">users</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-xs font-semibold uppercase text-gray-500 mb-2">Permissions</p>
                                <ul className="space-y-1">
                                    {role.permissions.map((p) => (
                                        <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                                            <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-5 flex gap-2">
                                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Edit</button>
                                <span className="text-gray-300">•</span>
                                <button className="text-sm font-medium text-gray-600 hover:text-gray-800">Duplicate</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
}
