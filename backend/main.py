from fastapi import FastAPI

from api.auth.routes import router as auth_router

from api.products.routes import router as product_router

from api.chat.routes import router as chat_router
from api.compare.routes import router as compare_router

from core.database import Base
from core.database import engine


Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="PriceWise AI"
)

app.include_router(auth_router)

app.include_router(product_router)

app.include_router(chat_router)
app.include_router(compare_router)


@app.get("/")
def root():
    return {
        "message": "PriceWise AI Running"
    }