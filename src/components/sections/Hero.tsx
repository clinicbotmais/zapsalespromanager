import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import LeadForm from '../LeadForm';
import { BarChart3, Users, MessageSquare, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="inicio" className="py-20 lg:py-32 bg-gradient-to-br from-background via-zap-neutral-light/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-manrope font-bold text-zap-charcoal leading-tight">
                Vários atendentes em um único número de
                <span className="text-primary"> WhatsApp</span>
              </h1>
              
              <p className="text-xl text-zap-gray leading-relaxed max-w-2xl">
                Organize sua equipe, responda mais rápido e transforme conversas em vendas com o ZapSalesPro.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Planos
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline text-lg px-8 py-4"
                onClick={() => document.getElementById('plataforma')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer a Plataforma
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-zap-gray">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="font-medium">Sem risco — teste grátis</span>
            </div>
          </div>

          {/* Right Side - Dashboard Mockup */}
          <div className="relative animate-fade-in">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-border hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-zap-charcoal">Dashboard ZapSalesPro</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse animation-delay-100"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse animation-delay-200"></div>
                </div>
              </div>

              {/* Metrics Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-primary/10 rounded-2xl p-4 hover:bg-primary/20 transition-all duration-300 group hover:scale-105 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="text-primary group-hover:scale-110 transition-transform duration-300" size={24} />
                    <div>
                      <p className="text-sm text-zap-gray">Conversas Hoje</p>
                      <p className="text-2xl font-bold text-zap-charcoal animate-[counter_2s_ease-out]">847</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-2xl p-4 hover:bg-blue-100 transition-all duration-300 group hover:scale-105 hover:shadow-lg animation-delay-100">
                  <div className="flex items-center gap-3">
                    <Users className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                    <div>
                      <p className="text-sm text-zap-gray">Atendentes</p>
                      <p className="text-2xl font-bold text-zap-charcoal animate-[counter_2s_ease-out_0.2s_both]">12</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 rounded-2xl p-4 hover:bg-orange-100 transition-all duration-300 group hover:scale-105 hover:shadow-lg animation-delay-200">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="text-orange-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                    <div>
                      <p className="text-sm text-zap-gray">Conversões</p>
                      <p className="text-2xl font-bold text-zap-charcoal animate-[counter_2s_ease-out_0.4s_both]">24%</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-2xl p-4 hover:bg-purple-100 transition-all duration-300 group hover:scale-105 hover:shadow-lg animation-delay-300">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="text-purple-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                    <div>
                      <p className="text-sm text-zap-gray">Vendas</p>
                      <p className="text-2xl font-bold text-zap-charcoal animate-[counter_2s_ease-out_0.6s_both]">R$ 18k</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart Mockup */}
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl p-4 h-32 flex items-end justify-between overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent animate-[shimmer_3s_ease-in-out_infinite]"></div>
                <div className="bg-primary rounded h-16 w-8 animate-[grow_1.5s_ease-out_0.1s_both] hover:bg-primary-dark transition-colors duration-300 relative z-10 shadow-lg hover:shadow-primary/50"></div>
                <div className="bg-primary/80 rounded h-20 w-8 animate-[grow_1.5s_ease-out_0.2s_both] hover:bg-primary transition-colors duration-300 relative z-10 shadow-lg hover:shadow-primary/50"></div>
                <div className="bg-primary/60 rounded h-12 w-8 animate-[grow_1.5s_ease-out_0.3s_both] hover:bg-primary/80 transition-colors duration-300 relative z-10 shadow-lg hover:shadow-primary/50"></div>
                <div className="bg-primary rounded h-24 w-8 animate-[grow_1.5s_ease-out_0.4s_both] hover:bg-primary-dark transition-colors duration-300 relative z-10 shadow-lg hover:shadow-primary/50"></div>
                <div className="bg-primary/70 rounded h-16 w-8 animate-[grow_1.5s_ease-out_0.5s_both] hover:bg-primary transition-colors duration-300 relative z-10 shadow-lg hover:shadow-primary/50"></div>
                <div className="bg-primary rounded h-28 w-8 animate-[grow_1.5s_ease-out_0.6s_both] hover:bg-primary-dark transition-colors duration-300 relative z-10 shadow-lg hover:shadow-primary/50"></div>
                <div className="bg-primary/90 rounded h-20 w-8 animate-[grow_1.5s_ease-out_0.7s_both] hover:bg-primary transition-colors duration-300 relative z-10 shadow-lg hover:shadow-primary/50"></div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-[float_3s_ease-in-out_infinite]"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/10 rounded-full animate-[float_4s_ease-in-out_infinite_reverse]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;