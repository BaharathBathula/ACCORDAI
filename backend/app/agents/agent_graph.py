from langgraph.graph import StateGraph, END

from app.agents.agent_state import AgentState
from app.agents.router_agent import route_agent
from app.agents.policy_agent import policy_agent
from app.agents.claims_agent import claims_agent
from app.agents.document_agent import document_agent
from app.agents.workflow_agent import workflow_agent


def route_by_intent(state: AgentState):
    intent = state.get("intent")

    if intent == "policy":
        return "policy_agent"

    if intent == "claims":
        return "claims_agent"

    if intent == "document":
        return "document_agent"

    if intent == "workflow":
        return "workflow_agent"

    return "policy_agent"


workflow = StateGraph(AgentState)

workflow.add_node("router", route_agent)
workflow.add_node("policy_agent", policy_agent)
workflow.add_node("claims_agent", claims_agent)
workflow.add_node("document_agent", document_agent)
workflow.add_node("workflow_agent", workflow_agent)

workflow.set_entry_point("router")

workflow.add_conditional_edges(
    "router",
    route_by_intent,
    {
        "policy_agent": "policy_agent",
        "claims_agent": "claims_agent",
        "document_agent": "document_agent",
        "workflow_agent": "workflow_agent"
    }
)

workflow.add_edge("policy_agent", END)
workflow.add_edge("claims_agent", END)
workflow.add_edge("document_agent", END)
workflow.add_edge("workflow_agent", END)

agent_graph = workflow.compile()
