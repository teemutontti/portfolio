import { Fragment, ReactElement } from "react";

export default function renderCustomText(text: string[]): ReactElement {
    const formCustomParagraph = (text: string, index: number) => {
        let isBold = false;

        let regularText = "";
        let boldText = "";

        const plainWords = text.split(" ");
        const words: ReactElement[] = [];

        plainWords.forEach((word, index) => {
            if (word.includes("**")) {
                isBold = !isBold;
                if (isBold) {
                    // Bold part started: add to regular text, reset bold text
                    words.push(<Fragment key={`bold${word}${index}`}>{regularText}</Fragment>);
                    boldText = "";
                } else {
                    // Bold part ended: add to bold text, add to words, reset regular text
                    boldText += word.replace("**", "") + " ";
                    words.push(<strong key={`notbold${word}${index}`}>{boldText}</strong>);
                    regularText = "";
                }
            }

            if (isBold) {
                boldText += word.replace("**", "") + " ";
            } else {
                if (!word.includes("**")) regularText += word + " ";
                if (index === plainWords.length - 1) {
                    words.push(<Fragment key={`reg${word}${index}`}>{regularText}</Fragment>);
                }
            }
        });

        return <p className="custom-paragraph" key={index}>{words}</p>;

    }


    return (
        <>
            {text.map((text, index) => (
                formCustomParagraph(text, index)
            ))}
        </>
    )
}