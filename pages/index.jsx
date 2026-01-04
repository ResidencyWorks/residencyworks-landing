import React from "react";

export default function ResidencyWorksLanding() {
  // put this at the top of pages/index.jsx
const FORM_ACTION = "https://formspree.io/f/mrebrlqk"; // your Formspree endpoint
const CTA_LINK    = "#lead-form";                      // keep users on this page



  const C = {
    primaryBlue: "#1F6AE1",
    deepNavy: "#0E1F3B",
    softSlate: "#5E6B7A",
    mutedHelper: "#8A96A8",
    bgPrimary: "#F7FAFE",
    cardWhite: "#FFFFFF",
    softGlowBlue: "#E7F0FF",
    success: "#1FA971",
    shadow: "0 8px 24px rgba(15,32,67,0.06)",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: C.bgPrimary, color: C.softSlate }}>
      <section>
        <div className="mx-auto max-w-5xl px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest" style={{ color: C.mutedHelper }}>One System. Five Phases. Your Best Match.</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-bold leading-tight" style={{ color: C.deepNavy }}>ResidencyWorks is the PD-aligned system for Match 2027.</h1>
            <p className="mt-3 text-lg">Start with Interview Drills. Then unlock the tools for every high-stakes moment—application to Match Week.</p>
            <div className="mt-5 grid grid-cols-3 gap-3 max-w-md">
              {[{t:"100+",l:"scored reps"},{t:"PD",l:"aligned rubric"},{t:"7-day",l:"plan included"}].map((m)=> (
                <div key={m.l} className="rounded-2xl p-3" style={{ border: `1px solid ${C.softGlowBlue}`, backgroundColor: C.cardWhite }}>
                  <div className="text-xl font-bold" style={{ color: C.deepNavy }}>{m.t}</div>
                  <div className="text-xs" style={{ color: C.mutedHelper }}>{m.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl p-6" style={{ backgroundColor: C.cardWhite, border: `1px solid ${C.softGlowBlue}`, boxShadow: C.shadow }}>
            <h3 className="font-semibold" style={{ color: C.primaryBlue }}>Get the Interview Starter Kit</h3>
            <p className="text-sm mt-1">Daily reps. PD-aligned scoring. Includes 7-day plan, scorecard, answer bank.</p>
            <form action={FORM_ACTION} method="POST" className="mt-4 grid gap-3">
              <input name="name" placeholder="Full name (optional)" className="rounded-xl px-3 py-2 border" style={{ borderColor: C.softGlowBlue }} />
              <input type="email" name="email" required placeholder="Email" className="rounded-xl px-3 py-2 border" style={{ borderColor: C.softGlowBlue }} />
              <select name="persona" className="rounded-xl px-3 py-2 border" style={{ borderColor: C.softGlowBlue }} defaultValue="IMG">
                <option value="USMD">US MD</option>
                <option value="DO">DO</option>
                <option value="IMG">IMG</option>
              </select>
              <input type="hidden" name="utm_source" value="" />
              <input type="hidden" name="utm_campaign" value="" />
              <button type="submit" className="rounded-2xl px-6 py-3 font-semibold shadow-sm" style={{ backgroundColor: C.primaryBlue, color: "#FFFFFF" }}>Send Me the Starter Kit</button>
              <p className="text-xs" style={{ color: C.mutedHelper }}>No spam. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t" style={{ borderColor: C.softGlowBlue, backgroundColor: C.bgPrimary }}>
        <div className="mx-auto max-w-4xl px-4 py-12">
          <p className="text-sm uppercase tracking-widest text-center" style={{ color: C.mutedHelper }}>Start With Confidence</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center" style={{ color: C.deepNavy }}>Interview Drills (Now Available)</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
            <ul className="space-y-3 text-sm">
              <li>• Daily 5–20 minute reps</li>
              <li>• Scored by PD-aligned rubric (communication, fit, clinical reasoning, etc.)</li>
              <li>• Auto-tightener + feedback tracker</li>
              <li>• 10 specialties + behavioral + MMI + red flags</li>
              <li>• Mock Day Mode</li>
              <li>• Scorecard, answer bank, and 7-day Drill Plan</li>
            </ul>
            <div className="rounded-3xl p-6" style={{ backgroundColor: C.cardWhite, border: `1px solid ${C.softGlowBlue}`, boxShadow: C.shadow }}>
              <h3 className="font-semibold" style={{ color: C.primaryBlue }}>Prefer no form?</h3>
              <p className="text-sm mt-1">Grab it directly, then you’ll see the waitlist screen.</p>
              <a href={CTA_LINK} className="mt-4 inline-flex rounded-2xl px-6 py-3 font-semibold shadow-sm" style={{ backgroundColor: C.primaryBlue, color: "#FFFFFF" }}>Get the Starter Kit</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t" style={{ borderColor: C.softGlowBlue, backgroundColor: C.deepNavy, color: "#FFFFFF" }}>
        <div className="mx-auto max-w-4xl px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Start With Interview Drills. Unlock the System.</h2>
          <p className="mt-2" style={{ color: "#D7DEEA" }}>You’re applying to a career, not a school. Don’t wing it.</p>
          <a href={CTA_LINK} className="mt-6 inline-flex rounded-2xl px-6 py-3 font-semibold shadow-sm" style={{ backgroundColor: "#FFFFFF", color: C.deepNavy }}>Claim Your Starter Kit + Join the Waitlist</a>
        </div>
      </section>
    </div>
  );
}
