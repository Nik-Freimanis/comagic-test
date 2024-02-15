'use client';
import React from 'react';
import s from './footer.module.scss';
import { Navigation } from '../Navigation';

export const Footer = () => {


    return (
        <header className={s.footer}>
            <div className={s.footer__container}>
                <Navigation />
            </div>
        </header>
    );
};
