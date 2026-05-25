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
"[project]/Downloads/jagalantas-ai/src/views/Connect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConnectPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$CircleMarker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/react-leaflet/lib/CircleMarker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/react-leaflet/lib/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/src/data/jakartaData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/src/components/StatCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/src/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/src/components/ui/Badge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const severityColor = {
    critical: 'var(--color-danger-500)',
    high: 'var(--color-warning-500)',
    medium: 'var(--color-warning-500)',
    low: 'var(--color-success-500)'
};
const severityLabel = {
    critical: 'KRITIS',
    high: 'TINGGI',
    medium: 'SEDANG',
    low: 'RENDAH'
};
const statusColor = {
    verified: 'var(--color-success-500)',
    processing: 'var(--color-warning-500)',
    rejected: 'var(--color-danger-500)'
};
const statusLabel = {
    verified: '✓ Terverifikasi',
    processing: '⟳ Diproses',
    rejected: '✗ Ditolak'
};
function ConnectPage() {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('incidents');
    const [incidents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liveIncidents"]);
    const [reports, setReports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["citizenReports"]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        jenis: '',
        lokasi: '',
        deskripsi: '',
        channel: 'JAKI'
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newAlert, setNewAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Simulate incoming alert every 15s
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectPage.useEffect": ()=>{
            const timer = setInterval({
                "ConnectPage.useEffect.timer": ()=>{
                    const alerts = [
                        'Perlambatan arus terdeteksi di Jl. Pramuka arah Matraman',
                        'Kendaraan parkir liar terdeteksi di depan Stasiun Kota',
                        'Kemacetan terpantau di Jl. MT Haryono arah Cawang'
                    ];
                    setNewAlert(alerts[Math.floor(Math.random() * alerts.length)]);
                    setTimeout({
                        "ConnectPage.useEffect.timer": ()=>setNewAlert(null)
                    }["ConnectPage.useEffect.timer"], 4000);
                }
            }["ConnectPage.useEffect.timer"], 15000);
            return ({
                "ConnectPage.useEffect": ()=>clearInterval(timer)
            })["ConnectPage.useEffect"];
        }
    }["ConnectPage.useEffect"], []);
    const handleSubmit = ()=>{
        if (!form.jenis || !form.lokasi) return;
        const newReport = {
            id: `r0${reports.length + 1}`,
            lat: -6.2 + (Math.random() - 0.5) * 0.15,
            lng: 106.83 + (Math.random() - 0.5) * 0.15,
            status: 'processing',
            confidence: Math.floor(Math.random() * 40 + 50),
            location: form.lokasi,
            type: form.jenis,
            channel: form.channel,
            reportedAt: new Date().toLocaleTimeString('id-ID', {
                hour: '2-digit',
                minute: '2-digit'
            }),
            reporterCode: `WRG-${Math.floor(Math.random() * 9000 + 1000)}`,
            description: form.deskripsi || '(tidak ada deskripsi)',
            action: 'Laporan diterima, validasi CCTV sedang berjalan...'
        };
        setReports((prev)=>[
                newReport,
                ...prev
            ]);
        setSubmitted(true);
        setForm({
            jenis: '',
            lokasi: '',
            deskripsi: '',
            channel: 'JAKI'
        });
        setTimeout(()=>setSubmitted(false), 4000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[calc(100vh-64px)] w-full pb-10 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300",
        children: [
            newAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-success-600 to-primary-600 px-6 py-2.5 flex items-center gap-3 animate-[slideDown_0.3s_ease]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg",
                        children: "🔔"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-xs text-white font-semibold",
                        children: [
                            "ALERT OTOMATIS AI: ",
                            newAlert
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-auto font-mono text-[10px] text-white/70",
                        children: "Dikirim ke warga sekitar via JAKI"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 pt-8 pb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-8 bg-success-500 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "font-outfit font-bold text-2xl text-slate-900 dark:text-white tracking-tight",
                                                children: [
                                                    "JAGALANTAS ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-success-600 dark:text-success-500",
                                                        children: "CONNECT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 dark:text-slate-400 font-mono mt-1",
                                                children: "Bidirectional Citizen-AI Alert System · IndoBERT + BMKG-style Alerts"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "success",
                                        className: "px-3 py-1.5",
                                        children: "⬆ Warga → Sistem"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "primary",
                                        className: "px-3 py-1.5",
                                        children: "⬇ AI → Warga"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                icon: "🚨",
                                label: "Insiden Aktif",
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].activeIncidents,
                                sub: "Terdeteksi AI dari CCTV",
                                colorClass: "text-danger-500",
                                glow: true
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                icon: "📱",
                                label: "Laporan Hari Ini",
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].citizenReportsToday,
                                sub: "Dari warga via JAKI/CRM/WA",
                                colorClass: "text-success-500"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                icon: "✅",
                                label: "Terverifikasi",
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].reportsVerified,
                                sub: `${Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].reportsVerified / __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].citizenReportsToday * 100)}% confidence rate`,
                                colorClass: "text-success-600"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                icon: "🔔",
                                label: "Alert Terkirim",
                                value: "3.2K",
                                sub: "Warga diberitahu hari ini",
                                colorClass: "text-primary-500"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "flex flex-col min-h-[500px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-50 dark:bg-slate-900/50 px-4 py-3 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800",
                                        children: [
                                            {
                                                id: 'incidents',
                                                label: '🚨 Insiden Aktif'
                                            },
                                            {
                                                id: 'reports',
                                                label: '📍 Laporan Warga'
                                            }
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setTab(t.id),
                                                className: `px-4 py-1.5 rounded-md font-mono text-[11px] font-semibold transition-all ${tab === t.id ? 'bg-success-100 dark:bg-success-500/20 text-success-700 dark:text-success-400' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`,
                                                children: t.label
                                            }, t.id, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 relative z-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
                                            center: [
                                                -6.2088,
                                                106.8456
                                            ],
                                            zoom: 12,
                                            className: "h-full w-full min-h-[460px] light-map",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                                                    attribution: "© OpenStreetMap",
                                                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 17
                                                }, this),
                                                tab === 'incidents' && incidents.map((inc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$CircleMarker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleMarker"], {
                                                        center: [
                                                            inc.lat,
                                                            inc.lng
                                                        ],
                                                        radius: inc.severity === 'critical' ? 16 : inc.severity === 'high' ? 12 : 9,
                                                        pathOptions: {
                                                            color: severityColor[inc.severity],
                                                            fillColor: severityColor[inc.severity],
                                                            fillOpacity: 0.4,
                                                            weight: 2
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                direction: "top",
                                                                permanent: inc.severity === 'critical',
                                                                className: "!bg-white dark:!bg-slate-800 !text-slate-900 dark:!text-white !border-slate-200 dark:!border-slate-700 !font-mono !text-[10px] !shadow-md",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        inc.type,
                                                                        " · ",
                                                                        inc.detectedAt
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-[200px]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            style: {
                                                                                color: severityColor[inc.severity]
                                                                            },
                                                                            className: "text-sm",
                                                                            children: inc.type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 147,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 147,
                                                                            columnNumber: 109
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-semibold",
                                                                            children: inc.location
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 148,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 148,
                                                                            columnNumber: 86
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[11px] text-slate-500 block mt-1",
                                                                            children: inc.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 149,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[11px] text-slate-500 block mt-1",
                                                                            children: [
                                                                                "Sumber: ",
                                                                                inc.source
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 150,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        inc.alertSent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[11px] text-success-600 font-semibold block mt-1",
                                                                            children: [
                                                                                "✓ Alert terkirim ke ",
                                                                                inc.recipients,
                                                                                " warga"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 151,
                                                                            columnNumber: 43
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 146,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, inc.id, true, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, this)),
                                                tab === 'reports' && reports.map((rep)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$CircleMarker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleMarker"], {
                                                        center: [
                                                            rep.lat,
                                                            rep.lng
                                                        ],
                                                        radius: 9,
                                                        pathOptions: {
                                                            color: statusColor[rep.status],
                                                            fillColor: statusColor[rep.status],
                                                            fillOpacity: 0.5,
                                                            weight: 2
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                direction: "top",
                                                                className: "!bg-white dark:!bg-slate-800 !text-slate-900 dark:!text-white !border-slate-200 dark:!border-slate-700 !font-mono !text-[10px] !shadow-md",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        rep.type,
                                                                        " · ",
                                                                        statusLabel[rep.status]
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 169,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-[200px]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                            className: "text-sm",
                                                                            children: rep.type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 173,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        " — ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: statusColor[rep.status]
                                                                            },
                                                                            className: "text-xs font-semibold",
                                                                            children: statusLabel[rep.status]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 173,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 173,
                                                                            columnNumber: 180
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-semibold mt-1 block",
                                                                            children: rep.location
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 174,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[11px] text-slate-500 block mt-1",
                                                                            children: rep.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 175,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[11px] text-slate-500 block mt-1",
                                                                            children: [
                                                                                "Confidence: ",
                                                                                rep.confidence,
                                                                                "%"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 176,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[11px] text-slate-500 block",
                                                                            children: [
                                                                                "Channel: ",
                                                                                rep.channel,
                                                                                " · ",
                                                                                rep.reportedAt
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 177,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, rep.id, true, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-50 dark:bg-slate-900/50 px-4 py-3 flex flex-wrap gap-4 border-t border-slate-200 dark:border-slate-800",
                                        children: tab === 'incidents' ? Object.entries(severityColor).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendDot, {
                                                color: v,
                                                label: severityLabel[k]
                                            }, k, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                lineNumber: 187,
                                                columnNumber: 65
                                            }, this)) : Object.entries(statusColor).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendDot, {
                                                color: v,
                                                label: statusLabel[k]
                                            }, k, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                lineNumber: 188,
                                                columnNumber: 63
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4",
                                                    children: "⬇ ALERT FEED — AI DETEKSI INSIDEN"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-3 max-h-[240px] overflow-y-auto pr-2",
                                                    children: incidents.map((inc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border-l-4 border-slate-200 dark:border-slate-700",
                                                            style: {
                                                                borderLeftColor: severityColor[inc.severity]
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-start",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-bold text-slate-900 dark:text-slate-100",
                                                                            children: inc.type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 206,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-mono text-[9px] px-2 py-0.5 rounded-full font-bold",
                                                                            style: {
                                                                                backgroundColor: `${severityColor[inc.severity]}22`,
                                                                                color: severityColor[inc.severity]
                                                                            },
                                                                            children: severityLabel[inc.severity]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 207,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 205,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[11px] font-medium text-slate-600 dark:text-slate-300 mt-1",
                                                                    children: inc.location
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[11px] text-slate-500 mt-1",
                                                                    children: inc.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 212,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between mt-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-mono text-[9px] text-slate-500 font-medium",
                                                                            children: [
                                                                                inc.source,
                                                                                " · ",
                                                                                inc.detectedAt,
                                                                                " WIB"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 214,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        inc.alertSent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-mono text-[9px] text-success-600 dark:text-success-500 font-bold",
                                                                            children: [
                                                                                "🔔 ",
                                                                                inc.recipients,
                                                                                " warga"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 218,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, inc.id, true, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4",
                                                    children: "⬆ LAPORAN WARGA — SIMULASI JAKI"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this),
                                                submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-success-50 dark:bg-success-500/10 border border-success-200 dark:border-success-500/30 p-5 rounded-xl text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-3xl mb-2",
                                                            children: "✅"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-success-700 dark:text-success-400 font-bold",
                                                            children: "Laporan Diterima!"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] text-success-600 dark:text-success-500/80 mt-1",
                                                            children: "Validasi CCTV sedang berjalan..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: form.jenis,
                                                            onChange: (e)=>setForm((f)=>({
                                                                        ...f,
                                                                        jenis: e.target.value
                                                                    })),
                                                            className: "w-full px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs outline-none focus:border-primary-500 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Jenis pelanggaran/insiden *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 249,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Parkir Liar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Kendaraan di Jalur Busway"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Kendaraan di Jalur Sepeda"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 252,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Kecelakaan"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 253,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Kemacetan Parah"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Lainnya"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 255,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            placeholder: "Lokasi kejadian *",
                                                            value: form.lokasi,
                                                            onChange: (e)=>setForm((f)=>({
                                                                        ...f,
                                                                        lokasi: e.target.value
                                                                    })),
                                                            className: "w-full px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs outline-none focus:border-primary-500 transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            placeholder: "Deskripsi (opsional)",
                                                            value: form.deskripsi,
                                                            onChange: (e)=>setForm((f)=>({
                                                                        ...f,
                                                                        deskripsi: e.target.value
                                                                    })),
                                                            className: "w-full px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs outline-none focus:border-primary-500 transition-colors h-[70px] resize-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                'JAKI',
                                                                'WhatsApp',
                                                                'CRM'
                                                            ].map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setForm((f)=>({
                                                                                ...f,
                                                                                channel: ch
                                                                            })),
                                                                    className: `flex-1 py-1.5 rounded-md border font-mono text-[10px] font-bold transition-colors ${form.channel === ch ? 'border-success-500 bg-success-50 dark:bg-success-500/10 text-success-600 dark:text-success-400' : 'border-slate-200 dark:border-slate-700 bg-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`,
                                                                    children: ch
                                                                }, ch, false, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleSubmit,
                                                            disabled: !form.jenis || !form.lokasi,
                                                            className: `mt-2 py-3 rounded-lg font-outfit font-bold text-sm transition-all ${form.jenis && form.lokasi ? 'bg-gradient-to-r from-success-600 to-primary-600 text-white shadow-md hover:shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'}`,
                                                            children: "Kirim Laporan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4",
                                                    children: "📋 LAPORAN TERBARU"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-3",
                                                    children: reports.slice(0, 3).map((rep)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border-l-4 border-slate-200 dark:border-slate-700",
                                                            style: {
                                                                borderLeftColor: statusColor[rep.status]
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-start",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[11px] font-bold text-slate-900 dark:text-slate-100",
                                                                            children: rep.type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-mono text-[9px] font-bold",
                                                                            style: {
                                                                                color: statusColor[rep.status]
                                                                            },
                                                                            children: statusLabel[rep.status]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                            lineNumber: 303,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 301,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-500 mt-1",
                                                                    children: [
                                                                        rep.location,
                                                                        " · ",
                                                                        rep.channel,
                                                                        " · ",
                                                                        rep.reportedAt
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 307,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-500 mt-0.5",
                                                                    children: rep.action
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                    lineNumber: 308,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, rep.id, true, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes slideDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }`
            }, void 0, false, {
                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(ConnectPage, "UdcSb7glospQQmZzGBHeY3LPqXg=");
_c = ConnectPage;
function LegendDot({ color, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-2 h-2 rounded-full shadow-sm",
                style: {
                    backgroundColor: color
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-mono text-[10px] font-medium text-slate-600 dark:text-slate-400",
                children: label
            }, void 0, false, {
                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
        lineNumber: 325,
        columnNumber: 5
    }, this);
}
_c1 = LegendDot;
var _c, _c1;
__turbopack_context__.k.register(_c, "ConnectPage");
__turbopack_context__.k.register(_c1, "LegendDot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/jagalantas-ai/src/views/Connect.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/jagalantas-ai/src/views/Connect.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Downloads_jagalantas-ai_src_0tsszl-._.js.map