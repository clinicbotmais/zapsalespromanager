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
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-border">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-zap-charcoal">Dashboard ZapSalesPro</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Metrics Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-primary/10 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="text-primary" size={24} />
                    <div>
                      <p className="text-sm text-zap-gray">Conversas Hoje</p>
                      <p className="text-2xl font-bold text-zap-charcoal">847</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <Users className="text-blue-600" size={24} />
                    <div>
                      <p className="text-sm text-zap-gray">Atendentes</p>
                      <p className="text-2xl font-bold text-zap-charcoal">12</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="text-orange-600" size={24} />
                    <div>
                      <p className="text-sm text-zap-gray">Conversões</p>
                      <p className="text-2xl font-bold text-zap-charcoal">24%</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="text-purple-600" size={24} />
                    <div>
                      <p className="text-sm text-zap-gray">Vendas</p>
                      <p className="text-2xl font-bold text-zap-charcoal">R$ 18k</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart Mockup */}
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl p-4 h-32 flex items-end justify-between">
                <div className="bg-primary rounded h-16 w-8"></div>
                <div className="bg-primary/80 rounded h-20 w-8"></div>
                <div className="bg-primary/60 rounded h-12 w-8"></div>
                <div className="bg-primary rounded h-24 w-8"></div>
                <div className="bg-primary/70 rounded h-16 w-8"></div>
                <div className="bg-primary rounded h-28 w-8"></div>
                <div className="bg-primary/90 rounded h-20 w-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;