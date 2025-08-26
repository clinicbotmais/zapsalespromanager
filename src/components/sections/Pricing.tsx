import React from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from '../ui/button';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Para quem está começando',
      connections: '1 conexão com WhatsApp',
      features: [
        'Multatendimento básico',
        'Chatbot simples',
        'Tags e organização',
        'Relatórios essenciais',
        'Suporte por email'
      ],
      cta: 'Contratar Starter',
      popular: false
    },
    {
      name: 'Pro',
      description: 'Para equipes em crescimento',
      connections: '2 conexões com WhatsApp',
      features: [
        'Tudo do Starter +',
        'Departamentos avançados',
        'Disparo em massa',
        'Campanhas automatizadas',
        'IA Assistida (ChatGPT)',
        'SLA e métricas',
        'Kanban de tickets',
        'Suporte prioritário'
      ],
      cta: 'Contratar Pro',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Para grandes operações',
      connections: '2+ conexões (customizável)',
      features: [
        'Tudo do Pro +',
        'Conexões ilimitadas',
        'Relatórios avançados',
        'API personalizada',
        'Suporte 24/7',
        'Onboarding dedicado',
        'Treinamento da equipe',
        'Success Manager'
      ],
      cta: 'Falar com Vendas',
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-20 bg-zap-neutral-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-manrope font-bold text-zap-charcoal mb-6">
            Nossos Planos
          </h2>
          <p className="text-xl text-zap-gray leading-relaxed">
            Escolha o plano ideal para o tamanho da sua operação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`feature-card relative ${
                plan.popular 
                  ? 'ring-2 ring-primary scale-105 shadow-2xl' 
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star size={16} fill="currentColor" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-manrope font-bold text-zap-charcoal mb-2">
                  {plan.name}
                </h3>
                <p className="text-zap-gray mb-4">{plan.description}</p>
                <p className="text-primary font-semibold">{plan.connections}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check 
                      size={20} 
                      className={`text-primary mt-0.5 flex-shrink-0 ${
                        feature.startsWith('Tudo do') ? 'text-zap-gray' : ''
                      }`} 
                    />
                    <span className={`text-sm ${
                      feature.startsWith('Tudo do') 
                        ? 'text-zap-gray font-medium' 
                        : 'text-zap-charcoal'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'btn-primary' 
                    : plan.name === 'Enterprise'
                    ? 'btn-outline'
                    : 'btn-outline'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-zap-gray">
            <span className="font-semibold">Sem fidelidade.</span> Cancelamento a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;