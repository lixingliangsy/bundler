export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "BundleMaker",
  slug: "bundler",
  tagline: "Bundle ideas that actually move inventory.",
  description: "Given 2-5 products, get coherent bundle concepts with simple pricing logic and a launch blurb - plus a margin sanity note.",
  toolTitle: "Brainstorm bundles",
  resultLabel: "Bundle concepts",
  ctaLabel: "Brainstorm",
  features: [
  "Coherent bundle concepts",
  "Simple pricing logic",
  "Launch blurb",
  "Margin sanity note"
],
  inputs: [
  {
    "key": "products",
    "label": "2-5 products",
    "type": "textarea",
    "placeholder": "e.g. dripper $28, filters $6, kettle $49, beans $18"
  },
  {
    "key": "goal",
    "label": "Goal",
    "type": "select",
    "options": [
      "Move slow stock",
      "Lift AOV",
      "Gift set",
      "Onboard new buyers"
    ]
  }
] as InputField[],
  systemPrompt: "You are a retail merchandiser. Given 2-5 products with prices and a goal, propose 2-3 coherent bundle concepts, a simple pricing rule (bundle price vs sum), a short launch blurb, and a one-line margin sanity note (warn if a bundle price drops margin below a sensible floor). In demo (mock) mode, return a realistic sample following exactly this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "5 bundles/mo"
  },
  {
    "tier": "Pro",
    "price": "$19/mo",
    "desc": "Unlimited, save history"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const p = (inputs['products'] || '').trim()
  const g = inputs['goal'] || 'Lift AOV'
  if (!p) return 'List 2-5 products to brainstorm bundles.'
  let out = 'BUNDLES (goal: ' + g + ')\n\n'
  out += '1) "Slow Morning Kit" - dripper + filters + beans. Sum $52, bundle $44 (save $8).\n'
  out += '   Blurb: everything for a calm pour-over, in one box.\n'
  out += '   Margin: bundle at $44 keeps ~52% GM if COGS ~$21.\n\n'
  out += '2) "Barista Upgrade" - dripper + kettle. Sum $77, bundle $69.\n'
  out += '\n--- (Mock demo. Paste your products for tailored bundles.)'
  return out
}
}
