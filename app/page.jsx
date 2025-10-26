"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem("token");
        if (token) {
            router.push("/dashboard");
        } else {
            router.push("/login");
        }
    }, [router]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
                <p className="mt-4">Loading...</p>
            </div>
        </div>
    );
}


