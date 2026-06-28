function HeroStats() {
  const stats = [
    {
      value: "15K+",
      label: "Satellite Images",
    },
    {
      value: "98%",
      label: "AI Accuracy",
    },
    {
      value: "24/7",
      label: "Monitoring",
    },
  ];

  return (
    <div className="mt-12 flex flex-wrap gap-10">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-3xl font-bold text-slate-900">
            {stat.value}
          </h3>

          <p className="mt-1 text-slate-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;