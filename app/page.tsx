import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111111] font-sans selection:bg-[#FF5722] selection:text-white">
      {/* Background Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center">
        <div className="w-full max-w-[1440px] h-full flex justify-between px-4 sm:px-8">
          <div className="w-[1px] h-full bg-black/5"></div>
          <div className="w-[1px] h-full bg-black/5 hidden md:block"></div>
          <div className="w-[1px] h-full bg-black/5 hidden lg:block"></div>
          <div className="w-[1px] h-full bg-black/5 hidden lg:block"></div>
          <div className="w-[1px] h-full bg-black/5"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-black/10 bg-[#F4F4F0]/80 backdrop-blur-md sticky top-0 overflow-hidden">
        {/* Navbar Halo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-[#FF5722]/10 blur-[40px] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between relative z-10">
          <div className="flex items-center">
            <span className="font-bold tracking-tighter text-xl">
              <span className="font-mono">hallel</span>
              <span style={{ fontFamily: 'Orbitron, sans-serif' }}>x2</span>
              <span className="font-sans"> bank</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[11px] font-mono uppercase tracking-widest text-black/60">
            <a href="#overview" className="hover:text-black transition-colors">Overview</a>
            <a href="#partners" className="hover:text-black transition-colors">Partners</a>
            <a href="#benefits" className="hover:text-black transition-colors">Benefits</a>
            <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
          </div>

          <Link 
            href="/customize" 
            className="bg-[#111111] text-white px-6 py-2 text-xs font-mono uppercase tracking-widest hover:bg-black/80 transition-colors"
          >
            Get Card
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="overview" className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 pt-24 pb-32 border-b border-black/10 overflow-hidden">
        {/* Hero Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF5722]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF5722]/20 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="max-w-4xl relative z-10">
          <div className="inline-block bg-[#FF5722] text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 mb-8">
            Programmable Bank Cards
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.9] font-medium tracking-tighter mb-8">
            Build the<br />Programmable<br />Bank.
          </h1>
          <p className="text-lg md:text-xl text-black/60 max-w-xl mb-12 font-mono text-sm">
            Create custom bank cards for your workflows. Set limits, rules, and logic for every transaction. Hosted by hallelx2 bank.
          </p>
          <Link 
            href="/customize" 
            className="inline-flex items-center gap-4 bg-[#111111] text-white px-8 py-4 text-xs font-mono uppercase tracking-widest hover:bg-black/80 transition-colors"
          >
            Get Your Card <span>→</span>
          </Link>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="relative z-10 bg-[#111111] text-white py-3 overflow-hidden border-y border-black/10">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] text-[11px] font-mono uppercase tracking-widest">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8">PROGRAMMABLE CARDS</span>
              <span className="text-[#FF5722]">•</span>
              <span className="mx-8">API FIRST</span>
              <span className="text-[#FF5722]">•</span>
              <span className="mx-8">hallelx2 bank</span>
              <span className="text-[#FF5722]">•</span>
              <span className="mx-8">CUSTOM WORKFLOWS</span>
              <span className="text-[#FF5722]">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <section className="relative z-10 max-w-[1440px] mx-auto border-b border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-8 border-b md:border-b-0 md:border-r border-black/10">
            <div className="text-4xl font-medium mb-2">100%</div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-black/40">Customizable Logic</div>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-black/10">
            <div className="text-4xl font-medium mb-2">API</div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-black/40">First Access</div>
          </div>
          <div className="p-8">
            <div className="text-4xl font-medium mb-2">0ms</div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-black/40">Transaction Latency</div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="relative z-10 max-w-[1440px] mx-auto border-b border-black/10">
        <div className="p-8 border-b border-black/10">
          <div className="text-[10px] font-mono uppercase tracking-widest text-black/40 mb-4">Partners</div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-2xl">
            In collaboration with the companies building the financial stack.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {[
            'Google for Startups', 'Vercel', 'ElevenLabs', 'Fireworks AI', 'MongoDB',
            'Stripe', 'Dify', 'Axiom', 'Algolia', 'AgentOps'
          ].map((partner, i) => (
            <div key={i} className="aspect-[3/2] border-b border-r border-black/10 flex items-center justify-center p-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
              <span className="font-bold text-lg tracking-tighter text-black/80 text-center leading-tight">{partner}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative z-10 max-w-[1440px] mx-auto border-b border-black/10">
        <div className="p-8 border-b border-black/10">
          <div className="text-[10px] font-mono uppercase tracking-widest text-black/40 mb-4">What you get</div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-2xl">
            Developers, creators, businesses, and more.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-8 border-b md:border-b-0 md:border-r border-black/10">
            <div className="text-[10px] font-mono text-black/40 mb-4">01</div>
            <h3 className="text-xl font-medium mb-4">API Access</h3>
            <p className="text-sm font-mono text-black/60 leading-relaxed">
              Direct access to the hallelx2 core team and solution engineers from ecosystem partners — plus generous credits and premium tooling access.
            </p>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-black/10">
            <div className="text-[10px] font-mono text-black/40 mb-4">02</div>
            <h3 className="text-xl font-medium mb-4">Custom Limits</h3>
            <p className="text-sm font-mono text-black/60 leading-relaxed">
              Set spending limits, merchant categories, and geographical restrictions programmatically via our dashboard or API.
            </p>
          </div>
          <div className="p-8">
            <div className="text-[10px] font-mono text-black/40 mb-4">03</div>
            <h3 className="text-xl font-medium mb-4">Webhook Events</h3>
            <p className="text-sm font-mono text-black/60 leading-relaxed">
              Receive real-time webhooks for every transaction, authorization, and decline. Build custom logic to approve or deny in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section id="people" className="relative z-10 max-w-[1440px] mx-auto border-b border-black/10">
        <div className="p-8 border-b border-black/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF5722]/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="relative z-10">
            <div className="text-[10px] font-mono uppercase tracking-widest text-black/40 mb-4">People</div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-2xl">
              Access a network of financial experts, engineers, and operators.
            </h2>
          </div>
        </div>
        
        <div className="border-b border-black/10 bg-black/5 p-4 text-[10px] font-mono uppercase tracking-widest text-black/60">
          LEADERSHIP
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {[
            { name: 'Robin Vasan', role: 'FOUNDER', seed: 'robin' },
            { name: 'Sudheesh Nair', role: 'CEO', seed: 'sudheesh' },
            { name: 'Shuhao Zhang', role: 'CO-FOUNDER', seed: 'shuhao' },
            { name: 'Keith Zhai', role: 'COO', seed: 'keith' },
            { name: 'Mark Peng', role: 'CTO', seed: 'mark' },
          ].map((person, i) => (
            <div key={i} className="border-b md:border-b-0 border-r border-black/10 last:border-r-0 group">
              <div className="aspect-square relative grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden">
                <Image 
                  src={`https://picsum.photos/seed/${person.seed}/400/400`} 
                  alt={person.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-white/50 backdrop-blur-sm">
                <div className="font-medium">{person.name}</div>
                <div className="text-[10px] font-mono text-[#FF5722] uppercase tracking-widest mt-1">{person.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto border-b border-black/10">
        <div className="p-8 border-b border-black/10">
          <div className="text-[10px] font-mono uppercase tracking-widest text-black/40 mb-4">Timeline</div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-2xl">
            Design. Code. Deploy.<br />All in minutes.
          </h2>
        </div>
        <div className="border-b border-black/10 bg-black/5 p-4 text-[10px] font-mono uppercase tracking-widest text-black/60">
          STARTS IMMEDIATELY
        </div>
        <div>
          {[
            { num: '01', title: 'Design', desc: 'Customize your physical and virtual card appearance.', time: '1 MINUTE' },
            { num: '02', title: 'Code', desc: 'Write rules and connect webhooks to your infrastructure.', time: '5 MINUTES' },
            { num: '03', title: 'Deploy', desc: 'Issue cards instantly to your users or team members.', time: 'INSTANT' },
          ].map((step, i) => (
            <div key={i} className="grid grid-cols-[100px_1fr_100px] md:grid-cols-[150px_1fr_150px] border-b border-black/10 hover:bg-black/5 transition-colors">
              <div className="p-6 md:p-8 text-3xl md:text-4xl font-medium border-r border-black/10 flex items-center justify-center">
                {step.num}
              </div>
              <div className="p-6 md:p-8 border-r border-black/10">
                <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                <p className="text-xs font-mono text-black/60">{step.desc}</p>
              </div>
              <div className="p-6 md:p-8 flex items-center justify-center text-[10px] font-mono text-black/40 text-center">
                {step.time}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 max-w-[1440px] mx-auto border-b border-black/10">
        <div className="p-8 border-b border-black/10">
          <div className="text-[10px] font-mono uppercase tracking-widest text-black/40 mb-4">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-2xl">
            Common questions,<br />straight answers.
          </h2>
        </div>
        <div>
          {[
            { q: 'Do I have to use hallelx2 bank?', a: 'Yes, our platform is built on top of hallelx2 bank infrastructure to provide seamless programmable banking.' },
            { q: 'Is this for idea-stage founders?', a: 'Absolutely. We provide generous credits and premium tooling access to help you build and scale your financial product.' },
            { q: 'Is the API access free?', a: 'API access is free for development. Production pricing is transparent and scales with your transaction volume.' },
            { q: 'How much does it cost to issue a card?', a: 'Virtual cards are free to issue. Physical cards have a small flat fee to cover production and shipping.' },
            { q: 'What if I need physical cards?', a: 'We support physical card issuance. You can order them directly through our dashboard or via the API.' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col p-6 md:p-8 border-b border-black/10 hover:bg-black/5 transition-colors cursor-pointer group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="text-[10px] font-mono text-black/40">0{i + 1}</span>
                  <span className="text-sm md:text-base font-medium">{item.q}</span>
                </div>
                <span className="text-black/40 font-mono text-xs group-hover:text-black">[+]</span>
              </div>
              <p className="mt-4 text-sm text-black/60 font-mono pl-[60px] md:pl-[96px]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 max-w-[1440px] mx-auto border-b border-black/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF5722]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="p-8 md:p-16 lg:p-24 relative z-10">
          <div className="inline-block bg-[#FF5722] text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 mb-8">
            EVERY GREAT WORKFLOW WAS ONCE A SIMPLE SCRIPT
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-12">
            Ready to build the<br />Programmable Bank?
          </h2>
          <Link 
            href="/customize" 
            className="inline-flex items-center gap-4 border border-black px-8 py-4 text-xs font-mono uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
          >
            GET YOUR CARD <span>→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#111111] text-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 border-b border-white/10">
          <div className="p-8 border-b md:border-b-0 md:border-r border-white/10">
            <div className="flex items-center mb-8">
              <span className="font-bold tracking-tighter text-2xl text-white">
                <span className="font-mono">hallel</span>
                <span style={{ fontFamily: 'Orbitron, sans-serif' }}>x2</span>
                <span className="font-sans"> bank</span>
              </span>
            </div>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-white/10">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-6">Product</div>
            <ul className="space-y-4 text-xs font-mono text-white/60">
              <li><a href="#" className="hover:text-white">Enterprise</a></li>
              <li><a href="#" className="hover:text-white">Customers</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Integrations</a></li>
              <li><a href="#" className="hover:text-white">Docs</a></li>
            </ul>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-white/10">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-6">Resources</div>
            <ul className="space-y-4 text-xs font-mono text-white/60">
              <li><a href="#" className="hover:text-white">Cookbook ↗</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Current ↗</a></li>
              <li><a href="#" className="hover:text-white">Accelerator</a></li>
            </ul>
          </div>
          <div className="p-8">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-6">Connect</div>
            <ul className="space-y-4 text-xs font-mono text-white/60">
              <li><a href="#" className="hover:text-white">X/Twitter ↗</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn ↗</a></li>
              <li><a href="#" className="hover:text-white">Discord ↗</a></li>
              <li><a href="#" className="hover:text-white">GitHub ↗</a></li>
              <li><a href="#" className="hover:text-white">Contact Us ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto p-8 flex flex-col md:flex-row items-center justify-between text-[10px] font-mono text-white/40">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span>© 2026 hallelx2 bank</span>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
