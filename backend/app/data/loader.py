"""Helper untuk load dummy data JSON"""
import json
from pathlib import Path

_DATA_PATH = Path(__file__).parent / "dummy" / "jakarta_data.json"

def load_dummy() -> dict:
    with open(_DATA_PATH, "r", encoding="utf-8") as f:
        return json.load(f)
