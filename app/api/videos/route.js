
import { getVideos } from "@/lib/firebase/getVideos";
import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({ data: await getVideos() });
}



