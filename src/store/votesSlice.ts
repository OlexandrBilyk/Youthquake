import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type VoteOption = 'very_interested' | 'interested' | 'neutral' | 'not_interested'
export type Role = 'teacher' | 'director' | 'parent' | 'student' | 'other'

export interface Vote {
  id: string
  option: VoteOption
  role: Role
  ecoFactor: number
  comment?: string
  timestamp: number
}

interface VotesState {
  votes: Vote[]
}

const loadFromStorage = (): Vote[] => {
  try {
    const raw = localStorage.getItem('eco_votes')
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

const initialState: VotesState = {
  votes: loadFromStorage(),
}

const votesSlice = createSlice({
  name: 'votes',
  initialState,
  reducers: {
    addVote: (state, action: PayloadAction<Omit<Vote, 'id' | 'timestamp'>>) => {
      const newVote: Vote = {
        ...action.payload,
        id: crypto.randomUUID(),
        timestamp: Date.now(),
      }
      state.votes.push(newVote)
      localStorage.setItem('eco_votes', JSON.stringify(state.votes))
    },
    clearVotes: (state) => {
      state.votes = []
      localStorage.removeItem('eco_votes')
    },
  },
})

export const { addVote, clearVotes } = votesSlice.actions
export default votesSlice.reducer
