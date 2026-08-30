const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzOLGQuxcWj1ETn1H8EdQ5U2pZ3l937v-5NNlmFlqVt71jhBU5-HfLMA7tEy49nKEnG5Q/exec";

export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
}) {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      // Using text/plain prevents CORS preflight issues with Google Apps Script
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    return result.status === "success";
  } catch (error) {
    console.error("Form submission failed:", error);
    return false;
  }
}
