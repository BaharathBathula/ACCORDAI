from fastapi import (
    APIRouter,
    WebSocket,
    WebSocketDisconnect
)

from app.core.websocket_manager import (
    manager
)

router = APIRouter(
    prefix="/realtime",
    tags=["Realtime"]
)


@router.websocket("/ws")
async def websocket_endpoint(
    websocket: WebSocket
):
    await manager.connect(websocket)

    try:

        while True:

            data = await websocket.receive_text()

            await manager.broadcast({
                "type": "activity",
                "message":
                    f"New operational event: {data}"
            })

    except WebSocketDisconnect:

        manager.disconnect(websocket)
