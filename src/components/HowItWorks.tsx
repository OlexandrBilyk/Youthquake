import styles from '../styles/HowItWorks.module.scss'

const steps = [
  {
    num: '1',
    title: 'Отримуєте набір',
    text: 'Компактна коробка з деталями з переробленого пластику + методичка.',
  },
  {
    num: '2',
    title: 'Збираєте на уроці',
    text: 'Діти за 30–40 хвилин збирають модель джерела енергії.',
  },
  {
    num: '3',
    title: 'Проводять експерименти',
    text: 'Вимірюють, порівнюють, обговорюють екологію та фізику.',
  },
  {
    num: '4',
    title: 'Зберігають і повторюють',
    text: 'Набір можна використовувати багато разів у різних класах.',
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Як це працює</h2>
        <div className={styles.steps}>
          {steps.map((s) => (
            <div key={s.num} className={styles.step}>
              <div className={styles.number}>{s.num}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
