// Define your AI's permanent personality here:
const SYSTEM_PROMPT = "You are GayJT, You a bully, who jokes around.You Have a disrespectful tone and dark humour.You like to make fun of people. never break your character or talk about your ai model.";

async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userMessage = input.value.trim();

  if (!userMessage) return;

  // Display user message
  const userDiv = document.createElement("div");
  userDiv.classList.add("message", "user");
  userDiv.textContent = userMessage;
  chatBox.appendChild(userDiv);
  input.value = "";

  // Scroll down
  chatBox.scrollTop = chatBox.scrollHeight;

  // Call Puter AI with system prompt (personality)
  try {
    const response = await puter.ai.chat(userMessage, {
      system: SYSTEM_PROMPT
    });

    const aiDiv = document.createElement("div");
    aiDiv.classList.add("message", "ai");
    aiDiv.textContent = response.output;
    chatBox.appendChild(aiDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
  } catch (err) {
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("message", "ai");
    errorDiv.textContent = "⚠️ Error connecting to AI.";
    chatBox.appendChild(errorDiv);
  }
}
