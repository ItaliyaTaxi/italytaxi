'use client';

export default function PrintButton() {
    return (
        <button
            onClick={() => window.print()}
            className="no-print inline-flex items-center gap-2 rounded-full bg-[#0F1C2E] px-7 py-3.5 text-sm font-bold tracking-wide text-[#C9A84C] shadow-lg transition-all hover:bg-[#1a2e47] active:scale-95"
        >
            🖨 Print / Save as PDF
        </button>
    );
}
