// get and redirect

import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.redirect(new URL("/", req.url));
}