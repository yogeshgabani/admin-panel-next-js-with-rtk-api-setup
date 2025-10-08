"use client";
import DashboardLayout from "@/components/DashboardLayout";

export default function AnalyticsPage() {
    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
                    <p className="mt-2 text-gray-600">Track your performance metrics</p>
                </div>

                {/* Analytics Cards */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Page Views
                        </h3>
                        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                            <p className="text-gray-500">Chart placeholder - Page Views</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            User Growth
                        </h3>
                        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                            <p className="text-gray-500">Chart placeholder - User Growth</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Revenue Trend
                        </h3>
                        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                            <p className="text-gray-500">Chart placeholder - Revenue</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Traffic Sources
                        </h3>
                        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                            <p className="text-gray-500">Chart placeholder - Traffic Sources</p>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}


