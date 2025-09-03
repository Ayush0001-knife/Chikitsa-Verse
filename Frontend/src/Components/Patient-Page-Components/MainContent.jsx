import React from "react";
import HealthScoreCard from "./HealthScoreCard";
import ActionCard from "./ActionCard";
import {
  AlertTriangle,
  FileText,
  Download,
  Share2,
  MoreVertical,
  Calendar,
  Activity,
  Heart,
  Brain,
  Moon,
  Zap,
  Upload,
  Edit,
  Send,
  BarChart3,
  Eye,
  Stethoscope,
  Clock,
  Star,
  TrendingUp,
  CheckCircle,
  Dumbbell,
  TestTube,
  Utensils,
} from "lucide-react";
import { usePatientPage } from "../Contexts/PatientPageContext";

const MainContent = () => {
  const { activeTab, patient, getAlertColor, getAlertIcon } = usePatientPage();

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {activeTab === "dashboard" && (
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Left Column - Patient Details */}
          <div className="xl:col-span-1 space-y-6">
            {/* Patient Profile Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#F5F5F5] p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {patient.initials}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {patient.name}
                </h3>
                <p className="text-gray-500">{patient.birthDate}</p>
                <a
                  href={`mailto:${patient.email}`}
                  className="text-[#1E3A5F] hover:underline text-sm"
                >
                  {patient.email}
                </a>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Age</span>
                    <div className="font-medium text-gray-900">
                      {patient.age}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Sex</span>
                    <div className="font-medium text-gray-900">
                      {patient.gender}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Blood Group</span>
                    <div className="font-medium text-gray-900">
                      {patient.bloodGroup}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Height</span>
                    <div className="font-medium text-gray-900">
                      {patient.height}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Weight</span>
                    <div className="font-medium text-gray-900">
                      {patient.weight}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">BMI</span>
                    <div className="font-medium text-gray-900">
                      {patient.bmi}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Sports/week</span>
                    <div className="font-medium text-gray-900">
                      {patient.exercisePerWeek}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">VO2 max</span>
                    <div className="font-medium text-gray-900">
                      {patient.vo2Max}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Exercise/week</span>
                    <div className="font-medium text-gray-900">
                      {patient.exercisePerWeek}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Sleep/Night</span>
                    <div className="font-medium text-gray-900">
                      {patient.sleepPerNight}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Steps/day</span>
                    <div className="font-medium text-gray-900">
                      {patient.stepsPerDay}
                    </div>
                  </div>
                </div>

                <button className="w-full text-[#1E3A5F] hover:underline text-sm flex items-center justify-center space-x-2 py-2">
                  <FileText className="w-4 h-4" />
                  <span>See pathology report</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Health Data */}
          <div className="xl:col-span-3 space-y-8">
            {/* Health Pillars Score */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#F5F5F5] p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Health Pillars Score
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <HealthScoreCard
                  title="Nutrition Score"
                  score={patient.healthScores.nutrition}
                  icon={Utensils}
                />
                <HealthScoreCard
                  title="Exercise Score"
                  score={patient.healthScores.exercise}
                  icon={Dumbbell}
                />
                <HealthScoreCard
                  title="Mental Health"
                  score={patient.healthScores.mentalHealth}
                  icon={Brain}
                />
                <HealthScoreCard
                  title="Sleep Quality"
                  score={patient.healthScores.sleepQuality}
                  icon={Moon}
                />
              </div>
            </div>

            {/* Prevention Alerts & Patient Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Prevention Alerts */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#F5F5F5] p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Prevention Alerts
                </h3>
                <div className="space-y-3">
                  {patient.preventionAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-4 rounded-xl border-l-4 ${getAlertColor(
                        alert.priority
                      )}`}
                    >
                      <div className="flex items-center space-x-3">
                        {getAlertIcon(alert.type)}
                        <span className="text-sm font-medium text-gray-700">
                          {alert.message}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Patient Actions */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#F5F5F5] p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Patient Actions
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ActionCard
                    title="Update Values"
                    icon={Edit}
                    bgColor="bg-blue-50"
                    textColor="text-blue-700"
                    onClick={() => console.log("Update values")}
                  />
                  <ActionCard
                    title="Upload Document"
                    icon={Upload}
                    bgColor="bg-green-50"
                    textColor="text-[#388E3C]"
                    onClick={() => console.log("Upload document")}
                  />
                  <ActionCard
                    title="Generate Report"
                    icon={FileText}
                    bgColor="bg-purple-50"
                    textColor="text-purple-700"
                    onClick={() => console.log("Generate report")}
                  />
                  <ActionCard
                    title="View History"
                    icon={BarChart3}
                    bgColor="bg-orange-50"
                    textColor="text-[#FFA726]"
                    onClick={() => console.log("View history")}
                  />
                  <ActionCard
                    title="Send Report"
                    icon={Send}
                    bgColor="bg-red-50"
                    textColor="text-red-700"
                    onClick={() => console.log("Send report")}
                  />
                  <ActionCard
                    title="Export Data"
                    icon={Download}
                    bgColor="bg-teal-50"
                    textColor="text-teal-700"
                    onClick={() => console.log("Export data")}
                  />
                </div>
              </div>
            </div>

            {/* Processed Documents */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#F5F5F5] p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Processed Documents
              </h3>
              <div className="space-y-4">
                {patient.reports.map((document) => (
                  <div
                    key={document.id}
                    className="bg-gray-50 rounded-2xl p-6 border border-[#F5F5F5]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[#1E3A5F] rounded-xl flex items-center justify-center">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">
                            {document.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {document.date} • {document.status}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">
                            {document.score}
                          </div>
                          <div className="text-sm text-gray-500">Score</div>
                        </div>
                        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-white transition-colors">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* AI Insights for each document */}
                    <div className="mt-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Brain className="w-4 h-4 text-[#1E3A5F]" />
                        <span className="text-sm font-medium text-[#1E3A5F]">
                          AI Analysis
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        {document.aiInsights}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 mb-2">
                            Key Findings:
                          </h5>
                          <div className="space-y-1">
                            {document.keyFindings.map((finding, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <div className="w-1.5 h-1.5 bg-[#388E3C] rounded-full"></div>
                                <span className="text-xs text-gray-600">
                                  {finding}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-gray-900 mb-2">
                            Recommendations:
                          </h5>
                          <div className="space-y-1">
                            {document.recommendations.map((rec, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <Zap className="w-3 h-3 text-[#FFA726]" />
                                <span className="text-xs text-gray-600">
                                  {rec}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "reports" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">
              All Medical Reports
            </h3>
            <button className="flex items-center space-x-2 bg-[#1E3A5F] text-white px-6 py-3 rounded-2xl hover:bg-opacity-90 transition-colors">
              <Upload className="w-4 h-4" />
              <span>Upload Report</span>
            </button>
          </div>

          <div className="grid gap-6">
            {patient.reports.map((report) => (
              <div
                key={report.id}
                className="bg-white rounded-2xl shadow-sm border border-[#F5F5F5] p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#1E3A5F] rounded-2xl flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {report.name}
                      </h4>
                      <p className="text-gray-600">{report.date}</p>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mt-1">
                        {report.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Enhanced AI Insights Section */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-4 border border-purple-100">
                  <div className="flex items-center space-x-2 mb-4">
                    <Brain className="w-5 h-5 text-[#1E3A5F]" />
                    <span className="font-semibold text-[#1E3A5F]">
                      AI Analysis & Insights
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{report.aiInsights}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-[#388E3C]" />
                        <span>Key Findings</span>
                      </h5>
                      <div className="space-y-2">
                        {report.keyFindings.map((finding, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-2 bg-white rounded-lg p-3 border border-green-100"
                          >
                            <div className="w-2 h-2 bg-[#388E3C] rounded-full mt-2"></div>
                            <span className="text-sm text-gray-700">
                              {finding}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-[#FFA726]" />
                        <span>AI Recommendations</span>
                      </h5>
                      <div className="space-y-2">
                        {report.recommendations.map((rec, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-2 bg-white rounded-lg p-3 border border-orange-100"
                          >
                            <Star className="w-4 h-4 text-[#FFA726] mt-0.5" />
                            <span className="text-sm text-gray-700">{rec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "vitals" && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Vital Signs & Health Metrics
          </h3>

          {/* Current Vitals */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#F5F5F5] p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Current Vitals
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(patient.vitalSigns).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gray-50 rounded-2xl p-6 border border-[#F5F5F5]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </h4>
                    <Activity className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {value}
                  </div>
                  <div className="mt-2 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#388E3C] rounded-full"></div>
                    <span className="text-sm text-gray-600">Normal range</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Health Metrics */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#F5F5F5] p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Health Metrics
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-700 font-medium">BMI</span>
                  <Activity className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-900">
                  {patient.bmi}
                </div>
                <div className="text-sm text-blue-600">Normal weight</div>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-700 font-medium">VO2 Max</span>
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-900">
                  {patient.vo2Max}
                </div>
                <div className="text-sm text-green-600">Good fitness</div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-700 font-medium">
                    Daily Steps
                  </span>
                  <Dumbbell className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-purple-900">
                  {patient.stepsPerDay}
                </div>
                <div className="text-sm text-purple-600">Active lifestyle</div>
              </div>
            </div>
          </div>

          {/* Allergies & Medications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-[#F5F5F5] p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <span>Allergies</span>
              </h4>
              <div className="space-y-3">
                {patient.allergies.map((allergy, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-red-50 rounded-xl p-3 border border-red-100"
                  >
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <span className="text-gray-900 font-medium">{allergy}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[#F5F5F5] p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <TestTube className="w-5 h-5 text-blue-500" />
                <span>Current Medications</span>
              </h4>
              <div className="space-y-3">
                {patient.currentMedications.map((medication, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-blue-50 rounded-xl p-3 border border-blue-100"
                  >
                    <Stethoscope className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-900">{medication}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "treatment" && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Treatment Plan & Progress
          </h3>

          {/* Treatment Goals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-[#F5F5F5] p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>Short-term Goals</span>
              </h4>
              <div className="space-y-3">
                {patient.treatmentPlan.shortTerm.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-blue-50 rounded-xl p-4 border border-blue-100"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-gray-700">{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[#F5F5F5] p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-[#388E3C]" />
                <span>Long-term Goals</span>
              </h4>
              <div className="space-y-3">
                {patient.treatmentPlan.longTerm.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-green-50 rounded-xl p-4 border border-green-100"
                  >
                    <Star className="w-5 h-5 text-[#388E3C] mt-0.5" />
                    <span className="text-gray-700">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#F5F5F5] p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Treatment Progress
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-semibold text-gray-900">
                      Medication Compliance
                    </span>
                    <p className="text-sm text-gray-600">
                      Taking medications as prescribed
                    </p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-[#388E3C]" />
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-[#388E3C]">95%</span>
                  <p className="text-sm text-[#388E3C] font-medium">
                    Excellent
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-semibold text-gray-900">
                      Lifestyle Changes
                    </span>
                    <p className="text-sm text-gray-600">
                      Diet and exercise adherence
                    </p>
                  </div>
                  <Dumbbell className="w-8 h-8 text-[#FFA726]" />
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-[#FFA726]">72%</span>
                  <p className="text-sm text-[#FFA726] font-medium">Good</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-semibold text-gray-900">
                      Follow-up Attendance
                    </span>
                    <p className="text-sm text-gray-600">
                      Keeping scheduled appointments
                    </p>
                  </div>
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-blue-600">88%</span>
                  <p className="text-sm text-blue-600 font-medium">Very Good</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Treatment Updates */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#F5F5F5] p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Treatment Updates
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-[#1E3A5F] rounded-full flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">
                    Medication Adjustment
                  </h5>
                  <p className="text-sm text-gray-600">
                    Metformin dosage increased to 1000mg
                  </p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-[#388E3C] rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">
                    Lifestyle Consultation
                  </h5>
                  <p className="text-sm text-gray-600">
                    Nutritional counseling session completed
                  </p>
                  <p className="text-xs text-gray-500">1 week ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-[#FFA726] rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">
                    Next Appointment
                  </h5>
                  <p className="text-sm text-gray-600">
                    Follow-up scheduled for blood work review
                  </p>
                  <p className="text-xs text-gray-500">August 25, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
