const Usuario = {

    name: 'felipe',
    edad: '21',
    email: 'felipebenavides03@gma'
}

document.write("<p>" + Usuario.name + "</p>")
document.write("<p>" + Usuario.edad + "</p>")
document.write("<p>" + Usuario.email + "</p>")

// obejtos destructurin

const { name, edad, email } = {

    name: 'luis ',
    edad: '21',
    email: 'felipebenavides03@gmail.com'
}

document.write("<p>" + name + "</p>")
document.write("<p>" + edad + "</p>")
document.write("<p>" + email + "</p>")