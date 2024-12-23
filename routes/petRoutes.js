import express from "express";
import { pet } from "../models/Pet.js";

export const pets = express.Router()

pets.get('/', async (req, res) => {
    try {
        const myPet = await pet.find()
        res.status(200).json(myPet)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})
pets.get('/:id', async (req, res) => {
    try {
        const myPet = await pet.findById(req.params.id)
        res.status(200).json(myPet)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})
pets.post('/', async (req, res) => {
    try {
        const newPet = new pet(req.body)
        await newPet.save()
        res.status(201).json(newPet)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})
pets.put('/:id', async (req, res) => {
    try {
        const updatePet= await pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatePet) return res.status(404).json({ message: 'Pet nao encontrado' });
        res.json(updatePet);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
pets.delete('/:id', async (req, res)=>{
    try {
        const dpet = await pet.findByIdAndDelete(req.params.id)
        if (!dpet) return res.status(404).json({
            message: "pet nao encontrado"
        })
        res.json({
            message: "pet excuido com sucesso"
        })
    } catch (err) {
        res.status(500).json({error: err})
    }
})