"""Endpoint: Prediksi pelanggaran 24 jam (LSTM placeholder)"""
from fastapi import APIRouter
from typing import List
from app.data.loader import load_dummy
from app.models.schemas import ForecastPoint

router = APIRouter()


@router.get("/forecast", response_model=List[ForecastPoint], summary="Prediksi pelanggaran 24 jam")
def get_forecast():
    """
    Return data prediksi vs aktual pelanggaran per jam.
    Nantinya akan dihasilkan oleh model LSTM berbasis data historis E-TLE.
    """
    return load_dummy()["forecast_24h"]
