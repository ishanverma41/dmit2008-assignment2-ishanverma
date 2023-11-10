import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ReelRack: Explore and Purchase Videos</title>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        {/* <script>
          {`addEventListener("load", function () {
                setTimeout(hideURLbar, 0);
                }, false);

              function hideURLbar() {
                window.scrollTo(0, 1);
         }`}
        </script> */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" media="all"></link>
        <link href="/css/font-awesome.min.css" rel="stylesheet"></link>
        <link href="/css/style.css" rel='stylesheet' type='text/css' media="all"></link>
        <link href="//fonts.googleapis.com/css?family=Thasadith:400,700" rel="stylesheet"></link>
        <link href="//fonts.googleapis.com/css?family=Source+Sans+Pro:400,600" rel="stylesheet"></link>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
