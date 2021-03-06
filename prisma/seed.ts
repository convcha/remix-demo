import { randEmail, randFullName, randNumber } from "@ngneat/falso";
import { Prisma, PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const getUsers = (): Prisma.UserCreateInput[] => {
  return Array(10)
    .fill(0)
    .map(() => ({
      email: randEmail(),
      password:
        "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
      name: randFullName(),
      age: randNumber({ min: 0, max: 100 }),
    }));
};

async function seed() {
  await Promise.all(
    getUsers().map((user) => {
      return db.user.create({ data: user });
    })
  );
}

seed();
