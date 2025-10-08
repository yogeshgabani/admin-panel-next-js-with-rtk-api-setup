"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loadCredentialsFromStorage } from "@/store/slices/authSlice";

export default function ProtectedRoute({ children }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        // Load credentials from localStorage
        dispatch(loadCredentialsFromStorage());

        // Check authentication
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        } else {
            setIsChecking(false);
        }
    }, [router, dispatch]);

    if (isChecking) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                    <p className="mt-4">Loading...</p>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}


