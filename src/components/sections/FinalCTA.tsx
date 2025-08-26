import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import LeadForm from '../LeadForm';
import { ArrowRight, Zap } from 'lucide-react';

const FinalCTA = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Icon */}
          <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Zap className="text-white" size={40} />
          </div>

          {/* Headline */}
          <h2 className="text-4xl lg:text-6xl font-manrope font-bold mb-6 leading-tight">
            Pronto para transformar seu atendimento?
          </h2>

          {/* Subtext */}
          <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Teste gratuito e comece a organizar seu time hoje mesmo. 
            Sem compromisso, sem cartão de crédito.
          </p>

          {/* CTA Button */}
          <div className="space-y-6">
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-6 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-200"
                >
                  Criar minha conta
                  <ArrowRight className="ml-2" size={24} />
                </Button>
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl font-bold text-zap-charcoal mb-4">
                    Comece seu teste gratuito
                  </DialogTitle>
                </DialogHeader>
                <LeadForm variant="cta" onClose={() => setIsFormOpen(false)} />
              </DialogContent>
            </Dialog>

            {/* Benefits List */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="font-medium">Teste por 7 dias grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="font-medium">Configuração em 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="font-medium">Suporte especializado</span>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm">
              🔒 Seus dados estão seguros conosco. Não compartilhamos informações com terceiros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;