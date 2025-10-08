"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { useState } from "react";

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        siteName: "Admin Panel",
        email: "admin@example.com",
        notifications: true,
        twoFactor: false,
    });

    const handleSave = () => {
        alert("Settings saved successfully!");
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                    <p className="mt-2 text-gray-600">Manage your application settings</p>
                </div>

                {/* Settings Form */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="space-y-6">
                        {/* General Settings */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                General Settings
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Site Name
                                    </label>
                                    <input
                                        type="text"
                                        value={settings.siteName}
                                        onChange={(e) =>
                                            setSettings({ ...settings, siteName: e.target.value })
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Admin Email
                                    </label>
                                    <input
                                        type="email"
                                        value={settings.email}
                                        onChange={(e) =>
                                            setSettings({ ...settings, email: e.target.value })
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200" />

                        {/* Notification Settings */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                Notifications
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">
                                            Email Notifications
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Receive email updates about your account activity
                                        </p>
                                    </div>
                                    <button
                                        onClick={() =>
                                            setSettings({
                                                ...settings,
                                                notifications: !settings.notifications,
                                            })
                                        }
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.notifications ? "bg-indigo-600" : "bg-gray-200"
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.notifications ? "translate-x-6" : "translate-x-1"
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200" />

                        {/* Security Settings */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Security</h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">
                                            Two-Factor Authentication
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Add an extra layer of security to your account
                                        </p>
                                    </div>
                                    <button
                                        onClick={() =>
                                            setSettings({ ...settings, twoFactor: !settings.twoFactor })
                                        }
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.twoFactor ? "bg-indigo-600" : "bg-gray-200"
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.twoFactor ? "translate-x-6" : "translate-x-1"
                                                }`}
                                        />
                                    </button>
                                </div>
                                <div>
                                    <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                                        Change Password
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="pt-4">
                            <button
                                onClick={handleSave}
                                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}


