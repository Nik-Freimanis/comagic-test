'use client'

import React, {useState} from "react";
import { useForm } from "react-hook-form";
import s from "./formSection.module.scss";
import Button from "@components/UI/Button/Button";
import Input from "@components/UI/Input/Input";
import person from '@assets/svg/person_form.svg'
import arrow from '@assets/svg/arrow.svg'
import Image from "next/image";

export const FormSection = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <section className={s.formSection}>
            <div className={s.formSection__container}>
                <div className={s.formSection__container_content}>
                    <div className={s.formSection__container_content_title}>
                        <h1>Работа <span>с формами</span></h1>
                        <div className={s.formSection__container_content_title_img}>
                            <Image src={person} alt={'person'} />
                            <Image src={arrow} alt={'arrow'} id={'arrow'}/>
                        </div>
                    </div>

                    <form className={s.formSection__container_content_form} onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                        <div className={s.formSection__container_content_form_name}>
                            <Input {...register("firstName")} label={'Ваше имя'} placeholder="Имя"/>
                            <Input {...register("lastName")} label={'Ваша фамилия'} placeholder="Фамилия"/>
                        </div>
                        <Input {...register("email")} label={'Ваша почта'} placeholder="Почта"/>
                        <div className={s.formSection__container_content_form_textareaBox}>
                            <label>Обо мне</label>
                            <textarea {...register("aboutMe")} placeholder="Обо мне" />
                        </div>
                        <div className={s.formSection__container_content_form_data}>
                            <Button variant={'outlineSmall'} type={'submit'}>Отправить</Button>
                            <p>{data}</p>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};
