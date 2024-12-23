import express from "express";
import { Vacina } from "../models/Vaccine.js";

export const vaccines = express.Router()
vaccines.post('/', async (req, res)=>{
    try {
        const vaccine = new Vacina(req.body)
        await vaccine.save()
        res.status(201).json(vaccine)
    } catch (err) {
        res.status(400).json({error: err.messsage })
    }
})
vaccines.get('/', async (req, res)=>{
    try{
        const vaccines = await Vacina.find();
        res.json(vaccines)
    }catch (err){
        res.status(500).json({error:err.messsage})
    }
    
})
vaccines.get('/:id', async (req, res) => {
    try {
        const vaccine = await Vacina.findById(req.params.id);
        if (!vaccine) return res.status(404).json({ message: 'Vacina não encontrada' });
        res.json(vaccine);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

vaccines.put('/:id', async (req, res) => {
    try {
        const vaccine = await Vacina.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!vaccine) return res.status(404).json({ message: 'Vacina não encontrada' });
        res.json(vaccine);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
vaccines.delete('/:id', async (req, res) => {
    try {
        const vaccine = await Vacina.findByIdAndDelete(req.params.id);
        if (!vaccine) return res.status(404).json({ message: 'Vacina não encontrada' });
        res.json({ message: 'Vacina excluída com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});