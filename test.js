fetch("http://127.0.0.1:9999/avail")
.then(res => 
    {
        return res.json()
    })
.then(data =>{
    console.log(data)
})