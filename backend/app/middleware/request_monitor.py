import time

from starlette.middleware.base import (
    BaseHTTPMiddleware
)

from app.core.logger import logger


class RequestMonitoringMiddleware(
    BaseHTTPMiddleware
):

    async def dispatch(
        self,
        request,
        call_next
    ):

        start_time = time.time()

        response = await call_next(
            request
        )

        process_time = (
            time.time() - start_time
        )

        logger.info(
            f"{request.method} "
            f"{request.url.path} | "
            f"Status: {response.status_code} | "
            f"Latency: {process_time:.4f}s"
        )

        response.headers[
            "X-Process-Time"
        ] = str(process_time)

        return response
