from app.agents.agent_graph import (
    agent_graph
)

from app.services.rag_service import (
    retrieve_context
)


def run_multi_agent(
    question: str,
    context: dict = {}
):

    retrieved_context = retrieve_context(
        question
    )

    initial_state = {
        "user_question": question,
        "intent": None,
        "context": {
            **context,
            "retrieved_knowledge":
                retrieved_context
        },
        "response": None
    }

    result = agent_graph.invoke(
        initial_state
    )

    return {
        "agent_system":
            "ACCORDAI Multi-Agent Insurance AI",

        "intent":
            result.get("intent"),

        "response":
            result.get("response"),

        "context_used":
            result.get("context")
    }
