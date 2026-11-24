"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddUserPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "User",
        department: "Engineering",
        status: "Active",
        sendInvite: true,
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        await new Promise((r) => setTimeout(r, 600));
        setSubmitting(false);
        setSuccess(true);
        setTimeout(() => router.push("/users"), 900);
    };

    return (
            <div className="space-y-6 max-w-3xl">
                {/* Breadcrumb */}
                <nav className="flex items-center text-sm text-gray-500 space-x-2">
                    <Link href="/users" className="hover:text-indigo-600">Users</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">Add User</span>
                </nav>

                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Add New User</h1>
                    <p className="mt-2 text-gray-600">
                        Create a new team member and invite them to your workspace.
                    </p>
                </div>

                {success && (
                    <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        User added successfully. Redirecting…
                    </div>
                )}

                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
                    {/* Personal info */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">First name</label>
                                <input
                                    name="firstName"
                                    type="text"
                                    required
                                    value={form.firstName}
                                    onChange={handleChange}
                                    placeholder="Jane"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Last name</label>
                                <input
                                    name="lastName"
                                    type="text"
                                    required
                                    value={form.lastName}
                                    onChange={handleChange}
                                    placeholder="Smith"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="jane@example.com"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                                <input
                                    name="phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+1 555 123 4567"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Role & access */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Role &amp; access</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Role</label>
                                <select
                                    name="role"
                                    value={form.role}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none bg-white"
                                >
                                    <option>Admin</option>
                                    <option>Manager</option>
                                    <option>User</option>
                                    <option>Viewer</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Department</label>
                                <select
                                    name="department"
                                    value={form.department}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none bg-white"
                                >
                                    <option>Engineering</option>
                                    <option>Product</option>
                                    <option>Design</option>
                                    <option>Marketing</option>
                                    <option>Sales</option>
                                    <option>Support</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Status</label>
                                <select
                                    name="status"
                                    value={form.status}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none bg-white"
                                >
                                    <option>Active</option>
                                    <option>Pending</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </div>
                        <label className="flex items-center mt-4 gap-2 text-sm text-gray-700">
                            <input
                                type="checkbox"
                                name="sendInvite"
                                checked={form.sendInvite}
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            Send invitation email
                        </label>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-2">
                        <Link
                            href="/users"
                            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:bg-indigo-400 transition"
                        >
                            {submitting ? "Saving…" : "Create User"}
                        </button>
                    </div>
                </form>
            </div>
    );
}
