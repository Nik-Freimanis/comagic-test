'use client';
import React from 'react';
import s from './header.module.scss';
import { Navigation } from '../Navigation';
import Link from "next/link";

export const Header = () => {


    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <Link className={s.header__container_logo} href={'/'}>Тестовое в Comagic</Link>
                <Navigation />
            </div>
        </header>
    );
};
