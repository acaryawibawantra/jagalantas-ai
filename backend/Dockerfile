FROM python:3.10-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /code

# Install system dependencies (needed later for OpenCV and AI models)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libgl1-mesa-glx \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install dependencies
COPY requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# Copy the rest of the application code
COPY . /code

# Setup non-root user for Hugging Face Spaces compatibility
RUN useradd -m -u 1000 user
RUN chown -R user:user /code
USER user
ENV HOME=/home/user
ENV PATH=/home/user/.local/bin:$PATH

EXPOSE 8000

# Start FastAPI application
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
