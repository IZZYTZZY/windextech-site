/* ============================================
   WindexTech — case studies data + interactions
   ============================================ */

const cases = [
  {
    id: 'opagency', name: 'OP Agency', sector: 'Creative &amp; marketing agency',
    platform: 'HubSpot', duration: '3 weeks', init: 'OP',
    tags: ['HubSpot', 'Fix &amp; rebuild'],
    stats: [{ n: '3 wk', l: 'Delivery' }, { n: 'HubSpot', l: 'Platform' }, { n: '11', l: 'Workflows fixed' }],
    brief: 'Broken HubSpot setup — pipelines misconfigured, automations firing incorrectly, duplicate contacts and deals.',
    challenge: 'OP Agency came to WindexTech with a HubSpot instance that had never been properly architected. Pipelines had overlapping stages, automations triggering on wrong conditions, deals duplicating, and reporting inaccurate.',
    challenge2: 'The ask: audit everything, fix what was broken, rebuild what wasn\'t salvageable, and make it match how the agency actually ran its new business process.',
    approach: [
      'Full HubSpot audit — pipeline config, workflow logic, contact and deal associations',
      'Identified 11 misconfigured workflows causing duplicate deal creation',
      'Rebuilt pipeline architecture with correct stage definitions',
      'Fixed all automation logic — trigger conditions, property updates, conflicting workflows removed',
      'Cleaned contact and deal database — duplicates removed, associations corrected',
      'Rebuilt reporting dashboards'
    ],
    solution: [
      'All 11 broken workflows corrected and tested',
      'Pipeline rebuilt with clean stage architecture',
      'Database cleaned — duplicates removed',
      'Reporting dashboards rebuilt with accurate data',
      'New business process documented'
    ],
    results: [
      'HubSpot fully operational within 3 weeks',
      'Team returned to using the CRM consistently',
      'Accurate pipeline visibility for the first time',
      'Zero duplicate deal creation post go-live'
    ],
    quote: 'We\u2019d basically given up on HubSpot and were working around it. WindexTech had it working properly in under a month.',
    quotecite: 'Founder, OP Agency'
  },
  {
    id: 'trint', name: 'Trint', sector: 'SaaS — AI transcription',
    platform: 'Salesforce \u2192 HubSpot', duration: '8 weeks', init: 'TR',
    tags: ['Migration', 'HubSpot', 'Zapier'],
    stats: [{ n: '8 wk', l: 'Delivery' }, { n: '50k+', l: 'Records migrated' }, { n: 'Full', l: 'Sales rebuild' }],
    brief: 'Full Salesforce to HubSpot Sales Hub migration — 50,000+ records, complete sales process rebuild, Zapier and Slack integrations.',
    challenge: 'Trint\u2019s sales team had outgrown Salesforce — over-engineered, expensive to maintain, and rep adoption was low. The decision was made to migrate to HubSpot and rebuild the entire sales process.',
    challenge2: 'Every pipeline stage, property, sequence, integration, and reporting dashboard had to be mapped, migrated, or rebuilt in HubSpot from scratch.',
    approach: [
      'Mapped the full Salesforce data model',
      'Designed HubSpot architecture: pipeline stages, properties, lifecycle stages',
      'Migrated 50,000+ records with full history preservation',
      'Rebuilt all sales automations in HubSpot',
      'Integrated Zapier for cross-platform workflows',
      'Integrated Slack for deal notifications',
      'Team training across HubSpot'
    ],
    solution: [
      'Full Salesforce data migrated — 50,000+ records with history',
      'HubSpot configured with rebuilt pipeline and automation',
      'Zapier and Slack integrations live',
      'All sequences rebuilt',
      'Full reporting suite'
    ],
    results: [
      '8-week delivery — zero data loss',
      'Sales team adoption significantly higher than Salesforce',
      'Annual Salesforce licence cost eliminated'
    ],
    quote: '50,000 records, full history, all integrations live in 8 weeks. Clean handover.',
    quotecite: 'Head of Sales, Trint'
  },
  {
    id: 'kplaw', name: 'KP Law', sector: 'Legal services — UK law firm',
    platform: 'Salesforce + Litify', duration: '12 weeks', init: 'KP',
    tags: ['Litify', 'Salesforce', 'Legal'],
    stats: [{ n: '12 wk', l: 'Delivery' }, { n: 'Litify', l: 'Platform' }, { n: 'Full', l: 'Legal workflow' }],
    brief: 'Full Litify implementation on Salesforce — matter management, client intake, eBilling, fee-earner workflows, and Apex customisation over 12 weeks.',
    challenge: 'KP Law needed Litify implemented across the firm. Client intake was via email, matter tracking in spreadsheets, billing manual, and fee-earners had no consistent tooling.',
    challenge2: 'Had to be built around how fee-earners and operations actually worked — not a generic Litify template. Custom Apex required for firm-specific logic.',
    approach: [
      'Discovery across fee-earners, ops, and management',
      'Configured Litify matter management: types, stages, document checklists, task automation',
      'Built intake workflows: web enquiry \u2192 contact \u2192 matter creation \u2192 fee-earner assignment',
      'Configured Litify eBilling: time entry, invoicing, payment tracking',
      'Developed custom Apex for firm-specific rules',
      'Configured referral source tracking',
      'Built dashboards: pipeline, billing, workload'
    ],
    solution: [
      'Full Litify — matter management, intake, eBilling, reporting',
      'Client intake automated in under 2 minutes',
      'eBilling with time entry and payment tracking',
      'Custom Apex for firm-specific logic',
      'Referral source tracking live'
    ],
    results: [
      'From spreadsheets to fully configured Litify in 12 weeks',
      'Client intake reduced from hours to minutes',
      'Fee-earners billing from week one',
      'Matter pipeline and billing visibility for management'
    ],
    quote: 'WindexTech configured Litify around how our firm actually works. The intake automation and eBilling alone have saved us hours every week.',
    quotecite: 'Operations Director, KP Law'
  },
  {
    id: 'crew', name: 'CREW Saudi Arabia', sector: 'Staffing technology — Saudi Arabia',
    platform: 'Salesforce CPQ', duration: '12 weeks', init: 'CR',
    tags: ['Salesforce', 'CPQ', 'Saudi Arabia'],
    stats: [{ n: '12 wk', l: 'Delivery' }, { n: 'CPQ', l: 'Full build' }, { n: 'Full', l: 'Sales lifecycle' }],
    brief: 'Full Salesforce CRM and CPQ for a high-tech staffing agency in Saudi Arabia — end-to-end lifecycle with complex pricing rules and system integrations.',
    challenge: 'CREW needed a full Salesforce implementation as the backbone of their sales and fulfilment operations, with complex CPQ: products varying by job type, legal status, sourcing market, and Saudi labour market floor pricing.',
    challenge2: 'Had to cover the full lifecycle — lead qualification through CPQ, billing, after-sales, cancellations, and refunds — with automated routing and multiple system integrations.',
    approach: [
      'Designed entity relationship model: Organisations, Branches, Contacts, Deals, Requests, Positions',
      'Configured Salesforce Sales Cloud for full sales lifecycle',
      'Implemented Salesforce CPQ with complex Saudi labour market pricing rules',
      'Built automated lead qualification and RM routing',
      'Configured discount approval workflows',
      'Integrated payment, ATS, e-invoicing, communications, and document backup',
      'Full SRS documentation produced'
    ],
    solution: [
      'Salesforce Sales Cloud and CPQ for full lifecycle',
      'Complex CPQ with Saudi compliance',
      'Automated lead routing and RM assignment',
      'System integrations across payment, fulfilment, communications',
      'Full SRS documentation'
    ],
    results: [
      'End-to-end process from lead to payment and ATS dispatch',
      'CPQ handling complex configuration automatically',
      'Full audit trail for compliance'
    ],
    quote: 'Complex CPQ, Saudi compliance, full lifecycle from lead to fulfilment. Delivered on time.',
    quotecite: 'Operations Lead, CREW Saudi Arabia'
  },
  {
    id: 'jibble', name: 'Jibble', sector: 'SaaS — workforce management',
    platform: 'HubSpot + Apollo + n8n', duration: '6 weeks', init: 'JB',
    tags: ['HubSpot', 'Apollo', 'n8n'],
    stats: [{ n: '6 wk', l: 'Delivery' }, { n: '40%', l: 'Admin saved' }, { n: 'Apollo+n8n', l: 'Stack' }],
    brief: 'HubSpot implementation, RevOps strategy, and AI-powered outbound stack — Apollo for prospecting, n8n for automation, HubSpot as CRM backbone.',
    challenge: 'Jibble\u2019s HubSpot had no consistent pipeline stages, 1,200+ duplicate contacts, no attribution model, and sales and marketing working from different data.',
    challenge2: 'Beyond fixing HubSpot, they needed an outbound stack — Apollo for lead data and n8n to automate enrichment, scoring, and sequencing.',
    approach: [
      'Full HubSpot audit and pipeline redesign',
      'Built clean attribution model from marketing source to closed revenue',
      'Deduplicated 1,200+ contacts with Apollo and Clay enrichment',
      'Rebuilt all automation workflows',
      'Connected Apollo to HubSpot via n8n — automated enrichment, ICP scoring, sequence enrolment',
      'Built n8n outbound layer: signal monitoring, enrichment, sequencing'
    ],
    solution: [
      'New pipeline architecture with consistent stages',
      'Full attribution on deal records',
      '1,200+ duplicates removed',
      'Apollo integrated to HubSpot via n8n',
      'n8n outbound automation layer'
    ],
    results: [
      '40% reduction in CRM admin time',
      'Full pipeline visibility by region and stage',
      'Outbound running automatically through Apollo and n8n'
    ],
    quote: 'Took a HubSpot setup held together with string and turned it into something we could build the business on.',
    quotecite: 'Head of Revenue, Jibble'
  },
  {
    id: 'measure', name: 'Measure Protocol', sector: 'Data &amp; research technology',
    platform: 'Pipedrive + Make.com', duration: '7 weeks', init: 'MP',
    tags: ['Pipedrive', 'Make.com', 'AI automation'],
    stats: [{ n: '7 wk', l: 'Delivery' }, { n: 'Make.com', l: 'Automation' }, { n: '3', l: 'Pipelines' }],
    brief: 'Pipedrive with Make.com AI automation layer — three pipelines for a complex multi-stakeholder GTM motion with automated lead qualification.',
    challenge: 'Measure Protocol had a complex GTM motion — selling to enterprise data buyers, research agencies, and platform partners. Their previous CRM had been abandoned because it didn\u2019t match their process.',
    challenge2: 'Needed Pipedrive across three distinct pipelines, with a Make.com automation layer using Claude API to handle inbound qualification and deal progression.',
    approach: [
      'Discovery mapping three GTM motions into separate pipeline architectures',
      'Implemented Pipedrive with three pipelines and custom fields',
      'Built Make.com automation connecting Pipedrive to Apollo for enrichment',
      'AI qualification logic via Claude API — inbound scored and routed per pipeline',
      'Deal progression automation from engagement signals',
      'Outbound research via Make.com'
    ],
    solution: [
      'Pipedrive with three pipelines',
      'Make.com: enrichment, ICP scoring, inbound routing, deal progression',
      'Claude API via Make.com for qualification',
      'Outbound signal monitoring'
    ],
    results: [
      'Three GTM motions from one Pipedrive instance',
      'Inbound leads qualified and routed automatically',
      'Deal progression driven by real signals'
    ],
    quote: 'The Make.com automation layer removed all the manual work — leads qualify and route themselves.',
    quotecite: 'Head of Growth, Measure Protocol'
  },
  {
    id: 'bbr', name: 'BBR — Big Brand Residence', sector: 'Property — US real estate',
    platform: 'HubSpot', duration: '6 weeks', init: 'BB',
    tags: ['HubSpot', 'Full setup', 'Billing'],
    stats: [{ n: '6 wk', l: 'Delivery' }, { n: '2', l: 'Pipelines' }, { n: 'Full', l: 'Lead to invoice' }],
    brief: 'Complete HubSpot setup for a US property business — dual pipeline (Buyers and Developers), lead scoring, quoting, DocuSign, Stripe, and Twilio.',
    challenge: 'BBR came with no CRM — leads in spreadsheets, proposals as PDFs, contracts managed manually, billing disconnected from sales.',
    challenge2: 'Build the entire process in HubSpot from lead capture to signed contracts and paid invoices, with two distinct pipelines running in parallel.',
    approach: [
      'Buyer and Developer pipelines with distinct stage logic',
      'Lead scoring for Buyers — score of 50 triggers sales assignment',
      'Nurturing: welcome sequences, property recommendations, viewing reminders',
      'Twilio/Aircall for calling from HubSpot',
      'Bespoke quoting with DocuSign/PandaDoc e-signature',
      'Contract automation on Proposal Accepted',
      'Stripe payment links on Won',
      'Invoice automation with deal data auto-fill'
    ],
    solution: [
      'Two configured pipelines with distinct automation',
      'Lead scoring live and routing',
      'Quoting, e-signature, and contract automation',
      'Stripe payment links and invoice automation'
    ],
    results: [
      'Full lead-to-invoice process in HubSpot',
      'Contracts and quotes sent automatically',
      'Real-time pipeline and billing visibility'
    ],
    quote: 'Lead scoring, two pipelines, quoting, DocuSign, Stripe — everything connected.',
    quotecite: 'Operations Director, BBR'
  },
  {
    id: 'instinct', name: 'Instinct Digital', sector: 'Digital agency',
    platform: 'Salesforce + CPQ API', duration: '8 weeks', init: 'ID',
    tags: ['Salesforce', 'CPQ API', 'Website'],
    stats: [{ n: '8 wk', l: 'Delivery' }, { n: 'CPQ API', l: 'Website' }, { n: 'Full', l: 'Automation' }],
    brief: 'Salesforce with CPQ connected to the website via REST API — clients generate quotes on site triggering full Salesforce automation.',
    challenge: 'Instinct Digital needed Salesforce CPQ connected to their website via REST API so clients could generate quotes directly from the web, triggering full sales automation.',
    challenge2: 'CPQ config, REST API layer, and full downstream automation — quote to deal to proposal — built as one connected system.',
    approach: [
      'Salesforce Sales Cloud configured as core CRM',
      'CPQ with product catalogue, pricing rules, and templates',
      'CPQ REST API layer connecting website to Salesforce',
      'Automation: website quote \u2192 contact + deal + proposal email',
      'Approval workflows for above-threshold discounts',
      'DocuSign for e-signature'
    ],
    solution: [
      'Salesforce + CPQ',
      'REST API connecting website to Salesforce',
      'Full automation from quote to proposal',
      'DocuSign on acceptance'
    ],
    results: [
      'Clients generate quotes from the website — zero rep effort',
      'Proposal triggered automatically — hours to minutes',
      'Team focused on complex deals only'
    ],
    quote: 'Clients get quotes instantly, Salesforce updates automatically.',
    quotecite: 'Commercial Director, Instinct Digital'
  },
  {
    id: 'smshighway', name: 'SMS Highway', sector: 'Telecoms &amp; messaging',
    platform: 'Salesforce', duration: '10 weeks', init: 'SM',
    tags: ['Service Cloud', 'CLM', 'Flair HRIS'],
    stats: [{ n: '10 wk', l: 'Delivery' }, { n: '3', l: 'Systems built' }, { n: 'Salesforce', l: 'Platform' }],
    brief: 'Salesforce Service Cloud, CLM, and Flair HRIS — three interconnected systems for support, contracts, and HR in one Salesforce org.',
    challenge: 'SMS Highway needed Service Cloud, CLM, and Flair HRIS all on a single Salesforce org — coordinated implementation without conflicts across all three functions.',
    challenge2: 'All three systems sharing the same data model, users, and org — implemented simultaneously.',
    approach: [
      'Unified data model for all three systems',
      'Service Cloud: case management, queues, escalation, SLA config',
      'CLM: contract templates, stage automation, approval routing, DocuSign',
      'Flair HRIS: employee records, leave, onboarding, manager approvals',
      'Cross-system automation across all three',
      'Dashboards and role-specific training'
    ],
    solution: [
      'Service Cloud, CLM, and Flair HRIS all live',
      'Cross-system automation in one org',
      'Unified reporting'
    ],
    results: [
      'All three systems live without conflicts',
      'Support, legal, and HR all working from Salesforce',
      'Manual duplication across teams eliminated'
    ],
    quote: 'Service Cloud, CLM, and Flair all live and connected in one implementation.',
    quotecite: 'Operations Director, SMS Highway'
  }
];

