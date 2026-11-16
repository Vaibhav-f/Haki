
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {GitBranch, LockKeyhole, Mail, User, ArrowRight, Eye, EyeOff, Code2,ShieldCheck,
} from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your backend authentication API here.
    // Navigate only after successful authentication.
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-5">

      <div className="w-full max-w-6xl grid lg:grid-cols-2
        overflow-hidden rounded-3xl border border-gray-200
        shadow-xl">

        {/* LEFT SECTION */}
        <div className="hidden lg:flex flex-col justify-between
          bg-[#09090b] text-white p-12 relative overflow-hidden">

          <div className="absolute w-96 h-96 bg-white/5
            rounded-full blur-3xl -top-32 -right-20" />

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white
                text-black flex items-center justify-center">
                <GitBranch size={25} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Haki
              </span>
            </div>

            <div className="mt-28">
              <span className="text-xs text-gray-400 uppercase
                tracking-[4px]">
                Developer Workspace
              </span>

              <h1 className="text-5xl font-bold leading-tight mt-5">
                Build.
                <br />
                Track.
                <br />
                Collaborate.
              </h1>

              <p className="text-gray-400 mt-6 max-w-sm
                leading-7">
                Manage your repositories, track code changes
                and collaborate with your team in one place.
              </p>
            </div>
          </div>

          <div className="relative z-10 space-y-5">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <ShieldCheck size={19} />
              Secure developer workspace
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <Code2 size={19} />
              Everything for your code
            </div>
            <p className="text-xs text-gray-600">
              © 2026 Haki. All rights reserved.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-white p-7 sm:p-12 lg:p-16">

          {/* Mobile Logo */}
          <div className="flex items-center gap-2 mb-10 lg:hidden">
            <div className="bg-black text-white p-2 rounded-lg">
              <GitBranch size={23} />
            </div>
            <span className="font-bold text-xl">Haki</span>
          </div>

          <div className="max-w-md mx-auto">

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {activeTab === "login"
                  ? "Welcome back"
                  : "Create your account"}
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                {activeTab === "login"
                  ? "Sign in to continue to your workspace."
                  : "Join Haki and start managing your repositories."}
              </p>
            </div>

            {/* Tabs */}
            <div className="grid grid-cols-2 bg-gray-100 p-1
              rounded-xl mb-8">

              <button
                type="button"
                onClick={() => setActiveTab("login")}
                className={`py-3 rounded-lg text-sm font-semibold
                  transition-all ${
                  activeTab === "login"
                    ? "bg-white shadow-sm text-black"
                    : "text-gray-500"
                }`}
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("signup")}
                className={`py-3 rounded-lg text-sm font-semibold
                  transition-all ${
                  activeTab === "signup"
                    ? "bg-white shadow-sm text-black"
                    : "text-gray-500"
                }`}
              >
                Create Account
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name - Signup only */}
              {activeTab === "signup" && (
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>

                  <div className="relative mt-2">
                    <User className="absolute left-4 top-3.5
                      text-gray-400" size={18} />

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full border border-gray-200
                        rounded-xl py-3 pl-11 pr-4 outline-none
                        focus:border-black transition"
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <div className="relative mt-2">
                  <Mail className="absolute left-4 top-3.5
                    text-gray-400" size={18} />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full border border-gray-200
                      rounded-xl py-3 pl-11 pr-4 outline-none
                      focus:border-black transition"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>

                  {activeTab === "login" && (
                    <button type="button"
                      className="text-xs font-semibold text-gray-600
                        hover:text-black">
                      Forgot password?
                    </button>
                  )}
                </div>

                <div className="relative mt-2">
                  <LockKeyhole className="absolute left-4 top-3.5
                    text-gray-400" size={18} />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    minLength={6}
                    className="w-full border border-gray-200
                      rounded-xl py-3 pl-11 pr-12 outline-none
                      focus:border-black transition"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-gray-400"
                  >
                    {showPassword
                      ? <EyeOff size={18} />
                      : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember */}
              {activeTab === "login" && (
                <label className="flex items-center gap-2 text-sm
                  text-gray-500 cursor-pointer">
                  <input type="checkbox"
                    className="accent-black w-4 h-4" />
                  Remember me
                </label>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-black text-white rounded-xl
                  py-3.5 font-semibold flex items-center
                  justify-center gap-2 hover:bg-gray-800
                  transition-all"
              >
                {activeTab === "login"
                  ? "Sign In"
                  : "Create Account"}

                <ArrowRight size={18} />
              </button>
            </form>

            <div className="flex items-center gap-4 my-7">
              <div className="h-px bg-gray-200 flex-1" />
              <span className="text-xs text-gray-400">
                SECURE ACCESS
              </span>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            <p className="text-center text-sm text-gray-500">
              {activeTab === "login"
                ? "New to Haki?"
                : "Already have an account?"}

              <button
                type="button"
                onClick={() =>
                  setActiveTab(activeTab === "login" ? "signup" : "login")
                }
                className="ml-1 font-bold text-black hover:underline"
              >
                {activeTab === "login"
                  ? "Create account"
                  : "Sign in"}
              </button>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
