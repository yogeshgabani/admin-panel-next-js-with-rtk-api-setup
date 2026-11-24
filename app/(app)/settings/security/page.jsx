"use client";
import { useState } from "react";
import Link from "next/link";

const sessions = [
    { device: "MacBook Pro — Chrome", location: "Mumbai, India", lastActive: "Active now", current: true },
    { device: "iPhone 15 — Safari", location: "Mumbai, India", lastActive: "2 hours ago" },
    { device: "Windows PC — Edge", location: "Pune, India", lastActive: "Yesterday" },
];

export default function SecuritySettingsPage() {
    const [twoFactor, setTwoFactor] = useState(true);
    const [loginAlerts, setLoginAlerts] = useState(true);
    const [password, setPassword] = useState({ current: "", next: "", confirm: "" });
    const [savedAt, setSavedAt] = useState(null);

    const handleSavePassword = (e) => {
        e.preventDefault();
        if (!password.current || !password.next) return;
        setPassword({ current: "", next: "", confirm: "" });
        setSavedAt(new Date().toLocaleTimeString());
    };

    return (
            <div className="space-y-6 max-w-4xl">
                {/* Breadcrumb */}
                <nav className="flex items-center text-sm text-gray-500 space-x-2">
                    <Link href="/settings" className="hover:text-indigo-600">Settings</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">Security</span>
                </nav>

                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Security</h1>
                    <p className="mt-2 text-gray-600">Manage your password, 2FA, and active sessions.</p>
                </div>

                {/* Password */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Change password</h2>
                    <form onSubmit={handleSavePassword} className="space-y-4 max-w-md">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Current password</label>
                            <input
                                type="password"
                                value={password.current}
                                onChange={(e) => setPassword({ ...password, current: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">New password</label>
                            <input
                                type="password"
                                value={password.next}
                                onChange={(e) => setPassword({ ...password, next: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                            />
                            <p className="mt-1 text-xs text-gray-500">At least 8 characters with a mix of letters and numbers.</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm new password</label>
                            <input
                                type="password"
                                value={password.confirm}
                                onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                                Update password
                            </button>
                            {savedAt && (
                                <span className="text-sm text-green-600">Password updated at {savedAt}</span>
                            )}
                        </div>
                    </form>
                </div>

                {/* Two-factor */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Two-factor authentication</h2>
                            <p className="text-sm text-gray-600 mt-1">
                                Add an extra layer of security to your account by requiring a code from your authenticator app.
                            </p>
                        </div>
                        <button
                            onClick={() => setTwoFactor((v) => !v)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${twoFactor ? "bg-indigo-600" : "bg-gray-200"}`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${twoFactor ? "translate-x-6" : "translate-x-1"}`}
                            />
                        </button>
                    </div>
                    {twoFactor && (
                        <div className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                            2FA is enabled. You'll be asked for a code when signing in from a new device.
                        </div>
                    )}
                </div>

                {/* Login alerts */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Login alerts</h2>
                            <p className="text-sm text-gray-600 mt-1">
                                Email me whenever someone signs in from a new device or location.
                            </p>
                        </div>
                        <button
                            onClick={() => setLoginAlerts((v) => !v)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${loginAlerts ? "bg-indigo-600" : "bg-gray-200"}`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${loginAlerts ? "translate-x-6" : "translate-x-1"}`}
                            />
                        </button>
                    </div>
                </div>

                {/* Active sessions */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Active sessions</h2>
                    <div className="space-y-3">
                        {sessions.map((s) => (
                            <div key={s.device} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-gray-50">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{s.device}</p>
                                    <p className="text-xs text-gray-500">{s.location} • {s.lastActive}</p>
                                </div>
                                {s.current ? (
                                    <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">Current</span>
                                ) : (
                                    <button className="text-sm font-medium text-red-600 hover:text-red-700">Sign out</button>
                                )}
                            </div>
                        ))}
                    </div>
                    <button className="mt-4 text-sm font-medium text-red-600 hover:text-red-700">
                        Sign out of all other sessions
                    </button>
                </div>
            </div>
    );
}
