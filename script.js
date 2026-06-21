const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_KEY = "YOUR_SUPABASE_KEY";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let currentStep = 0;

function showStep(step) {
  let steps = document.querySelectorAll(".step");
  steps.forEach(s => s.classList.remove("active"));
  steps[step].classList.add("active");
}

function nextStep() {
  let steps = document.querySelectorAll(".step");
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

async function submitForm() {

  let full_name = document.getElementById("fullName").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let amount = document.getElementById("amount").value;
  let purpose = document.getElementById("purpose").value;

  const { error } = await client.from("applications").insert([
    {
      full_name,
      phone,
      email,
      amount,
      purpose,
      status: "Pending"
    }
  ]);

  if (error) {
    alert("Error submitting application");
    console.log(error);
  } else {
    alert("Application submitted successfully!");
  }
}
