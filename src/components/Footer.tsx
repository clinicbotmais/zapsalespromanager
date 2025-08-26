import React from 'react';
import Logo from './Logo';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Suporte',
      links: [
        { label: 'Fale com o Suporte', href: '#suporte' },
        { label: 'Abrir Chamado', href: '#chamado' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Documentação', href: '#docs' }
      ]
    },
    {
      title: 'Por Segmento',
      links: [
        { label: 'Serviços em geral', href: '#servicos' },
        { label: 'Contabilidade', href: '#contabilidade' },
        { label: 'Clínicas', href: '#clinicas' },
        { label: 'E-commerce', href: '#ecommerce' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Política de Privacidade', href: '#privacidade' },
        { label: 'Termos de Uso', href: '#termos' },
        { label: 'Política de Cookies', href: '#cookies' },
        { label: 'LGPD', href: '#lgpd' }
      ]
    }
  ];

  const socialLinks = [
    { icon: 'LinkedIn', href: '#linkedin' },
    { icon: 'Instagram', href: '#instagram' },
    { icon: 'YouTube', href: '#youtube' },
    { icon: 'Facebook', href: '#facebook' }
  ];

  return (
    <footer className="bg-zap-charcoal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Logo size="lg" showText={true} className="text-white" />
            
            <p className="text-gray-300 leading-relaxed">
              A plataforma completa para transformar seu atendimento no WhatsApp em uma máquina de vendas.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} className="text-primary" />
                <span className="text-sm">São Paulo, SP - Brasil</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="text-primary" />
                <span className="text-sm">(22) 99774-4478</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} className="text-primary" />
                <span className="text-sm">contato@zapsalespro.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-manrope font-bold text-lg text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2025 ZapSalesPro. Todos os direitos reservados.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={social.icon}
                >
                  <span className="text-xs font-bold">
                    {social.icon.charAt(0)}
                  </span>
                </a>
              ))}
            </div>

            {/* WhatsApp Contact */}
            <a
              href="https://wa.me/5522997744478?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20ZapSalesPro."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zap-whatsapp hover:bg-zap-whatsapp/90 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
            >
              <MessageCircle size={18} />
              <span className="font-medium text-sm">Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;