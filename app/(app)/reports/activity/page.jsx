"use client";
import { useState } from "react";
import Link from "next/link";

const allActivity = [
    { id: 1, user: "John Doe", action: "Created project \"Phoenix\"", category: "Project", time: "2 hours ago", ip: "10.0.0.4" },
    { id: 2, user: "Jane Smith", action: "Updated user profile", category: "User", time: "4 hours ago", ip: "10.0.0.7" },
    { id: 3, user: "Bob Johnson", action: "Completed task \"Migrate DB\"", category: "Task", time: "6 hours ago", ip: "10.0.0.12" },
    { id: 4, user: "Alice Brown", action: "Added comment on \"Q4 roadmap\"", category: "Comment", time: "8 hours ago", ip: "10.0.0.5" },
    { id: 5, user: "Charlie Wilson", action: "Uploaded document \"design.fig\"", category: "File", time: "10 hours ago", ip: "10.0.0.21" },
    { id: 6, user: "Diana Lee", action: "Invited new user diana@acme.com", category: "User", time: "Yesterday", ip: "10.0.0.5" },
    { id: 7, user: "Ethan Patel", action: "Changed role of Bob Johnson to Manager", category: "User", time: "Yesterday", ip: "10.0.0.4" },
    { id: 8, user: "Fiona Wong", action: "Deleted report \"Old Q1 summary\"", category: "Report", time: "2 days ago", ip: "10.0.0.18" },
    { id: 9, user: "George Kim", action: "Exported users list", category: "Export", time: "2 days ago", ip: "10.0.0.4" },
    { id: 10, user: "Hannah Ortiz", action: "Signed in", category: "Auth", time: "3 days ago", ip: "10.0.0.9" },
];

const categoryColors = {
    Project: "bg-blue-100 text-blue-700",
    User: "bg-purple-100 text-purple-700",
    Task: "bg-green-100 text-green-700",
    Comment: "bg-yellow-100 text-yellow-700",
    File: "bg-pink-100 text-pink-700",
    Report: "bg-indigo-100 text-indigo-700",
    Export: "bg-orange-100 text-orange-700",
    Auth: "bg-gray-100 text-gray-700",
};

export default function ActivityReportPage() {
    const [filter, setFilter] = useState("All");
    const categories = ["All", ...Array.from(new Set(allActivity.map((a) => a.category)))];

    const filtered = filter === "All" ? allActivity : allActivity.filter((a) => a.category === filter);

    return (
            <div className="space-y-6">
                {/* Breadcrumb */}
                <nav className="flex items-center text-sm text-gray-500 space-x-2">
                    <Link href="/reports" className="hover:text-indigo-600">Reports</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">Activity Report</span>
                </nav>

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Activity Report</h1>
                        <p className="mt-2 text-gray-600">Audit log of recent user actions.</p>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        Export
                    </button>
                </div>

                {/* Filter chips */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((c) => (
                        <button
                            key={c}
                            onClick={() => setFilter(c)}
                            className={`px-3 py-1.5 text-sm rounded-full border transition ${filter === c
                                ? "bg-indigo-600 text-white border-indigo-600"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}`}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <ul className="relative space-y-5 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-gray-200">
                        {filtered.map((a) => (
                            <li key={a.id} className="relative pl-12">
                                <span className="absolute left-0 top-0.5 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-xs ring-4 ring-white">
                                    {a.user.charAt(0)}
                                </span>
                                <div className="flex flex-wrap items-baseline gap-x-2">
                                    <p className="font-medium text-gray-900">{a.user}</p>
                                    <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${categoryColors[a.category] || "bg-gray-100 text-gray-700"}`}>
                                        {a.category}
                                    </span>
                                    <span className="text-xs text-gray-500 ml-auto">{a.time}</span>
                                </div>
                                <p className="text-sm text-gray-700 mt-0.5">{a.action}</p>
                                <p className="text-xs text-gray-400 mt-0.5">IP {a.ip}</p>
                            </li>
                        ))}
                        {filtered.length === 0 && (
                            <li className="text-center text-sm text-gray-500 py-8">No activity in this category.</li>
                        )}
                    </ul>
                </div>
            </div>
    );
}
