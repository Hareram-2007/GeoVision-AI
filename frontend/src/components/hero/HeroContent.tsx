import HeroStats from "./HeroStats";

function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Badge */}
      <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        🌍 AI Powered Geospatial Intelligence
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
        Transform Satellite Data into{" "}
        <span className="text-blue-600">Actionable Insights</span>
      </h1>

      {/* Description */}
      <p className="mt-6 text-lg leading-8 text-slate-600">
        GeoVision AI helps organizations analyze satellite imagery,
        monitor environmental changes, detect land-use patterns,
        and make smarter decisions using Artificial Intelligence.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">

        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
          Start Analysis
        </button>

        <button className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600">
          Explore Features
        </button>

      </div>

      <HeroStats />

    </div>
  );
}

export default HeroContent;