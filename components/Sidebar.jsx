"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Sidebar({ isOpen }) {
    const pathname = usePathname();
    const isManualToggle = useRef(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const menuItems = [
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
        },
        {
            name: "Users",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            submenu: [
                { name: "All Users", href: "/users" },
                { name: "Add User", href: "/users/add" },
                { name: "User Roles", href: "/users/roles" },
            ],
        },
        {
            name: "Settings",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            submenu: [
                { name: "General", href: "/settings" },
                { name: "Security", href: "/settings/security" },
                { name: "Notifications", href: "/settings/notifications" },
            ],
        },
        {
            name: "Analytics",
            href: "/analytics",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
        {
            name: "Reports",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            submenu: [
                { name: "All Reports", href: "/reports" },
                { name: "Sales Report", href: "/reports/sales" },
                { name: "Activity Report", href: "/reports/activity" },
            ],
        },
    ];

    const [openSubmenu, setOpenSubmenu] = useState(null);

    const isSubmenuItemActive = (submenuItems) => {
        return submenuItems?.some(item => pathname === item.href);
    };

    const toggleSubmenu = (e, itemName) => {
        e.preventDefault();
        e.stopPropagation();
        isManualToggle.current = true;
        setOpenSubmenu(prev => prev === itemName ? null : itemName);
        // Reset manual toggle flag after a short delay
        setTimeout(() => {
            isManualToggle.current = false;
        }, 300);
    };

    // Keep submenu open when navigating to pages within it
    useEffect(() => {
        // Don't interfere if user just manually toggled
        if (isManualToggle.current) {
            return;
        }

        const activeSubmenu = menuItems.find((item) =>
            item.submenu?.some(subitem => pathname === subitem.href)
        );

        if (activeSubmenu) {
            setOpenSubmenu(activeSubmenu.name);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <aside
            className={`${isOpen ? "translate-x-0" : "-translate-x-full"
                } ${isCollapsed ? "w-20" : "w-64"} fixed lg:static lg:translate-x-0 inset-y-0 left-0 z-30 bg-gray-900 text-white transition-all duration-300 ease-in-out`}
        >
            <div className="flex flex-col h-full">
                {/* Logo */}
                <div className="flex items-center justify-between h-16 bg-gray-800 px-4">
                    {!isCollapsed && <h1 className="text-2xl font-bold">Admin Panel</h1>}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                        title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isCollapsed ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-4">
                    <ul className="space-y-2 px-3">
                        {menuItems.map((item) => (
                            <li key={item.name} className="relative group">
                                {item.submenu ? (
                                    // Menu item with submenu
                                    <div>
                                        <button
                                            onClick={(e) => !isCollapsed && toggleSubmenu(e, item.name)}
                                            className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} w-full px-4 py-3 rounded-lg transition-colors ${isMounted && (openSubmenu === item.name || isSubmenuItemActive(item.submenu))
                                                ? "bg-gray-800 text-white"
                                                : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                                }`}
                                            title={isCollapsed ? item.name : ""}
                                        >
                                            <div className={`flex items-center ${isCollapsed ? '' : 'space-x-3'}`}>
                                                {item.icon}
                                                {!isCollapsed && <span className="font-medium">{item.name}</span>}
                                            </div>
                                            {!isCollapsed && (
                                                <svg
                                                    className={`w-5 h-5 transition-transform duration-200 ${openSubmenu === item.name ? "rotate-180" : ""
                                                        }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                        {/* Tooltip for collapsed state */}
                                        {isCollapsed && (
                                            <div className="absolute left-full ml-2 top-0 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 pointer-events-none">
                                                {item.name}
                                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                                            </div>
                                        )}
                                        {/* Submenu */}
                                        {!isCollapsed && (
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubmenu === item.name
                                                    ? "max-h-96 opacity-100 mt-2"
                                                    : "max-h-0 opacity-0"
                                                    }`}
                                            >
                                                <ul className="space-y-1 pl-4">
                                                    {item.submenu.map((subitem) => (
                                                        <li key={subitem.name}>
                                                            <Link
                                                                href={subitem.href}
                                                                className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm ${isMounted && pathname === subitem.href
                                                                    ? "bg-indigo-600 text-white"
                                                                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                                                    }`}
                                                            >
                                                                <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                                                                <span>{subitem.name}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    // Regular menu item without submenu
                                    <>
                                        <Link
                                            href={item.href}
                                            className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} px-4 py-3 rounded-lg transition-colors ${isMounted && pathname === item.href
                                                ? "bg-indigo-600 text-white"
                                                : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                                }`}
                                            title={isCollapsed ? item.name : ""}
                                        >
                                            {item.icon}
                                            {!isCollapsed && <span className="font-medium">{item.name}</span>}
                                        </Link>
                                        {/* Tooltip for collapsed state */}
                                        {isCollapsed && (
                                            <div className="absolute left-full ml-2 top-0 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 pointer-events-none">
                                                {item.name}
                                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer */}
                <div className="p-4 bg-gray-800">
                    <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
                        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center" title={isCollapsed ? "Admin User" : ""}>
                            <span className="text-white font-semibold">A</span>
                        </div>
                        {!isCollapsed && (
                            <div className="flex-1">
                                <p className="text-sm font-medium">Admin User</p>
                                <p className="text-xs text-gray-400">admin@example.com</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </aside>
    );
}


