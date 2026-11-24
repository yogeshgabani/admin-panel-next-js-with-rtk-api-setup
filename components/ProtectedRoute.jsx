"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loadCredentialsFromStorage } from "@/store/slices/authSlice";

export default function ProtectedRoute({ children }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [authed, setAuthed] = useState(null);

    useEffect(() => {
        const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
        if (!token) {
            router.replace("/login");
            setAuthed(false);
        } else {
            dispatch(loadCredentialsFromStorage());
            setAuthed(true);
        }
    }, [router, dispatch]);

    if (authed !== true) return null;
    return children;
}
