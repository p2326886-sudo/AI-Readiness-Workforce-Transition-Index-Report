export const publication = {
  title: "AI Readiness & Workforce Transition Index",
  subtitle:
    "Business Adaptation, Workforce Transformation and Operational AI Integration Across Emerging Enterprises",
  label: "Independent analytical research · Portfolio publication",
  author: "Priyanshu Gupta",
  institution: "Lovely Professional University",
  programme: "Bachelor of Business Administration — Final Year",
  disclaimer:
    "This project is an independent analytical and educational research initiative prepared for portfolio purposes. It is not an official university publication, peer-reviewed academic work, government report, empirical survey, or validated benchmarking instrument.",
};

export const sections = [
  ["Overview", "overview"],
  ["Index", "readiness-index"],
  ["Framework", "framework"],
  ["Workforce", "workforce"],
  ["Adoption", "adoption"],
  ["SME", "sme"],
  ["Models", "adaptation-models"],
  ["Recommendations", "recommendations"],
  ["Methodology", "methodology"],
  ["References", "references"],
  ["Researcher", "researcher-note"],
];

export const executiveSummary = {
  paragraphs: [
    "Across every major economy, artificial intelligence is no longer positioned at the periphery of business planning — it has moved decisively into the operational core. Yet the gap between organisations that articulate an AI ambition and those that successfully operationalise one has widened rather than narrowed since 2022.",
    "The AI Readiness and Workforce Transition Index is an independent analytical framework constructed to examine how emerging enterprises are managing the concurrent pressures of operational AI integration and workforce adaptation.",
    "The framework organises organisational AI readiness across four diagnostic dimensions — Strategic Intent, Digital Operations, Data Readiness, and Workforce Adaptability — each weighted equally to produce a Composite Index.",
  ],
  findings: [
    "Strategic intent consistently outpaces data infrastructure readiness, the dimension that most directly determines whether pilots can be scaled.",
    "Middle management AI literacy is the most underinvested and consequential lever in enterprise AI adoption.",
    "SMEs face a structurally distinct adoption challenge shaped by capital constraints, vendor dependency, and limited internal technical capacity.",
  ],
};

export const indexScores = [
  {
    dimension: "Strategic Intent",
    score: 72,
    weight: "25%",
    subIndicators: "AI vision, leadership alignment, budget commitment",
    explanation:
      "The degree to which AI is embedded in organisational vision, leadership articulation, and resource allocation.",
    diagnostic:
      "Strong intent without operational capability is a common failure mode, but operational capability without strategic anchoring rarely scales beyond individual business units.",
  },
  {
    dimension: "Digital Operations",
    score: 61,
    weight: "25%",
    subIndicators: "Cloud adoption, workflow digitisation, API maturity",
    explanation:
      "The maturity of the digital infrastructure on which AI systems operate: cloud adoption, workflow digitisation, integration capability, and structured processes.",
    diagnostic:
      "Digital maturity determines whether AI remains a tool-level experiment or becomes embedded in repeatable operating workflows.",
  },
  {
    dimension: "Data Readiness",
    score: 54,
    weight: "25%",
    subIndicators: "Governance frameworks, pipeline quality, data stewardship",
    explanation:
      "The most technically determinative dimension: data governance, quality standards, pipeline architecture, and organisational data culture.",
    diagnostic:
      "AI systems are only as effective as the data they learn from and operate on. Data readiness is the binding constraint in this score profile.",
  },
  {
    dimension: "Workforce Adaptability",
    score: 67,
    weight: "25%",
    subIndicators: "Reskilling pace, AI literacy, psychological readiness",
    explanation:
      "The human capital capacity to absorb and leverage AI tools, including reskilling investment, managerial AI literacy, and psychological safety.",
    diagnostic:
      "AI adoption becomes durable only when workers can experiment, evaluate outputs, and adapt roles without unmanaged career anxiety.",
  },
];

export const compositeScore = 60;

export const strategicImperative = {
  title: "Why AI readiness has become a strategic imperative",
  core:
    "AI readiness is fundamentally an organisational transformation programme — one in which technology functions as a critical input rather than the primary variable.",
  forces: [
    {
      title: "Competitive cost dynamics",
      text: "As AI tools reduce the marginal cost of analysis, content, and customer interaction, organisations without comparable capability face structural cost disadvantages.",
    },
    {
      title: "Talent market signals",
      text: "The sophistication of digital work environments is increasingly significant for employer attractiveness among younger workforce cohorts.",
    },
    {
      title: "Regulatory momentum",
      text: "Emerging AI governance frameworks will progressively reward organisations with documented accountability structures.",
    },
  ],
};

