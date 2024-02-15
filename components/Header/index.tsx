'use client';
import React from 'react';
import s from './header.module.scss';
import { Navigation } from '../Navigation';

export const Header = () => {


    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <div className={s.header__container_logo}>Тестовое Comagic</div>
                <Navigation />
            </div>
        </header>
    );
};
