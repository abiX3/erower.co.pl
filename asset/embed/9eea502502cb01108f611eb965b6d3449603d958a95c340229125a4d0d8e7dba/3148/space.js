(function () {
  const config = {"releaseUrl":"https://s3-eu-west-1.amazonaws.com/static.inteliwise.com/release/latest","embedUrl":"https://static.inteliwise.com/embed","installationId":"9eea502502cb01108f611eb965b6d3449603d958a95c340229125a4d0d8e7dba","spaceId":3148,"envs":{},"configFile":"config.json","coreStyle":"core.css","moduleStyle":"module.css","buttonStyle":"button.css"};

  (function() {
    ;
  })();

  const searchParams = new URLSearchParams(document.location.search);
  const customEnv = searchParams.get('iwEnv');
  const customUrls = config.envs[customEnv];

  if (customUrls) {
    config.releaseUrl = customUrls.releaseUrl;
    config.embedUrl = customUrls.embedUrl;
  }

  const s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = `${config.releaseUrl}/init-root.js`;
  document.body.appendChild(s);

  document.addEventListener('inteliwiseInitCoreReady', function() {
    window.inteliwiseAPI.__init_core &&
    window.inteliwiseAPI.__init_core(config);
  })
})();
