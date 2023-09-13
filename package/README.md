# Solid-gRecaptcha

> Package based on [solid-hcaptcha](https://github.com/Vexcited/solid-hcaptcha) using g-recaptcha of google



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