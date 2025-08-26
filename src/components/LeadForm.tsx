import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';

interface LeadFormProps {
  variant?: 'hero' | 'cta';
  onClose?: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ variant = 'hero', onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria integrado com o backend
    toast({
      title: "Obrigado pelo interesse!",
      description: "Em breve entraremos em contato.",
    });
    
    if (onClose) onClose();
    
    // Reset form
    setFormData({ name: '', email: '', whatsapp: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <Input
        name="name"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
        required
        className="rounded-xl"
      />
      <Input
        name="email"
        type="email"
        placeholder="Seu e-mail"
        value={formData.email}
        onChange={handleChange}
        required
        className="rounded-xl"
      />
      <Input
        name="whatsapp"
        placeholder="Seu WhatsApp"
        value={formData.whatsapp}
        onChange={handleChange}
        required
        className="rounded-xl"
      />
      <Button 
        type="submit" 
        className={`w-full btn-primary ${variant === 'cta' ? 'py-4 text-lg' : ''}`}
      >
        {variant === 'hero' ? 'Criar minha conta' : 'Começar agora'}
      </Button>
      
      {variant === 'hero' && (
        <p className="text-sm text-zap-gray-light text-center">
          🔒 Sem risco — teste grátis
        </p>
      )}
    </form>
  );
};

export default LeadForm;