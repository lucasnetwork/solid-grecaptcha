export interface ConfigRender {
  /**
     * Unique ID used for verifying a valid hCaptcha Client
     */
  sitekey: string

  /**
     * Sets a predefined theme or takes a custom theming object.
     */
  theme?: 'light' | 'dark'

  /**
     * Size of the rendered checkbox.
     * Defaults to "normal".
     */
  size?: 'normal' | 'compact'

  /**
     * Set the tabindex of the checkbox and challenge. When appropriate, this can make navigation of your site more intuitive.
     */
  tabindex?: number

  /**
     * Callback function on successful captcha response, response token is passed back in function.
     */
  callback?: ((response: string) => void)

  /**
     * Callback function when user's successful response has expired.
     */
  'expired-callback'?: (() => void)

  /**
     * Callback function when greCaptcha has encountered an error.
     */
  'error-callback': () => void
}

export interface GCaptchaProps {
  siteKey: string
  theme?: 'dark' | 'light'
  size?: 'compact' | 'normal'
  config?: ConfigRender
  tabindex?: number
  onVerify?: (response: string) => void
  handleIdCaptch?: (id: number) => void
  onError?: () => void
  onExpire?: () => void
}
