import React from "react";
import loading from "./loading.gif"; // Add a loading GIF in your project folder

const Spinner = () => {
    return (
        <div className="text-center">
            <img src={loading} alt="loading" />
        </div>
    );
};

export default Spinner;
