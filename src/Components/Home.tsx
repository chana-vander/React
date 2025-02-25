// //דף הבית
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//     const navigate = useNavigate();//יצירת אובייקט
//     const { isLoggedIn } = useAuth(); // קבלת מצב ההתחברות מהקונטקסט

//     const handleSignUp = () => {
//         navigate("/signin");
//     };

//     const handleLogin = () => {
//         navigate("/login");
//     };

//     return (
//         <>
//             <h1>ברוכים הבאים לאתר המתכונים</h1>
//             <button onClick={handleSignUp}>הרשמה</button> 
//             <button onClick={handleLogin}>כניסה</button>

//             {/* הצגת כפתורים רק אם המשתמש מחובר */}
//             {isLoggedIn && (
//                  <div>
//                     <button onClick={() => navigate("/add-recipe")}>➕ הוספת מתכון</button>
//                     <button onClick={() => navigate("/edit-recipe")}>✏️ עריכת מתכון</button>
//                  </div>
//             )}
//         </>
//     );
// }
// export default Home;

// //עיצוב 
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Container, Typography, Button, Box, CssBaseline } from "@mui/material";

// const Home = () => {
//     const navigate = useNavigate(); // יצירת אובייקט ניווט

//     const handleSignUp = () => {
//         navigate("/signin");
//     };

//     const handleLogin = () => {
//         navigate("/login");
//     };

//     return (
//         <Container 
//             component="main" 
//             maxWidth="sm" 
//             sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", bgcolor: "#fff" }} // רקע לבן
//         >
//             <CssBaseline /> {/* להחיל הגדרות ברירת מחדל */}
//             <Typography 
//                 variant="h3" 
//                 component="h1" 
//                 gutterBottom 
//                 align="center" 
//                 sx={{ color: "#ff4081", whiteSpace: "nowrap" }} // צבע ורוד + למנוע שורות חדשות
//             >
//                 ברוכים הבאים לאתר המתכונים
//             </Typography>
//             <Typography 
//                 variant="h6" 
//                 align="center" 
//                 sx={{ mb: 4, color: "#4caf50" }} // צבע ירוק
//             >
//                 גלה מתכונים חדשים, שתף והיה חלק מקהילת האוכל שלנו!
//             </Typography>
//             <Box sx={{ display: "flex", gap: 2 }}>
//                 <Button 
//                     variant="outlined" 
//                     color="secondary" 
//                     onClick={handleSignUp} 
//                     sx={{ width: "150px", bgcolor: "#ff4081", "&:hover": { bgcolor: "#c60055" } }} // כפתור הרשמה
//                 >
//                     הרשמה
//                 </Button>
//                 <Button 
//                     variant="outlined" 
//                     color="secondary" 
//                     onClick={handleLogin} 
//                     sx={{ width: "150px", bgColor: "#ff4081", "&:hover": { bgColor: "#c60055" } }} // כפתור כניסה
//                 >
//                     כניסה
//                 </Button>
//             </Box>
//         </Container>
//     );
// };

// export default Home;

