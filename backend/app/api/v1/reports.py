"""Endpoint: Laporan warga (JAKI, WhatsApp, CRM)"""
import random
import string
from datetime import datetime
from fastapi import APIRouter, Query
from typing import List, Optional
from app.data.loader import load_dummy
from app.models.schemas import CitizenReport, CreateReportRequest

router = APIRouter()


@router.get("/reports", response_model=List[CitizenReport], summary="Daftar laporan warga")
def get_reports(
    status: Optional[str] = Query(None, description="Filter: verified / processing / rejected"),
    channel: Optional[str] = Query(None, description="Filter: JAKI / WhatsApp / CRM"),
):
    """Return daftar laporan yang masuk dari warga via berbagai channel."""
    data = load_dummy()["citizen_reports"]
    if status:
        data = [r for r in data if r["status"] == status]
    if channel:
        data = [r for r in data if r["channel"] == channel]
    return data


@router.post("/reports", response_model=CitizenReport, status_code=201, summary="Kirim laporan warga baru")
def create_report(body: CreateReportRequest):
    """
    Terima laporan pelanggaran baru dari warga.
    Nantinya akan divalidasi otomatis oleh AI (cross-check CCTV terdekat).
    """
    code = "WRG-" + "".join(random.choices(string.digits, k=4))
    now = datetime.now().strftime("%H:%M")

    return CitizenReport(
        id=f"r{random.randint(100, 999)}",
        lat=-6.2 + (random.random() - 0.5) * 0.15,
        lng=106.83 + (random.random() - 0.5) * 0.15,
        status="processing",
        confidence=random.randint(50, 90),
        location=body.location,
        type=body.type,
        channel=body.channel,
        reported_at=now,
        reporter_code=code,
        description=body.description or "(tidak ada deskripsi)",
        action="Laporan diterima, validasi CCTV sedang berjalan...",
    )
