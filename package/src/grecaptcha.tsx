import { type Component, onMount, createSignal } from 'solid-js'
import { createScriptLoader } from '@solid-primitives/script-loader'
import { generateScriptUrl } from './utils'
import { type GCaptchaProps, type ConfigRender } from './types'

const GCAPTCHA_ONLOAD_FUNCTION_NAME = '__gCaptchaOnLoad__'
declare global {
  interface Window {
    [GCAPTCHA_ONLOAD_FUNCTION_NAME]: () => void
  }
}

const GRECaptch: Component<GCaptchaProps> = (props) => {
  let captchaRef: HTMLDivElement | undefined
  const isApiReady = () => typeof window.grecaptcha !== 'undefined'
  const scriptUrl = () => generateScriptUrl(GCAPTCHA_ONLOAD_FUNCTION_NAME)
  const [, setCaptchaId] = createSignal<number>()
  const handleSubmit = (response: string) => {
    props.onVerify?.(response)
  }

  const renderCaptcha = () => {
    if (!captchaRef) return
    const renderParams: ConfigRender = Object.assign({
      'error-callback': props.onError,
      'expired-callback': props.onExpire,
      callback: handleSubmit
    }, {
      sitekey: props.siteKey,
      tabindex: props.tabindex ?? 0,
      theme: props.theme ?? 'light',
      size: props.size ?? 'normal'
    })

    const id = grecaptcha.render(captchaRef, renderParams)
    setCaptchaId(id)
  }
  const handleOnLoad = () => {
    renderCaptcha()
  }
  onMount(() => {
    if (!isApiReady()) {
      window[GCAPTCHA_ONLOAD_FUNCTION_NAME] = handleOnLoad
      createScriptLoader({ src: scriptUrl() })
    } else {
      renderCaptcha()
    }
  })
  return (
    <form action="?" method="post">
      <div ref={captchaRef} id="html_element" />
      <br />
      <input hidden type="submit" value="Submit" />
    </form>
  )
}

export default GRECaptch
