/**
 * Reusable use-case lists for solution categories (7–20 use cases each).
 * Used by hierarchy-seed.js. No "Automation" in solution or use case names.
 */
const solutionUseCases = {
  "AI Solutions - Marketing": [
    "Ad copy and campaign variant generation", "Audience segment suggestions from behavior", "Subject line and CTA A/B ideas",
    "Content repurposing across channel and format", "Lead scoring and next-best-action", "Campaign performance anomaly alerts",
    "Competitor and trend briefs from external sources", "Personalized email and in-app copy", "SEO and keyword opportunity from queries",
    "Social listening and sentiment for brand", "Attribution and incrementality insight", "Creative and asset tagging for reuse",
    "Landing page and form copy", "Event and webinar follow-up personalization",
  ],
  "AI Solutions - Sales": [
    "Meeting prep and account briefs from CRM and news", "Outreach and sequence copy by persona", "Deal and pipeline risk scoring",
    "Competitive battlecard and objection handling", "Quote and proposal clause suggestions", "Lead and contact enrichment",
    "Next steps and follow-up recommendations", "Territory and account prioritization", "Churn and expansion signal from usage",
    "Call and email sentiment and action items", "RFP and security questionnaire drafting", "Renewal and upsell conversation starters",
    "Objection and pricing response drafts", "Account research and stakeholder mapping",
  ],
  "AI Solutions - RevOps": [
    "Pipeline and forecast anomaly detection", "Lead and deal routing rules from patterns", "Data quality and duplicate detection",
    "Attribution and touchpoint weighting", "Sync and integration error triage", "Report and dashboard natural-language explanations",
    "Territory and capacity optimization", "Quote-to-cash exception flagging", "Funnel and stage conversion insights",
    "Tech stack and usage recommendations", "SLA and process breach prediction", "Segment and cohort definitions from behavior",
  ],
  "AI Solutions - Customer Support": [
    "Ticket summarization and suggested category", "Reply and resolution draft from KB", "Escalation and urgency scoring",
    "Deflection and self-service suggestions", "Sentiment and tone in threads", "Knowledge gap and article suggestions",
    "SLA and backlog risk alerts", "Customer and product feedback themes", "Canned response and macro suggestions",
    "Next-best-action for agent", "Root cause and trend from tickets", "Multilingual reply drafting",
  ],
  "AI Solutions - HR": [
    "Job description and role profile drafting", "Resume and application screening", "Onboarding and policy Q&A",
    "Employee sentiment and pulse themes", "Compliance and policy gap checks", "Leave and policy explanation drafts",
    "Org and role change impact summaries", "Training and L&D recommendations", "Exit and offboarding checklist personalization",
    "Diversity and representation metrics", "Compensation and level benchmarking", "Survey and feedback summarization",
  ],
  "AI Solutions - IT": [
    "Ticket summarization and routing suggestion", "Runbook and resolution draft from docs", "User and access request triage",
    "Outage and incident summary from logs", "License and asset usage recommendations", "Security and patch priority",
    "Change and release risk summary", "Vendor and renewal briefs", "Knowledge article draft from tickets",
    "Approval and exception recommendation", "Capacity and cost anomaly alerts", "FAQ and self-service answer generation",
  ],
  "AI Solutions - Finance": [
    "Variance and exception commentary", "Invoice and document field extraction", "Reconciliation and match suggestions",
    "Forecast and scenario narrative", "Audit and control finding summaries", "Expense and policy violation flagging",
    "Cash flow and liquidity alerts", "Board and management report narrative", "Contract and obligation extraction",
    "Anomaly and fraud signal from transactions", "Regulatory and accounting update briefs", "Intercompany and consolidation notes",
  ],
  "AI Solutions - Operations": [
    "Order and exception prioritization", "Inventory and reorder suggestions", "Vendor and delivery risk alerts",
    "Quality and defect pattern detection", "Schedule and capacity optimization", "Document and checklist extraction",
    "Returns and dispute reason coding", "Fulfillment and shipping exception triage", "Procurement and PO drafting",
    "Process bottleneck and cycle-time insight", "Supplier and lead-time alerts", "Safety and incident trend summaries",
  ],
  "AI Solutions - Legal": [
    "Contract clause extraction and comparison", "Matter and docket summary", "NDA and template first draft",
    "Obligation and deadline extraction", "Legal hold and discovery scope", "Regulatory and compliance brief",
    "Redline and change summary", "IP and trademark search summary", "Due diligence and disclosure review aid",
    "Policy and consent language drafting", "Dispute and claim summary", "E-signature and execution reminder",
  ],
  "AI Solutions - Product": [
    "User feedback and theme summarization", "PRD and spec section drafting", "Roadmap and prioritization rationale",
    "Experiment and A/B result narrative", "Competitive and market brief", "Release note and changelog draft",
    "Bug and request triage and tagging", "Persona and use case from research", "Pricing and packaging comparison",
    "Backlog and story refinement", "Analytics and usage insight", "Stakeholder and launch comms draft",
  ],
  "AI Solutions - Design": [
    "Design brief and requirement summary", "Copy and microcopy for UI", "Accessibility and contrast check",
    "Asset and component tagging", "Feedback and review theme summarization", "Localization and variant suggestion",
    "Mood board and reference organization", "Design system usage recommendation", "User research insight synthesis",
    "Handoff and spec clarification", "Competitive and benchmark summary", "Prototype and flow copy suggestions",
  ],
  "AI Solutions - Executive Assistants": [
    "Meeting brief and attendee summary", "Email triage and reply draft", "Travel and itinerary summary",
    "Calendar conflict and buffer suggestion", "Document and deck summary", "Expense and receipt categorization",
    "Follow-up and action item extraction", "Vendor and invoice summary", "Stakeholder and contact brief",
    "Agenda and prep doc drafting", "Gatekeeping and priority suggestion", "Recurring task and reminder logic",
  ],
  "AI Solutions - Executives": [
    "Board and investor pack narrative", "KPI and exception summary", "Team and org insight synthesis",
    "Crisis and incident brief", "Strategy and scenario narrative", "Comp and talent review summary",
    "Competitive and market digest", "Deal and pipeline exception alert", "Regulatory and risk brief",
    "M&A and corp dev summary", "Stakeholder and comms recommendation", "Decision and approval summary",
  ],
  "AI Solutions - Customer Success": [
    "Health and usage trend summary", "QBR and business review narrative", "Churn and at-risk signal",
    "Adoption and expansion recommendation", "Stakeholder and champion mapping", "Support and ticket theme summary",
    "Renewal and expansion conversation draft", "Success plan and milestone summary", "Feedback and NPS theme",
    "Training and onboarding gap detection", "Executive sponsor brief", "Contract and entitlement summary",
  ],
  "AI Solutions - Recruiting / Talent Acquisition": [
    "Job description and posting optimization", "Resume and profile screening", "Candidate outreach and message draft",
    "Interview question and scorecard suggestion", "Pipeline and source effectiveness", "Diversity and slate analysis",
    "Employer brand and review themes", "Offer and comp benchmarking", "Scheduling and candidate comms",
    "Skills and role matching", "Recruiter and hiring manager brief", "Assessment and screen summary",
  ],
  "AI Solutions - Procurement": [
    "RFP and RFI section drafting", "Vendor and quote comparison", "Contract and clause extraction",
    "Spend and category insight", "Supplier risk and performance summary", "PO and requisition exception",
    "Payment and terms recommendation", "Diversity and sustainability scoring", "Sourcing and negotiation brief",
    "Compliance and policy check", "Renewal and renegotiation alert", "Savings and opportunity identification",
  ],
  "AI Solutions - Security (InfoSec)": [
    "Alert triage and prioritization", "Incident and threat summary", "Policy and control gap analysis",
    "Vendor and questionnaire response draft", "Vulnerability and patch priority", "Access and entitlement review aid",
    "Security awareness and training content", "Compliance and framework mapping", "Forensics and timeline summary",
    "Threat intel and IOC summary", "Audit finding and remediation narrative", "Runbook and playbook suggestion",
  ],
  "AI Solutions - Data & Analytics": [
    "Query and metric explanation", "Data quality and anomaly flagging", "Report and dashboard narrative",
    "Segment and cohort suggestion", "Schema and lineage summary", "Self-serve and catalog recommendation",
    "Experiment and A/B result summary", "Forecast and trend narrative", "Governance and policy check",
    "ETL and pipeline error triage", "Natural language to query", "Insight and recommendation from data",
  ],
  "AI Solutions - Engineering": [
    "Code review and comment suggestion", "PR and commit summary", "Documentation and README draft",
    "Incident and log summary", "Test case and scenario suggestion", "Dependency and security alert triage",
    "Refactor and pattern recommendation", "API and spec documentation", "Error and stack trace explanation",
    "Sprint and backlog summary", "Architecture decision record draft", "On-call and runbook summary",
  ],
  "AI Solutions - DevOps": [
    "Deploy and build failure triage", "Runbook and remediation suggestion", "Cost and usage anomaly",
    "Incident and post-mortem draft", "Log and metric correlation", "Secrets and config recommendation",
    "SLO and error budget narrative", "Pipeline and gate suggestion", "Capacity and scaling recommendation",
    "Vulnerability and patch priority", "Release note and changelog", "Alert and on-call summary",
  ],
  "AI Solutions - Quality Assurance": [
    "Test case and scenario generation", "Bug and defect prioritization", "Regression and risk suggestion",
    "Test data and edge case idea", "Result and coverage summary", "Accessibility and a11y check",
    "Release and sign-off narrative", "Flaky and failure pattern detection", "Requirements to test trace",
    "Performance and load insight", "User journey and scenario draft", "Bug report and steps summary",
  ],
  "AI Solutions - Supply Chain": [
    "Demand and forecast adjustment", "Inventory and reorder suggestion", "Supplier and delivery risk",
    "Order and exception prioritization", "Carrier and freight recommendation", "Quality and defect pattern",
    "Lead time and capacity insight", "Cost and rate anomaly", "Document and BOL extraction",
    "Returns and reverse logistics reason", "Compliance and sustainability score", "Supplier and contract summary",
  ],
  "AI Solutions - Risk Management": [
    "Risk event and loss summary", "Control and assessment narrative", "Vendor and third-party risk score",
    "Exception and limit alert", "Scenario and stress narrative", "Insurance and claim summary",
    "Regulatory and framework mapping", "Emerging risk brief", "Audit and finding remediation",
    "KRI and threshold recommendation", "Credit and exposure summary", "Operational risk theme",
  ],
  "AI Solutions - Compliance": [
    "Policy and control gap analysis", "Evidence and finding summary", "Regulatory change brief",
    "Training and attestation content", "Exception and remediation narrative", "Audit and exam prep",
    "Monitoring and testing suggestion", "Investigation and case summary", "Filing and disclosure draft",
    "Risk and control mapping", "Compliance calendar and deadline", "Vendor and third-party compliance",
  ],
  "AI Solutions - Communications (Internal / Corporate)": [
    "Internal comms and announcement draft", "Crisis and holding statement", "Executive and leader message",
    "Survey and listening theme summary", "Channel and audience recommendation", "PR and media brief",
    "Event and all-hands narrative", "Policy and change comms draft", "Reputation and sentiment summary",
    "Stakeholder and cascade suggestion", "Newsletter and digest content", "FAQ and Q&A from feedback",
  ],
  "AI Solutions - Facilities / Workplace": [
    "Maintenance and work order prioritization", "Space and utilization insight", "Visitor and access summary",
    "Vendor and contract comparison", "Move and project timeline draft", "Safety and inspection finding",
    "Asset and inventory summary", "Request and ticket triage", "Capacity and booking suggestion",
    "Compliance and policy check", "Cost and spend insight", "Emergency and evacuation brief",
  ],
  "AI Solutions - Learning & Development": [
    "Course and curriculum suggestion", "Learning path and skill gap", "Assessment and quiz question",
    "Training and compliance content", "Completion and engagement insight", "Certification and credential tracking",
    "Feedback and evaluation themes", "Content and modality recommendation", "Manager and cohort summary",
    "Refresher and reinforcement suggestion", "ROI and impact narrative", "Localization and accessibility",
  ],
  "AI Solutions - Payroll": [
    "Payroll exception and variance flag", "Tax and withholding recommendation", "Timesheet and approval triage",
    "W-2 and year-end summary", "Deduction and garnishment check", "Multi-country and jurisdiction guidance",
    "Reconciliation and discrepancy narrative", "Audit and compliance brief", "Employee and contractor classification",
    "Pay schedule and run recommendation", "Correction and adjustment draft", "Reporting and disclosure narrative",
  ],
  "AI Solutions - Tax": [
    "Return and provision narrative", "Jurisdiction and nexus summary", "Regulatory and rate change brief",
    "Document and workpaper extraction", "Audit and notice response draft", "Transfer pricing and intercompany",
    "Filing and deadline calendar", "VAT and indirect tax check", "Effective rate and variance",
    "Compliance and disclosure suggestion", "Research and position summary", "Estimate and payment recommendation",
  ],
  "AI Solutions - Investor Relations": [
    "Earnings and guidance narrative", "Shareholder and analyst Q&A draft", "Proxy and governance summary",
    "Investor and roadshow brief", "Disclosure and filing draft", "Peer and benchmark comparison",
    "Sentiment and ownership insight", "Event and meeting prep", "Report and presentation narrative",
    "Regulatory and listing requirement", "Crisis and rapid response draft", "Stakeholder and targeting suggestion",
  ],
  "AI Solutions - Business Development": [
    "Partnership and alliance brief", "Due diligence and M&A summary", "GTM and go-to-market narrative",
    "Deal and term comparison", "Stakeholder and champion mapping", "Outreach and pitch draft",
    "Competitive and market positioning", "Pipeline and opportunity prioritization", "Contract and JV summary",
    "Integration and Day One narrative", "Target and account recommendation", "ROI and synergy narrative",
  ],
  "AI Solutions - Partnerships": [
    "Partner and deal brief", "MDF and co-marketing recommendation", "Contract and incentive summary",
    "Partner health and performance", "Enablement and certification tracking", "Pipeline and attribution",
    "Conflict and eligibility check", "Partner comms and update draft", "Tier and program suggestion",
    "Support and escalation summary", "Recruitment and onboarding narrative", "Co-sell and referral insight",
  ],
  "AI Solutions - Channel & Alliances": [
    "Channel pipeline and deal summary", "MDF and incentive recommendation", "Partner and deal registration triage",
    "Enablement and training content", "Conflict and overlap detection", "Performance and tier suggestion",
    "Co-marketing and campaign draft", "Forecast and quota insight", "Partner and program health",
    "Certification and readiness tracking", "Incentive and SPIFF calculation", "Stakeholder and recruitment brief",
  ],
  "AI Solutions - Strategy": [
    "Strategic initiative and scenario narrative", "Competitive and market brief", "M&A and integration summary",
    "OKR and plan narrative", "Board and exec pack insight", "Driver and sensitivity analysis",
    "Portfolio and performance summary", "Planning and budget narrative", "Risk and opportunity theme",
    "Stakeholder and alignment suggestion", "Benchmark and peer comparison", "Decision and option summary",
  ],
  "AI Solutions - Program & Project Management (PMO)": [
    "Project and status summary", "Risk and issue narrative", "Resource and capacity recommendation",
    "Stakeholder and comms draft", "Milestone and deliverable tracking", "Change and impact summary",
    "Portfolio and prioritization insight", "Retrospective and lesson summary", "Schedule and dependency alert",
    "Budget and variance narrative", "Governance and gate recommendation", "Report and dashboard narrative",
  ],
  "AI Solutions - Vendor Management": [
    "Vendor and contract summary", "Performance and SLA narrative", "Risk and compliance score",
    "RFP and comparison draft", "Renewal and renegotiation brief", "Spend and category insight",
    "Onboarding and offboarding checklist", "Exception and dispute summary", "Tier and program recommendation",
    "Audit and assessment narrative", "Fourth-party and subprocessor risk", "SLA and penalty calculation",
  ],
  "AI Solutions - Technical Writing / Documentation": [
    "API and developer doc draft", "Release note and changelog", "User guide and help content",
    "Technical and spec summary", "Localization and terminology", "Version and diff narrative",
    "Tutorial and how-to suggestion", "Search and discoverability", "Review and feedback theme",
    "Template and reuse recommendation", "Audience and level adjustment", "Diagram and example suggestion",
  ],
  "AI Solutions - Research & Development": [
    "Experiment and protocol summary", "Literature and patent brief", "IP and prior art summary",
    "Regulatory and submission narrative", "Lab and data insight", "Publication and abstract draft",
    "Collaboration and finding synthesis", "Safety and compliance check", "Sample and result tracking",
    "Grant and proposal narrative", "Equipment and resource recommendation", "Timeline and milestone narrative",
  ],
  "AI Solutions - Brand": [
    "Brand voice and guideline check", "Campaign and creative brief", "Asset and usage recommendation",
    "Monitoring and sentiment summary", "Approval and compliance check", "Trademark and legal summary",
    "Localization and market adaptation", "Competitor and category comparison", "Stakeholder and review narrative",
    "Creative and copy suggestion", "Consistency and governance", "Crisis and reputation brief",
  ],
  "AI Solutions - Events": [
    "Agenda and session summary", "Speaker and attendee brief", "Registration and follow-up personalization",
    "Sponsor and exhibitor recommendation", "Post-event and feedback theme", "Logistics and run-of-show",
    "Content and handout suggestion", "Networking and match recommendation", "Budget and ROI narrative",
    "Crisis and contingency brief", "Localization and accessibility", "Marketing and promotion draft",
  ],
  "AI Solutions - Community": [
    "Member and engagement insight", "Moderation and policy suggestion", "Content and program recommendation",
    "Sentiment and theme from discussions", "Advocate and ambassador identification", "Event and chapter summary",
    "Gamification and recognition suggestion", "Onboarding and welcome personalization", "Feedback and survey theme",
    "Conflict and escalation triage", "Growth and retention narrative", "Localization and inclusion check",
  ],
  "AI Solutions - Localization": [
    "Translation and TMS suggestion", "Terminology and glossary check", "Locale and market adaptation",
    "QA and linguistic finding summary", "Source and reuse recommendation", "Regional compliance check",
    "Content and asset prioritization", "Vendor and quote comparison", "Audience and tone adjustment",
    "Release and sync summary", "Cost and efficiency insight", "Consistency and brand check",
  ],
  "AI Solutions - ESG / Sustainability": [
    "Disclosure and framework narrative", "Carbon and emission calculation", "Supplier and value chain score",
    "Regulatory and standard brief", "Report and disclosure draft", "Goal and target tracking",
    "Risk and opportunity theme", "Stakeholder and investor narrative", "Audit and assurance summary",
    "Social and governance mapping", "Improvement and initiative suggestion", "Benchmark and peer comparison",
  ],
  "AI Solutions - Diversity, Equity & Inclusion": [
    "DEI metric and representation narrative", "Pay equity and benchmarking", "Recruitment and pipeline insight",
    "Survey and sentiment theme", "Program and ERG recommendation", "Policy and bias check",
    "Mentorship and sponsorship matching", "Training and content suggestion", "Retention and advancement insight",
    "Stakeholder and leader brief", "Inclusion and belonging theme", "Goal and accountability narrative",
  ],
  "AI Solutions - Contract Management": [
    "Contract and clause extraction", "Obligation and renewal summary", "Template and playbook suggestion",
    "Redline and change narrative", "Counterparty and risk summary", "Approval and exception triage",
    "Repository and search recommendation", "Compliance and audit narrative", "Amendment and termination draft",
    "E-signature and execution reminder", "Notice and deadline alert", "Renewal and renegotiation brief",
  ],
  "AI Solutions - Personal Productivity": [
    "Inbox and task prioritization", "Meeting and email summary", "Follow-up and reminder suggestion",
    "Template and snippet recommendation", "Cross-app workflow idea", "Calendar and focus block suggestion",
    "Note and knowledge organization", "Delegation and handoff draft", "Recurring and habit tracking",
    "Search and find across apps", "Time and context switching aid", "Digest and notification triage",
  ],
  "Email Marketing": [
    "Drip Campaigns", "List Segmentation", "Email Triggers", "A/B Test Setup", "Unsubscribe Handling",
    "Email-to-CRM Sync", "Welcome Series", "Re-engagement Campaigns", "Transactional Email", "Email Analytics",
    "Deliverability Monitoring", "Dynamic Content", "Campaign Scheduling", "Bounce Handling", "List Hygiene",
  ],
  "CRM Management": [
    "Deal Stage Sync", "Contact Sync", "Lead to Opportunity", "Pipeline Reporting", "Activity Logging",
    "Data Enrichment", "Duplicate Merge", "Custom Object Sync", "Report Distribution", "Dashboard Refresh",
    "Field Sync", "Audit Trail", "Lead Assignment", "Deal Splitting", "Pipeline Hygiene",
  ],
  "Lead Management": [
    "Lead Capture", "Lead Scoring", "Lead Routing", "Lead Assignment", "Lead Enrichment",
    "Lead Handoff to Sales", "Source Attribution", "Response Time Tracking", "Lead Recycling",
    "MQL to SQL Conversion", "Lead Segmentation", "Lead Nurturing", "Lead Dedup", "Lead Status Sync",
  ],
  "Marketing Management": [
    "Campaign Attribution", "Funnel Visualization", "Channel ROI", "UTM Sync", "Marketing Dashboards",
    "Cohort Analysis", "Conversion Path", "Anomaly Alerts", "Benchmarking", "Forecasting",
    "Experiment Tracking", "Data Warehouse Sync", "Channel Mix", "Budget Tracking", "Campaign Performance",
  ],
  "Sales Management": [
    "Pipeline Reporting", "Forecast", "Stage Change Alerts", "Deal Assignment", "Win/Loss Sync",
    "Territory Assignment", "Quota Tracking", "Commission Calc", "Pipeline Hygiene", "Rolling Forecast",
    "Deal Splitting", "Pipeline Visibility", "Rep Performance", "Deal Aging", "Close Date Tracking",
  ],
  "Content Management": [
    "Content Calendar Sync", "Content Distribution", "Blog Publishing", "Content Repurposing",
    "Editorial Workflow", "Content Approval", "Content Performance Tracking", "Content Localization",
    "Content Refresh", "Guest Post Tracking", "Content ROI", "Search Optimization", "Asset Library",
    "Version Control", "Publish Scheduling",
  ],
  "Support Management": [
    "Ticket Creation", "Auto-routing", "Status Sync", "SLA Tracking", "Escalation Rules",
    "Customer Reply", "CSAT Sync", "Knowledge Base Sync", "Deflection Tracking", "Resolution Time",
    "Channel Routing", "Agent Performance", "Canned Responses", "Ticket Merge", "SLA Pause",
  ],
  "Customer Management": [
    "Health Score", "Usage Alerts", "Renewal Reminders", "Stakeholder Mapping", "NPS Follow-up",
    "Upsell Triggers", "At-risk Alerts", "QBR Prep", "Success Plan", "Expansion Signals",
    "Customer Journey", "Touchpoint Sync", "Churn Prevention", "Expansion Pipeline",
  ],
  "Recruitment Management": [
    "Applicant Tracking", "Resume Parsing", "Interview Scheduling", "Candidate Communication",
    "Scorecard Sync", "Offer Letter", "Background Check", "Pipeline Stages", "Source Attribution",
    "Time-to-Hire", "Reference Check", "Diversity Tracking", "Job Posting Sync", "Candidate Nurture",
  ],
  "HR": [
    "New Hire Checklist", "System Provisioning", "Training Assignment", "Benefits Enrollment",
    "Policy Acknowledgment", "Offboarding", "Exit Checklist", "Access Revocation", "Performance Review",
    "Goal Cascade", "Compliance Training", "Employee Data Sync", "Org Chart Sync", "Headcount Reporting",
  ],
  "Employee Management": [
    "Profile Sync", "Directory Update", "Org Change", "Manager Change", "Timesheet Sync",
    "PTO Request", "Approval Workflow", "Leave Balance", "Payroll Export", "Compliance Alerts",
    "Audit Trail", "Data Quality", "Role Change", "Location Update", "Badge Access",
  ],
  "Financial Management": [
    "Invoice Capture", "Approval Workflow", "Payment Run", "Reconciliation", "Expense Sync",
    "Budget vs Actual", "P&L", "Cash Flow", "KPI Dashboards", "Variance Alerts",
    "Close Checklist", "Audit Trail", "Journal Entry", "Intercompany", "Board Package",
  ],
  "Invoice Management": [
    "Invoice Capture", "Approval Workflow", "Vendor Sync", "Payment Run", "Reconciliation",
    "Duplicate Detection", "PO Match", "Expense Sync", "Payment Reminder", "1099 Prep",
    "Three-way Match", "AR Reconciliation", "Vendor Portal", "Payment Terms", "Dispute Handling",
  ],
  "Document Management": [
    "Document Ingestion", "Version Control", "Approval Workflow", "E-signature", "Template Merge",
    "Retention Policy", "Full-Text Search", "Archive", "Check-out Check-in", "Metadata Sync",
    "Audit Trail", "Distribution", "Expiry Alerts", "Template Library", "Redaction",
  ],
  "Project Management": [
    "Task Creation", "Status Sync", "Assignee Sync", "Milestone Tracking", "Time Logging",
    "Report Distribution", "Deadline Alerts", "Dependency Tracking", "Sprint Sync", "Backlog Grooming",
    "Capacity Planning", "Retrospective", "Resource Allocation", "Scope Change", "Risk Register",
  ],
  "Task Management": [
    "Task Create", "Due Date", "Recurring Task", "Reminder", "Delegate Task", "Status Update",
    "Checklist", "Priority", "Project Group", "Completion Log", "Sync to Calendar", "Overdue Alert",
    "Subtasks", "Time Estimate", "Dependencies",
  ],
  "Reporting Management": [
    "Report Schedule", "Data Pull", "Dashboard Refresh", "Distribution", "KPI Summary",
    "Exception Highlight", "Board Deck", "Slack/Email Alerts", "Export", "Custom Metrics",
    "Trend Analysis", "Benchmarking", "Drill-down", "Scheduled Delivery", "Role-based Views",
  ],
  "Compliance Management": [
    "Policy Acknowledgment", "Training Assignment", "Audit Trail", "Deadline Calendar",
    "Evidence Collection", "Compliance Checklist", "Regulatory Filing", "Exception Reporting",
    "Remediation", "Attestation", "Document Retention", "Audit Request", "Control Testing", "Finding Tracking",
  ],
  "Contract Management": [
    "Contract Request", "Approval Workflow", "E-signature", "Renewal Reminder", "Obligation Tracking",
    "Amendment", "Template Selection", "Audit Extract", "Obligation Calendar", "Termination",
    "Repository", "Redline Tracking", "Counterparty Management", "Notice Period", "Auto-renewal Flag",
  ],
  "IT Management": [
    "Ticket Creation", "Auto-routing", "SLA Tracking", "User Provisioning", "Access Review",
    "License Tracking", "Asset Register", "Vendor Renewal", "Runbook Triggers", "Escalation",
    "Change Request", "Audit Report", "Patch Tracking", "Certificate Expiry", "Capacity Alerts",
  ],
  "Data Management": [
    "CRM Sync", "Data Cleansing", "Field Mapping", "Custom Object Sync", "Data Enrichment",
    "Duplicate Merge", "Data Warehouse Load", "Report", "Data Quality Rules", "Sync Monitoring",
    "Audit Trail", "Data Governance", "Schema Mapping", "Incremental Sync", "Error Handling",
  ],
  "Meeting Management": [
    "Meeting Schedule", "Conflict Check", "Agenda Send", "Attendee Confirm", "Recording",
    "Notes Distribution", "Action Items", "Follow-up Meeting", "Room Booking", "Buffer Time",
    "Recurring Series", "Calendar Share", "No-show Follow-up", "Prep Reminder", "Recap Email",
  ],
  "Email Management": [
    "Inbox Rules", "Email to Ticket", "Email to CRM", "Template Reply", "Follow-up Reminder",
    "Send on Behalf", "Signature Update", "Archive", "Priority Flag", "Out of Office",
    "Delegate Inbox", "Draft Response", "Thread Tracking", "Attachment Handling",
  ],
  "Notification Management": [
    "Alert Trigger", "Slack Notify", "Email Notify", "SMS Notify", "Digest Email",
    "Threshold Alert", "Escalation Notify", "Status Update", "Approval Request", "Reminder",
    "SLA Warning", "Resolution Confirm", "Channel Routing", "Quiet Hours", "Ack Required",
  ],
  "Event Management": [
    "Registration to CRM", "Event Reminders", "Check-in", "Post-Event Follow-up", "Speaker Coordination",
    "Room Booking", "Catering", "Session Feedback", "Badge", "Waitlist",
    "Event Reporting", "Webinar Follow-up", "Capacity Management", "Cancellation", "No-show Handling",
  ],
  "Payroll": [
    "Timesheet Sync", "Payroll Export", "Bonus Input", "Tax Withholding", "Direct Deposit",
    "Pay Stub", "W-2 Distribution", "Leave Accrual", "Overtime Calc", "Reimbursement",
    "Payroll Reconciliation", "Deduction Sync", "Garnishments", "Pay Schedule", "Correction Run",
  ],
  "Accounting": [
    "Journal Entry", "Reconciliation", "Close Checklist", "Variance Alerts", "P&L",
    "Balance Sheet", "Cash Flow", "Audit Trail", "SOX Controls", "Intercompany",
    "Consolidation", "Board Package", "Flash Report", "Segment Reporting", "Driver Analysis",
  ],
  "Procurement": [
    "PO Creation", "Approval Workflow", "Vendor Onboarding", "Three-way Match", "Requisition",
    "Receiving", "Spend Analysis", "Contract Sync", "Supplier Portal", "Catalog Management",
    "Sourcing", "Supplier Performance", "Blanket PO", "Receiving Match", "Savings Tracking",
  ],
  "Legal Management": [
    "Contract Lifecycle", "E-signature", "Matter Open", "Deadline Docket", "Document Assembly",
    "Obligation Calendar", "Renewal Reminder", "Approval Workflow", "Conflict Check", "Audit Trail",
    "Template Library", "Archive", "Hold Notice", "Production Set",
  ],
  "Social Media Management": [
    "Post Scheduling", "Engagement Alerts", "Mention Tracking", "Inbox Unification", "Social Listening",
    "Hashtag Monitoring", "Content Curation", "Social ROI", "Crisis Alerts", "Influencer Outreach",
    "Community Moderation", "Social Proof Collection", "Response Templates", "Analytics Sync",
  ],
  "Advertising Management": [
    "Ad Lead Sync", "Conversion Tracking", "Audience Sync", "Ad Spend Reporting", "Cross-Platform Sync",
    "Remarketing Lists", "Lead Form to CRM", "ROAS Tracking", "Budget Alerts", "Creative Testing",
    "Attribution Modeling", "Negative Keyword Sync", "Campaign Pause", "Audience Refresh", "Performance Alerts",
  ],
  "Survey Management": [
    "Survey Distribution", "Response Collection", "NPS Sync", "CSAT Sync", "Feedback Triage",
    "Result Sync to CRM", "Pulse Survey", "Segment", "Reminder", "Analytics",
    "Report", "Trend", "Anonymous Response", "Skip Logic", "Survey Close",
  ],
  "Appointment Management": [
    "Appointment Book", "Confirmation", "Reminder", "Reschedule", "No-show Follow-up",
    "Calendar Sync", "Capacity", "Recurring", "Cancellation", "Waitlist",
    "Buffer Time", "Timezone", "Resource Block", "Double-book Prevent", "Reminder Sequence",
  ],
  "Contact Management": [
    "Contact Create", "Profile Update", "Deduplication", "Enrichment", "Segment Sync",
    "Activity Log", "Merge", "Import/Export", "List Sync", "Tag Assignment",
    "Source Attribution", "Audit Trail", "Opt-in Tracking", "Preference Center",
  ],
  "Account Management": [
    "Health Score", "Usage Alerts", "QBR Prep", "Renewal Reminders", "Stakeholder Mapping",
    "Upsell Triggers", "At-risk Alerts", "Success Plan", "Expansion Signals", "Support Ticket Sync",
    "NPS Follow-up", "Customer Journey", "Executive Sponsor", "Adoption Tracking",
  ],
  "Order Management": [
    "Order Ingest", "Status Sync", "Fulfillment Assign", "Backorder", "Cancel Refund",
    "Order Edit", "Multi-currency", "Tax Calc", "Shipping Method", "Gift Message",
    "Split Order", "Order Notes", "Order Hold", "Partial Ship", "Return Request",
  ],
  "Inventory Management": [
    "Stock Level Sync", "Reorder Alerts", "Cycle Count", "Multi-location Balance", "Receiving",
    "Transfer", "Valuation", "Expiry Alerts", "Demand Forecasting", "Supplier Replenishment",
    "Inventory Reconciliation", "Low Stock Alert", "Lot Tracking", "Dead Stock", "Safety Stock",
  ],
  "Training Management": [
    "Course Assignment", "Completion Tracking", "Certification", "Compliance Training", "Skill Matrix",
    "Learning Path", "Training Requests", "L&D Budget", "Quiz Completion", "Video Library",
    "Development Plan", "Mentorship Matching", "Refresher", "Expiry Reminder", "Credits Tracking",
  ],
  "User Management": [
    "Onboarding Provisioning", "Offboarding Deprovisioning", "Role Change", "App Access", "SSO Sync",
    "Group Membership", "License Assignment", "Approval Workflow", "Bulk Provisioning", "Audit Trail",
    "Access Review", "Deprovision", "MFA Enforcement", "Password Reset",
  ],
  "File & Folder Management": [
    "File Sync", "Folder Permissions", "Version Control", "Archive", "Share",
    "Template Distribution", "Backup", "Migration", "Search Index", "Approval Workflow",
    "Retention", "Audit", "Check-out", "Expiry", "Watermark",
  ],
  "Communication Management": [
    "Message Sync", "Channel Routing", "Template Personalization", "Bulk Messaging", "Status Update",
    "Internal Alerts", "Follow-up", "Escalation Notify", "Digest", "Preference Center",
    "Unsubscribe", "Reply Handling", "Thread Archive", "Translation", "Delivery Status",
  ],
  "Webinar Management": [
    "Registration to CRM", "Reminder", "Recording Archive", "Follow-up", "Attendance Sync",
    "Q&A Export", "Certificate", "No-show Follow-up", "Replay Delivery", "Survey",
    "Lead Scoring", "Nurture Trigger", "Poll Results", "Handout Distribution", "Waitlist",
  ],
  "Newsletter Management": [
    "List Sync", "Segment", "Schedule", "Unsubscribe", "A/B Test",
    "Open/Click Sync", "Deliverability", "Template", "Personalization", "Re-engagement",
    "Analytics", "Preference Center", "Bounce Handling", "Send Time Optimization",
  ],
  "SMS Management": [
    "SMS Trigger", "Reply Handling", "Opt-in/Opt-out", "Template", "Campaign",
    "Two-way Sync", "Delivery Status", "Segment", "Reminder", "Alert",
    "Conversation Log", "Compliance", "Keyword Response", "Fallback to Email",
  ],
  "Reporting": [
    "Report Schedule", "Data Pull", "Dashboard Refresh", "Distribution", "KPI Summary",
    "Board Deck", "Slack/Email Alerts", "Export", "Variance Commentary", "Trend",
    "Benchmark", "Custom Metrics", "Scheduled Run", "Parameter Refresh",
  ],
  "Partner & Channel Marketing": [
    "Co-marketing campaign launch", "Partner lead registration and routing", "MDF request and approval",
    "Partner portal content sync", "Channel performance dashboards", "Partner certification tracking",
    "Co-sell opportunity handoff", "Referral payout calculation", "Partner tier and incentive rules",
    "Channel conflict detection", "Partner enablement content distribution", "Joint campaign attribution",
    "Partner pipeline visibility", "Rebate and SPIFF accrual",
  ],
  "Support Ops & Capacity": [
    "Forecast demand and staffing levels", "Shift and coverage planning", "Queue and backlog visibility",
    "SLA breach prediction and alerts", "Agent utilization and availability", "Peak load scaling triggers",
    "Knowledge gap identification", "Canned response and macro usage", "Handle time and wrap-up tracking",
    "Channel mix and volume trends", "Escalation rate and root cause", "Customer effort and deflection metrics",
    "Schedule adherence and time-off", "Real-time staffing adjustments",
  ],
  "Change & Release": [
    "Change request submission and approval", "Release calendar and dependency view", "Deployment runbook triggers",
    "Rollback and rollforward procedures", "CAB and stakeholder notification", "Post-change verification checks",
    "Environment parity and config drift", "Release notes and comms", "Freeze window enforcement",
    "Impact and risk assessment", "Backout plan documentation", "Change success and failure tracking",
  ],
  "Asset & License": [
    "Software license allocation and reclaim", "Hardware asset lifecycle tracking", "Compliance and true-up reconciliation",
    "Vendor renewal and usage alerts", "Employee asset assignment and return", "Cost center and chargeback",
    "Unused or underused license identification", "Bulk provisioning and deprovisioning", "Warranty and support expiry",
    "Asset discovery and inventory sync", "Approval workflow for high-cost items", "Depreciation and amortization feed",
  ],
  "Backup & Recovery": [
    "Backup job success and failure alerts", "Retention and archive policy enforcement", "Restore test and validation",
    "RTO/RPO monitoring and reporting", "Offsite and cross-region copy status", "Backup size and growth trends",
    "Recovery drill scheduling", "Compliance and audit evidence", "Storage tier and cost visibility",
  ],
  "Service Catalog": [
    "Request fulfillment and approval", "Catalog item provisioning", "SLA and delivery tracking",
    "Self-service request status", "Standard vs non-standard routing", "Consumption and usage reporting",
    "Catalog item retirement and deprecation", "Approver delegation and escalation", "Integration with asset and license",
  ],
  "Expense Management": [
    "Expense report submission and approval", "Receipt capture and matching", "Policy violation flagging",
    "Corporate card reconciliation", "Per diem and mileage calculation", "Multi-currency and exchange",
    "Reimbursement and payment status", "Audit trail and exception reporting", "Spend by category and department",
    "Delegate and proxy submission", "Expense to project or client allocation", "Duplicate and outlier detection",
  ],
  "Payment Management": [
    "Payment run creation and approval", "Vendor bank detail validation", "Failed payment retry and notification",
    "Payment method and timing optimization", "Reconciliation with bank statements", "Multi-entity and multi-currency",
    "Payment batch and cutoff scheduling", "Fraud and duplicate check", "Disbursement reporting and audit",
  ],
  "Corporate Governance": [
    "Board meeting materials distribution", "Resolution and minute tracking", "Director onboarding and compliance",
    "Committee charter and membership", "Disclosure control and sign-off", "Entity and subsidiary governance",
    "Annual meeting and proxy prep", "Conflict of interest and questionnaire", "Policies and attestation",
  ],
  "E-signature & Execution": [
    "Document send for signature", "Signing order and reminder", "Completed document storage and audit",
    "Bulk send and template usage", "Embedded signing in workflow", "Expired or voided document handling",
    "Counterparty identity and consent", "Compliance and legal hold", "Integration with contract and HR docs",
  ],
  "Pricing & Packaging": [
    "Price list and discount rule sync", "Quote and proposal pricing logic", "Competitive and win-loss price analysis",
    "Packaging and tier change rollout", "Usage-based and metered billing rules", "Renewal and upsell price guidance",
    "Price approval and exception workflow", "Localization and currency", "Price performance and elasticity",
  ],
  "Visual & Creative Design": [
    "Brief to deliverable handoff", "Creative review and feedback cycles", "Asset versioning and approval",
    "Brand consistency checks", "Design-to-dev handoff specs", "Asset request and prioritization",
    "Design debt and refresh tracking", "Stakeholder sign-off and revision history", "Output format and channel variants",
  ],
  "Design System": [
    "Component and token updates", "Usage and adoption metrics", "Documentation and changelog",
    "Design-to-code consistency", "Deprecation and migration", "Accessibility and contrast checks",
    "Version and release of design system", "Contribution and review workflow", "Cross-tool sync (Figma, code)",
  ],
  "Design Ops & Handoff": [
    "Design specs and dev handoff", "Asset export and naming", "Responsive and variant specs",
    "Design QA and acceptance", "Tool and plugin workflow", "Design backlog and sprint alignment",
    "Designer capacity and allocation", "Handoff acceptance and sign-off",
  ],
  "Prototyping": [
    "Prototype link and feedback collection", "User test session scheduling", "Prototype version and branch",
    "Interaction and flow documentation", "Stakeholder review and comment", "Prototype to spec extraction",
    "Usability finding triage", "Prototype-to-production traceability",
  ],
  "Accessibility": [
    "Accessibility audit and finding tracking", "WCAG compliance and remediation", "Screen reader and keyboard flow",
    "Contrast and color token checks", "Alt text and caption workflow", "Accessibility regression in CI",
    "VPAT and compliance documentation", "User testing with assistive tech",
  ],
  "Design Asset Management": [
    "Asset organization and tagging", "Approval and release workflow", "Usage and rights tracking",
    "Expiry and refresh reminders", "Cross-team and brand sharing", "Format and resolution variants",
    "Source file and export archive", "License and attribution",
  ],
  "Feedback & Review": [
    "Review request and deadline", "Comment and annotation sync", "Approval and revision rounds",
    "Stakeholder sign-off tracking", "Feedback to ticket or task", "Review history and audit",
    "Comparison and diff view", "Final approval and publish trigger",
  ],
  "Travel & Itinerary": [
    "Trip booking and confirmation", "Itinerary build and update", "Flight and hotel change alerts",
    "Meeting and appointment insertion", "Expense pre-trip estimate", "Travel policy compliance",
    "Visa and document reminders", "Share itinerary with stakeholders", "Post-trip expense and receipt",
  ],
  "Travel & Expense": [
    "Travel booking approval", "Expense report from trip", "Corporate card and out-of-pocket split",
    "Travel policy and exception", "Receipt and itinerary attachment", "Multi-traveler and group",
    "Travel spend by department or project", "Refund and cancellation handling", "Audit and compliance sample",
  ],
  "Crisis & Incident": [
    "Incident detection and escalation", "War room and comms channel", "Stakeholder and customer notification",
    "Status page and external comms", "Post-incident review and blameless", "Regulatory and legal notification",
    "Media and PR coordination", "Recovery and business continuity", "Incident timeline and evidence",
  ],
  "Team & Org": [
    "Org structure and headcount visibility", "Role and responsibility mapping", "Succession and talent pipeline",
    "Reorg and change communication", "Team health and engagement signals", "Span of control and layer analysis",
    "Open req and capacity alignment", "Cross-functional dependency view", "Goal and OKR alignment by team",
  ],
  "Board & Governance": [
    "Board pack assembly and distribution", "Meeting agenda and materials", "Voting and resolution tracking",
    "Director and committee calendar", "Compliance and disclosure checklist", "Executive session and minutes",
    "Governance policy review cycle", "Board evaluation and onboarding",
  ],
  "Strategy & Planning": [
    "Strategic initiative tracking", "Scenario and what-if modeling", "Annual and long-range planning",
    "Initiative prioritization and resource", "Strategic KPI and milestone", "Competitive and market input",
    "Executive alignment and sign-off", "Plan vs actual and refresh", "Communication and rollout",
  ],
  "Compensation & Talent Review": [
    "Calibration and rating collection", "Comp recommendation and budget", "Merit and bonus cycle",
    "Equity and long-term incentive", "Talent review and nine-box", "Succession and readiness",
    "Pay equity and benchmarking", "Offer and exception approval", "Cycle timeline and completion",
  ],
  "Alert & Exception": [
    "Threshold and KPI exception alerts", "Anomaly and outlier detection", "Escalation path and ownership",
    "Alert fatigue and consolidation", "Action and remediation tracking", "Trend and pattern over time",
    "Board and exec exception summary", "SLA and commitment breach", "Regulatory and compliance exception",
  ],
  "Supplier Performance": [
    "On-time delivery and quality metrics", "Scorecard and rating calculation", "Corrective action and improvement",
    "Supplier risk and financial health", "Contract compliance and SLA", "Diversification and single-source risk",
    "Supplier audit and assessment", "Performance-based renewal", "Spend concentration and dependency",
  ],
  "Supplier Diversity": [
    "Diverse supplier identification", "Spend with diverse suppliers", "Certification and verification",
    "Diversity goal and target tracking", "Tier-2 reporting and flow-down", "Supplier diversity program outreach",
    "Reporting for regulatory and ESG", "Inclusion in sourcing events",
  ],
  "Vendor Payment": [
    "Payment terms and schedule", "Early pay discount capture", "Payment run and approval",
    "Dispute and deduction handling", "Vendor statement reconciliation", "Payment method and currency",
    "1099 and tax reporting", "Payment hold and release", "Vendor portal payment status",
  ],
  "Partner Management": [
    "Partner onboarding and enablement", "Partner tier and program status", "Partner health and engagement",
    "MDF and co-marketing funds", "Deal registration and conflict", "Partner pipeline and revenue",
    "Certification and training completion", "Partner support and escalation", "Contract and renewal",
    "Partner feedback and NPS", "Recruitment and recruitment",
  ],
  "Security Operations": [
    "Threat detection and triage", "Security event correlation", "Incident containment and response",
    "Vulnerability prioritization", "Access review and certification", "Security tool alert handling",
    "Malware and phishing response", "Forensics and evidence", "Security metrics and reporting",
  ],
  "Threat & Incident": [
    "Threat intel ingestion and matching", "Incident classification and severity", "Containment and eradication",
    "Communication and stakeholder update", "Post-incident review", "IOC and playbook updates",
    "Regulatory and breach notification", "Threat hunting and proactive", "Escalation and on-call",
  ],
  "Vulnerability & Patch": [
    "Vuln scan and assessment", "Patch prioritization and scheduling", "Remediation SLA and aging",
    "Exception and risk acceptance", "Asset and scope coverage", "Compliance and audit",
    "Critical and zero-day response", "Patch testing and rollout", "Vendor patch and advisory",
  ],
  "Third-Party Risk": [
    "Vendor security assessment", "Questionnaire and evidence", "Continuous monitoring and rating",
    "Contract and control mapping", "Inherent and residual risk", "Remediation and exception",
    "Fourth-party and subprocessor", "Renewal and re-assessment", "Incident and breach notification",
  ],
  "Incident Response": [
    "Incident detection and declaration", "Triage and severity", "Response playbook execution",
    "Communication and status", "Evidence and timeline", "Closure and post-mortem",
    "Regulatory and legal", "Recurring incident patterns", "On-call and escalation",
  ],
  "Security Audit": [
    "Audit scope and evidence request", "Control testing and finding", "Remediation tracking",
    "Audit report and management response", "Regulatory and framework", "Follow-up and closure",
    "Audit calendar and readiness", "External auditor coordination",
  ],
  "Self-Service & Catalog": [
    "Data catalog and discovery", "Self-serve report and dataset", "Access request and approval",
    "Data quality and lineage", "Usage and popularity", "Certified and curated assets",
    "Search and recommendation", "Governance and policy", "Onboarding and training",
  ],
  "DevOps": [
    "Build and test automation", "Deploy pipeline and gates", "Environment and config",
    "Release and rollback", "Infrastructure provisioning", "Secrets and credential",
    "Runbook and playbook", "Team and on-call", "SLO and error budget",
  ],
  "Release & Build": [
    "Build status and failure alert", "Artifact and version", "Branch and tag",
    "Build time and optimization", "Dependency and security scan", "Build approval and promote",
    "Release notes and changelog", "Environment promotion",
  ],
  "Code & Review": [
    "PR and merge workflow", "Review and approval", "CI check and gate",
    "Code quality and coverage", "Branch strategy and cleanup", "Review latency and bottleneck",
    "Security and secret scan", "Documentation and comment",
  ],
  "AppSec & Security": [
    "SAST/DAST and scan results", "Dependency and SCA", "Secrets in code",
    "Security review in pipeline", "Pen test and finding", "Security exception",
    "Compliance and policy", "Remediation SLA",
  ],
  "Deployment": [
    "Deploy approval and gate", "Canary and blue-green", "Rollback trigger",
    "Deploy history and audit", "Environment and region", "Smoke and post-deploy",
    "Deploy notification", "Failure and recovery",
  ],
  "Infrastructure": [
    "Resource provisioning", "Capacity and scaling", "Cost and usage",
    "Config and drift", "Backup and DR", "Certificate and DNS",
    "Monitoring and alert", "Compliance and hardening",
  ],
  "SRE & Reliability": [
    "SLO definition and tracking", "Error budget and burn", "Incident and post-mortem",
    "On-call and escalation", "Capacity planning", "Chaos and resilience",
    "Toil reduction", "Reliability review",
  ],
  "Infrastructure as Code": [
    "IaC lint and validate", "Plan and apply", "State and drift",
    "Module and version", "Policy and compliance", "Cost estimate",
    "Review and approval", "Rollback and history",
  ],
  "Release Management": [
    "Release calendar", "Change and risk", "Go/no-go",
    "Rollback plan", "Stakeholder sign-off", "Release notes",
    "Post-release validation", "Communication",
  ],
  "CI/CD": [
    "Pipeline run and status", "Stage and gate", "Artifact and deploy",
    "Failure and retry", "Parallel and matrix", "Pipeline as code",
    "Notification and dashboard", "Optimization and cache",
  ],
  "Cost & FinOps": [
    "Cloud cost visibility", "Budget and forecast", "Anomaly and alert",
    "Chargeback and showback", "Rightsizing and recommendation", "Reserved and savings",
    "Tag and allocation", "Approval and governance",
  ],
  "Secrets Management": [
    "Secret rotation", "Access and audit", "Vault and injection",
    "Expiry and alert", "Policy and scope", "Emergency access",
    "Integration with pipeline", "Compliance",
  ],
  "Quality Assurance & Testing": [
    "Test plan and coverage", "Case and scenario", "Defect and regression",
    "Environment and data", "Release sign-off", "Automation and manual",
    "Risk-based testing", "Metrics and trend",
  ],
  "Test Planning & Cases": [
    "Requirement to test case", "Case design and review", "Data and environment",
    "Traceability matrix", "Prioritization and risk", "Maintenance and update",
    "Reuse and parameterization", "Version and baseline",
  ],
  "Release & Sign-off": [
    "Release criteria and checklist", "Sign-off and approval", "Go/no-go decision",
    "Regression and smoke", "Documentation and training", "Rollback readiness",
    "Stakeholder communication", "Post-release review",
  ],
  "Test Case Sync": [
    "Test case to ALM sync", "Result and status", "Coverage and gap",
    "Defect linkage", "Environment and version", "Bulk update and import",
    "Sync conflict and resolution", "Audit trail",
  ],
  "Bug Triage": [
    "Bug routing and assignment", "Severity and priority", "Reproduction and environment",
    "Duplicate and related", "SLA and aging", "Fix verification",
    "Customer and release impact", "Triage meeting and backlog",
  ],
  "Performance & Load Testing": [
    "Load scenario and script", "Result and baseline", "Regression and trend",
    "Bottleneck identification", "Capacity and scaling", "SLI and threshold",
    "Report and alert", "Environment and data",
  ],
  "Accessibility Testing": [
    "A11y scan and result", "WCAG level and finding", "Remediation and retest",
    "Manual and assistive", "CI integration", "Report and compliance",
    "Component and page", "Regression",
  ],
  "Carrier & Freight": [
    "Rate and lane", "Shipment tracking", "Claim and exception",
    "Carrier performance", "Tender and acceptance", "Document and BOL",
    "Multi-modal and transload", "Cost and audit",
  ],
  "Supply Chain Vendor Management": [
    "Supplier onboarding", "Performance and risk", "Contract and compliance",
    "Diversification", "Cost and payment", "Audit and assessment",
    "Capacity and lead time", "Relationship and escalation",
  ],
  "Risk Identification & Assessment": [
    "Risk register and taxonomy", "Inherent and residual", "Likelihood and impact",
    "Control effectiveness", "Risk appetite and limit", "Emerging risk",
    "Scenario and stress", "Owner and action",
  ],
  "Risk Assessment & Monitoring": [
    "Continuous risk monitoring", "KRI and threshold", "Exception and breach",
    "Risk reporting and dashboard", "Trend and correlation", "Regulatory and framework",
    "Review cycle and refresh", "Escalation and committee",
  ],
  "Operational Risk": [
    "Op risk event and loss", "Control and process", "RCSA and self-assessment",
    "Near miss and root cause", "Action and remediation", "Insurance and transfer",
    "Business continuity", "Third-party op risk",
  ],
  "Insurance & Claims": [
    "Policy and coverage", "Claim submission", "Adjuster and settlement",
    "Renewal and broker", "Loss run and history", "Certificate of insurance",
    "Claim reserve and payout", "Compliance and audit",
  ],
  "Credit Risk": [
    "Credit limit and exposure", "Rating and score", "Concentration and limit",
    "Default and recovery", "Covenant and trigger", "Portfolio and trend",
    "Stress and scenario", "Regulatory capital",
  ],
  "Risk Audit": [
    "Audit plan and scope", "Evidence and finding", "Management response",
    "Follow-up and closure", "Internal and external", "Framework and standard",
    "Reporting and committee", "Issue tracking",
  ],
  "Compliance Monitoring & Testing": [
    "Control testing", "Sample and exception", "Finding and remediation",
    "Testing schedule", "Evidence collection", "Automated and manual",
    "Trend and pattern", "Regulatory alignment",
  ],
  "Compliance Risk Assessment": [
    "Compliance risk register", "Control mapping", "Gap and remediation",
    "Regulatory change", "Inherent and residual", "Review cycle",
    "Ownership and accountability", "Reporting",
  ],
  "Investigations": [
    "Case intake and triage", "Evidence and timeline", "Interview and document",
    "Conclusion and report", "Remediation and discipline", "Regulatory and legal",
    "Whistleblower and hotline", "Case closure",
  ],
  "Regulatory Reporting": [
    "Filing calendar", "Data collection", "Submission and proof",
    "Amendment and restatement", "Regulator communication", "Audit trail",
    "Review and sign-off", "Template and change",
  ],
  "Compliance Audit": [
    "Audit scope and plan", "Evidence request", "Testing and finding",
    "Report and response", "Remediation", "Follow-up",
    "Regulatory exam", "Documentation",
  ],
  "Crisis & Reputation": [
    "Crisis detection and triage", "Stakeholder communication", "Media monitoring",
    "Message and holding statement", "Legal and PR coordination", "Social and sentiment",
    "Recovery and post-crisis", "Reputation tracking",
  ],
  "PR & Media": [
    "Media list and outreach", "Press release distribution", "Coverage and clipping",
    "Journalist and relationship", "Spokesperson and briefing", "Crisis and rapid response",
    "Analyst and influencer", "Measurement and ROI",
  ],
  "Facilities Asset Management": [
    "Asset inventory and lifecycle", "Maintenance and repair", "Warranty and disposal",
    "Assignment and location", "Cost and depreciation", "Compliance and safety",
    "Vendor and contract", "Audit and count",
  ],
  "Space & Desks": [
    "Desk and room booking", "Hoteling and hybrid", "Capacity and utilization",
    "Move and reconfig", "Floor plan and occupancy", "Cleaning and maintenance",
    "Amenity and meeting room", "Access and badge",
  ],
  "Visitor & Access": [
    "Visitor pre-registration", "Check-in and badge", "Host notification",
    "NDA and safety", "Evacuation and emergency", "Contractor and vendor",
    "Access log and audit", "Integration with security",
  ],
  "Maintenance Request": [
    "Request intake and triage", "Work order and assignment", "SLA and priority",
    "Vendor dispatch", "Parts and inventory", "Completion and sign-off",
    "Recurring and preventive", "Cost and budget",
  ],
  "Move & Space Planning": [
    "Move project and timeline", "Space allocation", "IT and telecom",
    "Furniture and asset", "Communication and change", "Budget and approval",
    "Post-move review", "Documentation",
  ],
  "Facilities Vendor Management": [
    "Vendor selection and contract", "SLA and performance", "Invoice and payment",
    "Emergency and on-call", "Insurance and compliance", "Renewal and RFP",
    "Relationship and escalation", "Spend and category",
  ],
  "Tax & Withholding": [
    "Withholding calculation", "W-4 and form", "Multi-jurisdiction",
    "Year-end and W-2", "Deposit and filing", "Audit and correction",
    "Tax notice and amendment", "Employee and contractor",
  ],
  "Tax Compliance & Filing": [
    "Return preparation", "Filing deadline", "Extension and amendment",
    "Jurisdiction and nexus", "Audit support", "Payment and deposit",
    "Documentation and workpaper", "Regulatory change",
  ],
  "Tax Provision & Reporting": [
    "Provision and accrual", "Deferred tax", "Effective rate",
    "Quarterly and annual", "Audit and footnote", "Uncertainty and reserve",
    "Restatement and prior", "Management reporting",
  ],
  "Indirect Tax": [
    "VAT and GST", "Exemption and certificate", "Filing and return",
    "Cross-border and place of supply", "Rate and product", "Audit and refund",
    "Compliance calendar", "Automation and integration",
  ],
  "Transfer Pricing": [
    "Documentation and policy", "Intercompany agreement", "Benchmark and study",
    "Filing and disclosure", "Adjustment and true-up", "Audit and controversy",
    "Country-by-country", "Management and reporting",
  ],
  "Tax Calendar & Filing": [
    "Filing calendar", "Deadline reminder", "Extension tracking",
    "Payment due", "Estimated tax", "Multi-entity",
    "Checklist and status", "Regulatory update",
  ],
  "State & Local Tax": [
    "SALT nexus", "Filing and payment", "Apportionment",
    "Credits and incentives", "Audit and notice", "Local jurisdiction",
    "Compliance and calendar", "Reporting",
  ],
  "Proxy & Governance": [
    "Proxy statement", "Voting and tabulation", "Say-on-pay",
    "Shareholder proposal", "Annual meeting", "Beneficial ownership",
    "Disclosure and SEC", "Governance guideline",
  ],
  "GTM & Go-to-Market": [
    "Launch plan and timeline", "Channel and segment", "Competitive positioning",
    "Sales enablement and kit", "Pricing and packaging", "Pilot and beta",
    "Metrics and success", "Cross-functional alignment",
  ],
  "Due Diligence & M&A": [
    "Data room and request", "Checklist and timeline", "Integration planning",
    "Synergy and cost", "Legal and contract", "HR and culture",
    "IT and systems", "Closing and Day One",
  ],
  "Partnership Pipeline": [
    "Opportunity tracking", "Stage and milestone", "Stakeholder alignment",
    "Term sheet and negotiation", "Approval and sign-off", "Integration and launch",
    "Success metrics", "Renewal and expansion",
  ],
  "Partner Marketing (MDF)": [
    "MDF request and approval", "Co-marketing execution", "Budget and accrual",
    "Proof of performance", "Claim and reimbursement", "Tier and eligibility",
    "Campaign tracking", "Partner portal and kit",
  ],
  "Co-sell & Referral": [
    "Deal registration", "Referral tracking", "Payout and commission",
    "Lead and opportunity handoff", "Joint selling motion", "Attribution and credit",
    "Partner portal and status", "Conflict and eligibility",
  ],
  "Channel Sales": [
    "Channel pipeline", "Deal registration", "Tier and program",
    "Incentive and SPIFF", "Enablement and certification", "Forecast and quota",
    "Conflict resolution", "Partner performance",
  ],
  "MDF & Incentives": [
    "Fund request", "Approval workflow", "Spend and accrual",
    "Proof of performance", "Tier and eligibility", "Co-marketing calendar",
    "Partner reporting", "Budget and forecast",
  ],
  "Partner Deal Registration": [
    "Registration submission", "Conflict check", "Approval and validity",
    "Expiry and extension", "Attribution and credit", "Pipeline visibility",
    "Partner notification", "Dispute and override",
  ],
  "Co-marketing": [
    "Campaign plan", "Asset and kit", "Lead and attribution",
    "Budget and MDF", "Event and webinar", "Content and demand",
    "Reporting and ROI", "Partner alignment",
  ],
  "M&A & Integration": [
    "Integration roadmap", "Synergy tracking", "Day One readiness",
    "System and process", "Org and role", "Customer and contract",
    "Communication and change", "Milestone and sign-off",
  ],
  "Corporate Development": [
    "Pipeline and screening", "Valuation and model", "Due diligence",
    "Negotiation and term", "Approval and committee", "Closing and announcement",
    "Portfolio and performance", "Strategy alignment",
  ],
  "Competitive Intel": [
    "Competitor tracking", "Win/loss analysis", "Pricing and positioning",
    "Product and feature", "G2 and review", "Sales battlecard",
    "Alert and update", "Strategy and response",
  ],
  "Strategic Planning": [
    "Strategic priority", "Initiative and goal", "Resource and budget",
    "Scenario and option", "Alignment and cascade", "Review and refresh",
    "Executive and board", "Metrics and milestone",
  ],
  "OKR & Planning": [
    "OKR draft and align", "Review and score", "Cadence and check-in",
    "Cascade and link", "Visibility and reporting", "Retrospective",
    "Integration with performance", "Rolling and annual",
  ],
  "Scenario & Planning": [
    "Scenario model", "Driver and assumption", "Sensitivity and what-if",
    "Plan vs actual", "Rolling forecast", "Board and exec",
    "Version and approval", "Integration with finance",
  ],
  "Resource Management": [
    "Capacity and allocation", "Skill and role", "Demand and project",
    "Utilization and bench", "Forecast and planning", "Time and actual",
    "Conflict and overallocation", "Reporting and optimization",
  ],
  "Risk & Issue Management": [
    "Risk register", "Issue log", "Mitigation and action",
    "Escalation and owner", "Status and trend", "Reporting and dashboard",
    "Review and closure", "Integration with project",
  ],
  "Change Management": [
    "Change plan", "Stakeholder impact", "Communication and training",
    "Adoption and resistance", "Readiness and go-live", "Benefits realization",
    "Feedback and iteration", "Rollback and support",
  ],
  "Vendor Management": [
    "Vendor onboarding", "Contract and SLA", "Performance and scorecard",
    "Risk and compliance", "Spend and invoice", "Renewal and RFP",
    "Relationship and escalation", "Category and diversity",
  ],
  "Vendor Performance & SLA": [
    "SLA tracking", "KPI and metric", "Breach and exception",
    "Scorecard and review", "Corrective action", "Penalty and credit",
    "Reporting and trend", "Contract alignment",
  ],
  "Vendor Onboarding & Offboarding": [
    "Onboarding checklist", "Contract and security", "Access and system",
    "Training and go-live", "Offboarding and exit", "Access revocation",
    "Knowledge transfer", "Audit and documentation",
  ],
  "Vendor Risk": [
    "Risk assessment", "Questionnaire and evidence", "Continuous monitoring",
    "Remediation and exception", "Fourth-party", "Contract and insurance",
    "Incident and breach", "Review and renewal",
  ],
  "Version Control & Review": [
    "Doc version and branch", "Review and comment", "Approval and merge",
    "Changelog and diff", "Template and reuse", "Publish and archive",
    "Localization and variant", "Audit trail",
  ],
  "Publish & Distribution": [
    "Publish workflow", "Channel and format", "Schedule and release",
    "Translation and locale", "Archive and retire", "Access and permission",
    "Analytics and usage", "Notification and alert",
  ],
  "Collaboration & Labs": [
    "Lab notebook and experiment", "Protocol and SOP", "Equipment and resource",
    "Sample and inventory", "Result and analysis", "Publication and IP",
    "Compliance and safety", "Collaboration and share",
  ],
  "Brand Guidelines & Governance": [
    "Guideline and standard", "Approval and exception", "Asset and template",
    "Training and awareness", "Audit and compliance", "Version and update",
    "Stakeholder and region", "Usage and tracking",
  ],
  "Brand Monitoring": [
    "Mention and sentiment", "Competitor and category", "Crisis and alert",
    "Share of voice", "Trend and report", "Response and engagement",
    "Trademark and misuse", "Influencer and UGC",
  ],
  "Creative": [
    "Brief and scope", "Concept and revision", "Approval and sign-off",
    "Asset delivery", "Feedback and iteration", "Version and variant",
    "Resource and capacity", "Quality and brand",
  ],
  "Approval Workflow": [
    "Request and submit", "Route and approver", "SLA and escalation",
    "Delegate and proxy", "Condition and rule", "Audit and history",
    "Integration with system", "Notification and reminder",
  ],
  "Sponsorship & Exhibitors": [
    "Sponsor tier and package", "Contract and payment", "Logo and asset",
    "Booth and placement", "Lead capture", "Recognition and thank-you",
    "Reporting and ROI", "Renewal and upsell",
  ],
  "Speaker Management": [
    "Speaker recruitment", "Abstract and bio", "Session and track",
    "Rehearsal and AV", "Travel and expense", "Slides and handout",
    "Post-event content", "Feedback and rating",
  ],
  "Membership Management": [
    "Join and renew", "Tier and benefit", "Directory and profile",
    "Event and content", "Communication and segment", "Payment and invoice",
    "Churn and engagement", "Governance and committee",
  ],
  "Community Moderation": [
    "Content review", "Policy and guideline", "Escalation and action",
    "User and reputation", "Spam and abuse", "Appeal and restore",
    "Reporting and trend", "Moderator workflow",
  ],
  "Programs & Chapters": [
    "Chapter and region", "Leader and volunteer", "Program and event",
    "Budget and MDF", "Reporting and goal", "Recognition and award",
    "Onboarding and training", "Governance and bylaws",
  ],
  "Gamification & Recognition": [
    "Points and badge", "Leaderboard", "Challenge and goal",
    "Reward and redemption", "Recognition and thank-you", "Segment and tier",
    "Integration with HR", "Reporting and trend",
  ],
  "Translation & TMS": [
    "Translation request", "TMS workflow", "Vendor and quote",
    "Review and approval", "Locale and variant", "Terminology and glossary",
    "Quality and metric", "Delivery and integration",
  ],
  "Loc QA & Review": [
    "QA and linguistic", "Bug and issue", "Sign-off and release",
    "Sample and audit", "Feedback and iteration", "Locale and market",
    "Regression and update", "Vendor and in-house",
  ],
  "Locale & Market": [
    "Market readiness", "Locale and language", "Legal and compliance",
    "Pricing and currency", "Content and asset", "Release and launch",
    "Local partner", "Reporting and adoption",
  ],
  "Terminology & Glossary": [
    "Term and definition", "Approval and usage", "Translation and variant",
    "Consistency check", "Update and deprecated", "Stakeholder and domain",
    "Export and integration", "Search and reuse",
  ],
  "Translation Sync": [
    "Source to target sync", "Update and change", "Incremental and full",
    "Conflict and override", "Locale and format", "Notification and approval",
    "Audit and history", "Integration with CMS",
  ],
  "Disclosure & Frameworks": [
    "Framework alignment", "Data collection", "Assurance and audit",
    "Narrative and disclosure", "Stakeholder and regulator", "Version and update",
    "Gap and roadmap", "Reporting and publish",
  ],
  "Supply Chain ESG": [
    "Supplier ESG assessment", "Scope 3 and value chain", "Emission and carbon",
    "Human rights and labor", "Traceability and audit", "Reporting and disclosure",
    "Improvement and engagement", "Certification and standard",
  ],
  "Mentorship & Sponsorship": [
    "Mentor matching", "Program and cohort", "Goal and check-in",
    "Sponsor advocacy", "Career and development", "Recognition and feedback",
    "Diversity and inclusion", "Retention and advancement",
  ],
  "Territory & Quota": [
    "Territory design", "Quota assignment", "Coverage and capacity",
    "Quota attainment", "Roll-up and hierarchy", "Adjustment and exception",
    "Conflict and overlap", "Planning and forecast",
  ],
  "Incentives & SPIFFs": [
    "SPIFF design", "Eligibility and rule", "Accrual and payout",
    "Contest and accelerator", "Approval and exception", "Reporting and audit",
    "Communication and visibility", "Integration with comp",
  ],
  "Templates & Snippets": [
    "Template library", "Snippet and shortcut", "Personal and team",
    "Variable and merge", "Version and share", "Discovery and search",
    "Usage and favorite", "Cross-app and format",
  ],
  "Cross-App Workflows": [
    "Multi-app trigger", "Data flow and transform", "Condition and branch",
    "Error and retry", "Schedule and trigger", "Notification and alert",
    "Approval and human-in-loop", "Log and audit",
  ],
  "Default": [
    "Sync", "Trigger", "Notification", "Approval", "Report", "Update", "Archive", "Audit",
    "Reminder", "Distribution", "Workflow", "Alert", "Routing", "Escalation", "Log",
  ],
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { solutionUseCases };
}
if (typeof window !== "undefined") {
  window.solutionUseCases = solutionUseCases;
}
