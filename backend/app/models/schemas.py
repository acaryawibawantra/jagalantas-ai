"""Pydantic schemas untuk semua data model Jagalantas AI"""
from typing import Optional, Literal
from pydantic import BaseModel


# ── CCTV Camera
class Camera(BaseModel):
    id: str
    name: str
    lat: float
    lng: float
    status: Literal["online", "offline"]
    zone: str


# ── Hotspot
class Hotspot(BaseModel):
    id: str
    lat: float
    lng: float
    risk_score: int
    violations: int
    type: str
    forecast_24h: Literal["TINGGI", "SEDANG", "RENDAH"]
    zone: str


# ── Forecast (24H)
class ForecastPoint(BaseModel):
    jam: str
    prediksi: int
    aktual: Optional[int] = None


# ── Violation Type
class ViolationType(BaseModel):
    type: str
    count: int
    pct: int


# ── Live Incident
class Incident(BaseModel):
    id: str
    lat: float
    lng: float
    type: str
    severity: Literal["critical", "high", "medium", "low"]
    location: str
    detected_at: str
    source: str
    description: str
    alert_sent: bool
    recipients: int


# ── Citizen Report
class CitizenReport(BaseModel):
    id: str
    lat: float
    lng: float
    status: Literal["verified", "processing", "rejected"]
    confidence: int
    location: str
    type: str
    channel: str
    reported_at: str
    reporter_code: str
    description: str
    action: str


# ── Create Report (POST body)
class CreateReportRequest(BaseModel):
    type: str
    location: str
    description: Optional[str] = ""
    channel: Literal["JAKI", "WhatsApp", "CRM"] = "JAKI"


# ── Stats Summary
class StatsSummary(BaseModel):
    total_violations_today: int
    total_violations_month: int
    cctv_online: int
    cctv_total: int
    active_incidents: int
    citizen_reports_today: int
    reports_verified: int
    officers_deployed: int
