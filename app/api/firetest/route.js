
import { getProducts } from "@/lib/firebase/getProducts";
import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({ data: await getProducts() });
}