export const maturitySpectrum = [
  {
    stage: "1 · Awareness",
    description: "Leadership understands AI at a conceptual level; sporadic tool trials occur without structure.",
    barrier: "No roadmap or resource allocation",
    signal: "AI referenced in organisational strategy",
  },
  {
    stage: "2 · Exploration",
    description: "Cross-functional pilots launched; technology vendors assessed; early governance conversations begin.",
    barrier: "Skills gaps and fragmented data systems",
    signal: "Active pilot with defined success metrics",
  },
  {
    stage: "3 · Integration",
    description: "AI embedded in two or more core workflows; structured reskilling underway.",
    barrier: "Workflow redesign complexity; change fatigue",
    signal: "Measurable efficiency gains documented",
  },
  {
    stage: "4 · Optimisation",
    description: "Iterative model improvement cycles in place; AI informs strategic decisions.",
    barrier: "Ethics and governance structures lag deployment",
    signal: "Dedicated AI oversight function established",
  },
  {
    stage: "5 · Transformation",
    description: "AI woven into organisational identity; talent hired and evaluated on AI fluency.",
    barrier: "Sustaining innovation culture at scale",
    signal: "Board-level AI ROI reporting in place",
  },
];

export const workforceChallenges = [
  {
    title: "Skills Velocity Gap",
    text: "AI capability development outpaces conventional reskilling programme cycles by 6–12 months.",
  },
  {
    title: "Managerial AI Fluency",
    text: "Middle management conceptual gaps create adoption bottlenecks that senior strategy cannot bypass.",
  },
  {
    title: "Displacement Anxiety",
    text: "Worker concern frequently outpaces actual risk, requiring active and specific communication strategies.",
  },
  {
    title: "Cultural Inertia",
    text: "Established workflows resist AI-assisted alternatives even when productivity gains are demonstrable.",
  },
  {
    title: "Internal Equity Gaps",
    text: "Reskilling programme benefits tend to accrue disproportionately to already digitally capable workers.",
  },
];

export const adaptationModels = [
  {
    model: "Replacement-focused adaptation",
    summary:
      "Appropriate for genuinely automatable tasks, but applied too broadly when augmentation is the more realistic outcome.",
    useCase:
      "Use when the task is structurally automatable and transition support is required for affected roles.",
  },
  {
    model: "Augmentation-focused adaptation",
    summary:
      "Frames AI as a multiplier of human productive capacity through judgment, problem framing, output evaluation, and stakeholder communication.",
    useCase:
      "Use for knowledge-work and operational roles where AI improves speed and quality without removing human accountability.",
  },
  {
    model: "Transformation-focused adaptation",
    summary:
      "Redesigns roles and workflows from first principles around what AI can now handle and where human work should move.",
    useCase:
      "Use when the organisation has change capacity and can involve frontline workers in workflow redesign.",
  },
];

export const smeAnalysis = {
  paragraphs: [
    "Small and medium-sized enterprises carry disproportionate economic weight in most emerging economies, and India is no exception. According to the Ministry of MSME, the sector contributes approximately 30 per cent of national GDP and accounts for 45 per cent of total exports.",
    "Productive SME AI adoption is not a scaled-down version of enterprise strategy. It is qualitatively different: SMEs must identify commercially available tools that deliver value in their specific operational context, ensure existing staff can use those tools, and manage vendor relationships that substitute for in-house technical capability.",
    "An underanalysed risk in SME AI adoption is the concentration of dependency on third-party AI platforms and SaaS vendors. Managing this risk requires deliberate diversification and scenario planning for platform discontinuation.",
  ],
  constraints: [
    "Capital access for technology investment",
    "Availability of digitally skilled labour",
    "Adequacy of data infrastructure",
    "Quality of vendor and partner ecosystems",
    "Supportive regulatory frameworks",
  ],
  principle:
    "The appropriate performance metric for SME AI adoption is not the sophistication of the system deployed — it is the degree to which adoption translates into measurable operational improvement.",
};

