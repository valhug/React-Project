import React, { useState} from "react";
import "./index.css";

function Accordion ({title, content}: {title: string, content: string}) {
    /* const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [accordions, setAccordions] = useState<string[]>([
        "Accordion 1",
        "Accordion 2",
        "Accordion 3",
    ]);

    const handleAccordionClick = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="accordion">
            {accordions.map((accordion, index) => (
                <div key={index} className="accordion-item">
                    <button
                        className="accordion-title"
                        onClick={() => handleAccordionClick(index)}
                    >
                        {accordion}
                    </button>
                    {activeIndex === index && (
                        <div className="accordion-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.
                        </div>
                    )}
                </div>
            ))}
        </div>
    ); */
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <section className="accordion-card" key={Math.random()}>
            <div className="header" onClick={() => setIsActive(!isActive)}>
                <div>{title} </div>
                <p className="icon">{isActive ? "-" : "+"}</p>
            </div>
            <div className="content">
                {isActive && <p className="card-info">{content}</p>}
            </div>
        </section>
    );
};

export default Accordion;