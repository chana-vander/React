// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { SignInFormInputs } from "../Models/signinUser";
// import axios from "axios";
// import { useAuth } from "../Hook/authUserContext";
// import { useState } from "react";

// const SignIn = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm<SignInFormInputs>();
//     const navigate = useNavigate();
//     const { saveUser, setIsLoggedIn } = useAuth();

//     const onSubmit = async (data: SignInFormInputs) => {
//         // try {
//         //     console.log(data);
//         //     const res = await axios.post(
//         //         "http://localhost:8080/api/user/sighin", // וודא שה-URL נכון
//         //         data,
//         //         { headers: { "Content-Type": "application/json" } }
//         //     );

//         //     if (res.data && res.data.Id) {
//         //         saveUser(res.data); // שמירת המשתמש ב-Context
//         //         setIsLoggedIn(true); // עדכון הפרוביידר
//         //         alert("נרשמת בהצלחה!");
//         //         navigate("/"); // נווט לעמוד הבית
//         //     } else {
//         //         alert("שגיאה בהרשמה. נסה שוב.");
//         //     }
//         // } catch (error) {
//         //     alert("ההרשמה ניכשלה");
//         //     console.error("Error:", error); // להדפיס שגיאות לקונסול כדי לבדוק בעיות
//         // }
//         try {
//             console.log("k");
//             setIsLoggedIn(true);

//             const res = await axios.post(
//                 "http://localhost:8080/api/user/sighin",
//                 data,
//                 { headers: { "Content-Type": "application/json" } }

//             );
//             console.log("lllll");
            
//             saveUser(res.data); // שמירת המשתמש ב-Context
//             navigate("/recipes");
//             // if (res.data && res.data.Id) {
//             //     // setMsg("ההרשמה בוצעה בהצלחה! 🎉");
//             //     saveUser(res.data); // שמירת המשתמש ב-Context
//             //     navigate("/recipes");
//             // } else {
//             //     // setMsg("שגיאה בהרשמה. נסה שוב.");
//             //     console.log("error");

//             // }
//         } catch (error: any) {
//             if (error.response) {
//                 // setMsg("😜לחץ כאן לכניסה אתה כבר רשום במאגר");
//                 console.log("hgjkjnm,");

//                 //navigate("/profile"); 
//             } else {
//                 // setMsg("שגיאה בחיבור לשרת. נסה שוב מאוחר יותר.");
//                 console.log("2323");

//             }
//         } finally {
//             // setLoading(false);
//             console.log("erererer");
//         }
//     };

//     return (
//         <>
//             <h2>הרשמה</h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input {...register("UserName", { required: "שדה חובה" })} placeholder="שם משתמש" />
//                 <p>{errors.UserName?.message}</p>

//                 <input {...register("Password", { required: "שדה חובה" })} type="password" placeholder="סיסמא" />
//                 <p>{errors.Password?.message}</p>

//                 <input {...register("Name", { required: "שדה חובה" })} placeholder="שם מלא" />
//                 <p>{errors.Name?.message}</p>

//                 <input {...register("Phone", { required: "שדה חובה" })} placeholder="מספר טלפון" />
//                 <p>{errors.Phone?.message}</p>

//                 <input {...register("Email", { required: "שדה חובה" })} type="email" placeholder="כתובת מייל" />
//                 <p>{errors.Email?.message}</p>

//                 <input {...register("Tz", { required: "שדה חובה" })} placeholder="תעודת זהות" />
//                 <p>{errors.Tz?.message}</p>

//                 <button type="submit">להרשמה</button>
//             </form>
//         </>
//     );
// }

// export default SignIn;




import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../Hook/authUserContext";
import axios from "axios";

interface SignupForm {
  UserName: string;
  Password: string;
  Name: string;
  Phone: string;
  Email: string;
  Tz: string;
}

