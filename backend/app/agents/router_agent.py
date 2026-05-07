def route_agent(state: dict):
    question = state.get(
        "user_question",
        ""
    ).lower()

    if "policy" in question or "coverage" in question or "renewal" in question:
        state["intent"] = "policy"

    elif "claim" in question or "fraud" in question or "reserve" in question:
        state["intent"] = "claims"

    elif "document" in question or "acord" in question or "pdf" in question:
        state["intent"] = "document"

    elif "task" in question or "workflow" in question or "follow up" in question:
        state["intent"] = "workflow"

    else:
        state["intent"] = "policy"

    return state
