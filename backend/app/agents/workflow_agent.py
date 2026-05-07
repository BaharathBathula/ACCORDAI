def workflow_agent(state: dict):
    question = state.get("user_question", "")

    response = (
        "Workflow Agent: I can create operational tasks, route follow-ups, "
        "monitor SLA risks, and recommend agency workflow actions. "
        f"User asked: {question}"
    )

    state["response"] = response

    return state
