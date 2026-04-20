let step = 0;

const steps = [
  { title: "Step 1: Add Tannic Acid", level: "25%", color: "#f9eaa7" },
  { title: "Step 2: Add Ferrous Sulfate", level: "50%", color: "#c7bdfc" },
  { title: "Step 3: Mix Gum Arabic", level: "75%", color: "#9a7cff" },
  { title: "Ink Ready!", level: "100%", color: "#2c2c54" }
];

function nextStep(){
  step = (step + 1) % steps.length;

  document.getElementById("expTitle").innerText = steps[step].title;

  const liquid = document.getElementById("liquid");
  const progress = document.getElementById("progress");

  liquid.style.height = steps[step].level;
  liquid.style.background = steps[step].color;

  progress.style.width = steps[step].level;
}