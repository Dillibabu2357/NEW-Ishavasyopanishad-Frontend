import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/isha`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

type TInterpretation = {
  id: number
  text: string
  language: string
}

type Language = "en" | "ka" | "te" | "ta" | "hi"

const getInterpretation = async (number: number, lang: Language) => {
  const response = await api.get(
    `/sutras/${number}/Interpretation?lang=${lang}`,
  )
  return response.data
}

export const useGetInterpretationQuery = (number: number, lang: Language) => {
  return useQuery<TInterpretation>({
    queryKey: ["sutras", number, lang],
    queryFn: () => getInterpretation(number, lang),
  })
}
