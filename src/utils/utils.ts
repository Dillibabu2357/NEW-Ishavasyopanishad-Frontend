import parse from "html-react-parser"

export const applyTailwindClassesToHTML = (text: string) => {
  return text
    .replace(/<h1>/g, '<h1 class="text-2xl font-bold">')
    .replace(/<p>/g, "<p>")
}

export const parseHTML = (text: string) => {
  return parse(applyTailwindClassesToHTML(text))
}
