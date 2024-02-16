'use client'
import { useEffect, useRef, FC } from 'react';

interface TypewriterProps {
    text: string;
}

const Typewriter: FC<TypewriterProps> = ({ text }) => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const textElement = textRef.current;
        if (!textElement || !text) return;

        let index = 0;
        const interval = setInterval(() => {
            const currentText = textElement.innerHTML;
            const nextCharacter = text[index];

            textElement.innerHTML = currentText + nextCharacter;

            index++;

            if (index === text.length) clearInterval(interval);
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return <p ref={textRef} className="typewriter" />;
};

export default Typewriter;



