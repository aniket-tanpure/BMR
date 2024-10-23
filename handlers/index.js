import { find } from '../db/queries.js';

export const getProduct = async (req, res)=>{
    try{
        const products = await find();
        return res.status(200).json({products});
    } catch(err){
        return res.status(500);
    }
};
export const createProduct = async (req, res)=>{};
export const getAllProducts = async (req, res)=>{
  
    return res.send('getAllProducts');

};
export const updateProduct = async (req, res)=>{};
export const deleteProduct = async (req, res)=>{};
