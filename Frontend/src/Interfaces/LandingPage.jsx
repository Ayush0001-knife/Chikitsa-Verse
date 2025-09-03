import React, { useState, useEffect } from "react";
import {
  Heart,
  Activity,
  Users,
  FileText,
  Shield,
  Smartphone,
  ChevronRight,
  Menu,
  X,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useAuthentication } from "../Components/Contexts/AuthenticationContext";
import { useNavigate } from "react-router-dom";

const ChikitsaVerseLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { setCurrentPage } = useAuthentication();
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Patient Management",
      description:
        "Comprehensive patient records and monitoring system for healthcare providers",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "AI-Powered Reports",
      description:
        "Intelligent analysis of medical reports with personalized treatment recommendations",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Health Analytics",
      description:
        "Advanced health scoring and progress tracking across multiple health pillars",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Access",
      description:
        "Patients can access their records, reports, and plans from any device",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Compliant",
      description:
        "HIPAA-compliant security ensuring your medical data is always protected",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Holistic Care",
      description:
        "Complete wellness plans including exercise, nutrition, and lifestyle recommendations",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Cardiologist",
      content:
        "ChikitsaVerse has transformed how I manage my patients. The AI insights are incredibly accurate.",
      rating: 5,
    },
    {
      name: "Dr. Michael Chen",
      role: "Family Medicine",
      content:
        "The comprehensive reporting system saves me hours each week. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">
                ChikitsaVerse
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="hidden md:flex space-x-3">
              <button
                className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-all"
                onClick={() => {
                  navigate("/auth");
                  setCurrentPage("login");
                }}
              >
                Login
              </button>
              <button
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                onClick={() => {
                  navigate("/auth");
                  setCurrentPage("register");
                }}
              >
                Register
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#features" className="block py-2 text-gray-600">
                Features
              </a>
              <a href="#about" className="block py-2 text-gray-600">
                About
              </a>
              <a href="#testimonials" className="block py-2 text-gray-600">
                Reviews
              </a>
              <a href="#contact" className="block py-2 text-gray-600">
                Contact
              </a>
              <div className="flex space-x-3 pt-4">
                <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg">
                  Login
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg">
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Modern Healthcare
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent block">
                  Management
                </span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Connect doctors, patients, and admins in one intelligent
                ecosystem. Powered by AI to generate personalized treatment
                plans, exercise routines, and nutrition guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                  onClick={() => {
                    navigate("/auth");
                    setCurrentPage("register");
                  }}
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-8 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Patients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">
                    Healthcare Providers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Activity className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Health Dashboard</h3>
                      <p className="text-sm text-gray-500">Patient Overview</p>
                    </div>
                  </div>
                  <div className="text-green-500 font-bold">95 Score</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">85</div>
                    <div className="text-sm text-green-600">Nutrition</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">78</div>
                    <div className="text-sm text-orange-600">Exercise</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">AI Report Generated</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Meal Plan Updated</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Healthcare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive tools for
              healthcare management, from patient records to personalized
              treatment plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How ChikitsaVerse Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, intelligent, and effective healthcare management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Upload Patient Data
              </h3>
              <p className="text-gray-600">
                Doctors input patient information and upload medical reports for
                analysis
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Analysis</h3>
              <p className="text-gray-600">
                Our LLM analyzes the data and generates comprehensive health
                insights
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Plans</h3>
              <p className="text-gray-600">
                Receive tailored exercise plans, meal suggestions, and treatment
                recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600">
              See what doctors are saying about ChikitsaVerse
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare providers who trust ChikitsaVerse for
            comprehensive patient management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-colors font-semibold">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        {/* Background Design Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-teal-500 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  ChikitsaVerse
                </span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Revolutionizing healthcare management with AI-powered insights,
                personalized treatment plans, and seamless patient care
                coordination.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-blue-400 rounded"></div>
                </div>
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-teal-400 rounded-full"></div>
                </div>
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-purple-400 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Navigation Links - Horizontal Layout */}
            <div className="lg:col-span-7">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-blue-300">
                    Product
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-400 transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-400 transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        AI Analytics
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-400 transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Security
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-400 transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Integrations
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-4 text-teal-300">
                    Company
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li>
                      <a
                        href="#"
                        className="hover:text-teal-400 transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-teal-400 transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-teal-400 transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-teal-400 transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Press
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-4 text-purple-300">
                    Support
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li>
                      <a
                        href="#"
                        className="hover:text-purple-400 transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-purple-400 transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-purple-400 transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-purple-400 transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
              <div className="text-gray-300 text-sm">Patients Served</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-teal-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Healthcare Providers</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                99.9%
              </div>
              <div className="text-gray-300 text-sm">System Uptime</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>
                &copy; 2025 ChikitsaVerse. All rights reserved. Made with ❤️ for
                better healthcare.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                All systems operational
              </span>
              <span>|</span>
              <span>Status: Online</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChikitsaVerseLanding;
