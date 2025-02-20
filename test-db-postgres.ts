import { db } from './src/drizzle/client'; // Importa seu Drizzle client
import { sql } from 'drizzle-orm';

async function testConnection() {
  try {
    const result = await db.execute(sql`SELECT NOW();`);
    console.log("✅ Conectado ao PostgreSQL com sucesso!");
    console.log("📅 Hora atual do banco:", result[0].now);
  } catch (error) {
    console.error("❌ Erro ao conectar ao PostgreSQL:", error);
  }
}

testConnection();