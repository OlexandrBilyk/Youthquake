import styles from '../styles/Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className={styles.badge}>🌱 STEM + Екологія для шкіл України</span>
        <h1 className={styles.title}>
          Зі сміття — в енергію.<br />Шкільний еко-конструктор
        </h1>
        <p className={styles.subtitle}>
          Практичний STEM-набір з переробленого пластику. Діти своїми руками збирають джерела енергії
          і бачать, як відходи перетворюються на користь.
        </p>
        <div className={styles.ctaGroup}>
          <a href="#vote" className={styles.btnPrimary}>
            Залишити відгук
          </a>
          <a href="#features" className={styles.btnSecondary}>
            Дізнатися більше
          </a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <strong>100%</strong>
            <span>перероблений пластик</span>
          </div>
          <div className={styles.stat}>
            <strong>3+</strong>
            <span>джерела енергії</span>
          </div>
          <div className={styles.stat}>
            <strong>НУШ</strong>
            <span>підтримка програми</span>
          </div>
        </div>
      </div>
    </section>
  )
}
