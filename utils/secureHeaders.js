const helmet = require('helmet')

module.exports = function (app) {
    app.use(helmet.dnsPrefetchControl());
    app.use(helmet.expectCt());
    app.use(helmet.frameguard());
    app.use(helmet.hidePoweredBy());
    app.use(helmet.hsts());
    app.use(helmet.ieNoOpen());
    app.use(helmet.noSniff());
    app.use(helmet.permittedCrossDomainPolicies());
    app.use(helmet.xssFilter());

    app.use((req, res, next) => {
        res.setHeader('Content-Security-Policy', "default-src 'self' https://www.youtube-nocookie.com https://cdn.plyr.io https://noembed.com https://i.ytimg.com https://www.youtube.com https://fonts.gstatic.com https://cdn.jsdelivr.net; script-src 'self' https://cdn.socket.io https://cdn.plyr.io https://www.youtube.com https://cdn.jsdelivr.net; style-src 'self' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://fonts.googleapis.com; img-src 'self' https://i.ytimg.com data:")
    
        next()
    })
}