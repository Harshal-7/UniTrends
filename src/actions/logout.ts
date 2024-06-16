"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export const logout = async () => {
  try {
    await signOut();
  } catch (error) {
    if (error) {
      return { error: "Something went wrong!" };
    }
    throw error;
  }
};
