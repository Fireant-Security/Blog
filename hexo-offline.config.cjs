// offline config passed to workbox-build.
module.exports = {
    runtimeCaching: [
        {
          urlPattern: /^https:\/\/oss\.fireant\-sec\.team\/.*/,
          handler: "CacheFirst"
        },
        {
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/,
            handler: "CacheFirst"
        },
        {
            urlPattern: /^https:\/\/use\.fontawesome\.com\/.*/,
            handler: "CacheFirst"
        },
      ]
  }