import { NextRequest, NextResponse } from "next/server";
import ContactForm from "@/types/contactForm";

const API_KEY = process.env.MICROCMS_APIKEY;
const ENDPOINT = process.env.MICROCMS_ENDPOINT;

export async function POST(req: NextRequest) {
  if (!API_KEY || !ENDPOINT) {
    return NextResponse.json(
      { success: false, error: "環境変数が不足しています" },
      { status: 400 }
    );
  }

  const apiUrl = `${ENDPOINT}/contact`;

  try {
    const data: ContactForm = await req.json();
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error(`APIエラー: ${response.status} ${response.statusText}`);
      return NextResponse.json(
        { success: false, error: `APIエラー: ${response.statusText}` },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("APIリクエスト失敗:", error);
    return NextResponse.json(
      { success: false, error: "APIへの接続に失敗しました" },
      { status: 500 }
    );
  }
}
