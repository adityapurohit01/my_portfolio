export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  oneLiner: string;
  description: string;
  primitive: string;
  status: string;
  tech: string[];
  github: string;
  highlights: string[];
  architecture: string[];
  evals: { metric: string; value: string; note: string }[];
  decisions: { problem: string; decision: string }[];
  failureModes: { failure: string; handling: string }[];
  iterations: { attempt: string; issue: string; change: string; evidence: string }[];
  evidenceMetrics: { label: string; value: string }[];
  trace: { title: string; payload: string };
  next: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-builder",
    primitive: "A reusable stateful agent runtime for software tasks: planner + tools + sandbox + verifier + recovery loop.",
    evidenceMetrics: [
      { label: "deterministic test cases", value: "34" },
      { label: "workflow phases", value: "5" },
      { label: "core tool classes", value: "4" },
    ],
    iterations: [
      { attempt: "01", issue: "Single-shot generation hides failures and has no recovery boundary.", change: "Introduced explicit planning, coding, verification, and iteration states.", evidence: "State machine is implemented in the repository architecture." },
      { attempt: "02", issue: "Long tasks accumulate irrelevant execution context.", change: "Added context summarization around the agent workflow.", evidence: "Context management is represented as a dedicated component." },
      { attempt: "03", issue: "Code output is not trustworthy until it executes.", change: "Made build / test verification part of the agent loop.", evidence: "Verifier and failure feedback are first-class workflow stages." },
    ],
    title: "AI Builder",
    eyebrow: "Autonomous developer tooling",
    oneLiner: "A stateful coding agent that plans, edits, executes, verifies, and recovers from software-engineering tasks.",
    description: "I built an autonomous coding workflow around explicit agent state, tool routing, sandboxed execution, approval gates, context summarization, and iterative build verification. The goal is to make code-generation workflows behave like an engineering system instead of a single LLM call.",
    status: "Flagship",
    tech: ["Python", "LLMs", "Tool calling", "State machines", "Sandboxing", "Evaluation"],
    github: "https://github.com/adityapurohit01/AI-builder-lovable-clone",
    highlights: [
      "Deterministic state boundaries separate planning, approval, execution, and verification so every transition remains inspectable and recoverable.",
      "Tool execution is isolated behind explicit interfaces for repository mapping, file mutation, reads, and terminal execution, keeping side effects observable independently of model output.",
      "Failure context becomes state, not chat history: build/test evidence is captured, summarized, and carried into the next iteration instead of replaying the entire conversation.",
      "Designed around recoverable failures rather than assuming the first generated patch is correct.",
    ],
    architecture: ["User request", "Planner", "State machine", "Coding agent", "Tool router", "Sandboxed execution", "Build / test verifier", "Failure context → next iteration"],
    evals: [
      { metric: "Execution state model", value: "IMPLEMENTED", note: "Explicit IDLE → PLANNING → APPROVAL → CODING → ITERATING workflow is implemented." },
      { metric: "Build / test verification", value: "IMPLEMENTED", note: "Generated code is executed and failures are fed back into the iteration loop." },
      { metric: "Pass@1", value: "[INSERT MEASURED VALUE]", note: "Populate only from a reproducible task harness; no benchmark number is claimed before measurement." },
      { metric: "P95 latency / task cost", value: "[INSERT MEASURED VALUE]", note: "Populate from provider usage telemetry plus end-to-end wall-clock timing." },
    ],
    decisions: [
      { problem: "Free-form agent loops make execution difficult to inspect and control.", decision: "Use explicit states and transitions so planning, approval, coding, and verification remain observable." },
      { problem: "Generated code can fail even when the model response looks plausible.", decision: "Treat execution and build verification as part of the agent loop instead of the end of the workflow." },
      { problem: "Long coding tasks exceed useful context windows.", decision: "Summarize and carry forward only task-relevant execution context." },
    ],
    failureModes: [
      { failure: "Long recursive repair sequences can preserve stale assumptions from earlier iterations, causing the planner to optimize against obsolete constraints.", handling: "Current mitigation is context summarization; next hardening step is state-aware pruning of obsolete tool output and repository context before each retry." },
      { failure: "Execution isolation is not equivalent to a hardened container boundary: process lifecycle, resource consumption, and network behavior remain architectural constraints.", handling: "Treat stronger process, network, and resource isolation as a prerequisite for production-grade execution." },
      { failure: "Generated patches can satisfy a local build while violating cross-file or behavioral requirements.", handling: "Keep build/test verification inside the loop and preserve concrete failure evidence across iterations." },
    ],
    trace: {
      title: "Representative execution trace · not a production log",
      payload: '{\n  "state": "VERIFYING",\n  "tool": "terminal",\n  "input": "npm test",\n  "result": { "status": "failed", "errors": 1 },\n  "next": "ITERATING",\n  "action": "preserve_failure_context_and_patch"\n}',
    },
    next: ["Publish a reproducible benchmark suite for coding tasks.", "Add stronger process, network, and resource isolation.", "Measure success rate, recovery rate, latency, and cost per completed task."],
  },
  {
    slug: "intelliform",
    primitive: "A semantic DOM-understanding and verification layer that can sit underneath browser agents.",
    evidenceMetrics: [
      { label: "pipeline layers", value: "9" },
      { label: "field types", value: "18+" },
      { label: "framework strategies", value: "4" },
      { label: "verification retries", value: "3" },
    ],
    iterations: [
      { attempt: "01", issue: "Naive DOM writes do not reliably update framework-managed state.", change: "Added framework-aware interaction paths.", evidence: "Repository includes framework-specific interaction handling." },
      { attempt: "02", issue: "A browser event can succeed while application state remains unchanged.", change: "Added post-interaction verification.", evidence: "Verifier is a dedicated pipeline stage." },
      { attempt: "03", issue: "Ambiguous controls create unsafe automation decisions.", change: "Added semantic confidence and sensitive-field blocking.", evidence: "Decision and safety controls are part of the implementation." },
    ],
    title: "IntelliForm",
    eyebrow: "Browser automation infrastructure",
    oneLiner: "Framework-aware automation that discovers, understands, fills, and verifies complex web forms.",
    description: "Instead of treating a form as a collection of HTML inputs, IntelliForm builds a pipeline around DOM discovery, semantic classification, decision-making, interaction, and verification. It also accounts for modern frontend behaviors such as React/Vue/Angular setters, Shadow DOM, iframes, ARIA semantics, and sensitive-field blocking.",
    status: "Flagship",
    tech: ["TypeScript", "DOM internals", "Browser automation", "React", "Vue", "Angular"],
    github: "https://github.com/adityapurohit01/intelliform",
    highlights: [
      "DOM discovery is separated from semantic interpretation, allowing candidates to be inspected before classification crosses the execution boundary.",
      "Interaction is treated as a state transition rather than a DOM mutation, with framework-aware event paths followed by explicit application-state assertions.",
      "The decision layer fails closed: semantic confidence, sensitivity, interactability, and available user data are evaluated before an interaction can execute.",
      "Sensitive-field protections and verification before treating an interaction as successful.",
    ],
    architecture: ["Page / DOM", "Element scanner", "Semantic classifier", "Decision engine", "Framework-aware interaction", "Verifier", "Site-specific learning store"],
    evals: [
      { metric: "Framework coverage", value: "IMPLEMENTED", note: "React / Vue / Angular / vanilla interaction paths are part of the implementation." },
      { metric: "Post-action verification", value: "IMPLEMENTED", note: "Application state is checked after browser interactions rather than trusting the event alone." },
      { metric: "Precision / recall", value: "[INSERT MEASURED VALUE]", note: "Populate from a labelled unseen-form benchmark spanning framework and DOM edge cases." },
      { metric: "False-positive rate", value: "[INSERT MEASURED VALUE]", note: "Measure on ambiguous, sensitive, and adversarial form fixtures." },
    ],
    decisions: [
      { problem: "Modern UI frameworks can reject direct DOM value mutation.", decision: "Use framework-aware interaction paths so the application's own event model can observe the change." },
      { problem: "A successful click or fill event does not guarantee the application accepted the value.", decision: "Verify post-interaction state instead of assuming the browser event was sufficient." },
      { problem: "Automation becomes dangerous when semantic confidence is low.", decision: "Use confidence and sensitive-field blocking to make uncertain interactions fail closed." },
    ],
    failureModes: [
      { failure: "Mutation-driven rerenders can invalidate an element reference between classification and interaction, creating a race between observed DOM state and committed application state.", handling: "Revalidate target identity and application state at the interaction boundary instead of trusting a stale DOM reference." },
      { failure: "Custom widgets can expose insufficient semantics even when their visual behavior appears obvious.", handling: "Combine DOM structure, labels, ARIA attributes, confidence, and post-action verification rather than relying on one selector." },
      { failure: "Site-specific learning can become stale after a frontend deployment, creating temporal coupling between stored mappings and the current DOM schema.", handling: "Treat learned mappings as versioned, expirable evidence and validate them against current fixtures before reuse." },
    ],
    trace: {
      title: "Representative interaction trace · not a production log",
      payload: '{\n  "element": "input",\n  "semantic_role": "email",\n  "confidence": 0.94,\n  "interaction": "framework_aware_setter",\n  "verification": { "value_observed": true, "accepted": true }\n}',
    },
    next: ["Create a 100+ form benchmark spanning frameworks and edge cases.", "Track fill precision, successful completion rate, false positives, and latency.", "Add automated browser regression tests with reproducible fixtures."],
  },
  {
    slug: "agentic-dating",
    primitive: "A model-independent multi-agent evaluation harness with MCP tools and local memory/state.",
    evidenceMetrics: [
      { label: "synthetic evaluation subjects", value: "6" },
      { label: "causality score gap", value: "48 pts" },
      { label: "planted-truth top-3", value: "6/6" },
      { label: "ablation rank changes", value: "16" },
    ],
    iterations: [
      { attempt: "01", issue: "Purely generative judging makes scores difficult to audit.", change: "Moved scoring structure into explicit application logic and evidence.", evidence: "Structured scoring and evidence handling are implemented." },
      { attempt: "02", issue: "Multi-agent experiments can become expensive and nondeterministic.", change: "Added deterministic mock mode, spend limits, and concurrency controls.", evidence: "These controls are part of the repository design." },
      { attempt: "03", issue: "Conversation context grows across long interactions.", change: "Added persistent searchable memory.", evidence: "SQLite / FTS5-backed memory is part of the architecture." },
    ],
    title: "Agentic Dating",
    eyebrow: "Multi-agent evaluation",
    oneLiner: "A multi-agent environment for grounded persona simulation, agent-agent dates, evidence-based reviews, and structured judging.",
    description: "I built a multi-stage system that turns profile evidence into grounded personas, simulates agent-agent interactions, stores memory, and evaluates outcomes with explicit scoring logic. The project is intentionally more like an experimental evaluation environment than a chat demo.",
    status: "Flagship",
    tech: ["TypeScript", "MCP", "SQLite/FTS5", "Multi-agent systems", "Zod", "Vitest"],
    github: "https://github.com/adityapurohit01/standin-agentic-dating",
    highlights: [
      "Evidence, persona state, interaction state, and evaluation state remain separate layers so generated persona claims cannot silently become source facts.",
      "Memory is externalized from model context through searchable local state, avoiding full-history replay across long interactions.",
      "Evaluation is separated from generation: transcripts become inspectable evidence for downstream scoring, ablation, and judge analysis.",
      "Explicit scoring and ablation-oriented evaluation rather than a single hidden prompt score.",
    ],
    architecture: ["Public profile evidence", "Fact extraction", "Grounded persona", "Memory", "Agent-agent interaction", "Side review", "Neutral judge", "Fact checker / evidence audit"],
    evals: [
      { metric: "Causality test", value: "PASS · Δ48 points", note: "Positive transcript ~62 vs hostile transcript ~14 on the documented synthetic evaluation." },
      { metric: "Planted-truth test", value: "PASS · 6/6 top-3", note: "Compatible synthetic partner landed in the top 3 for all 6 evaluated people." },
      { metric: "Ablation analysis", value: "16 rank changes", note: "Profile-only vs transcript-informed rankings differed in 16 positions across the documented 6-person evaluation." },
      { metric: "Deterministic mock mode", value: "IMPLEMENTED", note: "Enables repeatable system-level tests without consuming model budget." },
    ],
    decisions: [
      { problem: "Purely generative judges can hide where a score came from.", decision: "Keep scoring structure explicit and preserve evidence that supports the decision." },
      { problem: "Multi-agent experiments can become expensive and nondeterministic.", decision: "Add mock mode, concurrency controls, and spending limits to make experiments repeatable." },
      { problem: "Agent context grows rapidly across turns.", decision: "Use persistent memory and searchable local storage rather than keeping everything in one prompt." },
    ],
    failureModes: [
      { failure: "Judge behavior can vary when model identity, prompt version, or context ordering changes even if the transcript is identical.", handling: "Pin judge configuration and pair deterministic scoring structure with human-labelled agreement measurements." },
      { failure: "Persisted memory creates a consistency boundary: stale or contradictory facts can influence downstream agent behavior.", handling: "Preserve provenance and timestamps and introduce explicit conflict resolution before treating memory as authoritative." },
      { failure: "Concurrent agents can produce different memory-write orders, making downstream context sensitive to event completion order.", handling: "Use explicit event ordering and replayable state transitions instead of relying on wall-clock completion order." },
    ],
    trace: {
      title: "MCP-style representative payload · shape only",
      payload: '{\n  "tool": "store_evidence",\n  "arguments": {\n    "source_id": "profile_017",\n    "fact": "prefers hiking",\n    "evidence": "source_excerpt",\n    "confidence": 0.91\n  },\n  "result": { "stored": true, "memory_id": "mem_204" }\n}',
    },
    next: ["Add a larger reproducible evaluation set with human-labelled comparisons.", "Publish privacy and consent constraints for profile-derived attributes.", "Report model-cost, latency, and judge-agreement measurements."],
  },
  {
    slug: "hierarchical-math-rag",
    primitive: "A structure-aware multimodal retrieval layer for documents where hierarchy and asset ownership matter.",
    evidenceMetrics: [
      { label: "hierarchy levels", value: "5+" },
      { label: "asset types", value: "text + figures" },
      { label: "retrieval scope", value: "hierarchical" },
    ],
    iterations: [
      { attempt: "01", issue: "Flat chunking can mix nearby mathematical concepts and figures.", change: "Introduced explicit document hierarchy.", evidence: "Chapter / topic / example structure is modeled directly." },
      { attempt: "02", issue: "Figures can leak across neighboring sections.", change: "Added explicit asset/content ownership relationships.", evidence: "Ownership edges are represented in the repository." },
      { attempt: "03", issue: "Silent embedding failures can produce plausible but wrong retrieval.", change: "Flagged embedding failure as an explicit reliability concern.", evidence: "Failure handling is now documented as a hardening requirement." },
    ],
    title: "Hierarchical Math RAG",
    eyebrow: "Multimodal retrieval",
    oneLiner: "Structure-aware retrieval that preserves document hierarchy and keeps figures attached to the content they actually belong to.",
    description: "The system turns mathematical documents into a hierarchy of chapters, topics, examples, content, and figures, then combines retrieval with a knowledge graph and scoped multimodal context. A key design goal is to prevent figure or context leakage across nearby sections.",
    status: "Research",
    tech: ["Python", "RAG", "Embeddings", "Knowledge graphs", "VLMs", "PDF ingestion"],
    github: "https://github.com/adityapurohit01/Hierarchical-Math-RAG-System",
    highlights: [
      "Hierarchical nodes preserve document scope so retrieval can constrain context before generation rather than relying on similarity alone.",
      "Figure and text assets are represented as explicit nodes with ownership relationships, preventing proximity from becoming a false semantic link.",
      "Retrieval context is assembled from scoped graph relationships, making cross-section leakage an observable failure mode.",
      "Scoped retrieval designed to reduce incorrect cross-section context.",
    ],
    architecture: ["PDF ingestion", "Document structure extraction", "Hierarchical nodes", "Figure / asset extraction", "Knowledge graph", "Scoped retrieval", "Multimodal context assembly", "Answer generation"],
    evals: [
      { metric: "Hierarchical vs flat RAG", value: "Benchmark pending", note: "Needs a controlled retrieval comparison on the same corpus." },
      { metric: "Figure retrieval accuracy", value: "Not measured", note: "Should be evaluated independently from text retrieval." },
      { metric: "Context leakage", value: "Failure mode tracked", note: "The design explicitly models asset/content ownership to reduce cross-section leakage." },
      { metric: "Embedding health", value: "Needs hardening", note: "Failures should remain explicit and observable." },
    ],
    decisions: [
      { problem: "Flat chunking can retrieve related-looking text from the wrong section.", decision: "Represent document structure explicitly and retrieve within the correct hierarchy." },
      { problem: "Figures often carry essential mathematical context.", decision: "Treat figures as first-class assets with descriptions and explicit ownership links." },
      { problem: "Silent embedding failures can corrupt downstream ranking.", decision: "Failures should be explicit and observable instead of being converted into plausible-looking zero vectors." },
    ],
    failureModes: [
      { failure: "Structure extraction can assign content to the wrong hierarchy node, contaminating every downstream retrieval scoped to that node.", handling: "Keep hierarchy explicit and make node ownership inspectable before indexing derived representations." },
      { failure: "Asset indexing and document updates can drift apart, producing stale figure/content associations even when vector retrieval succeeds.", handling: "Treat derived indexes as versioned artifacts and validate ownership consistency during ingestion." },
      { failure: "Embedding-service failures can silently corrupt ranking if represented as valid vectors.", handling: "Surface embedding failures explicitly and make index health observable rather than substituting plausible-looking zero vectors." },
    ],
    trace: {
      title: "Representative retrieval trace · shape only",
      payload: '{\n  "query": "what theorem uses this figure?",\n  "scope": "chapter_03/topic_02",\n  "retrieval": ["content_88", "figure_21"],\n  "ownership_check": true,\n  "context_items": 2\n}',
    },
    next: ["Benchmark hierarchical retrieval against a strong flat-RAG baseline.", "Measure figure retrieval accuracy separately from text retrieval.", "Add explicit failure reporting and embedding-health instrumentation."],
  },
  {
    slug: "med-le",
    primitive: "A reusable full-stack pattern for multimodal retrieval applications with explicit service and data boundaries.",
    evidenceMetrics: [
      { label: "application layers", value: "5+" },
      { label: "retrieval controls", value: "4+" },
      { label: "modalities", value: "text + image" },
    ],
    iterations: [
      { attempt: "01", issue: "Large retrieval contexts increase latency and dilute relevant evidence.", change: "Added chunking, top-k, metadata filtering, and context limits.", evidence: "Retrieval controls are implemented in the application stack." },
      { attempt: "02", issue: "Retrieved text can contain untrusted instructions.", change: "Added prompt-injection defenses around retrieved context.", evidence: "Prompt-injection handling is an explicit application concern." },
      { attempt: "03", issue: "Health-oriented outputs can be over-read as clinical conclusions.", change: "Documented the prototype nature and limits of the system.", evidence: "Medical-grade claims are intentionally avoided on the portfolio." },
    ],
    title: "Med-Le",
    eyebrow: "Multimodal AI application",
    oneLiner: "A full-stack multimodal assistant combining document retrieval, food-photo analysis, structured services, and an application backend.",
    description: "Med-Le combines a React frontend, FastAPI services, retrieval infrastructure, multimodal model calls, authentication, reporting, and a dietitian-oriented workflow. The interesting part is the application architecture around the model, not simply the model prompt.",
    status: "Product",
    tech: ["React", "FastAPI", "MongoDB", "RAG", "Multimodal AI", "OpenRouter"],
    github: "https://github.com/adityapurohit01/med-le",
    highlights: [
      "Orchestration, retrieval, model invocation, and persistence are separated into service boundaries so provider-specific behavior does not leak into the UI.",
      "Multimodal observations and retrieved textual evidence converge into structured application state before downstream generation.",
      "Retrieved context is treated as untrusted data, with filtering, context budgets, and prompt-injection controls between the knowledge and instruction boundaries.",
      "Retrieval controls including chunking, metadata filtering, context limits, and prompt-injection protections.",
    ],
    architecture: ["React client", "FastAPI API", "Application services", "Retrieval layer", "Knowledge store", "Multimodal model", "Structured response / report"],
    evals: [
      { metric: "Retrieval quality", value: "Not published", note: "Needs task-specific retrieval and answer-quality evaluation." },
      { metric: "Vision analysis quality", value: "Not benchmarked", note: "Should be measured on a labelled image set before making strong claims." },
      { metric: "Latency / model cost", value: "Not published", note: "Application instrumentation should report common workflow costs." },
      { metric: "Prompt-injection handling", value: "Implemented", note: "Retrieved content is treated as untrusted context." },
    ],
    decisions: [
      { problem: "Large retrieved contexts increase latency and can dilute relevant evidence.", decision: "Control chunk size, overlap, top-k, metadata filtering, and context budgets." },
      { problem: "A model can be influenced by untrusted retrieved text.", decision: "Treat retrieved documents as untrusted context and apply prompt-injection guards." },
    ],
    failureModes: [
      { failure: "Updates can diverge across ingestion, vector indexing, and application metadata, allowing stale retrieval results to survive a source-document change.", handling: "Track source/version identity across derived representations and make index freshness an explicit correctness signal." },
      { failure: "Multimodal uncertainty can compound downstream: an incorrect visual observation can become a high-confidence response after retrieval and generation.", handling: "Carry provenance and uncertainty from the observation boundary into downstream structured state." },
      { failure: "Provider/model changes can alter latency and output structure without changing the application API.", handling: "Record model identity, prompt version, retrieval configuration, and token usage alongside every measured run." },
    ],
    trace: {
      title: "Representative multimodal request · shape only",
      payload: '{\n  "route": "/analyze-meal",\n  "input": { "image": "meal.jpg", "question": "estimate ingredients" },\n  "retrieval": { "top_k": 5, "filtered": true },\n  "model": "multimodal",\n  "response": "structured_result"\n}',
    },
    next: ["Publish task-specific retrieval and answer-quality evaluations.", "Separate clinical claims from product behavior and document the system's limitations.", "Measure latency and model cost across common workflows."],
  },
];

