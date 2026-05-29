"""Endpoint: Statistik & breakdown pelanggaran"""
from fastapi import APIRouter
from typing import List
from app.data.loader import load_dummy
from app.models.schemas import ViolationType, StatsSummary

router = APIRouter()


@router.get("/violations", response_model=List[ViolationType], summary="Breakdown tipe pelanggaran")
def get_violations():
    """Return daftar tipe pelanggaran beserta jumlah dan persentase."""
    return load_dummy()["violations"]


@router.get("/stats", response_model=StatsSummary, summary="Ringkasan statistik dashboard")
def get_stats():
    """Return statistik utama: jumlah pelanggaran, CCTV aktif, insiden, laporan warga."""
    return load_dummy()["stats"]
