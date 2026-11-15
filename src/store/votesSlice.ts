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

export const initialMockVotes: Vote[] = [
  {
    id: 'dir-1',
    option: 'very_interested',
    role: 'director',
    ecoFactor: 9,
    comment: 'Чудова ініціатива для школи. Це допоможе підвищити екологічну свідомість на рівні всього закладу.',
    timestamp: Date.now() - 86400000 * 5,
  },
  {
    id: 'dir-2',
    option: 'interested',
    role: 'director',
    ecoFactor: 7,
    comment: 'Проєкт непоганий, головне щоб вистачило ресурсів на його постійну підтримку.',
    timestamp: Date.now() - 86400000 * 4,
  },
  {
    id: 'dir-3',
    option: 'very_interested',
    role: 'director',
    ecoFactor: 10,
    comment: 'Повністю підтримую! Сучасна школа має бути екологічною та прикладом для громади.',
    timestamp: Date.now() - 86400000 * 3,
  },

  {
    id: 'tch-1',
    option: 'interested',
    role: 'teacher',
    ecoFactor: 8,
    comment: 'Діти з цікавістю долучаються до таких активностей на уроках.',
    timestamp: Date.now() - 86400000 * 6,
  },
  {
    id: 'tch-2',
    option: 'very_interested',
    role: 'teacher',
    ecoFactor: 9,
    comment: 'Чудово інтегрується в уроки біології та природознавства.',
    timestamp: Date.now() - 86400000 * 5,
  },
  {
    id: 'tch-3',
    option: 'neutral',
    role: 'teacher',
    ecoFactor: 5,
    comment: 'Ідея цікава, але навантаження на вчителів і так велике.',
    timestamp: Date.now() - 86400000 * 3,
  },
  {
    id: 'tch-4',
    option: 'interested',
    role: 'teacher',
    ecoFactor: 7,
    comment: 'Готові підтримати клас у практичних завданнях.',
    timestamp: Date.now() - 86400000 * 2,
  },
  {
    id: 'tch-5',
    option: 'interested',
    role: 'teacher',
    ecoFactor: 8,
    comment: 'Корисна справа, особливо у форматі змагання чи квесту.',
    timestamp: Date.now() - 86400000 * 1,
  },

  {
    id: 'par-1',
    option: 'very_interested',
    role: 'parent',
    ecoFactor: 10,
    comment: 'Дуже радий, що дитина вчиться берегти природу не на словах, а на ділі.',
    timestamp: Date.now() - 86400000 * 7,
  },
  {
    id: 'par-2',
    option: 'interested',
    role: 'parent',
    ecoFactor: 8,
    comment: 'Діти вдома тепер теж сортують сміття та нагадують нам про економію води.',
    timestamp: Date.now() - 86400000 * 5,
  },
  {
    id: 'par-3',
    option: 'neutral',
    role: 'parent',
    ecoFactor: 6,
    comment: 'Головне, щоб це не заважало основному навчанню та підготовці до іспитів.',
    timestamp: Date.now() - 86400000 * 4,
  },
  {
    id: 'par-4',
    option: 'very_interested',
    role: 'parent',
    ecoFactor: 9,
    comment: 'Готові долучатися до суботників та збору макулатури разом зі школою!',
    timestamp: Date.now() - 86400000 * 3,
  },
  {
    id: 'par-5',
    option: 'interested',
    role: 'parent',
    ecoFactor: 7,
    comment: 'Корисні звички для майбутнього покоління.',
    timestamp: Date.now() - 86400000 * 2,
  },
  {
    id: 'par-6',
    option: 'interested',
    role: 'parent',
    ecoFactor: 8,
    comment: 'Добра ініціатива, син з ентузіазмом розповідає про проєкт.',
    timestamp: Date.now() - 86400000 * 1,
  },
  {
    id: 'par-7',
    option: 'very_interested',
    role: 'parent',
    ecoFactor: 9,
    comment: 'Підтримуємо всією родиною такі корисні еко-ініціативи.',
    timestamp: Date.now() - 3600000 * 12,
  },

  {
    id: 'std-1',
    option: 'very_interested',
    role: 'student',
    ecoFactor: 10,
    comment: 'Це реально круто і весело! Нам дуже зайшло.',
    timestamp: Date.now() - 86400000 * 4,
  },
  {
    id: 'std-2',
    option: 'interested',
    role: 'student',
    ecoFactor: 8,
    comment: 'Кльові завдання, робили всім класом на перервах.',
    timestamp: Date.now() - 86400000 * 3,
  },
  {
    id: 'std-3',
    option: 'very_interested',
    role: 'student',
    ecoFactor: 9,
    comment: 'Хочемо ще більше таких конкурсів та еко-челенджів!',
    timestamp: Date.now() - 86400000 * 2,
  },
  {
    id: 'std-4',
    option: 'neutral',
    role: 'student',
    ecoFactor: 5,
    comment: 'Норм, але деякі завдання здалися занадто складними.',
    timestamp: Date.now() - 86400000 * 1,
  },
  {
    id: 'std-5',
    option: 'interested',
    role: 'student',
    ecoFactor: 8,
    comment: 'Цікаво дізнатися більше про захист навколишнього середовища.',
    timestamp: Date.now() - 3600000 * 5,
  },

  {
    id: 'oth-1',
    option: 'interested',
    role: 'other',
    ecoFactor: 8,
    comment: 'Як представник техперсоналу, бачу що діти стали акуратнішими.',
    timestamp: Date.now() - 86400000 * 3,
  },
  {
    id: 'oth-2',
    option: 'very_interested',
    role: 'other',
    ecoFactor: 9,
    comment: 'Дуже надихаюча атмосфера у школі завдяки цьому проєкту.',
    timestamp: Date.now() - 86400000 * 1,
  }
]

const loadFromStorage = (): Vote[] => {
  try {
    const raw = localStorage.getItem('eco_votes')
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed
      }
    }
    localStorage.setItem('eco_votes', JSON.stringify(initialMockVotes))
    return initialMockVotes
  } catch {
    return initialMockVotes
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