import os
from pathlib import Path

from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.engine import URL

#Find the ImplmentationOS project root
PROJECT_ROOT = Path(__file__).resolve().parents[2]

#Load local database credentials.
load_dotenv(PROJECT_ROOT / ".env")      #Loads the credentials from project-root .env


#Construct the database connection URL safely
database_url = URL.create(              # Safely constructs a database connection URL, including passwords containing special characters
    drivername="postgresql+psycopg",
    username=os.environ["POSTGRES_USER"],
    password=os.environ["POSTGRES_PASSWORD"],
    host=os.getenv("POSTGRES_HOST", "127.0.0.1"),   #Connects to PostgreSQL on the Windows machine
    port=int(os.getenv("POSTGRES_PORT", "5433")),
    database=os.environ["POSTGRES_DB"],
)


#Create the SQLAlchemy engine.
engine= create_engine(                  # Creates the SQLAlchemy connection manager
    database_url,
    pool_pre_ping=True,                 # Checks pooled connections before reuse to help detect stale connections
)