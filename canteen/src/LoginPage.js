import React, {useState} from "react";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        alert("Loggin in with ${email}");
        // TODO: Call Authentication Microservice API
    };

    return (
        <div style={{maxWidth: "400px", margin: "auto", padding: "20px"}}>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={
                    {
                        display: "block",
                        width: "100%",
                        marginBottom: "10px",
                        padding: "10px"
                    }
                }
                />

                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={
                    {
                        display: "block",
                        width: "100%",
                        marginBottom: "10px",
                        padding: "10px"
                    }
                }
                />

                <button type="submit" style={{padding: "10px", 
                width: "100%", background: "green", color: "white"}}>
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage;