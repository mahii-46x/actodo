import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup(props) {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    function handleSignup() {

        if (username.trim() === "" || password === "" || confirmPassword === "") {
            setError("Please fill all fields");
            return;
        }

        if (password !== confirmPassword) {
            setError("Password does not match");
            return;
        }

        const success = props.onSignup({
            username: username.trim(),
            password: password
        });

        if (success) {
            alert("Signup Successful!");
            navigate("/");
        } else {
            setError("Username already exists");
        }
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">

                <h1 className="font-bold text-2xl">Hello Hi 👋</h1>
                <p>Signup here :)</p>

                {error && <p className="text-red-600">{error}</p>}

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(evt) => setUsername(evt.target.value)}
                />

                <br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                />

                <br />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(evt) => setConfirmPassword(evt.target.value)}
                />

                <br />

                <button onClick={handleSignup}>
                    Signup
                </button>

                <p>
                    Already have an Account?
                    <Link to="/"> Login</Link>
                </p>

            </div>
        </div>
    );
}

export default Signup;