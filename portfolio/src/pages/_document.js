import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var storageKey = 'dark';
                  var classNameDark = 'dark';
                  var classNameLight = 'light';
                  var d = document.querySelector('html');
                  function setClassOnDocumentBody(dark) {
                    d.classList.add(dark ? classNameDark : classNameLight);
                    d.classList.remove(dark ? classNameLight : classNameDark);
                  }
                  var localStorageTheme = null;
                  try {
                    localStorageTheme = localStorage.getItem(storageKey);
                  } catch (err) {}
                  var localStorageExists = localStorageTheme !== null;
                  if (localStorageExists) {
                    localStorageTheme = JSON.parse(localStorageTheme);
                  }
                  if (localStorageExists) {
                    setClassOnDocumentBody(localStorageTheme);
                  } else {
                    var isDarkMode = d.classList.contains(classNameDark);
                    localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
                  }
                })();
              `,
            }}
          />
        {/* <!-- Font Family - Major Mono Display --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
{/* <script src="https://unpkg.com/split-type"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script> */}
      </Head>
      <body className='font-dm-sans'>
        <Main />
        <NextScript />

        {/* <Script id="text-reveal" 
        >{
          `let text = new SplitType('#text');
          let characters = document.querySelectorAll('.char'); 

          for(let i=0; i<characters.length; i++) {
            characters[i].classList.add(translate-y-full)
          }
          gsap.to('.char', {
            y:0, 
            stagger:0.05, 
            delay: 0.02, 
            duration: 0.5
          })`
        }
        </Script> */}
      </body>
    </Html>
  );
}
