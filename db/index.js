import { createPool } from 'mysql2/promise'; // Use promise-based version for async/await
import { config } from 'dotenv';

config(); // Load environment variables

const pool = createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    port: process.env.MYSQL_PORT || 3306, // Default MySQL port
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export const connectionToDatabase = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Connection Successful');
        connection.release(); // Release the connection back to the pool
    } catch (err) {
        console.error('Connection ERROR:', err.message); // Log error message
    }
};

export default pool; // Optionally export the pool for further queries
