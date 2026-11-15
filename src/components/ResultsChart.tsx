import { useSelector } from 'react-redux'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts'
import { RootState } from '../store'
import {  VoteOption } from '../store/votesSlice'
import styles from '../styles/Results.module.scss'

const optionLabels: Record<VoteOption, string> = {
  very_interested: 'Дуже цікаво',
  interested: 'Цікаво',
  neutral: 'Нейтрально',
  not_interested: 'Не цікаво',
}

const COLORS = ['#22c55e', '#14b8a6', '#94a3b8', '#ef4444']

export default function ResultsChart() {
  const votes = useSelector((state: RootState) => state.votes.votes)

  if (votes.length === 0) {
    return (
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.title}>Аналітика відгуків</h2>
          <div className={styles.empty}>
            <div style={{ fontSize: '3rem' }}>📊</div>
            <p>Поки немає голосів. Будьте першим — залиште відгук вище!</p>
          </div>
        </div>
      </section>
    )
  }

  const interestCount = {
    very_interested: 0,
    interested: 0,
    neutral: 0,
    not_interested: 0,
  }
  votes.forEach((v) => {
    interestCount[v.option]++
  })

  const barData = (Object.keys(interestCount) as VoteOption[]).map((key) => ({
    name: optionLabels[key],
    count: interestCount[key],
  }))

  const roleCount: Record<string, number> = {}
  votes.forEach((v) => {
    roleCount[v.role] = (roleCount[v.role] || 0) + 1
  })
  const pieData = Object.entries(roleCount).map(([name, value]) => ({
    name:
      name === 'teacher'
        ? 'Вчителі'
        : name === 'director'
          ? 'Директори'
          : name === 'parent'
            ? 'Батьки'
            : name === 'student'
              ? 'Учні'
              : 'Інші',
    value,
  }))

  const sorted = [...votes].sort((a, b) => a.timestamp - b.timestamp)
  let sum = 0
  const lineData = sorted.map((v, i) => {
    sum += v.ecoFactor
    return {
      index: i + 1,
      avgEco: Number((sum / (i + 1)).toFixed(2)),
      eco: v.ecoFactor,
    }
  })

  const avgEco =
    votes.reduce((acc, v) => acc + v.ecoFactor, 0) / votes.length

  const positiveShare =
    ((interestCount.very_interested + interestCount.interested) / votes.length) * 100

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Аналітика відгуків</h2>

        <div className={styles.statsRow}>
          <div className={styles.statBox}>
            <strong>{votes.length}</strong>
            <span>всього відгуків</span>
          </div>
          <div className={styles.statBox}>
            <strong>{positiveShare.toFixed(0)}%</strong>
            <span>позитивних</span>
          </div>
          <div className={styles.statBox}>
            <strong>{avgEco.toFixed(1)}</strong>
            <span>середній вплив екології</span>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Розподіл інтересу</h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis allowDecimals={false} tick={{ fill: '#94a3b8' }} />
                <Tooltip
                  contentStyle={{
                    background: '#1e293b',
                    border: 'none',
                    borderRadius: 8,
                  }}
                />
                <Bar dataKey="count" fill="#22c55e" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Хто голосував</h3>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: '#1e293b',
                    border: 'none',
                    borderRadius: 8,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={styles.card} style={{ marginTop: '2rem' }}>
          <h3 className={styles.cardTitle}>
            Вплив екологічного фактору (крива середнього)
          </h3>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis
                dataKey="index"
                tick={{ fill: '#94a3b8' }}
                label={{
                  value: 'Номер відгуку',
                  position: 'insideBottom',
                  offset: -5,
                  fill: '#94a3b8',
                }}
              />
              <YAxis
                domain={[1, 5]}
                tick={{ fill: '#94a3b8' }}
                label={{
                  value: 'Оцінка',
                  angle: -90,
                  position: 'insideLeft',
                  fill: '#94a3b8',
                }}
              />
              <Tooltip
                contentStyle={{
                  background: '#1e293b',
                  border: 'none',
                  borderRadius: 8,
                }}
              />
              <Line
                type="monotone"
                dataKey="avgEco"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ fill: '#22c55e', r: 4 }}
                name="Середній вплив екології"
              />
              <Line
                type="monotone"
                dataKey="eco"
                stroke="#94a3b8"
                strokeWidth={1}
                strokeDasharray="4 4"
                dot={false}
                name="Окремий голос"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}
