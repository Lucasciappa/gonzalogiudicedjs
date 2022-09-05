export default function (req, res) {

    require('dotenv').config()
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'neucristtest@gmail.com',
            pass: process.env.password,
        },
        secure: true,
    })
    const mailData = {
        from: 'neucristtest@gmail.com', 
        to: 'info@gonzalogiudice.com.ar',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `
        <div>Consulta de disponibilidad</div>
        <p>Nombre: ${req.body.name}</p>
        <div>
        <p>Día: ${req.body.dia}</p>
        <p>Mes: ${req.body.mes}</p>
        <p>Año: ${req.body.anio}</p>
        </div>
        <div>
        <p>Salón: ${req.body.evento}</p>
        <p>Cantidad de invitados: ${req.body.personas}</p>
        <p>Teléfono de contacto: ${req.body.phone}</p>
        </div>
        <div>Mensaje: ${req.body.message}</div>
        <p>Sent from: ${req.body.email}</p>
        `
    }
    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })

    res.status(200)
    res.send('success')
}