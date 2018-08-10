const config = require('config');
const url = require('url');


function buildUrl () {
  console.log(config);
  let baseUrl = config.get("url.google");
  console.log(baseUrl);
  // const appUrl = url.format(
  //   Object.assign(
  //     {},
  //     baseUrl,
  //     {pathname},
  //     {query}
  //   )
  // );
  const appUrl = url.format(
    Object.assign(
      baseUrl
    )
  );

  return appUrl
}

module.exports = buildUrl;
