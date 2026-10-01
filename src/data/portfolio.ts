export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  oneLiner: string;
  description: string;
  status: string;
  tech: string[];
  github: string;
  highlights: string[];
  architecture: string[];
  decisions: { problem: string; decision: string }[];
  next: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-builder",
    title: "AI Builder",
    eyebrow: "Autonomous developer tooling",
    oneLiner: "A stateful coding agent that plans, edits, executes, verifies, and recovers from software-engineering tasks.",
    description: "I built an autonomous coding workflow around explicit agent state, tool routing, sandboxed execution, approval gates, context summarization, and iterative build verification. The goal is to make code-generation workflows behave like an engineering system instead of a single LLM call.",
    status: "Flagship",
    tech: ["Python", "LLMs", "Tool calling", "State machines", "Sandboxing", "Evaluation"],
    github: "https://github.com/adityapurohit01/AI-builder-lovable-clone",
    highlights: [
      "Explicit execution flow: IDLE → PLANNING → APPROVAL → CODING → ITERATING.",
      "Specialized planning, coding, routing, sandbox, and context-management components.",
      "Tooling for repository mapping, file reads/writes, terminal execution, and verification.",
      "Designed around recoverable failures rather than assuming the first generated patch is correct.",
    ],
    architecture: ["User request", "Planner", "State machine", "Coding agent", "Tool router", "Sandboxed execution", "Build / test verifier", "Failure context → next iteration"],
    decisions: [
      { problem: "Free-form agent loops make execution difficult to inspect and control.", decision: "Use explicit states and transitions so planning, approval, coding, and verification remain observable." },
      { problem: "Generated code can fail even when the model response looks plausible.", decision: "Treat execution and build verification as part of the agent loop instead of the end of the workflow." },
      { problem: "Long coding tasks exceed useful context windows.", decision: "Summarize and carry forward only task-relevant execution context." },
    ],
    next: ["Publish a reproducible benchmark suite for coding tasks.", "Add stronger process, network, and resource isolation.", "Measure success rate, recovery rate, latency, and cost per completed task."],
  },
  {
    slug: "intelliform",
    title: "IntelliForm",
    eyebrow: "Browser automation infrastructure",
    oneLiner: "Framework-aware automation that discovers, understands, fills, and verifies complex web forms.",
    description: "Instead of treating a form as a collection of HTML inputs, IntelliForm builds a pipeline around DOM discovery, semantic classification, decision-making, interaction, and verification. It also accounts for modern frontend behaviors such as React/Vue/Angular setters, Shadow DOM, iframes, ARIA semantics, and sensitive-field blocking.",
    status: "Flagship",
    tech: ["TypeScript", "DOM internals", "Browser automation", "React", "Vue", "Angular"],
    github: "https://github.com/adityapurohit01/intelliform",
    highlights: [
      "DOM scanner → semantic classifier → decision engine → interaction engine → verifier.",
      "Framework-specific input handling instead of relying only on naive DOM assignment.",
      "Support for Shadow DOM, iframes, ARIA semantics, and confidence-aware interactions.",
      "Sensitive-field protections and verification before treating an interaction as successful.",
    ],
    architecture: ["Page / DOM", "Element scanner", "Semantic classifier", "Decision engine", "Framework-aware interaction", "Verifier", "Site-specific learning store"],
    decisions: [
      { problem: "Modern UI frameworks can reject direct DOM value mutation.", decision: "Use framework-aware interaction paths so the application's own event model can observe the change." },
      { problem: "A successful click or fill event does not guarantee the application accepted the value.", decision: "Verify post-interaction state instead of assuming the browser event was sufficient." },
      { problem: "Automation becomes dangerous when semantic confidence is low.", decision: "Use confidence and sensitive-field blocking to make uncertain interactions fail closed." },
    ],
    next: ["Create a 100+ form benchmark spanning frameworks and edge cases.", "Track fill precision, successful completion rate, false positives, and latency.", "Add automated browser regression tests with reproducible fixtures."],
  },
  {
    slug: "agentic-dating",
    title: "Agentic Dating",
    eyebrow: "Multi-agent evaluation",
    oneLiner: "A multi-agent environment for grounded persona simulation, agent-agent dates, evidence-based reviews, and structured judging.",
    description: "I built a multi-stage system that turns profile evidence into grounded personas, simulates agent-agent interactions, stores memory, and evaluates outcomes with explicit scoring logic. The project is intentionally more like an experimental evaluation environment than a chat demo.",
    status: "Flagship",
    tech: ["TypeScript", "MCP", "SQLite/FTS5", "Multi-agent systems", "Zod", "Vitest"],
    github: "https://github.com/adityapurohit01/agentic-dating",
    highlights: [
      "Profile collection → fact extraction → grounded persona → voice profile → memory → agent-agent date.",
      "Evidence citations and transcript-based judging instead of relying entirely on free-form LLM impressions.",
      "Concurrency controls, spend limits, deterministic mock mode, structured validation, and tests.",
      "Explicit scoring and ablation-oriented evaluation rather than a single hidden prompt score.",
    ],
    architecture: ["Public profile evidence", "Fact extraction", "Grounded persona", "Memory", "Agent-agent interaction", "Side review", "Neutral judge", "Fact checker / evidence audit"],
    decisions: [
      { problem: "Purely generative judges can hide where a score came from.", decision: "Keep scoring structure explicit and preserve evidence that supports the decision." },
      { problem: "Multi-agent experiments can become expensive and nondeterministic.", decision: "Add mock mode, concurrency controls, and spending limits to make experiments repeatable." },
      { problem: "Agent context grows rapidly across turns.", decision: "Use persistent memory and searchable local storage rather than keeping everything in one prompt." },
    ],
    next: ["Add a larger reproducible evaluation set with human-labelled comparisons.", "Publish privacy and consent constraints for profile-derived attributes.", "Report model-cost, latency, and judge-agreement measurements."],
  },
  {
    slug: "hierarchical-math-rag",
    title: "Hierarchical Math RAG",
    eyebrow: "Multimodal retrieval",
    oneLiner: "Structure-aware retrieval that preserves document hierarchy and keeps figures attached to the content they actually belong to.",
    description: "The system turns mathematical documents into a hierarchy of chapters, topics, examples, content, and figures, then combines retrieval with a knowledge graph and scoped multimodal context. A key design goal is to prevent figure or context leakage across nearby sections.",
    status: "Research",
    tech: ["Python", "RAG", "Embeddings", "Knowledge graphs", "VLMs", "PDF ingestion"],
    github: "https://github.com/adityapurohit01/Hierarchical-Math-RAG-System",
    highlights: [
      "Document → chapter → topic → example → content / figure hierarchy.",
      "VLM-assisted figure descriptions and multimodal retrieval.",
      "Explicit ownership relationships between assets and the content that references them.",
      "Scoped retrieval designed to reduce incorrect cross-section context.",
    ],
    architecture: ["PDF ingestion", "Document structure extraction", "Hierarchical nodes", "Figure / asset extraction", "Knowledge graph", "Scoped retrieval", "Multimodal context assembly", "Answer generation"],
    decisions: [
      { problem: "Flat chunking can retrieve related-looking text from the wrong section.", decision: "Represent document structure explicitly and retrieve within the correct hierarchy." },
      { problem: "Figures often carry essential mathematical context.", decision: "Treat figures as first-class assets with descriptions and explicit ownership links." },
      { problem: "Silent embedding failures can corrupt downstream ranking.", decision: "Failures should be explicit and observable instead of being converted into plausible-looking zero vectors." },
    ],
    next: ["Benchmark hierarchical retrieval against a strong flat-RAG baseline.", "Measure figure retrieval accuracy separately from text retrieval.", "Add explicit failure reporting and embedding-health instrumentation."],
  },
  {
    slug: "med-le",
    title: "Med-Le",
    eyebrow: "Multimodal AI application",
    oneLiner: "A full-stack multimodal assistant combining document retrieval, food-photo analysis, structured services, and an application backend.",
    description: "Med-Le combines a React frontend, FastAPI services, retrieval infrastructure, multimodal model calls, authentication, reporting, and a dietitian-oriented workflow. The interesting part is the application architecture around the model, not simply the model prompt.",
    status: "Product",
    tech: ["React", "FastAPI", "MongoDB", "RAG", "Multimodal AI", "OpenRouter"],
    github: "https://github.com/adityapurohit01/med-le",
    highlights: [
      "End-to-end frontend → API → service → retrieval → model workflow.",
      "Multimodal food-image analysis alongside text interactions.",
      "Repository/service/router separation for application logic.",
      "Retrieval controls including chunking, metadata filtering, context limits, and prompt-injection protections.",
    ],
    architecture: ["React client", "FastAPI API", "Application services", "Retrieval layer", "Knowledge store", "Multimodal model", "Structured response / report"],
    decisions: [
      { problem: "Large retrieved contexts increase latency and can dilute relevant evidence.", decision: "Control chunk size, overlap, top-k, metadata filtering, and context budgets." },
      { problem: "A model can be influenced by untrusted retrieved text.", decision: "Treat retrieved documents as untrusted context and apply prompt-injection guards." },
    ],
    next: ["Publish task-specific retrieval and answer-quality evaluations.", "Separate clinical claims from product behavior and document the system's limitations.", "Measure latency and model cost across common workflows."],
  },
];

