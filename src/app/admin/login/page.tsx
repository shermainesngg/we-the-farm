"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Sprout } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error: err } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (err) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    router.push("/admin");
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Sprout className="mx-auto h-10 w-10 text-forest mb-3" />
          <h1 className="font-heading text-2xl text-earth">Admin Login</h1>
          <p className="text-sm text-soil/60 mt-1">We The Farm Dashboard</p>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4"
        >
          <div>
            <label className="block text-sm font-medium text-soil mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-cream-dark px-4 py-2.5 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-soil mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-cream-dark px-4 py-2.5 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-forest text-cream py-3 rounded-xl font-medium hover:bg-forest-light transition-colors disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
