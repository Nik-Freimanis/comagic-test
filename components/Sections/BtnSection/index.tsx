'use client'

import {useState} from 'react';
import s from './btnSection.module.scss';
import person from '@assets/svg/person.svg';
import bg from '@assets/svg/bg.svg';
import Image from "next/image";
import Button from "@components/UI/Button/Button";
import Typewriter from "@components/UI/TypeWritter";

export const BtnSection = () => {
    const [buttonVariant, setButtonVariant] = useState<'fillSmall' | 'outlineSmall'>('fillSmall');
    const [buttonText, setButtonText] = useState('Кликни');

    const handleButtonClick = () => {
        setButtonVariant(prevVariant => (prevVariant === 'fillSmall' ? 'outlineSmall' : 'fillSmall'));
        setButtonText(prevText => (prevText === 'Кликни' ? 'Кликнуто' : 'Кликни'));
    };

    console.log(buttonVariant)

    return (
        <section className={s.btnSection}>
            <div className={s.btnSection__container}>
                <div className={s.btnSection__container_content}>
                    <div className={s.btnSection__container_content_wrapper}>
                        <div className={s.btnSection__container_content_wrapper_title}>
                            <h1>создание компонента <span>кнопки</span></h1>
                        </div>
                        <div className={s.btnSection__container_content_wrapper_item}>
                            <Image id={'person'} src={person} alt={'person'} priority={true}/>
                            <Image id={'bg_person'} src={bg} alt={'bg'} priority={true}/>
                        </div>
                    </div>
                    <Typewriter
                        text={'Разработчик должен создать функциональный компонент кнопки с текстовым содержимым, который меняет цвет при нажатии. Кнопка должна иметь возможность менять текст и стили.'}/>
                    <Button variant={buttonVariant} onClick={handleButtonClick}>{buttonText}</Button>
                </div>
                <div></div>
            </div>
        </section>
    )
}
