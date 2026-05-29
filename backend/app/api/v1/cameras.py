"""Endpoint: Kamera CCTV (simulasi/prototype)"""
from fastapi import APIRouter, Query
from typing import List, Optional
from app.data.loader import load_dummy
from app.models.schemas import Camera

router = APIRouter()


@router.get("/cameras", response_model=List[Camera], summary="Daftar kamera CCTV (prototype)")
def get_cameras(
    status: Optional[str] = Query(None, description="Filter: online / offline"),
    zone: Optional[str] = Query(None, description="Filter by zone"),
):
    """
    Return daftar kamera CCTV prototype (dummy data).
    Untuk data live, gunakan endpoint OpenCCTV proxy di frontend (/api/cctv).
    Nantinya akan terintegrasi dengan YOLOv11 untuk deteksi pelanggaran real-time.
    """
    data = load_dummy()["cameras"]
    if status:
        data = [c for c in data if c["status"] == status]
    if zone:
        data = [c for c in data if c["zone"].lower() == zone.lower()]
    return data
