"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4">
            <div className="max-w-lg w-full text-center">
                <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-200 mb-6">
                    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <p className="text-7xl font-extrabold text-indigo-600 tracking-tight">404</p>
                <h1 className="mt-2 text-3xl font-bold text-slate-900">Page not found</h1>
                <p className="mt-3 text-slate-600">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="mt-8 flex items-center justify-center gap-3">
                    <button
                        onClick={() => router.back()}
                        className="px-5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 font-medium hover:bg-slate-50 transition"
                    >
                        Go back
                    </button>
                    <Link
                        href="/dashboard"
                        className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-sm shadow-indigo-200"
                    >
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}
