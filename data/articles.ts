export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bulletPoints?: string[];
  callout?: string;
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Engineering & Compounding' | 'Fleet Maintenance' | 'Industry & Sustainability';
  publishedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  featured?: boolean;
  excerpt: string;
  coverBadge: string;
  keyTakeaways: string[];
  sections: ArticleSection[];
  tags: string[];
}

export const articles: Article[] = [
  {
    slug: 'science-of-sustainable-tyre-retreading-chemical-compounding',
    title: 'The Science of Sustainable Tyre Retreading: How Precision Chemical Compounding Extends Casing Lifespan',
    subtitle: 'An inside look at Banbury internal mixing, carbon black dispersion, and cold-cure precured bonding engineered for tropical road durability.',
    category: 'Engineering & Compounding',
    publishedDate: 'September 18, 2026',
    readTime: '6 min read',
    author: {
      name: 'Autoways Engineering Team',
      role: 'Rubber Chemical Compounding Division',
      avatar: '/images/ceo_avatar.png'
    },
    featured: true,
    coverBadge: 'Technical Deep Dive',
    excerpt: 'Discover how precision compounding, Banbury internal mixers, and formulated cushion gum provide up to 50% cost savings for commercial fleets while drastically reducing carbon footprint.',
    keyTakeaways: [
      'Tyre casings account for up to 70% of a tyre’s manufacturing cost and crude oil consumption; retreading revitalizes that investment.',
      'Controlled temperature Banbury mixing ensures microscopic dispersion of carbon black, silica, and curatives, resisting tropical heat degradation.',
      'Formulated cushion gum acts as the vital molecular bridge between buffed casing and precured tread band, preventing tread peeling under extreme braking.',
      'Cold retreading preserves the casing belt package integrity at lower cure temperatures, extending casing lifecycle to 2-3 additional runs.'
    ],
    tags: ['Rubber Compounding', 'Banbury Mixers', 'Precured Retreading', 'Fleet Economy', 'ISO 9001'],
    sections: [
      {
        heading: '1. The Economics & Circular Ecology of Retreading',
        paragraphs: [
          'Commercial transportation forms the economic backbone of Sri Lanka, yet fleet operators face relentless pressure from rising fuel costs, currency fluctuations, and imported tyre prices. In a conventional heavy truck or bus tyre, the steel-belted casing represents approximately 70% to 80% of the tyre’s total initial manufacturing cost and energy consumption.',
          'Throwing away a tyre simply because the top tread has worn down to the wear bars is not only an enormous economic waste—it is an environmental tragedy. By replacing only the worn tread through certified retreading, fleet managers recover up to 85% of the tyre’s initial mileage at less than half the price of a brand-new tyre, while diverting thousands of kilograms of non-biodegradable rubber from regional landfills.'
        ],
        callout: '"Rebuilding Tyres. Reviving the Planet: Producing a retreaded tyre consumes up to 70% less crude oil compared to manufacturing a new commercial radial tyre."'
      },
      {
        heading: '2. Inside the Banbury Mixer: The Molecular Foundation',
        paragraphs: [
          'The performance of any retreaded tyre begins in the chemical compounding laboratory. At Autoways’ dedicated Rubber Chemical Compounding Division, raw natural elastomers and synthetic polymers are engineered to withstand the unique thermomechanical challenges of Sri Lanka’s road network.',
          'Using industrial Banbury internal mixers under tightly regulated temperature, shear, and pressure regimes, our chemists achieve uniform microscopic dispersion of reinforcing agents (such as high-surface-area carbon black and treated silica) alongside plasticizers, anti-aging compounds, and zinc oxide curatives.'
        ],
        bulletPoints: [
          'Strict temperature controls prevent premature scorch and vulcanization degradation during primary mixing.',
          'High filler dispersion guarantees consistent compound density across production batches, eliminating uneven tread wear.',
          'Tailored formulations deliver optimal balances between abrasion resistance, wet braking grip, and rolling resistance.'
        ]
      },
      {
        heading: '3. Hot Retreading vs. Cold Retreading: Choosing the Right Solution',
        paragraphs: [
          'Modern tyre rebuilding utilizes two distinct technological pathways, each engineered for specific vehicular applications and operating environments:',
          'Hot Retreading (Mold Cure): Unvulcanized green rubber is applied directly over the buffed casing and placed inside a high-temperature segmented steel mold. This method is ideal for heavy agricultural machinery, construction equipment, and high-stress off-road vehicles requiring seamless wrap-around shoulder protection.',
          'Cold Retreading (Precured): A precured tread liner—already vulcanized with precision pattern molds under superior hydraulic pressure—is bonded to the buffed casing inside a flexible curing envelope at significantly lower temperatures (typically 95°C to 110°C). This lower thermal exposure protects the structural integrity of the casing cords, making it the preferred choice for long-distance logistics, container haulage, and passenger bus fleets such as the Sri Lanka Transport Board (SLTB).'
        ]
      },
      {
        heading: '4. The Unsung Hero: Formulated Cushion Gum',
        paragraphs: [
          'In precured retreading, the bond between the buffed tyre casing and the new precured tread is governed entirely by a thin layer of unvulcanized compound known as cushion gum.',
          'If cushion gum is improperly formulated, road friction and heat build-up will cause interfacial shear failure—leading to catastrophic tread separation. Autoways produces specialized cushion gum in-house with hyper-viscous polymer chains that interlock with both the porous buffed casing and the treated underside of the precured tread band, creating a molecular weld that easily withstands tropical road surface temperatures exceeding 60°C.'
        ]
      },
      {
        heading: '5. Decades of Service: Built on Trust, Driven by Legacy',
        paragraphs: [
          'Founded in 1991 in Anuradhapura with just 12 dedicated workers during a difficult period in Sri Lanka’s history, Autoways has grown into an island-wide engineering force with over 150 employees and modern factories across Anuradhapura, Kandy (Pallekele), and Kuruwita.',
          'Having proudly supplied and serviced the Sri Lanka Transport Board for more than two decades, our ISO 9001:2015 certified operations continue to prove that Sri Lankan engineering can match international safety, durability, and cost-efficiency benchmarks.'
        ]
      }
    ]
  },
  {
    slug: 'why-tyre-inner-flaps-are-critical-for-heavy-commercial-rims',
    title: 'Why High-Density Tyre Inner Flaps Are Critical for Heavy Commercial Rims',
    subtitle: 'Understanding the protective shield that stops rim friction, dissipates brake heat, and prevents catastrophic tube blowouts.',
    category: 'Fleet Maintenance',
    publishedDate: 'September 10, 2026',
    readTime: '4 min read',
    author: {
      name: 'Autoways Quality Assurance',
      role: 'Manufacturing & Testing Division',
      avatar: '/images/rd_avatar.png'
    },
    featured: false,
    coverBadge: 'Component Engineering',
    excerpt: 'A comprehensive engineering overview on how 15", 16", and 20" rubber inner flaps isolate inner tubes from abrasive metal rim edges, preventing friction punctures and pressure drops.',
    keyTakeaways: [
      'Tyre inner flaps prevent direct contact between delicate inner tube rubber and steel wheel rims.',
      'Commercial vehicle brakes transfer immense heat to wheel rims; high-density flaps act as a thermal barrier.',
      'Autoways manufactures 15” (0.825 Kg), 16” (1.150 Kg), and 20” (1.850 Kg) precision flaps for light to heavy commercial trucks and buses.'
    ],
    tags: ['Tyre Inner Flaps', 'Commercial Fleets', 'Tube Protection', 'Thermal Shielding'],
    sections: [
      {
        heading: '1. The Unseen Protector Inside the Wheel Assembly',
        paragraphs: [
          'In tube-type commercial vehicle tyres (common across trucks, tippers, agricultural tractors, and intercity buses), the inner tube is inflated under immense pressure—frequently between 100 to 125 PSI. Directly beneath the tube lies the multi-piece steel rim, complete with bead lock rings and unavoidable surface imperfections.',
          'Without a robust protective barrier, rotational forces, rim flex, and slight debris will cause continuous chafing against the tube wall, resulting in microscopic friction punctures or sudden explosive blowouts on the highway.'
        ]
      },
      {
        heading: '2. Defending Against Extreme Rim Heat',
        paragraphs: [
          'When a 30-ton commercial truck descends an incline or navigates stop-and-go congestion, brake drums can easily reach temperatures between 200°C and 400°C. This extreme heat radiates directly into the wheel rim.',
          'Natural rubber inner tubes lose elasticity and become brittle when subjected to chronic overheating. Autoways’ precision-engineered inner flaps are formulated with heat-dissipating elastomers that provide vital thermal insulation, keeping the tube within its safe operating temperature spectrum.'
        ]
      },
      {
        heading: '3. Technical Specifications & Dimension Standards',
        paragraphs: [
          'Proper flap sizing is non-negotiable. An undersized flap will pinch the tube, while an oversized flap will fold and cause pressure ridges. Autoways manufactures heavy-duty flaps calibrated to exact weight and dimensional criteria:',
          '• 20” Flap (1.850 Kg): Engineered for heavy commercial haulage, container trailers, and SLTB commuter buses.',
          '• 16” Flap (1.150 Kg): Designed for medium-duty distribution trucks and regional delivery vehicles.',
          '• 15” Flap (0.825 Kg): Calibrated for light commercial trucks, agricultural trailers, and utility vans.'
        ]
      }
    ]
  },
  {
    slug: 'commercial-tread-pattern-selection-guide',
    title: 'Commercial Tread Pattern Selection: TBR, S-LUG, and Highway Treads Compared',
    subtitle: 'Choosing the right tread geometry for fuel economy, wet asphalt braking, and off-road quarry durability.',
    category: 'Industry & Sustainability',
    publishedDate: 'August 28, 2026',
    readTime: '5 min read',
    author: {
      name: 'Autoways Technical Services',
      role: 'Pattern Engineering Division',
      avatar: '/images/engineer_avatar.png'
    },
    featured: false,
    coverBadge: 'Tread Catalogue Guide',
    excerpt: 'Analyze the performance trade-offs between directional ribs, deep-lug traction designs, and multi-angle siping to optimize fleet cost-per-kilometer.',
    keyTakeaways: [
      'Rib-style patterns (D1, RTS, High WAY) maximize fuel efficiency and lateral stability on high-speed paved expressways.',
      'Lug patterns (S LUG, J LUG) offer superior torque transfer in muddy agricultural and quarry environments.',
      'Selecting the correct pattern for steer, drive, and trailer axles avoids premature irregular heel-and-toe wear.'
    ],
    tags: ['Tread Catalogue', 'TBR Tyres', 'S-LUG', 'Highway Treads', 'Fuel Efficiency'],
    sections: [
      {
        heading: '1. Axle Geometry and Tread Physics',
        paragraphs: [
          'Every axle position on a commercial vehicle subjects a tyre to fundamentally different stress vectors. Steer axles demand high directional precision and rapid water evacuation to prevent hydroplaning; drive axles require robust torque transmission without rib tearing; and trailer axles must withstand severe lateral scrubbing during tight turns.',
          'Matching the appropriate tread pattern from the Autoways catalogue ensures that tyres wear evenly down to the minimum allowable depth without sacrificing driver comfort or braking safety.'
        ]
      },
      {
        heading: '2. Rib vs. Lug Patterns: When to Specify Each',
        paragraphs: [
          'D1 & High WAY Treads: Featuring continuous circumferential grooves and dense siping, these patterns offer minimal rolling resistance, quiet operation, and enhanced fuel economy. Ideal for long-distance highway transport and passenger coaches.',
          'S LUG & J LUG Patterns: Incorporating deep transverse grooves and heavy-duty shoulder blocks, these patterns deliver biting traction in soft soil, mud, gravel roads, and construction sites.',
          'TBR (Truck Bus and Radial): A versatile all-wheel pattern offering a balanced compromise between drive traction and highway endurance.'
        ]
      }
    ]
  }
];
