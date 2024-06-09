import React, { useState, useEffect } from "react";
import AuthLayouts from "../components/Layouts/AuthInputLayouts";
import Video from "../components/Elements/Video/Video";

const InputLinkPages = () => {
    const [link, setLink] = useState("");

    useEffect(() => {
        const savedLink = localStorage.getItem("tiktokLink");
        if (savedLink) {
            setLink(savedLink);
        }
    }, []);

    const handleLinkSubmit = (newLink) => {
        setLink(newLink);
        localStorage.setItem("tiktokLink", newLink);
    }

    const handleResetButton = () => {
        setLink("");
        localStorage.removeItem("tiktokLink");
    }

    return (
        <>
            <AuthLayouts onLinkSubmit={handleLinkSubmit} onResetSubmit={handleResetButton} />
            {link && <Video link={link} />}
        </>
    );
}

export default InputLinkPages;