function buildGrid() {
  const g = document.getElementById('cs-grid');
  if (!g) return;
  g.innerHTML = cases.map(c => `
    <div class="cs-c" onclick="openCase('${c.id}')">
      <div class="cs-top">
        <div class="cs-br"><div class="cs-init">${c.init}</div><div class="tags">${c.tags.map(t => `<span class="tag ctag">${t}</span>`).join('')}</div></div>
        <div class="cs-name">${c.name}</div>
        <div class="cs-sector">${c.sector}</div>
        <p class="cs-brief">${c.brief}</p>
      </div>
      <div class="cs-bot">${c.stats.map(s => `<div class="cs-s"><div class="n">${s.n}</div><div class="l">${s.l}</div></div>`).join('')}</div>
    </div>`).join('');
}

function openCase(id) {
  const c = cases.find(x => x.id === id);
  if (!c) return;
  document.getElementById('cs-detail-content').innerHTML = `
    <div style="margin-bottom:.85rem"><span style="font-size:11px;color:var(--mu)">${c.sector}</span></div>
    <div class="cs-dh">
      <div class="cs-dh-left"><h1>${c.name}</h1><p>${c.challenge}</p><p>${c.challenge2}</p></div>
      <div class="cs-sb">
        <p style="font-size:10px;font-weight:500;color:var(--cy);letter-spacing:1px;text-transform:uppercase;margin-bottom:.6rem">Project details</p>
        <div class="cs-mr"><span class="cs-ml">Client</span><span class="cs-mv">${c.name}</span></div>
        <div class="cs-mr"><span class="cs-ml">Platform</span><span class="cs-mv">${c.platform}</span></div>
        <div class="cs-mr"><span class="cs-ml">Duration</span><span class="cs-mv">${c.duration}</span></div>
      </div>
    </div>
    <div class="cs-sr">${c.stats.map(s => `<div class="cs-sc"><div class="n">${s.n}</div><div class="l">${s.l}</div></div>`).join('')}</div>
    <div class="cs-bg">
      <div class="cs-bc"><h3>Our approach</h3><ul>${c.approach.map(i => `<li>${i}</li>`).join('')}</ul></div>
      <div class="cs-bc"><h3>What we built</h3><ul>${c.solution.map(i => `<li>${i}</li>`).join('')}</ul></div>
      <div class="cs-bc"><h3>Results</h3><ul>${c.results.map(i => `<li>${i}</li>`).join('')}</ul></div>
    </div>
    <div class="cs-qt"><p>\u201C${c.quote}\u201D</p><cite>\u2014 ${c.quotecite}</cite></div>
    <a class="bp" href="contact.html">Work with WindexTech \u2197</a>`;
  document.getElementById('cs-list').style.display = 'none';
  document.getElementById('cs-detail').classList.add('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.replaceState(null, '', '#' + id);
}

function closeCase() {
  document.getElementById('cs-list').style.display = 'block';
  document.getElementById('cs-detail').classList.remove('show');
  history.replaceState(null, '', 'case-studies.html');
}

document.addEventListener('DOMContentLoaded', () => {
  buildGrid();
  // open a case directly if URL has a hash matching an id
  const hash = window.location.hash.replace('#', '');
  if (hash && cases.find(c => c.id === hash)) {
    openCase(hash);
  }
});
