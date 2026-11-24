"use client";
import { Fragment, useState } from "react";
import Link from "next/link";

const channels = [
    { key: "email", label: "Email", description: "Send notifications to admin@example.com" },
    { key: "push", label: "Push", description: "Browser and mobile push notifications" },
    { key: "sms", label: "SMS", description: "Critical alerts only, sent to your phone" },
];

const categories = [
    {
        key: "account",
        title: "Account activity",
        items: [
            { key: "newLogin", label: "New device sign-in" },
            { key: "passwordChange", label: "Password changes" },
            { key: "profileUpdate", label: "Profile updates" },
        ],
    },
    {
        key: "team",
        title: "Team & users",
        items: [
            { key: "newUser", label: "Someone joins your team" },
            { key: "roleChange", label: "Role or permission changes" },
            { key: "mentions", label: "You're @mentioned" },
        ],
    },
    {
        key: "billing",
        title: "Billing",
        items: [
            { key: "invoice", label: "New invoices" },
            { key: "paymentFail", label: "Failed payments" },
            { key: "renewal", label: "Upcoming renewals" },
        ],
    },
];

export default function NotificationsSettingsPage() {
    const initial = {};
    categories.forEach((c) =>
        c.items.forEach((i) => {
            initial[i.key] = { email: true, push: c.key !== "billing", sms: c.key === "billing" };
        })
    );

    const [prefs, setPrefs] = useState(initial);
    const [saved, setSaved] = useState(false);

    const toggle = (itemKey, channel) => {
        setPrefs((p) => ({
            ...p,
            [itemKey]: { ...p[itemKey], [channel]: !p[itemKey][channel] },
        }));
    };

    const save = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
            <div className="space-y-6 max-w-5xl">
                {/* Breadcrumb */}
                <nav className="flex items-center text-sm text-gray-500 space-x-2">
                    <Link href="/settings" className="hover:text-indigo-600">Settings</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">Notifications</span>
                </nav>

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
                        <p className="mt-2 text-gray-600">Choose how and when we contact you.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        {saved && <span className="text-sm text-green-600">Saved</span>}
                        <button
                            onClick={save}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Save preferences
                        </button>
                    </div>
                </div>

                {/* Channel descriptions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {channels.map((c) => (
                        <div key={c.key} className="bg-white rounded-lg shadow-md p-4">
                            <p className="font-semibold text-gray-900">{c.label}</p>
                            <p className="text-sm text-gray-500 mt-1">{c.description}</p>
                        </div>
                    ))}
                </div>

                {/* Matrix */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notification</th>
                                {channels.map((c) => (
                                    <th key={c.key} className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {c.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {categories.map((cat) => (
                                <Fragment key={cat.key}>
                                    <tr className="bg-gray-50">
                                        <td colSpan={channels.length + 1} className="px-6 py-2 text-xs font-semibold text-gray-700 uppercase">
                                            {cat.title}
                                        </td>
                                    </tr>
                                    {cat.items.map((item) => (
                                        <tr key={item.key} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 text-sm text-gray-900">{item.label}</td>
                                            {channels.map((c) => (
                                                <td key={c.key} className="px-6 py-4 text-center">
                                                    <button
                                                        onClick={() => toggle(item.key, c.key)}
                                                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${prefs[item.key][c.key] ? "bg-indigo-600" : "bg-gray-200"}`}
                                                    >
                                                        <span
                                                            className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${prefs[item.key][c.key] ? "translate-x-5" : "translate-x-1"}`}
                                                        />
                                                    </button>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
}
