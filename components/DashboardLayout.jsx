"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ProtectedRoute from "./ProtectedRoute";

export default function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <ProtectedRoute>
            <div className="flex h-screen overflow-hidden bg-gray-100">
                {/* Sidebar */}
                <Sidebar isOpen={sidebarOpen} />

                {/* Mobile sidebar overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                        onClick={toggleSidebar}
                    />
                )}

                {/* Main content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Header */}
                    <Header toggleSidebar={toggleSidebar} />

                    {/* Page content */}
                    <main className="flex-1 overflow-y-auto p-6">
                        {children}
                    </main>
                </div>
            </div>
        </ProtectedRoute>
    );
}


