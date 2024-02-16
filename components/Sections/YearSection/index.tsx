'use client'

import React, { useState, useEffect } from "react";
import s from "./year.module.scss";
import Button from "@components/UI/Button/Button";

export const YearSection = () => {
    const [currentYear, setCurrentYear] = useState();

    useEffect(() => {

        // @ts-ignore
        setCurrentYear(new Date().getFullYear());

    }, []);

    const handleUpdateYear = () => {
        // @ts-ignore
        setCurrentYear(new Date().getFullYear());
    };

    console.log(currentYear)

    return (
        <section className={s.year}>
            <div className={s.year__container}>
                <div className={s.year__container_content}>
                    <h2>Текущий год</h2>
                    <span>{currentYear}</span>
                    <Button onClick={handleUpdateYear}>Обновить год</Button>
                </div>
                <p>Разработчик должен создать приложение с использованием хуков useState и useEffect. <br/> Приложение должно отображать текущий год и иметь возможность его обновления путем нажатия на кнопку.</p>
            </div>
        </section>
    );
};