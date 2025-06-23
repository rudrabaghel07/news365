import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";  // Import About component

const App = () => {
    const [progress, setProgress] = useState(0);

    const categories = ["general", "business", "entertainment", "health", "science", "sports", "technology"];

    return (
        <Router>
            <div>
                <Navbar categories={categories} />
                <Routes>
                    {categories.map((category) => (
                        <Route
                            key={category}
                            path={`/${category}`}
                            element={
                                <News
                                    setProgress={setProgress}
                                    category={category}
                                    pageSize={8}
                                />
                            }
                        />
                    ))}
                    <Route
                        path="/"
                        element={
                            <News
                                setProgress={setProgress}
                                category="general"
                                pageSize={8}
                            />
                        }
                    />
                    <Route path="/about" element={<About />} /> {/* Add About Route */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
