/**
 * Conversiones de Google Ads.
 *
 * La configuración (ID de conversión y etiquetas) vive en el bloque
 * "Google tag" de index.html, en window.GEODESIK_ADS. Este módulo solo
 * dispara los eventos, para que los IDs existan en un único lugar.
 *
 * Mientras la configuración tenga los valores de ejemplo no se dispara
 * nada: es preferible no medir a mandar conversiones a un destino inválido.
 */

const ID_VALIDO = /^AW-\d+$/

const getConfig = () => {
  if (typeof window === 'undefined') return null
  const config = window.GEODESIK_ADS
  if (!config || !ID_VALIDO.test(config.id || '')) return null
  return config
}

const getDestino = (tipo) => {
  const config = getConfig()
  if (!config) return null

  const etiqueta = config.labels && config.labels[tipo]
  if (!etiqueta || etiqueta.startsWith('PENDIENTE')) return null

  return `${config.id}/${etiqueta}`
}

const trackConversion = (tipo, params = {}) => {
  const destino = getDestino(tipo)
  if (!destino) return
  if (typeof window.gtag !== 'function') return

  window.gtag('event', 'conversion', { send_to: destino, ...params })
}

/**
 * Formulario de cotización enviado con éxito.
 * Se llama solo cuando el backend confirma el envío, nunca en el clic.
 */
export const trackFormularioEnviado = () => {
  trackConversion('formulario')
}

/**
 * Clic en cualquiera de los puntos de salida a WhatsApp.
 *
 * `origen` identifica el componente desde el que salió el clic. Es un
 * parámetro de diagnóstico: se ve en Tag Assistant y en la petición al
 * recolector, pero Google Ads no segmenta la conversión por él.
 */
export const trackWhatsAppClick = (origen) => {
  trackConversion('whatsapp', { origen })
}
