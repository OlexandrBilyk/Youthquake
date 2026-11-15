import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addVote, VoteOption, Role } from '../store/votesSlice'
import type { AppDispatch } from '../store'
import styles from '../styles/Voting.module.scss'

const options: { value: VoteOption; label: string }[] = [
  { value: 'very_interested', label: '🔥 Дуже цікаво, хочу купити / рекомендувати' },
  { value: 'interested', label: '👍 Цікаво, хочу дізнатися більше' },
  { value: 'neutral', label: '😐 Нейтрально' },
  { value: 'not_interested', label: '👎 Не цікаво' },
]

const roles: { value: Role; label: string }[] = [
  { value: 'teacher', label: 'Вчитель / вчителька' },
  { value: 'director', label: 'Директор / заступник' },
  { value: 'parent', label: 'Батько / мати' },
  { value: 'student', label: 'Учень / учениця' },
  { value: 'other', label: 'Інше' },
]

export default function VotingSection() {
  const dispatch = useDispatch<AppDispatch>()
  const [option, setOption] = useState<VoteOption | null>(null)
  const [role, setRole] = useState<Role>('teacher')
  const [ecoFactor, setEcoFactor] = useState(4)
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!option) return

    dispatch(
      addVote({
        option,
        role,
        ecoFactor,
        comment: comment.trim() || undefined,
      })
    )
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="vote" className={styles.section}>
        <div className="container">
          <div className={styles.success}>
            <h3>Дякуємо за відгук! 💚</h3>
            <p>Ваша думка збережена локально і допоможе нам покращити продукт.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="vote" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Мікротестування ідеї</h2>
        <p className={styles.subtitle}>
          Залиште швидкий відгук — це займе 20 секунд. Дані зберігаються тільки у вашому браузері.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Наскільки вам цікава ідея?</label>
            <div className={styles.options}>
              {options.map((o) => (
                <label
                  key={o.value}
                  className={`${styles.option} ${option === o.value ? styles.selected : ''}`}
                >
                  <input
                    type="radio"
                    name="option"
                    value={o.value}
                    checked={option === o.value}
                    onChange={() => setOption(o.value)}
                  />
                  {o.label}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="role">Хто ви?</label>
            <select
              id="role"
              className={styles.select}
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
            >
              {roles.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label>
              Наскільки екологічний аспект вплинув на вашу оцінку? ({ecoFactor}/5)
            </label>
            <input
              type="range"
              min={1}
              max={5}
              value={ecoFactor}
              onChange={(e) => setEcoFactor(Number(e.target.value))}
              className={styles.range}
            />
            <div className={styles.rangeValue}>{ecoFactor}</div>
          </div>

          <div className={styles.field}>
            <label htmlFor="comment">Коментар (необовʼязково)</label>
            <textarea
              id="comment"
              className={styles.textarea}
              placeholder="Що сподобалось або чого не вистачає?"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.submit} disabled={!option}>
            Надіслати відгук
          </button>
        </form>
      </div>
    </section>
  )
}
