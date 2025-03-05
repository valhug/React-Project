/* import React, { useState} from "react";
import { FaSearch } from "react-icons/fa";
import './index.css';

function HiddenSearchBar() {
    const [showInput, setShowInput] = useState(false);
    const [bgColor, setBgColor] = useState("white");
    const [input, setInput] = useState("");
    const [search, setSearch] = useState<Array<string>>([]);

    const handleClick = (e/* : React.MouseEvent<HTMLButtonElement> *) => {
        setBgColor("1a1a1a");
        if (e.target.className === "container") {
            setShowInput(false);
            setBgColor("#fff");
        }
    };
    const handleSearch = (e) => {
        /* setShowInput(true); *
        e.preventDefault();
        setSearch((input) => input.concat({
            text: input,
            id: Math.floor(Math.random() * 100),
        }));

        setInput("");

    }
    const removeTodo = (id: number):void => 
        setSearch((search) => search.filter((t) => t.id !== id));

    return (
        <section
            className="container"
            style={{background:bgColor}}
            onClick={handleClick}>
                {showInput ? (
                    <input type="text" placeholder="Search..." value={input} onChange={(e) => setInput(e.target.value)} className="color: black" />
                ) : (<FaSearch onClick={() => setShowInput(true)} />)}
                <button onClick={handleSearch}>Search</button>

                <ul className="search">
                {search.map(({text, id}) => (
                    <li key={id} className="search">
                        <span>{text}</span>
                        <button className="close" onClick={() => removeTodo(id)}>
                            X
                        </button>
                    </li>
                ))}

             </ul>
        </section>
    );
}

export default HiddenSearchBar;  */


// I would like to have the searches reference previous searches. giving you some kind of a result when you make a search since this is about search after all

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./index.css";

interface SearchItem {
    text: string;
    id: number;
}

function HiddenSearchBar() {
    const [showInput, setShowInput] = useState(false);
    const [input, setInput] = useState("");
    const [search, setSearch] = useState<SearchItem[]>([]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            setSearch((prevSearch) => [...prevSearch, {
                text: input,
                id: Math.floor(Math.random() * 1000),
            }]);
            setInput("");
        }
    }

    const removeTodo = (id: number): void => 
        setSearch((search) => search.filter((t) => t.id !== id));

    return (
        <div className="search-container">
            <div className={`search-bar ${showInput ? 'active' : ''}`}>
                {showInput ? (
                    <>
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)}
                            autoFocus
                        />
                        <button className="search-button" onClick={handleSearch}>
                            <FaSearch />
                        </button>
                    </>
                ) : (
                    <button 
                        className="search-icon"
                        onClick={() => setShowInput(true)}
                    >
                        <FaSearch />
                    </button>
                )}
            </div>

            {search.length > 0 && (
                <ul className="search-history">
                    {search.map(({text, id}) => (
                        <li key={id}>
                            <span>{text}</span>
                            <button 
                                className="remove-button"
                                onClick={() => removeTodo(id)}
                            >
                                <IoMdClose />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default HiddenSearchBar;