# Siagie v3

Formulario de soporte técnico para el sistema **SIAGIE v3** del Ministerio de Educación del Perú. Permite a directores de instituciones educativas enviar solicitudes directamente al especialista encargado.

## Características

- Animación de typing en el título
- Diseño glassmorphism responsivo
- Validación de DNI (8 dígitos)
- Adjunto de archivos (PNG, JPG, PDF)
- Pantalla de confirmación tras el envío
- Deploy automático a GitHub Pages vía GitHub Actions

## Tecnologías

- React 18 + Vite
- CSS Modules
- FormSubmit.co (envío de formularios sin backend)

## Desarrollo local

```bash
npm install
npm run dev
```

## Deploy

El proyecto se despliega automáticamente en [GitHub Pages](https://joshegatito.github.io/siagiev3/) al hacer `push` a la rama `main`.

Asegúrate de tener activado **Settings → Pages → Source: GitHub Actions** en el repositorio.

---

Dev ❤️ por [José Galván](https://joshegatito.github.io/dev/)
