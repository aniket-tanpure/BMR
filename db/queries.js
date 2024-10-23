import pool from './index.js'; // Adjust the path as necessary


export const find = async () =>{
    const QUERY = "SELECT * FROM meeting_room_master";
    try{
        const client = await pool.getConnection();
        const result = await client.query(QUERY);
        console.log(result);
        return result[0];
    }
    catch(err){
        console.log(err);
    }
}