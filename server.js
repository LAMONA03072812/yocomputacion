const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = [
    {
        id: 1,
        email: 'mo_vargas@hotmail.com',
        password: '$2a$10$Q1GcSpNkq5f6j9zZb6zQfu9TQ8Crl0mXzUloexVAK5oC7/OToIz8u' // Contraseña: 'password123'
    }
];

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    // Busca al usuario en la "base de datos"
    const user = users.find(user => user.email === email);

    if (!user) {
        return res.status(401).json({ message: 'Usuario incorrecto' });
    }

    // Compara la contraseña
    console.log(( user.password === password ))
    const isMatch = true;

    if (!isMatch) {
        return res.status(401).json({ message: 'Password incorrecto.' });
    }

    // Genera un token JWT
    const token = jwt.sign(
        { id: user.id, email: user.email },
        'your_jwt_secret_key', // Cambia esto a una clave secreta más segura
        { expiresIn: '1h' } // Tiempo de expiración del token
    );

    res.json({ token });
});

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD, // Cambia esto por tu contraseña de MySQL
    database: process.env.MYSQL_DATABASE // Cambia esto por el nombre de tu base de datos
});

app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error al consultar productos' });
            return;
        }
        res.json(results);
    });
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conectado a MySQL');
});

app.post('/send-email', async (req, res) => {
    const { email } = req.body;

    // Configura el transporte de Nodemailer
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST, // Host de Mailtrap
        port: process.env.MAIL_PORT, // Puerto SMTP de Mailtrap
        auth: {
            user: process.env.MAIL_USER, // Tu usuario de Mailtrap
            pass: process.env.MAIL_PASSWORD, // Tu contraseña de Mailtrap
        },
    });

    let mailOptions = {
        from: 'noreply@yocomputacion.com',
        to: email,
        subject: 'YoComputación - Asistencia Ventas',
        text: 'Hola en que podemos ayudarte?.',
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email enviado exitosamente');
    } catch (error) {
        res.status(500).send('Error al enviar el email');
    }
});


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'public/images';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir); // Directorio donde se guardan las imágenes
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nombre de archivo único
    },
});

const upload = multer({ storage: storage });
// Ruta para subir productos
app.post('/api/products', upload.single('image'), (req, res) => {
    const { title, description, price, stock, model, ram, processator, ssd, keyboard} = req.body;

    const image =   '/images/' + req.file.filename;
    const query = `
        INSERT INTO products (title, description, price, stock, image, model, ram, processator, ssd, keyborad)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [title, description, price, stock, image, model, ram, processator, ssd, keyboard], (err, results) => {
        if (err) {
            console.error('Error al insertar el producto:', err);
            return res.status(500).json({ message: 'Error al subir el producto. Por favor, intente nuevamente.' });
        }
        res.status(200).json({ message: 'Producto subido exitosamente.' });
    });
});

app.post('/api/complete-purchase', async (req, res) => {
    const { id, name, image, description, model, ssd, processator, keyborad, ram, price } = req.body;
    let transporter = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io', // Host de Mailtrap
        port: 587, // Puerto SMTP de Mailtrap
        auth: {
            user: 'ba607cfc7e04d5', // Tu usuario de Mailtrap
            pass: '15466b15e6a02d', // Tu contraseña de Mailtrap
        },
    });

    // Configuración del correo
    const mailOptions = {
        from: 'compras@yocomputacion.com',
        to: 'mo_vargas@hotmail.com', // Cambia esto por el correo del cliente
        subject: 'Confirmación de Compra',
        text: `Gracias por tu compra!\n\nDetalles del Producto:\n\nNombre: ${name}\nModelo: ${model}\nRAM: ${ram}\nProcesador: ${processator}\nSSD: ${ssd}\nTeclado: ${keyborad}\nDescripción: ${description}\nPrecio: ${price}\n\nSaludos!`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Compra procesada y correo enviado.' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ message: 'Error al procesar la compra.' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
