import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const managerId = searchParams.get('manager_id');
    if (!managerId) {
      return NextResponse.json([]); // Nessun manager_id, nessun risultato
    }
    let managerIdBigInt: bigint;
    try {
      managerIdBigInt = BigInt(managerId);
    } catch {
      return NextResponse.json([]);
    }
    const now = new Date();
    const premiums = await prisma.premium_servers.findMany({
      where: {
        manager_id: managerIdBigInt,
        OR: [
          { expires_at: null },
          { expires_at: { gt: now } }
        ]
      },
    });
    // Serializza i BigInt in stringa
    const premiumsSerialized = premiums.map((p) => ({
      ...p,
      guild_id: p.guild_id.toString(),
      added_by: p.added_by?.toString(),
      manager_id: p.manager_id?.toString(),
    }));
    return NextResponse.json(premiumsSerialized);
  } catch (error) {
    return NextResponse.json({ error: 'Errore nel recupero dei dati premium', details: String(error) }, { status: 500 });
  }
} 