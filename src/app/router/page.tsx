import React, {ReactNode} from "react";
import s from './router.module.scss'
import Image from "next/image";
import person from '@assets/svg/person_router.svg'
import bg from '@assets/svg/bg.svg'
import Typewriter from "@components/UI/TypeWritter";

const RouterPage = () => {
    return (
        <div className={s.page}>
            <Image src={person} alt={'person'} />
            <Image src={bg} alt={'bg'} id={'bg'}/>
            <Typewriter text={'Разработчик должен изучить и применить на практике подход React Router для создания нескольких страниц приложения с возможностью перехода между ними.'} />
        </div>
    )
}

export default RouterPage;
