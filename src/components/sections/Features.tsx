import React from 'react';
import { 
  Users, 
  MessageSquare, 
  Workflow, 
  Send, 
  Bot, 
  Megaphone, 
  Brain, 
  Kanban, 
  Mic 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: 'Múltiplos atendentes',
      description: 'Gerencie vários operadores no mesmo número WhatsApp.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: MessageSquare,
      title: 'Gestão das conversas',
      description: 'Filtros, tags, atribuição e organização completa.',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Workflow,
      title: 'Departamentos',
      description: 'Distribuição automática por filas especializadas.',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Send,
      title: 'Disparo em massa',
      description: 'Envie mensagens para milhares de contatos.',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: Bot,
      title: 'Chatbot',
      description: 'Fluxos de boas-vindas e triagem automática.',
      color: 'bg-cyan-50 text-cyan-600'
    },
    {
      icon: Megaphone,
      title: 'Campanhas de disparo',
      description: 'Crie campanhas segmentadas e automatizadas.',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Brain,
      title: 'Integração com IA',
      description: 'ChatGPT para respostas assistidas inteligentes.',
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      icon: Kanban,
      title: 'Kanban de tickets',
      description: 'Acompanhe etapas e processos visualmente.',
      color: 'bg-pink-50 text-pink-600'
    },
    {
      icon: Mic,
      title: 'Transcrição de áudios',
      description: 'Converta mensagens de voz em texto automaticamente.',
      color: 'bg-yellow-50 text-yellow-600'
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-zap-neutral-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-manrope font-bold text-zap-charcoal mb-6">
            Funcionalidades
          </h2>
          <p className="text-xl text-zap-gray leading-relaxed">
            Descubra todas as ferramentas poderosas que vão transformar seu atendimento no WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="feature-card group">
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-manrope font-bold text-zap-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-zap-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;