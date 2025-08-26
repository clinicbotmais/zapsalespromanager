import React from 'react';
import { ArrowRight, Users, Mic } from 'lucide-react';

const Highlights = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* First Highlight */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Users size={16} />
                Gestão inteligente
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-manrope font-bold text-zap-charcoal">
                Distribuição automática por departamentos
              </h3>
              
              <p className="text-xl text-zap-gray leading-relaxed">
                Encaminhamento inteligente para o time certo. Configure regras automáticas e garanta que cada cliente seja direcionado para o departamento mais adequado.
              </p>
              
              <div className="flex items-center gap-2 text-primary font-semibold">
                <span>Configurar departamentos</span>
                <ArrowRight size={20} />
              </div>
            </div>
            
            <div className="relative">
              {/* WhatsApp Interface Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl border border-border p-6 max-w-sm mx-auto">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">W</span>
                  </div>
                  <div>
                    <p className="font-semibold text-zap-charcoal">WhatsApp Business</p>
                    <p className="text-sm text-green-600">Online</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-2xl p-3 max-w-xs">
                    <p className="text-sm text-zap-charcoal">Olá! Preciso de ajuda com meu pedido</p>
                  </div>
                  
                  <div className="bg-primary/10 rounded-2xl p-3 max-w-xs ml-auto">
                    <p className="text-sm text-zap-charcoal">Redirecionando para vendas...</p>
                  </div>
                  
                  <div className="bg-primary rounded-2xl p-3 max-w-xs ml-auto">
                    <p className="text-sm text-white">Olá! Sou João do departamento de vendas. Como posso ajudar?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Second Highlight */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">
                <Mic size={16} />
                Tecnologia avançada
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-manrope font-bold text-zap-charcoal">
                Transcreva áudios em textos
              </h3>
              
              <p className="text-xl text-zap-gray leading-relaxed">
                Agilize o entendimento e o registro das conversas. Nossa IA converte automaticamente mensagens de voz em texto, facilitando o acompanhamento e análise.
              </p>
              
              <div className="flex items-center gap-2 text-purple-600 font-semibold">
                <span>Ver transcrição em ação</span>
                <ArrowRight size={20} />
              </div>
            </div>
            
            <div className="lg:order-1 relative">
              {/* Audio Transcription Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl border border-border p-6 max-w-sm mx-auto">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <Mic className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-zap-charcoal">Transcrição IA</p>
                    <p className="text-sm text-purple-600">Processando...</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Audio Message */}
                  <div className="bg-gray-100 rounded-2xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <Mic size={16} className="text-gray-600" />
                      </div>
                      <div className="flex-1 bg-gray-300 h-2 rounded-full">
                        <div className="bg-primary h-2 rounded-full w-3/4"></div>
                      </div>
                      <span className="text-xs text-gray-600">0:45</span>
                    </div>
                  </div>
                  
                  {/* Transcription */}
                  <div className="bg-purple-50 rounded-2xl p-4 border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-purple-600 uppercase tracking-wide">Transcrição</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-sm text-zap-charcoal italic">
                      "Oi, tudo bem? Gostaria de saber mais informações sobre os planos da empresa. Quando vocês podem me ligar?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;