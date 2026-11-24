"use client";
import Link from "next/link";

const monthly = [
    { m: "Jan", v: 32 },
    { m: "Feb", v: 41 },
    { m: "Mar", v: 38 },
    { m: "Apr", v: 52 },
    { m: "May", v: 49 },
    { m: "Jun", v: 63 },
    { m: "Jul", v: 71 },
    { m: "Aug", v: 68 },
    { m: "Sep", v: 84 },
    { m: "Oct", v: 91 },
    { m: "Nov", v: 78 },
    { m: "Dec", v: 96 },
];

const topProducts = [
    { name: "Pro Plan (Annual)", sales: 1284, revenue: "$128,400", growth: "+18%" },
    { name: "Team Plan", sales: 942, revenue: "$56,520", growth: "+12%" },
    { name: "Starter Plan", sales: 2134, revenue: "$42,680", growth: "+6%" },
    { name: "Add-on: Storage", sales: 612, revenue: "$18,360", growth: "+9%" },
    { name: "Add-on: SSO", sales: 184, revenue: "$11,040", growth: "+22%" },
];

export default function SalesReportPage() {
    const max = Math.max(...monthly.map((m) => m.v));

    return (
            <div className="space-y-6">
                {/* Breadcrumb */}
                <nav className="flex items-center text-sm text-gray-500 space-x-2">
                    <Link href="/reports" className="hover:text-indigo-600">Reports</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">Sales Report</span>
                </nav>

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Sales Report</h1>
                        <p className="mt-2 text-gray-600">Performance across the last 12 months.</p>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        Export CSV
                    </button>
                </div>

                {/* KPIs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Total Revenue", value: "$257,000", change: "+14.2%" },
                        { label: "Orders", value: "5,156", change: "+9.4%" },
                        { label: "Avg. Order Value", value: "$49.80", change: "+4.1%" },
                        { label: "Refund Rate", value: "1.8%", change: "-0.3%", down: true },
                    ].map((k) => (
                        <div key={k.label} className="bg-white rounded-lg shadow-md p-5">
                            <p className="text-sm text-gray-600">{k.label}</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">{k.value}</p>
                            <p className={`text-sm mt-1 ${k.down ? "text-red-600" : "text-green-600"}`}>{k.change}</p>
                        </div>
                    ))}
                </div>

                {/* Chart */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly revenue (in $k)</h2>
                    <div className="flex items-end gap-2 h-56">
                        {monthly.map((m) => (
                            <div key={m.m} className="flex-1 flex flex-col items-center gap-1">
                                <div
                                    className="w-full rounded-t-md bg-gradient-to-t from-indigo-600 to-indigo-400 hover:from-indigo-700 hover:to-indigo-500 transition-colors"
                                    style={{ height: `${(m.v / max) * 100}%` }}
                                    title={`${m.m}: $${m.v}k`}
                                />
                                <span className="text-xs text-gray-500">{m.m}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top products */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Top products</h2>
                    </div>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sales</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Growth</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {topProducts.map((p) => (
                                <tr key={p.name} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{p.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{p.sales.toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{p.revenue}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">{p.growth}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
}
