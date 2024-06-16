"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  try {
    await signOut();
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};
