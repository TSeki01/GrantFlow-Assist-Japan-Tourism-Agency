import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error("API Key is missing in process.env");
    return NextResponse.json({ error: 'API Key not set' }, { status: 500 });
  }
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  try {
    const { message, formData } = await req.json();

    const prompt = `
あなたは日本の観光庁「インバウンド受入環境整備高度化事業」の申請書作成をサポートするプロフェッショナルなAIアシスタントです。
ユーザーから入力された修正指示や相談（チャット）に対して、親身にアドバイスを返答してください。
さらに、話の流れから推測して、申請書の該当する項目（formData）を自動で修正・加筆してあげてください。

【現在の申請書データ（formData）】
${JSON.stringify(formData, null, 2)}

【ユーザーのメッセージ】
${message}

【出力形式】
必ず以下のJSON形式で出力してください。マークダウンなどは含めないでください。
{
  "reply": "ユーザーに対する丁寧なチャットの返答（相談に乗ったり、どの項目をどう直したか報告する）",
  "updatedFields": {
    "更新が必要なキー1": "更新後の文章や値",
    "更新が必要なキー2": "更新後の文章や値"
  }
}
※updatedFieldsは、修正が必要な項目のみを含めてください。修正が不要な場合は空のオブジェクト {} にしてください。
`;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash", 
      generationConfig: { responseMimeType: "application/json" }
    });
    
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    return NextResponse.json(JSON.parse(responseText));
  } catch (error) {
    console.error("Gemini Chat API Error:", error);
    return NextResponse.json({ error: 'Failed to chat with AI' }, { status: 500 });
  }
}
