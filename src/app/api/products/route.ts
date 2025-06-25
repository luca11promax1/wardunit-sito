import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import mysql from "mysql2/promise";

const prisma = new PrismaClient();

// Funzione di controllo staff (riutilizza la logica di /api/staff/check)
async function isStaff(discordId: string): Promise<boolean> {
  if (!discordId) return false;
  // Connessione diretta per evitare dipendenze circolari
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  const [rows] = await connection.execute(
    "SELECT role FROM staff WHERE staff_id = ?",
    [discordId]
  );
  await connection.end();
  return Array.isArray(rows) && rows.length > 0;
}

// GET: lista prodotti
export async function GET() {
  try {
    const products = await prisma.product.findMany({ orderBy: { id: "asc" } });
    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

// POST: crea nuovo prodotto (solo staff)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { discordId, name, description, price, image_url, active } = body;
    if (!discordId || !(await isStaff(discordId))) {
      return NextResponse.json({ error: "Non autorizzato" }, { status: 403 });
    }
    if (!name || typeof price !== "number") {
      return NextResponse.json({ error: "Dati prodotto mancanti o non validi" }, { status: 400 });
    }
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        image_url,
        active: active !== undefined ? !!active : true,
      },
    });
    return NextResponse.json(product, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
} 