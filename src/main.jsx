import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDownToLine, ChevronDown, Menu, X } from "lucide-react";
import {
  adaptationModels,
  compositeScore,
  executiveSummary,
  indexScores,
  maturitySpectrum,
  methodology,
  operationalRecommendations,
  policyRecommendations,
  publication,
  references,
  researcherNote,
  sections,
  smeAnalysis,
  strategicImperative,
  workforceChallenges,
} from "./data";
import "./styles.css";

const sectionIds = sections.map((section) => section[1]);

function App() {
  const [activeSection] = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-slate-200">
        <div className="h-full bg-gold transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
      <Navigation activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <ExecutiveSummary />
      <ReadinessIndex />
      <DiagnosticFramework />
      <WorkforceAnalysis />
      <AdoptionSpectrum />
      <SMETransformation />
      <AdaptationModels />
      <Recommendations />
      <Methodology />
      <References />
      <ResearcherNote />
    </main>
  );
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -65% 0px", threshold: [0.12, 0.3, 0.6] },
    );

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [ids]);

  return [active, setActive];
}

function Navigation({ activeSection, menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-1 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="group flex max-w-[260px] flex-col leading-none">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy">AI Readiness</span>
          <span className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-500">Research publication</span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {sections.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`border-b-2 px-3 py-2 text-[13px] transition ${
                activeSection === id
                  ? "border-gold text-navy"
                  : "border-transparent text-slate-600 hover:border-slate-300 hover:text-navy"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="/publication.html" download className="download-link subtle">
            HTML
          </a>
          <a href="/report1.pdf" download className="download-link">
            <ArrowDownToLine className="size-4" />
            Report
          </a>
        </div>

        <button
          className="flex size-10 items-center justify-center border border-slate-300 text-navy xl:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 xl:hidden">
          <div className="grid gap-1">
            {sections.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`py-2 text-sm ${activeSection === id ? "font-semibold text-navy" : "text-slate-600"}`}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex gap-3 border-t border-slate-200 pt-4">
            <a href="/publication.html" download className="download-link subtle flex-1 justify-center">
              HTML
            </a>
            <a href="/report1.pdf" download className="download-link flex-1 justify-center">
              Report
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid min-h-[78vh] max-w-[1480px] grid-cols-1 gap-10 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="section-kicker">{publication.label}</p>
          <h1 className="mt-8 max-w-5xl text-balance font-serif text-5xl leading-[1.03] tracking-[-0.01em] text-navy md:text-7xl lg:text-8xl">
            {publication.title}
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-650 md:text-2xl md:leading-9">
            {publication.subtitle}
          </p>
          <div className="mt-9 max-w-3xl border-l-4 border-gold bg-slate-50 p-5 text-sm leading-7 text-slate-700">
            {publication.disclaimer}
          </div>
        </div>

        <aside className="self-end border border-slate-200 bg-slate-50 p-6 lg:p-8" aria-label="Publication metadata">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Publication profile</p>
          <dl className="mt-6 grid gap-5">
            <MetaTerm term="Author" value={publication.author} />
            <MetaTerm term="Institution" value={publication.institution} />
            <MetaTerm term="Programme" value={publication.programme} />
            <MetaTerm term="Composite index" value={`${compositeScore} / 100`} />
          </dl>
          <div className="mt-8 flex flex-col gap-3">
            <a href="/report1.pdf" download className="download-link justify-center">
              <ArrowDownToLine className="size-4" />
              Download full report
            </a>
            <a href="/publication.html" download className="download-link subtle justify-center">
              Download HTML publication
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function MetaTerm({ term, value }) {
  return (
    <div className="border-t border-slate-200 pt-4">
      <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">{term}</dt>
      <dd className="mt-2 text-base font-semibold text-navy">{value}</dd>
    </div>
  );
}

function ExecutiveSummary() {
  return (
    <PublicationSection id="overview" number="01" title="Executive Summary">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.55fr)]">
        <ArticleText paragraphs={executiveSummary.paragraphs} />
        <aside className="border-t-4 border-navy bg-white p-6 shadow-publication">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Analytical findings</p>
          <div className="mt-6 grid gap-5">
            {executiveSummary.findings.map((finding, index) => (
              <div key={finding} className="grid grid-cols-[44px_1fr] gap-4 border-t border-slate-200 pt-5">
                <span className="font-serif text-3xl text-gold">{index + 1}</span>
                <p className="text-sm leading-7 text-slate-700">{finding}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Callout title={strategicImperative.title} text={strategicImperative.core} />
        <div className="grid gap-4 md:grid-cols-3">
          {strategicImperative.forces.map((force) => (
            <div key={force.title} className="border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-navy">{force.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{force.text}</p>
            </div>
          ))}
        </div>
      </div>
    </PublicationSection>
  );
}

function ReadinessIndex() {
  const [selected, setSelected] = useState(indexScores[0]);
  const radarPoints = useMemo(() => getRadarPoints(indexScores.map((item) => item.score)), []);

  return (
    <PublicationSection id="readiness-index" number="02" title="Interactive Readiness Index">
      <div className="grid gap-10 xl:grid-cols-[minmax(300px,0.8fr)_minmax(0,1.2fr)]">
        <div className="border border-slate-200 bg-white p-6">
          <p className="section-kicker">Composite score</p>
          <div className="mt-5 flex items-end gap-3">
            <span className="font-serif text-7xl leading-none text-navy">{compositeScore}</span>
            <span className="pb-2 text-lg text-slate-500">/ 100</span>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-650">
            A score of 60 positions an organisation at the early-integration stage: active piloting, emerging data capability, and partial workforce development.
          </p>
          <RadarChart points={radarPoints} />
        </div>

        <div className="grid gap-4">
          {indexScores.map((item) => (
            <button
              key={item.dimension}
              onMouseEnter={() => setSelected(item)}
              onFocus={() => setSelected(item)}
              onClick={() => setSelected(item)}
              className={`w-full border p-5 text-left transition ${
                selected.dimension === item.dimension
                  ? "border-navy bg-white"
                  : "border-slate-200 bg-slate-50 hover:border-slate-400"
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-navy">{item.dimension}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.subIndicators}</p>
                </div>
                <span className="font-serif text-4xl text-navy">{item.score}</span>
              </div>
              <ScoreBar value={item.score} />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 border-l-4 border-gold bg-white p-6 shadow-publication">
        <h3 className="text-xl font-semibold text-navy">{selected.dimension}</h3>
        <p className="mt-3 text-base leading-8 text-slate-700">{selected.explanation}</p>
        <p className="mt-3 text-sm leading-7 text-slate-600">{selected.diagnostic}</p>
      </div>
    </PublicationSection>
  );
}

function RadarChart({ points }) {
  return (
    <div className="mt-8 flex justify-center">
      <svg viewBox="0 0 240 240" className="h-64 w-full max-w-[300px]" role="img" aria-label="Radar chart of four AI readiness dimensions">
        <g transform="translate(120 120)">
          {[35, 60, 85].map((radius) => (
            <polygon
              key={radius}
              points={`0,-${radius} ${radius},0 0,${radius} -${radius},0`}
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="1"
            />
          ))}
          <line x1="0" y1="-92" x2="0" y2="92" stroke="#cbd5e1" />
          <line x1="-92" y1="0" x2="92" y2="0" stroke="#cbd5e1" />
          <polygon points={points} fill="rgba(180, 139, 62, 0.22)" stroke="#a9792b" strokeWidth="2" />
          {indexScores.map((item, index) => {
            const angle = -90 + index * 90;
            const label = pointAt(angle, 112);
            return (
              <text key={item.dimension} x={label.x} y={label.y} textAnchor="middle" className="fill-slate-600 text-[9px]">
                {item.dimension.split(" ")[0]}
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

function getRadarPoints(values) {
  return values
    .map((value, index) => {
      const point = pointAt(-90 + index * 90, (value / 100) * 92);
      return `${point.x.toFixed(1)},${point.y.toFixed(1)}`;
    })
    .join(" ");
}

function pointAt(angle, radius) {
  const radians = (Math.PI / 180) * angle;
  return { x: Math.cos(radians) * radius, y: Math.sin(radians) * radius };
}

function DiagnosticFramework() {
  return (
    <PublicationSection id="framework" number="03" title="Four-Dimension Diagnostic Framework">
      <div className="grid gap-6 md:grid-cols-2">
        {indexScores.map((item) => (
          <article key={item.dimension} className="border border-slate-200 bg-white p-6">
            <div className="flex items-start justify-between gap-5">
              <h3 className="text-2xl font-semibold text-navy">{item.dimension}</h3>
              <span className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-600">{item.weight}</span>
            </div>
            <p className="mt-5 text-base leading-8 text-slate-700">{item.explanation}</p>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Diagnostic role</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.diagnostic}</p>
            </div>
          </article>
        ))}
      </div>
      <Callout
        title="Interaction effect"
        text="High Strategic Intent without Data Readiness produces AI roadmaps that cannot be operationalised at scale. Strong Digital Operations without Workforce Adaptability creates systems that workers route around rather than engage with."
      />
    </PublicationSection>
  );
}

function WorkforceAnalysis() {
  const [open, setOpen] = useState(workforceChallenges[0].title);

  return (
    <PublicationSection id="workforce" number="04" title="Workforce Transition Analysis">
      <ArticleText
        paragraphs={[
          "Workforce transition is the dimension of AI readiness that resists the project management logic that works reasonably well for technology implementation.",
          "Human capital transformation involves behavioural change, institutional culture, managerial psychology, and individual career anxiety — variables that respond to sustained investment and clear communication, not deployment timelines.",
          "Middle managers are the operational translation layer between executive AI strategy and frontline AI reality. When they lack a working conceptual model of AI capabilities and limitations, adoption stalls through the cumulative weight of familiar practices.",
        ]}
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-5">
        {workforceChallenges.map((challenge) => (
          <button
            key={challenge.title}
            onClick={() => setOpen(open === challenge.title ? "" : challenge.title)}
            className={`border p-5 text-left transition lg:min-h-[210px] ${
              open === challenge.title ? "border-navy bg-white" : "border-slate-200 bg-slate-50 hover:border-slate-400"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-navy">{challenge.title}</h3>
              <ChevronDown className={`mt-1 size-4 shrink-0 transition ${open === challenge.title ? "rotate-180" : ""}`} />
            </div>
            <p className={`mt-4 text-sm leading-7 text-slate-650 ${open === challenge.title ? "block" : "line-clamp-3"}`}>
              {challenge.text}
            </p>
          </button>
        ))}
      </div>
    </PublicationSection>
  );
}

function AdoptionSpectrum() {
  const [active, setActive] = useState(2);
  const stage = maturitySpectrum[active];

  return (
    <PublicationSection id="adoption" number="05" title="Enterprise AI Adoption Spectrum">
      <ArticleText
        paragraphs={[
          "Enterprise AI adoption has moved through an initial wave of enthusiasm into disciplined implementation: harder questions about data quality, workflow integration, model governance, and measurable return.",
          "The enterprises generating the most consistent AI value begin with narrow, high-frequency use cases before expanding to more complex applications.",
        ]}
      />

      <div className="mt-12 border border-slate-200 bg-white p-5 lg:p-7">
        <div className="grid gap-2 md:grid-cols-5">
          {maturitySpectrum.map((item, index) => (
            <button
              key={item.stage}
              onClick={() => setActive(index)}
              className={`border px-4 py-5 text-left transition ${
                active === index ? "border-navy bg-navy text-white" : "border-slate-200 bg-slate-50 text-navy hover:border-slate-400"
              }`}
            >
              <span className="text-sm font-semibold">{item.stage}</span>
            </button>
          ))}
        </div>
        <div className="mt-7 grid gap-6 lg:grid-cols-3">
          <DetailBlock label="Description" text={stage.description} />
          <DetailBlock label="Primary barrier" text={stage.barrier} />
          <DetailBlock label="Readiness signal" text={stage.signal} />
        </div>
      </div>
    </PublicationSection>
  );
}

function SMETransformation() {
  return (
    <PublicationSection id="sme" number="06" title="SME Transformation Analysis">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
        <ArticleText paragraphs={smeAnalysis.paragraphs} />
        <aside className="border border-slate-200 bg-white p-6">
          <p className="section-kicker">Structural constraints</p>
          <ol className="mt-5 grid gap-4">
            {smeAnalysis.constraints.map((constraint, index) => (
              <li key={constraint} className="grid grid-cols-[34px_1fr] gap-3 border-t border-slate-200 pt-4 text-sm leading-6 text-slate-700">
                <span className="font-serif text-2xl text-gold">{index + 1}</span>
                {constraint}
              </li>
            ))}
          </ol>
        </aside>
      </div>
      <Callout title="SME principle" text={smeAnalysis.principle} />
    </PublicationSection>
  );
}

function AdaptationModels() {
  return (
    <PublicationSection id="adaptation-models" number="07" title="Workforce Adaptation Models">
      <div className="grid gap-6 lg:grid-cols-3">
        {adaptationModels.map((model) => (
          <article key={model.model} className="border border-slate-200 bg-white p-6">
            <h3 className="text-2xl font-semibold text-navy">{model.model}</h3>
            <p className="mt-5 text-base leading-8 text-slate-700">{model.summary}</p>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Appropriate use</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{model.useCase}</p>
            </div>
          </article>
        ))}
      </div>
      <Callout
        title="Synthesis"
        text="The most effective workforce adaptation strategies are not ideologically committed to a single model. They match replacement, augmentation, and transformation approaches to the actual task and organisational context."
      />
    </PublicationSection>
  );
}

function Recommendations() {
  return (
    <PublicationSection id="recommendations" number="08" title="Policy and Operational Recommendations">
      <div className="grid gap-12">
        <div>
          <h3 className="subhead">Policy recommendation framework</h3>
          <div className="mt-6 overflow-x-auto border border-slate-200 bg-white">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead className="bg-slate-100 text-xs uppercase tracking-[0.14em] text-slate-500">
                <tr>
                  <th className="px-5 py-4 font-semibold">Recommendation</th>
                  <th className="px-5 py-4 font-semibold">Stakeholder</th>
                  <th className="px-5 py-4 font-semibold">Timeframe</th>
                  <th className="px-5 py-4 font-semibold">Priority</th>
                </tr>
              </thead>
              <tbody>
                {policyRecommendations.map((item) => (
                  <tr key={item.recommendation} className="border-t border-slate-200">
                    <td className="px-5 py-5 text-sm font-semibold text-navy">{item.recommendation}</td>
                    <td className="px-5 py-5 text-sm text-slate-650">{item.stakeholder}</td>
                    <td className="px-5 py-5 text-sm text-slate-650">{item.timeframe}</td>
                    <td className="px-5 py-5 text-sm text-slate-650">{item.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="subhead">Operational recommendations</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {operationalRecommendations.map((item, index) => (
              <article key={item.title} className="grid grid-cols-[48px_1fr] gap-5 border border-slate-200 bg-white p-5">
                <span className="font-serif text-3xl text-gold">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h4 className="text-lg font-semibold text-navy">{item.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-650">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PublicationSection>
  );
}

function Methodology() {
  return (
    <PublicationSection id="methodology" number="09" title="Methodology and Limitations">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.55fr)]">
        <div>
          <h3 className="subhead">Nature of the research</h3>
          <p className="mt-5 text-xl leading-9 text-slate-700">{methodology.nature}</p>
          <Callout title="Future research direction" text={methodology.future} />
        </div>
        <aside className="border border-slate-200 bg-white p-6">
          <p className="section-kicker">Explicit scope boundaries</p>
          <ul className="mt-6 grid gap-4">
            {methodology.limitations.map((limitation) => (
              <li key={limitation} className="border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700">
                {limitation}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </PublicationSection>
  );
}

function References() {
  return (
    <PublicationSection id="references" number="10" title="References">
      <p className="max-w-4xl text-base leading-8 text-slate-650">
        All references below are drawn from publicly available institutional research. No citations have been fabricated or attributed to sources that do not exist.
      </p>
      <div className="mt-8 columns-1 gap-8 md:columns-2">
        {references.map((reference) => (
          <p key={reference} className="mb-4 break-inside-avoid border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700">
            {reference}
          </p>
        ))}
      </div>
    </PublicationSection>
  );
}

function ResearcherNote() {
  return (
    <PublicationSection id="researcher-note" number="11" title="Researcher Note">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <ArticleText paragraphs={researcherNote} />
        <aside className="border-t-4 border-gold bg-white p-6 shadow-publication">
          <p className="section-kicker">Author</p>
          <h3 className="mt-4 text-3xl font-semibold text-navy">{publication.author}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-650">{publication.programme}</p>
          <p className="mt-1 text-sm leading-7 text-slate-650">{publication.institution}</p>
          <div className="mt-8 border-t border-slate-200 pt-5 text-sm leading-7 text-slate-650">
            This site is the primary interactive publication experience. The PDF is available only as a downloadable report artifact.
          </div>
        </aside>
      </div>
    </PublicationSection>
  );
}

function PublicationSection({ id, number, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-slate-200 px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p className="font-serif text-5xl text-slate-300">{number}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-500">Section</p>
          </div>
        </aside>
        <div>
          <div className="mb-10 max-w-5xl">
            <p className="section-kicker">Section {number}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-navy md:text-6xl">{title}</h2>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

function ArticleText({ paragraphs }) {
  return (
    <div className="max-w-4xl space-y-6 text-lg leading-9 text-slate-700">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function Callout({ title, text }) {
  return (
    <div className="mt-10 border-l-4 border-gold bg-white p-6 shadow-publication">
      <h3 className="text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-3 text-base leading-8 text-slate-700">{text}</p>
    </div>
  );
}

function ScoreBar({ value }) {
  return (
    <div className="mt-5 h-2 bg-slate-200" aria-hidden="true">
      <div className="h-full bg-navy" style={{ width: `${value}%` }} />
    </div>
  );
}

function DetailBlock({ label, text }) {
  return (
    <div className="border-t border-slate-200 pt-5">
      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-3 text-base leading-8 text-slate-700">{text}</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
