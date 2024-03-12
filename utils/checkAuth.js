import jwt from "jsonwebtoken";

const SECRET_KEY = "secret123";

const checkAuth = (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (!token) {
    return res.status(403).json({
      message: "Нет доступа. Токен отсутствует.",
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.userId = decoded._id;
    next();
  } catch (error) {
    console.error("Ошибка при проверке токена:", error);

    return res.status(403).json({
      message: "Нет доступа. Недействительный токен.",
    });
  }
};

export default checkAuth;
