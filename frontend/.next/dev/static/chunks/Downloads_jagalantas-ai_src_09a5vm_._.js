(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/jagalantas-ai/src/data/jakartaData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ── CCTV CAMERA LOCATIONS (Jakarta protocol roads)
__turbopack_context__.s([
    "cctvCameras",
    ()=>cctvCameras,
    "citizenReports",
    ()=>citizenReports,
    "forecast24h",
    ()=>forecast24h,
    "hotspots",
    ()=>hotspots,
    "liveIncidents",
    ()=>liveIncidents,
    "statsSummary",
    ()=>statsSummary,
    "violationTypes",
    ()=>violationTypes
]);
const cctvCameras = [
    {
        id: 'c01',
        name: 'Jl. Sudirman - Semanggi',
        lat: -6.2088,
        lng: 106.8231,
        status: 'online',
        zone: 'Pusat'
    },
    {
        id: 'c02',
        name: 'Jl. Thamrin - BNI',
        lat: -6.1944,
        lng: 106.8229,
        status: 'online',
        zone: 'Pusat'
    },
    {
        id: 'c03',
        name: 'Jl. Gatot Subroto - DPR',
        lat: -6.2097,
        lng: 106.8008,
        status: 'online',
        zone: 'Barat'
    },
    {
        id: 'c04',
        name: 'Jl. HR Rasuna Said - Kuningan',
        lat: -6.2186,
        lng: 106.8317,
        status: 'online',
        zone: 'Selatan'
    },
    {
        id: 'c05',
        name: 'Jl. Casablanca - Tebet',
        lat: -6.2335,
        lng: 106.8479,
        status: 'offline',
        zone: 'Selatan'
    },
    {
        id: 'c06',
        name: 'Jl. MT Haryono - Cawang',
        lat: -6.2432,
        lng: 106.8687,
        status: 'online',
        zone: 'Timur'
    },
    {
        id: 'c07',
        name: 'Jl. Gunung Sahari - Kemayoran',
        lat: -6.1562,
        lng: 106.8455,
        status: 'online',
        zone: 'Utara'
    },
    {
        id: 'c08',
        name: 'Jl. Mangga Dua - Pasar Pagi',
        lat: -6.1387,
        lng: 106.8182,
        status: 'online',
        zone: 'Utara'
    },
    {
        id: 'c09',
        name: 'Jl. Daan Mogot - Cengkareng',
        lat: -6.1606,
        lng: 106.7417,
        status: 'online',
        zone: 'Barat'
    },
    {
        id: 'c10',
        name: 'Jl. Raya Bogor - Kramatjati',
        lat: -6.2783,
        lng: 106.8912,
        status: 'online',
        zone: 'Timur'
    },
    {
        id: 'c11',
        name: 'Jl. Pramuka - Matraman',
        lat: -6.2003,
        lng: 106.8614,
        status: 'online',
        zone: 'Timur'
    },
    {
        id: 'c12',
        name: 'Jl. Hayam Wuruk - Glodok',
        lat: -6.1494,
        lng: 106.8133,
        status: 'offline',
        zone: 'Barat'
    },
    {
        id: 'c13',
        name: 'Busway Corridor 1 - Blok M',
        lat: -6.2447,
        lng: 106.7990,
        status: 'online',
        zone: 'Selatan'
    },
    {
        id: 'c14',
        name: 'Busway Corridor 6 - Ragunan',
        lat: -6.3126,
        lng: 106.8199,
        status: 'online',
        zone: 'Selatan'
    },
    {
        id: 'c15',
        name: 'Jl. Pluit - Penjaringan',
        lat: -6.1185,
        lng: 106.7930,
        status: 'online',
        zone: 'Utara'
    }
];
const hotspots = [
    {
        id: 'h01',
        lat: -6.2088,
        lng: 106.8231,
        riskScore: 92,
        violations: 847,
        type: 'Parkir Liar + Jalur Busway',
        forecast24h: 'TINGGI',
        zone: 'Pusat'
    },
    {
        id: 'h02',
        lat: -6.1944,
        lng: 106.8229,
        riskScore: 88,
        violations: 723,
        type: 'Jalur Busway',
        forecast24h: 'TINGGI',
        zone: 'Pusat'
    },
    {
        id: 'h03',
        lat: -6.2186,
        lng: 106.8317,
        riskScore: 79,
        violations: 612,
        type: 'Parkir Liar',
        forecast24h: 'SEDANG',
        zone: 'Selatan'
    },
    {
        id: 'h04',
        lat: -6.2335,
        lng: 106.8479,
        riskScore: 74,
        violations: 534,
        type: 'Parkir Liar',
        forecast24h: 'SEDANG',
        zone: 'Selatan'
    },
    {
        id: 'h05',
        lat: -6.2432,
        lng: 106.8687,
        riskScore: 85,
        violations: 698,
        type: 'Jalur Sepeda + Parkir Liar',
        forecast24h: 'TINGGI',
        zone: 'Timur'
    },
    {
        id: 'h06',
        lat: -6.1387,
        lng: 106.8182,
        riskScore: 91,
        violations: 812,
        type: 'Parkir Liar',
        forecast24h: 'TINGGI',
        zone: 'Utara'
    },
    {
        id: 'h07',
        lat: -6.2097,
        lng: 106.8008,
        riskScore: 67,
        violations: 423,
        type: 'Jalur Busway',
        forecast24h: 'SEDANG',
        zone: 'Barat'
    },
    {
        id: 'h08',
        lat: -6.2783,
        lng: 106.8912,
        riskScore: 55,
        violations: 312,
        type: 'Parkir Liar',
        forecast24h: 'RENDAH',
        zone: 'Timur'
    }
];
const forecast24h = [
    {
        jam: '06:00',
        prediksi: 12,
        aktual: 10
    },
    {
        jam: '07:00',
        prediksi: 45,
        aktual: 42
    },
    {
        jam: '08:00',
        prediksi: 89,
        aktual: 94
    },
    {
        jam: '09:00',
        prediksi: 72,
        aktual: 68
    },
    {
        jam: '10:00',
        prediksi: 48,
        aktual: 51
    },
    {
        jam: '11:00',
        prediksi: 35,
        aktual: 33
    },
    {
        jam: '12:00',
        prediksi: 41,
        aktual: null
    },
    {
        jam: '13:00',
        prediksi: 38,
        aktual: null
    },
    {
        jam: '14:00',
        prediksi: 29,
        aktual: null
    },
    {
        jam: '15:00',
        prediksi: 44,
        aktual: null
    },
    {
        jam: '16:00',
        prediksi: 78,
        aktual: null
    },
    {
        jam: '17:00',
        prediksi: 95,
        aktual: null
    },
    {
        jam: '18:00',
        prediksi: 88,
        aktual: null
    },
    {
        jam: '19:00',
        prediksi: 61,
        aktual: null
    },
    {
        jam: '20:00',
        prediksi: 32,
        aktual: null
    }
];
const violationTypes = [
    {
        type: 'Parkir Liar',
        count: 3241,
        pct: 53
    },
    {
        type: 'Jalur Busway',
        count: 1876,
        pct: 31
    },
    {
        type: 'Jalur Sepeda',
        count: 612,
        pct: 10
    },
    {
        type: 'Berhenti Sembarangan',
        count: 372,
        pct: 6
    }
];
const liveIncidents = [
    {
        id: 'i01',
        lat: -6.2088,
        lng: 106.8231,
        type: 'Kemacetan Parah',
        severity: 'high',
        location: 'Jl. Sudirman - depan Semanggi',
        detectedAt: '11:42',
        source: 'AI CCTV',
        description: 'Antrian kendaraan >500m, estimasi delay 25 menit',
        alertSent: true,
        recipients: 1247
    },
    {
        id: 'i02',
        lat: -6.1944,
        lng: 106.8300,
        type: 'Kecelakaan',
        severity: 'critical',
        location: 'Jl. Thamrin - depan Sarinah',
        detectedAt: '11:38',
        source: 'AI CCTV',
        description: 'Tabrakan 2 kendaraan, 1 jalur tertutup. Petugas menuju lokasi.',
        alertSent: true,
        recipients: 2103
    },
    {
        id: 'i03',
        lat: -6.2447,
        lng: 106.7990,
        type: 'Busway Blocked',
        severity: 'medium',
        location: 'Blok M - Jalur Busway Corridor 1',
        detectedAt: '11:51',
        source: 'Laporan Warga',
        description: 'Kendaraan pribadi masuk jalur busway, memperlambat arus TransJakarta',
        alertSent: true,
        recipients: 384
    },
    {
        id: 'i04',
        lat: -6.2335,
        lng: 106.8479,
        type: 'Perlambatan Arus',
        severity: 'low',
        location: 'Jl. Casablanca - arah Kuningan',
        detectedAt: '11:55',
        source: 'AI CCTV',
        description: 'Perlambatan normal jam kerja, estimasi delay 8 menit',
        alertSent: false,
        recipients: 0
    }
];
const citizenReports = [
    {
        id: 'r01',
        lat: -6.2150,
        lng: 106.8350,
        status: 'verified',
        confidence: 94,
        location: 'Jl. Rasuna Said No. 45',
        type: 'Parkir Liar',
        channel: 'JAKI',
        reportedAt: '11:20',
        reporterCode: 'WRG-4821',
        description: 'Mobil parkir di atas trotoar menutup akses pejalan kaki',
        action: 'Petugas dikirim, tiba 11:35'
    },
    {
        id: 'r02',
        lat: -6.1562,
        lng: 106.8455,
        status: 'processing',
        confidence: 71,
        location: 'Jl. Gunung Sahari - depan RS',
        type: 'Jalur Busway',
        channel: 'WhatsApp',
        reportedAt: '11:33',
        reporterCode: 'WRG-5503',
        description: 'Angkot berhenti di jalur busway mengangkut penumpang',
        action: 'Validasi CCTV sedang berlangsung...'
    },
    {
        id: 'r03',
        lat: -6.2003,
        lng: 106.8614,
        status: 'rejected',
        confidence: 22,
        location: 'Jl. Pramuka - Matraman',
        type: 'Kecelakaan',
        channel: 'CRM',
        reportedAt: '11:18',
        reporterCode: 'WRG-3310',
        description: 'Dugaan kecelakaan di persimpangan',
        action: 'Tidak terkonfirmasi oleh CCTV terdekat'
    },
    {
        id: 'r04',
        lat: -6.1387,
        lng: 106.8182,
        status: 'verified',
        confidence: 88,
        location: 'Mangga Dua - Pasar Pagi',
        type: 'Parkir Liar',
        channel: 'JAKI',
        reportedAt: '11:45',
        reporterCode: 'WRG-6612',
        description: 'Puluhan motor parkir di badan jalan menyebabkan kemacetan',
        action: 'Tim parkir dikirim'
    }
];
const statsSummary = {
    totalViolationsToday: 1247,
    totalViolationsMonth: 38420,
    cctvOnline: 13,
    cctvTotal: 15,
    activeIncidents: 3,
    citizenReportsToday: 42,
    reportsVerified: 31,
    officersDeployed: 18
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/jagalantas-ai/src/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Card({ className = '', children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/jagalantas-ai/src/components/ui/Card.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className = '', children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `px-5 py-4 border-b border-slate-100 dark:border-slate-800/50 flex flex-col gap-1.5 ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/jagalantas-ai/src/components/ui/Card.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className = '', children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: `font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/jagalantas-ai/src/components/ui/Card.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardContent({ className = '', children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-5 ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/jagalantas-ai/src/components/ui/Card.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c3 = CardContent;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/jagalantas-ai/src/components/StatCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/src/components/ui/Card.tsx [app-client] (ecmascript)");
;
;
function StatCard({ icon, label, value, sub, colorClass = 'text-primary-500', glow = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: `flex-1 min-w-[140px] transition-all duration-300 hover:shadow-lg dark:hover:shadow-slate-800/50 ${glow ? 'shadow-md dark:shadow-slate-800' : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-2xl mb-2",
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/components/StatCard.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-mono text-[10px] text-slate-500 dark:text-slate-400 tracking-[0.1em] uppercase mb-1 font-medium",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/components/StatCard.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `font-outfit text-3xl font-bold leading-none tracking-tight ${colorClass}`,
                    children: value
                }, void 0, false, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/components/StatCard.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium",
                    children: sub
                }, void 0, false, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/components/StatCard.tsx",
                    lineNumber: 10,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/jagalantas-ai/src/components/StatCard.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/jagalantas-ai/src/components/StatCard.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = StatCard;
var _c;
__turbopack_context__.k.register(_c, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/jagalantas-ai/src/components/ui/Badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Badge({ variant = 'default', className = '', children, ...props }) {
    const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full font-mono text-[10px] font-semibold transition-colors';
    const variants = {
        default: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100',
        primary: 'bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400',
        success: 'bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-400',
        warning: 'bg-warning-50 text-warning-600 dark:bg-warning-500/10 dark:text-warning-400',
        danger: 'bg-danger-50 text-danger-600 dark:bg-danger-500/10 dark:text-danger-400',
        outline: 'border border-slate-200 text-slate-800 dark:border-slate-800 dark:text-slate-100'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${baseStyles} ${variants[variant]} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/jagalantas-ai/src/components/ui/Badge.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/src/data/jakartaData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/src/components/StatCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/src/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/src/components/ui/Badge.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
const weekly = [
    {
        hari: 'Sen',
        parkir: 420,
        busway: 180,
        sepeda: 80
    },
    {
        hari: 'Sel',
        parkir: 380,
        busway: 210,
        sepeda: 65
    },
    {
        hari: 'Rab',
        parkir: 510,
        busway: 195,
        sepeda: 90
    },
    {
        hari: 'Kam',
        parkir: 460,
        busway: 220,
        sepeda: 75
    },
    {
        hari: 'Jum',
        parkir: 590,
        busway: 260,
        sepeda: 110
    },
    {
        hari: 'Sab',
        parkir: 320,
        busway: 140,
        sepeda: 55
    },
    {
        hari: 'Min',
        parkir: 210,
        busway: 95,
        sepeda: 40
    }
];
const zoneData = [
    {
        zone: 'Pusat',
        violations: 1570
    },
    {
        zone: 'Selatan',
        violations: 1146
    },
    {
        zone: 'Timur',
        violations: 1010
    },
    {
        zone: 'Utara',
        violations: 812
    },
    {
        zone: 'Barat',
        violations: 735
    }
];
const COLORS = [
    'var(--color-danger-500)',
    'var(--color-warning-500)',
    'var(--color-primary-500)',
    'var(--color-success-500)',
    '#A78BFA'
];
const participation = [
    {
        bulan: 'Jan',
        laporan: 18
    },
    {
        bulan: 'Feb',
        laporan: 24
    },
    {
        bulan: 'Mar',
        laporan: 31
    },
    {
        bulan: 'Apr',
        laporan: 29
    },
    {
        bulan: 'Mei',
        laporan: 42
    }
];
function DashboardPage() {
    const today = new Date().toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[calc(100vh-64px)] w-full pb-10 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 pt-8 pb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-1.5 h-8 bg-warning-500 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-outfit font-bold text-2xl text-slate-900 dark:text-white tracking-tight",
                                            children: [
                                                "EXECUTIVE ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-warning-600 dark:text-warning-500",
                                                    children: "DASHBOARD"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 dark:text-slate-400 font-mono mt-1",
                                            children: [
                                                "Laporan Harian Otomatis · ",
                                                today
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-warning-50 dark:bg-warning-500/10 border border-warning-200 dark:border-warning-500/30 rounded-xl px-4 py-2 text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-mono text-[9px] text-warning-600 dark:text-warning-500 tracking-[0.1em] font-semibold",
                                    children: "AUTO-GENERATED BY AI"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-outfit text-xl font-bold text-warning-700 dark:text-warning-400 leading-tight mt-0.5",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].totalViolationsToday.toLocaleString()
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] text-slate-600 dark:text-slate-400 font-medium",
                                    children: "total pelanggaran hari ini"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-4 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "🚨",
                            label: "Pelanggaran Hari Ini",
                            value: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].totalViolationsToday.toLocaleString(),
                            sub: "↑ 12% dari kemarin",
                            colorClass: "text-danger-500",
                            glow: true
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "📅",
                            label: "Total Bulan Ini",
                            value: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].totalViolationsMonth.toLocaleString(),
                            sub: "Mei 2025",
                            colorClass: "text-warning-500"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "📱",
                            label: "Laporan Warga",
                            value: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].citizenReportsToday,
                            sub: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].reportsVerified} terverifikasi`,
                            colorClass: "text-success-500"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "📹",
                            label: "CCTV Aktif",
                            value: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].cctvOnline}/${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].cctvTotal}`,
                            sub: "87% uptime",
                            colorClass: "text-primary-500"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "🎯",
                            label: "Akurasi Model",
                            value: "94.2%",
                            sub: "YOLOv11 + LSTM",
                            colorClass: "text-purple-500"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4",
                                        children: "📊 PELANGGARAN PER HARI (7 HARI TERAKHIR)"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                        width: "100%",
                                        height: 220,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                            data: weekly,
                                            margin: {
                                                top: 0,
                                                right: 0,
                                                bottom: 0,
                                                left: -15
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                    strokeDasharray: "3 3",
                                                    stroke: "#CBD5E1",
                                                    className: "dark:stroke-slate-700",
                                                    vertical: false
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                    dataKey: "hari",
                                                    tick: {
                                                        fontSize: 10,
                                                        fontFamily: 'monospace'
                                                    },
                                                    stroke: "#94A3B8",
                                                    tickLine: false,
                                                    axisLine: false
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                    tick: {
                                                        fontSize: 9,
                                                        fontFamily: 'monospace'
                                                    },
                                                    stroke: "#94A3B8",
                                                    tickLine: false,
                                                    axisLine: false
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                    contentStyle: {
                                                        borderRadius: 8,
                                                        fontSize: 11,
                                                        border: 'none',
                                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                                    },
                                                    itemStyle: {
                                                        color: '#1E293B',
                                                        fontWeight: 600
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                                    wrapperStyle: {
                                                        fontSize: 11,
                                                        fontWeight: 500
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                    dataKey: "parkir",
                                                    name: "Parkir Liar",
                                                    fill: "var(--color-danger-500)",
                                                    radius: [
                                                        3,
                                                        3,
                                                        0,
                                                        0
                                                    ]
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                    dataKey: "busway",
                                                    name: "Jalur Busway",
                                                    fill: "var(--color-warning-500)",
                                                    radius: [
                                                        3,
                                                        3,
                                                        0,
                                                        0
                                                    ]
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                    dataKey: "sepeda",
                                                    name: "Jalur Sepeda",
                                                    fill: "var(--color-primary-500)",
                                                    radius: [
                                                        3,
                                                        3,
                                                        0,
                                                        0
                                                    ]
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4",
                                        children: "🥧 DISTRIBUSI TIPE PELANGGARAN"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "55%",
                                                height: 200,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                            data: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["violationTypes"],
                                                            dataKey: "count",
                                                            nameKey: "type",
                                                            cx: "50%",
                                                            cy: "50%",
                                                            outerRadius: 80,
                                                            innerRadius: 45,
                                                            stroke: "none",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["violationTypes"].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                                    fill: COLORS[i]
                                                                }, i, false, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                                    lineNumber: 108,
                                                                    columnNumber: 53
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                            contentStyle: {
                                                                borderRadius: 8,
                                                                fontSize: 11,
                                                                border: 'none',
                                                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                                            },
                                                            itemStyle: {
                                                                color: '#1E293B',
                                                                fontWeight: 600
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["violationTypes"].map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2.5 h-2.5 rounded-full shrink-0 shadow-sm",
                                                                style: {
                                                                    backgroundColor: COLORS[i]
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs font-semibold text-slate-700 dark:text-slate-300",
                                                                        children: v.type
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                                        lineNumber: 121,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-mono text-[10px] font-bold mt-0.5",
                                                                        style: {
                                                                            color: COLORS[i]
                                                                        },
                                                                        children: [
                                                                            v.pct,
                                                                            "% · ",
                                                                            v.count.toLocaleString()
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                                        lineNumber: 122,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4",
                                        children: "🗺️ PELANGGARAN PER ZONA JAKARTA"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                        width: "100%",
                                        height: 200,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                            data: zoneData,
                                            layout: "vertical",
                                            margin: {
                                                top: 0,
                                                right: 20,
                                                bottom: 0,
                                                left: 10
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                    strokeDasharray: "3 3",
                                                    stroke: "#CBD5E1",
                                                    className: "dark:stroke-slate-700",
                                                    horizontal: false
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                    type: "number",
                                                    tick: {
                                                        fontSize: 9,
                                                        fontFamily: 'monospace'
                                                    },
                                                    stroke: "#94A3B8",
                                                    tickLine: false,
                                                    axisLine: false
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                    dataKey: "zone",
                                                    type: "category",
                                                    tick: {
                                                        fontSize: 11,
                                                        fontWeight: 500
                                                    },
                                                    width: 55,
                                                    stroke: "#64748B",
                                                    tickLine: false,
                                                    axisLine: false
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                    contentStyle: {
                                                        borderRadius: 8,
                                                        fontSize: 11,
                                                        border: 'none',
                                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                                    },
                                                    itemStyle: {
                                                        color: '#1E293B',
                                                        fontWeight: 600
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                    dataKey: "violations",
                                                    name: "Pelanggaran",
                                                    fill: "var(--color-primary-500)",
                                                    radius: [
                                                        0,
                                                        4,
                                                        4,
                                                        0
                                                    ],
                                                    children: zoneData.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                            fill: COLORS[i]
                                                        }, i, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 45
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4",
                                        children: "📈 TREN PARTISIPASI LAPORAN WARGA"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                        width: "100%",
                                        height: 200,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                            data: participation,
                                            margin: {
                                                top: 0,
                                                right: 10,
                                                bottom: 0,
                                                left: -15
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                    strokeDasharray: "3 3",
                                                    stroke: "#CBD5E1",
                                                    className: "dark:stroke-slate-700",
                                                    vertical: false
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                    dataKey: "bulan",
                                                    tick: {
                                                        fontSize: 10,
                                                        fontFamily: 'monospace'
                                                    },
                                                    stroke: "#94A3B8",
                                                    tickLine: false,
                                                    axisLine: false
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                    tick: {
                                                        fontSize: 9,
                                                        fontFamily: 'monospace'
                                                    },
                                                    stroke: "#94A3B8",
                                                    tickLine: false,
                                                    axisLine: false
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                    contentStyle: {
                                                        borderRadius: 8,
                                                        fontSize: 11,
                                                        border: 'none',
                                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                                    },
                                                    itemStyle: {
                                                        color: '#1E293B',
                                                        fontWeight: 600
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                    type: "monotone",
                                                    dataKey: "laporan",
                                                    stroke: "var(--color-success-500)",
                                                    strokeWidth: 3,
                                                    dot: {
                                                        fill: 'var(--color-success-500)',
                                                        r: 4,
                                                        strokeWidth: 0
                                                    },
                                                    name: "Laporan/hari"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-mono text-[10px] text-success-600 dark:text-success-400 font-semibold mt-2 bg-success-50 dark:bg-success-500/10 inline-block px-2 py-1 rounded-md",
                                        children: "↑ +133% partisipasi sejak JAGALANTAS CONNECT diluncurkan"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4",
                                children: "🔥 TOP HOTSPOT — REKOMENDASI DEPLOYMENT PETUGAS"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-left text-sm border-collapse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-slate-200 dark:border-slate-800",
                                                children: [
                                                    'Zona',
                                                    'Tipe Pelanggaran',
                                                    'Total Pelanggaran',
                                                    'Risk Score',
                                                    'Forecast 24j',
                                                    'Rekomendasi'
                                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "pb-3 pr-4 font-mono text-[10px] text-slate-500 uppercase tracking-wider font-semibold whitespace-nowrap",
                                                        children: h
                                                    }, h, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-slate-100 dark:divide-slate-800",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hotspots"].sort((a, b)=>b.riskScore - a.riskScore).map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 pr-4 font-medium text-slate-900 dark:text-slate-100 whitespace-nowrap",
                                                            children: h.zone
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 pr-4 text-slate-600 dark:text-slate-300 whitespace-nowrap",
                                                            children: h.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 pr-4 font-mono font-bold text-primary-600 dark:text-primary-400 whitespace-nowrap",
                                                            children: h.violations
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 pr-4 whitespace-nowrap",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-mono text-[11px] font-bold ${h.riskScore >= 85 ? 'text-danger-600 dark:text-danger-500' : h.riskScore >= 70 ? 'text-warning-600 dark:text-warning-500' : 'text-success-600 dark:text-success-500'}`,
                                                                children: h.riskScore
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 pr-4 whitespace-nowrap",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: h.forecast24h === 'TINGGI' ? 'danger' : h.forecast24h === 'SEDANG' ? 'warning' : 'success',
                                                                children: h.forecast24h
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 pr-4 text-xs font-semibold text-success-600 dark:text-success-500 whitespace-nowrap",
                                                            children: h.riskScore >= 85 ? '3 petugas + E-TLE mobile' : h.riskScore >= 70 ? '2 petugas' : '1 petugas / monitoring'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, h.id, true, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Downloads_jagalantas-ai_src_09a5vm_._.js.map