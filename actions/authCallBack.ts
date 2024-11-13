"use server"

import { currentUser } from "@clerk/nextjs/dist/types/server";

import { db } from "../db";

export async function CreateUserIfNull() {
  try {

    const user = await currentUser();

    if (!user) {
      return { success: false };
    }

    const existingUser = await db.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!existingUser && user.emailAddresses[0]) {
      await db.user.create({
        data: {
          id: user.id,
          name: user.firstName + " " + user.lastName,
        //   @ts-ignore
          email: user.emailAddresses[0],
        },
      });

      return { success: true };
    }

    return { success: true };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false };
  }
}
