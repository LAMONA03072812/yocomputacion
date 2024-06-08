const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
    const { email } = req.body;

    // Configura el transporte de Nodemailer
    let transporter = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io', // Host de Mailtrap
        port: 587, // Puerto SMTP de Mailtrap
        auth: {
            user: 'f9bc1e3b9efa42', // Tu usuario de Mailtrap
            pass: 'f4672df54c1d47', // Tu contraseña de Mailtrap
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