export const experience = [
  { period: "2025 — Present", role: "Project Intern", company: "DRDO — Recruitment Assessment Centre", detail: "Worked on AI-driven recruitment automation, including semantic matching and candidate-shortlisting workflows." },
  { period: "May 2026 — July 2026", role: "AI Engineer Intern", company: "Info Edge Ventures", detail: "Engineered AI-powered venture intelligence workflows, including automated web crawling and relevant-document discovery for FLC alerting and centralized repository integrations." },
  { period: "2025", role: "Tech Intern", company: "Formskart", detail: "Built an AI-assisted college recommendation system and analytics tooling." },
];

export const awards = [
  ["Smart India Hackathon 2024", "National Winner"],
  ["Smart India Hackathon 2025", "National Winner"],
  ["Agentic AI Hackathon 2025", "Winner"],
  ["Global CyberAI Hackathon 2025", "Global Winner"],
  ["Student Innovation Excellence Award 2025", "Times Now Education Summit"],
  ["Microsoft Innovate", "Top 5 Finalist"],
  ["Smart BU Hackathon", "2× Top 15 Finalist"],
];

export const capabilityGroups = [
  { title: "Agents", items: ["Planning", "Tool use", "State machines", "Memory", "Multi-agent orchestration", "MCP"] },
  { title: "Retrieval", items: ["RAG", "Embeddings", "Knowledge graphs", "Multimodal retrieval", "Context management", "Evaluation"] },
  { title: "ML / AI", items: ["PyTorch", "Transformers", "LoRA / PEFT", "Computer vision", "VLMs", "Model routing"] },
  { title: "Production", items: ["Python", "TypeScript", "FastAPI", "React", "MongoDB", "Docker", "AWS", "Vercel"] },
];
