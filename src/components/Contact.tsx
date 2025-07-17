import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Instagram, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const [ref, hasBeenInView] = useInView({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es requerido'),
    email: Yup.string().email('Email inválido').required('El email es requerido'),
    phone: Yup.string(),
    message: Yup.string().required('El mensaje es requerido').min(10, 'El mensaje debe tener al menos 10 caracteres'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
        const templateParams = {
          to_name: 'Cybernemesis',
          from_name: values.name,
          from_email: values.email,
          phone: values.phone,
          message: values.message,
        };

        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );


        setSubmitStatus('success');
        resetForm();
      } catch {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <section id="contact" className="py-20 bg-[#131521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${hasBeenInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contáctanos <span className="bg-gradient-to-r from-cyan-bright to-green-aqua bg-clip-text text-transparent">Ahora</span>
          </h2>
          <p className="text-xl text-light-blue-gray max-w-3xl mx-auto">
            Estamos listos para ayudarte a proteger y automatizar tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 ${hasBeenInView ? 'animate-slideInLeft' : ''}`}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-cyan-bright" />
                  <span className="text-light-gray">cybernemesisgmc@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-green-aqua" />
                  <span className="text-light-gray">320 773 0532</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-light-blue-gray" />
                  <span className="text-light-gray">Montería, Córdoba</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Instagram className="h-6 w-6 text-cyan-bright" />
                  <a 
                    href="https://www.instagram.com/cybernemesis2025/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-light-gray hover:text-cyan-bright transition-colors duration-200"
                  >
                    @cybernemesis2025
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">
                ¿Por qué elegirnos?
              </h4>
              <ul className="space-y-3 text-light-gray">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-aqua mt-0.5 flex-shrink-0" />
                  <span>Soluciones personalizadas para cada cliente</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-aqua mt-0.5 flex-shrink-0" />
                  <span>Tecnología de punta accesible</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-aqua mt-0.5 flex-shrink-0" />
                  <span>Soporte técnico especializado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-aqua mt-0.5 flex-shrink-0" />
                  <span>Experiencia en ciberseguridad e IA</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${hasBeenInView ? 'animate-slideInRight' : ''}`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Envíanos un mensaje
              </h3>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-aqua/10 border border-green-aqua/20 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-aqua" />
                  <span className="text-green-aqua">¡Mensaje enviado exitosamente! Te contactaremos pronto.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  <span className="text-red-400">Error al enviar el mensaje. Por favor, intenta nuevamente.</span>
                </div>
              )}

              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-light-blue-gray mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-light-gray focus:outline-none focus:ring-2 focus:ring-cyan-bright focus:border-transparent transition-all duration-200"
                    placeholder="Tu nombre completo"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="mt-1 text-sm text-red-400">{formik.errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-light-blue-gray mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-light-gray focus:outline-none focus:ring-2 focus:ring-cyan-bright focus:border-transparent transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="mt-1 text-sm text-red-400">{formik.errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-light-blue-gray mb-2">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-light-gray focus:outline-none focus:ring-2 focus:ring-cyan-bright focus:border-transparent transition-all duration-200"
                    placeholder="320 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-light-blue-gray mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-light-gray focus:outline-none focus:ring-2 focus:ring-cyan-bright focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="mt-1 text-sm text-red-400">{formik.errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-bright to-green-aqua text-blue-dark-nearly-black py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-bright/25 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-dark-nearly-black"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;