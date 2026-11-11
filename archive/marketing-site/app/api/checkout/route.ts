import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Digital products are no longer available." },
    { status: 410 },
  );
}
