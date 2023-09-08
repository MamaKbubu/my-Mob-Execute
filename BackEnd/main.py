from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import models, schemas
from database import engine, SessionLocal
from sqlalchemy.orm import Session
from typing import List

app = FastAPI()

origins = ['https://www.google.com']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get('/')
def index():
    return {'data': 'Welcome to The Mob API'}

@app.post('/mob_agents/', response_model=schemas.Show_Mob_Agent)
def create_mob_agent(request: schemas.Mob_Agent, db: Session = Depends(get_db)):
    new_mob_agent = models.Mob_Agent(name_sur=request.name_sur, email=request.email, password=request.password)
    db.add(new_mob_agent)
    db.commit()
    db.refresh(new_mob_agent)
    return new_mob_agent

@app.get('/mob_agents/', response_model=List[schemas.Show_Mob_Agent])
def get_mob_agents(db: Session = Depends(get_db)):
    mob_agents = db.query(models.Mob_Agent).all()
    return mob_agents

@app.get('/mob_agents/{id}', response_model=schemas.Show_Mob_Agent)
def get_mob_agent(id: int, db: Session = Depends(get_db)):
    mob_agent = db.query(models.Mob_Agent).filter(models.Mob_Agent.id == id).first()
    if not mob_agent:
        raise HTTPException(status_code=404, detail=f'Mob Agent with id {id} not found')
    return mob_agent