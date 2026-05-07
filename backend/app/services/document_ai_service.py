def analyze_document(document_data: dict):

    document_type = document_data.get(
        "document_type",
        ""
    ).lower()

    file_name = document_data.get(
        "file_name",
        ""
    )

    insights = []

    if "acord" in document_type:
        insights.append(
            "ACORD insurance form detected."
        )

    if "policy" in document_type:
        insights.append(
            "Policy document identified for coverage analysis."
        )

    if "claim" in document_type:
        insights.append(
            "Claims-related document detected."
        )

    insights.append(
        "AI document summarization completed."
    )

    return {
        "file_name": file_name,
        "document_type": document_type,
        "ai_insights": insights,
        "summary":
            "Insurance document processed successfully by ACCORDAI AI."
    }