export const policyRecommendations = [
  {
    recommendation: "Integrate AI literacy into BBA/MBA core curricula",
    stakeholder: "Universities & Accreditation Bodies",
    timeframe: "Near-term (1–2 yrs)",
    priority: "High",
  },
  {
    recommendation: "Create SME-targeted AI adoption grant framework",
    stakeholder: "Government / MSME Ministry",
    timeframe: "Near-term (1–2 yrs)",
    priority: "High",
  },
  {
    recommendation: "Develop national AI readiness benchmarking standard",
    stakeholder: "Policy & Research Institutes",
    timeframe: "Mid-term (2–3 yrs)",
    priority: "Medium",
  },
  {
    recommendation: "Build industry-university AI transition partnerships",
    stakeholder: "Enterprises + Academia",
    timeframe: "Mid-term (2–3 yrs)",
    priority: "High",
  },
  {
    recommendation: "Establish portable digital-skills certification system",
    stakeholder: "Professional Bodies",
    timeframe: "Long-term (3–5 yrs)",
    priority: "Medium",
  },
  {
    recommendation: "Fund longitudinal workforce transition research programme",
    stakeholder: "Research Councils",
    timeframe: "Long-term (3–5 yrs)",
    priority: "Medium",
  },
];

export const operationalRecommendations = [
  {
    title: "Invest in Data Infrastructure Before AI Tools",
    text: "Most AI implementation failures can be traced to data quality and governance deficits that pre-existed the deployment.",
  },
  {
    title: "Assign Explicit AI Ownership",
    text: "Effective ownership includes clear accountability for both technical implementation and measurable business outcomes.",
  },
  {
    title: "Prioritise Middle Management AI Fluency",
    text: "Targeted literacy development for middle management likely carries the highest return on training investment.",
  },
  {
    title: "Pilot Narrow, Scale Proven",
    text: "Choose high-frequency, measurable use cases for initial pilots and extend deployment only when value has been demonstrated.",
  },
  {
    title: "Build a Transparent Transition Narrative",
    text: "Workers need to understand what AI adoption means for their specific role and development pathway.",
  },
  {
    title: "Define ROI Measurement Frameworks Before Deployment",
    text: "Establish outcome indicators before systems go live: cost per transaction, processing time, error rate, and customer satisfaction.",
  },
];

export const methodology = {
  nature:
    "This is an independent analytical research project, not an empirical study with primary data collection. The analysis synthesises published institutional research to construct a conceptual framework that has not been validated through field surveys, expert panels, or psychometric testing.",
  limitations: [
    "Not a peer-reviewed academic paper subject to external review",
    "Not an official publication of Lovely Professional University",
    "Not based on original field research, surveys, or structured interviews",
    "Does not constitute a recommendation for any specific commercial AI product",
    "Not a validated benchmarking instrument for organisational AI assessment",
  ],
  future:
    "The equal weighting scheme reflects an analytical judgement informed by the reviewed literature, not an empirically derived weighting. Future primary research could test alternative weighting schemes and additional dimensions such as regulatory compliance readiness or ESG-AI alignment.",
};

export const references = [
  "Autor, D. (2024). Work of the Past, Work of the Future. MIT Work of the Future Research Brief.",
  "Deloitte Insights. (2024). State of Generative AI in the Enterprise.",
  "Deloitte Insights. (2024). 2024 Global Human Capital Trends: Thriving Beyond Boundaries.",
  "International Labour Organization. (2023). The Role of Technology in Advancing Labour Market Inclusion.",
  "International Monetary Fund. (2024). Gen-AI: Artificial Intelligence and the Future of Work.",
  "McKinsey Global Institute. (2023). The State of AI in 2023: Generative AI's Breakout Year.",
  "McKinsey Global Institute. (2024). The State of AI: How Organizations Are Rewiring to Capture Value.",
  "Microsoft Corporation. (2024). 2024 Work Trend Index Annual Report.",
  "Ministry of Micro, Small and Medium Enterprises, Government of India. (2023). Annual Report 2022-23.",
  "OECD. (2023). OECD Skills Outlook 2023.",
  "OECD. (2024). Artificial Intelligence in Work, Innovation, Productivity and Skills Project.",
  "World Bank Group. (2023). Digital Economy for Africa and Emerging Markets.",
  "World Economic Forum. (2023). Future of Jobs Report 2023.",
  "World Economic Forum. (2024). Global Competitiveness Report 2024.",
];

export const researcherNote = [
  "This project grew out of a persistent analytical preoccupation with how organisations navigate technological discontinuity — the kind of deep structural disruption that AI is currently producing across nearly every sector of the global economy.",
  "The dashboard that accompanies this report and the analytical writing contained here are intended to demonstrate that meaningful research work requires intellectual honesty, structured thinking, and genuine engagement with the published evidence base.",
  "The limitations documented in the methodology section are real. What remains durable is the analytical structure itself: AI readiness is a multi-dimensional organisational characteristic that cannot be reduced to technology procurement; data infrastructure is its most underinvested dimension; and workforce adaptability is its most human and complex dimension.",
];
