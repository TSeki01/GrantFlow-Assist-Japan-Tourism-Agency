import React from 'react';

export default function Form13Preview({ draft, formData }: { draft: any, formData: any }) {
  if (!draft) return (
    <div className="flex items-center justify-center h-48 text-gray-400">
      左側のフォームから生成を実行してください。
    </div>
  );

  return (
    <div className="space-y-12 overflow-y-auto pr-2 text-sm leading-relaxed text-black print:text-black">
      
      {/* 13.xlsx 本紙 */}
      <div className="border border-black p-4 bg-white shadow-sm print:shadow-none print:border-none">
        <h3 className="font-bold text-center text-lg mb-6 border-b border-black pb-2">
          インバウンド受入環境整備高度化計画
        </h3>
        
        <table className="w-full border-collapse border border-black text-left mb-6">
          <tbody>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal w-1/4">計画名</th>
              <td className="border border-black p-2" colSpan={3}>{formData.planName || draft.planName}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">事業費見込み</th>
              <td className="border border-black p-2" colSpan={3}>{formData.totalCost || draft.totalCost}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">目指す将来像</th>
              <td className="border border-black p-2 whitespace-pre-wrap" colSpan={3}>{formData.futureVision || draft.futureVision}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">事業の目的等</th>
              <td className="border border-black p-2 whitespace-pre-wrap" colSpan={3}>{formData.objective || draft.objective}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal" rowSpan={2}>成果目標</th>
              <th className="border border-black p-2 bg-gray-50 font-normal w-32">満足度関連指標</th>
              <td className="border border-black p-2 whitespace-pre-wrap" colSpan={2}>{formData.performanceTargetSatisfaction || draft.performanceTargetSatisfaction}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-50 font-normal">消費関連指標</th>
              <td className="border border-black p-2 whitespace-pre-wrap" colSpan={2}>{formData.performanceTargetConsumption || draft.performanceTargetConsumption}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">算定方法</th>
              <td className="border border-black p-2 whitespace-pre-wrap">{formData.calculationMethod || draft.calculationMethod}</td>
              <th className="border border-black p-2 bg-gray-100 font-normal w-24">目標年度</th>
              <td className="border border-black p-2">{formData.targetYear || draft.targetYear}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">予算措置の状況等</th>
              <td className="border border-black p-2 whitespace-pre-wrap" colSpan={3}>{formData.budgetStatus || draft.budgetStatus}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">関連事業者や地域との連携状況</th>
              <td className="border border-black p-2 whitespace-pre-wrap" colSpan={3}>{formData.collaborationStatus || draft.collaborationStatus}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">全体概要</th>
              <td className="border border-black p-2 whitespace-pre-wrap" colSpan={3}>{formData.overallSummary || draft.overallSummary}</td>
            </tr>
          </tbody>
        </table>

        <h4 className="font-bold mb-2">詳細要件に関する記述</h4>
        <table className="w-full border-collapse border border-black text-left">
          <tbody>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal w-1/4">賑わい環境の創出</th>
              <td className="border border-black p-2 whitespace-pre-wrap">{formData.creationOfBustle || draft.creationOfBustle}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">新たなニーズへの対応・新技術の活用</th>
              <td className="border border-black p-2 whitespace-pre-wrap">{formData.newNeedsTech || draft.newNeedsTech}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">ストレスフリー・快適な旅行環境の整備</th>
              <td className="border border-black p-2 whitespace-pre-wrap">{formData.stressFree || draft.stressFree}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">ユニバーサル対応</th>
              <td className="border border-black p-2 whitespace-pre-wrap">{formData.universalDesign || draft.universalDesign}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">拠点機能の整備・改良</th>
              <td className="border border-black p-2 whitespace-pre-wrap">{formData.baseImprovement || draft.baseImprovement}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">JNTOによる外国人観光案内所の認定</th>
              <td className="border border-black p-2 whitespace-pre-wrap">{formData.jntoCertification || draft.jntoCertification}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 要望書（表紙） */}
      <div className="border border-black p-4 bg-white shadow-sm print:shadow-none print:border-none">
        <h3 className="font-bold text-center text-lg mb-4 border-b border-black pb-2">
          令和７年度観光振興事業費補助金<br/>
          （インバウンド受入環境整備高度化事業（多言語案内の整備））<br/>
          要望書
        </h3>
        <div className="text-right mb-6">
          令和　年　月　日
        </div>
        <div className="mb-6">
          国土交通大臣　殿
        </div>
        <div className="flex flex-col items-end space-y-2 mb-8">
          <div className="flex w-1/2">
            <span className="w-24">住　　所：</span>
            <span className="border-b border-black flex-1 text-center">{formData.prefecture} {formData.city}</span>
          </div>
          <div className="flex w-1/2">
            <span className="w-24">名称・氏名：</span>
            <span className="border-b border-black flex-1 text-center">{formData.applicantName || '未記入'}</span>
          </div>
        </div>
        
        <p className="indent-4 mb-4">
          令和７年度観光振興事業費補助金（インバウンド受入環境整備高度化事業（多言語案内の整備））について、別紙のとおり関係書類を添えて要望します。
        </p>
        
        <table className="w-full border-collapse border border-black text-left">
          <tbody>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal w-1/4">補助対象事業名</th>
              <td className="border border-black p-2">多言語案内の整備</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">事業者名</th>
              <td className="border border-black p-2">{formData.applicantName || '未記入'}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">施設名</th>
              <td className="border border-black p-2">{formData.facilityName || '未記入'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 別紙1 */}
      <div className="border border-black p-4 bg-white shadow-sm print:shadow-none print:border-none">
        <h3 className="font-bold text-lg mb-2">別紙１　多言語案内の整備の概要</h3>
        <table className="w-full border-collapse border border-black text-left">
          <tbody>
            <tr>
              <th className="border border-black p-2 bg-gray-100 w-1/3 font-normal">多言語案内の整備を実施する地域の概要</th>
              <td className="border border-black p-2 whitespace-pre-wrap">{draft.areaOverview}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">施設の所在地（住所）</th>
              <td className="border border-black p-2">{formData.prefecture} {formData.city}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">観光客の来訪が想定される<br/>観光スポットの概要</th>
              <td className="border border-black p-2 whitespace-pre-wrap">{draft.spotOverview}</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal">多言語観光案内標識等の設置箇所と<br/>観光スポットの関係性</th>
              <td className="border border-black p-2 whitespace-pre-wrap">{draft.locationRelation}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 別紙4 */}
      <div className="border border-black p-4 bg-white shadow-sm print:shadow-none print:border-none">
        <h3 className="font-bold text-lg mb-2">別紙４　コンテンツ作成</h3>
        <table className="w-full border-collapse border border-black text-left">
          <tbody>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal w-1/4" rowSpan={4}>コンテンツ概要</th>
              <td className="border border-black p-2 bg-gray-50 font-normal w-1/4">情報発信媒体</td>
              <td className="border border-black p-2">デジタルサイネージ（V社透明ディスプレイ等）</td>
            </tr>
            <tr>
              <td className="border border-black p-2 bg-gray-50 font-normal">看板（二次元コード）</td>
              <td className="border border-black p-2">&nbsp;</td>
            </tr>
            <tr>
              <td className="border border-black p-2 bg-gray-50 font-normal">その他</td>
              <td className="border border-black p-2">&nbsp;</td>
            </tr>
            <tr>
              <td className="border border-black p-2 bg-gray-50 font-normal">発信内容</td>
              <td className="border border-black p-2 whitespace-pre-wrap">{draft.contentDetails}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 別紙5 */}
      <div className="border border-black p-4 bg-white shadow-sm print:shadow-none print:border-none">
        <h3 className="font-bold text-lg mb-2">別紙５　AIチャットBot（AI案内）</h3>
        <table className="w-full border-collapse border border-black text-left mb-4">
          <tbody>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal w-1/3" colSpan={2}>導入するAIチャットBot（AI翻訳）の詳細</th>
              <td className="border border-black p-2">V社新翻訳機 (5G/AI同時通訳システム)</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal" colSpan={2}>対応言語数</th>
              <td className="border border-black p-2">120ヶ国語以上</td>
            </tr>
            <tr>
              <th className="border border-black p-2 bg-gray-100 font-normal" colSpan={2}>活用するAIエンジン</th>
              <td className="border border-black p-2">V社独自AI連携システム</td>
            </tr>
          </tbody>
        </table>

        <h4 className="font-bold mb-2">AIチャットBot（AI案内）での情報提供範囲等</h4>
        <table className="w-full border-collapse border border-black text-left text-xs">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-black p-1 text-center font-normal w-8">No.</th>
              <th className="border border-black p-1 text-center font-normal w-24">状況</th>
              <th className="border border-black p-1 text-center font-normal">具体的内容</th>
            </tr>
          </thead>
          <tbody>
            {/* パターン1 */}
            <tr>
              <td className="border border-black p-2 text-center" rowSpan={2}>1</td>
              <td className="border border-black p-2 text-center bg-gray-50">【現状】</td>
              <td className="border border-black p-2 whitespace-pre-wrap">{draft.aiBefore1}</td>
            </tr>
            <tr>
              <td className="border border-black p-2 text-center bg-gray-50 font-bold text-teal-700">【事業実施後】</td>
              <td className="border border-black p-2 whitespace-pre-wrap text-teal-900 font-medium">{draft.aiAfter1}</td>
            </tr>
            
            {/* パターン2 */}
            <tr>
              <td className="border border-black p-2 text-center" rowSpan={2}>2</td>
              <td className="border border-black p-2 text-center bg-gray-50">【現状】</td>
              <td className="border border-black p-2 whitespace-pre-wrap">{draft.aiBefore2}</td>
            </tr>
            <tr>
              <td className="border border-black p-2 text-center bg-gray-50 font-bold text-teal-700">【事業実施後】</td>
              <td className="border border-black p-2 whitespace-pre-wrap text-teal-900 font-medium">{draft.aiAfter2}</td>
            </tr>

            {/* パターン3 */}
            <tr>
              <td className="border border-black p-2 text-center" rowSpan={2}>3</td>
              <td className="border border-black p-2 text-center bg-gray-50">【現状】</td>
              <td className="border border-black p-2 whitespace-pre-wrap">{draft.aiBefore3}</td>
            </tr>
            <tr>
              <td className="border border-black p-2 text-center bg-gray-50 font-bold text-teal-700">【事業実施後】</td>
              <td className="border border-black p-2 whitespace-pre-wrap text-teal-900 font-medium">{draft.aiAfter3}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
