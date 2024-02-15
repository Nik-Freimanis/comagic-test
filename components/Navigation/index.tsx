'use client'

import React from "react";
import Link from "next/link";
import s from './navigation.module.scss'
import cn from "classnames";
import { usePathname } from 'next/navigation';

const navList = [
    {id: 1, text: 'Домой', link: '/', enabled: true},
    {id: 2, text: 'Страница 1', link: '/page1', enabled: true},
    {id: 3, text: 'Страница 2', link: '/page2', enabled: true},
]

export const Navigation = () => {

    const pathname = usePathname()

    return (
        <nav className={s.nav}>
                {navList?.map(el => (
                    <Link key={el.id}
                          href={el.link}
                          className={cn(
                              s.nav__links,
                              el.link === pathname,
                              !el.enabled && s._disabled,
                          )}
                          onClick={e => !el.enabled && e.preventDefault()}
                    >
                        {el.text}
                    </Link>
                ))}
        </nav>
    )
}