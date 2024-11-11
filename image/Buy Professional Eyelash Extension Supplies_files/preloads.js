
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.e4d80da8650062fd0376.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2579.latest.en.f0a9ffdb6eaedcc05dd5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5927.latest.en.a73146dcbf67c395149d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9180.latest.en.84180e58b327a9a672f8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.e15ac6f1c861d5c2dbe6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3912.latest.en.5ceaef5ee1dd7e3346d2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3272.latest.en.dac37c5715e9bf3b9979.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4766.latest.en.a77acf19aa8a57301bdb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/7467.latest.en.f8b8e0e5e3bf35edb81c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/254.latest.en.e729cacff21ec050bb08.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1709.latest.en.77d3fc53d9a0c74f169b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6714.latest.en.6fb5ab6c5915e14fed01.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9045.latest.en.14d0ef2d027c32d67520.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.53afb0afb933f4b28227.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/2579.latest.en.1f713ea41773dae8a669.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.2e0eaac22a5cb50aa5d6.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.en.2e09285a536b15d91085.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0441/9482/4358/files/black_5f8a6c67-5dd5-4a39-937e-9f34fc19a133_x320.jpg?v=1614297212"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  