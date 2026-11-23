import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [eusername, setEusername] = useState("");
    const [epassword, setEpassword] = useState("");
    const [ruser, setRuser] = useState(true);

    const [users] = useState([
        {
            username: "mahii",
            password: "123"
        }
    ]);

    function handleUInput(evt) {
        setEusername(evt.target.value);
    }

    function handlePInput(evt) {
        setEpassword(evt.target.value);
    }

    function checkUser() {
        const foundUser = users.find(function(item) {
            return item.username === eusername &&
                   item.password === epassword;
        });

        if (foundUser) {
            console.log("Login Successful");

            navigate("/landing", {
                state: {
                    user: foundUser
                }
            });
        } else {
            console.log("Login Failed");
            setRuser(false);
        }
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">

                <h1 className="font-bold text-2xl">
                    Hello Hi 👋
                </h1>

                {ruser
                    ? <p>I help you manage your activities after you login :)</p>
                    : <p className="text-red-600">Please Signup before login</p>
                }

                <input
                    type="text"
                    placeholder="Username"
                    onChange={handleUInput}
                    className="m-1 border-black border rounded-md"
                />
                <br />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={handlePInput}
                    className="m-1 border-black border rounded-md"
                />
                <br />

                <button
                    className="bg-violet-600 p-1.5 border rounded-md m-1 w-24"
                    onClick={checkUser}
                >
                    Login
                </button>

                <p>
                    Don't have an account?
                    <Link to="/Signup" className="underline"> Signup</Link>
                </p>

            </div>
        </div>
    );
}

export default Login;