import Tesseract from "tesseract.js";

export const extractTextFromImage = async (filePath) => {
  try {
    const { data: { text } } = await Tesseract.recognize(filePath, "eng");
    return text;
  } catch (error) {
    console.error("OCR error:", error);
    throw error;
  }
};
