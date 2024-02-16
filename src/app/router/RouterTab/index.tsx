'use client'
import React from "react";
import Link from "next/link";


interface RouterTabsProps {
    id: number,
    label: string;
    href: string;
}


export const RouterTab: React.FC<RouterTabsProps> = ({label, href}) => {
    return (
        <Link href={href}>
        <div>
            {label}
        </div>
    </Link>
    );
}