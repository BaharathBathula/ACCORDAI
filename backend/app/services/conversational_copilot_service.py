from app.services.conversation_memory_service import (
    add_message,
    get_conversation
)

from app.services.multi_agent_service import (
    run_multi_agent
)


def run_conversational_copilot(
    session_id: str,
    message: str,
    context: dict = {}
):

    add_message(
        session_id=session_id,
        role="user",
        message=message
    )

    history = get_conversation(
        session_id
    )

    enriched_context = {
        **context,
        "conversation_history": history
    }

    ai_result = run_multi_agent(
        question=message,
        context=enriched_context
    )

    response = ai_result.get(
        "response",
        "ACCORDAI Copilot could not generate a response."
    )

    add_message(
        session_id=session_id,
        role="assistant",
        message=response
    )

    return {
        "session_id": session_id,
        "message": message,
        "response": response,
        "intent": ai_result.get("intent"),
        "conversation_history": get_conversation(
            session_id
        )
    }
