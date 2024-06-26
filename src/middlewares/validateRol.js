export const rolRequired = (rol) => {
    return (req, res, next) => {
        const { user } = req;
        if (!user) {
            return res.status(401).json({ message: "No user found" });
        }

        if (user.rol !== rol) {
            return res.status(403).json({ message: "Forbidden: You don't have the right role" });
        }

        next();
    };
};
