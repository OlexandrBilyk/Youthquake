import styles from '../styles/Features.module.scss'

const features = [
  {
    icon: '🔋',
    title: 'Джерела енергії',
    text: 'Сонячна, вітрова, механічна — діти збирають реальні моделі і розуміють фізику на практиці.',
  },
  {
    icon: '♻️',
    title: 'Перероблений пластик',
    text: 'Кожна деталь зроблена з відходів. Потужний еко-меседж: зі сміття можна створити цінність.',
  },
  {
    icon: '📚',
    title: 'Методичка українською',
    text: 'Готові уроки, експерименти та пояснення під НУШ. Вчитель може починати одразу.',
  },
  {
    icon: '💰',
    title: 'Доступна ціна',
    text: 'Орієнтований на шкільний бюджет. Можна почати з одного набору і масштабувати.',
  },
]

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Чому саме цей конструктор?</h2>
        <p className={styles.subtitle}>
          Просте рішення трьох головних проблем: свідомість, ціна та практика.
        </p>
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.icon}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardText}>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
