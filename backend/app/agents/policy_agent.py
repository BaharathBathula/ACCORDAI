def policy_agent(state: dict):
    question = state.get("user_question", "")

    response = (
        "Policy Agent: I can analyze policy coverage, renewals, "
        "premium changes, carrier performance, and coverage gaps. "
        f"User asked: {question}"
    )

    state["response"] = response

    return state
