"""Endpoint: Insiden lalu lintas live"""
from fastapi import APIRouter, Query
from typing import List, Optional
from app.data.loader import load_dummy
from app.models.schemas import Incident

router = APIRouter()


@router.get("/incidents", response_model=List[Incident], summary="Daftar insiden lalu lintas live")
def get_incidents(
    severity: Optional[str] = Query(None, description="Filter: critical / high / medium / low"),
):
    """
    Return daftar insiden lalu lintas yang terdeteksi.
    Nantinya akan di-generate secara real-time oleh AI dari stream CCTV (YOLOv11).
    """
    data = load_dummy()["incidents"]
    if severity:
        data = [i for i in data if i["severity"] == severity]
    return data
