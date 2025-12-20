const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: ['http://localhost:4200', 'http://localhost:4000'],
    methods: ['POST', 'GET'],
    credentials: true
}));
app.use(express.json());

// Create email transporter using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify transporter on startup
transporter.verify((error, success) => {
    if (error) {
        console.error('Email transporter error:', error.message);
    } else {
        console.log('Email server is ready to send messages');
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.TO_EMAIL || process.env.EMAIL_USER,
        replyTo: email,
        subject: subject,
        html: `
            <h3>From: ${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <hr>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent from ${name} (${email})`);
        res.json({
            success: true,
            message: 'Message sent successfully!'
        });
    } catch (error) {
        console.error('Error sending email:', error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to send message.'
        });
    }
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


