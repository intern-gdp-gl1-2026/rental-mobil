// prisma/seed.js
const prisma = require("../src/infrastructure/database/prisma");

async function main() {
  console.log("Seeding: start");

  const user = await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: { username: "admin", password: "password" },
  });

  const car = await prisma.car.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Avanza",
      brand: "Toyota",
      imageUrl: "",
      color: "White",
      pricePerDay: "150.00",
    },
  });

  await prisma.rent.create({
    data: {
      userId: user.id,
      carId: car.id,
      rentDate: new Date(),
      returnDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
      paymentStatus: "UNPAID",
      borrowingStatus: "SCHEDULED",
      totalPrice: "150.00",
    },
  });

  console.log("Seeding: done");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
