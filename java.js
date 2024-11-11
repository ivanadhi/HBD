function submit(){
    let user = document.getElementById('userPass')
    let main = document.getElementById('main')
    console.log('sukses')
    console.log(user.value)

    if (userPass.value == 123){
        alert('BERHASIL LOGIN')
        window.location.href = 'main.html'
    } else {
        alert('PASSWORD SALAH')
    }

}