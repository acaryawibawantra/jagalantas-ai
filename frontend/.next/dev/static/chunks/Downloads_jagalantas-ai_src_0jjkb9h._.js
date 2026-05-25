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
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const severityColor = {
    critical: '#EF4444',
    high: '#F97316',
    medium: '#F59E0B',
    low: '#22C55E'
};
const severityLabel = {
    critical: 'KRITIS',
    high: 'TINGGI',
    medium: 'SEDANG',
    low: 'RENDAH'
};
const statusColor = {
    verified: '#22C55E',
    processing: '#F59E0B',
    rejected: '#EF4444'
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
        style: {
            minHeight: '100vh',
            background: '#080D1A',
            fontFamily: "'DM Sans', sans-serif"
        },
        children: [
            newAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'linear-gradient(90deg, #0B6E5F, #1540C8)',
                    padding: '10px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    animation: 'slideDown 0.3s ease'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 16
                        },
                        children: "🔔"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'DM Mono', monospace",
                            fontSize: 12,
                            color: '#fff'
                        },
                        children: [
                            "ALERT OTOMATIS AI: ",
                            newAlert
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            marginLeft: 'auto',
                            fontFamily: "'DM Mono', monospace",
                            fontSize: 10,
                            color: 'rgba(255,255,255,0.6)'
                        },
                        children: "Dikirim ke warga sekitar via JAKI"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '20px 28px 0',
                    maxWidth: 1280,
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: 16
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
                                            background: '#2EC4A0',
                                            borderRadius: 2
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 78,
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
                                                    "JAGALANTAS ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#2EC4A0'
                                                        },
                                                        children: "CONNECT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: 0,
                                                    fontSize: 12,
                                                    color: '#4A5580',
                                                    fontFamily: "'DM Mono', monospace"
                                                },
                                                children: "Bidirectional Citizen-AI Alert System · IndoBERT + BMKG-style Alerts"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: '#0B6E5F22',
                                            border: '1px solid #0B6E5F66',
                                            borderRadius: 8,
                                            padding: '5px 12px',
                                            fontSize: 11,
                                            color: '#2EC4A0',
                                            fontFamily: "'DM Mono', monospace"
                                        },
                                        children: "⬆ Warga → Sistem"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: '#1540C822',
                                            border: '1px solid #1540C866',
                                            borderRadius: 8,
                                            padding: '5px 12px',
                                            fontSize: 11,
                                            color: '#4A7CF8',
                                            fontFamily: "'DM Mono', monospace"
                                        },
                                        children: "⬇ AI → Warga"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 12,
                            marginBottom: 20,
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                icon: "🚨",
                                label: "Insiden Aktif",
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].activeIncidents,
                                sub: "Terdeteksi AI dari CCTV",
                                color: "#EF4444",
                                glow: true
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                icon: "📱",
                                label: "Laporan Hari Ini",
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].citizenReportsToday,
                                sub: "Dari warga via JAKI/CRM/WA",
                                color: "#2EC4A0"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                icon: "✅",
                                label: "Terverifikasi",
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].reportsVerified,
                                sub: `${Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].reportsVerified / __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$data$2f$jakartaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsSummary"].citizenReportsToday * 100)}% confidence rate`,
                                color: "#22C55E"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$src$2f$components$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                icon: "🔔",
                                label: "Alert Terkirim",
                                value: "3.2K",
                                sub: "Warga diberitahu hari ini",
                                color: "#4A7CF8"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 400px',
                    gap: 16,
                    padding: '0 28px 28px',
                    maxWidth: 1280,
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            border: '1px solid #1E2A45',
                            borderRadius: 16,
                            overflow: 'hidden'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#0D1526',
                                    padding: '10px 14px',
                                    borderBottom: '1px solid #1E2A45',
                                    display: 'flex',
                                    gap: 6
                                },
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
                                        style: {
                                            padding: '5px 14px',
                                            borderRadius: 6,
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontFamily: "'DM Mono', monospace",
                                            fontSize: 11,
                                            background: tab === t.id ? '#2EC4A022' : 'transparent',
                                            color: tab === t.id ? '#2EC4A0' : '#4A5580',
                                            borderBottom: tab === t.id ? '2px solid #2EC4A0' : '2px solid transparent'
                                        },
                                        children: t.label
                                    }, t.id, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
                                center: [
                                    -6.2088,
                                    106.8456
                                ],
                                zoom: 12,
                                style: {
                                    height: 460,
                                    width: '100%'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                                        attribution: "© OpenStreetMap",
                                        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
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
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'monospace',
                                                            fontSize: 10
                                                        },
                                                        children: [
                                                            inc.type,
                                                            " · ",
                                                            inc.detectedAt
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: 'sans-serif',
                                                            minWidth: 200
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                style: {
                                                                    color: severityColor[inc.severity]
                                                                },
                                                                children: inc.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 85
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 12
                                                                },
                                                                children: inc.location
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 73
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: '#666'
                                                                },
                                                                children: inc.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 91
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 11
                                                                },
                                                                children: [
                                                                    "Sumber: ",
                                                                    inc.source
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 79
                                                            }, this),
                                                            inc.alertSent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: 'green'
                                                                },
                                                                children: [
                                                                    "✓ Alert terkirim ke ",
                                                                    inc.recipients,
                                                                    " warga"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 39
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, inc.id, true, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
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
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'monospace',
                                                            fontSize: 10
                                                        },
                                                        children: [
                                                            rep.type,
                                                            " · ",
                                                            statusLabel[rep.status]
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: 'sans-serif',
                                                            minWidth: 200
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: rep.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 21
                                                            }, this),
                                                            " — ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: statusColor[rep.status]
                                                                },
                                                                children: statusLabel[rep.status]
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 122
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 12
                                                                },
                                                                children: rep.location
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 73
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: '#666'
                                                                },
                                                                children: rep.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 91
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 11
                                                                },
                                                                children: [
                                                                    "Confidence: ",
                                                                    rep.confidence,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 88
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: '#666'
                                                                },
                                                                children: [
                                                                    "Channel: ",
                                                                    rep.channel,
                                                                    " · ",
                                                                    rep.reportedAt
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, rep.id, true, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#0D1526',
                                    padding: '8px 14px',
                                    display: 'flex',
                                    gap: 14,
                                    borderTop: '1px solid #1E2A45',
                                    flexWrap: 'wrap'
                                },
                                children: tab === 'incidents' ? Object.entries(severityColor).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendDot, {
                                        color: v,
                                        label: severityLabel[k]
                                    }, k, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 191,
                                        columnNumber: 63
                                    }, this)) : Object.entries(statusColor).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendDot, {
                                        color: v,
                                        label: statusLabel[k]
                                    }, k, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 192,
                                        columnNumber: 61
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#0D1526',
                                    border: '1px solid #1E2A45',
                                    borderRadius: 16,
                                    padding: 16
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'DM Mono', monospace",
                                            fontSize: 10,
                                            color: '#4A5580',
                                            letterSpacing: '0.1em',
                                            marginBottom: 12
                                        },
                                        children: "⬇ ALERT FEED — AI DETEKSI INSIDEN"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 8,
                                            maxHeight: 240,
                                            overflowY: 'auto'
                                        },
                                        children: incidents.map((inc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '10px 12px',
                                                    background: '#080D1A',
                                                    borderRadius: 8,
                                                    borderLeft: `3px solid ${severityColor[inc.severity]}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'flex-start'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 600,
                                                                    color: '#E8EDF8'
                                                                },
                                                                children: inc.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: "'DM Mono', monospace",
                                                                    fontSize: 9,
                                                                    padding: '2px 7px',
                                                                    borderRadius: 99,
                                                                    background: `${severityColor[inc.severity]}22`,
                                                                    color: severityColor[inc.severity]
                                                                },
                                                                children: severityLabel[inc.severity]
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: '#6B7A9E',
                                                            marginTop: 3
                                                        },
                                                        children: inc.location
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: '#4A5580',
                                                            marginTop: 2
                                                        },
                                                        children: inc.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            marginTop: 5
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: "'DM Mono', monospace",
                                                                    fontSize: 9,
                                                                    color: '#4A5580'
                                                                },
                                                                children: [
                                                                    inc.source,
                                                                    " · ",
                                                                    inc.detectedAt,
                                                                    " WIB"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 21
                                                            }, this),
                                                            inc.alertSent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: "'DM Mono', monospace",
                                                                    fontSize: 9,
                                                                    color: '#2EC4A0'
                                                                },
                                                                children: [
                                                                    "🔔 ",
                                                                    inc.recipients,
                                                                    " warga"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, inc.id, true, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#0D1526',
                                    border: '1px solid #1E2A45',
                                    borderRadius: 16,
                                    padding: 16
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'DM Mono', monospace",
                                            fontSize: 10,
                                            color: '#4A5580',
                                            letterSpacing: '0.1em',
                                            marginBottom: 12
                                        },
                                        children: "⬆ LAPORAN WARGA — SIMULASI JAKI"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: 16,
                                            background: '#0B6E5F22',
                                            border: '1px solid #0B6E5F55',
                                            borderRadius: 10,
                                            textAlign: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 24,
                                                    marginBottom: 6
                                                },
                                                children: "✅"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 13,
                                                    color: '#2EC4A0',
                                                    fontWeight: 600
                                                },
                                                children: "Laporan Diterima!"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 11,
                                                    color: '#4A5580',
                                                    marginTop: 4
                                                },
                                                children: "Validasi CCTV sedang berjalan..."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: form.jenis,
                                                onChange: (e)=>setForm((f)=>({
                                                            ...f,
                                                            jenis: e.target.value
                                                        })),
                                                style: inputStyle,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Jenis pelanggaran/insiden *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Parkir Liar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Kendaraan di Jalur Busway"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Kendaraan di Jalur Sepeda"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Kecelakaan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Kemacetan Parah"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Lainnya"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                lineNumber: 250,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                placeholder: "Lokasi kejadian *",
                                                value: form.lokasi,
                                                onChange: (e)=>setForm((f)=>({
                                                            ...f,
                                                            lokasi: e.target.value
                                                        })),
                                                style: inputStyle
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                placeholder: "Deskripsi (opsional)",
                                                value: form.deskripsi,
                                                onChange: (e)=>setForm((f)=>({
                                                            ...f,
                                                            deskripsi: e.target.value
                                                        })),
                                                style: {
                                                    ...inputStyle,
                                                    height: 70,
                                                    resize: 'none'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 6
                                                },
                                                children: [
                                                    'JAKI',
                                                    'WhatsApp',
                                                    'CRM'
                                                ].map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setForm((f)=>({
                                                                    ...f,
                                                                    channel: ch
                                                                })),
                                                        style: {
                                                            flex: 1,
                                                            padding: '6px 0',
                                                            borderRadius: 6,
                                                            border: '1px solid',
                                                            borderColor: form.channel === ch ? '#2EC4A0' : '#1E2A45',
                                                            background: form.channel === ch ? '#0B6E5F22' : 'transparent',
                                                            color: form.channel === ch ? '#2EC4A0' : '#4A5580',
                                                            cursor: 'pointer',
                                                            fontFamily: "'DM Mono', monospace",
                                                            fontSize: 10
                                                        },
                                                        children: ch
                                                    }, ch, false, {
                                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                lineNumber: 275,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSubmit,
                                                style: {
                                                    padding: '10px',
                                                    borderRadius: 8,
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    background: form.jenis && form.lokasi ? 'linear-gradient(90deg, #0B6E5F, #1540C8)' : '#1E2A45',
                                                    color: form.jenis && form.lokasi ? '#fff' : '#4A5580',
                                                    fontFamily: "'Syne', sans-serif",
                                                    fontWeight: 700,
                                                    fontSize: 13,
                                                    transition: 'all 0.2s'
                                                },
                                                children: "Kirim Laporan"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#0D1526',
                                    border: '1px solid #1E2A45',
                                    borderRadius: 16,
                                    padding: 16
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'DM Mono', monospace",
                                            fontSize: 10,
                                            color: '#4A5580',
                                            letterSpacing: '0.1em',
                                            marginBottom: 10
                                        },
                                        children: "📋 LAPORAN TERBARU"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    reports.slice(0, 3).map((rep)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: 8,
                                                padding: '8px 10px',
                                                background: '#080D1A',
                                                borderRadius: 8,
                                                borderLeft: `3px solid ${statusColor[rep.status]}`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        justifyContent: 'space-between'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 11,
                                                                fontWeight: 600,
                                                                color: '#E8EDF8'
                                                            },
                                                            children: rep.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: "'DM Mono', monospace",
                                                                fontSize: 9,
                                                                color: statusColor[rep.status]
                                                            },
                                                            children: statusLabel[rep.status]
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 10,
                                                        color: '#4A5580',
                                                        marginTop: 2
                                                    },
                                                    children: [
                                                        rep.location,
                                                        " · ",
                                                        rep.channel,
                                                        " · ",
                                                        rep.reportedAt
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 10,
                                                        color: '#6B7A9E',
                                                        marginTop: 2
                                                    },
                                                    children: rep.action
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, rep.id, true, {
                                            fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes slideDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }`
            }, void 0, false, {
                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(ConnectPage, "UdcSb7glospQQmZzGBHeY3LPqXg=");
_c = ConnectPage;
const inputStyle = {
    width: '100%',
    padding: '9px 12px',
    borderRadius: 8,
    border: '1px solid #1E2A45',
    background: '#080D1A',
    color: '#C8D0E8',
    fontSize: 12,
    fontFamily: "'DM Sans', sans-serif",
    outline: 'none'
};
function LegendDot({ color, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: 5
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: color
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jagalantas$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 9,
                    color: '#4A5580'
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/jagalantas-ai/src/views/Connect.tsx",
        lineNumber: 334,
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

//# sourceMappingURL=Downloads_jagalantas-ai_src_0jjkb9h._.js.map