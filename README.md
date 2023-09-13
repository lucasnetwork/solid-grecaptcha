# Solid-gRecaptcha

> Package based on [solid-hcaptcha](https://github.com/Vexcited/solid-hcaptcha) using g-recaptcha of google


Sign up at [g-rcaptcha](https://www.google.com/recaptcha/) to get your sitekey today. **You need a sitekey to use this library.**

1. [Installation](#installation)
2. [Implementation](#implementation)
3. [References](#references)

## Installation
```bash
# npm
npm install solid-grecaptcha

# yarn
yarn add solid-grecaptcha
```

## Implementation

```tsx
import GRecaptcha from "solid-grecaptcha";

const App: Component = () => {

  return (
    <GRecaptcha
      sitekey=""
      onVerify={token => console.log(token)}
    />
  );
};

export default App;
```

## References

### Props

| Name | Values/Type | Required | Default | Description |
| ---- | ----------- | -------- | ------- | ----------- |
| `sitekey` | `string` | **Yes** | `-` | This is your sitekey, this allows you to load captcha. If you need a sitekey, please visit [g-rcaptcha](https://www.google.com/recaptcha/) , and sign up to get your sitekey. |
| `size` | `"normal" \| "compact"` | No | `"normal"` | This specifies the "size" of the component. g-recaptcha allows you to decide how big the component will appear on render, this always defaults to normal. |
| `theme` | `"light" \| "dark"` | No | `"light"` | g-recaptcha supports both a light and dark theme. If no theme is inherently set, the captcha will always default to light. |
| `tabindex` | `number` | No | `0` | Set the tabindex of the widget and popup. When appropriate, this can make navigation of your site more intuitive. |

### Events 

| Name | Params |  Description |
| ---- | ----------- | -------- |
| `onVerify` | `token:string`| Executed when user submits a successful response |
| `onError` | `-`|  Executed when recaptcha find an error |
| `onExpire` | `-`|  Executed when response expires and the user needs to re-verify |
