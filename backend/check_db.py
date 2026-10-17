from sqlalchemy import text

from app.database import engine

with engine.connect() as connection:
    result = connection.execute(
        text("SELECT current_database(), current_user")
    ).one()

    print("Database Connection Successful!")
    print(f"Database: {result[0]}")
    print(f"User: {result[1]}")