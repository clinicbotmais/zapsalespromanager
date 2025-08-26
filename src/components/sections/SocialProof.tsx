import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  const clients = [
    'TechCorp', 'SalesMax', 'ServicePro', 'GrowthCo', 'LeadGen', 'ChatFlow'
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Gerente de Vendas',
      company: 'TechCorp',
      rating: 5,
      comment: 'Aumentamos nossa conversão em 40% no primeiro mês. Simplesmente incrível!'
    },
    {
      name: 'João Silva',
      role: 'CEO',
      company: 'ServicePro',
      rating: 5,
      comment: 'Equipe organizada, clientes satisfeitos. O ZapSalesPro transformou nosso atendimento completamente.'
    },
    {
      name: 'Ana Costa',
      role: 'Coordenadora',
      company: 'LeadGen',
      rating: 5,
      comment: 'Interface intuitiva e suporte excepcional. Recomendo para qualquer empresa séria.'
    }
  ];

  return (
    <section className="py-20 bg-zap-neutral-light/30">
      <div className="container mx-auto px-4">
        
        {/* Client Logos */}
        <div className="text-center mb-16">
          <p className="text-zap-gray mb-8 font-medium">
            Empresas que confiam no ZapSalesPro
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-xl px-6 py-4 shadow-sm border border-border"
              >
                <span className="font-semibold text-zap-charcoal text-lg">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-manrope font-bold text-zap-charcoal mb-6">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="feature-card text-center group">
              <Quote className="text-primary mx-auto mb-4 opacity-50" size={32} />
              
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-zap-charcoal mb-6 italic leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-primary text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <p className="font-semibold text-zap-charcoal">
                  {testimonial.name}
                </p>
                <p className="text-sm text-zap-gray">
                  {testimonial.role} • {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;