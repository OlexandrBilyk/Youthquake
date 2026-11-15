import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.text}>
          © 2026 EcoConstructor. Усі права захищені.
        </p>

      </div>
    </footer>
  )
}
