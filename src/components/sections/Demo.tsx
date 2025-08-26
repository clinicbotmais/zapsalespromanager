import React from 'react';
import { MessageSquare, Clock, Users, TrendingUp, Target, CheckCircle } from 'lucide-react';

const Demo = () => {
  return (
    <section id="plataforma" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-manrope font-bold text-zap-charcoal mb-6">
            Torne seu atendimento mais poderoso e eficiente
          </h2>
          <p className="text-xl text-zap-gray leading-relaxed">
            Visualize todas as métricas importantes, gerencie sua equipe e acompanhe o desempenho em tempo real com nossa plataforma intuitiva.
          </p>
        </div>

        {/* Dashboard Demo */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-border p-8 lg:p-12">
            {/* Dashboard Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-zap-charcoal mb-2">Painel de Controle</h3>
                <p className="text-zap-gray">Visão geral do seu atendimento</p>
              </div>
              <div className="flex gap-2">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  ● Online - 8 atendentes
                </span>
              </div>
            </div>

            {/* Main Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6">
                <MessageSquare className="text-primary mb-3" size={32} />
                <p className="text-sm text-zap-gray mb-1">Conversas Ativas</p>
                <p className="text-3xl font-bold text-zap-charcoal">127</p>
                <p className="text-sm text-green-600 mt-1">+12% hoje</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-25 rounded-2xl p-6">
                <Clock className="text-blue-600 mb-3" size={32} />
                <p className="text-sm text-zap-gray mb-1">Tempo Médio</p>
                <p className="text-3xl font-bold text-zap-charcoal">2.3min</p>
                <p className="text-sm text-green-600 mt-1">-15% hoje</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-25 rounded-2xl p-6">
                <Users className="text-orange-600 mb-3" size={32} />
                <p className="text-sm text-zap-gray mb-1">Fila de Espera</p>
                <p className="text-3xl font-bold text-zap-charcoal">8</p>
                <p className="text-sm text-orange-600 mt-1">Moderada</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-25 rounded-2xl p-6">
                <TrendingUp className="text-purple-600 mb-3" size={32} />
                <p className="text-sm text-zap-gray mb-1">Taxa de Conversão</p>
                <p className="text-3xl font-bold text-zap-charcoal">24.8%</p>
                <p className="text-sm text-green-600 mt-1">+3.2% hoje</p>
              </div>
            </div>

            {/* Attendance Queue */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-zap-charcoal mb-4 flex items-center gap-2">
                  <Target className="text-primary" size={20} />
                  Fila de Atendimento
                </h4>
                
                <div className="space-y-3">
                  {[
                    { name: 'Maria Silva', time: '2 min', department: 'Vendas', priority: 'Alta' },
                    { name: 'João Santos', time: '5 min', department: 'Suporte', priority: 'Média' },
                    { name: 'Ana Costa', time: '1 min', department: 'Financeiro', priority: 'Baixa' },
                  ].map((customer, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-zap-charcoal">{customer.name}</p>
                        <p className="text-sm text-zap-gray">{customer.department} • Aguardando {customer.time}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        customer.priority === 'Alta' ? 'bg-red-100 text-red-700' :
                        customer.priority === 'Média' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {customer.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-zap-charcoal mb-4 flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={20} />
                  Atendimentos Concluídos Hoje
                </h4>
                
                <div className="space-y-3">
                  {[
                    { agent: 'Carlos Mendes', count: 23, time: '1.8 min', satisfaction: '98%' },
                    { agent: 'Fernanda Lima', count: 19, time: '2.1 min', satisfaction: '96%' },
                    { agent: 'Ricardo Souza', count: 17, time: '2.4 min', satisfaction: '94%' },
                  ].map((agent, index) => (
                    <div key={index} className="bg-white rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-zap-charcoal">{agent.agent}</p>
                        <span className="text-lg font-bold text-primary">{agent.count}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-zap-gray">
                        <span>Tempo médio: {agent.time}</span>
                        <span className="text-green-600 font-medium">⭐ {agent.satisfaction}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;