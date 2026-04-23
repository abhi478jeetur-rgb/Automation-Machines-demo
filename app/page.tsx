'use client';

import React, { Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { Snowflake, Maximize, Zap, Code2, Cpu, Globe2, ShieldCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import LazyRender from '@/components/LazyRender';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function AutomationLandingPage() {
  return (
    <main className="bg-black text-white selection:bg-brand-orange selection:text-black min-h-screen">
      
      {/* Fixed Top Demo Banner */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-zinc-950/90 border-b border-brand-orange/30 text-white font-mono text-[10px] sm:text-xs tracking-widest py-3 px-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 backdrop-blur-xl shadow-lg pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse shadow-[0_0_8px_rgba(242,125,38,0.8)]" />
          <span className="text-white/80">THIS IS A DEMO WEBSITE.</span>
        </div>
        <a 
          href="https://www.newaihubber.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-brand-orange text-black px-6 py-2 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center whitespace-nowrap shadow-[0_0_15px_rgba(242,125,38,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95"
        >
          Subscribe / Visit Real Website
        </a>
      </div>

      {/* Spline Background - fixed so it covers the whole screen while scrolling */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none" 
        style={{ transform: 'translateX(15%)' }}
      >
        <Suspense fallback={<div className="w-full h-full bg-black"></div>}>
          <Spline 
            scene="https://prod.spline.design/PIgTjpRFA03yfLyK/scene.splinecode" 
            className="w-full h-full pointer-events-auto"
          />
        </Suspense>
      </div>

      {/* Header with Logo */}
      <header className="absolute top-[80px] sm:top-[60px] left-0 w-full p-6 z-50 pointer-events-none flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Automation Machines Logo" 
            width={48} 
            height={48} 
            className="w-10 h-10 object-contain pointer-events-auto"
            referrerPolicy="no-referrer"
          />
          <span className="font-display font-semibold tracking-widest text-white text-lg hidden sm:block pointer-events-auto">
            AM.
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 w-full min-h-screen flex flex-col justify-between px-4 md:px-6 pt-36 md:pt-40 pb-6 pointer-events-none">
        
        {/* Top Section */}
        <div className="mx-auto w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-1 md:col-span-12 space-y-6 md:space-y-8">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1] md:leading-[0.9] font-extralight tracking-tight uppercase max-w-2xl bg-gradient-to-r from-white/20 via-white/70 to-white bg-clip-text text-transparent pointer-events-auto"
            >
              Automation<br/>Machines &bull;
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-base text-white/80 max-w-md leading-relaxed font-light pointer-events-auto"
            >
              Developed with high-end skills and a pixel-perfect frame for those who don't just browse the web—they build it. Code your dreams....
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4 flex-row"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-orange transition-colors cursor-pointer pointer-events-auto bg-black/50 backdrop-blur-sm group">
                <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-white/80 group-hover:text-brand-orange transition-colors" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-orange transition-colors cursor-pointer pointer-events-auto bg-black/50 backdrop-blur-sm group">
                <Maximize className="w-4 h-4 md:w-5 md:h-5 text-white/80 group-hover:text-brand-orange transition-colors" />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-orange transition-colors cursor-pointer pointer-events-auto bg-black/50 backdrop-blur-sm group">
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-white/80 group-hover:text-brand-orange transition-colors" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mx-auto w-full max-w-[1440px] flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0 mt-16 md:mt-0">
          
          {/* Left side -- Technical Specs card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="p-6 md:p-8 w-full md:max-w-md pointer-events-auto bg-black/40 backdrop-blur-md border border-white/5 md:border-transparent rounded-2xl md:rounded-none md:bg-transparent"
          >
            <h3 className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/60 mb-5">
              Technical Specs
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-white/10 pb-3 group cursor-default">
                <span className="text-xs text-white/70 group-hover:text-brand-orange transition-colors">Stack</span>
                <span className="text-xs font-mono tracking-tight text-white group-hover:text-brand-orange transition-colors">React + Node + SQL</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-3 group cursor-default">
                <span className="text-xs text-white/70 group-hover:text-brand-orange transition-colors">Logic</span>
                <span className="text-xs font-mono tracking-tight text-white group-hover:text-brand-orange transition-colors">V8 - Runtime Logic</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-3 group cursor-default">
                <span className="text-xs text-white/70 group-hover:text-brand-orange transition-colors">Uptime</span>
                <span className="text-xs font-mono tracking-tight text-white group-hover:text-brand-orange transition-colors">99.9% High-Avail</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-3 group cursor-default">
                <span className="text-xs text-white/70 group-hover:text-brand-orange transition-colors">Scale</span>
                <span className="text-xs font-mono tracking-tight text-white group-hover:text-brand-orange transition-colors">Responsive Layout</span>
              </div>
            </div>
          </motion.div>

          {/* Right side -- Pill badge bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center w-full md:w-auto"
          >
            <div className="flex flex-wrap gap-2 md:gap-3 bg-black/40 backdrop-blur-md rounded-2xl md:rounded-full p-2 md:p-3 border border-white/10 w-full md:w-auto pointer-events-auto shadow-2xl">
              <span className="px-4 py-2 text-[10px] font-mono tracking-widest bg-brand-orange text-black font-bold rounded-full">
                TS/JS
              </span>
              <span className="px-3 py-2 text-[10px] whitespace-nowrap font-mono tracking-widest border border-white/20 rounded-full hover:bg-white/10 transition-colors cursor-default">
                V1
              </span>
              <span className="px-4 py-2 text-[10px] whitespace-nowrap font-mono tracking-widest border border-white/20 rounded-full hover:bg-white/10 transition-colors cursor-default">
                Full-Stack
              </span>
              <span className="px-4 py-2 text-[10px] whitespace-nowrap font-mono tracking-widest border border-white/20 rounded-full hover:bg-white/10 transition-colors cursor-default">
                Cloud-Ready
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Lazy render sections below the fold to ensure peak performance */}
      <LazyRender minHeight="100vh">
        {/* Features Section */}
        <section className="relative z-10 w-full py-24 px-4 md:px-6 bg-black/90 backdrop-blur-xl border-t border-white/10">
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl md:text-5xl tracking-tight font-light mb-6 text-white text-glow">
                Re-engineering the Base.
              </h2>
              <p className="text-white/60 font-light leading-relaxed mb-16">
                Our core infrastructure is built for those who push the envelope. Forget the defaults; every detail is precision crafted optimized for speed, reliability, and scale on any device.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-colors group cursor-default">
                <Code2 className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors mb-6" />
                <h4 className="text-xl font-medium mb-3 group-hover:text-brand-orange transition-colors">Modern Syntax</h4>
                <p className="text-sm text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors">
                  Written strictly in standard TypeScript, prioritizing type-safety and developer-experience.
                </p>
              </div>
              <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-colors group cursor-default">
                <Cpu className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors mb-6" />
                <h4 className="text-xl font-medium mb-3 group-hover:text-brand-orange transition-colors">High Performance</h4>
                <p className="text-sm text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors">
                  V8 optimized logic, zero-client footprint where possible, ensuring blazingly fast load times.
                </p>
              </div>
              <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-colors group cursor-default">
                <Globe2 className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors mb-6" />
                <h4 className="text-xl font-medium mb-3 group-hover:text-brand-orange transition-colors">Edge Ready</h4>
                <p className="text-sm text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors">
                  Deploy globally to the edge in seconds. We guarantee extreme availability everywhere.
                </p>
              </div>
              <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-colors group cursor-default">
                <ShieldCheck className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors mb-6" />
                <h4 className="text-xl font-medium mb-3 group-hover:text-brand-orange transition-colors">Enterprise Security</h4>
                <p className="text-sm text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors">
                  Bank-level encryption and secure defaults out of the box, continuously audited and monitored.
                </p>
              </div>
            </div>
          </div>
        </section>
      </LazyRender>

      <LazyRender minHeight="50vh">
        {/* Cross-Browser & CTA Section */}
        <section className="relative z-10 w-full py-32 px-4 md:px-6 bg-black border-t border-white/10 flex flex-col items-center justify-center text-center">
          <div className="mx-auto w-full max-w-3xl">
             <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-8 font-light bg-gradient-to-t from-white/40 to-white bg-clip-text text-transparent">
               Initialize Sequence.
             </h2>
             <p className="text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
               Fully optimized across all modern browsers and devices. Desktop or mobile, the experience remains seamlessly bold and performant. Join the frontier now.
             </p>
             
             <button className="group relative inline-flex items-center gap-3 bg-brand-orange text-black px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest font-bold hover:bg-white transition-all overflow-hidden shadow-[0_0_15px_rgba(242,125,38,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
               <span className="relative z-10">Deploy Now</span>
               <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 w-full py-8 border-t border-white/5 bg-black text-center text-white/40 text-xs font-mono uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} Automation Machines. All records preserved.</p>
        </footer>
      </LazyRender>
    </main>
  );
}
