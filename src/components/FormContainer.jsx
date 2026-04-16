import { useState } from 'react'
import TypingText from './TypingText.jsx'
import styles from './FormContainer.module.css'

const INITIAL = {
  institution: '',
  code: '',
  director: '',
  dni: '',
  subject: '',
  attachment: null,
}

export default function FormContainer() {
  const [fields, setFields] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFields((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }))
  }

  return (
    <div className={styles.wrapper}>
      <div style={{ width: '100%', maxWidth: 640 }}>

        {/* Header flotante sobre el card */}
        <div className={styles.header}>
          <div className={styles.logoRow}>
            <img
              className={styles.logoIcon}
              src="https://sistemas10.minedu.gob.pe/siagie3/Imagen/favicon/favicon.ico"
              alt="Siagie"
            />
            <span className={styles.headerTitle}>Siagie v3</span>
          </div>
          <div className={styles.headerSub}>Sistema de Información de Apoyo a la Gestión de la IE</div>
        </div>

        <div className={styles.card}>
          {/* Franja azul del card */}
          <div className={styles.cardHeader}>
            <div className={styles.badge}>UGEL</div>
            <TypingText />
          </div>

          {/* Cuerpo del card */}
          <div className={styles.cardBody}>
            {submitted ? (
              <div className={styles.successBox}>
                <span className={styles.successIcon}>✅</span>
                <p><strong>¡Formulario enviado correctamente!</strong></p>
                <p style={{ fontSize: '0.88em', color: '#718096', marginTop: 6 }}>
                  Tu solicitud fue enviada. Pronto nos comunicaremos contigo.
                </p>
                <button
                  className={styles.btnReset}
                  onClick={() => { setFields(INITIAL); setSubmitted(false) }}
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form
                target="_blank"
                action="https://formsubmit.co/ayasupay@gmail.com"
                method="POST"
                encType="multipart/form-data"
                onSubmit={() => setSubmitted(false)}
              >
                <input type="hidden" name="_next" value="https://joshegatito.github.io/siagiev3/" />
                <input type="hidden" name="_captcha" value="false" />

                <div className={styles.row}>
                  <div className={styles.group}>
                    <label htmlFor="institution">Institución Educativa</label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      placeholder="Nombre de la I.E."
                      required
                      value={fields.institution}
                      onChange={handleChange}
                      onFocus={() => setFocused('institution')}
                      onBlur={() => setFocused(null)}
                      className={focused === 'institution' ? styles.inputFocused : styles.input}
                    />
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="code">Código Modular</label>
                    <input
                      type="text"
                      id="code"
                      name="code"
                      placeholder="Ej: 0123456"
                      required
                      value={fields.code}
                      onChange={handleChange}
                      onFocus={() => setFocused('code')}
                      onBlur={() => setFocused(null)}
                      className={focused === 'code' ? styles.inputFocused : styles.input}
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.group}>
                    <label htmlFor="director">Director(a)</label>
                    <input
                      type="text"
                      id="director"
                      name="director"
                      placeholder="Nombre completo"
                      required
                      value={fields.director}
                      onChange={handleChange}
                      onFocus={() => setFocused('director')}
                      onBlur={() => setFocused(null)}
                      className={focused === 'director' ? styles.inputFocused : styles.input}
                    />
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="dni">DNI</label>
                    <input
                      type="text"
                      id="dni"
                      name="dni"
                      placeholder="8 dígitos"
                      required
                      maxLength={8}
                      pattern="\d{8}"
                      value={fields.dni}
                      onChange={handleChange}
                      onFocus={() => setFocused('dni')}
                      onBlur={() => setFocused(null)}
                      className={focused === 'dni' ? styles.inputFocused : styles.input}
                    />
                  </div>
                </div>

                <div className={styles.group}>
                  <label htmlFor="attachment">Adjuntar archivo (oficio / evidencia)</label>
                  <div className={styles.fileWrapper}>
                    <input
                      type="file"
                      id="attachment"
                      name="attachment"
                      accept="image/png,image/jpeg,application/pdf"
                      onChange={handleChange}
                      className={styles.fileInput}
                    />
                    <span className={styles.fileName}>
                      {fields.attachment ? fields.attachment.name : 'Sin archivo seleccionado'}
                    </span>
                  </div>
                </div>

                <div className={styles.group}>
                  <label htmlFor="subject">Asunto</label>
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Describe tu solicitud o problema..."
                    required
                    value={fields.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    className={focused === 'subject' ? styles.textareaFocused : styles.textarea}
                  />
                </div>

                <div className={styles.divider} />

                <button type="submit" className={styles.btn}>
                  Enviar solicitud
                </button>
              </form>
            )}

            <div className={styles.note}>
              <strong>📌 Nota Importante</strong>
              Para cualquier solicitud o problema relacionado con el Siagie v3, se requiere
              realizarla mediante un oficio. Excepto para casos de reseteo de contraseñas,
              los cuales puede contactarme directamente.
            </div>

            <footer className={styles.footer}>
              Dev ❤️ por{' '}
              <a href="https://joshegatito.github.io/dev/" target="_blank" rel="noreferrer">
                José Galván — SIAGIE V3
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
