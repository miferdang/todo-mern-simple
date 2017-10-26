/*eslint arrow-body-style: 0, max-len: 0 */
const indexPage = () => {
  const assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  return (`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Env Mern</title>
        <link rel='stylesheet'
          href='${process.env.NODE_ENV === 'production' ? assetsManifest['/app.css'] : '/style.css'}'/>
  	    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
      </head>
      <body>
        <div id="root"></div>
        <script
          src='${process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js'}'>
        </script>
        <script
          src='${process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js'}'>
        </script>
      </body>
    </html>
  `);
};

export default indexPage;
