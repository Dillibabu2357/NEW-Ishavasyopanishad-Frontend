import { useState, useRef, useEffect } from "react"
import TexturedButton from "@/components/shared/TexturedButton"
import {
  ChevronFirst,
  ChevronLast,
  Play,
  Pause,
  Repeat,
  Volume,
} from "lucide-react"
import useSutraStore from "@/store/sutraStore"

const ButtonsPanel = () => {
  const { sutra_no, setSutraNo } = useSutraStore()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isRepeating, setIsRepeating] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Fetch the audio URL based on the sutra_no
  const fetchAudioUrl = async (sutraNo: number) => {
    // Replace with actual backend fetch call
    const response = await fetch(`/api/audio/${sutraNo}`)
    const data = await response.json()
    return data.audioUrl
  }

  // Play the fetched audio when sutra_no changes
  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        const audioUrl = await fetchAudioUrl(sutra_no)
        audioRef.current.src = audioUrl
        audioRef.current.play()
        setIsPlaying(true)
      }
    }

    playAudio()
  }, [sutra_no])

  // Handlers for buttons
  const handleNext = () => {
    setSutraNo(sutra_no + 1) // Move to next sutra
  }

  const handlePrevious = () => {
    if (sutra_no > 1) {
      setSutraNo(sutra_no - 1) // Move to previous sutra
    }
  }

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleRepeat = () => {
    if (audioRef.current) {
      setIsRepeating(!isRepeating)
      audioRef.current.loop = !audioRef.current.loop
    }
  }

  return (
    <div className="flex justify-center gap-2 mb-4">
      <TexturedButton onClick={handlePrevious}>
        <ChevronFirst />
      </TexturedButton>

      <TexturedButton onClick={handlePlayPause}>
        {isPlaying ? <Pause /> : <Play />}
      </TexturedButton>

      <TexturedButton onClick={handleNext}>
        <ChevronLast />
      </TexturedButton>

      <TexturedButton onClick={handleRepeat} selected={isRepeating}>
        <Repeat />
      </TexturedButton>

      <TexturedButton>
        <Volume />
      </TexturedButton>

      <audio ref={audioRef} />
    </div>
  )
}

export default ButtonsPanel
