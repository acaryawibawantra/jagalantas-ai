"""
JAGALANTAS AI — FastAPI Backend
Entrypoint aplikasi
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.api.v1 import violations, hotspots, cameras, incidents, reports, forecast

app = FastAPI(
    title="JAGALANTAS AI — Backend API",
    description="Backend service untuk sistem Jagalantas AI — Mitigasi & Pengawasan Lalu Lintas DKI Jakarta",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# ── CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL, "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Register Routes
app.include_router(violations.router, prefix="/api/v1", tags=["Violations"])
app.include_router(hotspots.router,   prefix="/api/v1", tags=["Hotspots"])
app.include_router(cameras.router,    prefix="/api/v1", tags=["Cameras"])
app.include_router(incidents.router,  prefix="/api/v1", tags=["Incidents"])
app.include_router(reports.router,    prefix="/api/v1", tags=["Reports"])
app.include_router(forecast.router,   prefix="/api/v1", tags=["Forecast"])


@app.get("/", tags=["Health"])
def root():
    return {"service": "JAGALANTAS AI Backend", "version": "0.1.0", "status": "running", "docs": "/docs"}


@app.get("/health", tags=["Health"])
def health_check():
    return {"status": "healthy"}
