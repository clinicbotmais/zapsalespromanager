import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Quais são as funcionalidades do multatendimento no WhatsApp?',
      answer: 'O ZapSalesPro permite que múltiplos atendentes utilizem o mesmo número de WhatsApp simultaneamente. Você pode gerenciar filas, distribuir conversas automaticamente por departamentos, acompanhar métricas em tempo real e manter histórico completo de todas as interações.'
    },
    {
      question: 'Meu número corre risco de ser bloqueado pelo WhatsApp?',
      answer: 'Não. O ZapSalesPro utiliza apenas APIs oficiais do WhatsApp Business, seguindo todas as diretrizes da plataforma. Nosso sistema respeita os limites de envio e boas práticas, garantindo a segurança do seu número.'
    },
    {
      question: 'Existe um limite de mensagens por dia?',
      answer: 'Os limites seguem as políticas do WhatsApp Business API. Números novos começam com 1.000 mensagens/24h, podendo aumentar gradualmente até 100.000+ com base no engajamento e qualidade das mensagens. Monitoramos esses limites em tempo real.'
    },
    {
      question: 'O sistema avisa quando o cliente está chamando?',
      answer: 'Sim! O ZapSalesPro possui notificações em tempo real via desktop, mobile e email. Você pode configurar alertas sonoros, notificações push e definir regras específicas para diferentes tipos de mensagens ou departamentos.'
    },
    {
      question: 'Posso usar chamadas de voz e vídeo?',
      answer: 'As chamadas de voz e vídeo dependem da API do WhatsApp Business. Atualmente, essas funcionalidades estão limitadas pela própria plataforma, mas oferecemos integração com outras ferramentas de comunicação para complementar o atendimento.'
    },
    {
      question: 'Como funciona o suporte e as atualizações?',
      answer: 'Oferecemos suporte técnico via WhatsApp, email e chat. As atualizações são automáticas e incluem novas funcionalidades, melhorias de segurança e correções. Clientes Enterprise têm suporte prioritário 24/7 e Success Manager dedicado.'
    },
    {
      question: 'Existe conexão por fileiras/departamentos?',
      answer: 'Sim! Você pode criar departamentos ilimitados (Vendas, Suporte, Financeiro, etc.) e configurar regras automáticas de distribuição. As conversas são direcionadas automaticamente com base em palavras-chave, horários, ou critérios personalizados.'
    },
    {
      question: 'Posso transcrever áudios? Como funciona?',
      answer: 'Sim! Nossa IA converte automaticamente mensagens de voz em texto. A transcrição é instantânea e fica salva no histórico da conversa, facilitando a busca, análise e acompanhamento. Funciona com qualquer idioma e sotaque.'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-manrope font-bold text-zap-charcoal mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-zap-gray leading-relaxed">
            Tire suas dúvidas sobre o ZapSalesPro
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="feature-card border-0"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-zap-charcoal hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zap-gray leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;