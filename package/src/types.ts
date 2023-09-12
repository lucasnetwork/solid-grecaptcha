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
  size?: 'normal' | 'compact' | 'invisible'

  /**
     * Set a custom container for the challenge iframe by id or reference.
     */
  'challenge-container'?: HTMLElement | string

  /**
     * Language code as defined by ISO 639-1.
     * Defaults to the browser local language.
     * @see https://www.w3schools.com/tags/ref_language_codes.asp
     */
  hl?: string

  /**
     * See enterprise docs.
     */
  tplinks?: 'on' | 'off'

  /**
     * Set the tabindex of the checkbox and challenge. When appropriate, this can make navigation of your site more intuitive.
     */
  tabindex?: number

  /**
     * See enterprise docs.
     */
  custom?: boolean

  /**
     * Callback function on successful captcha response, response token is passed back in function.
     */
  callback?: ((response: string) => void)

  /**
     * Callback function when greCaptcha challenge is displayed.
     */
  'open-callback'?:  (() => void)

  /**
     * Callback function when greCaptcha challenge is hidden.
     */
  'close-callback'?:  (() => void)

  /**
     * Callback function when greCaptcha challenge has expired.
     */
  'chalexpired-callback'?:  (() => void)

  /**
     * Callback function when user's successful response has expired.
     */
  'expired-callback'?:  (() => void)

  /**
     * Callback function when greCaptcha has encountered an error.
     */
  'error-callback':  () => void
}
