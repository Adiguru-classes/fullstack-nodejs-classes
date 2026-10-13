
import { useState } from "react";
import "./App.css";

const API = "http://localhost:5000/api";

function App() {
  const [mode, setMode] = useState("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch(`${API}/${mode}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...(mode === "signup" && { name }),
          email,
          password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message);
        return;
      }

      if (mode === "signup") {
        setMessage("Signup successful! Please log in.");
        setMode("login");
        setPassword("");
      } else {
        setUser(data.user);
        setToken(data.token);
        setMessage(data.message);
      }
    } catch (error) {
      setMessage(
        "Cannot connect to backend. Check whether the server is running."
      );
    }
  }

  function logout() {
    setUser(null);
    setToken("");
    setName("");
    setEmail("");
    setPassword("");
    setMode("login");
    setMessage("You have logged out.");
  }

  if (user) {
    return (
      <main className="page">
        <section className="card">
          <div className="logo">A</div>
          <h1>Welcome, {user.name}!</h1>
          <p>You have successfully logged in.</p>
          <p className="user-email">{user.email}</p>
          <p className="success">{message}</p>
          <button onClick={logout}>Logout</button>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="card">
        <div className="logo">A</div>

        <h1>
          {mode === "signup" ? "Create account" : "Welcome back"}
        </h1>

        <p className="subtitle">
          {mode === "signup"
            ? "Sign up to get started."
            : "Log in to your account."}
        </p>

        <form onSubmit={handleSubmit}>
          {mode === "signup" && (
            <label>
              Full name
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </label>
          )}

          <label>
            Email address
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              minLength={8}
              required
            />
          </label>

          <button type="submit">
            {mode === "signup" ? "Create account" : "Log in"}
          </button>
        </form>

        {message && <p className="message">{message}</p>}

        <p className="switch">
          {mode === "signup"
            ? "Already have an account?"
            : "Don't have an account?"}

          <button
            className="text-button"
            onClick={() => {
              setMode(mode === "signup" ? "login" : "signup");
              setMessage("");
              setPassword("");
            }}
          >
            {mode === "signup" ? "Log in" : "Sign up"}
          </button>
        </p>
      </section>
    </main>
  );
}

export default App;



//with local storage
// import { useState } from "react";
// import "./App.css";

// const USERS_KEY = "demoUsers";

// function getUsers() {
//   try {
//     return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
//   } catch {
//     return [];
//   }
// }

// function App() {
//   const [mode, setMode] = useState("signup");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [user, setUser] = useState(null);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setMessage("");

//     const normalizedEmail = email.trim().toLowerCase();
//     const users = getUsers();

//     if (mode === "signup") {
//       const existingUser = users.find(
//         user => user.email === normalizedEmail
//       );

//       if (existingUser) {
//         setMessage("Email is already registered.");
//         return;
//       }

//       const newUser = {
//         id: Date.now(),
//         name: name.trim(),
//         email: normalizedEmail,
//         password // DEMO ONLY: never store real passwords this way
//       };

//       users.push(newUser);

//       // Save the complete array in browser storage.
//       localStorage.setItem(USERS_KEY, JSON.stringify(users));

//       setMessage("Signup successful! Please log in.");
//       setMode("login");
//       setPassword("");
//       return;
//     }

//     // LOGIN: retrieve and search saved browser data.
//     const existingUser = users.find(
//       user => user.email === normalizedEmail
//     );

//     if (!existingUser || existingUser.password !== password) {
//       setMessage("Invalid email or password.");
//       return;
//     }

//     setUser({
//       id: existingUser.id,
//       name: existingUser.name,
//       email: existingUser.email
//     });

//     setMessage("Login successful!");
//   }

//   function logout() {
//     setUser(null);
//     setName("");
//     setEmail("");
//     setPassword("");
//     setMode("login");
//     setMessage("You have logged out.");
//   }

//   if (user) {
//     return (
//       <main className="page">
//         <section className="card">
//           <div className="logo">A</div>
//           <h1>Welcome, {user.name}!</h1>
//           <p>You have successfully logged in.</p>
//           <p className="user-email">{user.email}</p>
//           <p className="success">{message}</p>
//           <button onClick={logout}>Logout</button>
//         </section>
//       </main>
//     );
//   }

//   return (
//     <main className="page">
//       <section className="card">
//         <div className="logo">A</div>

//         <h1>
//           {mode === "signup" ? "Create account" : "Welcome back"}
//         </h1>

//         <p className="subtitle">
//           {mode === "signup"
//             ? "Sign up to get started."
//             : "Log in to your account."}
//         </p>

//         <form onSubmit={handleSubmit}>
//           {mode === "signup" && (
//             <label>
//               Full name
//               <input
//                 value={name}
//                 onChange={e => setName(e.target.value)}
//                 placeholder="Enter your name"
//                 required
//               />
//             </label>
//           )}

//           <label>
//             Email address
//             <input
//               type="email"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               placeholder="you@example.com"
//               required
//             />
//           </label>

//           <label>
//             Password
//             <input
//               type="password"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               placeholder="At least 8 characters"
//               minLength={8}
//               required
//             />
//           </label>

//           <button type="submit">
//             {mode === "signup" ? "Create account" : "Log in"}
//           </button>
//         </form>

//         {message && <p className="message">{message}</p>}

//         <p className="switch">
//           {mode === "signup"
//             ? "Already have an account?"
//             : "Don't have an account?"}

//           <button
//             type="button"
//             className="text-button"
//             onClick={() => {
//               setMode(mode === "signup" ? "login" : "signup");
//               setMessage("");
//               setPassword("");
//             }}
//           >
//             {mode === "signup" ? "Log in" : "Sign up"}
//           </button>
//         </p>
//       </section>
//     </main>
//   );
// }

// export default App;

