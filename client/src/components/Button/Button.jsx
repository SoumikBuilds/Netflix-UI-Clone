import React, { useEffect, useRef, useState } from "react";
import "./Button.css";

import {
    Languages,
    ChevronDown,
    ChevronRight,
    Check
} from "lucide-react";

const Button = ({ spClass, text }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState(text || "English");

    const langRef = useRef(null);

    const languages = [
        {
            name: "English",
            value: "en"
        },
        {
            name: "हिन्दी",
            value: "hi"
        }
    ];

    // Close dropdown when clicking outside
    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                langRef.current &&
                !langRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }

        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };

    }, []);

    const selectLanguage = (selectedLanguage) => {

        console.log("Selected:", selectedLanguage);

        setLanguage(selectedLanguage.name);
        setIsOpen(false);

    };

    return (

        <div
            ref={spClass === "lang-button" ? langRef : null}
            className={
                spClass === "lang-button"
                    ? "button-wrapper language-wrapper"
                    : "button-wrapper"
            }
        >

            {/* BUTTON */}

            <div
                className={`button ${spClass}`}
                onClick={() => {

                    if (spClass === "lang-button") {
                        setIsOpen((prev) => !prev);
                    }

                }}
            >

                {spClass === "lang-button" && (
                    <Languages size={17} />
                )}

                <span>
                    {spClass === "lang-button"
                        ? language
                        : text
                    }
                </span>

                {spClass === "large-gs" && (
                    <div className="lb-da">
                        <ChevronRight size={28} />
                    </div>
                )}

                {spClass === "lang-button" && (
                    <div
                        className={`lb-da ${
                            isOpen ? "rotate-arrow" : ""
                        }`}
                    >
                        <ChevronDown size={18} />
                    </div>
                )}

            </div>


            {/* DROPDOWN */}

            {spClass === "lang-button" && isOpen && (

                <div className="language-dropdown">

                    {languages.map((lang) => (

                        <div
                            key={lang.value}
                            className={`language-option ${
                                language === lang.name
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={(e) => {

                                e.stopPropagation();

                                selectLanguage(lang);

                            }}
                        >

                            <span>
                                {lang.name}
                            </span>

                            {language === lang.name && (
                                <Check size={16} />
                            )}

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
};

export default Button;
