import type { Metadata } from "next";
import React, {ReactNode} from "react";
import {RouterTab} from "@/app/router/RouterTab";
import s from "@/app/router/router.module.scss";

export const metadata: Metadata = {
    title: "Создание роутеров",
    description: "Тестовое для Comagic",
};

interface RouterLayoutProps {
    children: ReactNode;
}

const tabsList = [
    {id: 0, label: "/router", href: "/router"},
    {id: 1, label: "/router/some", href: "/router/some"},
    {id: 2, label: "/router/another", href: "/router/another"},
];

export default function RootLayout({children}: RouterLayoutProps) {
    return (

    <div className={s.router}>
        <div className={s.router__container}>
            <div className={s.router__container_content}>
                <div className={s.router__container_content_title}>
                    <h1>Cоздание<span> роутеров</span></h1>
                </div>
                <nav>
                    {tabsList.map((tab, id) => (
                        <RouterTab key={tab.id} {...tab}/>
                    ))}
                </nav>
                {children}
            </div>
        </div>
    </div>

    );
}
