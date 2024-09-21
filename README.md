```javascript

server:{
    port: 3000,
    proxy:{
    '/api':{
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite:(path) => path.replace(/^\/api/,''),
    }
}
        }



        // https://www.canva.com/p/templates/EAE7Sk9Xhn8-minimalist-professional-corporate-marketing-plan-charts-and-graphs-presentation/