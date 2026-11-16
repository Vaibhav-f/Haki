
import { useState } from "react";
import { FolderGit2, Activity, GitCommitHorizontal, Search, Star, MoreHorizontal, ArrowUpRight,} from "lucide-react";

const repositories = [
  {
    name: "Aptenza",
    description: "A modern apartment and property management platform.",
    language: "React",
    color: "bg-blue-500",
    updated: "Updated 2 hours ago",
    visibility: "Public",
  },
  {
    name: "SeorinPlay",
    description: "A movie discovery platform with a modern streaming UI.",
    language: "JavaScript",
    color: "bg-yellow-400",
    updated: "Updated yesterday",
    visibility: "Public",
  },
  {
    name: "Portfolio",
    description: "My personal developer portfolio and projects.",
    language: "CSS",
    color: "bg-purple-500",
    updated: "Updated 3 days ago",
    visibility: "Public",
  },
];

const Dashboard = () => {
  const [search, setSearch] = useState("");

  const filteredRepos = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen p-5 sm:p-8 lg:p-10 bg-transparent">

      {/* Hero Section */}
      <section className="mb-9">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#bf4aa8] text-xs font-semibold mb-5">
          <Activity size={14} />
          YOUR DEVELOPER WORKSPACE
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
          Build. Manage.
          <span className="text-[#5cbdb9]"> Collaborate.</span>
        </h1>

        <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl leading-7">
          Everything you build deserves a place. Manage your repositories,
          track your projects and keep your development journey organized
          with Haki.
        </p>
      </section>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">

        {/* Total Repositories */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <FolderGit2 size={22} />
            </div>
            <span className="text-xs text-gray-400 font-medium">
              ALL TIME
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Total Repositories
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            {repositories.length.toString().padStart(2, "0")}
          </h2>

          <p className="text-xs text-gray-400 mt-2">
            Your saved repositories
          </p>
        </div>

        {/* Active Projects */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-green-50 text-green-600 rounded-xl">
              <Activity size={22} />
            </div>
            <span className="text-xs text-green-600 font-medium">
              IN PROGRESS
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Active Projects
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            02
          </h2>

          <p className="text-xs text-gray-400 mt-2">
            Projects currently in development
          </p>
        </div>

        {/* Total Commits */}
        <div className="bg-white/60 backdrop-blur-sm backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <GitCommitHorizontal size={22} />
            </div>
            <span className="text-xs text-gray-400 font-medium">
              CONTRIBUTIONS
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-5">
            Total Commits
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            128
          </h2>

          <p className="text-xs text-gray-400 mt-2">
            Your development activity
          </p>
        </div>

      </section>

      {/* All Repositories */}
      <section>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              All Repositories
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Explore and manage your projects
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search repositories..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/80 border border-gray-200 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl overflow-hidden">

          {filteredRepos.length > 0 ? (
            filteredRepos.map((repo, index) => (
              <div
                key={repo.name}
                className={`p-5 sm:p-6 hover:bg-gray-50/70 transition ${
                  index !== filteredRepos.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">

                  <div className="flex items-start gap-3 min-w-0">
                    <div className="p-2.5 bg-gray-100 rounded-xl text-gray-600 shrink-0">
                      <FolderGit2 size={21} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-[#5cbdb9] text-xl hover:underline cursor-pointer">
                          {repo.name}
                        </h3>

                        <span className="text-[10px] border border-gray-200 text-gray-500 px-2 py-0.5 rounded-full">
                          {repo.visibility}
                        </span>
                      </div>

                      <p className="text-sm text-gray-500 mt-2 leading-6">
                        {repo.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-2.5 h-2.5 rounded-full ${repo.color}`}></span>
                          {repo.language}
                        </span>

                        <span>{repo.updated}</span>

                        <span className="flex items-center gap-1">
                          <Star size={13} />
                          0
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition"
                    aria-label={`More options for ${repo.name}`}
                  >
                    <MoreHorizontal size={20} />
                  </button>

                </div>
              </div>
            ))
          ) : (
            <div className="py-14 text-center">
              <Search size={28} className="mx-auto text-gray-300 mb-3" />
              <p className="text-gray-700 font-medium">
                No repositories found
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Try searching with another name.
              </p>
            </div>
          )}

        </div>

      </section>

      {/* Bottom Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-8 text-xs text-gray-400">
        <p>© 2026 Haki. Built for developers.</p>
        <p className="flex items-center gap-1">
          Made for your next big idea <ArrowUpRight size={13} />
        </p>
      </footer>

    </div>
  );
};

export default Dashboard;
