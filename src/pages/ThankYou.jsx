import { useEffect, useState } from "react";

export default function ThankYou() {
  // 🔥 SESSION LOGIC (same as webinar page)
  const getNextSession = () => {
    const now = new Date();
    const day = now.getDay();

    const target = new Date(now);

    const cutoff = new Date(now);
    cutoff.setHours(18, 0, 0, 0); // Saturday 6PM

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

  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const session = getNextSession();

    setFormattedDate(
      session.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    );
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">

        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          🎉 You’re Successfully Registered!
        </h1>

        {/* CONFIRMATION */}
        <p className="mt-4 text-gray-300 text-sm md:text-base">
          Your spot for the NxtPips Forex Webinar is confirmed.
        </p>

        {/* 🔥 DATE (DYNAMIC) */}
        <div className="mt-4 text-sm text-gray-400">
          📅 {formattedDate}
          <br />
          ⏰ Starts 8:30 PM (WAT)
        </div>

        {/* 🔥 IMPORTANT STEP */}
        <div className="mt-6 bg-gray-900 p-5 rounded-xl border border-gray-800 text-left">
          <p className="text-sm text-yellow-400 font-semibold">
            ⚠️ Important Next Step
          </p>

          <p className="text-sm text-gray-300 mt-2">
            Check your WhatsApp now and join the private webinar group.
          </p>

          <p className="text-sm text-gray-400 mt-1">
            That’s where your access link and reminders will be sent before the session.
          </p>
        </div>

        {/* 🔥 SOCIAL PROOF / GUIDANCE */}
        <p className="mt-4 text-xs text-gray-500">
          Most people who attend live get the best results
        </p>

        {/* CHANNEL SECTION */}
        <div className="mt-8">
          <p className="text-sm text-gray-400">
            While you wait…
          </p>

          <p className="text-gray-300 mt-2 text-sm">
            Follow our updates channel to see:
          </p>

          <ul className="mt-3 text-sm text-gray-400 space-y-1">
            <li>• Trading insights</li>
            <li>• Student results</li>
            <li>• Real trader progress</li>
          </ul>

          {/* CHANNEL BUTTON */}
          <button
            onClick={() =>
              (window.location.href =
                "https://t.me/nxtpipsofficial")
            }
            className="mt-6 bg-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            📢 Follow Updates Channel
          </button>
        </div>

      </div>
    </div>
  );
}