export const experience = [
  { period: "2026 — Present", role: "AI Engineer Intern", company: "Info Edge Ventures", detail: "Engineering AI-powered venture intelligence workflows, including automated web crawling and relevant-document discovery for FLC alerting and centralized repository integrations." },
  { period: "2025 — 2026", role: "Project Intern", company: "DRDO — Recruitment Assessment Centre", detail: "Worked on AI-driven recruitment automation, including semantic matching and candidate-shortlisting workflows." },
  { period: "2025", role: "Tech Intern", company: "Formskart", detail: "Built an AI-assisted college recommendation system and analytics tooling." },
];

export const awards = [
  ["Smart India Hackathon 2024", "National Winner"],
  ["Agentic AI Hackathon 2025", "Winner"],
  ["Global CyberAI Hackathon 2025", "Global Winner"],
  ["Microsoft Innovate", "Top 5 Finalist"],
  ["Smart BU Hackathon", "2× Top 15 Finalist"],
];

export const capabilityGroups = [
  { title: "Agents", items: ["Planning", "Tool use", "State machines", "Memory", "Multi-agent orchestration", "MCP"] },
  { title: "Retrieval", items: ["RAG", "Embeddings", "Knowledge graphs", "Multimodal retrieval", "Context management", "Evaluation"] },
  { title: "ML / AI", items: ["PyTorch", "Transformers", "LoRA / PEFT", "Computer vision", "VLMs", "Model routing"] },
  { title: "Production", items: ["Python", "TypeScript", "FastAPI", "React", "MongoDB", "Docker", "AWS", "Vercel"] },
];
