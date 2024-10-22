import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/isha`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

type TMeaning = {
  id: number
  text: string
  language: string
}

type Language = "en" | "ka" | "te" | "ta" | "hi"

const getMeaning = async (sutra_no: number, lang: Language) => {
  const response = await api.get(`/sutras/${sutra_no}/meaning?lang=${lang}`)
  return response.data
}

export const useGetMeaningQuery = (sutra_no: number, lang: Language) => {
  return useQuery<TMeaning>({
    queryKey: ["sutras", sutra_no, lang],
    queryFn: () => getMeaning(sutra_no, lang),
  })
}
