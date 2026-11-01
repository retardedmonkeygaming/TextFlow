const input = document.getElementById("input");
const output = document.getElementById("output");
const cleanBtn = document.getElementById("cleanBtn");
const listBtn = document.getElementById("listBtn");
const truncateBtn = document.getElementById("truncateBtn");
const copyBtn = document.getElementById("copyBtn");

function cleanText(text) {
    return text
        .replace(/\u00A0/g, ' ') // replace non-breaking spaces :)
        .replace(/[""]/g, '"')
        .replace(/['']/g, "'")
        .replace(/\s+/g, ' ')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

function makeMarkdownList(text) {
    const lines = text
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.lenfth > 0);

    return lines.map(line => `- ${line}`).join("\n");
}

function truncateText(text, maxLength = 200) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}