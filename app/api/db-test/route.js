import { prisma } from "@/src/infrastructure/database/prisma";

export async function GET() {
  try {
    const users = await prisma.user.count();
    const cars = await prisma.car.count();
    const rents = await prisma.rent.count();
    return new Response(JSON.stringify({ users, cars, rents }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
    });
  }
}
