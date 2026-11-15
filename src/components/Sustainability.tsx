import styles from '../styles/Sustainability.module.scss'

export default function Sustainability() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.content}>
          <h2>Сталий вимір — в основі продукту</h2>
          <p>
            Ми не просто додаємо «зелений» лейбл. Екологія — головний освітній меседж і мотиватор для вчителів, батьків і дітей.
          </p>
          <ul className={styles.list}>
            <li>Деталі з переробленого пластику українських підприємств</li>
            <li>Показуємо дітям циркулярну економіку на практиці</li>
            <li>Підтримка екологічної освіти в рамках НУШ</li>
            <li>Потенціал для зелених грантів і звітності перед МОН</li>
            <li>Етичний вибір: підтримка локальних переробників</li>
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>🌍</div>
          <h3 className={styles.cardTitle}>З відходів — у знання</h3>
          <p className={styles.cardText}>
            Кожен набір — це не просто іграшка. Це інструмент, який змінює ставлення дітей до сміття та ресурсів.
          </p>
        </div>
      </div>
    </section>
  )
}
