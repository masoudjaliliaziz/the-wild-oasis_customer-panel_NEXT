"use server";

import { auth, signIn, signOut } from "./auth";

export async function updateGuest(formdata) {
  const session = await auth();
  if (!session) throw new Error("you must be logged in ");

  const nationalID = formdata.get("nationalID");
  const [nationality, countryFlag] = formdata.get("nationality").split("%");

  const regex = /^[a-zA-Z0-9]{6,12}$/;
  if (!regex.test(nationalID))
    throw new Error("pls provide the valid national id");

  const updateData = { nationalID, nationality, countryFlag };
  console.log(updateData);
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
