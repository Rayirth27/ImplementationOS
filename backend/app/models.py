from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


class Base(DeclarativeBase):
    pass


class Implementation(Base):
    __tablename__ = "implementations"

    id: Mapped[int] = mapped_column(
        primary_key=True
    )

    tenant_id: Mapped[str] = mapped_column(
        String(64),
        nullable=False,
        index=True,
    )

    customer_name: Mapped[str] = mapped_column(
        String(200),
        nullable=False,
    )

    integration_name: Mapped[str] = mapped_column(
        String(200),
        nullable=False,
    )

    status: Mapped[str] = mapped_column(
        String(32),
        nullable=False,
        default="pending",
    )