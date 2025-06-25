import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req: NextRequest) {
  try {
    const { discordId } = await req.json();
    if (!discordId) {
      return NextResponse.json({ isStaff: false }, { status: 400 });
    }

    // Configurazione DB: prendi i dati da process.env
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

    const staffRows = rows as mysql.RowDataPacket[];
    if (Array.isArray(staffRows) && staffRows.length > 0) {
      return NextResponse.json({ isStaff: true, role: staffRows[0].role });
    } else {
      return NextResponse.json({ isStaff: false });
    }
  } catch (err) {
    return NextResponse.json({ isStaff: false, error: (err as Error).message }, { status: 500 });
  }
} 