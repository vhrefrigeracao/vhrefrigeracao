"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    endereco: "",
    servico: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviarWhatsapp = () => {
    const texto =
      `*Novo Atendimento Solicitado*%0A%0A` +
      `👤 Nome: ${form.nome}%0A` +
      `📍 Endereço: ${form.endereco}%0A` +
      `🔧 Serviço: ${form.servico}%0A` +
      `📝 Mensagem: ${form.mensagem}`;

    const url = `https://wa.me/553198403605?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="contato">
      <div className="contato-container">
        <h2 className="text-metallic-blue-dark">Solicite Seu Atendimento</h2>

        <div className="form-grid">
          <input
            type="text"
            name="nome"
            placeholder="Seu Nome"
            onChange={handleChange}
          />

          <input
            type="text"
            name="endereco"
            placeholder="Seu Endereço"
            onChange={handleChange}
          />

          <select name="servico" onChange={handleChange}>
            <option value="">Selecione um Serviço</option>
            <option>Conserto de Geladeira</option>
            <option>Conserto de Freezer</option>
            <option>Ar Condicionado</option>
            <option>Máquina de Lavar</option>
          </select>

          <textarea
            name="mensagem"
            placeholder="Descreva seu problema..."
            rows={5}
            onChange={handleChange}
          />

          <button onClick={enviarWhatsapp}>Enviar para WhatsApp</button>
        </div>
      </div>
    </section>
  );
}
