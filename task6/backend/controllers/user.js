import Users from '../models/user.js';

export const getUsers = async (req, res) => {
    try {
        const users = await Users.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.warn(err);
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.warn(err);
    }
}
