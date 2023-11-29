#/api/api.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/check-redirects")
def check_redirects(url: str):
    response = requests.get(url)
    redirects = []
    final_url = response.url
    final_status_code = response.status_code

    if response.history:
        for redirect in response.history:
            redirects.append({
                "url": redirect.url,
                "status_code": redirect.status_code
            })

    return {
        "url": final_url,
        "status_code": final_status_code,
        "redirects": redirects
    }