import React from 'react'

const ContactForm = () => {
  return (
    <section className='h-full max-w-3xl mx-auto bg-primary-black py-5'>

      <h3 className='text-primary-gray2 text-center text-3xl py-4'>Hacé tu consulta</h3>
      <div className='flex flex-col gap-5 p-4'>

        <div className='flex flex-col md:items-center gap-5 md:flex-row md:justify-between'>
          <select className="border border-primary-white bg-primary-black text-primary-gray2 text-lg py-1 px-2 focus:border-none focus:ring rounded outline-none ring-primary-blue md:w-4/12" id="dia" name="dia">
            <option value="Día" defaultValue="">Día</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>

          <select className='border border-primary-white bg-primary-black text-primary-gray2 text-lg py-1 px-2 focus:border-none focus:ring rounded outline-none ring-primary-blue md:w-4/12' id="mes" name="mes">
            <option value="Mes" defaultValue="">Mes</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>

          <select className='border border-primary-white bg-primary-black text-primary-gray2 text-lg py-1 px-2 focus:border-none focus:ring rounded outline-none ring-primary-blue md:w-4/12' id="anio" name="anio">
            <option value="Año" defaultValue="">Año</option>
            <option value="2021">2022</option>
            <option value="2022">2023</option>
            <option value="2023">2024</option>
          </select>
        </div>

        <div className='flex flex-col md:items-center gap-5 md:flex-row md:justify-between'>

          <input className="border border-primary-white bg-primary-black text-primary-gray2 text-lg py-1 px-2 focus:border-none focus:ring rounded outline-none ring-primary-blue md:w-6/12" name="evento" id="evento" placeholder="Salón" type="text" />

          <input className="border border-primary-white bg-primary-black text-primary-gray2 text-lg py-1 px-2 focus:border-none focus:ring rounded outline-none ring-primary-blue md:w-6/12" name="personas" id="personas" placeholder="Cantidad de invitados" type="text" />

        </div>

        <div className='flex flex-col md:items-center gap-5 md:flex-row md:justify-between'>

        <input className="border border-primary-white bg-primary-black text-primary-gray2 text-lg py-1 px-2 focus:border-none focus:ring rounded outline-none ring-primary-blue md:w-4/12" id="name" name="name" placeholder="Nombre y Apellido" type="text" />

        <input className="border border-primary-white bg-primary-black text-primary-gray2 text-lg py-1 px-2 focus:border-none focus:ring rounded outline-none ring-primary-blue md:w-4/12" name="correo" id="correo" placeholder="Email" type="text" />

        <input className="border border-primary-white bg-primary-black text-primary-gray2 text-lg py-1 px-2 focus:border-none focus:ring rounded outline-none ring-primary-blue md:w-4/12" name="phone" id="phone" placeholder="Teléfono" type="number" />

        </div>

        <textarea className="border border-primary-white bg-primary-black text-primary-gray2 text-lg py-1 px-2 h-28 focus:border-none focus:ring rounded outline-none ring-primary-blue" id="message" name="message" placeholder="Mensaje"></textarea>

        <div className="flex flex-col gap-3 mx-auto max-w-lg py-3">
          <button
            type="submit"
            className="bg-primary-blue hover:bg-primary-gray w-32 active:bg-primary-blue focus:ring rounded outline-none ring-primary-blue-hover text-primary-white text-lg rounded-2xl outline-none transition duration-100 px-8 py-2">
            Enviar
          </button>
        </div>

      </div>
    </section>
  )
}

export default ContactForm