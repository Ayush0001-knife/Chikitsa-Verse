import { useAuthentication } from "../Contexts/AuthenticationContext";
import {
  Heart,
  Eye,
  EyeOff,
  Mail,
  Lock,
  AlertCircle,
  Sparkles,
} from "lucide-react";

const Login = () => {
  const {
    setCurrentPage,
    isVisible,
    showPassword,
    setShowPassword,
    loginData,
    setLoginData,
    errors,
    isLoading,
    handleLogin,
  } = useAuthentication();

  return (
    <>
      <div
        className={`transform transition-all duration-700 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
        }`}
      >
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 md:p-10 w-full mx-auto relative overflow-hidden">
          {/* Glass morphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-all duration-300 shadow-2xl">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-teal-700 bg-clip-text text-transparent mb-3">
                Welcome Back
              </h2>
              <p className="text-gray-600 text-lg">
                Sign in to your ChikitsaVerse account
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${
                      errors.email
                        ? "border-red-400 bg-red-50/50"
                        : "border-gray-200 focus:border-blue-500 bg-white/50 hover:bg-white/70"
                    }`}
                    placeholder="Enter your email address"
                  />
                </div>
                {errors.email && (
                  <div className="flex items-center mt-2 text-red-500 text-sm animate-slideIn">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    className={`w-full pl-12 pr-12 py-4 border-2 rounded-2xl transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${
                      errors.password
                        ? "border-red-400 bg-red-50/50"
                        : "border-gray-200 focus:border-blue-500 bg-white/50 hover:bg-white/70"
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <div className="flex items-center mt-2 text-red-500 text-sm animate-slideIn">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    <span>{errors.password}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:transform-none font-semibold text-lg group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div
                  className="relative flex items-center justify-center"
                  onClick={handleLogin}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Signing In...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Sign In
                    </>
                  )}
                </div>
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-base">
                Don't have an account?{" "}
                <button
                  onClick={() => setCurrentPage("register")}
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors hover:underline"
                >
                  Sign up now
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
