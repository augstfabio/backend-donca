import express from "express";
import { petPost } from "../models/Post.js";

export const posts = express.Router()

posts.get('/',async (req, res)=>{
    try{
        const posts = await petPost.find()
        res.status(200).json(posts)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})
posts.post('/',async (req, res)=>{
    try{
        const post = new petPost(req.body)
        await post.save()
        res.status(201).json(post)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})
posts.get('/:id', async (req, res) => {
    try {
        const post = await petPost.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post não encontrado' });
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
posts.put('/:id', async (req, res) => {
    try {
        const post = await petPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) return res.status(404).json({ message: 'Post nao encontrado' });
        res.json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
posts.delete('/:id', async (req, res) => {
    try {
        const post = await petPost.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post nao encontrado' });
        res.json({message: 'post excuido com sucesso'});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
