import { type Component, createEffect } from 'solid-js'
import { createScriptLoader } from '@solid-primitives/script-loader'
import { generateScriptUrl } from './utils'
import { type ConfigRender } from './types'
interface GCaptchaProps {
  siteKey: string
  theme?: 'dark' | 'light'
  size?: 'compact' | 'normal'
  config?: ConfigRender
  tabindex?: number
  onVerify?: (response: string) => void
  handleIdCaptch?: (id: number) => void
}
const GCAPTCHA_ONLOAD_FUNCTION_NAME = '__gCaptchaOnLoad__'
declare global {
  interface Window {
    [GCAPTCHA_ONLOAD_FUNCTION_NAME]: () => void
  }
}

const GRECaptch: Component<GCaptchaProps> = (props) => {
  let captchaRef = new HTMLDivElement()
  const isApiReady = () => typeof window.grecaptcha !== 'undefined'
  const scriptUrl = () => generateScriptUrl(GCAPTCHA_ONLOAD_FUNCTION_NAME)
  const handleSubmit = (response: string) => {
    props.onVerify?.(response)
  }
  const handleExpire = () => {
    console.log('handleExpire')
  }
  const handleError = () => {
    console.log('handleError')
  }

  const renderCaptcha = () => {
    if (!captchaRef) return
    const renderParams: ConfigRender = Object.assign({
      'error-callback': handleError,
      'expired-callback': handleExpire,
      callback: handleSubmit
    }, props.config, {
      sitekey: props.siteKey,
      tabindex: props.tabindex ?? 0,
      theme: props.theme ?? 'light',
      size: props.size ?? 'normal'
    })

    const captchaId = grecaptcha.render(captchaRef, renderParams)
    props.handleIdCaptch?.(captchaId)
  }
  const handleOnLoad = () => {
    renderCaptcha()
  }
  createEffect(() => {
    if (!isApiReady()) {
      window[GCAPTCHA_ONLOAD_FUNCTION_NAME] = handleOnLoad
      createScriptLoader({ src: scriptUrl() })
    }
  })
  return (
    <form action="?" method="post">
      <div ref={captchaRef} id="html_element" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default GRECaptch
