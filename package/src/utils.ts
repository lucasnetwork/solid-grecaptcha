export const generateScriptUrl = (onLoadFunctionName:string) => {
    const domain = "https://www.google.com/recaptcha/api.js";
    const url = new URL(domain);
    url.searchParams.set("onload", onLoadFunctionName);
    return url.toString();
};
