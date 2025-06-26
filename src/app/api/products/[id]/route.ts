import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import mysql from "mysql2/promise";

const prisma = new PrismaClient();

// Funzione di controllo staff (come già usata)
async function isStaff(discordId: string): Promise<boolean> {
  if (!discordId) return false;
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

// PUT: modifica prodotto (solo staff)
export async function PUT(req: Request, { params }: any) {
  try {
    const body = await req.json();
    const { discordId, name, description, price, image_url, active } = body;
    if (!discordId || !(await isStaff(discordId))) {
      return NextResponse.json({ error: "Non autorizzato" }, { status: 403 });
    }
    const id = Number(params.id);
    if (!id || isNaN(id)) {
      return NextResponse.json({ error: "ID prodotto non valido" }, { status: 400 });
    }
    const product = await prisma.product.update({
      where: { id },
      data: { name, description, price, image_url, active },
    });
    return NextResponse.json(product);
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Errore" }, { status: 500 });
  }
}

// DELETE: elimina prodotto (solo staff)
export async function DELETE(req: Request, { params }: any) {
  try {
    const body = await req.json();
    const { discordId } = body;
    if (!discordId || !(await isStaff(discordId))) {
      return NextResponse.json({ error: "Non autorizzato" }, { status: 403 });
    }
    const id = Number(params.id);
    if (!id || isNaN(id)) {
      return NextResponse.json({ error: "ID prodotto non valido" }, { status: 400 });
    }
    await prisma.product.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Errore" }, { status: 500 });
  }
} 