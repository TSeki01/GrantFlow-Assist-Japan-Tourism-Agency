"use client";
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function KPISimulator({ units }: { units: number }) {
  // KPIアルゴリズム
  const interactionsPerTourist = 10;
  const legacyTranslationSeqSec = 10; // 従来の逐次翻訳 10秒
  const vmfiTranslationSeqSec = 2;    // VMFi 2秒

  const legacyTotalWait = legacyTranslationSeqSec * interactionsPerTourist;
  const vmfiTotalWait = vmfiTranslationSeqSec * interactionsPerTourist;

  const chartData = [
    { name: '従来の翻訳機', 待機時間: legacyTotalWait },
    { name: 'V社新翻訳機', 待機時間: vmfiTotalWait },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">効果測定（KPI）シミュレーター</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis label={{ value: '1組あたり待機時間(秒)', angle: -90, position: 'insideLeft', offset: 10, style: { fontSize: '11px', fill: '#4b5563', textAnchor: 'middle' } }} />
              <Tooltip cursor={{ fill: '#f3f4f6' }} />
              <Legend />
              <Bar dataKey="待機時間" fill="#1a73e8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-600">
            <p className="text-sm text-gray-600">対応待機時間の削減率</p>
            <p className="text-3xl font-black text-blue-800">80.0% <span className="text-lg">削減</span></p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-600">
            <p className="text-sm text-gray-600">窓口の回転率向上（スループット）</p>
            <p className="text-3xl font-black text-blue-800">5.0x <span className="text-lg">倍向上</span></p>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            ※ 導入台数 {units} 台により、地域全体の多言語対応キャパシティが増加し、インバウンド消費機会のロスを低減します。
          </p>
        </div>
      </div>
    </div>
  );
}
