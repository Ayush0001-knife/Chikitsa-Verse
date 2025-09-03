import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Save,
  Upload,
} from "lucide-react";
import React from "react";
import { useAddPatient } from "../Contexts/AddPatientContext";

const FormContent = ({}) => {
  const {
    sections,
    formData,
    toggleSection,
    expandedSections,
    renderField,
    fileInputRef,
    handleFileUpload,
    uploadedFile,
    setUploadedFile,
    setFormData,
    handleSubmit,
    isSubmitting,
  } = useAddPatient();

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="space-y-6">
        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl"
            style={{ animationDelay: `${sectionIndex * 0.1}s` }}
          >
            {/* Section Header */}
            <div
              className="px-8 py-6 cursor-pointer transition-all duration-300 hover:bg-gray-50"
              onClick={() => toggleSection(sectionIndex)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: section.color }}
                  >
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "#1E3A5F" }}
                    >
                      {section.title}
                    </h3>
                    {section.fields.length > 0 && (
                      <p className="text-gray-600 text-sm">
                        {section.fields.filter((f) => formData[f.name]).length}{" "}
                        of {section.fields.length} fields completed
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {section.fields.length > 0 && (
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          section.fields.every(
                            (f) => !f.required || formData[f.name]
                          )
                            ? "bg-green-400"
                            : "bg-gray-300"
                        }`}
                      />
                      <span className="text-sm text-gray-500">
                        {section.fields.every(
                          (f) => !f.required || formData[f.name]
                        )
                          ? "Complete"
                          : "Pending"}
                      </span>
                    </div>
                  )}
                  {expandedSections[sectionIndex] ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300" />
                  )}
                </div>
              </div>
            </div>

            {/* Section Content */}
            {expandedSections[sectionIndex] && (
              <div className="px-8 pb-8 border-t border-gray-100 bg-gradient-to-br from-gray-50/50 to-white">
                {sectionIndex === 7 ? (
                  /* File Upload Section */
                  <div className="pt-6">
                    <div
                      className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center transition-all duration-300 hover:border-teal-400 hover:bg-teal-50/30 cursor-pointer group"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        onChange={handleFileUpload}
                        className="hidden"
                      />

                      {uploadedFile ? (
                        <div className="space-y-4">
                          <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800">
                              {uploadedFile.name}
                            </h4>
                            <p className="text-gray-600">
                              {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setUploadedFile(null);
                              setFormData((prev) => ({
                                ...prev,
                                analysis_report: null,
                              }));
                            }}
                            className="px-4 py-2 bg-red-100 text-red-700 rounded-xl hover:bg-red-200 transition-colors duration-300"
                          >
                            Remove File
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors duration-300">
                            <Upload className="w-8 h-8 text-teal-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800">
                              Upload Analysis Report
                            </h4>
                            <p className="text-gray-600">
                              Click to browse or drag and drop
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                              PDF, JPG, PNG, DOC files up to 10MB
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Regular Form Fields */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    {section.fields.map(renderField)}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Submit Button */}
        <div className="flex justify-end pt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="px-12 py-4 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 text-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: "#4DB6AC",
              boxShadow: "0 20px 40px rgba(77, 182, 172, 0.3)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-green-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-6 h-6" />
                  Save Patient
                </>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormContent;
