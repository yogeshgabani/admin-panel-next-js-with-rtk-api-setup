"use client";

const pageViews = [120, 180, 150, 200, 240, 210, 280, 320, 290, 360, 410, 380, 440, 470];
const userGrowth = [50, 65, 80, 92, 110, 134, 162, 190, 215, 248, 280, 320];
const revenue = [
    { m: "Jan", v: 32 }, { m: "Feb", v: 41 }, { m: "Mar", v: 38 }, { m: "Apr", v: 52 },
    { m: "May", v: 49 }, { m: "Jun", v: 63 }, { m: "Jul", v: 71 }, { m: "Aug", v: 84 },
];
const traffic = [
    { src: "Direct", pct: 38, color: "bg-indigo-600" },
    { src: "Organic search", pct: 27, color: "bg-blue-500" },
    { src: "Social", pct: 18, color: "bg-pink-500" },
    { src: "Referral", pct: 11, color: "bg-amber-500" },
    { src: "Email", pct: 6, color: "bg-emerald-500" },
];

function LineChart({ data, stroke = "#6366f1", fill = "rgba(99,102,241,0.15)" }) {
    const w = 400;
    const h = 180;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const points = data.map((v, i) => {
        const x = (i / (data.length - 1)) * w;
        const y = h - ((v - min) / range) * (h - 20) - 10;
        return [x, y];
    });
    const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ");
    const areaD = `${pathD} L${w},${h} L0,${h} Z`;

    return (
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-48" preserveAspectRatio="none">
            <path d={areaD} fill={fill} />
            <path d={pathD} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
            {points.map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="2.5" fill={stroke} />
            ))}
        </svg>
    );
}

function BarChart({ data }) {
    const max = Math.max(...data.map((d) => d.v));
    return (
        <div className="flex items-end gap-2 h-48">
            {data.map((d) => (
                <div key={d.m} className="flex-1 flex flex-col items-center gap-1">
                    <div
                        className="w-full rounded-t-md bg-gradient-to-t from-purple-600 to-purple-400"
                        style={{ height: `${(d.v / max) * 100}%` }}
                        title={`${d.m}: $${d.v}k`}
                    />
                    <span className="text-xs text-gray-500">{d.m}</span>
                </div>
            ))}
        </div>
    );
}

function DonutChart({ data }) {
    const colors = ["#6366f1", "#3b82f6", "#ec4899", "#f59e0b", "#10b981"];
    let cum = 0;
    const slices = data.map((d, i) => {
        const start = cum;
        cum += d.pct;
        const end = cum;
        const r = 70;
        const cx = 90, cy = 90;
        const a1 = (start / 100) * Math.PI * 2 - Math.PI / 2;
        const a2 = (end / 100) * Math.PI * 2 - Math.PI / 2;
        const x1 = cx + r * Math.cos(a1);
        const y1 = cy + r * Math.sin(a1);
        const x2 = cx + r * Math.cos(a2);
        const y2 = cy + r * Math.sin(a2);
        const large = end - start > 50 ? 1 : 0;
        return (
            <path
                key={i}
                d={`M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`}
                fill={colors[i % colors.length]}
            />
        );
    });
    return (
        <svg viewBox="0 0 180 180" className="w-44 h-44">
            {slices}
            <circle cx="90" cy="90" r="40" fill="white" />
        </svg>
    );
}

export default function AnalyticsPage() {
    return (
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
                        <p className="mt-2 text-gray-600">Track your performance metrics</p>
                    </div>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last quarter</option>
                        <option>This year</option>
                    </select>
                </div>

                {/* KPI cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Page views", value: "48,254", change: "+12.3%" },
                        { label: "Unique visitors", value: "12,402", change: "+7.8%" },
                        { label: "Bounce rate", value: "32.4%", change: "-2.1%", down: true },
                        { label: "Avg. session", value: "3m 24s", change: "+0:18" },
                    ].map((k) => (
                        <div key={k.label} className="bg-white rounded-lg shadow-md p-5">
                            <p className="text-sm text-gray-600">{k.label}</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">{k.value}</p>
                            <p className={`text-sm mt-1 ${k.down ? "text-amber-600" : "text-green-600"}`}>{k.change}</p>
                        </div>
                    ))}
                </div>

                {/* Charts grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Page Views</h3>
                        <LineChart data={pageViews} stroke="#6366f1" fill="rgba(99,102,241,0.15)" />
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
                        <LineChart data={userGrowth} stroke="#10b981" fill="rgba(16,185,129,0.15)" />
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
                        <BarChart data={revenue} />
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
                        <div className="flex items-center gap-6">
                            <DonutChart data={traffic} />
                            <ul className="flex-1 space-y-2">
                                {traffic.map((t, i) => (
                                    <li key={t.src} className="flex items-center justify-between text-sm">
                                        <span className="flex items-center gap-2">
                                            <span className={`inline-block w-3 h-3 rounded-sm ${t.color}`} />
                                            <span className="text-gray-700">{t.src}</span>
                                        </span>
                                        <span className="font-semibold text-gray-900">{t.pct}%</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
}
