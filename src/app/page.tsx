import Image from "next/image";
import s from "./page.module.scss";
import {BtnSection} from "@components/Sections/BtnSection";
import {YearSection} from "@components/Sections/YearSection";
import {FormSection} from "@components/Sections/FormSection";

export default function Home() {
  return (
    <div>
      <BtnSection />
        <YearSection />
        <FormSection />
    </div>
  );
}
