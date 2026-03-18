"use client";
import { useState } from 'react';
import KPISimulator from '@/components/KPISimulator';
import Form13Preview from '@/components/Form13Preview';
import ChatAssistant from '@/components/ChatAssistant';

export default function Home() {
  const [formData, setFormData] = useState<any>({ 
    prefecture: '', 
    city: '', 
    issue: '', 
    locations: 1, 
    units: 1,
    applicantName: '',
    facilityName: ''
  });
  const [draft, setDraft] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setDraft(data);
      setFormData((prev: any) => ({ ...prev, ...data }));
    } catch (error) {
      alert("ドラフトの生成に失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-[#1a73e8] text-white p-6 shadow-md print:hidden">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">GrantFlow-Assist Japan Tourism Agency 旅業申辦通</h1>
          <p className="text-sm text-blue-50">様式第13：受入環境整備高度化計画 AI作成支援</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 print:p-0 print:m-0 print:block">
        
        {/* 左側：入力フォーム */}
        <div className="lg:col-span-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 print:hidden">
          <h2 className="text-xl font-bold border-b pb-2 mb-4">1. 計画区域・状況入力</h2>
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">事業者名（申請者）</label>
              <input type="text" className="w-full border p-2 rounded" placeholder="例: V社観光推進協議会" value={formData.applicantName} onChange={e => setFormData({...formData, applicantName: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">施設名</label>
              <input type="text" className="w-full border p-2 rounded" placeholder="例: 〇〇観光案内所" value={formData.facilityName} onChange={e => setFormData({...formData, facilityName: e.target.value})} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">都道府県</label>
                <input type="text" className="w-full border p-2 rounded" placeholder="例: 東京都" required value={formData.prefecture} onChange={e => setFormData({...formData, prefecture: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">市区町村</label>
                <input type="text" className="w-full border p-2 rounded" placeholder="例: 台東区" required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">現状の課題</label>
              <select className="w-full border p-2 rounded" value={formData.issue} onChange={e => setFormData({...formData, issue: e.target.value})} required>
                <option value="">選択してください</option>
                <option value="通訳スタッフが不足しており、窓口の待ち時間が長い">通訳スタッフが不足しており、窓口の待ち時間が長い</option>
                <option value="多言語対応の不備により、特産品の販売機会を逸している">多言語対応の不備により、特産品の販売機会を逸している</option>
                <option value="災害時や緊急時の外国人への案内手段が確立していない">災害時や緊急時の外国人への案内手段が確立していない</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">設置箇所数</label>
                <input type="number" min="1" className="w-full border p-2 rounded" value={formData.locations} onChange={e => setFormData({...formData, locations: Number(e.target.value)})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">導入台数 (台)</label>
                <input type="number" min="1" className="w-full border p-2 rounded" value={formData.units} onChange={e => setFormData({...formData, units: Number(e.target.value)})} />
              </div>
            </div>

            <div className="mt-4">
              <button type="submit" disabled={loading} className="w-full bg-[#1a73e8] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-all disabled:bg-gray-400">
                {loading ? 'AIがエクセル様式を生成中...' : '様式第13ドラフトを自動生成する'}
              </button>
              <p className="text-[10px] text-gray-500 mt-2 text-center">※AIによる構成のため、約1分程度の生成時間が掛かります</p>
            </div>
          </form>

          {/* 自動構成されるスケジュール */}
          <div className="mt-8">
            <h2 className="text-xl font-bold border-b pb-2 mb-4">実施スケジュール（自動構成）</h2>
            <ul className="text-sm space-y-2 text-gray-600">
              <li className="flex justify-between border-b pb-1"><span>4月-5月</span> <span>交付決定・基本設計</span></li>
              <li className="flex justify-between border-b pb-1"><span>6月-7月</span> <span>機器発注・ネットワーク工事</span></li>
              <li className="flex justify-between border-b pb-1"><span>8月-9月</span> <span>V社製品設置・スタッフ研修</span></li>
              <li className="flex justify-between border-b pb-1 font-bold text-[#1a73e8]"><span>10月</span> <span>運用開始・効果測定（KPI収集）</span></li>
              <li className="flex justify-between border-b pb-1"><span>翌1月</span> <span>実績報告書 提出</span></li>
            </ul>
          </div>

          {/* AI生成後の手動編集フォーム */}
          {draft && (
            <div className="mt-8 pt-8 border-t border-gray-300">
              <h2 className="text-xl font-bold border-b pb-2 mb-4 bg-blue-50 text-blue-900 p-2 rounded">
                2. 内容のブラッシュアップ（対話型AI & 手動修正）
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                💡 AIチャットで質問ができます。その後、下のフォームを直接書き換え申請書の内容を完成させてください。右側のプレビューに即刻反映され、印刷が可能です。
              </p>
              
              <div className="mb-8">
                <ChatAssistant formData={formData} onUpdateFormData={(updatedFields) => setFormData((prev: any) => ({ ...prev, ...updatedFields }))} />
              </div>

              <div className="space-y-6 max-h-[800px] overflow-y-auto pr-4 custom-scrollbar">
                {[
                  { key: 'planName', label: '計画名', type: 'text' },
                  { key: 'totalCost', label: '事業費見込み', type: 'text' },
                  { key: 'futureVision', label: '目指す将来像', type: 'textarea' },
                  { key: 'objective', label: '事業の目的等', type: 'textarea' },
                  { key: 'performanceTargetSatisfaction', label: '成果目標（満足度関連指標）', type: 'textarea' },
                  { key: 'performanceTargetConsumption', label: '成果目標（消費関連指標）', type: 'textarea' },
                  { key: 'calculationMethod', label: '成果目標の算定方法', type: 'textarea' },
                  { key: 'targetYear', label: '目標年度', type: 'text' },
                  { key: 'budgetStatus', label: '予算措置の状況等', type: 'textarea' },
                  { key: 'collaborationStatus', label: '関連事業者との連携状況', type: 'textarea' },
                  { key: 'overallSummary', label: '全体概要', type: 'textarea' },
                  { key: 'creationOfBustle', label: '（詳細要件）賑わい環境の創出', type: 'textarea' },
                  { key: 'newNeedsTech', label: '（詳細要件）新たなニーズ・新技術の活用', type: 'textarea' },
                  { key: 'jntoCertification', label: 'JNTO外国人観光案内所の認定', type: 'text' },
                ].map((field) => (
                  <div key={field.key} className="bg-gray-50 p-3 rounded border border-gray-200">
                    <label className="block text-sm font-bold text-gray-700 mb-2">{field.label}</label>
                    {field.type === 'textarea' ? (
                      <textarea 
                        className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2 rounded-md min-h-[100px] text-sm"
                        value={formData[field.key] || ''}
                        onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                      />
                    ) : (
                      <input 
                        type="text"
                        className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2 rounded-md text-sm"
                        value={formData[field.key] || ''}
                        onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 右側：プレビュー＆KPI */}
        <div className="lg:col-span-8 flex flex-col print:block print:w-full">
          <div className="print:hidden">
            <KPISimulator units={formData.units} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex-grow relative print:p-0 print:border-none print:shadow-none">
            <div className="flex justify-between items-center border-b pb-2 mb-4 print:hidden">
              <h2 className="text-xl font-bold">様式第13 リアルタイムプレビュー</h2>
              {draft && (
                <button onClick={() => window.print()} className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm shadow transition-colors">
                  PDF出力 / 印刷
                </button>
              )}
            </div>
            
            <Form13Preview draft={draft} formData={formData} />
            
          </div>
        </div>
      </main>
    </div>
  );
}

