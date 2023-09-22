import React, { useState } from "react";
import { auth } from "@/pages/api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("1Password");
  const [buttonLoader, setButtonLoader] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setButtonLoader(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setEmail("");
        setSuccessMessage("Login successful!");
        setTimeout(() => {
          setSuccessMessage("");
          router.push("/gallery");
        }, 2000);
      })
      .catch((error) => {
        setPassword("");
        setErrorMessage("Wrong email or password");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      })
      .finally(() => {
        setButtonLoader(false);
      });
  }

  return (
    <div className="space-y-4 text-center rounded-2xl shadow-md bg-opacity-80 bg-white p-4 pb-8 w-80 md:w-96 ">
      <h1 className="text-xl text-stone-700 font-semibold ">
        Login in to Drizzle
      </h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="px-3 py-4 w-full rounded-md focus:outline-none border border-stone-400 placeholder:text-stone-600 focus:border-stone-700 "
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="px-3 py-4  w-full rounded-md focus:outline-none border border-stone-400 placeholder:text-stone-600 focus:border-stone-700 "
        />
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className={`${
              buttonLoader ? "opacity-50 cursor-not-allowed" : ""
            } rounded-md py-4 w-full text-white bg-green-500 hover:bg-green-600`}
          >
            {buttonLoader ? "Logging in..." : "Log In"}
          </button>
          <p className="text-xs text-stone-600 my-1">
            not a Drizzie member ?{" "}
            <span className="text-green-600 hover:underline">sign up here</span>
          </p>
          {errorMessage && (
            <div className="fixed top-16 right-3 m-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="fixed top-16 right-3  m-4 p-4 bg-green-500 text-white rounded-lg shadow">
              {successMessage}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;

// import React, { useState } from "react";
// import { signIn } from "next-auth/react"; // Import signIn function from NextAuth

// function Login() {
//   const [email, setEmail] = useState(""); // Add state for email
//   const [password, setPassword] = useState(""); // Add state for password
//   const [error, setError] = useState(""); // Add state for error

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Call the signIn function with "credentials" provider
//     const result = await signIn("credentials", {
//       email,
//       password,
//       redirect: false, // Prevent automatic redirection on success
//     });

//     if (result.error) {
//       setError("Invalid email or password");
//     } else {
//       // Redirect user to a protected page on successful login
//       // You can use router.push() or any navigation method here
//       // For example, redirect to the dashboard:
//       window.location.href = "/dashboard";
//     }
//   };

//   return (
//     <div className="space-y-4 text-center rounded-2xl shadow-md bg-opacity-80 bg-white p-4 pb-8 w-80 md:w-96">
//       <h1 className="text-xl text-stone-700 font-semibold">
//         Login in to Drizzle
//       </h1>
//       <form onSubmit={handleSubmit}>
//         {/* Add onSubmit handler */}
//         <input
//           type="text"
//           placeholder="username"
//           className="px-3 py-4 w-full rounded-md focus:outline-none border border-stone-400 placeholder:text-stone-600 focus:border-stone-700"
//           value={email} // Bind input value to email state
//           onChange={(e) => setEmail(e.target.value)} // Update email state on change
//         />
//         <input
//           type="password"
//           placeholder="password"
//           className="px-3 py-4  w-full rounded-md focus:outline-none border border-stone-400 placeholder:text-stone-600 focus:border-stone-700"
//           value={password} // Bind input value to password state
//           onChange={(e) => setPassword(e.target.value)} // Update password state on change
//         />
//         {error && <p className="text-red-600">{error}</p>}{" "}
//         {/* Display error message */}
//         <div>
//           <button
//             type="submit"
//             className="rounded-md py-4 w-full text-white bg-green-500 hover:bg-green-600"
//           >
//             Login
//           </button>
//           <p className="text-xs text-stone-600 my-1">
//             not a Drizzie member ?{" "}
//             <span className="text-green-600 hover:underline">sign up here</span>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;
