// import React, {useState} from "react";

// function LoginPage() {
//     const [email, setEmail] = useState("");
//     const [password , setPassword] = useState("");
//     const [message, setMessage] = useState("");

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         try {
//             console.log("clicked")
//             const response = await fetch("http://localhost:8080/auth/login", {
//                 method: "POST",
//                 headers: {"Content-Type": "application/json"},
//                 body: JSON.stringify({email, password}),
//             });
//             const data = await response.json();
//             console.log(data)
            
//             if(data.status === "success") {
//                 setMessage("Login successful");
//             } else {
//                 setMessage("Invalid email or password")
//             }


//         } catch(error) {
//             console.error("Error during login: ", error);
//             setMessage("Something went wrong try again.")
//         }
//     };

//     return (
//         <div style={{maxWidth: "400px", margin: "auto", padding: "20px"}}>
//             <h2>Login</h2>

//             <form onSubmit={handleLogin}>
//                 <input
//                 type="email"
//                 placeholder="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 style={
//                     {
//                         display: "block",
//                         width: "100%",
//                         marginBottom: "10px",
//                         padding: "10px"
//                     }
//                 }
//                 />

//                 <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 style={
//                     {
//                         display: "block",
//                         width: "100%",
//                         marginBottom: "10px",
//                         padding: "10px"
//                     }
//                 }
//                 />

//                 <button type="button" onClick={handleLogin} style={{padding: "10px", 
//                 width: "100%", background: "green", color: "white"}}>
//                     Login
//                 </button>
//             </form>

//             {/* Show message */}
//             {message && <p style={{marginTop: "15px"}}>{message}</p>}
//         </div>
//     )
// }

// export default LoginPage;
import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log("clicked");
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);

      if (data.status === "success") {
        setMessage("✅ Login successful");
      } else {
        setMessage("❌ Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login: ", error);
      setMessage("⚠️ Something went wrong. Try again.");
    }
  };

  return (
    <>
      <style>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          padding: 20px;
        }
        .login-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
          text-align: center;
        }
        .login-title {
          font-size: 26px;
          font-weight: bold;
          margin-bottom: 8px;
          color: #333;
        }
        .login-subtitle {
          font-size: 14px;
          color: #666;
          margin-bottom: 20px;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .login-input {
          padding: 12px 15px;
          border: 1px solid #ccc;
          border-radius: 10px;
          font-size: 14px;
          outline: none;
          transition: 0.3s;
        }
        .login-input:focus {
          border-color: #4facfe;
          box-shadow: 0 0 5px rgba(79, 172, 254, 0.5);
        }
        .login-button {
          padding: 12px;
          background: linear-gradient(90deg, #4facfe, #00f2fe);
          color: white;
          font-size: 15px;
          font-weight: bold;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.3s;
        }
        .login-button:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }
        .login-message {
          margin-top: 15px;
          font-weight: 500;
          color: #333;
        }
        @media (max-width: 480px) {
          .login-card {
            padding: 20px;
          }
          .login-title {
            font-size: 22px;
          }
        }
      `}</style>

      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Welcome Back 👋</h2>
          <p className="login-subtitle">Please log in to continue</p>

          <form onSubmit={handleLogin} className="login-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />

            <button
              type="button"
              onClick={handleLogin}
              className="login-button"
            >
              Login
            </button>
          </form>

          {message && <p className="login-message">{message}</p>}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
