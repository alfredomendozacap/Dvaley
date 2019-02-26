;
((d, c, f) => {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyByTgmJMQN2z4NvzclhLJKSIA1H4s00688",
        authDomain: "edfirebase-4cc01.firebaseapp.com",
        databaseURL: "https://edfirebase-4cc01.firebaseio.com",
        projectId: "edfirebase-4cc01",
        storageBucket: "edfirebase-4cc01.appspot.com",
        messagingSenderId: "429643374035"
    };
    f.initializeApp(config)

    const db = f.database(),
        contactsRef = db.ref().child('contactsDvalley'),
        contactForm = d.forms[0],
        fullName = d.getElementById('fullname'),
        email = d.getElementById('email'),
        phone = d.getElementById('phone'),
        cellPhone = d.getElementById('cellphone'),
        message = d.getElementById('message'),
        alert = d.getElementById('contactosAlerta')

    contactForm.addEventListener('submit', e => {
        e.preventDefault()
        contactsRef.push({
            nombre: fullName.value,
            correo: email.value,
            telefono: phone.value,
            celular: cellPhone.value,
            mensaje: message.value
        })
        contactForm.reset()
        let pa = d.createElement('p')
        pa.innerHTML = 'Se envió su mensaje correctamente,en breve nos comunicaremos con usted'
        alert.appendChild(pa)
    })
})(document,console.log,firebase)