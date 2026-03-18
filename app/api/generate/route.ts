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
    const data = await req.json();
    const { prefecture, city, issue, locations, units, applicantName, facilityName } = data;

    const prompt = `
あなたは日本の観光庁「インバウンド受入環境整備高度化事業」の申請実務に精通したシニアコンサルタントです。
以下の入力データをもとに、「様式第13」の【本紙（インバウンド受入環境整備高度化計画）】および【別紙（要望書、別紙1、別紙4、別紙5）】に記載すべき内容を自動生成してください。
V社（透明ディスプレイ型AI同時通訳機）を「デジタルサイネージ兼AIチャットBot（AI案内）」として整備するストーリーで構成してください。

金額などの具体的な数値が不明な場合は、「200万円（仮定）」「10,000人（仮定）」のように（仮定）と付記したもっともらしい初期値を生成してください。ユーザーが後から書き換え申請書の内容を完成させます。

【基本情報】
- 申請者（事業者名）: ${applicantName || '未定'}
- 施設名: ${facilityName || '未定'}
- 計画区域: ${prefecture} ${city}
- 現状の課題: ${issue}
- 導入規模: V社新翻訳機 ${locations}箇所、${units}台

【出力JSONフォーマット】（必ず以下のキーのみを含め、マークダウンなどの修飾を省いた純粋なJSONで返してください。公用文・である調で記述）
{
  "planName": "インバウンド受入環境整備高度化計画の適切な計画名",
  "totalCost": "事業費見込みの総額（例：○○円（仮定））",
  "futureVision": "目指す将来像（地域としてどのようなインバウンド受入の姿を目指すか）",
  "objective": "現状の課題と事業の目的（計画区域における現状と課題、当該補助事業の目的）",
  "performanceTargetSatisfaction": "成果目標（満足度関連指標。例：外国人観光客の案内満足度が○○％向上（仮定））",
  "performanceTargetConsumption": "成果目標（消費関連指標。例：案内効率化に伴う周辺での消費単価が○○円増加（仮定））",
  "calculationMethod": "成果目標の算定方法",
  "targetYear": "目標年度（例：令和〇年度）",
  "budgetStatus": "予算措置の状況等",
  "collaborationStatus": "関連事業者や地域との連携状況",
  "overallSummary": "事業の全体概要（V社を活用した多言語対応・案内体制の整備）",
  "creationOfBustle": "（詳細要件）賑わい環境の創出についての記述。該当しない場合は『該当なし』",
  "newNeedsTech": "（詳細要件）新たなニーズへの対応・新技術の活用の記述（V社の透明ディスプレイやAI自動翻訳の活用について熱く記載）",
  "stressFree": "（詳細要件）ストレスフリー・快適な旅行環境の整備についての記述",
  "universalDesign": "（詳細要件）ユニバーサル・デザイン対応についての記述",
  "baseImprovement": "（詳細要件）拠点機能の整備・改良についての記述",
  "jntoCertification": "日本政府観光局（JNTO）による外国人観光案内所の認定の有無（例：認定なし または カテゴリー1取得予定など）",
  
  "areaOverview": "別紙1: ${prefecture}${city}の観光分野における地域の概要と課題",
  "spotOverview": "別紙1: 施設（${facilityName}）等の観光客の来訪が想定される観光スポットの概要",
  "locationRelation": "別紙1: 多言語観光案内標識等（V社）の設置箇所と観光スポットの具体的な関係性・導線",
  "contentDetails": "別紙4: デジタルサイネージ（V社透明ディスプレイ側）で発信する多言語コンテンツの具体的な内容（周辺案内、特産品、防災情報など）",
  "aiBefore1": "別紙5: AI導入前の課題1（例: 案内窓口での言語の壁・待ち時間）",
  "aiAfter1": "別紙5: AI導入後の効果1（例: 2秒以内の同時翻訳による待ち時間解消と満足度向上）",
  "aiBefore2": "別紙5: AI導入前の課題2（例: 緊急時・災害時の外国人対応手段の欠如）",
  "aiAfter2": "別紙5: AI導入後の効果2（例: リアルタイムな多言語音声・テキスト案内による安全確保）",
  "aiBefore3": "別紙5: AI導入前の課題3（例: 観光案内や特産品の魅力が伝わらない機会損失）",
  "aiAfter3": "別紙5: AI導入後の効果3（例: 透明ディスプレイによる魅力発信や顔の見える対面コミュニケーションの実現）"
}
`;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash", 
      generationConfig: { responseMimeType: "application/json" }
    });
    
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    return NextResponse.json(JSON.parse(responseText));
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
  }
}