const Signup = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<SignupForm>({ mode: "onChange" });
  const [msg, setMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { saveUser } = useAuth();
  const navigate = useNavigate();

  const onSend = async (data: SignupForm) => {
    setLoading(true);
    setMsg("");

    try {
      const res = await axios.post(
        "http://localhost:8080/api/user/sighin",
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data && res.data.Id) {
        setMsg("ההרשמה בוצעה בהצלחה! 🎉");
        saveUser(res.data); // שמירת המשתמש ב-Context
        navigate("/recipes");
      } else {
        setMsg("שגיאה בהרשמה. נסה שוב.");
      }
    } catch (error: any) {
      if (error.response) {
        setMsg("😜לחץ כאן לכניסה אתה כבר רשום במאגר");
        //navigate("/profile"); 
      } else {
        setMsg("שגיאה בחיבור לשרת. נסה שוב מאוחר יותר.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Box
      sx={{
        position: "fixed", // קיבוע ה-Box למסך
        top: 0,
        left: 0,
        height: "100vh", // כיסוי מלא של הגובה
        width: "100vw", // כיסוי מלא של הרוחב
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff", // רקע לבן נקי
        overflow: "hidden", // מניעת גלילה
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3, // הקטנת הפדינג
          borderRadius: "12px",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // מסגרת לבנה אלגנטית עם שקיפות
          width: "350px", // הקטנת הרוחב
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // צל עדין למראה מקצועי
          overflow: "auto", // אפשרות לגלילה בתוך ה-Paper
          maxHeight: "90vh", // הגבלת הגובה של ה-Paper כדי לאפשר גלילה
        }}
      >
        <Typography variant="h4" fontWeight="600" color="text.primary" gutterBottom>
          הרשמה
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(onSend)} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="שם משתמש"
            {...register("UserName", { required: "שדה חובה" })}
            error={Boolean(errors.UserName)}
            helperText={errors.UserName?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="סיסמה"
            type="password"
            {...register("Password", { required: "שדה חובה" })}
            error={Boolean(errors.Password)}
            helperText={errors.Password?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="שם מלא"
            {...register("Name", { required: "שדה חובה" })}
            error={Boolean(errors.Name)}
            helperText={errors.Name?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="טלפון"
            {...register("Phone", { required: "שדה חובה" })}
            error={Boolean(errors.Phone)}
            helperText={errors.Phone?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="אימייל"
            {...register("Email", { required: "שדה חובה" })}
            error={Boolean(errors.Email)}
            helperText={errors.Email?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="תעודת זהות"
            {...register("Tz", { required: "שדה חובה" })}
            error={Boolean(errors.Tz)}
            helperText={errors.Tz?.message}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, backgroundColor: "#000000", "&:hover": { backgroundColor: "#333333" } }}
            type="submit"
            disabled={!isValid || loading}
          >
            {loading ? "ביצוע הרשמה..." : "הרשמה"}
          </Button>
          {msg === "😜לחץ כאן לכניסה אתה כבר רשום במאגר" && (
            <Link to="/login">
              <Typography variant="body2" align="center">
                להתחברות הקליקו כאן
              </Typography>
            </Link>
          )}
          {msg && (
            <Typography variant="body2" color="error" align="center">
              {msg}
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
    </>
  );
};

export default Signup;

// // racheli ulman:
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../Hook/authUserContext";

// //  נגדיר את סוג הנתונים שהמשתמש מזין בטופס
// interface SignupForm {
//     UserName: string;
//     Password: string;
//     Name: string;
//     Phone: string;
//     Email: string;
//     Tz: string;
// }

// const Signup = () => {
//     const { register, handleSubmit, formState: { errors, isValid } } = useForm<SignupForm>({ mode: "onChange" });
//     const [msg, setMsg] = useState<string>("");
//     const [loading, setLoading] = useState<boolean>(false);
//     const { saveUser } = useAuth(); // גישה לפונקציה ששומרת את המשתמש
//     const navigate = useNavigate();

//     const onSend = async (data: SignupForm) => {
//         setLoading(true);
//         setMsg("");

//         try {
//             const res = await axios.post(
//                 "http://localhost:8080/api/user/sighin",
//                 data,
//                 { headers: { "Content-Type": "application/json" } }
//             );

//             if (res.data && res.data.Id) {
//                 setMsg("ההרשמה בוצעה בהצלחה! 🎉");
//                 saveUser(res.data); // שמירת המשתמש ב-Context
//                 navigate("/recipes");
//             } else {
//                 setMsg("שגיאה בהרשמה. נסה שוב.");
//             }
//         } catch (error: any) {
//             if (error.response) {
//                 setMsg("😜לחץ כאן לכניסה אתה כבר רשום במאגר");
//                 //navigate("/profile");
//             } else {
//                 setMsg("שגיאה בחיבור לשרת. נסה שוב מאוחר יותר.");
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <>
//             {msg && <>{msg}</>}
//             <form onSubmit={handleSubmit(onSend)}>
//                 <input {...register("UserName", { required: "שדה חובה" })} placeholder="שם משתמש" />
//                 <p>{errors.UserName?.message}</p>

//                 <input {...register("Password", { required: "שדה חובה" })} placeholder="🔑סיסמה" type="password" />
//                 <p>{errors.Password?.message}</p>

//                 <input {...register("Name", { required: "שדה חובה" })} placeholder="😄שם מלא" />
//                 <p>{errors.Name?.message}</p>

//                 <input {...register("Phone", { required: "שדה חובה" })} placeholder="📞טלפון" />
//                 <p>{errors.Phone?.message}</p>

//                 <input {...register("Email", { required: "שדה חובה" })} placeholder="📧אימייל" />
//                 <p>{errors.Email?.message}</p>

//                 <input {...register("Tz", { required: "שדה חובה" })} placeholder="🪪תעודת זהות" />
//                 <p>{errors.Tz?.message}</p>

//                 <button type="submit" disabled={!isValid || loading}>
//                     {loading ? "ביצוע הרשמה..." : "הרשמה"}
//                 </button>

//                 <br />
//                 {msg === "😜לחץ כאן לכניסה אתה כבר רשום במאגר" && (
//                     <Link to="/login">לכניסה הקליקו כאן</Link>
//                 )}
//             </form>
//         </>
//     );
// };

// export default Signup;