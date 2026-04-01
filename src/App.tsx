import React, { useState } from 'react';
import { Download, X } from 'lucide-react';

const initialSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="400">
  <defs>
    <linearGradient id="droneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4facfe"/>
      <stop offset="100%" stop-color="#00f2fe"/>
    </linearGradient>
    <linearGradient id="gndGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#43e97b"/>
      <stop offset="100%" stop-color="#38f9d7"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
    </filter>
  </defs>

  <rect width="800" height="400" fill="#f8f9fa" rx="8" />

  <!-- Drone Node -->
  <rect x="50" y="50" width="220" height="100" rx="10" fill="url(#droneGrad)" filter="url(#shadow)"/>
  <text x="160" y="85" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">无人机边缘节点 (UAV)</text>
  <text x="160" y="110" font-family="sans-serif" font-size="12" fill="#fff" text-anchor="middle">提取 Obj_UAV 及 P^{geo}</text>
  <text x="160" y="130" font-family="sans-serif" font-size="12" fill="#fff" text-anchor="middle">视角：大开角俯视宏观态势</text>

  <!-- Ground Node -->
  <rect x="50" y="250" width="220" height="100" rx="10" fill="url(#gndGrad)" filter="url(#shadow)"/>
  <text x="160" y="285" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">地网边缘节点 (GND)</text>
  <text x="160" y="310" font-family="sans-serif" font-size="12" fill="#fff" text-anchor="middle">提取 Obj_Gnd 与精细特征</text>
  <text x="160" y="330" font-family="sans-serif" font-size="12" fill="#fff" text-anchor="middle">视角：平视/微俯视微观细节</text>

  <!-- Decentralized UDP Bus -->
  <ellipse cx="400" cy="200" rx="60" ry="140" fill="#fff3cd" stroke="#ffb300" stroke-width="3" stroke-dasharray="6,4" filter="url(#shadow)"/>
  <text x="400" y="150" font-family="sans-serif" font-size="14" font-weight="bold" fill="#d35400" text-anchor="middle">UDP 多播总线</text>
  <text x="400" y="180" font-family="sans-serif" font-size="12" fill="#d35400" text-anchor="middle">微量结构化数据</text>
  <text x="400" y="200" font-family="sans-serif" font-size="12" fill="#d35400" text-anchor="middle">(经纬度+时间戳+ID)</text>
  <text x="400" y="220" font-family="sans-serif" font-size="12" fill="#d35400" text-anchor="middle">去中心化零等待</text>

  <!-- Edge Fusion Engine -->
  <rect x="530" y="125" width="220" height="150" rx="10" fill="#e3f2fd" stroke="#007bff" stroke-width="2" filter="url(#shadow)"/>
  <text x="640" y="160" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0056b3" text-anchor="middle">分布式边缘裁决引擎</text>
  <text x="640" y="190" font-family="sans-serif" font-size="13" fill="#0056b3" text-anchor="middle">1. 二分逼近越界修补</text>
  <text x="640" y="215" font-family="sans-serif" font-size="13" fill="#0056b3" text-anchor="middle">2. 时空衰减因子 (W_fuse)</text>
  <text x="640" y="240" font-family="sans-serif" font-size="13" fill="#0056b3" text-anchor="middle">3. 抛弃ReID的硬物理接力</text>

  <!-- Arrows -->
  <path d="M 270 100 Q 340 100 340 150" fill="none" stroke="#6c757d" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M 270 300 Q 340 300 340 250" fill="none" stroke="#6c757d" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M 460 200 L 530 200" fill="none" stroke="#007bff" stroke-width="3" marker-end="url(#arrow)"/>

  <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
    <path d="M 0 0 L 10 5 L 0 10 z" fill="#6c757d"/>
  </marker>
</svg>`;

export default function App() {
  const [svgCode, setSvgCode] = useState(initialSvg);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filename, setFilename] = useState('diagram');

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const confirmDownload = () => {
    let finalName = filename.trim() || 'diagram';
    if (!finalName.toLowerCase().endsWith('.svg')) {
      finalName += '.svg';
    }
    const blob = new Blob([svgCode], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = finalName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen w-full bg-gray-100 font-sans">
      {/* Left Pane: Editor */}
      <div className="w-1/2 h-full flex flex-col border-r border-gray-300 bg-white">
        <div className="p-4 bg-gray-800 text-white font-semibold flex justify-between items-center">
          <span>SVG Code Editor</span>
          <button
            onClick={handleDownloadClick}
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
            title="Download SVG file"
          >
            <Download size={16} />
            Download SVG
          </button>
        </div>
        <textarea
          className="flex-1 w-full p-4 font-mono text-sm bg-gray-900 text-gray-100 outline-none resize-none"
          value={svgCode}
          onChange={(e) => setSvgCode(e.target.value)}
          spellCheck="false"
        />
      </div>

      {/* Right Pane: Preview */}
      <div className="w-1/2 h-full flex flex-col bg-gray-50">
        <div className="p-4 bg-white border-b border-gray-300 font-semibold text-gray-700">
          Live Preview
        </div>
        <div className="flex-1 p-8 flex items-center justify-center overflow-auto">
          <div 
            className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center p-4"
            dangerouslySetInnerHTML={{ __html: svgCode }}
          />
        </div>
      </div>

      {/* Download Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-800">Save SVG As...</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Filename
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  value={filename}
                  onChange={(e) => setFilename(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="diagram"
                  autoFocus
                  onKeyDown={(e) => e.key === 'Enter' && confirmDownload()}
                />
                <span className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-md px-3 py-2 text-sm text-gray-500">
                  .svg
                </span>
              </div>
            </div>
            <div className="p-4 bg-gray-50 flex justify-end gap-2 border-t border-gray-200">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmDownload}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
