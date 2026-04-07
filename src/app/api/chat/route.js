export const runtime = "nodejs";

import fs from "fs";
import path from "path";
import Groq from "groq-sdk";

// Load portfolio knowledge base
const root = process.cwd();
const dataPath = path.join(root, "src", "data", "portfolio-data.json");
const portfolioData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

function getGroqClient() {
  if (!process.env.GROQ_API_KEY) return null;

  return new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });
}

// Rewrite the user query into searchable keywords
async function rewriteQuery(groq, userMessage) {
  try {
    const res = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: 0,
      messages: [
        {
          role: "system",
          content: `
Convert the user's question into a short search query
for retrieving portfolio information.

Return ONLY keywords.

Example:
"What projects has Shailesh built?"
→ Shailesh Kumar projects portfolio AI backend open source
`,
        },
        { role: "user", content: userMessage },
      ],
    });

    return res.choices[0].message.content?.trim() || userMessage;
  } catch {
    return userMessage;
  }
}

function getTopContextChunks(searchQuery) {
  const queryTerms = searchQuery
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((term) => term.length > 2);

  const scored = portfolioData.map((item) => {
    const text = item.text.toLowerCase();
    const score = queryTerms.reduce((sum, term) => {
      if (!text.includes(term)) return sum;
      const count = text.split(term).length - 1;
      return sum + count;
    }, 0);

    return {
      text: item.text,
      score,
    };
  });

  const topByScore = scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.text)
    .join("\n");

  if (topByScore.trim()) return topByScore;

  return portfolioData.slice(0, 3).map((item) => item.text).join("\n");
}

function localPortfolioReply(message) {
  const text = message.toLowerCase().trim();

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey") ||
    text.includes("helo")
  ) {
    return "Hi! I’m Shailesh’s portfolio assistant. You can ask me about projects, skills, experience, education, achievements, or contact details.";
  }

  if (text.includes("name")) {
    return "This portfolio belongs to Shailesh Kumar, a CSE student at Rajkiya Engineering College, Sonbhadra.";
  }

  if (text.includes("skill")) {
    return "Shailesh works with Python, C, C++, JavaScript, Django, Flask, React, Tailwind CSS, Machine Learning, NLP, and backend development.";
  }

  if (
    text.includes("experience") ||
    text.includes("internship") ||
    text.includes("infosys")
  ) {
    return "Shailesh completed an AI/Software Engineering internship at Infosys Springboard from Nov 2025 to Jan 2026, where he worked on an AI-powered research paper summarization and insight extraction platform.";
  }

  if (text.includes("project")) {
    return "Shailesh has worked on projects including an AI-powered research paper summarizer, coding club website, online payment fraud detection, and location tracking application.";
  }

  if (
    text.includes("education") ||
    text.includes("college") ||
    text.includes("study")
  ) {
    return "He is a Computer Science and Engineering student at Rajkiya Engineering College, Sonbhadra.";
  }

  if (
    text.includes("open source") ||
    text.includes("gsoc") ||
    text.includes("precice") ||
    text.includes("erofs")
  ) {
    return "Shailesh contributes to open-source projects such as preCICE and EROFS, and has prepared GSoC proposals backed by real codebase exploration and contributions.";
  }

  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("phone") ||
    text.includes("call") ||
    text.includes("reach")
  ) {
    return "You can contact Shailesh through the contact form on this portfolio, or connect with him on LinkedIn, GitHub, or email.";
  }

  if (
    text.includes("achievement") ||
    text.includes("hackathon") ||
    text.includes("sih")
  ) {
    return "Shailesh has participated in Smart India Hackathon, contributed to open source, and completed recognized internship and learning programs in AI and software engineering.";
  }
  if (text.includes("ai") || text.includes("ml") || text.includes("machine learning")) {
  return "Shailesh works on AI/ML and NLP-based applications, including a research paper summarization platform built during his Infosys internship.";
}

  return "I can help with questions about Shailesh Kumar’s portfolio, including projects, skills, experience, education, achievements, and contact details.";
}

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message || !message.trim()) {
      return Response.json({ error: "Message is required" }, { status: 400 });
    }

    const groq = getGroqClient();

    // Fallback: work even without GROQ API key
    if (!groq) {
      return Response.json({
        reply: localPortfolioReply(message),
      });
    }

    const searchQuery = await rewriteQuery(groq, message);
    const topChunks = getTopContextChunks(searchQuery || message);

    try {
      const completion = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        temperature: 0.2,
        messages: [
          {
            role: "system",
            content: `
You are Shailesh Kumar's AI portfolio assistant.

Speak in first person as Shailesh when appropriate.

You must ONLY answer questions related to Shailesh Kumar's portfolio, including:
- projects
- skills
- experience
- education
- achievements
- contact details
- open-source work

If the question is unrelated to the portfolio, reply exactly with:
"I can only answer questions about Shailesh Kumar's portfolio."

Keep responses concise, accurate, and professional.

CONTEXT:
${topChunks}
`,
          },
          { role: "user", content: message },
        ],
      });

      return Response.json({
        reply:
          completion.choices[0].message.content?.trim() ||
          localPortfolioReply(message),
      });
    } catch {
      return Response.json({
        reply: localPortfolioReply(message),
      });
    }
  } catch (error) {
    console.error("/api/chat error:", error);
    return Response.json(
      { error: "Failed to generate chat response" },
      { status: 500 }
    );
  }
}