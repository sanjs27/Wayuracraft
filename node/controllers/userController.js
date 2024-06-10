import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  const { nombre, apellido, correo_electronico, contraseña, telefono, rol } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const newUser = await User.create({
      nombre,
      apellido,
      correo_electronico,
      contraseña: hashedPassword,
      telefono,
      rol,
      fecha_registro: new Date()
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Error registering user:', err); // Agregar un mensaje de error
    res.status(500).json({ message: 'Error registering user' });
  }
};

export const login = async (req, res) => {
  const { correo_electronico, contraseña } = req.body;
  try {
    const user = await User.findOne({ where: { correo_electronico } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

   const passwordIsValid = await bcrypt.compare(contraseña, user.contraseña);
   //const passwordIsValid = contraseña === user.contraseña;
    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Invalid Password' });
    }

    res.status(200).json({ id: user.id_usuario, email: user.correo_electronico, nombre: user.nombre });
  } catch (err) {
    console.error('Error logging in:', err); // Agregar un mensaje de error
    res.status(500).json({ message: 'Error logging in' });
  }
};
