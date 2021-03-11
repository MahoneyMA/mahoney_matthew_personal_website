import '../styles/globals.css'

if(typeof window !== "undefined"){
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
};
function MyApp({ Component, pageProps }) {


  return <Component {...pageProps} />
}

export default MyApp
