// import React, { useState } from "react";
// import LoginForm from '../components/LoginForm';
// import SignUpForm from '../components/SignUpForm';

// function Login({ onLogin }) {
//   const [showLogin, setShowLogin] = useState(true);

//   return (
//     <div>
//       <h2>  SHOW AND TELL </h2>
//       {showLogin ? (
//         <>
//          <LoginForm onLogin={onLogin} />
//          <div>
//           <p>
//             Need to signup? &nbsp;
//             <button onClick={() =>setShowLogin(false)}>
//               Sign up
//             </button>
//           </p>
//          </div>
//         </>
//       ) : (
//         <>
//         <SignUpForm onLogin={onLogin} />
//         <div>
//           <p>
//             Login here &nbsp;
//             <button onClick={() => setShowLogin(true)}>
//               Login
//             </button>
//           </p>
//         </div>
//         </>
//       )}
//     </div>
//   )
// }

// export default Login