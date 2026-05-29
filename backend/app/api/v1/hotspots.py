"""Endpoint: Titik kerawanan (Hotspot)"""
from fastapi import APIRouter, Query
from typing import List, Optional
from app.data.loader import load_dummy
from app.models.schemas import Hotspot

router = APIRouter()


@router.get("/hotspots", response_model=List[Hotspot], summary="Daftar titik kerawanan lalu lintas")
def get_hotspots(
    zone: Optional[str] = Query(None, description="Filter by zone: Pusat, Selatan, Timur, Utara, Barat"),
    min_risk: Optional[int] = Query(None, description="Risk score minimum (0-100)"),
):
    """
    Return daftar titik kerawanan lalu lintas beserta risk score dan prediksi 24 jam.
    Nantinya akan diisi oleh model LSTM untuk prediksi berbasis historis.
    """
    data = load_dummy()["hotspots"]
    if zone:
        data = [h for h in data if h["zone"].lower() == zone.lower()]
    if min_risk is not None:
        data = [h for h in data if h["risk_score"] >= min_risk]
    return data
