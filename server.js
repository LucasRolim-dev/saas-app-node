require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user'); 
const tenantRoutes = require('./routes/tenant');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/tenants',tenantRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('servidor rodando na porta $(PORT)'));