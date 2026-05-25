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
"[project]/Downloads/jagalantas-ai/src/components/StatCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jagalantas-ai/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function StatCard({ icon, label, value, sub, color = 'blue', glow = false }) {
    // Map standard colors to tailwind classes if needed, or use custom inline for the text color if dynamic.
    // For safety, we will just use the passed color directly in style for the value, but tailwind for the rest.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex-1 min-w-[140px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg dark:hover:shadow-slate-800/50 ${glow ? 'shadow-md dark:shadow-slate-800' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl mb-2",
                children: icon
            }, void 0, false, {
                fileName: "[project]/Downloads/jagalantas-ai/src/components/StatCard.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-mono text-[10px] text-slate-500 dark:text-slate-400 tracking-[0.1em] uppercase mb-1 font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/Downloads/jagalantas-ai/src/components/StatCard.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-outfit text-3xl font-bold leading-none tracking-tight",
                style: {
                    color
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/Downloads/jagalantas-ai/src/components/StatCard.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium",
                children: sub
            }, void 0, false, {
                fileName: "[project]/Downloads/jagalantas-ai/src/components/StatCard.tsx",
                lineNumber: 9,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
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
    '#EF4444',
    '#F59E0B',
    '#4A7CF8',
    '#2EC4A0',
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
        style: {
            minHeight: '100vh',
            background: '#080D1A',
            fontFamily: "'DM Sans', sans-serif"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1280,
                margin: '0 auto',
                padding: '20px 28px 40px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        marginBottom: 20
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 4,
                                        height: 28,
                                        background: '#F0A940',
                                        borderRadius: 2
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            style: {
                                                fontFamily: "'Syne', sans-serif",
                                                fontWeight: 800,
                                                fontSize: 22,
                                                color: '#E8EDF8',
                                                margin: 0
                                            },
                                            children: [
                                                "EXECUTIVE ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#F0A940'
                                                    },
                                                    children: "DASHBOARD"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: 0,
                                                fontSize: 12,
                                                color: '#4A5580',
                                                fontFamily: "'DM Mono', monospace"
                                            },
                                            children: [
                                                "Laporan Harian Otomatis · ",
                                                today
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#F0A94018',
                                border: '1px solid #F0A94044',
                                borderRadius: 10,
                                padding: '10px 16px',
                                textAlign: 'right'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "'DM Mono', monospace",
                                        fontSize: 9,
                                        color: '#F0A940',
                                        letterSpacing: '0.1em'
                                    },
                                    children: "AUTO-GENERATED BY AI"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "'Syne', sans-serif",
                                        fontSize: 18,
                                        fontWeight: 800,
                                        color: '#F0A940'
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].totalViolationsToday.toLocaleString()
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 10,
                                        color: '#4A5580'
                                    },
                                    children: "total pelanggaran hari ini"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: 12,
                        marginBottom: 24,
                        flexWrap: 'wrap'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "🚨",
                            label: "Pelanggaran Hari Ini",
                            value: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].totalViolationsToday.toLocaleString(),
                            sub: "↑ 12% dari kemarin",
                            color: "#EF4444",
                            glow: true
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "📅",
                            label: "Total Bulan Ini",
                            value: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].totalViolationsMonth.toLocaleString(),
                            sub: "Mei 2025",
                            color: "#F59E0B"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "📱",
                            label: "Laporan Warga",
                            value: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].citizenReportsToday,
                            sub: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].reportsVerified} terverifikasi`,
                            color: "#2EC4A0"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "📹",
                            label: "CCTV Aktif",
                            value: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].cctvOnline}/${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].cctvTotal}`,
                            sub: "87% uptime",
                            color: "#4A7CF8"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "🎯",
                            label: "Akurasi Model",
                            value: "94.2%",
                            sub: "YOLOv11 + LSTM",
                            color: "#A78BFA"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 16,
                        marginBottom: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#0D1526',
                                border: '1px solid #1E2A45',
                                borderRadius: 16,
                                padding: 20
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "'DM Mono', monospace",
                                        fontSize: 10,
                                        color: '#4A5580',
                                        letterSpacing: '0.1em',
                                        marginBottom: 16
                                    },
                                    children: "📊 PELANGGARAN PER HARI (7 HARI TERAKHIR)"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
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
                                                stroke: "#1E2A45"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "hari",
                                                tick: {
                                                    fill: '#4A5580',
                                                    fontSize: 10
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                tick: {
                                                    fill: '#4A5580',
                                                    fontSize: 9
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                contentStyle: {
                                                    background: '#0D1526',
                                                    border: '1px solid #1E2A45',
                                                    borderRadius: 8,
                                                    fontSize: 11
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                                wrapperStyle: {
                                                    fontSize: 11,
                                                    color: '#6B7A9E'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                dataKey: "parkir",
                                                name: "Parkir Liar",
                                                fill: "#EF4444",
                                                radius: [
                                                    3,
                                                    3,
                                                    0,
                                                    0
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                dataKey: "busway",
                                                name: "Jalur Busway",
                                                fill: "#F59E0B",
                                                radius: [
                                                    3,
                                                    3,
                                                    0,
                                                    0
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                dataKey: "sepeda",
                                                name: "Jalur Sepeda",
                                                fill: "#4A7CF8",
                                                radius: [
                                                    3,
                                                    3,
                                                    0,
                                                    0
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#0D1526',
                                border: '1px solid #1E2A45',
                                borderRadius: 16,
                                padding: 20
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "'DM Mono', monospace",
                                        fontSize: 10,
                                        color: '#4A5580',
                                        letterSpacing: '0.1em',
                                        marginBottom: 16
                                    },
                                    children: "🥧 DISTRIBUSI TIPE PELANGGARAN"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 16
                                    },
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
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["violationTypes"].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                                fill: COLORS[i]
                                                            }, i, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 51
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                        contentStyle: {
                                                            background: '#0D1526',
                                                            border: '1px solid #1E2A45',
                                                            borderRadius: 8,
                                                            fontSize: 11
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1
                                            },
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["violationTypes"].map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 8,
                                                        marginBottom: 10
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: 10,
                                                                height: 10,
                                                                borderRadius: '50%',
                                                                background: COLORS[i],
                                                                flexShrink: 0
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                flex: 1
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: 11,
                                                                        color: '#C8D0E8'
                                                                    },
                                                                    children: v.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                                    lineNumber: 113,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontFamily: "'DM Mono', monospace",
                                                                        fontSize: 10,
                                                                        color: COLORS[i]
                                                                    },
                                                                    children: [
                                                                        v.pct,
                                                                        "% · ",
                                                                        v.count.toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                                    lineNumber: 114,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 16,
                        marginBottom: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#0D1526',
                                border: '1px solid #1E2A45',
                                borderRadius: 16,
                                padding: 20
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "'DM Mono', monospace",
                                        fontSize: 10,
                                        color: '#4A5580',
                                        letterSpacing: '0.1em',
                                        marginBottom: 16
                                    },
                                    children: "🗺️ PELANGGARAN PER ZONA JAKARTA"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
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
                                                stroke: "#1E2A45",
                                                horizontal: false
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                type: "number",
                                                tick: {
                                                    fill: '#4A5580',
                                                    fontSize: 9
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                dataKey: "zone",
                                                type: "category",
                                                tick: {
                                                    fill: '#C8D0E8',
                                                    fontSize: 11
                                                },
                                                width: 55
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                contentStyle: {
                                                    background: '#0D1526',
                                                    border: '1px solid #1E2A45',
                                                    borderRadius: 8,
                                                    fontSize: 11
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                dataKey: "violations",
                                                name: "Pelanggaran",
                                                fill: "#4A7CF8",
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
                                                        lineNumber: 138,
                                                        columnNumber: 43
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#0D1526',
                                border: '1px solid #1E2A45',
                                borderRadius: 16,
                                padding: 20
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "'DM Mono', monospace",
                                        fontSize: 10,
                                        color: '#4A5580',
                                        letterSpacing: '0.1em',
                                        marginBottom: 16
                                    },
                                    children: "📈 TREN PARTISIPASI LAPORAN WARGA"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
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
                                                stroke: "#1E2A45"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "bulan",
                                                tick: {
                                                    fill: '#4A5580',
                                                    fontSize: 10
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                tick: {
                                                    fill: '#4A5580',
                                                    fontSize: 9
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                contentStyle: {
                                                    background: '#0D1526',
                                                    border: '1px solid #1E2A45',
                                                    borderRadius: 8,
                                                    fontSize: 11
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                type: "monotone",
                                                dataKey: "laporan",
                                                stroke: "#2EC4A0",
                                                strokeWidth: 2.5,
                                                dot: {
                                                    fill: '#2EC4A0',
                                                    r: 5
                                                },
                                                name: "Laporan/hari"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "'DM Mono', monospace",
                                        fontSize: 10,
                                        color: '#2EC4A0',
                                        marginTop: 8
                                    },
                                    children: "↑ +133% partisipasi sejak JAGALANTAS CONNECT diluncurkan"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: '#0D1526',
                        border: '1px solid #1E2A45',
                        borderRadius: 16,
                        padding: 20
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "'DM Mono', monospace",
                                fontSize: 10,
                                color: '#4A5580',
                                letterSpacing: '0.1em',
                                marginBottom: 16
                            },
                            children: "🔥 TOP HOTSPOT — REKOMENDASI DEPLOYMENT PETUGAS"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                overflowX: 'auto'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: {
                                    width: '100%',
                                    borderCollapse: 'collapse',
                                    fontSize: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                borderBottom: '1px solid #1E2A45'
                                            },
                                            children: [
                                                'Zona',
                                                'Tipe Pelanggaran',
                                                'Total Pelanggaran',
                                                'Risk Score',
                                                'Forecast 24j',
                                                'Rekomendasi'
                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: '8px 12px',
                                                        textAlign: 'left',
                                                        fontFamily: "'DM Mono', monospace",
                                                        fontSize: 9,
                                                        color: '#4A5580',
                                                        letterSpacing: '0.08em',
                                                        textTransform: 'uppercase'
                                                    },
                                                    children: h
                                                }, h, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hotspots"].sort((a, b)=>b.riskScore - a.riskScore).map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    borderBottom: '0.5px solid #1E2A45',
                                                    background: i % 2 === 0 ? 'transparent' : '#080D1A'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '9px 12px',
                                                            color: '#C8D0E8'
                                                        },
                                                        children: h.zone
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '9px 12px',
                                                            color: '#C8D0E8'
                                                        },
                                                        children: h.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '9px 12px',
                                                            fontFamily: "'DM Mono', monospace",
                                                            color: '#4A7CF8'
                                                        },
                                                        children: h.violations
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '9px 12px'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: "'DM Mono', monospace",
                                                                fontSize: 11,
                                                                fontWeight: 700,
                                                                color: h.riskScore >= 85 ? '#EF4444' : h.riskScore >= 70 ? '#F59E0B' : '#22C55E'
                                                            },
                                                            children: h.riskScore
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '9px 12px'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                padding: '2px 8px',
                                                                borderRadius: 99,
                                                                fontSize: 10,
                                                                fontFamily: "'DM Mono', monospace",
                                                                background: h.forecast24h === 'TINGGI' ? '#EF444422' : h.forecast24h === 'SEDANG' ? '#F59E0B22' : '#22C55E22',
                                                                color: h.forecast24h === 'TINGGI' ? '#EF4444' : h.forecast24h === 'SEDANG' ? '#F59E0B' : '#22C55E'
                                                            },
                                                            children: h.forecast24h
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '9px 12px',
                                                            color: '#2EC4A0',
                                                            fontSize: 11
                                                        },
                                                        children: h.riskScore >= 85 ? '3 petugas + E-TLE mobile' : h.riskScore >= 70 ? '2 petugas' : '1 petugas / monitoring'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, h.id, true, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/jagalantas-ai/src/views/Dashboard.tsx",
        lineNumber: 35,
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

//# sourceMappingURL=Downloads_jagalantas-ai_src_137b53k._.js.map