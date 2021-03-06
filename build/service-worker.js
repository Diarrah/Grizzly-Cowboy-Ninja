importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js');
workbox.precaching
    .precacheAndRoute([
        {"revision":"d474ebc016a346cda811439a7c99d05e","url":"desktop-preview.jpg"},
        {"revision":"526c00895f4197129e1635d01b540c77","url":"favicon.svg"},
        {"revision":"9e8a0dffd6eb7a5f0837104c39931231","url":"icons/logo-192.svg"},
        {"revision":"418844579204ca331e73cbbb20a75c24","url":"icons/logo-512.svg"},
        {"revision":"d636b7cd1b9202adf2323bb4f2f9d54b","url":"icons/logo-64.svg"},
        {"revision":"276adf971092445d39ff10dfab08ee91","url":"index.html"},
        {"revision":"aebcd32702afbe3354a4c925bdceccbc","url":"static/css/2.96486951.chunk.css"},
        {"revision":"65a66cc86917c32f92300551b3875fb0","url":"static/css/main.f325ae83.chunk.css"},
        {"revision":"698cdda37d35cdd9ff83183ddf55ed86","url":"static/js/2.5f438f70.chunk.js"},
        {"revision":"97d5776ea51cea60e934978e88e1a9c5","url":"static/js/main.0bc8d36a.chunk.js"},
        {"revision":"d6f6a4f0eb56890682801076ea08cad6","url":"static/js/runtime-main.5dd4c29e.js"},
        {"revision":"1af730fd0584f34c9c8802a6457fd257","url":"static/media/bear.f47cbef4.svg"},
        {"revision":"1d4dea9c90ffb4ac084bdc0781dfce7b","url":"static/media/c-vs-n.c48137a7.svg"},
        {"revision":"b042bad26261ef2af3df61e118fe3f8c","url":"static/media/curve.cbbf868b.svg"},
        {"revision":"90e56f55a188b7ec34230d52cf9865fa","url":"static/media/g-vs-c.9e6c6c96.svg"},
        {"revision":"bc761dfc61fefb52011458baaaa598f6","url":"static/media/g-vs-n.4134089b.svg"},
        {"revision":"f9c987bc4903186bfd3c3e0ffe150919","url":"static/media/icon-blue.104d64f9.svg"},
        {"revision":"69a8c2e96b659b35a3760c79123be610","url":"static/media/icon-blue.8b57a6b1.svg"},
        {"revision":"8ce1e109bb43912192f5ba8dfcca005e","url":"static/media/icon-red.476e90a9.svg"},
        {"revision":"b8f17b8a4ea6793a93e0d29719a7a569","url":"static/media/icon-red.49686a70.svg"},
        {"revision":"bec2f9b3d60cb80987106bb49205c53f","url":"static/media/icon-yellow.3b1a5d7e.svg"},
        {"revision":"e5d0a7ffd4e049d65b603cc1dee786bd","url":"static/media/icon-yellow.3bd07db1.svg"},
        {"revision":"a5ba0a9bf8367162f7e9b1c008dcc8da","url":"static/media/image-rules.2b280252.svg"},
        {"revision":"8e6eeefcb94c2f0ab60440952c0304b1","url":"static/media/image-rules.b9c4b845.svg"},
        {"revision":"8e1aa7c5ab16cfe0bcd37a010b972ff1","url":"static/media/scissors.2911b085.svg"},
        {"revision":"622841a5aeeaa83426a88eb9ffac20a5","url":"static/media/triangle.73996ede.svg"}
    ]);