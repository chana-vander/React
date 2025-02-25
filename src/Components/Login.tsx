//כניסה למערכת
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginFormInputs } from "../Models/loginUser"
import { useAuth } from "../Hook/authUserContext";
import { useState } from "react";

const Login = () => {
    const { register, handleSubmit } = useForm<LoginFormInputs>();
    const navigator = useNavigate();
    const { isLoggedIn, setIsLoggedIn, saveUser } = useAuth();
    const [message, setMessage] = useState("");

    const onSubmit = async (data: { userName: string, password: string }) => {
        try {
            // שליחת בקשת התחברות לשרת
            const response = await axios.post("http://localhost:8080/api/user/login", data);
            
            // אם השרת מחזיר את פרטי המשתמש (כולל ID)
            if (response.data && response.data.Id) {
                saveUser(response.data); // שמירת המשתמש בקונטקסט
                setIsLoggedIn(true); // עדכון מצב הכניסה
                console.log(isLoggedIn);
                navigator("/recipes"); // ניתוב לעמוד המתכונים
            }
        } catch (error) {
            // אם יש שגיאה, מעבירים את המשתמש לדף ההרשמה
            alert("שגיאה בהתחברות, מעביר אותך לדף ההרשמה");
            console.log(isLoggedIn);
            navigator("/register"); // נווט לדף ההרשמה
        }
    };
    
    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>התחברות</h2>
            {/* <label>שם משתמש</label> */}
            <input {...register("userName")} placeholder="שם משתמש" />
            <br />
            <input {...register("password")} type="password" placeholder="סיסמא" />
            <br />

            <button type="submit" >כניסה</button>
        </form>


    </>)
}
export default Login

//עיצוב ראשון
// import { useForm } from "react-hook-form"; // ניהול טפסים
// import { useNavigate } from "react-router-dom"; // ניווט בין דפים
// import axios from "axios"; // קריאות API
// import React from "react";
// import { LoginFormInputs } from "../Models/loginUser"; // סוג הנתונים לטופס
// import { TextField, Button, Typography, Container, Card, CardContent } from "@mui/material"; // רכיבים מ-MUI
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; // אייקון של סיסמה
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // אייקון של משתמש

// const Login = () => {
//     // שימוש ב-useForm לניהול הטופס
//     const { register, handleSubmit } = useForm<LoginFormInputs>();
//     const navigate = useNavigate(); // פונקציה לניווט בתוך האפליקציה

//     // פונקציה שתופעל בעת שליחת הטופס
//     const onSubmit = async (data: { userName: string, password: string }) => {
//         try {
//             // שליחת הנתונים לשרת
//             const response = await axios.post("http://localhost:8080/api/user/login", data);
//             localStorage.setItem("user", JSON.stringify(response.data)); // שמירת המשתמש ב-localStorage
//             navigate("/recipes"); // ניווט לדף המתכונים
//         } catch {
//             alert("שגיאה בהתחברות"); // הצגת שגיאה במקרה של כישלון
//         }
//     };

//     return (
//         // Container מרכז את התוכן באמצע המסך
//         <Container
//             maxWidth="xs"
//             sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}
//         >
//             {/* כרטיס מסודר עם הצללה */}
//             <Card sx={{ width: "100%", p: 3, boxShadow: 3 }}>
//                 <CardContent>
//                     {/* כותרת העמוד */}
//                     <Typography variant="h5" align="center" gutterBottom>
//                         התחברות
//                     </Typography>

//                     {/* טופס הכניסה */}
//                     <form
//                         onSubmit={handleSubmit(onSubmit)}
//                         style={{ display: "flex", flexDirection: "column", gap: "16px" }}
//                     >
//                         {/* שדה שם משתמש עם אייקון */}
//                         <TextField
//                             {...register("userName")}
//                             label="שם משתמש"
//                             variant="outlined"
//                             fullWidth
//                             InputProps={{ startAdornment: <AccountCircleIcon color="action" /> }}
//                         />

//                         {/* שדה סיסמה עם אייקון */}
//                         <TextField
//                             {...register("password")}
//                             type="password"
//                             label="סיסמא"
//                             variant="outlined"
//                             fullWidth
//                             InputProps={{ startAdornment: <LockOutlinedIcon color="action" /> }}
//                         />

//                         {/* כפתור שליחת הטופס */}
//                         <Button type="submit" variant="contained" color="primary" fullWidth>
//                             כניסה
//                         </Button>
//                     </form>
//                 </CardContent>
//             </Card>
//         </Container>
//     );
// };

// export default Login;


