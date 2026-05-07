def document_agent(state: dict):
    question = state.get("user_question", "")

    response = (
        "Document Agent: I can analyze ACORD forms, policy PDFs, "
        "claims documents, underwriting files, and document summaries. "
        f"User asked: {question}"
    )

    state["response"] = response

    return state
