/**
 * Reusable use-case lists for solution categories (7–20 use cases each).
 * Used by hierarchy-seed.js. No "Automation" in solution or use case names.
 */
const solutionUseCases = {
  "AI Solutions": [
    "AI Summarization", "AI Drafting", "AI Classification", "AI Extraction", "AI Sentiment Analysis",
    "AI Recommendations", "AI Q&A", "AI Translation", "AI Data Enrichment", "AI Triage",
    "AI Routing", "AI Insights", "AI Report Generation", "AI Anomaly Detection", "AI Personalization",
    "AI Content Generation", "AI Search", "AI Tagging", "AI Prioritization", "AI Forecasting",
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
