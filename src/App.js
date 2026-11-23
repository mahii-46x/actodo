import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Landing from "./pages/landing";

function App() {

    // Users state
    const [users, setUsers] = useState(() => {
        return JSON.parse(localStorage.getItem("users")) || [];
    });

    // Signup function
    function handleSignup(newUser) {

        const userExists = users.find(
            user => user.username === newUser.username
        );

        if (userExists) {
            return false;
        }

        const updatedUsers = [...users, newUser];

        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        return true;
    }

    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={<Login users={users} />}
                />

                <Route
                    path="/Signup"
                    element={<Signup onSignup={handleSignup} />}
                />

                <Route
                    path="/landing"
                    element={<Landing />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;