import Image from 'next/image';
import { Terminal, Box, Shield, Database, AtSign, Network, Webhook, Radio, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b-2 border-primary bg-dark/95 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary flex items-center justify-center -rotate-6 border border-white">
                <Terminal className="text-dark w-6 h-6" strokeWidth={3} />
              </div>
              <span className="text-2xl font-display tracking-tighter text-white">INNOCOLLAB_</span>
            </div>
            <nav className="hidden md:flex items-center gap-10">
              <a className="text-xs font-bold hover:text-primary transition-colors uppercase tracking-widest" href="#services">// Solutions</a>
              <a className="text-xs font-bold hover:text-secondary transition-colors uppercase tracking-widest" href="#process">// Methodology</a>
              <a className="px-5 py-2 bg-secondary text-white text-lg font-display hover:translate-x-1 hover:-translate-y-1 transition-transform border-2 border-white neo-brutalist-border" href="#contact">
                ACQUIRE_ADVAN_TAGE
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            alt="Strategic Visual" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvYLumoPC1304yv7HghGgiZ_eK5zlPCGEbWeMV9g1flVhAOd0eR_gFmvuWLuMW_f16XY1x9-cD4S5WtCIbqJ_1G6f-AB2-I_hER_xwwuauQe_5kVfp-Z0WOdoz0N760PkoE1UR4_TcTQev1nWDr9lWsZmdkUj8-WjLw-nQCveb4QMzYOTVikemkQV7vpJoCHQcU-qrjAlQHAbPQg9NbVIOh1LUFIhxi6QiBU2DZ2bsRib0KvJDEL3iBq_hCJf9JGblVEwPPdTmHFE"
            fill
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 glitch-overlay"></div>
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[150px] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 py-24">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary text-dark px-4 py-1 mb-8 font-bold text-xs uppercase tracking-widest">
              &lt;STATUS: SYSTEM_OPTIMIZED_V2.0 /&gt;
            </div>
            <h1 className="text-6xl md:text-8xl font-display leading-[0.9] mb-8 text-white">
              SCALABLE SYSTEMS.<br/>
              ENTERPRISE SECURITY.<br/>
              <span className="text-primary italic">STRATEGIC ADVANTAGE.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 border-l-2 border-secondary pl-8 leading-loose font-light">
              Innocollab delivers high-performance technical infrastructure for market leaders. We engineer resilient, future-proof software solutions that drive measurable business transformation and sustainable growth.
            </p>
            <div className="flex flex-wrap gap-8">
              <button className="px-12 py-5 bg-primary text-dark font-display text-3xl hover:translate-x-1 hover:-translate-y-1 transition-all border-2 border-white neo-brutalist-border-fuchsia">
                DRIVE INNOVATION
              </button>
              <button className="px-12 py-5 bg-transparent border-2 border-white text-white font-display text-3xl hover:bg-white hover:text-dark transition-all">
                VIEW_SOLUTIONS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-dark relative border-t-4 border-secondary" id="services">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-32 flex items-baseline gap-4 relative">
            <h2 className="text-8xl md:text-[10rem] text-secondary opacity-10 absolute -top-16 left-0 leading-none select-none">ARCHITECTURE</h2>
            <div className="relative z-10">
              <h3 className="text-5xl md:text-7xl font-display mb-4">CORE_CAPABILITIES</h3>
              <p className="text-primary text-lg font-bold tracking-[0.2em] uppercase">// High-Performance Engineering for Enterprise</p>
            </div>
          </div>
          <div className="space-y-16">
            <div className="group relative bg-zinc-900/50 border border-zinc-800 p-8 md:p-14 transition-all hover:border-primary">
              <div className="flex flex-col md:flex-row md:items-center gap-10">
                <div className="w-20 h-20 flex-shrink-0 bg-dark border-2 border-primary flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all duration-500">
                  <Box className="text-primary w-10 h-10 -rotate-45 group-hover:rotate-0 transition-all duration-500" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-3xl md:text-4xl mb-4 text-white group-hover:text-primary transition-colors tracking-tight">01. NEXT-GEN WEB ARCHITECTURE</h4>
                  <p className="text-slate-400 text-lg leading-relaxed">Developing sophisticated, responsive frameworks optimized for speed and user engagement. We engineer digital assets that define market standards.</p>
                </div>
              </div>
            </div>
            <div className="group relative bg-zinc-900/50 border border-zinc-800 p-8 md:p-14 transition-all hover:border-secondary">
              <div className="flex flex-col md:flex-row md:items-center gap-10">
                <div className="w-20 h-20 flex-shrink-0 bg-dark border-2 border-secondary flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-all duration-500">
                  <Shield className="text-secondary w-10 h-10 rotate-12 group-hover:rotate-0 transition-all duration-500" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-3xl md:text-4xl mb-4 text-white group-hover:text-secondary transition-colors tracking-tight">02. MOBILE ECOSYSTEMS</h4>
                  <p className="text-slate-400 text-lg leading-relaxed">Cross-platform mobile experiences engineered for seamless integration across all enterprise touchpoints. Reliability in every interaction.</p>
                </div>
              </div>
            </div>
            <div className="group relative bg-zinc-900/50 border border-zinc-800 p-8 md:p-14 transition-all hover:border-white">
              <div className="flex flex-col md:flex-row md:items-center gap-10">
                <div className="w-20 h-20 flex-shrink-0 bg-dark border-2 border-white flex items-center justify-center rotate-180 group-hover:rotate-0 transition-all duration-500">
                  <Database className="text-white w-10 h-10 -rotate-180 group-hover:rotate-0 transition-all duration-500" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-3xl md:text-4xl mb-4 text-white group-hover:text-white transition-colors tracking-tight">03. DATA INFRASTRUCTURE</h4>
                  <p className="text-slate-400 text-lg leading-relaxed">Robust back-end systems engineered for high-volume data processing and enterprise-level scalability. Built for sustained performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-primary text-dark overflow-hidden" id="process">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl md:text-8xl font-display mb-20 leading-none">PROJECT_METHODOLOGY</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 bg-dark text-white p-12 neo-brutalist-border-fuchsia border border-zinc-800">
              <span className="font-display text-7xl text-secondary block mb-6 opacity-80">01</span>
              <h4 className="text-3xl mb-4 font-display tracking-wide">ASSESSMENT</h4>
              <p className="text-slate-300 leading-relaxed text-sm">Comprehensive analysis of technical requirements and market opportunities to define clear strategic objectives.</p>
            </div>
            <div className="hidden md:block md:col-span-2"></div>
            <div className="md:col-span-5 bg-dark text-white p-12 neo-brutalist-border border border-zinc-800 mt-12 md:mt-24">
              <span className="font-display text-7xl text-primary block mb-6 opacity-80">02</span>
              <h4 className="text-3xl mb-4 font-display tracking-wide">ARCHITECTURE</h4>
              <p className="text-slate-300 leading-relaxed text-sm">System design and logic blueprinting focused on operational synergy and long-term technical sustainability.</p>
            </div>
            <div className="md:col-span-5 bg-dark text-white p-12 border border-zinc-800 -mt-4 md:-mt-8">
              <span className="font-display text-7xl text-white opacity-20 block mb-6">03</span>
              <h4 className="text-3xl mb-4 font-display tracking-wide">EXECUTION</h4>
              <p className="text-slate-300 leading-relaxed text-sm">Agile development cycles with continuous integration to ensure rapid, reliable delivery of key milestones.</p>
            </div>
            <div className="md:col-span-6 md:col-start-7 bg-secondary text-white p-12 border-2 border-dark neo-brutalist-border">
              <span className="font-display text-7xl text-dark block mb-6 opacity-50">04</span>
              <h4 className="text-3xl mb-4 font-display text-dark tracking-wide">DEPLOYMENT</h4>
              <p className="text-white font-bold text-sm">Rigorous quality assurance and strategic launch management to ensure immediate market impact and adoption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-5xl md:text-7xl font-display mb-24 text-center">INDUSTRY_PERSPECTIVES</h3>
          <div className="relative min-h-[450px]">
            <div className="absolute top-0 left-0 w-full md:w-3/5 bg-zinc-900/40 border-2 border-primary p-12 z-10 transform rotate-1 backdrop-blur-sm">
              <p className="text-xl italic mb-10 font-mono leading-relaxed">&quot;INNOCOLLAB RESOLVED OUR TECHNICAL DEBT WITH REMARKABLE EFFICIENCY. THEIR ENGINEERING STANDARDS ARE EXCEPTIONAL.&quot;</p>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 grayscale hover:grayscale-0 transition-all relative">
                  <Image 
                    className="object-cover border border-white" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc8ThTmQtFrWVK9x9iLCWD7fa-fwYv4zH-63mVnQZrvxxVm83F8Hd4Ol1dBZehP7BQd9XZgCXd8xtXSax_wgC8lbIdT9eZ6qowKlIJTHbRkw1na6JWKxrgAEMk2WyOLjIhTmmprR7nCdc8C2g_xOXOTl2wNKlxTuUve7yjOonX9-4iehhkSbYU_ClOMVP8tGfdG_CX6jZ3EUcV5O3Ng2sC1XtblIjvhNYzTYW22LShO7-XTfzPbJBhUf9lA5TZ_-ZLz8WiiVpXBvc"
                    alt="Sarah Jenkins"
                    fill
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-display text-xl text-primary">SARAH JENKINS</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">CHIEF TECHNOLOGY OFFICER // TECHFLOW</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-full md:w-3/5 bg-zinc-900/40 border-2 border-secondary p-12 z-20 transform -rotate-1 md:translate-x-8 backdrop-blur-sm">
              <p className="text-xl italic mb-10 font-mono leading-relaxed">&quot;THE DEPLOYMENT PHASE WAS EXECUTED FLAWLESSLY. OUR NEW PLATFORM EXCEEDED PERFORMANCE KPI&apos;S WITHIN THE FIRST QUARTER.&quot;</p>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 grayscale hover:grayscale-0 transition-all relative">
                  <Image 
                    className="object-cover border border-white" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh3Hzj-Ya78NmYpvmOLtDF4zXDlQPU2L_aSXUOw3bNeZQfRb7VHY0xYiJ5jNE9PBzk0yJvPAX41HIpS6jxANxfxU_YzCCGZ0SHj35yEDlRANKwZlupg6HxRzrBRAmZM5-dq7Nwp4Jr_-Gt0hIVjcucfnK2PLAnbd0povL6OTRkLyZacpsVFbYkuBOi7YFko6OOgjzXzUYailrShBOMPzoJaNg-91v8riKXuw_Py-ddg87_kvWYr7hAtUc0C-zDwgPGIqJ38TxtbDk"
                    alt="Michael Chen"
                    fill
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-display text-xl text-secondary">MICHAEL CHEN</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">DIRECTOR OF PRODUCT // INNOVATE HQ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="pt-32 pb-12 bg-dark border-t-4 border-primary" id="contact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 mb-32 items-center">
            <div>
              <h3 className="text-7xl md:text-8xl font-display mb-8 leading-none">JOIN_THE<br/><span className="text-primary">VANGUARD.</span></h3>
              <p className="text-xl text-slate-400 mb-12 max-w-md leading-relaxed">Request a strategic consultation or initiate an enterprise partnership agreement today.</p>
              <div className="space-y-8 font-bold text-lg">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 bg-primary text-dark flex items-center justify-center border border-white group-hover:scale-105 transition-transform">
                    <AtSign className="w-6 h-6 font-black" strokeWidth={3} />
                  </div>
                  <span className="hover:text-primary transition-colors tracking-tighter">PARTNERS@INNOCOLLAB.IO</span>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-secondary text-white flex items-center justify-center border border-white group-hover:scale-105 transition-transform">
                    <Network className="w-6 h-6 font-black" strokeWidth={3} />
                  </div>
                  <span className="tracking-tighter uppercase">Global HQ: SAN FRANCISCO, CA</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 bg-secondary/20 transform rotate-1 z-0"></div>
              <div className="relative z-10 bg-dark p-10 md:p-14 border border-zinc-800 neo-brutalist-border-fuchsia">
                <form action="#" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">// CONTACT_NAME</label>
                      <input className="w-full bg-zinc-900 border border-zinc-700 text-white p-4 focus:border-primary focus:ring-0 outline-none text-sm font-mono" placeholder="FULL NAME" type="text"/>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">// CONTACT_EMAIL</label>
                      <input className="w-full bg-zinc-900 border border-zinc-700 text-white p-4 focus:border-primary focus:ring-0 outline-none text-sm font-mono" placeholder="EMAIL ADDRESS" type="email"/>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">// PROJECT_BRIEF</label>
                    <textarea className="w-full bg-zinc-900 border border-zinc-700 text-white p-4 focus:border-primary focus:ring-0 outline-none text-sm font-mono" placeholder="OUTLINE YOUR OBJECTIVES..." rows={4}></textarea>
                  </div>
                  <button className="w-full py-6 bg-primary text-dark font-display text-4xl hover:bg-white hover:text-dark transition-all neo-brutalist-border border-2 border-white">
                    INITIATE_CONSULTATION
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-display text-white opacity-80">INNOCOLLAB_V.24</span>
            </div>
            <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase font-bold">PROPRIETARY TRANSMISSION / ALL RIGHTS RESERVED / ENTERPRISE GRADE</p>
            <div className="flex gap-8">
              <a className="text-zinc-500 hover:text-primary transition-all scale-125" href="#"><Webhook className="w-5 h-5" /></a>
              <a className="text-zinc-500 hover:text-secondary transition-all scale-125" href="#"><Radio className="w-5 h-5" /></a>
              <a className="text-zinc-500 hover:text-white transition-all scale-125" href="#"><Cpu className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
