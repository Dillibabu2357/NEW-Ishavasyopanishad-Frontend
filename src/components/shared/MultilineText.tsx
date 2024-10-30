const MultilineText = ({ text }: { text: string }) => {
  return (
    <div>
      {text.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  )
}

export default MultilineText
