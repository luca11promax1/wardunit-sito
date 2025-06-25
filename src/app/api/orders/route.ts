import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma-orders';

const prisma = new PrismaClient();

// GET: restituisce tutti gli ordini (puoi filtrare per user_id con ?user_id=...)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('user_id');
  const where = userId ? { user_id: userId } : {};
  const orders = await prisma.orders.findMany({
    where,
    orderBy: { created_at: 'desc' },
  });
  return NextResponse.json(orders);
}

// POST: aggiunge un nuovo ordine
export async function POST(request: NextRequest) {
  const data = await request.json();
  const order = await prisma.orders.create({ data });
  return NextResponse.json(order);
}

// DELETE: cancella ordini più vecchi di 30 giorni
export async function DELETE() {
  const cutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const result = await prisma.orders.deleteMany({
    where: { created_at: { lt: cutoff } },
  });
  return NextResponse.json({ deleted: result.count });
} 