export const streamingServices = ["Amazon", "Netflix", "Disney", "Crunchyroll", "HBO", "Paramount", "Hulu"] as const

export type StreamingService = (typeof streamingServices)[number]
