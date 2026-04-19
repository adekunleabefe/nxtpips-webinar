import React, { useEffect, useState } from "react";

export default function Webinar() {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
    document.body.style.overflow = "hidden";
  };

  const closeForm = () => {
    setShowForm(false);
    document.body.style.overflow = "auto";
  };

  // SESSION LOGIC
  const getNextSession = () => {
    const now = new Date();
    const day = now.getDay();

    const target = new Date(now);

    const cutoff = new Date(now);
    cutoff.setHours(18, 0, 0, 0);

    if (day === 6) {
      if (now < cutoff) {
        target.setHours(20, 30, 0, 0);
        return target;
      } else {
        target.setDate(now.getDate() + 7);
      }
    } else {
      const daysUntilSaturday = (6 - day + 7) % 7;
      target.setDate(now.getDate() + daysUntilSaturday);
    }

    target.setHours(20, 30, 0, 0);
    return target;
  };

  const [targetDate, setTargetDate] = useState(getNextSession());
  const [formattedDate, setFormattedDate] = useState("");

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    setFormattedDate(
      targetDate.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    );

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTargetDate(getNextSession());
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const showDays = parseInt(timeLeft.days) > 0;

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-black opacity-40"></div>

        <div className="relative max-w-xl mx-auto">

          {/* HEADLINE */}
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">

            <span className="block">
              Why 90% of Forex Traders Fail
            </span>

            <span className="block mt-3 text-green-400">
              And How to Trade with Structure
            </span>

            <span className="block mt-2">
              Discipline & Consistency
            </span>

            <span className="block mt-4 text-lg md:text-xl text-gray-300 font-medium">
              (Even If You’ve Been Losing for Months)
            </span>

          </h1>

          {/* SUBTEXT */}
          <p className="mt-6 text-gray-300 text-base md:text-lg">
            Join this FREE live webinar and finally understand why your trades
            have been inconsistent—and how to fix it.
          </p>

          {/* DATE */}
          <div className="mt-5 text-sm text-gray-400 font-medium">
            📅 Next Live Session: {formattedDate}
            <br />
            ⏰ Starts 8:30 PM (WAT)
          </div>

          {/* CTA */}
          <div className="relative inline-block mt-8">
            <div className="absolute inset-0 blur-3xl opacity-20 bg-green-500"></div>

            <button
              onClick={openForm}
              className="relative bg-green-500 hover:bg-green-600 px-10 py-4 rounded-xl text-lg font-semibold shadow-xl shadow-green-500/40 hover:scale-105 transition transform duration-200"
            >
              👉 Reserve Your Free Spot
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-3">
            Join 100+ traders already registered • Beginner friendly
          </p>

          {/* COUNTDOWN */}
          <p className="text-xs text-gray-500 mt-6">
            ⏳ Registration closes soon
          </p>

          <div className="mt-2 flex justify-center gap-2 flex-wrap">
            {showDays && (
              <CountdownBox label="Days" value={timeLeft.days} />
            )}
            <CountdownBox label="Hours" value={timeLeft.hours} />
            <CountdownBox label="Minutes" value={timeLeft.minutes} />
            <CountdownBox label="Seconds" value={timeLeft.seconds} />
          </div>

          <p className="text-[11px] text-gray-600 mt-1">
            Registration closes when countdown ends
          </p>

        </div>
      </section>

      {/* WHAT YOU’LL LEARN */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          What You’ll Learn in This Webinar
        </h2>

        <ul className="space-y-3 text-gray-300 max-w-md mx-auto text-left">
          <li>✔ Why most traders stay inconsistent (and how to fix it)</li>
          <li>✔ The structure professional traders follow daily</li>
          <li>✔ How to stop guessing entries and trade with confidence</li>
          <li>✔ The foundation of disciplined, consistent trading</li>
        </ul>
      </section>

      {/* PROBLEM */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          If This Sounds Like You…
        </h2>

        <ul className="space-y-4 text-gray-300 text-left max-w-md mx-auto">
          <li>✔ You take trades but results are inconsistent</li>
          <li>✔ You follow signals but don’t understand why</li>
          <li>✔ You keep switching strategies</li>
          <li>✔ You feel stuck and unsure in the market</li>
        </ul>

        <p className="mt-8 text-center text-gray-400">
          Most traders don’t fail because forex is hard — they fail because they
          lack structure.
        </p>
      </section>

      {/* AUTHORITY */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold">
          NxtPips Trading Academy
        </h3>

        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          We focus on building disciplined traders — not just giving signals.
        </p>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">
          This webinar is the first step into a structured trading approach we
          build deeper in our 21-day intensive program.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-16 px-6">
        <h2 className="text-2xl font-semibold">
          Ready to Stop Guessing and Start Trading With Structure?
        </h2>

        <p className="text-gray-400 mt-2">
          Secure your spot and take the first step toward becoming a consistent trader
        </p>

        <button
          onClick={openForm}
          className="mt-6 bg-green-500 hover:bg-green-600 px-10 py-4 rounded-xl font-semibold shadow-xl shadow-green-500/40 hover:scale-105 transition transform duration-200"
        >
          👉 Register for Free Webinar
        </button>

        <p className="text-xs text-gray-500 mt-2">
          Limited slots available for each session
        </p>
      </section>

    {/* MODAL */}
{showForm && (
  <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">

    {/* BACKDROP */}
    <div
      className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      onClick={closeForm}
    ></div>

    {/* MODAL */}
    <div className="relative w-full md:max-w-xl bg-white md:rounded-2xl rounded-t-2xl shadow-2xl max-h-[90vh] flex flex-col">

      {/* HEADER */}
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <div>
          <h3 className="text-black font-semibold text-sm">
            Complete Your Registration
          </h3>
          <p className="text-xs text-gray-500">
            Takes less than 30 seconds
          </p>
        </div>

        <button
          onClick={closeForm}
          className="text-black text-xl font-semibold"
        >
          ✕
        </button>
      </div>

      {/* SUBTEXT */}
      <p className="text-xs text-gray-500 px-4 py-2 border-b">
        Your details are safe. No spam.
      </p>

      {/* FORM */}
      <div className="flex-1 overflow-y-auto">
        <iframe
          src="https://wamation.com.ng/f.php/ktd14956?src=webinar_lp"
          title="NxtPips Registration"
          className="w-full h-[700px] border-0"
        ></iframe>
      </div>

    </div>
  </div>
)}

      <footer className="text-center text-gray-500 text-sm py-6">
        © NxtPips Limited
      </footer>
    </div>
  );
}

function CountdownBox({ label, value }) {
  return (
    <div className="bg-gray-900 px-3 py-2 rounded-md border border-gray-800 text-center min-w-[55px]">
      <div className="text-sm font-semibold text-green-400">{value}</div>
      <div className="text-[10px] text-gray-500 mt-1">{label}</div>
    </div>
  );
}