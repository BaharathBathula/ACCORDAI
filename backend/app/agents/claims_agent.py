def claims_agent(state: dict):
    question = state.get("user_question", "")

    response = (
        "Claims Agent: I can analyze claim reserves, claim status, "
        "fraud indicators, adjuster follow-ups, and loss trends. "
        f"User asked: {question}"
    )

    state["response"] = response

    return state
