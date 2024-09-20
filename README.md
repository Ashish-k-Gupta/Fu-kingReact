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