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
"[project]/Downloads/jagalantas-ai/src/views/Predict.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PredictPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$CircleMarker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/react-leaflet/lib/CircleMarker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/react-leaflet/lib/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
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
;
;
// Fix leaflet default icon
// @ts-ignore
delete __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.prototype._getIconUrl;
__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png'
});
const riskColor = (score)=>{
    if (score >= 85) return 'var(--color-danger-500)';
    if (score >= 70) return 'var(--color-warning-500)';
    return 'var(--color-success-500)';
};
const riskLabel = (score)=>{
    if (score >= 85) return 'TINGGI';
    if (score >= 70) return 'SEDANG';
    return 'RENDAH';
};
function PredictPage() {
    _s();
    const [, setSelectedHotspot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [, setSelectedCctv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('hotspot');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[calc(100vh-64px)] w-full pb-10 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 pt-8 pb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-8 bg-primary-600 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "font-outfit font-bold text-2xl text-slate-900 dark:text-white tracking-tight",
                                                children: [
                                                    "JAGALANTAS ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-primary-600 dark:text-primary-400",
                                                        children: "PREDICT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 dark:text-slate-400 font-mono mt-1",
                                                children: "Predictive Enforcement Intelligence · YOLOv11 + LSTM"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                lineNumber: 51,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "danger",
                            className: "px-4 py-2 shadow-sm self-start md:self-auto",
                            children: "⚠ 3 HOTSPOT KRITIS AKTIF"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                    lineNumber: 43,
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
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "📹",
                            label: "CCTV Online",
                            value: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].cctvOnline}/${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].cctvTotal}`,
                            sub: "2 kamera offline",
                            colorClass: "text-primary-500"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "🎯",
                            label: "Hotspot Aktif",
                            value: "8",
                            sub: "3 risiko tinggi",
                            colorClass: "text-warning-500"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "👮",
                            label: "Petugas Deploy",
                            value: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].officersDeployed,
                            sub: "AI recommendation",
                            colorClass: "text-success-500"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "🗄️",
                            label: "E-TLE Records",
                            value: "6.1M",
                            sub: "Data historis",
                            colorClass: "text-primary-600"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "flex flex-col min-h-[500px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 dark:bg-slate-900/50 px-4 py-3 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800",
                                    children: [
                                        [
                                            {
                                                id: 'hotspot',
                                                label: '🔥 Hotspot Map'
                                            },
                                            {
                                                id: 'cctv',
                                                label: '📹 CCTV Map'
                                            }
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setTab(t.id),
                                                className: `px-4 py-1.5 rounded-md font-mono text-[11px] font-semibold transition-all ${tab === t.id ? 'bg-primary-100 dark:bg-primary-500/20 text-primary-700 dark:text-primary-400' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`,
                                                children: t.label
                                            }, t.id, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-auto font-mono text-[10px] text-slate-400 font-medium hidden sm:block",
                                            children: "Jakarta, Indonesia"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                    lineNumber: 77,
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
                                        zoomControl: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                                                attribution: "© OpenStreetMap",
                                                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this),
                                            tab === 'hotspot' && __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hotspots"].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$CircleMarker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleMarker"], {
                                                    center: [
                                                        h.lat,
                                                        h.lng
                                                    ],
                                                    radius: h.riskScore / 8,
                                                    pathOptions: {
                                                        color: riskColor(h.riskScore),
                                                        fillColor: riskColor(h.riskScore),
                                                        fillOpacity: 0.4,
                                                        weight: 2
                                                    },
                                                    eventHandlers: {
                                                        click: ()=>setSelectedHotspot(h)
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                            direction: "top",
                                                            permanent: h.riskScore >= 85,
                                                            className: "!bg-white dark:!bg-slate-800 !text-slate-900 dark:!text-white !border-slate-200 dark:!border-slate-700 !font-mono !text-[10px] !shadow-md",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    riskLabel(h.riskScore),
                                                                    " · ",
                                                                    h.riskScore
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                                            className: "custom-popup",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-[180px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        style: {
                                                                            color: riskColor(h.riskScore)
                                                                        },
                                                                        className: "text-sm",
                                                                        children: [
                                                                            "Risk Score: ",
                                                                            h.riskScore
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 119
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-slate-600 font-medium",
                                                                        children: h.type
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                        lineNumber: 131,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                        lineNumber: 131,
                                                                        columnNumber: 93
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] text-slate-500 mt-1 block",
                                                                        children: [
                                                                            "Total: ",
                                                                            h.violations,
                                                                            " pelanggaran"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                        lineNumber: 132,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] text-slate-500",
                                                                        children: [
                                                                            "Forecast 24j: ",
                                                                            h.forecast24h
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, h.id, true, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this)),
                                            tab === 'cctv' && __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cctvCameras"].map((cam)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$CircleMarker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleMarker"], {
                                                    center: [
                                                        cam.lat,
                                                        cam.lng
                                                    ],
                                                    radius: 7,
                                                    pathOptions: {
                                                        color: cam.status === 'online' ? 'var(--color-primary-500)' : 'var(--color-danger-500)',
                                                        fillColor: cam.status === 'online' ? 'var(--color-primary-500)' : 'var(--color-danger-500)',
                                                        fillOpacity: 0.8,
                                                        weight: 2
                                                    },
                                                    eventHandlers: {
                                                        click: ()=>setSelectedCctv(cam)
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                            direction: "top",
                                                            className: "!bg-white dark:!bg-slate-800 !text-slate-900 dark:!text-white !border-slate-200 dark:!border-slate-700 !font-mono !text-[10px] !shadow-md",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "📹 ",
                                                                    cam.name
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-[160px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        className: "text-sm",
                                                                        children: [
                                                                            "📹 ",
                                                                            cam.name
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                        lineNumber: 157,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                        lineNumber: 157,
                                                                        columnNumber: 65
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-semibold mt-1 block",
                                                                        style: {
                                                                            color: cam.status === 'online' ? 'var(--color-success-500)' : 'var(--color-danger-500)'
                                                                        },
                                                                        children: [
                                                                            "● ",
                                                                            cam.status.toUpperCase()
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] text-slate-500 block mt-1",
                                                                        children: [
                                                                            "Zona: ",
                                                                            cam.zone
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                        lineNumber: 161,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, cam.id, true, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 dark:bg-slate-900/50 px-4 py-3 flex flex-wrap gap-4 border-t border-slate-200 dark:border-slate-800",
                                    children: tab === 'hotspot' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendDot, {
                                                color: "var(--color-danger-500)",
                                                label: "Tinggi (≥85)"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendDot, {
                                                color: "var(--color-warning-500)",
                                                label: "Sedang (70-84)"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendDot, {
                                                color: "var(--color-success-500)",
                                                label: "Rendah (<70)"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendDot, {
                                                color: "var(--color-primary-500)",
                                                label: "Online"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendDot, {
                                                color: "var(--color-danger-500)",
                                                label: "Offline"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                            lineNumber: 75,
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
                                                children: "📈 PREDIKSI PELANGGARAN 24 JAM"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "100%",
                                                height: 180,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                                                    data: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forecast24h"],
                                                    margin: {
                                                        top: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        left: -25
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                id: "predGrad",
                                                                x1: "0",
                                                                y1: "0",
                                                                x2: "0",
                                                                y2: "1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "5%",
                                                                        stopColor: "var(--color-primary-500)",
                                                                        stopOpacity: 0.4
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                        lineNumber: 199,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "95%",
                                                                        stopColor: "var(--color-primary-500)",
                                                                        stopOpacity: 0
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                        lineNumber: 200,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                            strokeDasharray: "3 3",
                                                            stroke: "#CBD5E1",
                                                            className: "dark:stroke-slate-700",
                                                            vertical: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                            dataKey: "jam",
                                                            tick: {
                                                                fontSize: 9,
                                                                fontFamily: 'monospace'
                                                            },
                                                            stroke: "#94A3B8",
                                                            tickLine: false,
                                                            axisLine: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 21
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
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                            lineNumber: 205,
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
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                                            type: "monotone",
                                                            dataKey: "prediksi",
                                                            stroke: "var(--color-primary-500)",
                                                            fill: "url(#predGrad)",
                                                            strokeWidth: 3,
                                                            name: "Prediksi",
                                                            dot: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                                            type: "monotone",
                                                            dataKey: "aktual",
                                                            stroke: "var(--color-success-500)",
                                                            fill: "none",
                                                            strokeWidth: 2,
                                                            name: "Aktual",
                                                            strokeDasharray: "4 2",
                                                            dot: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 mt-3 pl-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendDot, {
                                                        color: "var(--color-primary-500)",
                                                        label: "Prediksi AI"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendDot, {
                                                        color: "var(--color-success-500)",
                                                        label: "Aktual"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-4",
                                                children: "🏷️ TIPE PELANGGARAN BULAN INI"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                lineNumber: 224,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-4",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["violationTypes"].map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center mb-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-medium text-slate-700 dark:text-slate-300",
                                                                        children: v.type
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                        lineNumber: 231,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-[11px] font-semibold text-slate-900 dark:text-white",
                                                                        children: v.count.toLocaleString()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                        lineNumber: 232,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-full rounded-full transition-all duration-1000 ease-out",
                                                                    style: {
                                                                        width: `${v.pct}%`,
                                                                        backgroundColor: [
                                                                            'var(--color-danger-500)',
                                                                            'var(--color-warning-500)',
                                                                            'var(--color-primary-500)',
                                                                            'var(--color-success-500)'
                                                                        ][i]
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "border-success-200 dark:border-success-500/20 bg-success-50 dark:bg-success-500/5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-mono text-[10px] font-bold text-success-600 dark:text-success-400 tracking-wider mb-4 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "🤖"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 19
                                                    }, this),
                                                    " AI DEPLOYMENT RECOMMENDATION"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3",
                                                children: [
                                                    {
                                                        loc: 'Jl. Sudirman - Semanggi',
                                                        action: '3 petugas + 1 E-TLE mobile',
                                                        risk: 92
                                                    },
                                                    {
                                                        loc: 'Mangga Dua - Pasar Pagi',
                                                        action: '2 petugas + jukir',
                                                        risk: 91
                                                    },
                                                    {
                                                        loc: 'Jl. Thamrin - BNI',
                                                        action: '2 petugas busway',
                                                        risk: 88
                                                    }
                                                ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start gap-3 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1 h-full min-h-[30px] rounded-full self-stretch",
                                                                style: {
                                                                    backgroundColor: riskColor(r.risk)
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[11px] font-bold text-slate-900 dark:text-white leading-tight",
                                                                        children: r.loc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                        lineNumber: 264,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[11px] font-medium text-success-600 dark:text-success-400 mt-0.5",
                                                                        children: [
                                                                            "→ ",
                                                                            r.action
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                        lineNumber: 265,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "outline",
                                                                style: {
                                                                    borderColor: riskColor(r.risk),
                                                                    color: riskColor(r.risk)
                                                                },
                                                                children: [
                                                                    "R:",
                                                                    r.risk
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(PredictPage, "8jiewahDdXRxjwBBWL8wfoTrEKA=");
_c = PredictPage;
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
                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-mono text-[10px] font-medium text-slate-600 dark:text-slate-400",
                children: label
            }, void 0, false, {
                fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/jagalantas-ai/src/views/Predict.tsx",
        lineNumber: 285,
        columnNumber: 5
    }, this);
}
_c1 = LegendDot;
var _c, _c1;
__turbopack_context__.k.register(_c, "PredictPage");
__turbopack_context__.k.register(_c1, "LegendDot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/jagalantas-ai/src/views/Predict.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/jagalantas-ai/src/views/Predict.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Downloads_jagalantas-ai_src_0x68-v5._.js.map