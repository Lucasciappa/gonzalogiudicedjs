export default async function (req, res) {

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
    try {
       let resp =  await transporter.sendMail(mailData)
       console.log(resp);
     
        return res.status(200).json({
            ok: true,
            msg: 'ok',
            body: resp
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            ok: false,
            msg: error
        })
    }

    
}