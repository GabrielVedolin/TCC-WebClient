import express from "express";

const app = express();

const cursos = [
    {id:1,"titulo": "regra de tres"},
    {id:2,"titulo": "Matematica e MMC"}
]

app.get('/',(req,res) => {
    res.status(200).send('Plataforma de curso');
})

app.get('/Cursos',(req,res) => {
    res.status(200).json(cursos);
})

export default app