//עיצוב שני
import React from "react";
import { data, useNavigate } from "react-router-dom";
import { useAuth } from "../Hook/authUserContext";
import { Container, Typography, Button, CssBaseline, Card, CardContent, Grid, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // איקון של משתמש
import LoginIcon from "@mui/icons-material/Login"; // איקון של כניסה
import FastfoodIcon from "@mui/icons-material/Fastfood"; // איקון של אוכל למתכונים
import AddIcon from "@mui/icons-material/Add"; // איקון הוספה
import EditIcon from "@mui/icons-material/Edit"; // איקון עריכה
import axios from "axios";

const Home = () => {
    const navigate = useNavigate(); // יצירת אובייקט ניווט
    // const { isLoggedIn, setIsLoggedIn } = useAuth();
    // console.log(isLoggedIn);

    const handleSignUp = () => {
        navigate("/signin");
    };

    const handleLogin = () => {
        navigate("/login");
        // localStorage.setItem("isLoggedIn", "true"); // שמירת מצב התחברות
        // setIsLoggedIn(true);
    };

    const handleRecipes = () => {
        navigate("/recipes");
    };

    const handleAddRecipe = () => {
        navigate("/addRecipe");
        //הוספת המתכון למערך המתכונים
    };

    const handleEditRecipe = () => {
        navigate("/editRecipe");
        //שמירת העידכון של המתכון החדש
    };

    return (
        <Container
            component="main"
            maxWidth="lg"
            sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", bgcolor: "#fff" }} // רקע לבן
        >
            <CssBaseline /> {/* להחיל הגדרות ברירת מחדל */}

            {/* כפתור הצגת מתכונים בצד ימין למעלה */}
            <Box sx={{ position: "absolute", top: 20, right: 20 }}>
                <Button
                    variant="contained"
                    startIcon={<FastfoodIcon />} // אייקון אוכל
                    onClick={handleRecipes}
                    sx={{ bgcolor: "#d81b60", color: "#fff", fontSize: "1.1rem", padding: "10px 20px", "&:hover": { bgcolor: "#c2185b" } }}
                >
                    לכל המתכונים
                </Button>

                {/* כפתורים להוספה ועריכת מתכון אם יש משתמש מחובר */}
                {/* {isLoggedIn && ( */}
                    <Box sx={{ display: "flex", flexDirection: "column", marginTop: 2 }}>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={handleAddRecipe}
                            sx={{ bgcolor: "#d81b60", color: "#fff", marginBottom: 1, "&:hover": { bgcolor: "#c2185b" } }} // צבע אחיד
                        >
                            הוספת מתכון
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={<EditIcon />}
                            onClick={handleEditRecipe}
                            sx={{ bgcolor: "#d81b60", color: "#fff", "&:hover": { bgcolor: "#c2185b" } }} // צבע אחיד
                        >
                            עריכת מתכון
                        </Button>
                    </Box>
                {/* )} */}
            </Box>

            <Typography variant="h3" component="h1" align="center" sx={{ color: "#d81b60", mb: 2 }}> {/* צבע ורוד כהה */}
                ברוכים הבאים לאתר המתכונים
            </Typography>
            <Typography variant="h6" align="center" sx={{ mb: 4, color: "#8e44ad" }}> {/* צבע סגול כהה */}
                גלה מתכונים חדשים, שתף והיה חלק מקהילת האוכל שלנו!
            </Typography>

            {/* כרטיסים עבור ההזמנה או הכניסה */}
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ bgcolor: "#ffebee", boxShadow: 2 }}> {/* צבע ורוד בהיר */}
                        <CardContent>
                            <AccountCircleIcon sx={{ fontSize: 60, color: "#d81b60" }} /> {/* צבע ורוד כהה */}
                            <Typography sx={{ mb: 2 }} color="text.secondary">
                                הצטרף אלינו ותהנה ממגוון מתכונים חדשים!
                            </Typography>
                            <Button
                                variant="outlined" // כפתור הרשמה
                                onClick={handleSignUp}
                                sx={{ borderColor: "#d81b60", color: "#d81b60", "&:hover": { borderColor: "#c2185b", backgroundColor: "rgba(216, 27, 96, 0.1)" } }}
                            >
                                הרשמה
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ bgcolor: "#ffebee", boxShadow: 2 }}> {/* צבע ורוד בהיר */}
                        <CardContent>
                            <LoginIcon sx={{ fontSize: 60, color: "#d81b60" }} /> {/* צבע ורוד כהה */}
                            <Typography sx={{ mb: 2 }} color="text.secondary">
                                התחבר כדי לגשת למתכונים האישיים שלך.
                            </Typography>
                            <Button
                                variant="outlined" // כפתור כניסה
                                onClick={handleLogin}
                                sx={{ borderColor: "#d81b60", color: "#d81b60", "&:hover": { borderColor: "#c2185b", backgroundColor: "rgba(216, 27, 96, 0.1)" } }}
                            >
                                התחברות וכניסה
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;