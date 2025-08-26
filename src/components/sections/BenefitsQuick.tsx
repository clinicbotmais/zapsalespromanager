import React from 'react';
import { Users, Send, BarChart } from 'lucide-react';

const BenefitsQuick = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Múltiplos atendentes e equipes',
      description: 'Gerencie vários atendentes conectados ao mesmo número.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Send,
      title: 'Disparo em massa',
      description: 'Envie campanhas e fluxos automáticos com tags e segmentos.',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: BarChart,
      title: 'Mensuração da operação',
      description: 'Métricas de desempenho, SLAs e relatórios.',
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-zap-neutral-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-manrope font-bold text-zap-charcoal mb-4">
            Potencialize o atendimento da sua empresa no WhatsApp!
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="feature-card text-center group">
                <div className={`w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-manrope font-bold text-zap-charcoal mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zap-gray leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsQuick;