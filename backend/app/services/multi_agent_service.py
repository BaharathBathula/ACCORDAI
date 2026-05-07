from app.agents.agent_graph import agent_graph


def run_multi_agent(question: str, context: dict = {}):

    initial_state = {
        "user_question": question,
        "intent": None,
        "context": context,
        "response": None
    }

    result = agent_graph.invoke(initial_state)

    return {
        "agent_system": "ACCORDAI Multi-Agent Insurance AI",
        "intent": result.get("intent"),
        "response": result.get("response"),
        "context_used": context
    }
