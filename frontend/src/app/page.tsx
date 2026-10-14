type Implementation = {
  customer: string;
  integration: string;
  status: "Blocked" | "On track";
};

const implementations: Implementation[] = [
  {
    customer: "Acme Corp",
    integration: "PeopleFlow API",
    status: "Blocked",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <header className="mb-12">
          <p className="mb-2 text-sm font-medium text-cyan-400">
            ImplementationOS · Version 0.1
          </p>

          <h1 className="text-4xl font-bold">
            Implementation Control Plane
          </h1>

          <p className="mt-3 text-slate-400">
            Monitor enterprise customer implementations,
            integration readiness, and go-live blockers.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          {[
            { label: "Active Implementations", value: "1" },
            { label: "Open Blockers", value: "1" },
            { label: "Go-Live Ready", value: "0" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <p className="text-sm text-slate-400">
                {metric.label}
              </p>

              <p className="mt-3 text-3xl font-bold">
                {metric.value}
              </p>
            </div>
          ))}
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold">
              Customer Implementations
            </h2>

            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              Demo data
            </span>
          </div>

          <div className="space-y-4">
            {implementations.map((project) => (
              <div
                key={project.customer}
                className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-800 p-4"
              >
                <div>
                  <h3 className="font-medium">
                    {project.customer}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {project.integration}
                  </p>
                </div>

                <span
                  className={
                    project.status === "Blocked"
                      ? "rounded-full bg-red-950 px-3 py-1 text-sm text-red-300"
                      : "rounded-full bg-green-950 px-3 py-1 text-sm text-green-300"
                  }
                >
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-8 text-sm text-slate-500">
          Development preview · Live integrations are not connected yet.
        </p>
      </div>
    </main>
  );
}