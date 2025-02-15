"use server";

import ContactForm from "@/types/contactForm";

export async function sendContactForm(data: ContactForm) {
  const apiKey = process.env.MICROCMS_APIKEY;
  const endpoint = process.env.MICROCMS_ENDPOINT;

  if (!apiKey || !endpoint) {
    console.error("環境変数が設定されていません");
    return { success: false, error: "環境変数が不足しています" };
  }

  const apiUrl = `${endpoint}/contact`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "X-MICROCMS-API-KEY": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error(`APIエラー: ${response.status} ${response.statusText}`);
      return { success: false, error: `APIエラー: ${response.statusText}` };
    }

    return { success: true };
  } catch (error) {
    console.error("APIリクエスト失敗:", error);
    return { success: false, error: "APIへの接続に失敗しました" };
  }
}
