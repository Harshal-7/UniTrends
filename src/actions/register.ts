"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schema/RegisterSchema";
import bcrypt from "bcryptjs";

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  // validating the fields using zod
  const validateFields = RegisterSchema.safeParse(data);
  // if fields are invalid return the object as error
  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }
  // destruct the data object
  const { name, email, password } = validateFields.data;
  try {
    // check whether user already exists or not by name
    const existingUserByName = await db.user.findUnique({
      where: {
        name,
      },
    });

    // if user already exists then return error as this
    if (existingUserByName) {
      return { error: "User already exist with this name" };
    }
    // check whether user already exists or not by email
    const existingUserByEmail = await db.user.findUnique({
      where: {
        email,
      },
    });
    // if user already exists then return error as this
    if (existingUserByEmail) {
      return { error: "User already exist with this email" };
    }
    // Create new user
    // hash the password using bcrypt to prevent saving the password directly
    // into database which is not secured at all!! So use this method!
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // return success object this will be displayed as toast if succeed
    return { success: "User Created Successfully" };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
